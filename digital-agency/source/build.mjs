import { mkdir, writeFile, copyFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { buildServiceEditions } from './service-editions.mjs';
import { content } from './content.mjs';
import { buildContactPages } from './contact-pages.mjs';
import { capabilities, intro as capabilityIntro } from './capabilities.mjs';
import { siteSales } from './lead-copy.mjs';
import { studio } from './studio.mjs';
import { crmPlans, renderCrmPlans } from '../crm-plans.mjs';
import { buildInnovation, innovation, innovationPath } from './innovation.mjs';
import { buildSoftware, softwarePath, softwareUrls } from './software.mjs';
import { buildDental, dentalUrls } from './dental.mjs';
import { buildAuto, autoUrls } from './auto.mjs';
import { buildSecretaryOffers, secretaryUrls, renderSecretaryCatalogue } from './secretary.mjs';
const require = createRequire(import.meta.url);
const lucide = require('lucide');
const here = dirname(fileURLToPath(import.meta.url));
const target = resolve(process.argv[2] || join(here, '..'));
const rootURL = 'https://9881988-lgtm.github.io/tiberias-plumbing/digital-agency/';
const version = '20261122-search';
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
const serviceValues = ['landing', 'website', 'app', 'ai', 'ads', 'innovation'];
const hotelUrls = ['hotel-consulting/','hotel-consulting/ru/'].map(path=>rootURL+path);
function render(lang, t) {
  const rel = lang === 'he' ? './' : '../';
  const pageVersion = version;
  const parent = `${rel}../`;
  const canonical = rootURL + pathFor(lang);
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      {'@type':'ProfessionalService','@id':rootURL+'#organization',name:'Eydelstein Digital Lab',parentOrganization:{'@type':'Organization',name:'Structor Robotics'},url:rootURL,description:t.description,telephone:'+972-55-507-1400',email:'9881988@gmail.com',address:{'@type':'PostalAddress',streetAddress:'Gush Etzion 1',addressLocality:'Tiberias',addressCountry:'IL'},areaServed:['Israel','Worldwide'],availableLanguage:['Hebrew','English','Russian','French'],openingHours:['Su-Th 09:00-18:00'],image:rootURL+'assets/hero.webp'},
      {'@type':'WebPage',url:canonical,name:t.title,inLanguage:lang,isPartOf:{'@type':'WebSite',url:rootURL,name:'Eydelstein Digital Lab'}},
      {'@type':'FAQPage',mainEntity:t.faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}
    ]
  };
  const productLang = lang;
  schema['@graph'][0].hasOfferCatalog={'@type':'OfferCatalog',name:capabilityIntro[lang][0],itemListElement:capabilities.map(c=>({'@type':'Offer',itemOffered:{'@type':'Service',name:c[lang][0],description:c[lang][1],url:canonical+'#'+c.id}}))};
  const preview = (name, widths, sizes) => `src="${rel}assets/${name}-${widths[0]}.webp" srcset="${widths.map(w => rel+'assets/'+name+'-'+w+'.webp '+w+'w').join(', ')}" sizes="${sizes}"`;
  const offlineDownloadTitle = {he:'הורדת Edelstein CRM Israel',ru:'Скачать Edelstein CRM Israel',en:'Download Edelstein CRM Israel',fr:'Télécharger Edelstein CRM Israel'}[lang];
  const s = studio[lang];
  const inquiry = slug => {
    const product=encodeURIComponent(slug);
    const [ask,call,order]=siteSales[lang];
    return `<span class="studio-sales-actions"><a class="lead-cta" href="${rel}request/${pathFor(lang)}?product=${product}&amp;intent=order">${e(order)}${arrow()}</a><a href="${rel}contacts/${pathFor(lang)}?product=${product}#advisor">${e(ask)}</a><a href="tel:+972555071400">${e(call)}</a></span>`;
  };
  const urls = [softwarePath('crm',productLang), softwarePath('sales',productLang), softwarePath('calls',productLang), 'dental-secretary/'+pathFor(productLang), 'auto-secretary/'+pathFor(productLang), 'hotel-consulting/'+pathFor(lang), softwarePath('software',productLang), innovationPath(lang), 'hotel-secretary/'+pathFor(lang), 'small-business-secretary/'+pathFor(lang)];
  const symbols = ['PanelsTopLeft','MessagesSquare','PhoneCall','CalendarDays','Wrench','Building2','Layers','Lightbulb','BedDouble','PhoneForwarded'];
  const directory = urls.map((url,i)=>url ? `<div class="route-offer"><a class="studio-route"${i===0?' id="software"':i===5?' id="hotel-consulting"':i===7?' id="innovation"':''} href="${rel+url}">${icon(symbols[i])}<span>${e(i===7?innovation[lang].title:s.links[i])}${i===7?`<small>${e(s.applicationAction)}</small>`:''}</span>${arrow()}</a>${inquiry(url.split('/')[0])}</div>` : '').join('');
  const nav = t.nav.map((item,i)=>`<a href="${i===3?rel+'contacts/'+pathFor(lang):'#'+navIDs[i]}">${e(item)}</a>`).join('') + `<a href="${rel + softwarePath('crm',productLang)}">Galany CRM</a>` + (['ru','he'].includes(lang) ? `<a href="#secretary-catalog">${lang==='he'?'קטלוג':'Каталог'}</a>` : '');
  const tags = p => `<div class="project-tags">${p.tags.map(tag=>`<span>${e(tag)}</span>`).join('')}</div>`;
  const projectIntro = p => `<div class="project-topline"><span>${e(p.label.replace(/^\d+\s*\/\s*/, ''))}</span><span class="project-status">${e(p.status)}</span></div><h3 class="preline">${e(p.title)}</h3><p>${e(p.text)}</p>${tags(p)}<p class="project-note">${e(p.note)}</p>`;
  return `<!doctype html>
<html lang="${lang}" dir="${lang==='he'?'rtl':'ltr'}">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${e(t.title)}</title><meta name="description" content="${e(t.description)}">
  <meta name="robots" content="index,follow,max-image-preview:large"><meta name="theme-color" content="#d4fa4a">
  <link rel="canonical" href="${canonical}">
  ${Object.keys(content).map(code=>`<link rel="alternate" hreflang="${code==='he'?'he-IL':code}" href="${rootURL+pathFor(code)}">`).join('\n  ')}
  <link rel="alternate" hreflang="x-default" href="${rootURL}">
  <meta property="og:type" content="website"><meta property="og:site_name" content="Eydelstein Digital Lab">
  <meta property="og:title" content="${e(t.title)}"><meta property="og:description" content="${e(t.description)}"><meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${rootURL}assets/hero.webp"><meta property="og:image:width" content="1881"><meta property="og:image:height" content="836">
  <meta property="og:locale" content="${({he:'he_IL',en:'en_US',ru:'ru_RU',fr:'fr_FR'})[lang]}">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${e(t.title)}"><meta name="twitter:description" content="${e(t.description)}"><meta name="twitter:image" content="${rootURL}assets/hero.webp">
  <link rel="icon" href="${rel}assets/edelstein-lab-digital-mark.svg" type="image/svg+xml">
  <link rel="preload" href="${rel}assets/hero.webp" as="image" fetchpriority="high">
  <link rel="stylesheet" href="${rel}styles.css?v=${pageVersion}">
  <link rel="stylesheet" href="${rel}software.css?v=${pageVersion}">
  <link rel="stylesheet" href="${rel}secretary-offers.css?v=${pageVersion}">
  ${crmPlans[lang] ? `<link rel="stylesheet" href="${rel}crm-plans.css?v=20261102-crm">` : ''}
  <link rel="stylesheet" href="${rel}studio.css?v=20261121-readable">
  <script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18222920780"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','AW-18222920780');</script>
</head>
<body id="top" data-base="${rel}" data-message-prefix="${e(t.sentPrefix)}" data-message-service="${e(t.messageService)}" data-message-brief="${e(t.messageBrief)}" data-invalid="${e(t.invalid)}">
<a class="skip" href="#main">${e(t.skip)}</a>
<header class="site-header"><div class="wrap header-inner">
  <a class="wordmark" href="#top" aria-label="Eydelstein Digital Lab"><img src="${rel}assets/edelstein-lab-digital-mark.svg" alt="" width="37" height="37"><span>Eydelstein<small>Digital Lab</small></span></a>
  <nav class="desktop-nav" aria-label="${e(t.menu)}">${nav}</nav>
  <div class="header-tools"><select class="language-select" id="language" aria-label="Language / שפה">${[['he','עברית'],['en','EN'],['ru','RU'],['fr','FR']].map(([code,name])=>`<option value="${code==='he'?'./':code+'/'}"${code===lang?' selected':''}>${name}</option>`).join('')}</select><a class="header-link" href="#contact">${e(t.start)}${arrow()}</a><a class="mobile-contact" href="#contact" aria-label="${e(t.start)}" title="${e(t.start)}">${icon('MessageCircle')}</a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="${e(t.menu)}" data-open-label="${e(t.menu)}" data-close-label="${e(t.close)}">${icon('Menu')}</button></div>
  <nav class="mobile-nav" id="mobile-nav" aria-label="${e(t.menu)}">${nav}</nav>
</div></header>
<main id="main">
  <section class="hero" aria-labelledby="hero-title">
    <img class="hero-art" src="${rel}assets/hero.webp" width="1881" height="836" alt="" fetchpriority="high">
    <div class="wrap hero-inner"><p class="eyebrow"><span class="studio-key" aria-hidden="true"></span>${e(s.location)}</p><h1 id="hero-title"><span>Eydelstein</span> <span class="digital">Digital Lab.</span></h1><p class="hero-lead">${e(s.lead)}</p><div class="hero-actions"><a class="btn" href="#contact">${e(t.heroCta)}${arrow()}</a><a class="text-link" href="#work">${e(t.heroWork)}${icon('ArrowDown')}</a></div></div>
  </section>
  <div class="capability-strip"><div class="wrap strip-inner">${t.heroNote.split(' / ').map(item=>`<span>${e(item)}</span>`).join(icon('Asterisk'))}</div></div>
  <section class="section work" id="work"><div class="wrap"><div class="section-head"><div><p class="eyebrow">${e(t.workLabel)}</p><h2 class="preline">${e(s.work)}</h2></div></div>
    <div class="project-grid">
      <article class="project project-wide"><a class="project-media" href="${rel + softwarePath('crm',productLang)}" aria-label="${e(t.projects[2].action)}"><img ${preview('crm-preview', [480,800,1280], '(max-width: 760px) 94vw, 760px')} width="1280" height="720" alt="Galany CRM · test interface" loading="lazy"></a><div class="project-info">${projectIntro(t.projects[2])}<a class="text-link" href="${rel + softwarePath('crm',productLang)}">${e(t.projects[2].action)}${arrow()}</a> <a class="text-link" href="${rel+softwarePath('crm',productLang)}#desktop-downloads">${e(offlineDownloadTitle)}</a>${inquiry('galany-crm')}</div></article>
      <article class="project project-receipt"><a class="project-media" href="${parent}receiptil/" aria-label="${e(t.projects[0].action)}"><div class="receipt-device"><img ${preview('receipt-preview', [320,480], '190px')} alt="ReceiptIL" width="1242" height="2688" loading="lazy"></div><span class="arrow media-arrow">${arrow()}</span></a><div class="project-info">${projectIntro(t.projects[0])}${inquiry('receiptil')}</div></article>
      <article class="project project-service"><a class="project-media" href="${parent}ac-cleaning/" aria-label="${e(t.projects[1].action)}"><img ${preview('ac-preview', [480,800,1200], '(max-width: 760px) 92vw, 520px')} alt="${e(t.projects[1].title)}" width="1672" height="941" loading="lazy"><span class="arrow media-arrow">${arrow()}</span></a><div class="project-info">${projectIntro(t.projects[1])}${inquiry('ac-cleaning')}</div></article>
    </div>
    <details class="studio-fold studio-platform"><summary>${e(s.next)}${icon("Plus")}</summary>
    <p class="platform-status">${e(t.workIntro)}</p>
    <div class="platform-preview" id="next-releases" aria-labelledby="platform-title">
      <div class="platform-copy"><p class="eyebrow">${e(t.platformKicker)}</p><h3 id="platform-title" class="preline">${e(t.platformTitle)}</h3><p class="platform-models"><a href="https://www.apple.com/iphone-duo/" target="_blank" rel="noopener"><bdi>iPhone Duo</bdi>${icon('ArrowUpRight')}</a><a href="https://support.apple.com/en-us/100100" target="_blank" rel="noopener"><bdi>iOS 27.2</bdi>${icon('ArrowUpRight')}</a></p><p class="platform-description">${e(t.platformText)}</p><p class="platform-verified">${e(t.platformVerified)}</p></div>
      <figure class="platform-figure"><img src="${rel}assets/iphone-duo-ios-27-2.webp" width="1536" height="1024" alt="${e(t.platformAlt)}" loading="lazy"><figcaption>${e(t.platformCaption)}</figcaption></figure>
    </div>
    </details>
  </div></section>
  <section class="section services" id="services"><div class="wrap"><div class="section-head"><div><p class="eyebrow">${e(t.serviceLabel)}</p><h2 class="preline">${e(s.services)}</h2></div><p>${e(t.serviceIntro)}</p></div><div class="service-list">${t.services.map(([title,text,items,id],index)=>`<article class="service-row"><span class="service-index">0${index+1}</span><details${index===0?' open':''}><summary><h3>${e(title)}</h3><span class="plus">${icon('Plus')}</span></summary><div class="service-body"><p>${e(text)}</p><p class="deliverables">${e(items)}</p>${inquiry(id)}</div></details><button class="service-request" type="button" data-service-choice="${id}" aria-label="${e(t.start)} · ${e(title)}" title="${e(t.start)}"><span class="arrow">${arrow()}</span></button></article>`).join('')}</div></div></section>
  <section class="studio-directory section"><div class="wrap"><div class="directory-heading"><h2>${e(s.directory)}</h2><p>${e(s.directoryLead)}</p></div><div class="studio-routes">${directory}</div></div></section>
  <section class="section capabilities" id="capabilities"><div class="wrap"><div class="section-head"><h2>${e(capabilityIntro[lang][0])}</h2><p>${e(capabilityIntro[lang][1])}</p></div><div class="capability-offers">${capabilities.map(c=>`<article id="${c.id}"><h3>${e(c[lang][0])}</h3><p>${e(c[lang][1])}</p>${inquiry(c.id)}</article>`).join('')}</div></div></section>
  ${renderSecretaryCatalogue(lang)}
  <section class="section" id="process"><div class="wrap"><div class="process-head"><p class="eyebrow">${e(t.processLabel)}</p><h2>${e(s.process)}</h2></div><div class="process-grid">${t.steps.map(([title,text],i)=>`<article class="step"><span>0${i+1}</span><h3>${e(title)}</h3><p>${e(text)}</p></article>`).join('')}</div></div></section>
  ${crmPlans[lang] ? `<div class="wrap studio-plans"><details class="studio-fold"><summary>${e(s.pricing)}${icon('Plus')}</summary>${renderCrmPlans(lang)}</details></div>` : ''}
  <section class="section faq"><div class="wrap faq-layout"><div><p class="eyebrow">${e(t.faqLabel)}</p><h2>${e(t.faqTitle)}</h2></div><div class="faq-list">${t.faqs.map(([q,a])=>`<details><summary>${e(q)}${icon('Plus')}</summary><p>${e(a)}</p></details>`).join('')}</div></div></section>
  <section class="contact" id="contact"><div class="wrap contact-layout"><div><p class="eyebrow">${e(t.contactLabel)}</p><h2 class="preline">${e(s.contact)}</h2><p class="contact-lead">${e(t.contactText)}</p><a class="contact-phone" dir="ltr" href="tel:+972555071400">+972 55 507 1400</a><a class="contact-email" dir="ltr" href="mailto:9881988@gmail.com">9881988@gmail.com</a><a class="contact-email contact-whatsapp" href="https://wa.me/972533613100" dir="ltr">WhatsApp: +972 53 361 3100</a><address class="address"><span>${e(t.location)}</span><span>${e(t.hours).replace('09:00–18:00','<bdi dir="ltr">09:00–18:00</bdi>')}</span><span>${e(t.appointment)}</span></address></div>
    <form class="brief-form" id="project-brief"><div class="form-row"><div class="field"><label for="service">${e(t.service)}</label><select name="service" id="service">${[...t.serviceOptions,innovation[lang].label].map((title,i)=>`<option value="${serviceValues[i]}">${e(title)}</option>`).join('')}</select></div></div><div class="field"><label for="brief">${e(t.brief)}</label><textarea name="brief" id="brief" maxlength="1500" placeholder="${e(t.placeholder)}" required aria-describedby="brief-error form-privacy"></textarea></div><p id="brief-error" role="status" aria-live="polite"></p><a class="btn btn-light" id="continue-whatsapp" href="https://wa.me/972533613100" target="_blank" rel="noopener">${e(t.send)}${arrow()}</a><p class="form-privacy" id="form-privacy">${e(t.privacy)}</p><p class="mail-option">${e(t.mail)} <a id="brief-email" dir="ltr" href="mailto:9881988@gmail.com">9881988@gmail.com</a></p></form>
  </div></section>
</main>
<footer class="site-footer"><div class="wrap"><div class="footer-top"><a class="footer-brand" href="#top">Eydelstein Digital Lab.</a><p class="footer-line">${e(t.footer)}</p></div><div class="footer-bottom"><span>© 2026 Eydelstein Digital Lab</span><a href="${rel}contacts/${pathFor(lang)}">${e(t.nav[3])}</a><nav class="footer-locales" aria-label="${{he:'שפות',en:'Languages',ru:'Языки',fr:'Langues'}[lang]}">${Object.entries({he:'עברית',ru:'Русский',en:'English',fr:'Français'}).map(([code,label])=>`<a lang="${code}" hreflang="${code}" href="${rel+pathFor(code)}"${code===lang?' aria-current="page"':''}>${label}</a>`).join(' ')}</nav><a href="${rel}sitemap.xml">${{he:'מפת האתר',ru:'Карта сайта',en:'Sitemap',fr:'Plan du site'}[lang]}</a><a class="footer-parent" href="${parent}structo-robotics/">${e(t.parent)}</a><a class="backtop" href="#top">${e(t.toTop)}${icon('ArrowUp')}</a></div></div></footer>
<script src="${rel}script.js?v=${pageVersion}" defer></script>
</body></html>`;
}
await mkdir(target, {recursive:true});
const callCenterPath = join(target, 'ai-call-center', 'index.html');
const homeOnly = process.env.SITE_SCOPE === 'home';
const designOnly = process.env.SITE_SCOPE === 'service-design';
if (!homeOnly && !designOnly) try {
  const callCenter = await readFile(callCenterPath, 'utf8');
  if (callCenter.includes('<!-- CRM PLANS START -->')) {
    let updated = callCenter.replace(/<!-- CRM PLANS START -->[\s\S]*?<!-- CRM PLANS END -->/, `<!-- CRM PLANS START -->${renderCrmPlans('he')}<!-- CRM PLANS END -->`);
    const productLinks = '<!-- GALANY LINKS START --><section style="padding:28px 24px;background:#edf3ee;color:#171916" aria-label="Galany CRM"><div style="max-width:1160px;margin:auto;display:flex;flex-wrap:wrap;gap:18px"><strong>Galany CRM</strong><a href="../galany-crm/">CRM לעסקים בישראל</a><a href="../ai-sales-agent/">נציג מכירות AI</a><a href="../call-center-software/">תוכנת מוקד</a><a href="../galany-crm/ru/">CRM на русском</a><a href="../galany-crm/en/">CRM in English</a></div></section><!-- GALANY LINKS END -->';
    updated = updated.includes('<!-- GALANY LINKS START -->') ? updated.replace(/<!-- GALANY LINKS START -->[\s\S]*?<!-- GALANY LINKS END -->/,productLinks) : updated.replace(/<main[^>]*>/,match=>match+productLinks);
    await writeFile(callCenterPath,updated);
  }
} catch (error) { if (error.code !== 'ENOENT') throw error; }
const selectedLanguages = process.env.SITE_LANGUAGES?.split(',');
for (const [lang,t] of Object.entries(content)) {
  if (selectedLanguages && !selectedLanguages.includes(lang)) continue;
  const dir = join(target,pathFor(lang));
  await mkdir(dir,{recursive:true});
  await writeFile(join(dir,'index.html'),render(lang,t).replace(/[ \t]+$/gm,''));
}
await buildContactPages(target,rootURL,icon,e);
for (const name of ['contact-pages.css','contact-pages.js','styles.css','studio.css','service-studio.css','script.js','analytics.css','analytics.js']) {
  const file = join(here,'..',name);
  if (resolve(file) !== resolve(target,name)) await copyFile(file,join(target,name));
}
if (!homeOnly) {
await buildSoftware(target,designOnly?['fr']:undefined);
if (!designOnly) {
  await buildDental(target);
  await buildAuto(target);
  await buildSecretaryOffers(target);
}
await buildInnovation(target);
await buildServiceEditions(target);
const sitemapEntry = (url, lastModified='2026-11-18', alternates='') =>
  `<url><loc>${url}</loc><lastmod>${lastModified}</lastmod>${alternates}</url>`;
const localizedHome = Object.keys(content).map(code=>`<xhtml:link rel="alternate" hreflang="${code==='he'?'he-IL':code}" href="${rootURL+pathFor(code)}"/>`).join('');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${[
  ...Object.keys(content).map(lang=>sitemapEntry(rootURL+pathFor(lang), innovation[lang].lastModified, localizedHome)),
  ...[...softwareUrls,...dentalUrls,...autoUrls].map(url=>sitemapEntry(url)),
  ...Object.keys(innovation).map(lang=>sitemapEntry(rootURL+innovationPath(lang), innovation[lang].lastModified)),
  ...['contacts','request'].flatMap(slug=>Object.keys(content).map(lang=>sitemapEntry(rootURL+slug+'/'+pathFor(lang),'2026-11-20'))),
  ...hotelUrls.map(url=>sitemapEntry(url)),
  ...secretaryUrls.map(url=>sitemapEntry(url,'2026-11-19'))
].join('')}</urlset>`;
if (!designOnly) await writeFile(join(target,'sitemap.xml'),sitemap);
execFileSync('python3',[join(here,'service-layout.py'),target]);
}
execFileSync('python3',[join(here,'analytics-layout.py'),target]);
console.log(`Built ${Object.keys(content).length} localised Eydelstein Digital Lab pages in ${target}`);
