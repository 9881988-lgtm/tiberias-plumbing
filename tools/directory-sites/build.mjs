import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { baseUrl, common, listingOverrides, locales, sites } from "./site-content.mjs";
import { localMacArticles } from "./articles-localmac.mjs";
import { venueArticles } from "./articles-venues.mjs";
import { kitchenArticles } from "./articles-kitchens.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const published = "2026-08-14";
const articleSets = {
  "localmac-guide": localMacArticles,
  "open-table-venues": venueArticles,
  "kitchen-hourly": kitchenArticles
};
const siteList = Object.values(sites);

const articleLabels = {
  en: { takeaways: "What to remember", conclusion: "Bottom line", home: "Home", guides: "Guides", directory: "Directory" },
  es: { takeaways: "Ideas clave", conclusion: "En resumen", home: "Inicio", guides: "Guías", directory: "Directorio" },
  ru: { takeaways: "Что важно запомнить", conclusion: "Итог", home: "Главная", guides: "Гайды", directory: "Каталог" },
  he: { takeaways: "מה חשוב לזכור", conclusion: "השורה התחתונה", home: "ראשי", guides: "כתבות", directory: "מדריך" }
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeXml(value = "") {
  return escapeHtml(value);
}

function jsonLd(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

function ensureDir(file) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
}

function write(relativeFile, value) {
  const file = path.join(root, relativeFile);
  ensureDir(file);
  fs.writeFileSync(file, value);
}

function loadBaseConfig(site) {
  const source = fs.readFileSync(path.join(root, site.path, "data.js"), "utf8");
  const context = { window: {} };
  vm.runInNewContext(source, context, { filename: `${site.path}/data.js` });
  return JSON.parse(JSON.stringify(context.window.DIRECTORY_CONFIG));
}

function localeDir(site, locale) {
  return locale === "en" ? site.path : `${site.path}/${locale}`;
}

function guidesDir(site, locale) {
  return `${localeDir(site, locale)}/guides`;
}

function articleDir(site, locale, slug) {
  return `${localeDir(site, locale)}/articles/${slug}`;
}

function canonicalFor(site, locale, kind = "home", slug = "") {
  const folder = kind === "home" ? localeDir(site, locale) : kind === "guides" ? guidesDir(site, locale) : articleDir(site, locale, slug);
  return `${baseUrl}/${folder}/`;
}

function relativeHref(fromDir, toDir) {
  const relative = path.posix.relative(fromDir, toDir);
  return relative ? `${relative}/` : "./";
}

function relativeFile(fromDir, target) {
  return path.posix.relative(fromDir, target) || path.posix.basename(target);
}

function allAlternates(site, kind, slug = "") {
  const links = Object.entries(locales).map(([locale, meta]) =>
    `<link rel="alternate" hreflang="${meta.code}" href="${canonicalFor(site, locale, kind, slug)}" />`
  );
  links.push(`<link rel="alternate" hreflang="x-default" href="${canonicalFor(site, "en", kind, slug)}" />`);
  return links.join("\n    ");
}

function pageLanguageMenu(site, locale, fromDir, kind, slug = "") {
  const links = Object.entries(locales).map(([candidate, meta]) => {
    const target = kind === "home" ? localeDir(site, candidate) : kind === "guides" ? guidesDir(site, candidate) : articleDir(site, candidate, slug);
    return `<a href="${relativeHref(fromDir, target)}" hreflang="${meta.code}"${candidate === locale ? ' aria-current="page"' : ""}>${escapeHtml(meta.label)}</a>`;
  }).join("");
  return `<details class="language-switcher"><summary aria-label="${escapeHtml(common[locale].language)}"><span>${escapeHtml(common[locale].language)}</span>${locales[locale].short}</summary><div class="language-switcher__menu">${links}</div></details>`;
}

function colorStyle(site) {
  const c = site.colors;
  return `:root{--surface-soft:${c.surface};--accent:${c.accent};--accent-strong:${c.strong};--accent-soft:${c.soft};--signal:${c.signal};--header:${c.header};--hero-overlay:${c.overlay}}`;
}

function head({ site, locale, title, description, canonical, kind, slug = "", currentDir, schema }) {
  const meta = locales[locale];
  const hero = `${baseUrl}/${site.path}/assets/hero.jpg`;
  return `<!doctype html>
<html lang="${meta.code}" dir="${meta.dir}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
    <meta name="theme-color" content="${site.colors.header}" />
    <link rel="canonical" href="${canonical}" />
    ${allAlternates(site, kind, slug)}
    <link rel="alternate" type="application/rss+xml" title="${escapeHtml(site.brand)} guides" href="${baseUrl}/${site.path}/feed.xml" />
    <meta property="og:type" content="${kind === "article" ? "article" : "website"}" />
    <meta property="og:site_name" content="${escapeHtml(site.brand)}" />
    <meta property="og:locale" content="${meta.code}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${hero}" />
    <meta property="og:image:alt" content="${escapeHtml(site.imageAlt[locale])}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${hero}" />
    <link rel="stylesheet" href="${relativeFile(currentDir, "directory-shared/directory.css")}?v=20260814c" />
    <style>${colorStyle(site)}</style>
    <script type="application/ld+json">${jsonLd(schema)}</script>
  </head>`;
}

function header(site, locale, currentDir, kind = "home", slug = "") {
  const c = common[locale];
  const home = localeDir(site, locale);
  const guides = guidesDir(site, locale);
  const other = siteList.filter((candidate) => candidate.path !== site.path)[0];
  const subject = encodeURIComponent(`${site.brand}: verified listing`);
  return `<header class="topbar">
    <a class="brand" href="${relativeHref(currentDir, home)}"><span class="brand-mark">${site.mark}</span><span>${escapeHtml(site.brand)}</span></a>
    <nav aria-label="${escapeHtml(c.navDirectory)}">
      <a href="${relativeHref(currentDir, home)}#directory">${escapeHtml(c.navDirectory)}</a>
      <a href="${relativeHref(currentDir, guides)}">${escapeHtml(c.navJournal)}</a>
      <a href="${relativeHref(currentDir, localeDir(other, locale))}">${escapeHtml(other.brand)}</a>
      ${pageLanguageMenu(site, locale, currentDir, kind, slug)}
      <a class="button button--primary" href="mailto:9881988@gmail.com?subject=${subject}">${escapeHtml(site.content[locale].navCta)}</a>
    </nav>
  </header>`;
}

function footer(site, locale, currentDir) {
  const c = common[locale];
  const cross = siteList.filter((candidate) => candidate.path !== site.path)
    .map((candidate) => `<a href="${relativeHref(currentDir, localeDir(candidate, locale))}">${escapeHtml(candidate.brand)}</a>`).join(" · ");
  return `<footer class="site-footer"><div class="site-footer__inner"><div><strong>${escapeHtml(site.brand)}</strong><p>${escapeHtml(site.content[locale].footer)}</p></div><p>${cross}<br /><a href="${relativeHref(currentDir, guidesDir(site, locale))}">${escapeHtml(c.allGuides)}</a> · <a href="${relativeHref(currentDir, localeDir(site, locale))}">${escapeHtml(c.backDirectory)}</a></p></div></footer>`;
}

function localizedConfig(base, site, locale) {
  const content = site.content[locale];
  const config = JSON.parse(JSON.stringify(base));
  config.key = `${site.key}:${locale}`;
  config.title = site.brand;
  config.ui = common[locale].ui;
  config.sourceButton = content.sourceButton;
  config.facets = config.facets.map((facet) => {
    const local = content.filters[facet.key];
    const labels = local?.[2] || {};
    return {
      ...facet,
      label: local?.[0] || facet.label,
      allLabel: local?.[1] || facet.allLabel,
      options: facet.options.map((option) => {
        const value = typeof option === "string" ? option : option.value;
        const fallback = typeof option === "string" ? option : option.label;
        return { value, label: labels[value] || fallback };
      })
    };
  });
  config.factKeys = config.factKeys.map((fact) => ({ ...fact, label: content.facts[fact.key] || fact.label }));
  const overrides = listingOverrides[site.key]?.[locale] || {};
  config.listings = config.listings.map((listing) => {
    const translated = overrides[listing.id];
    if (!translated) return listing;
    return { ...listing, location: translated[0], summary: translated[1], tags: translated[2], facts: translated[3] };
  });
  config.matcher = {
    fields: config.facets.slice(0, 3).map((facet) => ({ key: facet.key, label: facet.label, placeholder: facet.allLabel }))
  };
  return config;
}

function listingCard(listing, config) {
  const tags = listing.tags.slice(0, 3).map((tag, index) => `<span class="tag${index === 0 ? " tag--signal" : ""}">${escapeHtml(tag)}</span>`).join(" ");
  const facts = config.factKeys.map((fact) => `<div><dt>${escapeHtml(fact.label)}</dt><dd>${escapeHtml(listing.facts[fact.key] || config.ui.confirm)}</dd></div>`).join("");
  return `<article class="listing-card" data-id="${escapeHtml(listing.id)}"><div><div class="listing-card__header"><div><h3>${escapeHtml(listing.name)}</h3><p class="listing-card__location">${escapeHtml(listing.location)}</p></div><div>${tags}</div></div><p class="listing-card__summary">${escapeHtml(listing.summary)}</p><dl class="facts">${facts}</dl><div class="listing-card__actions"><a class="button button--primary" href="${escapeHtml(listing.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(config.sourceButton)}</a></div></div><div class="listing-card__save"><button class="button button--secondary save-button" type="button" data-save="${escapeHtml(listing.id)}"><span>${escapeHtml(config.ui.save)}</span></button><label class="compare-check"><input type="checkbox" data-compare="${escapeHtml(listing.id)}" /> ${escapeHtml(config.ui.compare)}</label></div></article>`;
}

function articleCard(site, article, locale, fromDir, index) {
  const copy = article.translations[locale];
  const href = relativeHref(fromDir, articleDir(site, locale, article.slug));
  const image = relativeFile(fromDir, `${site.path}/assets/hero.jpg`);
  return `<article class="article-card"><img src="${image}" alt="" loading="lazy" style="object-position:${index === 0 ? "35%" : index === 1 ? "62%" : "78%"} center" /><div class="article-card__content"><p>${article.minutes} ${escapeHtml(common[locale].minRead)}</p><h3>${escapeHtml(copy.title)}</h3><a href="${href}">${escapeHtml(common[locale].read)} →</a></div></article>`;
}

function homeSchema(site, locale, config) {
  const canonical = canonicalFor(site, locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "Structor Robotics", url: `${baseUrl}/structor-robotics/` },
      { "@type": "WebSite", "@id": `${canonical}#website`, name: site.brand, url: canonical, inLanguage: locales[locale].code, potentialAction: { "@type": "SearchAction", target: `${canonical}?q={search_term_string}`, "query-input": "required name=search_term_string" } },
      { "@type": "CollectionPage", "@id": `${canonical}#page`, name: site.content[locale].seoTitle, description: site.content[locale].seoDescription, url: canonical, isPartOf: { "@id": `${canonical}#website` }, about: config.listings.map((listing) => listing.name) },
      { "@type": "ItemList", "@id": `${canonical}#directory`, numberOfItems: config.listings.length, itemListElement: config.listings.map((listing, index) => ({ "@type": "ListItem", position: index + 1, name: listing.name, url: listing.url })) }
    ]
  };
}

