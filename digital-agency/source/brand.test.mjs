import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const base = new URL('../', import.meta.url);
const publicRoot = 'https://9881988-lgtm.github.io/tiberias-plumbing/digital-agency/';
const brand = 'Eydelstein Digital Lab';
const paths = [
  '', 'en/', 'ru/', 'fr/', 'ai-call-center/',
  ...['software', 'galany-crm', 'ai-sales-agent', 'call-center-software']
    .flatMap(product => ['', 'en/', 'ru/'].map(lang => `${product}/${lang}`))
];
const read = path => readFileSync(new URL(path, base), 'utf8');
const pages = paths.map(path => ({ path, html: read(`${path}index.html`) }));
const graphs = html => [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  .flatMap(match => { const value = JSON.parse(match[1]); return value['@graph'] || [value]; });

test('all agency pages use the owner-confirmed company name', () => {
  assert.equal(pages.length, 17);
  for (const { path, html } of pages) {
    assert.ok(html.includes(brand), path);
    assert.doesNotMatch(html, /Edelstein (?:Lab Digital|Digital Lab)/, path);
    assert.ok(!html.includes('Structor Digital'), path);
    assert.ok(!html.includes('Einstein Vab Digital'), path);
  }
});

test('canonical URLs and public organization identity remain consistent', () => {
  for (const { path, html } of pages) {
    const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)?.[1];
    assert.equal(canonical, publicRoot + path, path);
    const organization = graphs(html).find(item => item['@id'] === publicRoot + '#organization');
    assert.ok(organization, path);
    assert.equal(organization.name, brand, path);
    assert.equal(organization.telephone, '+972-55-507-1400', path);
    assert.equal(organization.email, '9881988@gmail.com', path);
  }
});

test('company mark links resolve to the new agency asset', () => {
  const expected = publicRoot + 'assets/edelstein-lab-digital-mark.svg';
  for (const { path, html } of pages.filter(page => page.path !== 'ai-call-center/')) {
    const marks = [...html.matchAll(/(?:src|href|content)="([^"]*edelstein-lab-digital-mark\.svg)"|"logo":"([^"]*edelstein-lab-digital-mark\.svg)"/g)];
    assert.ok(marks.length >= 2, path);
    for (const match of marks) assert.equal(new URL(match[1] || match[2], publicRoot + path).href, expected, path);
  }
  assert.ok(read('assets/edelstein-lab-digital-mark.svg').includes(brand));
});

test('product identity, privacy boundaries and existing connections are retained', () => {
  for (const { path, html } of pages) {
    assert.match(html, /Galany CRM|Golani CRM/, path);
    assert.match(html, /972533613100/, path);
  }
  const software = read('source/software-content.mjs');
  assert.match(software, /Production customer telephony is at pilot stage/);
  assert.match(software, /self-service checkout is not available/);
  assert.match(software, /Booking is ILS 3,000\/month/);
  assert.match(software, /Light is ILS 2,000\/month/);
});

test('build sources preserve the approved identity for future builds', () => {
  for (const path of ['source/build.mjs', 'source/software.mjs', 'source/content.mjs', 'source/software-content.mjs', 'script.js', 'ai-call-center/script.js']) {
    const source = read(path);
    assert.ok(source.includes(brand), path);
    assert.ok(!source.includes('Structor Digital'), path);
  }
  assert.match(read('source/build.mjs'), /<span>Eydelstein<\/span> <span class="digital">Digital Lab\.<\/span>/);
  assert.ok(!read('source/build.mjs').includes('assets/social-preview.jpg'));
});

test('industry pages and their catalogues use the same brand', () => {
  for (const product of ['auto-secretary', 'dental-secretary']) {
    for (const lang of ['', 'en/', 'ru/']) {
      const path = `${product}/${lang}index.html`;
      assert.ok(read(path).includes(brand), path);
      assert.doesNotMatch(read(path), /Edelstein (?:Lab Digital|Digital Lab)/, path);
    }
    const catalog = read(`${product}/catalog.json`);
    assert.ok(catalog.includes(brand));
    assert.doesNotMatch(catalog, /Edelstein (?:Lab Digital|Digital Lab)/);
  }
});
