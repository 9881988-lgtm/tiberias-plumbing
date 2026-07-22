# Лендинг: מים ושמש - сантехника и ремонт в Тверии

Готовый статический сайт для рекламы выездных услуг `מים ושמש - אינסטלציה ושיפוצים`: установка солнечных бойлеров, подключение стиральных и посудомоечных машин, водопровод, сантехника, ремонт квартир, покраска, шпаклёвка, штукатурка и установка дверей в Тверии и рядом. Основной язык сайта — иврит, русский включается кнопкой на странице.

## Файлы

- `index.html` — страница лендинга с SEO meta-тегами и JSON-LD разметкой `Plumber`, `WebSite`, `WebPage`, `BreadcrumbList` и `FAQPage`.
- `styles.css` — адаптивный дизайн для телефона и компьютера.
- `script.js` — переключение иврит/русский и кнопка копирования телефона.
- `assets/solar-boiler-tiberias-hero.jpg` — оптимизированный баннер для первого экрана.
- `assets/solar-boiler-tiberias-4x3.jpg` и `assets/solar-boiler-tiberias-square.jpg` — дополнительные пропорции изображения для schema.org и sitemap.
- `robots.txt` — разрешение индексации.
- `sitemap.xml` — карта сайта для Google Search Console.

## Бесплатная публикация

Самый простой вариант для полноценного SEO — GitHub Pages, Netlify или Cloudflare Pages. Google Sites тоже бесплатный, но там сложнее добавить собственный HTML, schema-разметку и точные SEO meta-теги.

После публикации желательно:

1. Добавить сайт в Google Search Console.
2. Подтвердить владение сайтом.
3. Создать Google Business Profile для услуги в Тверии и указать телефон `+972-53-361-31-00`.
4. Добавить финальный адрес сайта в Search Console и отправить страницу на индексацию.
5. Постоянный URL GitHub Pages уже добавлен в `canonical`, `og:url`, `og:image`, JSON-LD и `sitemap.xml`.
6. После подтверждения Search Console отправить sitemap: `https://9881988-lgtm.github.io/tiberias-plumbing/sitemap.xml`.

Что уже сделано на сайте:

- основной язык — иврит, бренд — `מים ושמש - אינסטלציה ושיפוצים`;
- город и зоны обслуживания — טבריה / Tiberias / Тверия, סובב כנרת, נוף הגליל, צפת, בית שאן;
- title, description, Open Graph и Twitter-сниппеты;
- schema.org для локального сантехника и каталога услуг;
- блоки под локальные запросы: דוד שמש בטבריה, אינסטלטור בטבריה, שיפוצים בטבריה, חיבור מכונת כביסה בטבריה, Tiberias plumber;
- `robots.txt`, `sitemap.xml`, canonical URL и LTR-отображение телефона в RTL-странице.

Официальные материалы Google:

- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Local Business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Publish and share a Google Site](https://support.google.com/sites/answer/6372880)
- [Sitemaps report in Search Console](https://support.google.com/webmasters/answer/7451001)

## SEO-запросы, под которые подготовлен сайт

- солнечный бойлер Тверия
- установка бойлера Тверия
- сантехник Тверия
- сантехник в Тверии
- установка стиральной машины Тверия
- установка посудомоечной машины Тверия
- Tiberias plumber
- דוד שמש בטבריה
- אינסטלטור בטבריה

## Open-source maintenance

This public repository is maintained as a static website and app landing-page
hub for local service and small-business projects in Israel.
