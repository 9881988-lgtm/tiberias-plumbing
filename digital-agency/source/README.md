# Structor Digital

The existing GitHub Pages site, redesigned on 2026-10-27. No framework or runtime build is required to serve it.

## Content and generated pages

- `content.mjs` contains the HE / EN / RU / FR content.
- `build.mjs` creates the four static HTML pages and the local sitemap. Run it with Node.js and the `lucide` package available to Node resolution. Lucide is used at build time only, so there is no runtime icon CDN.
- `../styles.css` and `../script.js` are the shared, directly editable site assets.
- Main Hebrew page: `/digital-agency/`. Other languages: `/digital-agency/en/`, `/digital-agency/ru/`, `/digital-agency/fr/`.
- Old `?lang=` links resolve to the corresponding static page while preserving other query parameters and the fragment.
- Changes to language URLs also require updating the root sitemap.

## Facts and scope

The portfolio identifies ReceiptIL as the published product, the local-service website as an in-house project, and the AI contact centre as a pilot proposal. It makes no claims about 123 live apps, unnamed client results, awards, or accounting certification. The existing project prices, phone, email, address and hours are retained. The expired DIGITAL100 promotion is removed.

Project briefs are assembled in the browser and passed to a WhatsApp or email link; the visitor still sends the message. There is no form backend, local storage or automatic submission. Existing Google tag configuration is retained; enquiry events contain categories, not project text.

## Artwork

`../assets/hero.webp` was generated with the built-in image generation tool and optimised for the web. It is an editorial brand illustration, not a client product. Final prompt:

> Premium editorial hero background for Structor Digital. Wide landscape. A tangible still life of silver aluminium display slabs and one black smartphone on a soft-white studio floor. Rectilinear architecture, black screens with flat acid-lime asterisks and neutral grid details. Sharp studio light, realistic materials and hard shadows. Objects on the right, clean negative space on the left for website copy. No people, logos, readable text, spheres, gradients or bokeh. Not a client case study.

`mayim-website.webp` is a captured view of the existing public air-conditioner service website. The ReceiptIL interface is the existing product screenshot. `social-preview.jpg` captures the redesigned hero for link previews.

## Validation

Before publishing, validate JavaScript syntax, JSON-LD, local assets and links; test desktop and narrow mobile layouts for all four languages, RTL, menu, service accordions, package-to-brief selection, empty-brief validation and generated contact links. Do not send live test enquiries.
