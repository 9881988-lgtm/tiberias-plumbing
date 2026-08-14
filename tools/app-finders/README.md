# App Finders generator

The generator maintains 100 core App Store catalogs and 900 narrower, browseable intent catalogs in English, Spanish, Russian and Hebrew.

## Build flow

```bash
node tools/app-finders/fetch-data.mjs
node tools/app-finders/build.mjs
node tools/app-finders/audit.mjs
```

`fetch-data.mjs` caches official Apple Search API snapshots and stays below Apple's documented approximate limit of 20 calls per minute. Re-running it fetches only missing or empty topics.

`build.mjs` creates the localized hubs, catalogs, data files, sitemap and quality report. The 100 core catalogs also have three noindex editorial guide drafts per locale. Intent catalogs do not generate repeated guide pages.

`audit.mjs` verifies page counts, local references, canonicals, hreflang clusters, JSON-LD, unique metadata, JavaScript syntax, robots state and sitemap membership.

## Search policy

All 900 intent catalogs remain `noindex,follow` by default. They are useful through the on-site catalog search, but should not enter the XML sitemap merely because a keyword variation exists.

An intent slug may be added to `approvedIntentSlugs` in `config.mjs` only after:

1. a real demand signal documents the narrower use case;
2. an editor verifies the exact qualifier against current product pages or hands-on tests;
3. the catalog passes result-count, mature-rating, artwork and overlap gates;
4. the page contains genuinely useful evidence beyond a transformed search query.

This policy follows Google's guidance against scaled search content that adds little value.
