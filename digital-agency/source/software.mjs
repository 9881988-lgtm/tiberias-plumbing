import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { crmPlans, renderCrmPlans } from '../crm-plans.mjs';
import { softwareRoutes, softwareContent } from './software-content.mjs';
import { dentalPlans } from '../dental-plan.mjs';
import { renderDentalTeaser } from './dental.mjs';
import { autoPlans } from '../auto-plan.mjs';
import { renderAutoTeaser } from './auto.mjs';

const root = 'https://9881988-lgtm.github.io/tiberias-plumbing/digital-agency/';
const version = '20261118-quote';
const e = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const softwarePath = (key, lang) => `${softwareRoutes[key]}/${lang === 'he' ? '' : lang + '/'}`;
export const softwareUrls = Object.keys(softwareRoutes).flatMap(key => Object.keys(softwareContent).map(lang => root + softwarePath(key, lang)));

export function renderSoftwareTeaser(lang, rel) {
  const language = softwareContent[lang] ? lang : 'en';
  const t = softwareContent[language];
  return `<section class="software-intro section" id="software" lang="${language}" dir="${language === 'he' ? 'rtl' : 'ltr'}"><div class="wrap"><p class="eyebrow">${e(t.software)}</p><h2>Galany CRM</h2><p class="software-summary">${e(t.pages.crm.lead)}</p><div class="software-links">${['crm','sales','calls'].map(key => `<a class="text-link" href="${rel + softwarePath(key, language)}">${e(t.pages[key].name)} <span aria-hidden="true">↗</span></a>`).join('')}</div><p class="software-summary software-small">${e(t.available)}</p><a class="btn" href="${rel + softwarePath('software', language)}">${e(t.demo)}</a></div></section>`;
}

const englishPlans = [
  [autoPlans.en.name, 'Reception and booking for workshops.'],
  [dentalPlans.en.name, 'Administrative reception for private dental clinics.'],
  ['My Receptionist','Reception and scheduling for small service businesses.'],
  ['Light','AI-assisted sales, mobile CRM, website and digital presence.'],
  ['Booking','Light plus booking and calendar workflows with supported platforms.'],
  ['Business','Light plus complex integrations and a dedicated service line.'],
  ['Business Plus','Business features with support for additional lines.']
];

function pricing(lang) {
  if (lang !== 'en') return renderCrmPlans(lang);
  return '<section class="crm-pricing" id="crm-pricing"><div class="crm-inner"><header class="crm-heading"><h2>Galany CRM service packages</h2><p>We tailor a proposal to your workflows and connections.</p></header><div class="crm-plan-grid">' + englishPlans.map(([name,text]) => '<article class="crm-plan"><h3>'+e(name)+'</h3><p>'+e(text)+'</p><a class="crm-contact" href="#contact">Request a demo</a></article>').join('') + '</div></div></section>';
}

function schema(key, lang, canonical, t, p) {
  const organization = root + '#organization';
  const graph = [
    {'@type':'Organization','@id':organization,name:'Eydelstein Digital Lab',url:root,parentOrganization:{'@type':'Organization',name:'Structor Robotics'},telephone:'+972-55-507-1400',email:'9881988@gmail.com',logo:root+'assets/edelstein-lab-digital-mark.svg'},
    {'@type': key === 'software' ? 'CollectionPage' : 'WebPage','@id':canonical+'#page',url:canonical,name:p.title,description:p.description,inLanguage:lang,isPartOf:{'@type':'WebSite','@id':root+'#website',url:root,name:'Eydelstein Digital Lab'},publisher:{'@id':organization},dateModified:'2026-11-10'},
    {'@type':'BreadcrumbList',itemListElement:[{ '@type':'ListItem',position:1,name:'Eydelstein Digital Lab',item:root+(lang==='he'?'':lang+'/')},{'@type':'ListItem',position:2,name:t.software,item:root+softwarePath('software',lang)},...(key==='software'?[]:[{'@type':'ListItem',position:3,name:p.name,item:canonical}])]},
    {'@type':'FAQPage',mainEntity:p.faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}
  ];
  if (key === 'software') graph.push({'@type':'ItemList',name:t.modulesTitle,itemListElement:['crm','sales','calls'].map((item,i)=>({'@type':'ListItem',position:i+1,name:t.pages[item].name,url:root+softwarePath(item,lang)}))});
  else graph.push({'@type':'SoftwareApplication','@id':canonical+'#software',name:p.name,...(key==='crm'?{alternateName:'Golani CRM'}:{}),applicationCategory:'BusinessApplication',operatingSystem:'Web browser',url:canonical,description:p.description,inLanguage:lang,provider:{'@id':organization},screenshot:root+'assets/galany-crm-test-interface.png',featureList:p.features.map(x=>x[0]),...(key==='crm'?{hasPart:['sales','calls'].map(item=>({'@type':'SoftwareApplication',name:t.pages[item].name,url:root+softwarePath(item,lang)}))}:{isPartOf:{'@type':'SoftwareApplication',name:'Galany CRM',url:root+softwarePath('crm',lang)}})});
  return {'@context':'https://schema.org','@graph':graph};
}

