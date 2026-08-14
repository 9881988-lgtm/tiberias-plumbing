import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { finderCommon, finderLocales, finderPageCopy, intentAdvice, articleTemplates } from "./copy.mjs";
import { baseTopics, topics } from "./topics.mjs";
import { approvedIntentSlugs } from "./config.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dataFile = path.join(path.dirname(fileURLToPath(import.meta.url)), "data", "source-snapshot.json");
const snapshot = JSON.parse(fs.readFileSync(dataFile, "utf8"));
const baseUrl = "https://9881988-lgtm.github.io/tiberias-plumbing";
const buildDate = "2026-08-14";
const generatedDirectory = path.join(root, "app-finders");
const stagingDirectory = path.join(root, ".app-finders-build");

const palette = {
  document: { accent: "#087c72", strong: "#075d56", soft: "#d8eeea", signal: "#d24d3f", header: "#132321", surface: "#f2f6f4" },
  creator: { accent: "#b24c3d", strong: "#853329", soft: "#f3ddd8", signal: "#287269", header: "#302521", surface: "#f7f3f1" },
  finance: { accent: "#2e7151", strong: "#205239", soft: "#dcebdd", signal: "#b95c32", header: "#1e3429", surface: "#f3f6f2" },
  productivity: { accent: "#326d78", strong: "#24515a", soft: "#dcebed", signal: "#ba563f", header: "#1c3035", surface: "#f1f5f5" },
  business: { accent: "#3e6c55", strong: "#2c503e", soft: "#dfe9e2", signal: "#a74a3c", header: "#202b25", surface: "#f3f5f3" },
  research: { accent: "#447169", strong: "#31554f", soft: "#dce9e6", signal: "#b7553d", header: "#1d302d", surface: "#f2f6f5" },
  learning: { accent: "#aa4e3d", strong: "#7c372d", soft: "#f2ddd8", signal: "#307066", header: "#312521", surface: "#f8f3f1" },
  home: { accent: "#3b7255", strong: "#2a543d", soft: "#deebe1", signal: "#b65b34", header: "#203229", surface: "#f3f6f2" },
  travel: { accent: "#31717a", strong: "#24545b", soft: "#dbeaec", signal: "#b4503a", header: "#1d3135", surface: "#f1f5f5" },
  mac: { accent: "#496d65", strong: "#345149", soft: "#dfe8e5", signal: "#b6503f", header: "#202d2a", surface: "#f3f5f4" }
};

const groupNames = {
  en: { document: "Documents", creator: "Creative media", finance: "Money", productivity: "Productivity", business: "Small business", research: "AI & research", learning: "Learning", home: "Home", travel: "Travel", mac: "Mac utilities" },
  es: { document: "Documentos", creator: "Creación", finance: "Dinero", productivity: "Productividad", business: "Pequeña empresa", research: "IA e investigación", learning: "Aprendizaje", home: "Hogar", travel: "Viajes", mac: "Utilidades para Mac" },
  ru: { document: "Документы", creator: "Контент", finance: "Финансы", productivity: "Продуктивность", business: "Малый бизнес", research: "AI и исследования", learning: "Обучение", home: "Дом", travel: "Путешествия", mac: "Утилиты Mac" },
  he: { document: "מסמכים", creator: "יצירה", finance: "כספים", productivity: "פרודוקטיביות", business: "עסק קטן", research: "AI ומחקר", learning: "למידה", home: "בית", travel: "נסיעות", mac: "כלי Mac" }
};

const topicBySlug = Object.fromEntries(topics.map((topic) => [topic.slug, topic]));

