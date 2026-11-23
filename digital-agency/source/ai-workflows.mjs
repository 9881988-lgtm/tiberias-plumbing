import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { workflows } from './ai-workflows-copy.mjs';

const brand = 'Eydelstein Digital Lab';
const languages = {he:'עברית', ru:'Русский', en:'English', fr:'Français'};
const suffix = lang => lang === 'he' ? '' : lang + '/';
const tag = lang => lang === 'he' ? 'he-IL' : lang;
const route = lang => 'ai-workflows/' + suffix(lang);

export async function buildWorkflows(target, site, e) {
  for (const [lang,t] of Object.entries(workflows)) {
    const local = suffix(lang), base = local ? '../../' : '../';
    const home = base + local, url = site + route(lang);
    const cta = base + 'request/' + local + '?product=ai-workflows&amp;intent=order';
    const locales = Object.entries(languages);
    const schema = {'@context':'https://schema.org','@type':'Service',name:t.title,description:t.desc,url,
      provider:{'@type':'Organization',name:brand,url:site},serviceType:t.title,
      hasOfferCatalog:{'@type':'OfferCatalog',name:t.cases,itemListElement:t.uses.map(([name,description])=>({'@type':'Offer',itemOffered:{'@type':'Service',name,description}}))}};
    const page = `<!doctype html>
<html lang="${lang}" dir="${lang==='he'?'rtl':'ltr'}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${e(t.title)} | ${brand}</title><meta name="description" content="${e(t.desc)}">
<link rel="canonical" href="${url}">
${locales.map(([code])=>`<link rel="alternate" hreflang="${tag(code)}" href="${site+route(code)}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${site+route('he')}">
<meta property="og:type" content="website"><meta property="og:site_name" content="${brand}">
<meta property="og:title" content="${e(t.title)}"><meta property="og:description" content="${e(t.desc)}">
<meta property="og:url" content="${url}"><meta property="og:image" content="${site}assets/hero.webp"><meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${base}assets/edelstein-lab-digital-mark.svg" type="image/svg+xml">
<link rel="stylesheet" href="${base}styles.css"><link rel="stylesheet" href="${base}software.css">
<link rel="stylesheet" href="${base}service-studio.css"><link rel="stylesheet" href="${base}ai-workflows/workflows.css">
<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script>
</head><body class="workflow-page">
<a class="skip" href="#main">${e(t.skip)}</a>
<header class="product-header"><div class="product-wrap product-header-inner"><a class="product-brand" href="${home}"><img src="${base}assets/edelstein-lab-digital-mark.svg" width="32" height="32" alt="">${brand}</a>
<nav class="wf-languages" aria-label="Language / שפה">${locales.map(([code,name])=>`<a href="${base+route(code)}" lang="${code}" hreflang="${tag(code)}"${code===lang?' aria-current="page"':''}>${name}</a>`).join('')}</nav></div></header>
<main id="main"><section class="wf-hero"><div class="product-wrap">
<a class="wf-back" href="${home}#services">${e(t.back)}</a>
<h1>${e(t.title)}</h1><p class="product-lead">${e(t.lead)}</p>
<div class="product-actions"><a class="btn" href="${cta}">${e(t.cta)}</a><a class="text-link" href="#use-cases">${e(t.browse)}</a></div>
</div></section>
<section class="product-section wf-example"><div class="product-wrap"><p class="eyebrow">${e(t.example)}</p><h2>${e(t.flow)}</h2>
<ol class="wf-steps">${t.steps.map(([name,body])=>`<li><h3>${e(name)}</h3><p>${e(body)}</p></li>`).join('')}</ol></div></section>
<section class="product-section" id="use-cases"><div class="product-wrap"><h2>${e(t.cases)}</h2>
<div class="wf-cases">${t.uses.map(([name,body,metric],i)=>`<article><h3><span aria-hidden="true">${String(i+1).padStart(2,'0')}</span>${e(name)}</h3><p>${e(body)}</p><p class="wf-metric"><strong>${e(t.metric)}</strong>${e(metric)}</p></article>`).join('')}</div></div></section>
<section class="product-section modules"><div class="product-wrap section-two"><h2>${e(t.pilot)}</h2><div><p>${e(t.baseline)}</p><p class="wf-calc">${e(t.calc)}</p></div></div></section>
<section class="product-section"><div class="product-wrap section-two"><h2>${e(t.scope)}</h2><p>${e(t.guard)}</p></div></section>
<section class="product-section product-contact"><div class="product-wrap section-two"><h2>${e(t.close)}</h2><div><p>${e(t.brief)}</p><div class="product-actions"><a class="btn btn-light" href="${cta}">${e(t.cta)}</a></div></div></div></section>
</main><footer class="product-footer"><div class="product-wrap"><a href="${home}">${brand}</a><a href="${home}#services">${e(t.back)}</a></div></footer>
</body></html>\n`;
    const dir=join(target,route(lang));
    await mkdir(dir,{recursive:true});
    await writeFile(join(dir,'index.html'),page);
  }
}