function buildHome(site, locale, baseConfig) {
  const currentDir = localeDir(site, locale);
  const content = site.content[locale];
  const c = common[locale];
  const config = localizedConfig(baseConfig, site, locale);
  const articles = articleSets[site.path];
  const hero = relativeFile(currentDir, `${site.path}/assets/hero.jpg`);
  const secondaryHref = site.path === "localmac-guide" ? relativeHref(currentDir, "nocloud-ai") : `mailto:9881988@gmail.com?subject=${encodeURIComponent(`${site.brand}: ${content.secondary}`)}`;
  const facets = config.facets.map((facet) => `<div class="facet"><label>${escapeHtml(facet.label)}</label><select disabled><option>${escapeHtml(facet.allLabel)}</option></select></div>`).join("");
  const method = content.method.map((step) => `<article class="method-step"><strong>${escapeHtml(step[0])}</strong><h3>${escapeHtml(step[1])}</h3><p>${escapeHtml(step[2])}</p></article>`).join("");
  const schema = homeSchema(site, locale, config);
  const pageHead = head({ site, locale, title: content.seoTitle, description: content.seoDescription, canonical: canonicalFor(site, locale), kind: "home", currentDir, schema });
  const html = `${pageHead}
  <body>
    ${header(site, locale, currentDir)}
    <main>
      <section class="hero"><img class="hero__media" src="${hero}" alt="${escapeHtml(site.imageAlt[locale])}" width="1600" height="1000" fetchpriority="high" /><div class="hero__content"><p class="eyebrow">${escapeHtml(content.heroEyebrow)}</p><h1>${escapeHtml(content.heroTitle)}</h1><p class="hero__lead">${escapeHtml(content.heroLead)}</p><div class="hero__proof">${content.proof.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div><div class="hero__actions"><a class="button button--primary" href="#directory">${escapeHtml(content.primary)}</a><a class="button button--secondary" href="${secondaryHref}">${escapeHtml(content.secondary)}</a></div></div></section>
      <section class="search-band" aria-label="${escapeHtml(content.searchButton)}"><div class="search-field"><i data-lucide="search" aria-hidden="true"></i><input id="directory-search" type="search" placeholder="${escapeHtml(content.searchPlaceholder)}" autocomplete="off" /></div><button class="button button--primary" id="search-button" type="button">${escapeHtml(content.searchButton)}</button></section>
      <section class="pulse-band"><div class="pulse-band__inner"><div class="pulse-band__intro"><strong>${escapeHtml(content.pulseEyebrow)}</strong><p>${escapeHtml(content.pulseTitle)}</p></div>${content.pulse.map((metric) => `<div class="pulse-band__metric"><strong>${escapeHtml(metric[0])}</strong><p>${escapeHtml(metric[1])}</p></div>`).join("")}</div></section>
      <section class="matcher-section"><div class="matcher-section__copy"><p class="eyebrow">${escapeHtml(content.matcherEyebrow)}</p><h2>${escapeHtml(content.matcherTitle)}</h2><p>${escapeHtml(content.matcherText)}</p></div><div class="matcher-panel"><form class="matcher-form" id="matcher-form"></form><div class="matcher-result" id="matcher-result" aria-live="polite"></div></div></section>
      <section class="directory-shell" id="directory"><div class="directory-intro"><div><p class="eyebrow">${escapeHtml(content.introEyebrow)}</p><h2>${escapeHtml(content.introTitle)}</h2></div><p>${escapeHtml(content.introText)}</p></div><div class="directory-layout"><aside class="filters"><div class="filters__heading"><h3>${escapeHtml(c.filters)}</h3><button id="reset-filters" type="button">${escapeHtml(c.reset)}</button></div><div id="filters">${facets}</div></aside><div><div class="results-toolbar"><p><strong id="result-count">${config.listings.length}</strong> ${escapeHtml(content.countLabel)}</p><select id="sort-results" aria-label="${escapeHtml(c.sort)}"><option value="recommended">${escapeHtml(content.sortRecommended)}</option><option value="name">${escapeHtml(content.sortName)}</option><option value="price">${escapeHtml(content.sortPrice)}</option><option value="location">${escapeHtml(content.sortLocation)}</option></select></div><div class="listing-grid" id="listing-grid">${config.listings.map((listing) => listingCard(listing, config)).join("")}</div></div></div></section>
      <section class="editorial-section" id="guides"><div class="editorial-section__heading"><div><p class="eyebrow">${escapeHtml(content.editorialEyebrow)}</p><h2>${escapeHtml(content.editorialTitle)}</h2></div><p>${escapeHtml(content.editorialText)}</p></div><div class="article-grid">${articles.map((article, index) => articleCard(site, article, locale, currentDir, index)).join("")}</div></section>
      <section class="method-section"><div class="method-section__heading"><div><p class="eyebrow">${escapeHtml(content.methodEyebrow)}</p><h2>${escapeHtml(content.methodTitle)}</h2></div><p>${escapeHtml(content.methodText)}</p></div><div class="method-steps">${method}</div></section>
    </main>
    ${footer(site, locale, currentDir)}
    <div class="compare-bar" id="compare-bar"><span><strong id="compare-count">0</strong> ${escapeHtml(c.compare)}</span><button class="button button--primary" id="compare-open" type="button">${escapeHtml(c.compare)}</button></div>
    <dialog class="compare-dialog" id="compare-dialog"><div class="compare-dialog__header"><h2>${escapeHtml(c.compareTitle)}</h2><button class="icon-button" id="compare-close" type="button" aria-label="${escapeHtml(c.close)}">×</button></div><div class="compare-scroll" id="compare-content"></div></dialog>
    <script src="https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js" defer></script>
    <script src="data.js?v=20260814c"></script>
    <script src="${relativeFile(currentDir, "directory-shared/directory.js")}?v=20260814c" defer></script>
  </body>
</html>\n`;
  write(`${currentDir}/index.html`, html);
  write(`${currentDir}/data.js`, `window.DIRECTORY_CONFIG = ${JSON.stringify(config, null, 2)};\n`);
}

