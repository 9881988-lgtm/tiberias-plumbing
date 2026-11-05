# Structor Digital

The existing GitHub Pages site, redesigned on 2026-10-27. No framework or runtime build is required to serve it.

## Content and generated pages

- `content.mjs` contains the HE / EN / RU / FR content.
- `build.mjs` creates the four static HTML pages and the local sitemap. Run it with Node.js and the `lucide` package available to Node resolution. Lucide is used at build time only, so there is no runtime icon CDN.
- `../styles.css` and `../script.js` are the shared, directly editable site assets.
- Main Hebrew page: `/digital-agency/`. Other languages: `/digital-agency/en/`, `/digital-agency/ru/`, `/digital-agency/fr/`.
- Old `?lang=` links resolve to the corresponding static page while preserving other query parameters and the fragment.
- Changes to language URLs also require updating the root sitemap.

## Galany CRM software pages (5 November 2026)

`software-content.mjs` is the HE/RU/EN copy source. `software.mjs` renders 12 static pages under `software/`, `galany-crm/`, `ai-sales-agent/` and `call-center-software/`. The normal `build.mjs` command also rebuilds them and the local sitemap. These are distinct product intents, not automatically generated keyword/location pages. Canonicals and reciprocal hreflang links use real static URLs.

The cloud CRM is operational; its text assistance and voice module are integrated. Customer telephony is still a pilot, not a live production promise. External channel activation, Booking/Airbnb and Calendar integrations require supported connections and acceptance testing. Public brand: Galany CRM. Existing application/interface name: Golani CRM. The screenshot is a previously verified test interface with fictional data, not customer data or proof of live platform sync.

Published rates remain Light 2000 ILS/month and Booking 3000 ILS/month plus 18 ILS per actual call-hour. Business first-line pricing is 18 x 24 x calendar days including idle time; Business Plus extra lines use actual call minutes. All prices exclude VAT. No standalone duplicate Light fee or tax calculation is introduced.

`software.js` builds a demo/subscription-proposal draft in WhatsApp or email; it does not collect leads in a backend, send messages, accept a contract or activate a subscription. Campaign source fields are allowlisted and are included in a visitor-approved draft. A draft event is not a signup or purchase. No new analytics account, advertising campaign or paid integration is configured. The browser calculator is an estimate, not an invoice.

SEO includes unique titles/descriptions, crawlable visible content, WebPage/CollectionPage, SoftwareApplication, offers with VAT exclusion, breadcrumbs and visible FAQ data. No fabricated ratings or review counts. This does not guarantee rich results, indexing or rankings. Search Console sitemap submission and URL inspection require authorized access and are separate from publication.

### Contact routing

Calls on the public site use the owner-confirmed CRM number `+972 55 507 1400` (`tel:+972555071400`). This includes displayed phone numbers, copy-number controls, localized call text and Organization/LocalBusiness telephone metadata. WhatsApp remains a distinct, previously verified channel on `+972 53 361 3100` (`wa.me/972533613100`); do not change its destination merely because the call number changes. Registration of the CRM number in WhatsApp has not been verified. Do not place a test call or change provider routing as part of a website contact edit.

## Facts and scope

The portfolio identifies ReceiptIL as the published product, the local-service website as an in-house project, and the AI contact centre as a pilot proposal. It makes no claims about 123 live apps, unnamed client results, awards, or accounting certification. The existing project prices, phone, email, address and hours are retained. The expired DIGITAL100 promotion is removed.

Project briefs are assembled in the browser and passed to a WhatsApp or email link; the visitor still sends the message. There is no form backend, local storage or automatic submission. Existing Google tag configuration is retained; enquiry events contain categories, not project text.

## Artwork

`../assets/hero.webp` was generated with the built-in image generation tool and optimised for the web. It is an editorial brand illustration, not a client product. Final prompt:

> Premium editorial hero background for Structor Digital. Wide landscape. A tangible still life of silver aluminium display slabs and one black smartphone on a soft-white studio floor. Rectilinear architecture, black screens with flat acid-lime asterisks and neutral grid details. Sharp studio light, realistic materials and hard shadows. Objects on the right, clean negative space on the left for website copy. No people, logos, readable text, spheres, gradients or bokeh. Not a client case study.

`mayim-website.webp` is a captured view of the existing public air-conditioner service website. The ReceiptIL interface is the existing product screenshot. `social-preview.jpg` captures the redesigned hero for link previews.

### Upcoming releases illustration (2026-11-01)

`../assets/iphone-duo-ios-27-2.webp` was generated with the built-in image generation tool and optimised from the original PNG. It is an editorial illustration, not an Apple product photograph or proof of app compatibility. The adjacent text explicitly defers compatibility and release timing until testing. The publication notice continues to identify only ReceiptIL as published.

Official platform references, checked on 1 November 2026:

- https://www.apple.com/iphone-duo/ (foldable iPhone Duo and iOS 27)
- https://support.apple.com/en-us/100100 (current iOS 27.2 update)

The Apple overview image was used only as a physical-proportions reference, not copied into the site: https://www.apple.com/v/iphone/home/cl/images/overview/priority-router/hero_iphone_duo__cvgy57jsl44m_large.jpg

Final generation prompt:

> Use case: product-mockup. Asset: editorial illustration for the upcoming releases section of Structor Digital. Use the reference ONLY to preserve the physical proportions of the real foldable iPhone Duo: ONE book-style foldable smartphone, central vertical hinge, two short broad halves making a nearly square inner display, very thin titanium frame, no notch. NOT two separate phones. Create an original premium studio product illustration: the single phone stands open about 155 degrees at a slight three-quarter angle on a soft white/off-white surface, entirely visible, no hands or people. Its broad inner display shows a tasteful illustrative iOS-style home screen with clean translucent widgets, a few colourful familiar-looking app icons, and a fresh soft mint/sky-blue wallpaper, not any of our apps. Beside it at the lower right sits a small refined translucent rounded-square software-version tile with EXACT, perfectly readable black text on two lines: 'iOS' and '27.2'. This software tile should be visually subordinate to the phone and not block it. Landscape composition approximately 3:2, fully framed device filling around 65 percent of the image. Soft directional studio light, believable gentle shadows, beautifully realistic materials, white background matching a minimal black/white/acid-lime agency website. Do not add an Apple logo, company logo, headlines, people, cables, extra phones, decorative spheres, bokeh, watermarks or extra written words. The illustration must clearly look like one foldable book-shaped smartphone with a central hinge, not a laptop or two connected normal iPhones.

## Validation

Before publishing, validate JavaScript syntax, JSON-LD, local assets and links; test desktop and narrow mobile layouts for all four languages, RTL, menu, service accordions, package-to-brief selection, empty-brief validation and generated contact links. Do not send live test enquiries.
