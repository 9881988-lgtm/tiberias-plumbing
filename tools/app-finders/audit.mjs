import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { baseTopics, topics } from "./topics.mjs";
import { finderLocales } from "./copy.mjs";
import { approvedIntentSlugs } from "./config.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const siteRoot = path.join(root, "app-finders");
const locales = Object.keys(finderLocales);
const quality = JSON.parse(fs.readFileSync(path.join(root, "tools/app-finders/data/quality-report.json"), "utf8"));
const qualityBySlug = Object.fromEntries(quality.rows.map((row) => [row.slug, row]));
const failures = [];

function fail(message) {
  failures.push(message);
}

function walk(directory, suffix) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target, suffix) : entry.name.endsWith(suffix) ? [target] : [];
  });
}

function homeFile(topic, locale) {
  return locale === "en"
    ? path.join(siteRoot, topic.slug, "index.html")
    : path.join(siteRoot, locale, topic.slug, "index.html");
}

function canonicalUrl(topic, locale) {
  const localePath = locale === "en" ? "" : `${locale}/`;
  return `https://9881988-lgtm.github.io/tiberias-plumbing/app-finders/${localePath}${topic.slug}/`;
}

function localTarget(file, rawValue) {
  const value = rawValue.split("#")[0].split("?")[0];
  if (!value || value.startsWith("#") || /^(?:[a-z]+:)?\/\//i.test(value) || /^(?:mailto|tel|data):/i.test(value)) return null;
  const decoded = decodeURI(value);
  const target = decoded.startsWith("/")
    ? path.join(root, decoded.replace(/^\/tiberias-plumbing\/?/, "").replace(/^\//, ""))
    : path.resolve(path.dirname(file), decoded);
  return decoded.endsWith("/") ? path.join(target, "index.html") : target;
}

const htmlFiles = walk(siteRoot, ".html");
const dataFiles = walk(siteRoot, "data.js");
const expectedHtml = topics.length * locales.length + baseTopics.length * 3 * locales.length + locales.length;
const expectedData = topics.length * locales.length;

if (htmlFiles.length !== expectedHtml) fail(`Expected ${expectedHtml} HTML files, found ${htmlFiles.length}`);
if (dataFiles.length !== expectedData) fail(`Expected ${expectedData} data files, found ${dataFiles.length}`);

const titleOwners = new Map();
const descriptionOwners = new Map();
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);
  const canonicalCount = (html.match(/<link\s+rel="canonical"/g) || []).length;
  const hreflangCount = (html.match(/<link\s+rel="alternate"\s+hreflang="[^"]+"/g) || []).length;
  if (canonicalCount !== 1) fail(`${relative}: expected one canonical, found ${canonicalCount}`);
  if (hreflangCount !== 5) fail(`${relative}: expected five hreflang links, found ${hreflangCount}`);

  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!schemas.length) fail(`${relative}: missing JSON-LD`);
  for (const match of schemas) {
    try { JSON.parse(match[1]); } catch (error) { fail(`${relative}: invalid JSON-LD (${error.message})`); }
  }

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const target = localTarget(file, match[1]);
    if (target && !fs.existsSync(target)) fail(`${relative}: broken local reference ${match[1]}`);
  }
}

for (const topic of topics) {
  const row = qualityBySlug[topic.slug];
  if (!row) {
    fail(`${topic.slug}: missing quality row`);
    continue;
  }
  if (topic.series === "intent" && !approvedIntentSlugs.has(topic.slug) && row.indexable) fail(`${topic.slug}: unapproved intent draft must remain noindex`);
  for (const locale of locales) {
    const file = homeFile(topic, locale);
    if (!fs.existsSync(file)) {
      fail(`${topic.slug}/${locale}: missing catalog home`);
      continue;
    }
    const html = fs.readFileSync(file, "utf8");
    const relative = path.relative(root, file);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1];
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1] || "";
    const titleKey = `${locale}:${title}`;
    const descriptionKey = `${locale}:${description}`;
    if (titleOwners.has(titleKey)) fail(`${relative}: duplicate title with ${titleOwners.get(titleKey)}`);
    if (descriptionOwners.has(descriptionKey)) fail(`${relative}: duplicate description with ${descriptionOwners.get(descriptionKey)}`);
    titleOwners.set(titleKey, relative);
    descriptionOwners.set(descriptionKey, relative);
    if (canonical !== canonicalUrl(topic, locale)) fail(`${relative}: unexpected canonical ${canonical}`);
    if (row.indexable && !robots.startsWith("index,")) fail(`${relative}: quality pass is not indexable`);
    if (!row.indexable && !robots.startsWith("noindex,")) fail(`${relative}: quality hold is not noindex`);
    if (topic.series === "intent" && html.includes("/guides/")) fail(`${relative}: intent catalog links to generated guides`);
  }
}

for (const file of dataFiles) {
  try { new Function(fs.readFileSync(file, "utf8")); } catch (error) { fail(`${path.relative(root, file)}: invalid data.js (${error.message})`); }
}

const sitemap = fs.readFileSync(path.join(root, "sitemap-app-finders.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const expectedSitemapUrls = locales.length + quality.indexable * locales.length;
if (sitemapUrls.length !== expectedSitemapUrls) fail(`Sitemap expected ${expectedSitemapUrls} URLs, found ${sitemapUrls.length}`);
if (new Set(sitemapUrls).size !== sitemapUrls.length) fail("Sitemap contains duplicate URLs");
for (const topic of topics.filter((item) => !qualityBySlug[item.slug].indexable)) {
  for (const locale of locales) {
    if (sitemapUrls.includes(canonicalUrl(topic, locale))) fail(`${topic.slug}/${locale}: noindex URL appears in sitemap`);
  }
}

if (quality.total !== topics.length) fail(`Quality report total is ${quality.total}, expected ${topics.length}`);
if (quality.indexable + quality.reviewNeeded !== topics.length) fail("Quality report totals do not add up");

if (failures.length) {
  console.error(`App Finder audit failed with ${failures.length} issue(s):`);
  failures.slice(0, 100).forEach((message) => console.error(`- ${message}`));
  if (failures.length > 100) console.error(`- ...and ${failures.length - 100} more`);
  process.exitCode = 1;
} else {
  console.log(`App Finder audit passed: ${htmlFiles.length} HTML pages, ${dataFiles.length} data files, ${sitemapUrls.length} indexed URLs.`);
  console.log(`Quality gate: ${quality.indexable} indexable, ${quality.reviewNeeded} held at noindex.`);
}