function guidesSchema(site, locale, articles) {
  const canonical = canonicalFor(site, locale, "guides");
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", name: site.content[locale].editorialTitle, description: site.content[locale].editorialText, url: canonical, inLanguage: locales[locale].code },
      { "@type": "ItemList", numberOfItems: articles.length, itemListElement: articles.map((article, index) => ({ "@type": "ListItem", position: index + 1, url: canonicalFor(site, locale, "article", article.slug), name: article.translations[locale].title })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: articleLabels[locale].home, item: canonicalFor(site, locale) }, { "@type": "ListItem", position: 2, name: common[locale].navJournal, item: canonical }] }
    ]
  };
}

function buildGuides(site, locale) {
  const currentDir = guidesDir(site, locale);
  const content = site.content[locale];
  const articles = articleSets[site.path];
  const hero = relativeFile(currentDir, `${site.path}/assets/hero.jpg`);
  const title = `${content.editorialTitle} | ${site.brand}`;
  const schema = guidesSchema(site, locale, articles);
  const pageHead = head({ site, locale, title, description: content.editorialText, canonical: canonicalFor(site, locale, "guides"), kind: "guides", currentDir, schema });
  const html = `${pageHead}<body>${header(site, locale, currentDir, "guides")}<main><section class="article-hero"><img src="${hero}" alt="${escapeHtml(site.imageAlt[locale])}" width="1600" height="1000" fetchpriority="high" /><div class="article-hero__content"><nav class="breadcrumbs"><a href="${relativeHref(currentDir, localeDir(site, locale))}">${escapeHtml(articleLabels[locale].home)}</a><span>/</span><span>${escapeHtml(common[locale].navJournal)}</span></nav><p class="eyebrow">${escapeHtml(content.editorialEyebrow)}</p><h1>${escapeHtml(content.editorialTitle)}</h1><p class="article-deck">${escapeHtml(content.editorialText)}</p></div></section><section class="editorial-section"><div class="article-grid">${articles.map((article, index) => articleCard(site, article, locale, currentDir, index)).join("")}</div></section><section class="method-section"><div class="method-section__heading"><div><p class="eyebrow">${escapeHtml(content.methodEyebrow)}</p><h2>${escapeHtml(content.methodTitle)}</h2></div><p>${escapeHtml(content.methodText)}</p></div></section></main>${footer(site, locale, currentDir)}</body></html>\n`;
  write(`${currentDir}/index.html`, html);
}

