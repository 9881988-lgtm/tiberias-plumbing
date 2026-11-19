import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dentalContent, dentalPlans, dentalRoot, dentalPath } from '../dental-plan.mjs';
import { crmPlans } from '../crm-plans.mjs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('dental variant supplements rather than replaces the generic receptionist plan',()=>{
  for(const lang of ['ru','he']){
    assert.equal(crmPlans[lang].plans.length,8);
    assert.equal(crmPlans[lang].plans.filter(x=>x.id==='dental_secretary').length,1);
  }
});
test('three dental pages expose scope, canonicals and FAQs without public prices',()=>{
  for(const [lang,t] of Object.entries(dentalContent)){
    const html=read(dentalPath(lang)+'index.html');
    assert.ok(html.includes(`lang="${lang}"`));assert.ok(html.includes(`dir="${lang==='he'?'rtl':'ltr'}"`));
    assert.ok(html.includes(dentalRoot+dentalPath(lang)));
    assert.ok(html.includes('value="dental_secretary"'));assert.ok(html.includes(t.safety));assert.ok(html.includes(t.promise));
    assert.equal(t.services.length,7);assert.equal(t.faqs.length,6);
    const graph=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
    assert.equal(graph.find(x=>x['@type']==='Service').offers,undefined);
    assert.equal(graph.find(x=>x['@type']==='FAQPage').mainEntity.length,6);
  }
});
test('copy does not claim autonomous medical advice',()=>{
  assert.match(dentalContent.ru.safety,/не ставит диагнозы/);assert.match(dentalContent.en.safety,/does not diagnose/);
  assert.match(dentalContent.he.safety,/אינו מאבחן/);
  assert.match(dentalContent.ru.promise,/Не обещаем/);assert.match(dentalContent.en.services[6][1],/without incentives/);
  for(const t of Object.values(dentalContent))assert.ok(t.services[4][1].includes('YouTube'));
});
test('dental plan selection and details links are available',()=>{
  for(const lang of ['ru','he','en']){
    const html=read(`galany-crm/${lang==='he'?'':lang+'/'}index.html`);
    assert.ok(html.includes(dentalRoot+dentalPath(lang)));assert.ok(html.includes(dentalPlans[lang].name));
    assert.ok(html.includes('<option>'+dentalPlans[lang].name+'</option>'));
  }
});
