import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {posters,posterSlug} from './street-posters.mjs';

const root=new URL('../',import.meta.url);
const read=path=>readFile(new URL(path,root),'utf8');
for(const [lang,t] of Object.entries(posters)){
  test('poster offer and customer enquiry: '+lang,async()=>{
    const locale=lang==='he'?'':lang+'/';
    const route=posterSlug+'/'+locale;
    const page=await read(route+'index.html');
    const home=await read(locale+'index.html');
    const canonical='https://9881988-lgtm.github.io/tiberias-plumbing/digital-agency/'+route;
    const offer=JSON.parse(page.match(/<script type="application\/ld\+json">([\s\S]+?)<\/script>/)[1]);
    assert.equal(offer.url,canonical);
    assert.equal(offer.areaServed.name,'Tiberias');
    assert.equal(offer.offers.priceSpecification.minPrice,10);
    assert.equal(offer.offers.priceSpecification.priceCurrency,'ILS');
    assert.ok(page.includes('<h1>'+t.title+'</h1>'));
    assert.ok(page.includes(t.price));
    for(const [step] of t.steps) assert.ok(page.includes('<h3>'+step+'</h3>'));
    assert.ok(page.includes('href="https://wa.me/972533613100"'));
    for(const field of ['service','design','layout','email','phone','format','quantity','consent']) assert.ok(page.includes('name="'+field+'"'));
    assert.ok(page.includes('min="100"'));
    assert.deepEqual([...page.matchAll(/<option value="(\d+)"/g)].map(m=>Number(m[1])),[10,20,30]);
    const href=home.match(/href="([^"]*street-posters-tiberias[^"]*)"/)[1];
    assert.equal(new URL(href,new URL(locale,root)).href,new URL(route,root).href);
    for(const map of ['sitemap.xml','../sitemap.xml']) assert.ok((await read(map)).includes('<loc>'+canonical+'</loc>'));
  });
}
