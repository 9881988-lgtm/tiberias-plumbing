import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const editions = [
  ['he', 'hotel-consulting-he.pdf', '63eb467a754713cad516377ce87387aa5677d2e5263d06c638efce74eecf6bf6'],
  ['ru', 'hotel-consulting-ru.pdf', '6430df26e67316740ebb851137e10f3896bb52e58b76e26d9203db9e5b30fcce'],
  ['en', 'hotel-consulting-en.pdf', '7b0ec9c39756a9b1bfd1044c375367fbaa67ea195f41dec3250c2fa6ddceaad4'],
];

test('hotel consulting PDFs are the three approved, unchanged editions', () => {
  for (const [lang, name, hash] of editions) {
    const bytes = readFileSync(new URL('../hotel-consulting/' + name, import.meta.url));
    assert.equal(bytes.subarray(0, 5).toString('ascii'), '%PDF-', lang);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), hash, lang);
  }
});

test('both hotel consulting pages expose all PDF languages and a hero shortcut', () => {
  for (const [pageLang, relative] of [['he', ''], ['ru', 'ru/']]) {
    const page = new URL('../hotel-consulting/' + relative + 'index.html', import.meta.url);
    const html = readFileSync(page, 'utf8');
    assert.equal((html.match(/id="presentations"/g) || []).length, 1, pageLang);
    assert.match(html, /href="#presentations"/);
    assert.match(html, /aria-labelledby="documents-title"/);
    assert.match(html, /class="hotel-pdf-links"/);
    for (const [lang, name] of editions) {
      const href = (pageLang === 'ru' ? '../' : '') + name;
      assert.ok(html.includes(`href="${href}" type="application/pdf" hreflang="${lang}" target="_blank" rel="noopener"`), pageLang + ':' + lang);
      assert.equal(new URL(href, page).href, new URL('../hotel-consulting/' + name, import.meta.url).href);
    }
  }
});