function esc(value = "") {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

const xml = esc;
const jsonLd = (value) => JSON.stringify(value).replaceAll("<", "\\u003c");

function write(relative, content) {
  const generatedPrefix = "app-finders/";
  const file = relative.startsWith(generatedPrefix)
    ? path.join(stagingDirectory, relative.slice(generatedPrefix.length))
    : path.join(root, relative);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

function hubDir(locale) {
  return locale === "en" ? "app-finders" : `app-finders/${locale}`;
}

function finderDir(topic, locale) {
  return locale === "en" ? `app-finders/${topic.slug}` : `app-finders/${locale}/${topic.slug}`;
}

function guideDir(topic, locale, slug) {
  return `${finderDir(topic, locale)}/guides/${slug}`;
}

function canonical(topic, locale, kind = "home", slug = "") {
  const relative = kind === "hub" ? hubDir(locale) : kind === "home" ? finderDir(topic, locale) : guideDir(topic, locale, slug);
  return `${baseUrl}/${relative}/`;
}

const relativeHref = (from, to) => {
  const result = path.posix.relative(from, to);
  return result ? `${result}/` : "./";
};
const relativeFile = (from, to) => path.posix.relative(from, to);

function evidenceScore(app) {
  const rating = Math.max(0, Math.min(5, app.rating || 0));
  const ratingPoints = (rating / 5) * 52;
  const confidence = Math.min(1, Math.log10((app.ratingCount || 0) + 1) / 5) * 28;
  const updatedAt = Date.parse(app.updated || 0);
  const ageMonths = updatedAt ? Math.max(0, (Date.parse(buildDate) - updatedAt) / 2.63e9) : 60;
  const freshness = ageMonths <= 6 ? 20 : ageMonths <= 12 ? 16 : ageMonths <= 24 ? 10 : 4;
  return Math.round(ratingPoints + confidence + freshness);
}

function compactNumber(value, locale) {
  return new Intl.NumberFormat(finderLocales[locale].code, { notation: "compact", maximumFractionDigits: 1 }).format(value || 0);
}

function yearOf(value) {
  const year = new Date(value || 0).getUTCFullYear();
  return Number.isFinite(year) && year > 2000 ? year : 0;
}

function buildListing(app, topic, locale) {
  const c = finderCommon[locale];
  const score = evidenceScore(app);
  const year = yearOf(app.updated);
  const ratingFilter = app.rating >= 4.5 ? "4.5+" : app.rating >= 4 ? "4.0-4.49" : "other";
  const reviewsFilter = app.ratingCount >= 1000 ? "1000+" : app.ratingCount >= 100 ? "100-999" : "under100";
  const updatedFilter = year >= 2026 ? "2026" : year === 2025 ? "2025" : "older";
  const platform = topic.entity === "macSoftware" ? "macOS" : "iOS/iPadOS";
  const ratingText = app.ratingCount ? `${app.rating.toFixed(1)}/5 · ${compactNumber(app.ratingCount, locale)}` : c.ratingOther;
  const summaries = {
    en: `${app.name} by ${app.developer}. This dated store snapshot records ${app.genres.join(", ") || "software"}, version ${app.version || "not stated"} and a ${year || "previous"} update. Verify features, privacy labels and in-app purchases on Apple’s current page.`,
    es: `${app.name}, de ${app.developer}. Esta captura registra ${app.genres.join(", ") || "software"}, versión ${app.version || "no indicada"} y actualización ${year || "anterior"}. Verifica funciones, privacidad y compras en la ficha actual de Apple.`,
    ru: `${app.name}, разработчик ${app.developer}. В датированном снимке указаны категории ${app.genres.join(", ") || "software"}, версия ${app.version || "не указана"} и обновление ${year || "ранее"} года. Функции, приватность и покупки проверяйте в текущей карточке Apple.`,
    he: `${app.name} מאת ${app.developer}. צילום החנות המתוארך כולל ${app.genres.join(", ") || "software"}, גרסה ${app.version || "לא צוין"} ועדכון ${year || "קודם"}. יש לבדוק תכונות, פרטיות ורכישות בעמוד Apple העדכני.`
  };
  return {
    id: app.id,
    name: app.name,
    location: app.developer,
    artwork: app.artwork,
    summary: summaries[locale],
    tags: [`${c.bestFor} ${score}/100`, app.price === 0 ? c.free : c.paid, app.ratingCount ? `${compactNumber(app.ratingCount, locale)} ${c.reviews.toLowerCase()}` : c.ratingOther],
    facts: { rating: ratingText, price: app.price === 0 ? c.free : app.formattedPrice || String(app.price), system: `${platform} ${app.minimumOsVersion || "—"}+` },
    filters: { price: app.price === 0 ? "Free" : "Paid", rating: ratingFilter, reviews: reviewsFilter, updated: updatedFilter },
    priceSort: app.price || 0,
    score,
    url: app.url
  };
}

function jaccard(first, second) {
  const a = new Set(first);
  const b = new Set(second);
  const intersection = [...a].filter((value) => b.has(value)).length;
  return intersection / new Set([...a, ...b]).size;
}

function evaluateQuality() {
  const approved = [];
  const rows = [];
  for (const topic of topics) {
    const source = snapshot.topics[topic.slug];
    const results = source?.results || [];
    const ids = results.slice(0, 12).map((app) => app.id);
    const rated = results.filter((app) => app.ratingCount >= 25 && app.rating >= 3.5).length;
    const artwork = results.filter((app) => app.artwork).length;
    const minimumResults = topic.series === "intent" ? 10 : 8;
    const minimumRated = topic.series === "intent" ? 6 : 5;
    const overlapLimit = topic.series === "intent" ? 0.6 : 0.72;
    let maximumOverlap = 0;
    let overlapWith = "";
    for (const previous of approved) {
      const overlap = jaccard(ids, previous.ids);
      if (overlap > maximumOverlap) {
        maximumOverlap = overlap;
        overlapWith = previous.slug;
      }
    }
    const reasons = [];
    if (results.length < minimumResults) reasons.push(`fewer than ${minimumResults} current results`);
    if (rated < minimumRated) reasons.push(`fewer than ${minimumRated} mature rating signals`);
    if (artwork < 6) reasons.push("insufficient product visuals");
    if (maximumOverlap >= overlapLimit) reasons.push(`result overlap ${Math.round(maximumOverlap * 100)}% with ${overlapWith}`);
    if (topic.series === "intent" && !approvedIntentSlugs.has(topic.slug)) reasons.push("intent draft pending demand-backed editorial review");
    const indexable = reasons.length === 0;
    if (indexable) approved.push({ slug: topic.slug, ids });
    rows.push({ slug: topic.slug, query: topic.term, resultCount: results.length, ratedCount: rated, artworkCount: artwork, maximumOverlap: Number(maximumOverlap.toFixed(3)), overlapWith, indexable, reasons });
  }
  return rows;
}

const qualityRows = evaluateQuality();
const qualityBySlug = Object.fromEntries(qualityRows.map((row) => [row.slug, row]));

function languageLinks(topic, locale, currentDir, kind, guideSlug = "") {
  return Object.entries(finderLocales).map(([candidate, meta]) => {
    const target = kind === "hub" ? hubDir(candidate) : kind === "home" ? finderDir(topic, candidate) : guideDir(topic, candidate, guideSlug);
    return `<a href="${relativeHref(currentDir, target)}" hreflang="${meta.code}"${candidate === locale ? ' aria-current="page"' : ""}>${esc(meta.name)}</a>`;
  }).join("");
}

function switcher(topic, locale, currentDir, kind, guideSlug = "") {
  const c = finderCommon[locale];
  return `<details class="language-switcher"><summary aria-label="${esc(c.language)}"><span>${esc(c.language)}</span>${finderLocales[locale].short}</summary><div class="language-switcher__menu">${languageLinks(topic, locale, currentDir, kind, guideSlug)}</div></details>`;
}

function alternates(topic, kind, guideSlug = "") {
  const links = Object.entries(finderLocales).map(([locale, meta]) => `<link rel="alternate" hreflang="${meta.code}" href="${canonical(topic, locale, kind, guideSlug)}" />`);
  links.push(`<link rel="alternate" hreflang="x-default" href="${canonical(topic, "en", kind, guideSlug)}" />`);
  return links.join("\n    ");
}

function colorStyle(topic) {
  const p = palette[topic?.archetype || "document"];
  return `:root{--surface-soft:${p.surface};--accent:${p.accent};--accent-strong:${p.strong};--accent-soft:${p.soft};--signal:${p.signal};--header:${p.header}}`;
}

function head({ topic, locale, currentDir, kind, title, description, robots, image, guideSlug = "", schema }) {
  const canonicalUrl = canonical(topic, locale, kind, guideSlug);
  return `<!doctype html><html lang="${finderLocales[locale].code}" dir="${finderLocales[locale].dir}"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /><title>${esc(title)}</title><meta name="description" content="${esc(description)}" /><meta name="robots" content="${robots}" /><meta name="theme-color" content="${palette[topic?.archetype || "document"].header}" /><link rel="canonical" href="${canonicalUrl}" />${alternates(topic, kind, guideSlug)}<meta property="og:type" content="${kind === "guide" ? "article" : "website"}" /><meta property="og:title" content="${esc(title)}" /><meta property="og:description" content="${esc(description)}" /><meta property="og:url" content="${canonicalUrl}" />${image ? `<meta property="og:image" content="${esc(image)}" />` : ""}<meta name="twitter:card" content="summary_large_image" /><link rel="stylesheet" href="${relativeFile(currentDir, "directory-shared/directory.css")}?v=20260814f" /><style>${colorStyle(topic)}</style><script type="application/ld+json">${jsonLd(schema)}</script></head>`;
}

function header(topic, locale, currentDir, kind = "home", guideSlug = "") {
  const c = finderCommon[locale];
  const home = topic ? finderDir(topic, locale) : hubDir(locale);
  const secondary = topic?.series === "intent" ? `<a href="${relativeHref(currentDir, home)}#related">${esc(c.related)}</a>` : `<a href="${relativeHref(currentDir, home)}#guides">${esc(c.guides)}</a>`;
  return `<header class="topbar"><a class="brand" href="${relativeHref(currentDir, hubDir(locale))}"><span class="brand-mark">AF</span><span>App Finders</span></a><nav aria-label="${esc(c.directory)}">${topic ? `<a href="${relativeHref(currentDir, home)}#directory">${esc(c.directory)}</a>${secondary}` : `<a href="#catalogs">${esc(c.directory)}</a>`}${switcher(topic, locale, currentDir, kind, guideSlug)}<a class="button button--primary" href="${relativeHref(currentDir, hubDir(locale))}">${esc(c.allFinders)}</a></nav></header>`;
}

function footer(locale, currentDir) {
  const c = finderCommon[locale];
  return `<footer class="site-footer"><div class="site-footer__inner"><div><strong>App Finders by Structor Robotics</strong><p>${esc(c.footer)}</p></div><p><a href="${relativeHref(currentDir, hubDir(locale))}">${esc(c.allFinders)}</a> · <a href="${baseUrl}/structor-robotics/">Structor Robotics</a></p></div></footer>`;
}

function iconStage(apps) {
  return `<div class="finder-icon-stage" aria-hidden="true">${apps.filter((app) => app.artwork).slice(0, 9).map((app) => `<img src="${esc(app.artwork)}" alt="" width="160" height="160" referrerpolicy="no-referrer" />`).join("")}</div>`;
}

function homeSchema(topic, locale, listings) {
  const url = canonical(topic, locale);
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", name: finderPageCopy(locale, topic).seoTitle, url, inLanguage: finderLocales[locale].code, dateModified: buildDate },
    { "@type": "ItemList", numberOfItems: listings.length, itemListElement: listings.map((listing, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "SoftwareApplication", name: listing.name, url: listing.url, image: listing.artwork, applicationCategory: topic.labels.en, operatingSystem: listing.facts.system, offers: { "@type": "Offer", price: listing.priceSort, priceCurrency: "USD" } } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "App Finders", item: canonical(topic, locale, "hub") }, { "@type": "ListItem", position: 2, name: topic.labels[locale], item: url }] }
  ] };
}