function articleSchema(site, locale, article) {
  const copy = article.translations[locale];
  const canonical = canonicalFor(site, locale, "article", article.slug);
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BlogPosting", headline: copy.title, description: copy.description, image: `${baseUrl}/${site.path}/assets/hero.jpg`, datePublished: published, dateModified: published, inLanguage: locales[locale].code, mainEntityOfPage: canonical, author: { "@type": "Organization", name: "Structor Robotics editorial team", url: `${baseUrl}/structor-robotics/` }, publisher: { "@type": "Organization", name: "Structor Robotics", url: `${baseUrl}/structor-robotics/` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: articleLabels[locale].home, item: canonicalFor(site, locale) }, { "@type": "ListItem", position: 2, name: common[locale].navJournal, item: canonicalFor(site, locale, "guides") }, { "@type": "ListItem", position: 3, name: copy.title, item: canonical }] }
    ]
  };
}

function buildArticle(site, locale, article, index) {
  const currentDir = articleDir(site, locale, article.slug);
  const copy = article.translations[locale];
  const c = common[locale];
  const labels = articleLabels[locale];
  const hero = relativeFile(currentDir, `${site.path}/assets/hero.jpg`);
  const title = `${copy.title} | ${site.brand}`;
  const schema = articleSchema(site, locale, article);
  const pageHead = head({ site, locale, title, description: copy.description, canonical: canonicalFor(site, locale, "article", article.slug), kind: "article", slug: article.slug, currentDir, schema });
  const toc = copy.sections.map((section) => `<a href="#${escapeHtml(section[0])}">${escapeHtml(section[1])}</a>`).join("");
  const sections = copy.sections.map((section) => `<section id="${escapeHtml(section[0])}"><h2>${escapeHtml(section[1])}</h2>${section[2].map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</section>`).join("");
  const table = copy.table;
  const tableHead = table[1].map((cell) => `<th scope="col">${escapeHtml(cell)}</th>`).join("");
  const tableRows = table[2].map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("");
  const other = articleSets[site.path].filter((candidate) => candidate.slug !== article.slug);
  const next = other.map((candidate) => `<a href="${relativeHref(currentDir, articleDir(site, locale, candidate.slug))}"><small>${escapeHtml(c.next)}</small><br />${escapeHtml(candidate.translations[locale].title)}</a>`).join("");
  const html = `${pageHead}<body>${header(site, locale, currentDir, "article", article.slug)}<main><article><header class="article-hero"><img src="${hero}" alt="${escapeHtml(site.imageAlt[locale])}" width="1600" height="1000" fetchpriority="high" style="object-position:${index === 0 ? "38%" : index === 1 ? "60%" : "76%"} center" /><div class="article-hero__content"><nav class="breadcrumbs"><a href="${relativeHref(currentDir, localeDir(site, locale))}">${escapeHtml(labels.home)}</a><span>/</span><a href="${relativeHref(currentDir, guidesDir(site, locale))}">${escapeHtml(c.navJournal)}</a></nav><p class="eyebrow">${escapeHtml(copy.eyebrow)}</p><h1>${escapeHtml(copy.title)}</h1><p class="article-deck">${escapeHtml(copy.lead)}</p><div class="article-meta"><span>${escapeHtml(c.author)}</span><span>${escapeHtml(c.datePublished)}</span><span>${article.minutes} ${escapeHtml(c.minRead)}</span></div></div></header><div class="article-layout"><aside class="article-toc"><strong>${escapeHtml(c.toc)}</strong>${toc}</aside><div class="article-body"><p>${escapeHtml(copy.description)}</p><h2>${escapeHtml(labels.takeaways)}</h2><ul>${copy.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>${sections}<aside class="article-callout"><strong>${escapeHtml(copy.callout[0])}</strong><p>${escapeHtml(copy.callout[1])}</p></aside><h2>${escapeHtml(table[0])}</h2><div class="article-table-wrap"><table class="article-table"><thead><tr>${tableHead}</tr></thead><tbody>${tableRows}</tbody></table></div><section><h2>${escapeHtml(copy.conclusion[0] || labels.conclusion)}</h2><p>${escapeHtml(copy.conclusion[1])}</p></section><section class="source-list"><h2>${escapeHtml(c.sources)}</h2><ol>${article.sources.map((source) => `<li><a href="${escapeHtml(source[1])}" target="_blank" rel="noopener noreferrer">${escapeHtml(source[0])}</a></li>`).join("")}</ol></section></div></div></article><nav class="article-next" aria-label="${escapeHtml(c.next)}">${next}</nav></main>${footer(site, locale, currentDir)}</body></html>\n`;
  write(`${currentDir}/index.html`, html);
}

