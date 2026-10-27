import { mkdir, writeFile, copyFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { createRequire } from 'node:module';
import { content } from './content.mjs';
const require = createRequire(import.meta.url);
const lucide = require('lucide');
const here = dirname(fileURLToPath(import.meta.url));
const target = resolve(process.argv[2] || join(here, '..'));
const rootURL = 'https://9881988-lgtm.github.io/tiberias-plumbing/digital-agency/';
const version = '20261027';
const escape = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const e = escape;
function icon(name, extra = '') {
  const nodes = lucide[name];
  if (!nodes) throw new Error(`Unknown Lucide icon ${name}`);
  return `<svg class="icon ${extra}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${nodes.map(([tag,attrs]) => `<${tag} ${Object.entries(attrs).map(([key,value]) => `${key}="${e(value)}"`).join(' ')} />`).join('')}</svg>`;
}
const arrow = () => icon('ArrowUpRight', 'icon-direction');
const pathFor = lang => lang === 'he' ? '' : `${lang}/`;
const navIDs = ['work', 'services', 'process', 'contact'];
const serviceValues = ['landing', 'website', 'app', 'ai', 'ads'];
const budgets = ['estimate', 'small', 'medium', 'large'];
function render(lang, t) {
  const rel = lang === 'he' ? './' : '../';
  const parent = `${rel}../`;
  const canonical = rootURL + pathFor(lang);
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      {'@type':'ProfessionalService','@id':rootURL+'#organization',name:'Structor Digital',parentOrganization:{'@type':'Organization',name:'Structor Robotics'},url:rootURL,description:t.description,telephone:'+972-53-361-31-00',email:'9881988@gmail.com',address:{'@type':'PostalAddress',streetAddress:'Gush Etzion 1',addressLocality:'Tiberias',addressCountry:'IL'},areaServed:['Israel','Worldwide'],availableLanguage:['Hebrew','English','Russian','French'],openingHours:['Su-Th 09:00-18:00'],image:rootURL+'assets/hero.webp',hasOfferCatalog:{'@type':'OfferCatalog',name:'Digital services',itemListElement:t.packages.map(p=>({'@type':'Offer',priceCurrency:'ILS',price:p[1].replace(',',''),itemOffered:{'@type':'Service',name:p[0]},description:p[2]}))}},
      {'@type':'WebPage',url:canonical,name:t.title,inLanguage:lang,isPartOf:{'@type':'WebSite',url:rootURL,name:'Structor Digital'}},
      {'@type':'FAQPage',mainEntity:t.faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}
    ]
  };
  const nav = t.nav.map((item,i)=>`<a href="#${navIDs[i]}">${e(item)}</a>`).join('');
  const tags = p => `<div class="project-tags">${p.tags.map(tag=>`<span>${e(tag)}</span>`).join('')}</div>`;
  const projectIntro = p => `<div class="project-topline"><span>${e(p.label)}</span><span class="project-status">${e(p.status)}</span></div><h3 class="preline">${e(p.title)}</h3><p>${e(p.text)}</p>${tags(p)}<p class="project-note">${e(p.note)}</p>`;
  return `<!doctype html>
<html lang="${lang}" dir="${lang==='he'?'rtl':'ltr'}">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${e(t.title)}</title><meta name="description" content="${e(t.description)}">
  <meta name="robots" content="index,follow,max-image-preview:large"><meta name="theme-color" content="#d4fa4a">
  <link rel="canonical" href="${canonical}">
  ${Object.keys(content).map(code=>`<link rel="alternate" hreflang="${code==='he'?'he-IL':code}" href="${rootURL+pathFor(code)}">`).join('\n  ')}
  <link rel="alternate" hreflang="x-default" href="${rootURL}">
  <meta property="og:type" content="website"><meta property="og:site_name" content="Structor Digital">
  <meta property="og:title" content="${e(t.title)}"><meta property="og:description" content="${e(t.description)}"><meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${rootURL}assets/social-preview.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:locale" content="${({he:'he_IL',en:'en_US',ru:'ru_RU',fr:'fr_FR'})[lang]}">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${e(t.title)}"><meta name="twitter:description" content="${e(t.description)}"><meta name="twitter:image" content="${rootURL}assets/social-preview.jpg">
  <link rel="icon" href="${parent}structo-robotics/assets/structor-robotics-logo.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" href="${rel}assets/hero.webp" as="image" fetchpriority="high">
  <link rel="stylesheet" href="${rel}styles.css?v=${version}">
  <script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18222920780"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','AW-18222920780');</script>
</head>
<body id="top" data-base="${rel}" data-message-prefix="${e(t.sentPrefix)}" data-message-service="${e(t.messageService)}" data-message-budget="${e(t.messageBudget)}" data-message-brief="${e(t.messageBrief)}" data-invalid="${e(t.invalid)}">
<a class="skip" href="#main">${e(t.skip)}</a>
<header class="site-header"><div class="wrap header-inner">
  <a class="wordmark" href="#top" aria-label="Structor Digital"><img src="${parent}structo-robotics/assets/structor-robotics-logo.svg" alt="" width="37" height="37"><span>Structor<small>Digital.</small></span></a>
  <nav class="desktop-nav" aria-label="${e(t.menu)}">${nav}</nav>
  <div class="header-tools"><select class="language-select" id="language" aria-label="Language / שפה">${[['he','עברית'],['en','EN'],['ru','RU'],['fr','FR']].map(([code,name])=>`<option value="${code==='he'?'./':code+'/'}"${code===lang?' selected':''}>${name}</option>`).join('')}</select><a class="header-link" href="#contact">${e(t.start)}${arrow()}</a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="${e(t.menu)}" data-open-label="${e(t.menu)}" data-close-label="${e(t.close)}">${icon('Menu')}</button></div>
  <nav class="mobile-nav" id="mobile-nav" aria-label="${e(t.menu)}">${nav}</nav>
</div></header>
<main id="main">
  <section class="hero" aria-labelledby="hero-title">
    <img class="hero-art" src="${rel}assets/hero.webp" width="1881" height="836" alt="" fetchpriority="high">
    <div class="wrap hero-inner"><p class="eyebrow">${e(t.kicker)}</p><h1 id="hero-title"><span>Structor</span><span class="digital">Digital.</span></h1><p class="hero-lead">${e(t.lead)}</p><div class="hero-actions"><a class="btn" href="#contact">${e(t.heroCta)}${arrow()}</a><a class="text-link" href="#work">${e(t.heroWork)}${icon('ArrowDown')}</a></div><span class="hero-foot">${e(t.scroll)}</span></div>
  </section>
  <div class="capability-strip"><div class="wrap strip-inner">${t.heroNote.split(' / ').map(item=>`<span>${e(item)}</span>`).join(icon('Asterisk'))}</div></div>
  <section class="section intro"><div class="wrap intro-layout"><p class="eyebrow">${e(t.introLabel)}</p><div class="intro-main"><h2 class="preline">${e(t.introTitle)}</h2><div class="intro-copy"><p>${e(t.introText)}</p><a class="text-link" href="#services">${e(t.introLink)}${arrow()}</a></div></div></div></section>
  <section class="section work" id="work"><div class="wrap"><div class="section-head"><div><p class="eyebrow">${e(t.workLabel)}</p><h2 class="preline">${e(t.workTitle)}</h2></div><p>${e(t.workIntro)}</p></div>
    <div class="project-grid">
      <article class="project project-receipt"><a class="project-media" href="${parent}receiptil/" aria-label="${e(t.projects[0].action)}"><div class="receipt-device"><img src="${parent}receiptil/assets/dashboard.png" alt="ReceiptIL" width="1242" height="2688" loading="lazy"></div><span class="arrow media-arrow">${arrow()}</span></a><div class="project-info">${projectIntro(t.projects[0])}</div></article>
      <article class="project project-service"><a class="project-media" href="${parent}ac-cleaning/" aria-label="${e(t.projects[1].action)}"><img src="${rel}assets/mayim-website.webp" alt="${e(t.projects[1].title)}" width="1440" height="1040" loading="lazy"><span class="arrow media-arrow">${arrow()}</span></a><div class="project-info">${projectIntro(t.projects[1])}</div></article>
      <article class="project project-wide"><a class="project-media" href="${rel}ai-call-center/?lang=${lang}" aria-label="${e(t.projects[2].action)}"><img src="${rel}ai-call-center/assets/verified-answer.webp" width="1536" height="1024" alt="AI / CRM" loading="lazy"></a><div class="project-info">${projectIntro(t.projects[2])}<a class="text-link" href="${rel}ai-call-center/?lang=${lang}">${e(t.projects[2].action)}${arrow()}</a></div></article>
    </div>
  </div></section>
  <section class="section services" id="services"><div class="wrap"><div class="section-head"><div><p class="eyebrow">${e(t.serviceLabel)}</p><h2 class="preline">${e(t.serviceTitle)}</h2></div><p>${e(t.serviceIntro)}</p></div><div class="service-list">${t.services.map(([title,text,items,id],index)=>`<article class="service-row"><span class="service-index">0${index+1}</span><details${index===0?' open':''}><summary><h3>${e(title)}</h3><span class="plus">${icon('Plus')}</span></summary><div class="service-body"><p>${e(text)}</p><p class="deliverables">${e(items)}</p></div></details><button class="service-request" type="button" data-service-choice="${id}" aria-label="${e(t.start)} · ${e(title)}" title="${e(t.start)}"><span class="arrow">${arrow()}</span></button></article>`).join('')}</div></div></section>
  <section class="ai-section"><div class="wrap ai-layout"><div><p class="eyebrow">${e(t.aiLabel)}</p><h2 class="preline">${e(t.aiTitle)}</h2></div><div><p>${e(t.aiText)}</p><a class="btn btn-light" href="${rel}ai-call-center/?lang=${lang}">${e(t.aiLink)}${arrow()}</a><small class="ai-note">${e(t.aiNote)}</small></div></div></section>
  <section class="section" id="process"><div class="wrap"><div class="process-head"><p class="eyebrow">${e(t.processLabel)}</p><h2>${e(t.processTitle)}</h2></div><div class="process-grid">${t.steps.map(([title,text],i)=>`<article class="step"><span>0${i+1}</span><h3>${e(title)}</h3><p>${e(text)}</p></article>`).join('')}</div></div></section>
  <section class="section pricing" id="pricing"><div class="wrap"><div class="section-head"><div><p class="eyebrow">${e(t.pricingLabel)}</p><h2 class="preline">${e(t.pricingTitle)}</h2></div><p>${e(t.pricingIntro)}</p></div><div class="pricing-grid">${t.packages.map(([title,price,text,id],i)=>`<article class="package"><h3>${e(title)}</h3><p class="package-price"><small>${e(t.from)}</small><strong>₪${price}</strong>${i===3?`<span>${e(t.monthly)}</span>`:''}</p><p>${e(text)}</p><button type="button" data-service-choice="${id}">${e(t.choose)}${arrow()}</button></article>`).join('')}</div><p class="price-note">${e(t.priceNote)}</p></div></section>
  <section class="section faq"><div class="wrap faq-layout"><div><p class="eyebrow">${e(t.faqLabel)}</p><h2>${e(t.faqTitle)}</h2></div><div class="faq-list">${t.faqs.map(([q,a])=>`<details><summary>${e(q)}${icon('Plus')}</summary><p>${e(a)}</p></details>`).join('')}</div></div></section>
  <section class="contact" id="contact"><div class="wrap contact-layout"><div><p class="eyebrow">${e(t.contactLabel)}</p><h2 class="preline">${e(t.contactTitle)}</h2><p class="contact-lead">${e(t.contactText)}</p><a class="contact-phone" dir="ltr" href="tel:+972533613100">+972 53 361 3100</a><a class="contact-email" dir="ltr" href="mailto:9881988@gmail.com">9881988@gmail.com</a><address class="address"><span>${e(t.location)}</span><span>${e(t.hours).replace('09:00–18:00','<bdi dir="ltr">09:00–18:00</bdi>')}</span><span>${e(t.appointment)}</span></address></div>
    <form class="brief-form" id="project-brief"><div class="form-row"><div class="field"><label for="service">${e(t.service)}</label><select name="service" id="service">${t.serviceOptions.map((title,i)=>`<option value="${serviceValues[i]}">${e(title)}</option>`).join('')}</select></div><div class="field"><label for="budget">${e(t.budget)}</label><select id="budget" name="budget">${t.budgets.map((title,i)=>`<option value="${budgets[i]}">${e(title)}</option>`).join('')}</select></div></div><div class="field"><label for="brief">${e(t.brief)}</label><textarea name="brief" id="brief" maxlength="1500" placeholder="${e(t.placeholder)}" required aria-describedby="brief-error form-privacy"></textarea></div><p id="brief-error" role="status" aria-live="polite"></p><a class="btn btn-light" id="continue-whatsapp" href="https://wa.me/972533613100" target="_blank" rel="noopener">${e(t.send)}${arrow()}</a><p class="form-privacy" id="form-privacy">${e(t.privacy)}</p><p class="mail-option">${e(t.mail)} <a id="brief-email" dir="ltr" href="mailto:9881988@gmail.com">9881988@gmail.com</a></p></form>
  </div></section>
</main>
<footer class="site-footer"><div class="wrap"><div class="footer-top"><a class="footer-brand" href="#top">Structor Digital.</a><p class="footer-line">${e(t.footer)}</p></div><div class="footer-bottom"><span>© 2026 Structor Digital</span><a class="footer-parent" href="${parent}structo-robotics/">${e(t.parent)}</a><a class="backtop" href="#top">${e(t.toTop)}${icon('ArrowUp')}</a></div></div></footer>
<a class="mobile-contact" href="#contact" aria-label="${e(t.start)}" title="${e(t.start)}">${icon('MessageCircle')}</a>
<script src="${rel}script.js?v=${version}" defer></script>
</body></html>`;
}
await mkdir(target, {recursive:true});
for (const [lang,t] of Object.entries(content)) {
  const dir = join(target,pathFor(lang));
  await mkdir(dir,{recursive:true});
  await writeFile(join(dir,'index.html'),render(lang,t));
}
for (const name of ['styles.css','script.js']) {
  const file = join(here,name);
  try { await copyFile(file,join(target,name)); } catch(error) { if(error.code !== 'ENOENT') throw error; }
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${Object.keys(content).map(lang=>`<url><loc>${rootURL+pathFor(lang)}</loc><lastmod>2026-10-27</lastmod>${Object.keys(content).map(code=>`<xhtml:link rel="alternate" hreflang="${code}" href="${rootURL+pathFor(code)}"/>`).join('')}</url>`).join('')}</urlset>`;
await writeFile(join(target,'sitemap.xml'),sitemap);
console.log(`Built ${Object.keys(content).length} localised Structor Digital pages in ${target}`);