function reviewSchema(topic, locale) {
  const url = canonical(topic, locale);
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", name: finderPageCopy(locale, topic).seoTitle, url, inLanguage: finderLocales[locale].code, dateModified: buildDate },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "App Finders", item: canonical(topic, locale, "hub") }, { "@type": "ListItem", position: 2, name: topic.labels[locale], item: url }] }
  ] };
}

function makeConfig(topic, locale, apps) {
  const c = finderCommon[locale];
  const listings = apps.slice(0, 12).map((app) => buildListing(app, topic, locale)).sort((a, b) => b.score - a.score);
  return {
    key: `app-finders:${topic.slug}:${locale}`,
    title: topic.labels[locale],
    sourceButton: c.official,
    ui: { any: c.any, confirm: "—", officialSource: c.official, suggestUpdate: c.suggest, save: c.save, saved: c.saved, compare: c.compare, noMatchesTitle: c.noMatchesTitle, noMatchesText: c.noMatchesText, location: c.developer, bestFor: c.bestFor, feature: c.feature, matcherButton: c.matcherButton, matcherEmpty: c.noMatchesText, matcherNoResult: c.noMatchesText, matcherResult: c.matcher, matcherApply: c.directory },
    facets: [
      { key: "price", label: c.price, allLabel: c.anyPrice, options: [{ value: "Free", label: c.free }, { value: "Paid", label: c.paid }] },
      { key: "rating", label: c.rating, allLabel: c.anyRating, options: [{ value: "4.5+", label: c.ratingHigh }, { value: "4.0-4.49", label: c.ratingGood }, { value: "other", label: c.ratingOther }] },
      { key: "reviews", label: c.reviews, allLabel: c.anyReviews, options: [{ value: "1000+", label: c.reviewsHigh }, { value: "100-999", label: c.reviewsMid }, { value: "under100", label: c.reviewsLow }] },
      { key: "updated", label: c.updated, allLabel: c.anyUpdated, options: [{ value: "2026", label: c.current }, { value: "2025", label: c.previous }, { value: "older", label: c.older }] }
    ],
    factKeys: [{ key: "rating", label: c.factRating }, { key: "price", label: c.factPrice }, { key: "system", label: c.factSystem }],
    matcher: { fields: [{ key: "price", label: c.price, placeholder: c.anyPrice }, { key: "rating", label: c.rating, placeholder: c.anyRating }, { key: "reviews", label: c.reviews, placeholder: c.anyReviews }] },
    listings
  };
}

