#!/usr/bin/env node

import fs from "node:fs";
import vm from "node:vm";

const [lookupPath, dataPath] = process.argv.slice(2);

if (!lookupPath || !dataPath) {
  console.error("Usage: sync-published-apps-data.mjs <apple-lookup.json> <published-apps-data.js>");
  process.exit(1);
}

const lookup = JSON.parse(fs.readFileSync(lookupPath, "utf8"));
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(dataPath, "utf8"), context);

const current = Array.isArray(context.window.structorPublishedApps)
  ? context.window.structorPublishedApps
  : [];
const currentIds = new Set(current.map((app) => String(app.id)));

function categoryFor(result) {
  if (result.primaryGenreName === "Health & Fitness") return "wellness";
  return "business";
}

function summaryFor(description) {
  const paragraphs = description
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const summary = [];
  for (const paragraph of paragraphs) {
    if (/^[A-Z0-9 &—–-]{4,}$/.test(paragraph)) break;
    summary.push(paragraph);
    if (summary.length === 2) break;
  }
  return summary.join("\n\n") || paragraphs[0] || "";
}

function withoutPrices(description) {
  return description
    .replace(/^(Monthly|Annual): \$\d[\d.,]*\s*$/gm, '$1 subscription')
    .replace(/\b(one(?:-time)?) (?:US )?\$\d[\d.,]* (?=(?:App Store )?purchase)/gi, '$1 ')
    .replace(/\$\d[\d.,]*-per-month /g, '')
    .replace(/\$\d[\d.,]* (?=LIFETIME\b)/g, '')
    .replace(/(?:US )?\$\d+(?:[.,]\d\d)?(?!\d)/g, 'see the App Store for pricing');
}

const additions = lookup.results
  .filter((result) => !currentIds.has(String(result.trackId)))
  .map((result) => {
    const description = withoutPrices(result.description || "");
    return {
      id: result.trackId,
      name: result.trackName,
      category: categoryFor(result),
      summary: summaryFor(description),
      description,
      appStoreUrl: result.trackViewUrl.replace("/us/", "/il/"),
      icon: `assets/apps/published-${result.trackId}.jpg`,
      minimumOsVersion: result.minimumOsVersion
    };
  })
  .sort((left, right) => left.name.localeCompare(right.name));

const cleaned = current.map(app => ({...app, summary: withoutPrices(app.summary), description: withoutPrices(app.description)}));
const output = `window.structorPublishedApps = ${JSON.stringify([...cleaned, ...additions], null, 2)};\n`;
fs.writeFileSync(dataPath, output);

console.log(JSON.stringify({ existing: current.length, added: additions.length, total: current.length + additions.length }));
