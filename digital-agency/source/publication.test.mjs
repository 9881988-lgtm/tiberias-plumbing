import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { innovation, innovationPath, innovationUrls } from './innovation.mjs';

const agency = fileURLToPath(new URL('../', import.meta.url));
const site = join(agency, '..');
const read = path => readFileSync(path, 'utf8');
const amount = /\u20aa|\$\d|\b(?:ILS|NIS)\s*\d|\d\s*(?:ILS|NIS)\b|"(?:priceSpecification|priceCurrency|priceRange|lowPrice|highPrice|price)"\s*:/i;

function* files(dir) {
  for (const entry of readdirSync(dir, {withFileTypes:true})) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* files(path);
    else yield path;
  }
}

test('public agency and home-service pages use quotes rather than published prices', () => {
  const publicFiles = [
    ...Array.from(files(agency)).filter(path=>!path.includes('/source/')),
    join(site,'index.html'), join(site,'script.js'),
    ...['ac-cleaning','solar-boilers','home-services'].flatMap(dir=>
      ['index.html','script.js'].map(file=>join(site,dir,file)))
  ];
  for (const f of publicFiles.filter(f=>/\.(?:html|js|mjs|json)$/.test(f))) {
    assert.doesNotMatch(read(f), amount, f);
    if (f.endsWith('.html')) assert.doesNotMatch(read(f), />undefined<|id="cost-total"|class="package-price"/, f);
  }
  for (const f of publicFiles) assert.ok(!/\.pdf$|\/catalog\.json$/.test(f), f);
});

test('app pages and catalog data do not publish purchase amounts', () => {
  for (const f of ['receiptil/index.html','structo-robotics/apps.html','scripts/apps-catalog-template.html','nocloud-ai/index.html','offline-budget/index.html']) {
    const content = read(join(site,f));
    assert.doesNotMatch(content, amount, f);
    assert.match(content,/https:\/\/apps\.apple\.com\//, f);
  }
  for (const f of ['nocloud-ai/script.js','offline-budget/support.html','portfolio-apps/index.html','portfolio-apps/apps.js','neravia-ai-v2/article.html','neravia-ai-v2/support.html','tavora-ai-translator/support.html','teymia-habit/index.html','teymia-habit/support.html','structo-robotics/hub.js','structo-robotics/published-apps-data.js']) {
    assert.doesNotMatch(read(join(site,f)), amount, f);
  }
});

test('each agency language links to its own innovation service and the official program', () => {
  for (const [lang,t] of Object.entries(innovation)) {
    const path = innovationPath(lang);
    const page = read(join(agency,path,'index.html'));
    const home = read(join(agency,lang==='he'?'':lang,'index.html'));
    assert.ok(home.includes(path));
    assert.match(home,/value="innovation"/);
    assert.ok(page.includes(t.title));
    assert.match(page,/https:\/\/innovationisrael\.org\.il\//);
    assert.match(page,/tel:\+972555071400/);
    assert.match(page,/https:\/\/wa\.me\/972533613100/);
    assert.ok(existsSync(join(agency,path,'index.html')));
    for (const url of innovationUrls) assert.ok(page.includes(url));
  }
  for(const path of [join(site,'sitemap.xml'),join(agency,'sitemap.xml')]) {
    for(const url of innovationUrls) assert.ok(read(path).includes(url));
  }
});
