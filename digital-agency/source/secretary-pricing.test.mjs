import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,mkdtemp} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {crmPlans,renderCrmPlans} from '../crm-plans.mjs';
import {buildDental} from './dental.mjs';
import {buildAuto} from './auto.mjs';
import {buildSecretaryOffers} from './secretary.mjs';
const root=new URL('../',import.meta.url);
test('three secretary products show approved choices without a minute promise; hotel stays separate',()=>{
 for(const lang of ['he','ru']){
  for(const id of ['dental_secretary','auto_secretary','small_business_secretary']){
   const p=crmPlans[lang].plans.find(x=>x.id===id);assert.ok(p);assert.match(p.period,/149/);assert.match(p.period,/590/);assert.doesNotMatch(JSON.stringify(p),/100|500/);
  }
  const hotel=crmPlans[lang].plans.find(x=>x.id==='hotel_secretary');assert.match(hotel.period,/100/);assert.doesNotMatch(hotel.period,/149|590/);
  assert.doesNotMatch(crmPlans[lang].intro,/100/);
 }
});
test('detail builders preserve reviewed pages and leave PDF assets intact on repeated builds',async()=>{
 const target=await mkdtemp(join(tmpdir(),'secretary-build-'));
 const paths=['dental-secretary','auto-secretary'].flatMap(k=>['index.html','ru/index.html','en/index.html'].map(l=>k+'/'+l)).concat(['small-business-secretary/index.html','small-business-secretary/ru/index.html']);
 const hotel=await readFile(new URL('hotel-secretary/index.html',root));
 const pdf=await readFile(new URL('secretary-catalog/Hotel_Secretary_A4_HE.pdf',root));
 for(let i=0;i<2;i++) {await buildDental(target);await buildAuto(target);await buildSecretaryOffers(target);for(const p of paths)assert.deepEqual(await readFile(join(target,p)),await readFile(new URL(p,root)));}
 assert.deepEqual(await readFile(new URL('hotel-secretary/index.html',root)),hotel);assert.deepEqual(await readFile(new URL('secretary-catalog/Hotel_Secretary_A4_HE.pdf',root)),pdf);
});
