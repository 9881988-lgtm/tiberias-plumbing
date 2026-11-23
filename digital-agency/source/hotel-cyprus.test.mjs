import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { branch, languages, monthlyFee, pathFor, pdfFor, priceFor, site, words } from './hotel-cyprus-copy.mjs';

const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path,root),'utf8');

test('the Cyprus offer has four canonical languages, four downloads and the agreed fee', () => {
  assert.equal(monthlyFee,5500);
  for (const lang of Object.keys(languages)) {
    const path = branch+pathFor(lang);
    const html = read(path+'index.html');
    assert.ok(html.includes(`<html lang="${lang}" dir="${lang==='he'?'rtl':'ltr'}">`));
    assert.ok(html.includes(`<link rel="canonical" href="${site+path}">`));
    assert.ok(html.includes(priceFor(lang)) && html.includes(words[lang].month));
    assert.ok(html.includes(words[lang].support));
    assert.ok(html.includes('data-edl-analytics'));
    assert.equal((html.match(/ download>/g)||[]).length,4);
    for (const code of Object.keys(languages)) {
      const href = (lang==='en'?'':'../')+pdfFor(code);
      assert.ok(html.includes(`href="${href}" type="application/pdf" hreflang="${code}" download`));
      const pdf = readFileSync(new URL(href,new URL(path,root)));
      assert.equal(pdf.subarray(0,5).toString('ascii'),'%PDF-');
      assert.ok(html.includes(`href="${site+branch+pathFor(code)}"`));
    }
    for(const map of ['sitemap.xml','../sitemap.xml']) assert.ok(read(map).includes(`<loc>${site+path}</loc>`));
  }
});

test('all existing hotel pages link to the Cyprus offer in the appropriate language', () => {
  for (const lang of ['he','ru','en','fr']) {
    const current = lang==='he'?'':lang+'/';
    const page = 'hotel-consulting/'+current+'index.html';
    const [link] = read(page).match(/id="cyprus-offer" class="text-link" href="[^"]+"/g) || [];
    const dest = branch+pathFor(lang==='fr'?'en':lang);
    assert.ok(link,page);
    assert.equal(new URL(link.split('"')[5],new URL(page,root)).href,new URL(dest,root).href);
  }
});