function buildFeed(site) {
  const articles = articleSets[site.path];
  const items = articles.map((article) => {
    const copy = article.translations.en;
    const link = canonicalFor(site, "en", "article", article.slug);
    return `<item><title>${escapeXml(copy.title)}</title><link>${link}</link><guid>${link}</guid><pubDate>Fri, 14 Aug 2026 09:00:00 +0300</pubDate><description>${escapeXml(copy.description)}</description></item>`;
  }).join("");
  write(`${site.path}/feed.xml`, `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escapeXml(site.brand)} guides</title><link>${canonicalFor(site, "en")}</link><description>${escapeXml(site.content.en.editorialText)}</description><language>en</language>${items}</channel></rss>\n`);
}

function sitemapAlternateTags(site, kind, slug = "") {
  const tags = Object.keys(locales).map((locale) => `<xhtml:link rel="alternate" hreflang="${locales[locale].code}" href="${canonicalFor(site, locale, kind, slug)}" />`);
  tags.push(`<xhtml:link rel="alternate" hreflang="x-default" href="${canonicalFor(site, "en", kind, slug)}" />`);
  return tags.join("");
}

function buildSitemap() {
  const rows = [];
  for (const site of siteList) {
    for (const locale of Object.keys(locales)) {
      for (const kind of ["home", "guides"]) {
        const loc = canonicalFor(site, locale, kind);
        rows.push(`<url><loc>${loc}</loc><lastmod>${published}</lastmod>${sitemapAlternateTags(site, kind)}<image:image><image:loc>${baseUrl}/${site.path}/assets/hero.jpg</image:loc><image:caption>${escapeXml(site.imageAlt[locale])}</image:caption></image:image></url>`);
      }
      for (const article of articleSets[site.path]) {
        const loc = canonicalFor(site, locale, "article", article.slug);
        rows.push(`<url><loc>${loc}</loc><lastmod>${published}</lastmod>${sitemapAlternateTags(site, "article", article.slug)}<image:image><image:loc>${baseUrl}/${site.path}/assets/hero.jpg</image:loc><image:caption>${escapeXml(article.translations[locale].title)}</image:caption></image:image></url>`);
      }
    }
  }
  write("sitemap-directories.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${rows.join("")}</urlset>\n`);
  const robotsFile = path.join(root, "robots.txt");
  const sitemapLine = `Sitemap: ${baseUrl}/sitemap-directories.xml`;
  const robots = fs.readFileSync(robotsFile, "utf8").trimEnd();
  if (!robots.includes(sitemapLine)) fs.writeFileSync(robotsFile, `${robots}\n${sitemapLine}\n`);
}

for (const site of siteList) {
  const baseConfig = loadBaseConfig(site);
  for (const locale of Object.keys(locales)) {
    buildHome(site, locale, baseConfig);
    buildGuides(site, locale);
    articleSets[site.path].forEach((article, index) => buildArticle(site, locale, article, index));
  }
  buildFeed(site);
}
buildSitemap();

console.log(`Built ${siteList.length} multilingual directory sites, ${siteList.length * 4 * 5} indexable HTML pages, 3 feeds and sitemap-directories.xml.`);