function staticCard(listing, config) {
  const tags = listing.tags.slice(0, 3).map((tag, index) => `<span class="tag${index === 0 ? " tag--signal" : ""}">${esc(tag)}</span>`).join(" ");
  const facts = config.factKeys.map((fact) => `<div><dt>${esc(fact.label)}</dt><dd>${esc(listing.facts[fact.key])}</dd></div>`).join("");
  return `<article class="listing-card"><div><div class="listing-card__header"><div class="listing-card__identity"><img class="app-listing-artwork" src="${esc(listing.artwork)}" alt="" width="128" height="128" loading="lazy" referrerpolicy="no-referrer" /><div><h3>${esc(listing.name)}</h3><p class="listing-card__location">${esc(listing.location)}</p></div></div><div>${tags}</div></div><p class="listing-card__summary">${esc(listing.summary)}</p><dl class="facts">${facts}</dl><div class="listing-card__actions"><a class="button button--primary" href="${esc(listing.url)}" target="_blank" rel="noopener noreferrer">${esc(config.sourceButton)}</a></div></div><div class="listing-card__save"><button class="button button--secondary" type="button">${esc(config.ui.save)}</button><label class="compare-check"><input type="checkbox" /> ${esc(config.ui.compare)}</label></div></article>`;
}

function guideCard(topic, locale, guide, currentDir, index, artwork) {
  return `<article class="article-card"><img src="${esc(artwork)}" alt="" loading="lazy" referrerpolicy="no-referrer" style="object-position:${35 + index * 20}% center" /><div class="article-card__content"><p>6 ${esc(finderCommon[locale].minRead)}</p><h3>${esc(guide.title)}</h3><a href="${relativeHref(currentDir, guideDir(topic, locale, guide.slug))}">${esc(finderCommon[locale].read)} →</a></div></article>`;
}

