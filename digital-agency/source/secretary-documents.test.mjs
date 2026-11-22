import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const hashes = {
  'dental-secretary': {
    he: 'a56a260ba5fee5feec49d83c7a585a0c7aecaa7a2ddcdb8e741362094bc29db1',
    ru: '8c6d550e4dd663df63a8f9dacbaf2d042dcfb6b7573a374db6fd648de4904ae4',
  },
  'auto-secretary': {
    he: '90ac9739672c85990c11920c7c68770492515fafda566d846c349af894b0c1fb',
    ru: '5f2075b4b14e7f185c5b9992f42070c6aaa8323a37113bf953680830a63b6cf7',
  },
};

test('both services publish exact approved PDFs and show two download buttons per locale', () => {
  for (const [slug, editions] of Object.entries(hashes)) {
    const dir = new URL(slug+'/', root);
    for (const [lang, hash] of Object.entries(editions)) {
      const bytes = readFileSync(new URL(`${slug}-${lang}.pdf`, dir));
      assert.equal(bytes.subarray(0, 5).toString('ascii'), '%PDF-');
      assert.equal(createHash('sha256').update(bytes).digest('hex'), hash);
    }
    for (const pageLang of ['he', 'ru']) {
      const page = new URL(pageLang === 'ru' ? 'ru/index.html' : 'index.html', dir);
      const html = readFileSync(page, 'utf8');
      const group = html.match(/<div class="product-actions offer-downloads"[^>]*>(.*?)<\/div>/)?.[1];
      assert.ok(group, page.href);
      assert.equal((group.match(/ download>/g)||[]).length, 2);
      for (const lang of Object.keys(editions)) {
        const name = `${slug}-${lang}.pdf`;
        const href = (pageLang === 'ru' ? '../' : '') + name;
        assert.ok(group.includes(`href="${href}" type="application/pdf" hreflang="${lang}" download`));
        assert.equal(new URL(href, page).href, new URL(name, dir).href);
      }
    }
  }
});
