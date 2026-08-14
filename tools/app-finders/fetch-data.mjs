import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { topics } from "./topics.mjs";

const directory = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(directory, "data", "source-snapshot.json");
const temporaryOutput = `${output}.tmp`;
const existing = fs.existsSync(output) ? JSON.parse(fs.readFileSync(output, "utf8")) : { topics: {} };
const snapshot = { fetchedAt: new Date().toISOString(), source: "Apple iTunes Search API", country: "us", topics: { ...existing.topics } };
const pendingTotal = topics.filter((topic) => !snapshot.topics[topic.slug]?.results?.length).length;
let fetchedCount = 0;

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.rmSync(temporaryOutput, { force: true });

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const cleanText = (value = "") => String(value).replace(/\s+/g, " ").trim();

function saveSnapshot() {
  fs.writeFileSync(temporaryOutput, `${JSON.stringify(snapshot, null, 2)}\n`);
  fs.renameSync(temporaryOutput, output);
}

function normalize(item) {
  return {
    id: String(item.trackId),
    name: cleanText(item.trackName),
    developer: cleanText(item.sellerName || item.artistName),
    url: item.trackViewUrl,
    artwork: item.artworkUrl512 || item.artworkUrl100,
    price: Number(item.price || 0),
    formattedPrice: item.formattedPrice || (Number(item.price || 0) === 0 ? "Free" : `$${Number(item.price).toFixed(2)}`),
    currency: item.currency || "USD",
    rating: Number(item.averageUserRating || 0),
    ratingCount: Number(item.userRatingCount || 0),
    currentVersionRating: Number(item.averageUserRatingForCurrentVersion || 0),
    minimumOsVersion: cleanText(item.minimumOsVersion),
    version: cleanText(item.version),
    updated: item.currentVersionReleaseDate || item.releaseDate || "",
    genres: Array.isArray(item.genres) ? item.genres.slice(0, 3) : [],
    contentRating: cleanText(item.contentAdvisoryRating),
    devices: Array.isArray(item.supportedDevices) ? item.supportedDevices.slice(0, 40) : [],
    languageCodes: Array.isArray(item.languageCodesISO2A) ? item.languageCodesISO2A.slice(0, 24) : [],
    features: Array.isArray(item.features) ? item.features.slice(0, 10) : [],
    screenshot: item.screenshotUrls?.[0] || item.ipadScreenshotUrls?.[0] || ""
  };
}

for (let index = 0; index < topics.length; index += 1) {
  const topic = topics[index];
  if (snapshot.topics[topic.slug]?.results?.length) {
    if ((index + 1) % 100 === 0) console.log(`Scanned ${index + 1}/${topics.length}; cached topics are intact.`);
    continue;
  }

  const url = new URL("https://itunes.apple.com/search");
  url.searchParams.set("term", topic.term);
  url.searchParams.set("country", "us");
  url.searchParams.set("entity", topic.entity);
  url.searchParams.set("limit", "16");

  let response;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      response = await fetch(url, { headers: { "User-Agent": "StructorRobotics-AppFinder/1.0" } });
      if (response.ok) break;
      throw new Error(`HTTP ${response.status}`);
    } catch (error) {
      if (attempt === 3) throw error;
      await wait(attempt * 5000);
    }
  }

  const payload = await response.json();
  const seen = new Set();
  const results = payload.results.map(normalize).filter((item) => {
    if (!item.id || !item.name || !item.url || seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });

  snapshot.topics[topic.slug] = {
    query: topic.term,
    entity: topic.entity,
    sourceUrl: url.toString(),
    fetchedAt: new Date().toISOString(),
    results
  };
  fetchedCount += 1;
  if (fetchedCount % 10 === 0 || fetchedCount === pendingTotal) {
    saveSnapshot();
    console.log(`Fetched ${fetchedCount}/${pendingTotal}; latest ${topic.slug}: ${results.length}. Checkpoint saved.`);
  }
  if (index < topics.length - 1) await wait(3200);
}

console.log(`Saved ${Object.keys(snapshot.topics).length} topic snapshots to ${output}`);