function buildHome(topic, locale, source, quality) {
  const currentDir = finderDir(topic, locale);
  const copy = finderPageCopy(locale, topic);
  const c = finderCommon[locale];
  const apps = source.results;
  const config = makeConfig(topic, locale, apps);
  const isIntent = topic.series === "intent";
  const baseTopic = isIntent ? topicBySlug[topic.baseSlug] : null;
  const guides = isIntent ? [] : articleTemplates(locale, topic);
  const robots = quality.indexable ? "index,follow,max-image-preview:large,max-snippet:-1" : "noindex,follow";
  const schema = quality.indexable ? homeSchema(topic, locale, config.listings) : reviewSchema(topic, locale);
  const pageHead = head({ topic, locale, currentDir, kind: "home", title: copy.seoTitle, description: copy.lead, robots, image: apps[0]?.artwork, schema });
  const qualityNote = quality.indexable ? "" : `<aside class="quality-note"><strong>${esc(c.reviewNeeded)}.</strong> ${esc(c.qualityHold)}${topic.series === "intent" ? ` ${esc(c.intentCaveat)}` : ""}</aside>`;
  const advice = intentAdvice(locale, topic);
  const intentGuidance = advice ? `<section class="intent-guidance"><div><p class="eyebrow">${esc(topic.labels[locale])}</p><h2>${esc(advice.title)}</h2></div><p>${esc(advice.body)}</p></section>` : "";
  const method = c.methodSteps.map((step) => `<article class="method-step"><strong>${step[0]}</strong><h3>${esc(step[1])}</h3><p>${esc(step[2])}</p></article>`).join("");
  const editorial = isIntent ? (() => {
    const relatedTopics = [baseTopic, ...topics.filter((candidate) => candidate.baseSlug === topic.baseSlug)].filter(Boolean);
    const cards = relatedTopics.map((candidate) => {
      const candidateQuality = qualityBySlug[candidate.slug];
      const app = snapshot.topics[candidate.slug]?.results?.[0];
      return `<a class="finder-hub-card" href="${relativeHref(currentDir, finderDir(candidate, locale))}"><div><div class="finder-hub-card__top">${app?.artwork ? `<img src="${esc(app.artwork)}" alt="" width="92" height="92" loading="lazy" referrerpolicy="no-referrer" />` : ""}<span class="finder-status${candidateQuality?.indexable ? " finder-status--ready" : ""}">${esc(candidate.series === "intent" ? (candidateQuality?.indexable ? c.indexable : c.reviewNeeded) : c.baseCatalog)}</span></div><h3>${esc(candidate.labels[locale])}</h3></div><strong>${esc(c.browse)} →</strong></a>`;
    }).join("");
    return `<section class="editorial-section related-intents" id="related"><div class="editorial-section__heading"><div><p class="eyebrow">${esc(c.related)}</p><h2>${esc(baseTopic.labels[locale])}</h2></div><p>${esc(c.relatedLead)}</p></div><div class="finder-hub-grid">${cards}</div></section>`;
  })() : `<section class="editorial-section" id="guides"><div class="editorial-section__heading"><div><p class="eyebrow">${esc(c.guides)}</p><h2>${esc(c.editorialTitle)}</h2></div><p>${esc(c.editorialLead)}</p></div><div class="article-grid">${guides.map((guide, index) => guideCard(topic, locale, guide, currentDir, index, apps[index]?.artwork || apps[0]?.artwork)).join("")}</div></section>`;
  const secondaryTarget = isIntent ? "#related" : "#guides";
  const secondaryLabel = isIntent ? c.related : c.guides;
  const html = `${pageHead}<body>${header(topic, locale, currentDir)}<main><section class="hero finder-hero">${iconStage(apps)}<div class="hero__content"><p class="eyebrow">App Finders · ${esc(groupNames[locale][topic.archetype])}</p><h1>${esc(copy.title)}</h1><p class="hero__lead">${esc(copy.lead)}</p><div class="hero__proof">${c.proof.map((item) => `<span>${esc(item)}</span>`).join("")}</div><div class="hero__actions"><a class="button button--primary" href="#directory">${esc(c.directory)}</a><a class="button button--secondary" href="${secondaryTarget}">${esc(secondaryLabel)}</a></div></div></section><section class="search-band"><div class="search-field"><i data-lucide="search"></i><input id="directory-search" type="search" placeholder="${esc(c.searchPlaceholder)}" /></div><button class="button button--primary" id="search-button">${esc(c.search)}</button></section><section class="pulse-band"><div class="pulse-band__inner"><div class="pulse-band__intro"><strong>${esc(c.snapshot)}</strong><p>${esc(source.fetchedAt.slice(0, 10))}</p></div><div class="pulse-band__metric"><strong>${config.listings.length}</strong><p>${esc(c.listings)}</p></div><div class="pulse-band__metric"><strong>${quality.indexable ? esc(c.indexable) : esc(c.reviewNeeded)}</strong><p>${esc(c.methodology)}</p></div><div class="pulse-band__metric"><strong>${esc(c.sourceName)}</strong><p>${esc(c.disclosed)}</p></div></div></section>${qualityNote}${intentGuidance}<section class="matcher-section"><div class="matcher-section__copy"><p class="eyebrow">${esc(c.methodology)}</p><h2>${esc(c.matcher)}</h2><p>${esc(c.matcherLead)}</p></div><div class="matcher-panel"><form class="matcher-form" id="matcher-form"></form><div class="matcher-result" id="matcher-result"></div></div></section><section class="directory-shell" id="directory"><div class="directory-intro"><div><p class="eyebrow">${esc(topic.labels[locale])}</p><h2>${esc(copy.title)}</h2></div><p>${esc(copy.lead)}</p></div><div class="directory-layout"><aside class="filters"><div class="filters__heading"><h3>${esc(c.filters)}</h3><button id="reset-filters">${esc(c.reset)}</button></div><div id="filters"></div></aside><div><div class="results-toolbar"><p><strong id="result-count">${config.listings.length}</strong> ${esc(c.count)}</p><select id="sort-results" aria-label="${esc(c.sortRecommended)}"><option value="recommended">${esc(c.sortRecommended)}</option><option value="name">${esc(c.sortName)}</option><option value="price">${esc(c.sortPrice)}</option><option value="location">${esc(c.sortLocation)}</option></select></div><div class="listing-grid" id="listing-grid">${config.listings.map((listing) => staticCard(listing, config)).join("")}</div></div></div></section>${editorial}<section class="method-section" id="method"><div class="method-section__heading"><div><p class="eyebrow">${esc(c.methodology)}</p><h2>${esc(c.methodTitle)}</h2></div><p>${esc(c.methodLead)}</p></div><div class="method-steps">${method}</div></section></main>${footer(locale, currentDir)}<div class="compare-bar" id="compare-bar"><span><strong id="compare-count">0</strong> ${esc(c.compare)}</span><button class="button button--primary" id="compare-open">${esc(c.compare)}</button></div><dialog class="compare-dialog" id="compare-dialog"><div class="compare-dialog__header"><h2>${esc(c.compareTitle)}</h2><button class="icon-button" id="compare-close" aria-label="${esc(c.close)}">×</button></div><div class="compare-scroll" id="compare-content"></div></dialog><script src="https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js" defer></script><script src="data.js?v=20260814f"></script><script src="${relativeFile(currentDir, "directory-shared/directory.js")}?v=20260814f" defer></script></body></html>`;
  write(`${currentDir}/index.html`, html);
  write(`${currentDir}/data.js`, `window.DIRECTORY_CONFIG=${JSON.stringify(config)};\n`);
}

