import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { contact as c, copy, locales, intents } from './contact-copy.mjs';
import { leadCopy, products, order, promptFor, formUrl, entry, siteSales } from './lead-copy.mjs';
import { content } from './content.mjs';
import { softwareContent } from './software-content.mjs';
import { innovation } from './innovation.mjs';
import { capabilities, intro } from './capabilities.mjs';
import { crmPlans } from '../crm-plans.mjs';

const path = l => l === 'he' ? '' : l+'/';
const json = o => JSON.stringify(o).replaceAll('<','\\u003c');
const labels = {ru:'RU',he:'עברית',en:'EN',fr:'FR'};
const productSummaries = {
  'hotel-consulting': [
    'Начинаем с аудита площадок, загрузки и работы ресепшена. По итогам согласуем, что внедрять первым: бронирования и цены, работу с гостями, управление персоналом или IT.',
    'מתחילים בבדיקת ערוצי ההזמנות, התפוסה והקבלה. אחר כך בוחרים מה להטמיע תחילה: הזמנות ומחירים, שירות לאורחים, ניהול עובדים או IT.',
    'We start by reviewing booking channels, occupancy and reception. Then we prioritise reservations and pricing, guest service, staffing or IT.',
    'Nous commençons par examiner les canaux de réservation, le taux d’occupation et la réception. Nous fixons ensuite la priorité entre réservations et tarifs, accueil, personnel et informatique.'],
  'hotel-secretary': [
    'Голосовой секретарь отвечает на типовые вопросы об отеле и передаёт сложные обращения на стойку. Доступ к бронированиям проверяем отдельно.',
    'המזכיר הקולי עונה על שאלות על המלון ומעביר פניות מורכבות לקבלה. חיבור להזמנות נבדק בנפרד.',
    'The voice receptionist answers hotel questions and hands off complex calls. We check booking access separately.',
    'Le standard vocal répond aux questions courantes et transmet les demandes complexes. L’accès aux réservations est vérifié séparément.'],
  'small-business-secretary': [
    'Секретарь отвечает на входящие, записывает задачу и передаёт клиентский запрос сотруднику.',
    'המזכיר עונה לשיחות נכנסות, מתעד את הצורך ומעביר את הפנייה לאיש צוות.',
    'The receptionist handles inbound calls, captures the request and hands it to your team.',
    'Le secrétariat accueille les appels, note la demande et la transmet à votre équipe.'],
  'auto-secretary': [
    'Секретарь уточняет автомобиль, задачу и удобное время. Диагноз, смету и сроки подтверждает мастер.',
    'המזכיר מברר פרטי רכב, צורך וזמן מתאים. המוסך מאשר אבחון, מחיר ומועד.',
    'The receptionist captures the vehicle, problem and preferred time. Your workshop confirms the diagnosis, quote and schedule.',
    'Le secrétariat relève le véhicule, le besoin et le créneau. L’atelier confirme le diagnostic, le devis et le délai.'],
  'dental-secretary': [
    'Секретарь помогает с административными вопросами и записью. Медицинские вопросы передаются сотруднику.',
    'המזכיר מסייע בתיאום ובשאלות מנהליות. שאלות רפואיות מועברות לצוות.',
    'The receptionist handles scheduling and administrative questions. Medical questions go to your team.',
    'Le secrétariat gère les demandes administratives et les rendez-vous. Les questions médicales sont transmises à l’équipe.'],
};
const writeToBayla={ru:'Передать вопрос Байле',he:'להעביר שאלה לביילה',en:'Send a question to Bayla',fr:'Envoyer une question à Bayla'};
const receipt = {
  ru:['Спасибо за заявку!','Мы с вами обязательно свяжемся.','Номер заявки'],
  he:['תודה על פנייתך!','נחזור אליך בהקדם.','מספר פנייה'],
  en:['Thank you for your enquiry!','We’ll be in touch.','Enquiry reference'],
  fr:['Merci pour votre demande !','Nous vous recontacterons.','Référence de la demande'],
};