function render(key, lang) {
  const t = softwareContent[lang], p = t.pages[key];
  const rel = lang === 'he' ? '../' : '../../';
  const home = rel + (lang === 'he' ? '' : lang + '/');
  const canonical = root + softwarePath(key, lang);
  const json = JSON.stringify(schema(key,lang,canonical,t,p)).replace(/</g,'\\u003c');
  const catalog = ['crm','sales','calls'].map(item=>`<a class="module-link${item===key?' current':''}" href="${rel+softwarePath(item,lang)}"><span class="module-number" aria-hidden="true">0${['crm','sales','calls'].indexOf(item)+1}</span><h3>${e(t.pages[item].name)}</h3><p>${e(t.pages[item].lead)}</p><span class="module-action">${e(t.details)} <span aria-hidden="true">↗</span></span></a>`).join('');
  return `<!doctype html>
<html lang="${lang}" dir="${lang==='he'?'rtl':'ltr'}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${e(p.title)}</title>
<meta name="description" content="${e(p.description)}"><meta name="robots" content="index,follow,max-image-preview:large"><meta name="theme-color" content="#171916">
<link rel="canonical" href="${canonical}">
${Object.keys(softwareContent).map(code=>`<link rel="alternate" hreflang="${code==='he'?'he-IL':code}" href="${root+softwarePath(key,code)}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${root+softwarePath(key,'he')}">
<meta property="og:type" content="website"><meta property="og:site_name" content="Galany CRM · Eydelstein Digital Lab"><meta property="og:title" content="${e(p.title)}"><meta property="og:description" content="${e(p.description)}"><meta property="og:url" content="${canonical}"><meta property="og:locale" content="${{he:'he_IL',ru:'ru_RU',en:'en_US'}[lang]}"><meta property="og:image" content="${root}assets/galany-crm-test-interface.png"><meta property="og:image:width" content="1280"><meta property="og:image:height" content="720"><meta property="og:image:alt" content="${e(t.caption)}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${e(p.title)}"><meta name="twitter:description" content="${e(p.description)}"><meta name="twitter:image" content="${root}assets/galany-crm-test-interface.png"><meta name="twitter:image:alt" content="${e(t.caption)}">
<link rel="icon" href="${rel}assets/edelstein-lab-digital-mark.svg" type="image/svg+xml"><link rel="stylesheet" href="${rel}styles.css?v=${version}"><link rel="stylesheet" href="${rel}crm-plans.css?v=20261102-crm"><link rel="stylesheet" href="${rel}software.css?v=${version}">
<script type="application/ld+json">${json}</script>
</head><body data-language="${lang}" data-product="${key}" data-message="${e(t.message)}" data-task-label="${e(t.taskLabel)}" data-plan-label="${e(t.planLabel)}" data-invalid="${e(t.invalid)}" data-prepared="${e(t.prepared)}">
<a class="skip" href="#main">${lang==='he'?'לתוכן':lang==='ru'?'К содержанию':'Skip to content'}</a>
<header class="product-header"><div class="product-wrap product-header-inner"><a class="product-brand" href="${home}"><img src="${rel}assets/edelstein-lab-digital-mark.svg" alt="" width="32" height="32"><span>Eydelstein Digital Lab<small>Galany CRM</small></span></a><nav class="product-nav" aria-label="${e(t.software)}"><a href="${rel+softwarePath('software',lang)}">${e(t.nav[0])}</a><a href="#capabilities">${e(t.nav[1])}</a><a href="#crm-pricing">${e(t.nav[2])}</a></nav><div class="product-header-tools"><select id="software-language" aria-label="Language / שפה">${Object.entries(softwareContent).map(([code,s])=>`<option value="${rel+softwarePath(key,code)}"${code===lang?' selected':''}>${s.language}</option>`).join('')}</select><a class="product-demo" href="#contact">${e(t.nav[3])}</a></div></div></header>
<main id="main"><section class="product-intro"><div class="product-wrap"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${home}">${e(t.home)}</a><span aria-hidden="true">/</span><a href="${rel+softwarePath('software',lang)}">${e(t.software)}</a>${key==='software'?'':`<span aria-hidden="true">/</span><span>${e(p.name)}</span>`}</nav><p class="eyebrow">${e(t.eyebrow)}</p><h1>${e(p.name)}</h1><p class="product-lead">${e(p.lead)}</p><div class="product-actions"><a class="btn" href="#contact">${e(t.demo)}</a><a class="text-link" href="#crm-pricing">${e(t.plans)} <span aria-hidden="true">↓</span></a></div></div><figure class="product-figure product-wrap"><img src="${rel}assets/galany-crm-test-interface.png" alt="${e(t.caption)}" width="1280" height="720" fetchpriority="high"><figcaption>${e(t.caption)}</figcaption></figure></section>
<section class="product-section availability"><div class="product-wrap section-two"><h2>${e(t.availableTitle)}</h2><p>${e(t.available)}</p></div></section>
<section class="product-section" id="capabilities"><div class="product-wrap"><p class="eyebrow">${e(p.name)}</p><h2>${e(t.featuresTitle)}</h2><div class="capability-list">${p.features.map(([title,text],i)=>`<article><span class="feature-index" aria-hidden="true">0${i+1}</span><h3>${e(title)}</h3><p>${e(text)}</p></article>`).join('')}</div></div></section>
<section class="product-section modules"><div class="product-wrap"><h2>${e(t.modulesTitle)}</h2><p class="section-lead">${e(t.modulesIntro)}</p><div class="module-grid">${catalog}</div></div></section>
<section class="product-section"><div class="product-wrap"><h2>${e(t.israelTitle)}</h2><div class="israel-grid">${t.israel.map(([title,text])=>`<div><h3>${e(title)}</h3><p>${e(text)}</p></div>`).join('')}</div></div></section>
${pricing(lang)}
${renderDentalTeaser(lang)}
${renderAutoTeaser(lang)}
<section class="product-section"><div class="product-wrap"><h2>${e(t.processTitle)}</h2><ol class="onboarding">${t.process.map(([title,text])=>`<li><h3>${e(title)}</h3><p>${e(text)}</p></li>`).join('')}</ol><div class="implementation"><h3>${e(t.limitationsTitle)}</h3><p>${e(t.limitations)}</p></div></div></section>
<section class="product-section faq-section"><div class="product-wrap section-two"><h2>${e(t.faqTitle)}</h2><div class="product-faq">${p.faqs.map(([q,a])=>`<details><summary>${e(q)}</summary><p>${e(a)}</p></details>`).join('')}</div></div></section>
<section class="product-section product-contact" id="contact"><div class="product-wrap section-two"><div><p class="eyebrow">Galany CRM</p><h2>${e(t.formTitle)}</h2><p>${e(t.formIntro)}</p><a class="product-phone" href="tel:+972555071400" dir="ltr">+972 55 507 1400</a><a href="mailto:9881988@gmail.com">9881988@gmail.com</a><p class="product-whatsapp"><a href="https://wa.me/972533613100" dir="ltr">WhatsApp: +972 53 361 3100</a></p><address>${e(t.address)}<br>${e(t.hours)}</address></div><form id="crm-demo-form"><label for="demo-product">${e(t.fieldProduct)}</label><select id="demo-product">${['crm','sales','calls'].map(item=>`<option value="${item}"${item===(key==='software'?'crm':key)?' selected':''}>${e(t.pages[item].name)}</option>`).join('')}</select><label for="demo-plan">${e(t.fieldPlan)}</label><select id="demo-plan"><option value="">${e(t.unsure)}</option>${(lang==='en'?englishPlans.map(x=>({name:x[0]})):crmPlans[lang].plans).map(plan=>`<option>${plan.name}</option>`).join('')}</select><label for="demo-need">${e(t.fieldNeed)}</label><textarea id="demo-need" rows="4" required minlength="8" maxlength="1200" placeholder="${e(t.needPlaceholder)}" aria-describedby="demo-privacy demo-status"></textarea><div class="product-actions"><button class="btn btn-light" type="submit">${e(t.send)}</button><button class="email-draft" type="submit" name="channel" value="email">${e(t.email)}</button></div><p id="demo-status" role="status" aria-live="polite"></p><p id="demo-privacy" class="product-note">${e(t.privacy)}</p><noscript><p><a href="https://wa.me/972533613100">WhatsApp</a> · <a href="mailto:9881988@gmail.com">9881988@gmail.com</a></p></noscript></form></div></section>
</main><footer class="product-footer"><div class="product-wrap"><strong>${e(t.footer)}</strong><a href="${home}">${e(t.home)}</a><a href="${rel+softwarePath('software',lang)}">${e(t.software)}</a></div></footer>
<script src="${rel}software.js?v=${version}" defer></script></body></html>`;
}

export async function buildSoftware(target) {
  for (const key of Object.keys(softwareRoutes)) for (const lang of Object.keys(softwareContent)) {
    const folder = join(target,softwarePath(key,lang));
    await mkdir(folder,{recursive:true});
    await writeFile(join(folder,'index.html'),render(key,lang));
  }
  console.log('Built 12 Galany CRM software pages in Hebrew, Russian and English.');
}
