import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export const school = {
  he: {kind:'בית ספר לאנגלית',title:'לימודי אנגלית פנים אל פנים',price:'החל מ־70 ₪',unit:'לשעה אקדמית של 45 דקות',about:'המורה שלכם',name:'פרל פולינה איידלשטיין',bio:'פרל היא מורה לאנגלית ולרוסית ובעלת תואר שני בפילולוגיה. לצד הוראה מקוונת, Pearl Valley מציעה שיעורי אנגלית פנים אל פנים.',next:'רוצים להגיע לשיעור?',info:'ספרו מה תרצו לעשות באנגלית ואילו ימים מתאימים לכם. לפני ההרשמה נברר יחד את המיקום, השעות והמחיר המדויק.',action:'בירור על שיעור',msg:'שלום, אני מתעניין/ת בשיעורי אנגלית פנים אל פנים ב־Pearl Valley. אשמח לפרטים על מקום, שעות ומחיר.',back:'לאתר הסטודיו'},
  ru: {kind:'Школа английского языка',title:'Очные занятия английским',price:'От 70 ₪',unit:'за один академический час (45 минут)',about:'Ваш преподаватель',name:'Перл Полина Эйдельштейн',bio:'Перл преподаёт английский и русский языки. У неё степень магистра филологии и опыт работы в собственной онлайн-школе. В Pearl Valley английским можно заниматься очно.',next:'Хотите прийти на занятие?',info:'Расскажите, для чего вам английский и в какие дни удобно заниматься. До записи уточним место встречи, расписание и точную стоимость.',action:'Узнать о занятиях',msg:'Здравствуйте! Меня интересуют очные занятия английским в Pearl Valley. Подскажите, пожалуйста, место, расписание и стоимость.',back:'На сайт студии'},
  en: {kind:'English language school',title:'In-person English lessons',price:'From ₪70',unit:'per academic hour (45 minutes)',about:'Your teacher',name:'Pearl Polina Edelstein',bio:'Pearl teaches English and Russian and holds a master’s degree in philology. Alongside her experience running an online language school, she offers face-to-face English lessons at Pearl Valley.',next:'Interested in a lesson?',info:'Tell us what you want to use English for and which days suit you. We’ll confirm the location, schedule and exact price before you book.',action:'Ask about lessons',msg:'Hello! I’m interested in in-person English lessons at Pearl Valley. Could you share the location, schedule and price?',back:'Agency website'},
  fr: {kind:'École d’anglais',title:'Cours d’anglais en présentiel',price:'À partir de 70 ₪',unit:'par heure académique de 45 minutes',about:'Votre enseignante',name:'Pearl Polina Edelstein',bio:'Pearl enseigne l’anglais et le russe et possède un master en philologie. Forte de son expérience à la tête de sa propre école de langues en ligne, elle propose des cours d’anglais en présentiel à Pearl Valley.',next:'Un cours vous intéresse ?',info:'Indiquez dans quelles situations vous souhaitez parler anglais et vos disponibilités. Nous vous préciserons le lieu, les horaires et le tarif avant l’inscription.',action:'Se renseigner sur les cours',msg:'Bonjour, les cours d’anglais en présentiel à Pearl Valley m’intéressent. Pourriez-vous me préciser le lieu, les horaires et le tarif ?',back:'Site du studio'}
};
const names={he:'עברית',ru:'Русский',en:'English',fr:'Français'};
const profile='https://www.linkedin.com/in/pearl-polina-edelstein-20660543b/';
const suffix=lang=>lang==='he'?'':lang+'/';
const path=lang=>'pearl-valley/'+suffix(lang);
export async function buildSchool(target,site,e){
  for(const [lang,t] of Object.entries(school)){
    const base=lang==='he'?'../':'../../',home=base+suffix(lang),url=site+path(lang);
    const desc=`Pearl Valley: ${t.title}. ${t.price} ${t.unit}.`;
    const contact='https://wa.me/972533613100?text='+encodeURIComponent(t.msg);
    const ld={'@context':'https://schema.org','@type':'WebPage',name:t.kind+' Pearl Valley',url,description:desc,inLanguage:lang,about:{'@type':'EducationalOrganization',name:'Pearl Valley'}};
    const folder=join(target,path(lang));
    await mkdir(folder,{recursive:true});
    await writeFile(join(folder,'index.html'),`<!doctype html>
<html lang="${lang}" dir="${lang==='he'?'rtl':'ltr'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Pearl Valley | ${e(t.title)}</title><meta name="description" content="${e(desc)}">
<link rel="canonical" href="${url}">
${Object.keys(names).map(code=>`<link rel="alternate" hreflang="${code==='he'?'he-IL':code}" href="${site+path(code)}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${site+path('he')}">
<meta property="og:url" content="${url}"><meta property="og:type" content="website"><meta property="og:title" content="Pearl Valley | ${e(t.title)}"><meta property="og:description" content="${e(desc)}"><meta property="og:image" content="${site}assets/social-preview.jpg"><meta name="twitter:card" content="summary">
<link rel="icon" href="${base}assets/edelstein-lab-digital-mark.svg"><link rel="stylesheet" href="${base}styles.css"><link rel="stylesheet" href="${base}software.css"><link rel="stylesheet" href="${base}pearl-valley/school.css">
<script type="application/ld+json">${JSON.stringify(ld).replaceAll('<','\\u003c')}</script></head><body>
<header class="product-header"><div class="product-wrap product-header-inner"><a href="${home}" class="product-brand"><img src="${base}assets/edelstein-lab-digital-mark.svg" width="32" height="32" alt="">Eydelstein Digital Lab</a><nav class="school-langs" aria-label="Language / שפה">${Object.entries(names).map(([code,label])=>`<a href="${base+path(code)}" lang="${code}"${code===lang?' aria-current="page"':''}>${label}</a>`).join('')}</nav></div></header>
<main><section class="school-hero"><div class="product-wrap"><p class="eyebrow">${e(t.kind)}</p><h1><bdi lang="en">Pearl Valley</bdi></h1><p class="school-format">${e(t.title)}</p><a class="btn" href="${contact}">${e(t.action)} · WhatsApp</a></div></section>
<section class="school-price"><div class="product-wrap"><h2>${e(t.price)}</h2><p>${e(t.unit)}</p></div></section>
<section class="product-section"><div class="product-wrap section-two"><div><p class="eyebrow">${e(t.about)}</p><h2>${e(t.name)}</h2></div><div><p>${e(t.bio)}</p><a class="text-link" href="${profile}">LinkedIn</a></div></div></section>
<section class="product-section"><div class="product-wrap section-two"><h2>${e(t.next)}</h2><div><p>${e(t.info)}</p><a class="text-link" href="${contact}">${e(t.action)} · WhatsApp</a></div></div></section></main>
<footer class="product-footer"><div class="product-wrap"><strong>Pearl Valley</strong><a href="${home}">${e(t.back)}</a></div></footer></body></html>\n`);
  }
}
