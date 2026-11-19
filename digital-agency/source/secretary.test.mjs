import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {secretaryOffers,secretaryPath,secretaryRoot,secretaryPlan} from '../secretary-offers.mjs';
import {crmPlans,renderCrmPlans} from '../crm-plans.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
test('four offers have reciprocal RU/HE routes, full approved scope and PDF download links',()=>{
 assert.equal(secretaryOffers.length,4);
 for(const o of secretaryOffers){
  const h=read(secretaryPath(o)+'index.html');
  assert.ok(h.includes('lang="'+o.lang+'"'));assert.ok(h.includes('dir="'+(o.lang==='he'?'rtl':'ltr')+'"'));
  assert.ok(h.includes(secretaryRoot+secretaryPath(o)));
  assert.ok(h.includes(secretaryRoot+o.pdf));assert.ok(existsSync(new URL('../'+o.pdf,import.meta.url)));
  for(const x of secretaryOffers.filter(x=>x.key===o.key)) assert.ok(h.includes(secretaryRoot+secretaryPath(x)));
  for(const [title,text] of o.services){assert.ok(h.includes(title));assert.ok(h.includes(text));}
  assert.equal(o.services.length,4);assert.ok(h.includes(o.launch));assert.ok(h.includes(o.costs));
  const graph=JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  assert.equal(graph.find(x=>x['@type']==='DigitalDocument').encodingFormat,'application/pdf');
  assert.equal(graph.find(x=>x['@type']==='Service').offers,undefined);
  assert.doesNotMatch(h,/<ul><p>/);
 }
});
test('general catalogues expose both proposals without duplicate small-business entries',()=>{
 for(const lang of ['ru','he']){
  assert.equal(crmPlans[lang].plans.length,8);
  for(const key of ['hotel','small_business']){
   const p=secretaryPlan(key,lang);assert.equal(crmPlans[lang].plans.filter(x=>x.name===p.name).length,1);
   const h=read((lang==='he'?'':lang+'/')+'index.html');
   assert.ok(h.includes(p.details));assert.ok(h.includes(p.pdf));assert.ok(h.includes('id="secretary-catalog"'));
   for(const route of ['galany-crm/','software/','ai-sales-agent/','call-center-software/']){
    const page=read(route+(lang==='he'?'':lang+'/')+'index.html');assert.ok(page.includes(p.pdf));assert.ok(page.includes(p.details));
   }
   assert.ok(renderCrmPlans(lang).includes(p.pdf));
  }
 }
});
test('hotel offer is separate from full platform integration and consulting',()=>{
 for(const lang of ['ru','he']){
  const o=secretaryOffers.find(x=>x.key==='hotel'&&x.lang===lang);
  assert.ok(o.launch.includes('Booking.com'));assert.ok(o.launch.includes('Airbnb'));
  assert.ok(existsSync(new URL('../hotel-consulting/'+(lang==='he'?'':lang+'/')+'index.html',import.meta.url)));
 }
});
test('all new routes appear in both sitemaps',()=>{
 for(const o of secretaryOffers){
  assert.ok(read('sitemap.xml').includes(secretaryRoot+secretaryPath(o)));
  assert.ok(readFileSync(new URL('../../sitemap.xml',import.meta.url),'utf8').includes(secretaryRoot+secretaryPath(o)));
 }
});
