import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dentalContent, dentalPlans, dentalTerms, dentalRoot, dentalPath, dentalPdf } from '../dental-plan.mjs';
import { crmPlans } from '../crm-plans.mjs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('approved dental commercial terms remain exact',()=>{
  assert.equal(dentalTerms.monthlyILS,1000);assert.equal(dentalTerms.includedMinutes,100);
  assert.equal(dentalTerms.excessMinuteILS,.30);assert.equal(dentalTerms.excessHourILS,18);
  assert.equal(dentalTerms.pricesIncludeVAT,false);assert.equal(dentalTerms.setupFeeILS,0);
  assert.equal(dentalTerms.weeklyContentSets,1);assert.equal(dentalTerms.channels.length,5);
});
test('dental variant supplements rather than replaces the generic receptionist plan',()=>{
  for(const lang of ['ru','he']){
    assert.equal(crmPlans[lang].plans.length,7);
    assert.equal(crmPlans[lang].plans.filter(x=>x.id==='dental_secretary').length,1);
    assert.equal(crmPlans[lang].plans.filter(x=>x.price.replace(/[ ,]/g,'')==='1000').length,3);
  }
});
test('three dental pages expose truthful price, canonicals, FAQ and local files',()=>{
  for(const [lang,t] of Object.entries(dentalContent)){
    const html=read(dentalPath(lang)+'index.html');
    assert.ok(html.includes(`lang="${lang}"`));assert.ok(html.includes(`dir="${lang==='he'?'rtl':'ltr'}"`));
    assert.ok(html.includes(dentalRoot+dentalPath(lang)));assert.ok(html.includes(dentalRoot+dentalPdf(lang)));
    assert.ok(html.includes('value="dental_secretary"'));assert.ok(html.includes(t.safety));assert.ok(html.includes(t.promise));
    assert.equal(t.services.length,7);assert.equal(t.faqs.length,6);
    const graph=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
    const offer=graph.find(x=>x['@type']==='Service').offers.priceSpecification;
    assert.equal(offer.price,'1000');assert.equal(offer.valueAddedTaxIncluded,false);
    assert.equal(graph.find(x=>x['@type']==='FAQPage').mainEntity.length,6);
  }
});
test('public catalogue uses the same content and does not claim autonomous medical advice',()=>{
  const c=JSON.parse(read('dental-secretary/catalog.json'));
  assert.deepEqual(c.terms,dentalTerms);assert.equal(Object.keys(c.plans).length,3);
  assert.match(c.content.ru.safety,/не ставит диагнозы/);assert.match(c.content.en.safety,/does not diagnose/);
  assert.match(c.content.he.safety,/אינו מאבחן/);
  assert.match(c.content.ru.promise,/Не обещаем/);assert.match(c.content.en.services[6][1],/without incentives/);
  for(const t of Object.values(dentalContent))assert.ok(t.services[4][1].includes('YouTube'));
});
test('dental plan selection and PDF links are present in the existing pricing catalogue',()=>{
  for(const lang of ['ru','he','en']){
    const html=read(`galany-crm/${lang==='he'?'':lang+'/'}index.html`);
    assert.ok(html.includes(dentalRoot+dentalPath(lang)));assert.ok(html.includes(dentalPlans[lang].name));
    assert.ok(html.includes('value="dental_secretary"'));
  }
});