function guideSchema(topic, locale, guide) {
  const url = canonical(topic, locale, "guide", guide.slug);
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "BlogPosting", headline: guide.title, description: guide.description, datePublished: buildDate, dateModified: buildDate, inLanguage: finderLocales[locale].code, mainEntityOfPage: url, author: { "@type": "Organization", name: "Structor Robotics" }, publisher: { "@type": "Organization", name: "Structor Robotics" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "App Finders", item: canonical(topic, locale, "hub") }, { "@type": "ListItem", position: 2, name: topic.labels[locale], item: canonical(topic, locale) }, { "@type": "ListItem", position: 3, name: guide.title, item: url }] }
  ] };
}

function buildGuide(topic, locale, guide, source, guideIndex) {
  const currentDir = guideDir(topic, locale, guide.slug);
  const c = finderCommon[locale];
  const apps = source.results;
  const schema = guideSchema(topic, locale, guide);
  const pageHead = head({ topic, locale, currentDir, kind: "guide", guideSlug: guide.slug, title: `${guide.title} | App Finders`, description: guide.description, robots: "noindex,follow", image: apps[guideIndex]?.artwork || apps[0]?.artwork, schema });
  const toc = guide.sections.map((section, index) => `<a href="#step-${index + 1}">${esc(section[0])}</a>`).join("");
  const body = guide.sections.map((section, index) => `<section id="step-${index + 1}"><h2>${esc(section[0])}</h2><p>${esc(section[1])}</p></section>`).join("");
  const other = articleTemplates(locale, topic).filter((item) => item.slug !== guide.slug);
  const next = other.map((item) => `<a href="${relativeHref(currentDir, guideDir(topic, locale, item.slug))}"><small>${esc(c.read)}</small><br />${esc(item.title)}</a>`).join("");
  const html = `${pageHead}<body>${header(topic, locale, currentDir, "guide", guide.slug)}<main><article><header class="article-hero">${iconStage(apps)}<div class="article-hero__content"><nav class="breadcrumbs"><a href="${relativeHref(currentDir, hubDir(locale))}">App Finders</a><span>/</span><a href="${relativeHref(currentDir, finderDir(topic, locale))}">${esc(topic.labels[locale])}</a></nav><p class="eyebrow">${esc(c.guides)}</p><h1>${esc(guide.title)}</h1><p class="article-deck">${esc(guide.lead)}</p><div class="article-meta"><span>Structor Robotics</span><span>${esc(c.dateLabel)}</span><span>6 ${esc(c.minRead)}</span></div></div></header><div class="article-layout"><aside class="article-toc"><strong>${esc(c.guides)}</strong>${toc}</aside><div class="article-body"><p>${esc(guide.description)}</p>${body}<aside class="article-callout"><strong>${esc(c.methodology)}</strong><p>${esc(guide.takeaway)}</p></aside><section class="source-list"><h2>${esc(c.disclosed)}</h2><ol><li><a href="${esc(source.sourceUrl)}" target="_blank" rel="noopener noreferrer">Apple Search API query snapshot</a></li><li><a href="https://support.apple.com/en-us/102399" target="_blank" rel="noopener noreferrer">Apple: App Store privacy information</a></li><li><a href="https://support.apple.com/en-us/102383" target="_blank" rel="noopener noreferrer">Apple: in-app purchases and subscriptions</a></li></ol></section></div></div></article><nav class="article-next">${next}</nav></main>${footer(locale, currentDir)}</body></html>`;
  write(`${currentDir}/index.html`, html);
}