export async function buildContactPages(target,root,icon,e) {
  for (const [lang,x] of Object.entries(copy)) {
    const t=content[lang], s=softwareContent[lang], l=leadCopy[lang], i=order.indexOf(lang);
    const rel=lang==='he'?'../':'../../', home=rel+path(lang), route=slug=>rel+slug+'/'+path(lang);
    const answers = {
      price:[x.pricing,route('galany-crm')], phone:[x.phone+': '+c.display,'tel:'+c.phone],
      email:[x.email+': '+c.email,'mailto:'+c.email], whatsapp:['WhatsApp: '+c.waDisplay,c.whatsapp],
      office:[t.location+'. '+t.appointment+'.'], hours:[t.hours+'. '+t.appointment+'.'],
      crm:[s.available,route('galany-crm')], calls:[s.pages.calls.lead+' '+s.limitations,route('call-center-software')],
      sales:[s.pages.sales.lead,route('ai-sales-agent')], grants:[innovation[lang].lead,route('innovation-applications')],
      remote:[t.faqs[1][1],home+'#contact'], services:[x.menu,home+'#services'],
    };
    for (const [n,id] of [[0,'website'],[1,'app'],[3,'ads']]) answers[id]=[t.services[n][1]+' '+t.services[n][2]+'.',home+'#services'];
    const terms=Object.fromEntries(Object.entries(intents).map(([k,v])=>[k,v[i].split('|')]));
    terms.services.push(...({ru:['что вы можете','что вы умеете','какие задачи','что можете сделать'],he:['מה אתם יכולים לעשות','מה אפשר להזמין'],en:['what can you do','what can you build','what can i hire you for'],fr:['que pouvez vous faire','que faites vous','que puis je vous confier']}[lang]));
    answers.services=[x.menu+' '+capabilities.map(c=>c[lang][0]).join('; ')+'.',home+'#capabilities'];
    for(const c of capabilities){
      terms[c.id]=[...c.tech.split('|'),...c[lang][2].split('|'),c[lang][0]];
      answers[c.id]=[(c.id==='software-engineering'?intro[lang][1]+' ':'')+c[lang][1],route('request')+'?product='+c.id,l[0]];
    }
    const summary={
      'galany-crm':s.available, software:s.available, 'desktop-crm':s.available,
      'ai-sales-agent':s.pages.sales.lead, 'call-center-software':s.pages.calls.lead, 'ai-call-center':s.pages.calls.lead,
      'innovation-applications':innovation[lang].lead,
      landing:t.services[0][2], website:t.services[0][2], app:t.services[1][2],
      ai:t.services[2][2], ads:t.services[3][2], receiptil:t.projects[0].text, 'ac-cleaning':t.projects[1].text,
      ...Object.fromEntries(capabilities.map(c=>[c.id,c[lang][1]])),
    };
    for(const [index,id] of ['hotel-secretary','auto-secretary','dental-secretary','small-business-secretary','light','booking','business','business-plus'].entries()){
      const plan=crmPlans[lang]?.plans[index];
      summary[id]=plan ? plan.items.join(' · ') : s.available;
    }
    for(const [id,values] of Object.entries(productSummaries))summary[id]=values[i];
    const scripts=Object.fromEntries(Object.entries(products).map(([id,name])=>[id,[name[i],promptFor(id,lang),summary[id]||'']]));
    const data={x,locale:locales[lang],email:c.email,answers,terms,catalogIds:capabilities.map(c=>c.id),
      faq:[...t.faqs.map(pair=>[...pair,home+'#main']),...['crm','calls','sales'].flatMap((p,n)=>s.pages[p].faqs.map(pair=>[...pair,route(['galany-crm','call-center-software','ai-sales-agent'][n])]))]};
    const idButton=(id,sym,label)=>`<button type="button" id="${id}" title="${e(label)}" aria-label="${e(label)}">${icon(sym)}<span>${e(label)}</span></button>`;
    const method=(sym,label,val,href)=>`<a class="method" href="${href}">${icon(sym)}<span><small>${e(label)}</small><bdi dir="ltr">${e(val)}</bdi></span>${icon('ArrowUpRight')}</a>`;
    for(const slug of ['contacts','request']){
      const lead=slug==='request',title=lead?l[0]:x.title,url=root+slug+'/'+path(lang);
      const desc=lead?l[2]:x.lead;
      const languages=Object.keys(copy).map(k=>`<a hreflang="${k}" lang="${k}" href="${rel+slug+'/'+path(k)}"${k===lang?' aria-current="page"':''}>${labels[k]}</a>`).join('');
      const field=(id,label,auto,type='text')=>`<label>${e(label)}<input id="${id}" type="${type}" autocomplete="${auto}" maxlength="160" dir="auto"></label>`;
      const payload={...(lead?{prompts:Object.fromEntries(Object.keys(products).map(k=>[k,promptFor(k,lang)])),l}:data),
        scripts,intake:siteSales[lang],request:route('request'),write:writeToBayla[lang],receipt:receipt[lang],
        endpoint:'https://91.107.216.53/api/site-sales/enquiry'};
      const body=lead?`<h1 id="enquiry-title">${e(l[0])}</h1><p class="lead" id="enquiry-lead">${e(l[2])}</p>
      <form id="enquiry" action="${formUrl}/formResponse" method="post" novalidate hidden>
        <label>${e(l[3])}<span class="product-select"><select id="product"><option value="">${e(l[4])}</option>${Object.entries(products).map(([k,v])=>`<option value="${k}">${e(v[i])}</option>`).join('')}</select></span></label>
        <fieldset><legend>${e(l[1])}</legend><div class="two">${field('email',l[7],'email','email')}${field('phone',l[6],'tel','tel')}</div></fieldset>
        <label><span id="need-label">${e(l[9])}</span><textarea id="need" maxlength="1200" rows="2" dir="auto"></textarea></label>
        <details id="details"><summary>${e(l[8])} ${icon('Plus')}</summary>
        ${field('name',l[5],'name')}
        <label>${e(l[10])}<input id="tools" maxlength="300" dir="auto"></label><label>${e(l[11])}<input id="when" maxlength="160" dir="auto"></label>
        <label>${e(siteSales[lang][3])}<input id="budget" maxlength="160" dir="auto"></label></details>
        <input type="hidden" name="${entry}" id="payload"><p class="fine">${e(siteSales[lang][9])}</p>
        <label class="permission"><input id="allow-contact" type="checkbox"> ${e(siteSales[lang][4])}</label>
        <p id="form-error" role="status"></p>
        <button class="primary" type="submit">${e(l[12])} ${icon('Send')}</button>
      </form>
      <section class="enquiry-receipt" id="enquiry-receipt" aria-labelledby="receipt-title" tabindex="-1" hidden>
        <span class="receipt-mark" aria-hidden="true">${icon('Check')}</span>
        <h2 id="receipt-title">${e(receipt[lang][0])}</h2>
        <p class="receipt-message">${e(receipt[lang][1])}</p>
        <p id="form-result" class="receipt-reference"></p>
      </section>
      <noscript><a href="${formUrl}/viewform">${e(l[15])}</a></noscript>`:
      `<h1>${e(x.title)}</h1><p class="lead">${e(x.lead)}</p><div class="split"><div class="direct">
        ${method('Phone',x.phone,c.display,'tel:'+c.phone)}${method('Mail',x.email,c.email,'mailto:'+c.email)}${method('MessageCircle','WhatsApp',c.waDisplay,c.whatsapp)}
        <section class="office"><h2>${e(x.office)}</h2><address>${e(t.location)}<br>${e(t.hours)}<br>${e(t.appointment)}</address></section>
        <a class="primary" href="${route('request')}">${e(l[0])} ${icon('ArrowUpRight')}</a></div>
        <section id="advisor" class="advisor" hidden><header>${icon('AudioLines')}<h2>${e(x.advisor)}</h2></header>
          <h3 id="advisor-topic">${e(x.intro)}</h3><p id="advisor-context"></p><div class="suggestions">${x.topics.map(q=>`<button type="button" data-question>${e(q)}</button>`).join('')}</div>
          <form id="ask"><label for="question" class="sr">${e(x.ask)}</label><div class="compose"><input id="question" maxlength="500" placeholder="${e(x.placeholder)}" required dir="auto"><button type="submit" aria-label="${e(x.ask)}" title="${e(x.ask)}">${icon('Send')}</button></div></form>
          <div class="voice-tools">${idButton('mic','Mic',x.mic)}${idButton('read','Volume2',x.listen)}</div>
          <p class="fine" id="privacy">${e(x.privacy)}</p><p id="speech-status" role="status"></p>
          <div id="answer" aria-live="polite"></div>
          <nav class="advisor-actions"><a id="advisor-write" href="${route('request')}">${e(writeToBayla[lang])}</a>
            <a id="advisor-order" class="primary" href="${route('request')}?intent=order">${e(siteSales[lang][2])}</a></nav>
        </section></div>`;
      const schema={'@context':'https://schema.org','@type':lead?'WebPage':'ContactPage',url,name:title,inLanguage:lang,about:{'@type':'Organization','@id':root+'#organization',name:'Eydelstein Digital Lab',url:root,telephone:c.phone,email:c.email}};
      const html=`<!doctype html><html lang="${lang}" dir="${lang==='he'?'rtl':'ltr'}"><head>
      <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="referrer" content="no-referrer"><title>${e(title)} | Eydelstein Digital Lab</title>
      <meta name="description" content="${e(desc)}"><link rel="canonical" href="${url}">
      ${Object.keys(copy).map(k=>`<link rel="alternate" hreflang="${k==='he'?'he-IL':k}" href="${root+slug+'/'+path(k)}">`).join('')}<link rel="alternate" hreflang="x-default" href="${root+slug}/">
      <meta property="og:type" content="website"><meta property="og:site_name" content="Eydelstein Digital Lab"><meta property="og:image" content="${root}assets/hero.webp"><meta name="twitter:card" content="summary_large_image">
      <meta property="og:title" content="${e(title)} | Eydelstein Digital Lab"><meta property="og:url" content="${url}"><meta property="og:description" content="${e(desc)}">
      <link rel="icon" href="${rel}assets/edelstein-lab-digital-mark.svg"><link rel="stylesheet" href="${rel}contact-pages.css?v=20261121-readable"><script type="application/ld+json">${json(schema)}</script></head>
      <body><header class="top"><a class="brand" dir="ltr" href="${home}"><img width="36" height="36" alt="" src="${rel}assets/edelstein-lab-digital-mark.svg">Eydelstein Digital Lab</a><nav aria-label="${e(x.language)}">${languages}</nav></header>
      <main class="${lead?'funnel':'contacts'}">${body}</main><footer><a href="${home}">Eydelstein Digital Lab</a><a href="${route('contacts')}">${e(x.title)}</a></footer>
      <script type="application/json" id="page-data">${json(payload)}</script><script defer src="${rel}contact-pages.js?v=20261121-readable"></script></body></html>`;
      const dir=join(target,slug,path(lang));await mkdir(dir,{recursive:true});await writeFile(join(dir,'index.html'),html);
    }
  }
}
