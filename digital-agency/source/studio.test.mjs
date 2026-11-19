import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { studio } from './studio.mjs';

for (const lang of Object.keys(studio)) {
  test(`studio homepage: ${lang}`, () => {
    const path = lang === 'he' ? '../index.html' : `../${lang}/index.html`;
    const html = readFileSync(new URL(path, import.meta.url), 'utf8');
    const work = html.indexOf('id="work"');
    assert.ok(work > html.indexOf('id="hero-title"') && work < html.indexOf('id="services"'));
    assert.ok(html.includes(studio[lang].lead));
    assert.equal([...html.matchAll(/class="project-media"/g)].length, 3);
    assert.match(html, /studio\.css\?v=/);
    assert.match(html, /class="mobile-contact"[^>]+href="#contact"/);
    assert.match(html, /class="studio-route" id="innovation"/);
    assert.deepEqual(new Set([...html.matchAll(/ id="([^"]+)"/g)].map(m=>m[1])).size, [...html.matchAll(/ id="/g)].length);
    if (lang === 'ru' || lang === 'he') {
      for (const id of ['secretary-catalog','crm-pricing','hotel-consulting']) assert.ok(html.includes(`id="${id}"`));
    }
  });
}
