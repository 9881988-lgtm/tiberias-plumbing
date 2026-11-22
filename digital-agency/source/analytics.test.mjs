import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const root = new URL('../', import.meta.url);
const origin = 'https://9881988-lgtm.github.io';
const prefix = '/tiberias-plumbing/digital-agency/';
const id = 'G-TEST1234';
const runtime = readFileSync(new URL('analytics.js', root), 'utf8');

function fixture(choice = null, pathname = prefix + 'request/ru/', source = runtime.replace(/const measurementId = '[^']*';/, `const measurementId = '${id}';`)) {
  const events = {};
  const mock = () => ({
    children: [], append(...nodes) { this.children.push(...nodes); },
    get firstElementChild() { return this.children[0]; },
    setAttribute() {}, focus() {},
  });
  const document = {
    title: 'Request', documentElement: {lang: 'ru'}, createElement: mock, head: mock(), body: mock(),
    referrer: 'https://social.example/private/path?email=user@example.invalid',
    currentScript: {src: origin + prefix + 'analytics.js'}, readyState: 'interactive',
    addEventListener(name, listener) { events[name] = listener; },
  };
  const window = { addEventListener() {} };
  const location = new URL(origin + pathname + '?utm_source=linkedin&utm_medium=social&utm_campaign=offer-ru&utm_content=user@example.invalid&email=user@example.invalid#private');
  const localStorage = {getItem: () => choice, setItem: (_, value) => { choice = value; }};
  runInNewContext(source, {document, window, location, URLSearchParams, URL, localStorage});
  return {
    document, window, currentChoice: () => choice,
    clicks: () => Array.from(window.edlAnalyticsLayer || [], args => [...args]),
    choose(value) {
      const panel = document.body.children[1];
      panel.children[2].children[value === 'allow' ? 1 : 0].onclick();
    },
    click(url) { events.click({target: {closest: () => ({href: url})}}); },
  };
}

test('GA4 stays off until permission, and with no ID or outside the agency', () => {
  const declined = fixture();
  assert.deepEqual(declined.clicks(), []);
  declined.choose('decline');
  declined.click(origin + prefix + 'dental-secretary/dental-secretary-ru.pdf');
  declined.window.edlAnalytics.enquiryAccepted('galany-crm','order');
  assert.equal(declined.currentChoice(), 'decline');
  assert.deepEqual(declined.clicks(), []);
  assert.deepEqual(fixture('allow','/unrelated/').clicks(), []);
  assert.deepEqual(fixture('allow',prefix,runtime.replace(/const measurementId = '[^']*';/, "const measurementId = '';")).clicks(), []);
});

test('page, PDF and accepted-lead events exclude form or arbitrary URL data', () => {
  const f = fixture();
  f.choose('allow');
  f.choose('allow');
  f.click(origin + prefix + 'dental-secretary/dental-secretary-ru.pdf?email=user@example.invalid');
  f.click('https://other.example/private.pdf');
  f.click(origin + prefix + 'galany-crm/');
  f.window.edlAnalytics.enquiryAccepted('galany-crm','order');
  const commands = f.clicks();
  assert.deepEqual(commands.filter(x => x[0] === 'event').map(x => x[1]), ['page_view','file_download','generate_lead']);
  const config = commands.find(x => x[0] === 'config')[2];
  assert.equal(commands[0][0], 'set');
  assert.equal(commands[0][1], config);
  assert.equal(config.send_page_view, false);
  assert.equal(config.allow_google_signals, false);
  assert.equal(config.campaign_source, 'linkedin');
  assert.equal(config.campaign_medium, 'social');
  assert.equal(config.campaign_name, 'offer-ru');
  assert.equal(config.page_referrer, 'https://social.example/');
  assert.equal(config.page_location, origin + prefix + 'request/ru/');
  assert.match(JSON.stringify(commands), /dental-secretary-ru\.pdf/);
  assert.doesNotMatch(JSON.stringify(commands), /@example|private/);
  f.choose('decline');
  f.window.edlAnalytics.enquiryAccepted('galany-crm','enquiry');
  assert.equal(f.window['ga-disable-' + id], true);
  assert.equal(f.clicks().length, commands.length);
});

test('all published agency pages load the same deferred analytics script', () => {
  const walk = directory => readdirSync(directory, {withFileTypes:true}).flatMap(entry => {
    if (entry.isDirectory() && entry.name !== 'source') return walk(new URL(entry.name + '/', directory));
    return entry.name === 'index.html' ? [new URL(entry.name, directory)] : [];
  });
  const pages = walk(root);
  assert.ok(pages.length >= 53);
  for (const page of pages) {
    const tags = [...readFileSync(page,'utf8').matchAll(/<script defer data-edl-analytics src="([^"]+)"/g)];
    assert.equal(tags.length, 1, page.href);
    assert.equal(new URL(tags[0][1], page).pathname,new URL('analytics.js',root).pathname);
  }
});
