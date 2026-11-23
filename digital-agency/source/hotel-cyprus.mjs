import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { brand, branch, email, languages, pathFor, pdfFor, phone, photo, priceFor, site, words } from './hotel-cyprus-copy.mjs';

const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const direction = lang => lang === 'he' ? 'rtl' : 'ltr';
const langTag = lang => lang === 'he' ? 'he-IL' : lang;
const locales = {en:'en_GB',he:'he_IL',ru:'ru_RU',el:'el_CY'};
const tel = 'tel:' + phone.replaceAll(' ', '');
const emailLink = 'mailto:' + email + '?subject=Cyprus%20hotel%20consulting';
const content = ([title,lead,items]) => `<h2>${esc(title)}</h2><p class="section-lead">${esc(lead)}</p>
<div class="hotel-grid">${items.map(([heading,text])=>`<article><h3>${esc(heading)}</h3><p>${esc(text)}</p></article>`).join('')}</div>`;

function render(lang, t) {
  const url = site + branch + pathFor(lang);
  const up = lang === 'en' ? '' : '../';
  const base = up + '../../';
  const parent = up + '../' + (['ru','en'].includes(lang) ? lang + '/' : lang === 'el' ? 'en/' : '');
  const langs = Object.entries(languages).map(([code,name])=>`<a href="${up || './'}${pathFor(code)}" lang="${code}" dir="${direction(code)}" hreflang="${langTag(code)}"${code===lang?' aria-current="page"':''}>${name}</a>`).join('');
  const alternate = Object.keys(languages).map(code=>`<link rel="alternate" hreflang="${langTag(code)}" href="${site+branch+pathFor(code)}">`).join('\n');
  const files = Object.entries(languages).map(([code,name])=>`<li><a href="${up+pdfFor(code)}" type="application/pdf" hreflang="${code}" download><span lang="${code}" dir="${direction(code)}">${name}</span><span class="hotel-pdf-meta">PDF</span></a></li>`).join('');
  const schema = {'@context':'https://schema.org','@type':'Service', name:t.title, description:t.description,
    url, areaServed:{'@type':'Country',name:'Cyprus'}, provider:{'@type':'Organization',name:brand,url:site}};
  return `<!doctype html>
<html lang="${lang}" dir="${direction(lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t.title)} | ${brand}</title>
<meta name="description" content="${esc(t.description)}">
<link rel="canonical" href="${url}">
${alternate}
<link rel="alternate" hreflang="x-default" href="${site+branch}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${brand}">
<meta property="og:title" content="${esc(t.title)}">
<meta property="og:description" content="${esc(t.description)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${locales[lang]}">
<meta property="og:image" content="${site+photo}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${base}assets/edelstein-lab-digital-mark.svg" type="image/svg+xml">
<link rel="stylesheet" href="${base}styles.css">
<link rel="stylesheet" href="${base}software.css">
<link rel="stylesheet" href="${up}../styles.css">
<link rel="stylesheet" href="${base}service-studio.css?v=20261119-services">
<link rel="stylesheet" href="${up}cyprus.css">
<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script>
</head>
<body class="hotel-page hotel-cyprus">
<a class="skip" href="#main">${esc(t.skip)}</a>
<header class="product-header"><div class="product-wrap product-header-inner">
<a class="product-brand" href="${parent}"><img src="${base}assets/edelstein-lab-digital-mark.svg" alt="" width="32" height="32">${brand}</a>
<nav class="cyprus-languages" aria-label="${esc(t.languages)}">${langs}</nav>
</div></header>
<main id="main">
<section class="hotel-hero"><div class="product-wrap">
<nav class="breadcrumbs" aria-label="${esc(t.back)}"><a href="${parent}">${esc(t.back)}</a><span aria-hidden="true">/</span><span aria-current="page">${esc(t.country)}</span></nav>
<p class="eyebrow">${esc(t.proposal)}</p>
<h1>${esc(t.title)}</h1><p class="product-lead">${esc(t.lead)}</p>
<p class="cyprus-price"><strong><bdi dir="ltr">${esc(priceFor(lang))}</bdi></strong> <span>${esc(t.month)}</span></p>
<p class="hotel-terms">${esc(t.support)}</p>
<div class="product-actions"><a class="btn btn-light" href="#documents">${esc(t.documents)}</a><a class="text-link" href="#contact">${esc(t.contact)}</a></div>
</div></section>
<section class="product-section hotel-documents" id="documents" aria-labelledby="documents-title"><div class="product-wrap">
<h2 id="documents-title">${esc(t.documents)}</h2><p class="section-lead">${esc(t.documentNote)}</p>
<ul class="hotel-pdf-links cyprus-pdfs">${files}</ul>
</div></section>
${t.sections.map(section=>`<section class="product-section"><div class="product-wrap">${content(section)}</div></section>`).join('\n')}
<section class="product-section cyprus-terms"><div class="product-wrap"><h2>${esc(t.scope)}</h2><p class="section-lead">${esc(t.terms)}</p></div></section>
<section class="product-section product-contact" id="contact"><div class="product-wrap section-two">
<div><h2>${esc(t.contact)}</h2><p>${esc(t.contactNote)}</p></div>
<div><a class="product-phone" href="${tel}"><bdi>${phone}</bdi></a><a href="${emailLink}"><bdi>${email}</bdi></a></div>
</div></section>
</main>
<footer class="product-footer"><div class="product-wrap"><strong>${brand}</strong><a href="${parent}">${esc(t.back)}</a></div></footer>
</body></html>\n`;
}

export async function buildHotelCyprus(target) {
  for (const [lang,t] of Object.entries(words)) {
    const folder=join(target,branch,pathFor(lang));
    await mkdir(folder,{recursive:true});
    await writeFile(join(folder,'index.html'),render(lang,t));
  }
}
