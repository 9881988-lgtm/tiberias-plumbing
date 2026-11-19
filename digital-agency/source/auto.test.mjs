import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { autoContent, autoPlans, autoRoot, autoPath } from '../auto-plan.mjs';
import { crmPlans } from '../crm-plans.mjs';
const read = path => readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('auto and dental packages retain separate identities',()=>{
 for(const lang of ['ru','he']){
  assert.equal(crmPlans[lang].plans.length,8);
  assert.equal(crmPlans[lang].plans.filter(x=>x.id==='auto_secretary').length,1);
  assert.equal(crmPlans[lang].plans.filter(x=>x.id==='dental_secretary').length,1);
 }
});
test('three auto pages have accurate metadata, scope and FAQs without public prices',()=>{
 for(const [lang,t] of Object.entries(autoContent)){
  const html=read(autoPath(lang)+'index.html');
  assert.ok(html.includes('lang="'+lang+'"'));assert.ok(html.includes('dir="'+(lang==='he'?'rtl':'ltr')+'"'));
  assert.ok(html.includes(autoRoot+autoPath(lang)));
  assert.ok(html.includes('value="auto_secretary"'));assert.ok(html.includes(t.safety));assert.ok(html.includes(t.promise));
  assert.equal(t.services.length,7);assert.equal(t.faqs.length,6);
  const graph=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const service=graph.find(x=>x['@type']==='Service');
  assert.match(service.serviceType,/auto repair shops/);
  assert.equal(service.offers, undefined);
 }
});
test('catalogue and copy keep technical decisions with the workshop',()=>{
 assert.match(autoContent.ru.safety,/не диагностирует/);assert.match(autoContent.en.safety,/does not diagnose/);
 assert.match(autoContent.he.safety,/אינו מאבחן/);
 assert.match(autoContent.en.safety,/final price/);assert.match(autoContent.en.services[6][1],/without incentives/);
 for(const t of Object.values(autoContent)) assert.ok(!/пациент|clinic|מרפא/i.test(t.intro+t.safety));
});
test('service pages and sitemaps retain the auto plan',()=>{
 for(const lang of ['ru','he','en']){
  const html=read('galany-crm/'+(lang==='he'?'':lang+'/')+'index.html');
  assert.ok(html.includes('<option>'+autoPlans[lang].name+'</option>'));
  assert.ok(read('sitemap.xml').includes(autoRoot+autoPath(lang)));
 }
});