function hubSchema(locale) {
  const url = canonical(topics[0], locale, "hub");
  const eligibleTopics = topics.filter((topic) => qualityBySlug[topic.slug].indexable);
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", name: finderCommon[locale].hubTitle, description: finderCommon[locale].hubLead, url, inLanguage: finderLocales[locale].code },
    { "@type": "ItemList", numberOfItems: eligibleTopics.length, itemListElement: eligibleTopics.map((topic, index) => ({ "@type": "ListItem", position: index + 1, name: topic.labels[locale], url: canonical(topic, locale) })) }
  ] };
}

function buildHub(locale) {
  const currentDir = hubDir(locale);
  const c = finderCommon[locale];
  const allApps = topics.flatMap((topic) => snapshot.topics[topic.slug]?.results?.slice(0, 1) || []);
  const grouped = Object.keys(groupNames[locale]).map((archetype) => {
    const cards = topics.filter((topic) => topic.archetype === archetype).map((topic) => {
      const quality = qualityBySlug[topic.slug];
      const app = snapshot.topics[topic.slug]?.results?.[0];
      return `<a class="finder-hub-card" data-catalog-card data-ready="${quality.indexable}" data-search="${esc(`${topic.labels[locale]} ${topic.term} ${groupNames[locale][archetype]}`.toLocaleLowerCase())}" href="${relativeHref(currentDir, finderDir(topic, locale))}"><div><div class="finder-hub-card__top">${app?.artwork ? `<img src="${esc(app.artwork)}" alt="" width="92" height="92" loading="lazy" referrerpolicy="no-referrer" />` : ""}<span class="finder-status${quality.indexable ? " finder-status--ready" : ""}">${esc(quality.indexable ? c.indexable : c.reviewNeeded)}</span></div><h3>${esc(topic.labels[locale])}</h3><p>${quality.resultCount} ${esc(c.listings)}</p></div><strong>${esc(c.browse)} →</strong></a>`;
    }).join("");
    const groupCount = topics.filter((topic) => topic.archetype === archetype).length;
    return `<section class="finder-hub__group" data-catalog-group><header><h2>${esc(groupNames[locale][archetype])}</h2><p><span data-group-count>${groupCount}</span> ${esc(c.categoryCount)}</p></header><div class="finder-hub-grid">${cards}</div></section>`;
  }).join("");
  const schema = hubSchema(locale);
  const pageHead = head({ topic: topics[0], locale, currentDir, kind: "hub", title: `${c.hubTitle} | Structor Robotics`, description: c.hubLead, robots: "index,follow,max-image-preview:large", image: allApps[0]?.artwork, schema });
  const html = `${pageHead}<body>${header(null, locale, currentDir, "hub")}<main><section class="hero finder-hero">${iconStage(allApps)}<div class="hero__content"><p class="eyebrow">Structor Robotics · App Finders</p><h1>${esc(c.hubTitle)}</h1><p class="hero__lead">${esc(c.hubLead)}</p><div class="hero__proof"><span>${topics.length.toLocaleString(finderLocales[locale].code)} ${esc(c.categoryCount)}</span><span>${qualityRows.filter((row) => row.indexable).length.toLocaleString(finderLocales[locale].code)} ${esc(c.qualityCount)}</span><span>${esc(c.sourceName)}</span></div><div class="hero__actions"><a class="button button--primary" href="#catalogs">${esc(c.directory)}</a><a class="button button--secondary" href="${baseUrl}/structor-robotics/">Structor Robotics</a></div></div></section><aside class="quality-note"><strong>${esc(c.methodology)}.</strong> ${esc(c.methodLead)} ${esc(c.qualityHold)}</aside><section class="catalog-search-band"><div class="search-field"><i data-lucide="search" aria-hidden="true"></i><input id="catalog-search" type="search" placeholder="${esc(c.catalogSearch)}" aria-label="${esc(c.catalogSearchLabel)}" /></div><div class="catalog-mode" role="group" aria-label="${esc(c.filterCatalogs)}"><button type="button" data-catalog-mode="all" aria-pressed="true">${esc(c.showAll)}</button><button type="button" data-catalog-mode="ready" aria-pressed="false">${esc(c.showReady)}</button></div><p aria-live="polite"><strong id="catalog-count">${topics.length.toLocaleString(finderLocales[locale].code)}</strong> ${esc(c.categoryCount)}</p></section><div class="finder-hub" id="catalogs">${grouped}</div></main>${footer(locale, currentDir)}<script src="https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js" defer></script><script src="${relativeFile(currentDir, "directory-shared/directory.js")}?v=20260814f" defer></script></body></html>`;
  write(`${currentDir}/index.html`, html);
}

