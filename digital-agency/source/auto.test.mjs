import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { autoContent, autoPlans, autoTerms, autoRoot, autoPath, autoPdf } from '../auto-plan.mjs';
import { dentalTerms } from '../dental-plan.mjs';
import { crmPlans } from '../crm-plans.mjs';
const read = path => readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('auto package keeps the approved dental commercial terms with a separate identity',()=>{
 const {id:aid,...auto}=autoTerms, {id:did,...dental}=dentalTerms;
 assert.deepEqual(auto,dental);assert.equal(aid,'auto_secretary');assert.notEqual(aid,did);
 for(const lang of ['ru','he']){
  assert.equal(crmPlans[lang].plans.length,7);
  assert.equal(crmPlans[lang].plans[0].id,'auto_secretary');
  assert.equal(crmPlans[lang].plans.filter(x=>x.id==='dental_secretary').length,1);
 }
});
test('three auto pages have accurate metadata, terms, FAQs and local PDF files',()=>{
 for(const [lang,t] of Object.entries(autoContent)){
  const html=read(autoPath(lang)+'index.html');
  assert.ok(html.includes('lang="'+lang+'"'));assert.ok(html.includes('dir="'+(lang==='he'?'rtl':'ltr')+'"'));
  assert.ok(html.includes(autoRoot+autoPath(lang)));assert.ok(html.includes(autoRoot+autoPdf(lang)));
  assert.ok(html.includes('value="auto_secretary"'));assert.ok(html.includes(t.safety));assert.ok(html.includes(t.promise));
  assert.equal(t.services.length,7);assert.equal(t.faqs.length,6);
  assert.ok(existsSync(new URL('../'+autoPdf(lang),import.meta.url)));
  const graph=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const service=graph.find(x=>x['@type']==='Service');
  assert.match(service.serviceType,/auto repair shops/);
  assert.equal(service.offers.priceSpecification.price,'1000');
  assert.equal(service.offers.priceSpecification.valueAddedTaxIncluded,false);
 }
});
test('catalogue and copy keep technical decisions with the workshop',()=>{
 const c=JSON.parse(read('auto-secretary/catalog.json'));assert.deepEqual(c.terms,autoTerms);
 assert.match(c.content.ru.safety,/не диагностирует/);assert.match(c.content.en.safety,/does not diagnose/);
 assert.match(c.content.he.safety,/אינו מאבחן/);
 assert.match(c.content.en.safety,/final price/);assert.match(c.content.en.services[6][1],/without incentives/);
 for(const t of Object.values(c.content)) assert.ok(!/пациент|clinic|מרפא/i.test(t.intro+t.safety));
});
test('general catalogue, sitemaps and presentation links include the auto plan',()=>{
 for(const lang of ['ru','he','en']){
  const html=read('galany-crm/'+(lang==='he'?'':lang+'/')+'index.html');
  assert.ok(html.includes(autoPlans[lang].name));assert.ok(html.includes(autoPlans[lang].pdf));assert.ok(html.includes('value="auto_secretary"'));
  assert.ok(read('sitemap.xml').includes(autoRoot+autoPath(lang)));
 }
 const script=read('ai-call-center/script.js');assert.ok(script.includes('_2026-11-10.pdf#view=FitH'));
 assert.ok(read('ai-call-center/index.html').includes('Edelstein_Digital_CRM_HE_2026-11-10.pdf'));
});

