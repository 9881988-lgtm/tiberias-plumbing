import {mkdir, writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import {orderForm} from './poster-order.mjs';

export const posterSlug = 'street-posters-tiberias';
export const posters = {
  ru: {
    title:'Уличные объявления в Тверии', price:'От 10 ₪ за объявление', lead:'Разработаем дизайн, напечатаем тираж и разместим объявления в согласованных местах города.',
    action:'Заказать размещение', process:'От макета до размещения',
    steps:[['Дизайн','Пришлите текст, контакты и логотип, если он есть. Подготовим макет и покажем его вам до печати.'],['Печать','Согласуем формат, количество экземпляров и итоговую стоимость. Напечатаем утверждённый макет.'],['Размещение','Уточним нужные районы Тверии и дату. Разместим тираж только в тех местах, где это разрешено.']],
    brief:'Какой тираж вам нужен?', note:'Укажите район, количество объявлений и желаемую дату. Если тираж пока неизвестен, достаточно описать задачу.',
    label:'Ваш запрос', draft:'Здравствуйте! Хочу заказать дизайн, печать и размещение объявлений в Тверии.\nТираж: \nРайон: \nЖелаемая дата: ',send:'Открыть в WhatsApp',back:'Все услуги',skip:'К содержанию'
  },
  he: {
    title:'הדבקת מודעות בטבריה',price:'החל מ־10 ₪ למודעה',lead:'נעצב את המודעה, נדפיס את העותקים ונתלה אותם במקומות שנסכם יחד ברחבי העיר.',
    action:'בקשת הצעת מחיר',process:'מהעיצוב ועד לתלייה',
    steps:[['עיצוב','שלחו את נוסח המודעה, פרטים ליצירת קשר ולוגו, אם יש. נכין סקיצה ונעביר אותה לאישורכם לפני ההדפסה.'],['הדפסה','נסכם את גודל המודעה, מספר העותקים והמחיר הסופי. נדפיס את הגרסה שאישרתם.'],['תלייה','נתאם את השכונות בטבריה ואת המועד המבוקש. נתלה את המודעות רק במקומות שבהם מותר לפרסם.']],
    brief:'כמה מודעות תרצו להזמין?',note:'ציינו באילו שכונות תרצו לפרסם, כמה עותקים דרושים ובאיזה מועד. עוד לא החלטתם על הכמות? אפשר להתחיל בתיאור קצר.',
    label:'פרטי הבקשה',draft:'שלום, אשמח להצעת מחיר לעיצוב, להדפסה ולתליית מודעות בטבריה.\nמספר עותקים: \nשכונה: \nמועד מבוקש: ',send:'פתיחה בוואטסאפ',back:'כל השירותים',skip:'דילוג לתוכן'
  },
  en: {
    title:'Street posters in Tiberias',price:'From ₪10 per poster',lead:'We design your poster, print the copies and put them up at agreed locations across the city.',
    action:'Request a quote',process:'From artwork to placement',
    steps:[['Design','Send your text, contact details and logo if you have one. We prepare a proof for you to approve before printing.'],['Printing','We agree on the size, print run and total price, then print the approved artwork.'],['Placement','Tell us which Tiberias neighbourhoods you want to reach and when. We put up posters only where advertising is permitted.']],
    brief:'How many posters do you need?',note:'Tell us the quantity, neighbourhoods and preferred date. If you haven’t decided on a print run yet, a short description is enough.',
    label:'Your enquiry', draft:'Hello! I’d like a quote for the design, printing and placement of posters in Tiberias.\nQuantity: \nNeighbourhood: \nPreferred date: ',send:'Open in WhatsApp',back:'All services',skip:'Skip to content'
  },
  fr: {
    title:'Affichage de rue à Tibériade',price:'À partir de 10 ₪ par affiche',lead:'Nous créons votre affiche, imprimons le tirage et assurons la pose aux emplacements convenus en ville.',
    action:'Demander un devis',process:'De la maquette à la pose',
    steps:[['Création','Envoyez votre texte, vos coordonnées et votre logo si vous en avez un. Nous vous soumettons une maquette avant impression.'],['Impression','Nous convenons du format, du nombre d’exemplaires et du prix total, puis imprimons la maquette validée.'],['Pose','Nous convenons des quartiers de Tibériade et de la date avec vous. Les affiches sont posées uniquement aux emplacements autorisés.']],
    brief:'Combien d’affiches souhaitez-vous ?',note:'Précisez le tirage, les quartiers et la date souhaitée. Si la quantité reste à définir, décrivez simplement votre projet.',
    label:'Votre demande',draft:'Bonjour, je souhaite un devis pour la création, l’impression et la pose d’affiches à Tibériade.\nQuantité : \nQuartier : \nDate souhaitée : ',send:'Ouvrir dans WhatsApp',back:'Tous les services',skip:'Aller au contenu'
  }
};
const langs={he:'עברית',ru:'Русский',en:'English',fr:'Français'};
const suffix=lang=>lang==='he'?'':lang+'/';
const path=lang=>posterSlug+'/'+suffix(lang);
const langTag=lang=>lang==='he'?'he-IL':lang;
const minimum={ru:'От 100 объявлений · Цены без НДС',he:'מינימום 100 מודעות · המחירים לפני מע״מ',en:'Minimum 100 posters · Prices exclude VAT',fr:'Minimum 100 affiches · Prix hors TVA'};

export async function buildPosters(target,site,e){
  for(const [lang,t] of Object.entries(posters)){
    const base=lang==='he'?'../':'../../',home=base+suffix(lang),url=site+path(lang);
    const desc=t.price+'. '+minimum[lang]+'. '+t.lead, photo='assets/tiberias-posters.jpg', brand='Eydelstein Digital Lab';
    const schema={'@context':'https://schema.org','@type':'Service',name:t.title,url,description:desc,image:site+photo,
      areaServed:{'@type':'City',name:'Tiberias',containedInPlace:{'@type':'Country',name:'Israel'}},
      provider:{'@type':'Organization',name:brand,url:site},
      offers:{'@type':'Offer',description:t.price,eligibleQuantity:{'@type':'QuantitativeValue',minValue:100,unitCode:'C62'},priceSpecification:{'@type':'UnitPriceSpecification',minPrice:10,maxPrice:30,priceCurrency:'ILS',valueAddedTaxIncluded:false,referenceQuantity:{'@type':'QuantitativeValue',value:1,unitCode:'C62'}}}};
    const folder=join(target,path(lang));
    await mkdir(folder,{recursive:true});
    await writeFile(join(folder,'index.html'),`<!doctype html>
<html lang="${lang}" dir="${lang==='he'?'rtl':'ltr'}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${e(t.title)} | ${brand}</title><meta name="description" content="${e(desc)}">
<link rel="canonical" href="${url}">
${Object.keys(langs).map(l=>`<link rel="alternate" hreflang="${langTag(l)}" href="${site+path(l)}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${site+path('he')}">
<meta property="og:type" content="website"><meta property="og:site_name" content="${brand}"><meta property="og:url" content="${url}">
<meta property="og:title" content="${e(t.title)}"><meta property="og:description" content="${e(desc)}"><meta property="og:image" content="${site+photo}"><meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${base}assets/edelstein-lab-digital-mark.svg"><link rel="preload" href="${base+photo}" as="image">
<link rel="stylesheet" href="${base}styles.css"><link rel="stylesheet" href="${base}software.css"><link rel="stylesheet" href="${base+posterSlug}/posters.css">
<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script></head><body>
<a class="skip" href="#main">${e(t.skip)}</a><header class="product-header"><div class="product-wrap product-header-inner">
<a class="product-brand" href="${home}"><img src="${base}assets/edelstein-lab-digital-mark.svg" width="32" height="32" alt="">${brand}</a>
<nav class="poster-locales" aria-label="Languages / שפות">${Object.entries(langs).map(([l,name])=>`<a href="${base+path(l)}" lang="${l}" hreflang="${langTag(l)}"${l===lang?' aria-current="page"':''}>${name}</a>`).join('')}</nav></div></header>
<main id="main"><section class="poster-hero"><div class="product-wrap"><div class="poster-copy">
<h1>${e(t.title)}</h1><p class="poster-price">${e(t.price)}</p><p>${e(minimum[lang])}</p><p class="poster-lead">${e(t.lead)}</p><a class="btn" href="#brief">${e(t.action)}</a>
</div></div></section>
<section class="product-section"><div class="product-wrap"><h2>${e(t.process)}</h2><ol class="poster-steps">${t.steps.map(([title,detail])=>`<li><h3>${e(title)}</h3><p>${e(detail)}</p></li>`).join('')}</ol></div></section>
${orderForm(lang,t.send,e)}</main><footer class="product-footer"><div class="product-wrap"><strong>${brand}</strong><a href="${home}#services">${e(t.back)}</a></div></footer><script defer src="${base+posterSlug}/order.js"></script></body></html>\n`);
  }
}