function alternateXml(topic) {
  const links = Object.entries(finderLocales).map(([locale, meta]) => `<xhtml:link rel="alternate" hreflang="${meta.code}" href="${canonical(topic, locale)}" />`);
  links.push(`<xhtml:link rel="alternate" hreflang="x-default" href="${canonical(topic, "en")}" />`);
  return links.join("");
}

function buildSitemap() {
  const rows = [];
  for (const locale of Object.keys(finderLocales)) {
    rows.push(`<url><loc>${canonical(topics[0], locale, "hub")}</loc><lastmod>${buildDate}</lastmod></url>`);
  }
  for (const topic of topics) {
    if (!qualityBySlug[topic.slug].indexable) continue;
    for (const locale of Object.keys(finderLocales)) {
      rows.push(`<url><loc>${canonical(topic, locale)}</loc><lastmod>${buildDate}</lastmod>${alternateXml(topic)}</url>`);
    }
  }
  write("sitemap-app-finders.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${rows.join("")}</urlset>\n`);
  const robotsFile = path.join(root, "robots.txt");
  const line = `Sitemap: ${baseUrl}/sitemap-app-finders.xml`;
  const robots = fs.readFileSync(robotsFile, "utf8").trimEnd();
  if (!robots.includes(line)) fs.writeFileSync(robotsFile, `${robots}\n${line}\n`);
}

const missingSources = topics.filter((topic) => !snapshot.topics[topic.slug]?.results?.length);
if (missingSources.length) throw new Error(`Missing source snapshots for ${missingSources.length} topics; first: ${missingSources[0].slug}`);

fs.rmSync(stagingDirectory, { recursive: true, force: true });
for (const locale of Object.keys(finderLocales)) buildHub(locale);
for (const topic of topics) {
  const source = snapshot.topics[topic.slug];
  if (!source?.results?.length) throw new Error(`Missing source snapshot for ${topic.slug}`);
  const quality = qualityBySlug[topic.slug];
  for (const locale of Object.keys(finderLocales)) {
    buildHome(topic, locale, source, quality);
    if (topic.series !== "intent") articleTemplates(locale, topic).forEach((guide, index) => buildGuide(topic, locale, guide, source, index));
  }
}
fs.rmSync(generatedDirectory, { recursive: true, force: true });
fs.renameSync(stagingDirectory, generatedDirectory);
buildSitemap();

write("tools/app-finders/data/quality-report.json", `${JSON.stringify({ generatedAt: new Date().toISOString(), total: topics.length, indexable: qualityRows.filter((row) => row.indexable).length, reviewNeeded: qualityRows.filter((row) => !row.indexable).length, rows: qualityRows }, null, 2)}\n`);
const reportRows = qualityRows.map((row) => `| ${row.slug} | ${row.resultCount} | ${row.ratedCount} | ${Math.round(row.maximumOverlap * 100)}% | ${row.indexable ? "index" : `noindex: ${row.reasons.join("; ")}`} |`).join("\n");
write("marketing/directory-projects/app-finders-quality-2026-08-14.md", `# App Finders quality report — 2026-08-14\n\n- Generated catalogs: **${topics.length}**\n- Quality-gate pass: **${qualityRows.filter((row) => row.indexable).length}**\n- Held at noindex: **${qualityRows.filter((row) => !row.indexable).length}**\n- Source: Apple iTunes Search API snapshot; US storefront.\n- Only the 100 original catalogs include topic-specific guide drafts; those guides remain noindex pending individual editorial review.\n- The 900 intent catalogs use one comparison page each and do not create repeated guide pages.\n- All intent catalogs remain noindex until an individual demand-backed editorial review clears them. This prevents a browseable expansion from becoming scaled search content.\n- Search policy reference: https://developers.google.com/search/docs/essentials/spam-policies\n\n| Catalog | Results | Mature ratings | Max overlap | Search status |\n|---|---:|---:|---:|---|\n${reportRows}\n`);

const htmlPageCount = topics.length * Object.keys(finderLocales).length + baseTopics.length * 3 * Object.keys(finderLocales).length + Object.keys(finderLocales).length;
console.log(`Built ${topics.length} App Finder catalogs in 4 languages (${htmlPageCount} HTML pages). ${qualityRows.filter((row) => row.indexable).length} passed the index quality gate.`);
