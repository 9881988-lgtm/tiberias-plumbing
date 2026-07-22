# SEO лендинг: мойка внутреннего блока кондиционера в Хадере и Кейсарии

Полноценный SEO-лендинг с backend-формой для услуги `מים ושמש - ניקוי מזגנים`: мойка внутреннего блока кондиционера, чистка фильтров и дезинфекция в Хадере, Кейсарии и близких городах. Основной язык — иврит, русский включается кнопкой.

## Что сделано

- SEO meta-теги, Open Graph, Twitter card, canonical и sitemap.
- JSON-LD schema.org для `HVACBusiness`, `WebSite`, `WebPage` и `FAQPage`.
- Контакты взяты из проекта по сантехнике: `+972-53-361-31-00`.
- График: воскресенье-четверг `08:00-20:00`, пятница `08:00-12:00`.
- Цены: базовая мойка без разборки `250 ₪`, глубокая мойка с дезинфекцией `от 450 ₪`, второй кондиционер в тот же визит `от 200 ₪`.
- Клиент сам выбирает дату и 3-часовой слот на лендинге.
- После подключения backend список свободных слотов подтягивается из Google Calendar.
- Форма заявки собирает имя, телефон, адрес, район, количество блоков, выбранный слот, канал связи и комментарий.
- Google Apps Script backend подготовлен в `google-apps-script/`: выдает слоты, создает событие календаря, отправляет email и может писать заявку в Google Sheet.

## Файлы

- `index.html` — лендинг.
- `styles.css` — адаптивный дизайн.
- `script.js` — переключение языка, выбор свободного слота, WhatsApp/email fallback и отправка на Google Apps Script.
- `assets/ac-cleaning-tiberias-hero.jpg` — hero-изображение.
- `assets/ac-cleaning-tiberias-og.jpg` — Open Graph изображение.
- `google-apps-script/Code.gs` — backend для свободных слотов, email + Google Calendar.
- `robots.txt` и `sitemap.xml` — индексация.

## Публикация и автоматизация

1. Опубликуйте статический сайт на GitHub Pages, Netlify или Cloudflare Pages.
2. Создайте Google Apps Script Web App по инструкции в `google-apps-script/README.md`.
3. В `script.js` заполните:
   - `SETTINGS.googleScriptUrl`;
   - `SETTINGS.ownerEmail`, если нужен fallback через `mailto`.
4. Если URL сайта будет отличаться от `https://9881988-lgtm.github.io/tiberias-plumbing/ac-cleaning/`, замените его в `index.html`, `sitemap.xml` и `robots.txt`.

До подключения `SETTINGS.googleScriptUrl` форма показывает локальные слоты по графику воскресенье-четверг `08:00-20:00`, пятница `08:00-12:00`. После подключения Apps Script эти слоты заменяются реальной доступностью из Google Calendar.

## Важное про WhatsApp

Бесплатный Google Apps Script не отправляет WhatsApp-сообщения сам. Сейчас лендинг открывает готовое сообщение WhatsApp с данными заявки и подтверждением цены. Для автоматической отправки от бизнеса нужен WhatsApp Business API, Twilio, Make/Zapier или другой провайдер.

## SEO-запросы

- ניקוי מזגן בחדרה
- שטיפת מזגן בחדרה
- חיטוי מזגן בחדרה
- ניקוי יחידה פנימית מזגן
- мойка кондиционера Хадера
- чистка внутреннего блока кондиционера Хадера
- AC cleaning Hadera
