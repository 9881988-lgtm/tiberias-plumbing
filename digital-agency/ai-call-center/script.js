import { crmPlans, renderCrmPlans } from '../crm-plans.mjs';

const translations = {
  he: {
    pageTitle: "נציג מכירות AI, CRM ומוקד עסקי | Eydelstein Digital Lab",
    pageDescription: "פתרון מכירות ושירות משולב: נציג AI מבוסס OpenAI, מוקד טלפוני, Golani CRM ומחלקת מכירות בתהליך אחד. מתחילים בפיילוט של קו אחד.",
    navOutcomes: "תוצאות", navIntegrations: "אינטגרציות", navPilot: "פיילוט", navDeck: "מצגת", headerCta: "בדיקת התאמה",
    heroKicker: "Eydelstein Digital Lab · AI, CRM ומכירות", heroTitle: "נציג מכירות AI, CRM ומוקד בתהליך אחד", heroLead: "אנו מטמיעים נציג מכירות מבוסס OpenAI, מחברים את Golani CRM ומארגנים תהליך למוקד ולמחלקת המכירות. השיחות, הלקוחות, העסקאות ומשימות ההמשך נשמרים במערכת אחת.", heroPilot: "התחילו בפיילוט של קו אחד", heroDeck: "למצגת המלאה",
    factLanguages: "שפות שירות אפשריות", factPrice: "לשעת שיחה בפועל, בתוספת המנוי במסלולי Light ו-Booking", factPilot: "קו ראשון לפיילוט מבוקר",
    signal1: "תשובות מבוססות על נתוני העסק", signal2: "פעולות רק בהרשאות שהוגדרו", signal3: "העברה אנושית כשנדרש שיקול דעת",
    salesStackKicker: "הפתרון המשולב", salesStackTitle: "מוקד, CRM ומחלקת מכירות על תהליך אחד", salesStackLead: "הלקוח מדבר עם נציג AI, ההקשר נשמר ב-Golani CRM והשלב הבא עובר לאדם הנכון במחלקת המכירות.", salesStack1Title: "נציג מכירות AI", salesStack1Text: "מבין צורך, עובד עם קטלוג מאושר, עונה על שאלות ומוביל לצעד הבא.", salesStack2Title: "Golani CRM", salesStack2Text: "שומר לקוחות, שיחות, עסקאות, סטטוסים ומשימות לחזרה.", salesStack3Title: "מחלקת מכירות", salesStack3Text: "מקבלת לידים מתועדים, ממשיכה טיפול ועוקבת אחרי תוצאה.",
    outcomesKicker: "מה משתנה בשירות", outcomesTitle: "שיחה אחת במקום שרשרת בדיקות ידניות", outcomesLead: "מתחילים מסוגי פניות חוזרים שקל להגדיר ולבדוק. המערכת אינה ממציאה מדיניות, הבטחות או תאריכים: כל תשובה תפעולית נשענת על מקור נתונים מאושר.",
    outcome1Title: "מבינה את הבקשה", outcome1Text: "כוונה, שפה והקשר לקוח נשמרים לאורך השיחה.", outcome2Title: "בודקת בזמן אמת", outcome2Text: "הזמנה, מלאי, משלוח, קטלוג, החזרה או אחריות לפי ההרשאות.", outcome3Title: "מבצעת פעולה מוגדרת", outcome3Text: "פתיחת פנייה, השלמת מידע, תיאום או העברה לזרימת עבודה קיימת.", outcome4Title: "מאשרת ומתעדת", outcome4Text: "הלקוח מקבל סיכום מאומת, והעסק מקבל לוג מלא לבקרה.",
    virtualKicker: "עובד וירטואלי עם גבולות ברורים", virtualTitle: "אוטומציה במקום שחוזר על עצמו. אדם במקום שבו יש סיכון.", virtualText: "אנו מגדירים מראש אילו תשובות ופעולות מותרות, מתי נדרשת בדיקת מקור ומתי השיחה עוברת לנציג. התוצאה נבחנת בפיילוט לפני הרחבה לקווים או לתהליכים נוספים.", virtualImageAlt: "שיחת שירות המחוברת לנתוני הזמנה",
    integrationsKicker: "ארכיטקטורת אינטגרציה", integrationsTitle: "מתחברים למערכות שכבר מנהלות את העסק", integrationsLead: "המפרט הסופי נקבע לאחר בדיקת API, הרשאות, איכות נתונים, טלפוניה ומדיניות אבטחה. לא כל מערכת מאפשרת כל פעולה.", integration1: "טלפוניה SIP או מרכזייה בענן", integration2: "CRM ופרופיל לקוח", integration3: "ERP, הזמנות ומלאי", integration4: "משלוחים, החזרות ואחריות", integration5: "יומן ביקורת והעברה לנציג",
    pricingKicker: "מודל מסחרי", priceUnit: "Light לחודש, בתוספת שיחות", pricingTitle: "תוכניות CRM, AI ומכירות", pricingText: "Light: ‏2,000 ₪ לחודש. Booking: ‏3,000 ₪ לחודש. שיחות בפועל: 18 ₪ לשעה. Business / Business Plus: ‏12,960 ₪ ל-30 יום או 13,392 ₪ ל-31 יום לקו הראשון 24/7.", pricingNote: "המחירים אינם כוללים מע״מ. כל המסלולים כוללים Light ללא מנוי Light נוסף. פירוט ותנאי החיוב זמינים בעברית וברוסית.",
    pilotKicker: "פיילוט ממוקד", pilotTitle: "קו אחד, תהליך אחד, מדדים ברורים", pilotLead: "הפיילוט נועד לבדוק דיוק, זמן טיפול, שיעור העברה לנציג ואיכות התיעוד לפני הרחבה.", pilot1Title: "ממפים פניות", pilot1Text: "בוחרים סוגי שיחה חוזרים עם מדיניות ומקור נתונים ברורים.", pilot2Title: "מחברים מערכות", pilot2Text: "מגדירים API, הרשאות, לוגים ומסלול העברה לנציג.", pilot3Title: "בודקים תרחישים", pilot3Text: "בדיקות הצלחה, חריגים, נתונים חסרים וביטחון נמוך.", pilot4Title: "מודדים ומחליטים", pilot4Text: "מסכמים תוצאות ומחליטים אם להרחיב, לשנות או לעצור.",
    faqKicker: "שאלות נפוצות על אוטומציית מוקד שירות", faqTitle: "מה חשוב לדעת לפני שמחברים עובד וירטואלי", faqLead: "כל פרויקט מתחיל בבדיקת המערכות והסיכון התפעולי. תשובות אלה מגדירות את נקודת הפתיחה, לא מחליפות אפיון טכני.", faq1Question: "מהי אוטומציה של מוקד שירות באמצעות AI?", faq1Answer: "שילוב של שיחה קולית עם גישה מבוקרת למערכות העסק, כדי לבדוק מידע, לבצע פעולות שהוגדרו מראש ולהעביר חריגים לנציג אנושי.", faq2Question: "לאילו מערכות ניתן לחבר עובד וירטואלי?", faq2Answer: "אפשר לבדוק חיבור לטלפוניה, CRM, ERP, הזמנות, מלאי, משלוחים, החזרות ואחריות. ההיתכנות תלויה ב-API, בהרשאות, בנתונים ובמדיניות האבטחה.", faq3Question: "האם עובד וירטואלי מחליף את כל נציגי השירות?", faq3Answer: "לא. מתחילים מתהליכים חוזרים ומוגדרים. חריגים, ביטחון נמוך והחלטות הדורשות שיקול דעת עוברים לנציג אנושי.", faq4Question: "איך מתחילים פיילוט למוקד AI?", faq4Answer: "בוחרים קו אחד ותהליך אחד, מגדירים מקורות והרשאות, בודקים תרחישים ומודדים דיוק, זמן טיפול, העברה לנציג ואיכות תיעוד.", faq5Question: "איך מחושב המחיר?", faq5Answer: "Light: ‏2,000 ₪ לחודש; Booking: ‏3,000 ₪ לחודש. בשניהם מתווסף 18 ₪ לשעת שיחה בפועל (30 אגורות לדקה). Business והקו הראשון ב-Business Plus מחויבים עבור חודש מלא 24/7, כולל זמן ללא שיחות: 12,960 ₪ ל-30 יום או 13,392 ₪ ל-31 יום. קווים נוספים ב-Business Plus מחויבים רק על שיחות בפועל. כל המסלולים כוללים Light ללא חיוב מנוי נוסף. המחירים אינם כוללים מע״מ.", faq6Question: "איך נשמרת שליטה על הנתונים והפעולות?", faq6Answer: "מגדירים הרשאות, מקורות אמת, פעולות מותרות, יומן ביקורת ותנאי העברה לנציג. מפרט האבטחה מותאם למדיניות ולמערכות של הלקוח.",
    deckKicker: "המצגת המסחרית", deckTitle: "CRM, תוכניות שירות ותוספת למוסכים", deckLead: "המצגת עודכנה ב-10.11.2026 עם תוספת למוסכים: 1,000 ₪ לחודש, 100 דקות כלולות, לפני מע״מ ככל שחל.", deckVersion: "CRM + AI + Auto · 10.11.2026", openRussianDeck: "פתיחת PDF ברוסית",
    contactKicker: "בדיקת התאמה ללא התחייבות", contactTitle: "שלחו תיאור של שלוש הפניות הנפוצות במוקד", contactText: "נבדוק אילו נתונים ופעולות נדרשים, האם המערכות מאפשרות אינטגרציה ומה יהיה היקף נכון לפיילוט.", contactWhatsapp: "שליחת תרחיש ב-WhatsApp", footerText: "נציג AI · Golani CRM · מוקד ומחלקת מכירות",
    whatsapp: "שלום, אני רוצה לבדוק פיילוט לעובד שירות וירטואלי. שלוש הפניות הנפוצות במוקד שלנו הן:",
    openHebrewDeck: "פתיחת PDF בעברית",
    deckFrameTitle: "מצגת CRM ותוכניות שירות"
  },
  en: {
    pageTitle: "AI Sales Agent, CRM and Contact Center | Eydelstein Digital Lab",
    pageDescription: "One sales and service workflow with an OpenAI sales agent, contact center, Golani CRM and a managed sales process. Start with a one-line pilot.",
    navOutcomes: "Outcomes", navIntegrations: "Integrations", navPilot: "Pilot", navDeck: "Deck", headerCta: "Check fit",
    heroKicker: "Eydelstein Digital Lab · AI, CRM and sales", heroTitle: "An AI sales agent, CRM and contact center in one workflow", heroLead: "We deploy an OpenAI sales agent, connect Golani CRM and structure the workflow for the contact center and sales department. Conversations, customers, deals and follow-up tasks stay in one system.", heroPilot: "Start with a one-line pilot", heroDeck: "View the full deck",
    factLanguages: "possible service languages", factPrice: "per actual call-hour, in addition to Light / Booking", factPilot: "first line for a controlled pilot",
    signal1: "Answers grounded in business data", signal2: "Actions limited to approved permissions", signal3: "Human escalation when judgment is required",
    salesStackKicker: "Integrated solution", salesStackTitle: "Contact center, CRM and sales on one workflow", salesStackLead: "The customer speaks with the AI agent, Golani CRM preserves the context, and the next step goes to the right person in the sales department.", salesStack1Title: "AI sales agent", salesStack1Text: "Clarifies the need, uses an approved catalog, answers questions and moves the lead to the next step.", salesStack2Title: "Golani CRM", salesStack2Text: "Stores customers, conversations, deals, statuses and follow-up tasks.", salesStack3Title: "Sales department", salesStack3Text: "Receives documented leads, continues the conversation and tracks the result.",
    outcomesKicker: "What changes", outcomesTitle: "One conversation instead of a chain of manual checks", outcomesLead: "We start with recurring request types that can be clearly defined and tested. The system does not invent policy, promises or dates: operational answers rely on approved data sources.",
    outcome1Title: "Understands the request", outcome1Text: "Intent, language and customer context are carried through the conversation.", outcome2Title: "Checks live data", outcome2Text: "Orders, stock, delivery, catalog, returns or warranty within the approved scope.", outcome3Title: "Performs a defined action", outcome3Text: "Open a case, complete information, coordinate or pass work into an existing workflow.", outcome4Title: "Confirms and logs", outcome4Text: "The customer gets a verified summary and the business gets a full audit trail.",
    virtualKicker: "A virtual employee with clear boundaries", virtualTitle: "Automation where work repeats. A person where risk requires judgment.", virtualText: "We define which answers and actions are allowed, when a source must be checked, and when the call moves to an agent. The result is tested in a pilot before expanding to more lines or processes.", virtualImageAlt: "Customer service conversation connected to order data",
    integrationsKicker: "Integration architecture", integrationsTitle: "Connect to the systems already running the business", integrationsLead: "The final scope follows a review of APIs, permissions, data quality, telephony and security policy. Not every system supports every action.", integration1: "SIP telephony or cloud PBX", integration2: "CRM and customer profile", integration3: "ERP, orders and inventory", integration4: "Delivery, returns and warranty", integration5: "Audit log and human handoff",
    pricingKicker: "Commercial model", priceUnit: "Light per month, plus actual calls", pricingTitle: "CRM, AI and sales plans", pricingText: "Light: ₪2,000/month. Booking: ₪3,000/month. Actual calls: ₪18/hour. Business / Business Plus: ₪12,960 for 30 days or ₪13,392 for 31 days for the first 24/7 line.", pricingNote: "Prices exclude VAT. Every plan includes Light without a second Light subscription. Full inclusions and billing terms are available in Hebrew and Russian below.",
    pilotKicker: "Focused pilot", pilotTitle: "One line, one process, clear measures", pilotLead: "The pilot measures accuracy, handling time, human handoff rate and logging quality before expansion.", pilot1Title: "Map requests", pilot1Text: "Choose recurring call types with a clear policy and source of truth.", pilot2Title: "Connect systems", pilot2Text: "Define APIs, permissions, logs and the path to a human agent.", pilot3Title: "Test scenarios", pilot3Text: "Test success cases, exceptions, missing data and low confidence.", pilot4Title: "Measure and decide", pilot4Text: "Review results and decide whether to expand, revise or stop.",
    faqKicker: "AI contact center automation FAQ", faqTitle: "What to know before connecting a virtual employee", faqLead: "Every project starts with a review of systems and operational risk. These answers define a starting point, not a substitute for technical discovery.", faq1Question: "What is AI contact center automation?", faq1Answer: "It combines a voice conversation with controlled access to business systems to check data, perform pre-approved actions, and route exceptions to a human agent.", faq2Question: "Which systems can a virtual employee connect to?", faq2Answer: "We can assess telephony, CRM, ERP, orders, inventory, delivery, returns and warranty systems. Feasibility depends on APIs, permissions, data quality and security policy.", faq3Question: "Does a virtual employee replace every service agent?", faq3Answer: "No. We start with defined recurring processes. Exceptions, low confidence and decisions requiring judgment move to a human agent.", faq4Question: "How does an AI call center pilot start?", faq4Answer: "Choose one line and one process, define sources and permissions, test scenarios, and measure accuracy, handling time, handoff rate and logging quality.", faq5Question: "How is pricing calculated?", faq5Answer: "Light is ₪2,000/month and Booking is ₪3,000/month, plus ₪18 per actual call-hour (₪0.30/minute). Business and the first Business Plus line are billed for the full 24/7 calendar month, including idle time: ₪12,960 for 30 days or ₪13,392 for 31 days. Additional Business Plus lines are billed for actual calls only. Light is included without a second subscription. Prices exclude VAT.", faq6Question: "How are data and actions controlled?", faq6Answer: "The scope defines permissions, sources of truth, allowed actions, audit logs and handoff rules. Security specifications follow the client’s systems and policy.",
    deckKicker: "Commercial presentation", deckTitle: "CRM, service plans and the auto workshop package", deckLead: "Updated 10 November 2026 in Hebrew and Russian, including the auto workshop package: ILS 1,000/month with 100 minutes, before applicable VAT.", deckVersion: "CRM + AI + Auto · 10.11.2026", openRussianDeck: "Open Russian PDF",
    contactKicker: "No-obligation fit check", contactTitle: "Send the three most common requests your center receives", contactText: "We will identify the data and actions required, whether the systems can integrate, and a sensible pilot scope.", contactWhatsapp: "Send a scenario on WhatsApp", footerText: "AI sales agent · Golani CRM · Contact center and sales",
    whatsapp: "Hello, I would like to assess a virtual service employee pilot. Our three most common service requests are:",
    openHebrewDeck: "Open Hebrew PDF",
    deckFrameTitle: "CRM and service plans presentation"
  },
  ru: {
    pageTitle: "AI-продавец, CRM и колл-центр | Eydelstein Digital Lab",
    pageDescription: "Единое решение для продаж и сервиса: AI-продавец на базе OpenAI, колл-центр, Golani CRM и отдел продаж. Начните с пилота на одной линии.",
    navOutcomes: "Результат", navIntegrations: "Интеграции", navPilot: "Пилот", navDeck: "Презентация", headerCta: "Проверить проект",
    heroKicker: "Eydelstein Digital Lab · AI, CRM и продажи", heroTitle: "AI-продавец, CRM и колл-центр в одном процессе", heroLead: "Мы внедряем AI-продавца на базе OpenAI, подключаем Golani CRM и выстраиваем работу колл-центра и отдела продаж. Разговоры, клиенты, сделки и задачи на повторный контакт остаются в одной системе.", heroPilot: "Начать с пилота на одной линии", heroDeck: "Открыть презентацию",
    factLanguages: "возможных языка обслуживания", factPrice: "за час разговоров, дополнительно к Light / Booking", factPilot: "первая линия для контролируемого пилота",
    signal1: "Ответы опираются на данные бизнеса", signal2: "Действия только в заданных правах", signal3: "Передача человеку там, где нужно решение",
    salesStackKicker: "Единое решение", salesStackTitle: "Колл-центр, CRM и отдел продаж в одном процессе", salesStackLead: "Клиент говорит с AI-продавцом, Golani CRM сохраняет контекст, а следующий шаг получает нужный сотрудник отдела продаж.", salesStack1Title: "AI-продавец", salesStack1Text: "Выявляет потребность, работает с согласованным каталогом, отвечает на вопросы и ведёт к следующему шагу.", salesStack2Title: "Golani CRM", salesStack2Text: "Хранит клиентов, разговоры, сделки, статусы и задачи на повторный контакт.", salesStack3Title: "Отдел продаж", salesStack3Text: "Получает оформленные лиды, продолжает работу и отслеживает результат.",
    outcomesKicker: "Что меняется", outcomesTitle: "Один разговор вместо цепочки ручных проверок", outcomesLead: "Мы начинаем с повторяющихся запросов, которые можно чётко описать и проверить. Система не выдумывает правила, обещания или даты: операционные ответы берутся из утверждённых источников данных.",
    outcome1Title: "Понимает запрос", outcome1Text: "Намерение, язык и контекст клиента сохраняются на протяжении разговора.", outcome2Title: "Проверяет данные", outcome2Text: "Заказ, склад, доставка, каталог, возврат или гарантия в рамках разрешений.", outcome3Title: "Выполняет заданное действие", outcome3Text: "Создаёт обращение, дополняет данные, координирует или передаёт задачу в существующий процесс.", outcome4Title: "Подтверждает и фиксирует", outcome4Text: "Клиент получает проверенный итог, а бизнес — полный журнал для контроля.",
    virtualKicker: "Виртуальный сотрудник с чёткими границами", virtualTitle: "Автоматизация там, где работа повторяется. Человек там, где есть риск.", virtualText: "Заранее определяем разрешённые ответы и действия, обязательные проверки источника и условия передачи оператору. Результат проверяется на пилоте до подключения новых линий и процессов.", virtualImageAlt: "Разговор службы поддержки, подключённый к данным заказа",
    integrationsKicker: "Архитектура интеграции", integrationsTitle: "Подключаемся к системам, которые уже управляют бизнесом", integrationsLead: "Итоговый объём определяется после проверки API, прав, качества данных, телефонии и политики безопасности. Не каждая система позволяет выполнить любое действие.", integration1: "SIP-телефония или облачная АТС", integration2: "CRM и профиль клиента", integration3: "ERP, заказы и склад", integration4: "Доставка, возвраты и гарантия", integration5: "Журнал и передача оператору",
    pricingKicker: "Коммерческая модель", priceUnit: "Light в месяц, плюс разговоры", pricingTitle: "Тарифы CRM, AI и отдела продаж", pricingText: "Light — 2 000 ₪/месяц. Booking — 3 000 ₪/месяц. Фактические разговоры — 18 ₪/час. Business / Business Plus — 12 960 ₪ за 30 дней или 13 392 ₪ за 31 день первой линии 24/7.", pricingNote: "Цены не включают НДС. Light входит во все тарифы без повторной абонентской платы. Полный состав и правила оплаты доступны на русском и иврите.",
    pilotKicker: "Сфокусированный пилот", pilotTitle: "Одна линия, один процесс, понятные показатели", pilotLead: "До расширения пилот измеряет точность, время обработки, долю передачи оператору и качество журнала.", pilot1Title: "Карта запросов", pilot1Text: "Выбираем повторяющиеся типы звонков с понятными правилами и источником данных.", pilot2Title: "Подключение систем", pilot2Text: "Определяем API, права, журнал и маршрут передачи оператору.", pilot3Title: "Проверка сценариев", pilot3Text: "Тестируем успешные случаи, исключения, отсутствие данных и низкую уверенность.", pilot4Title: "Измерение и решение", pilot4Text: "Подводим итоги и решаем: расширять, менять или остановить.",
    faqKicker: "Вопросы об автоматизации колл-центра", faqTitle: "Что важно знать до подключения виртуального сотрудника", faqLead: "Каждый проект начинается с проверки систем и операционного риска. Эти ответы задают отправную точку, но не заменяют техническое обследование.", faq1Question: "Что такое автоматизация колл-центра с AI?", faq1Answer: "Это голосовой диалог с контролируемым доступом к системам бизнеса: виртуальный сотрудник проверяет данные, выполняет разрешённые действия и передаёт исключения оператору.", faq2Question: "К каким системам подключается виртуальный сотрудник?", faq2Answer: "Можно оценить телефонию, CRM, ERP, заказы, склад, доставку, возвраты и гарантию. Возможности зависят от API, прав, качества данных и политики безопасности.", faq3Question: "Виртуальный сотрудник заменяет всех операторов?", faq3Answer: "Нет. Сначала автоматизируются чётко описанные повторяющиеся процессы. Исключения, низкая уверенность и решения с риском передаются человеку.", faq4Question: "Как начать пилот AI-колл-центра?", faq4Answer: "Выбираются одна линия и один процесс, определяются источники и права, тестируются сценарии и измеряются точность, время, передача оператору и журнал.", faq5Question: "Как рассчитывается цена?", faq5Answer: "Light — 2 000 ₪/месяц; Booking — 3 000 ₪/месяц. Дополнительно в обоих тарифах оплачиваются только фактические разговоры: 18 ₪/час (0,30 ₪/мин). Business и первая линия Business Plus оплачиваются за полный календарный месяц 24/7, включая время без звонков: 12 960 ₪ за 30 дней или 13 392 ₪ за 31 день. Дополнительные линии Business Plus — только по времени разговоров. Light входит без повторной абонентской платы. Цены не включают НДС.", faq6Question: "Как контролируются данные и действия?", faq6Answer: "Определяются права, источники истины, разрешённые действия, журнал аудита и условия передачи оператору. Требования безопасности согласуются с системами клиента.",
    deckKicker: "Коммерческая презентация", deckTitle: "CRM, тарифы и пакет для автосервиса", deckLead: "Обновлено 10.11.2026 на русском и иврите. Добавлен пакет для автосервиса: 1 000 ₪/месяц, 100 минут включены, до применимого НДС.", deckVersion: "CRM + AI + Auto · 10.11.2026", openRussianDeck: "Открыть PDF на русском",
    contactKicker: "Проверка применимости без обязательств", contactTitle: "Пришлите три самых частых запроса вашего колл-центра", contactText: "Мы определим нужные данные и действия, возможность интеграции ваших систем и разумный объём пилота.", contactWhatsapp: "Отправить сценарий в WhatsApp", footerText: "AI-продавец · Golani CRM · Колл-центр и отдел продаж",
    whatsapp: "Здравствуйте! Хочу оценить пилот виртуального сотрудника. Три самых частых запроса в нашем колл-центре:",
    openHebrewDeck: "Открыть PDF на иврите",
    deckFrameTitle: "Презентация CRM и тарифов"
  },
  fr: {
    pageTitle: "Agent commercial IA, CRM et centre d’appels | Eydelstein Digital Lab",
    pageDescription: "Une solution de vente et de service avec un agent commercial OpenAI, le centre d’appels, Golani CRM et le processus de l’équipe commerciale.",
    navOutcomes: "Résultats", navIntegrations: "Intégrations", navPilot: "Pilote", navDeck: "Présentation", headerCta: "Évaluer le projet",
    heroKicker: "Eydelstein Digital Lab · IA, CRM et ventes", heroTitle: "Agent commercial IA, CRM et centre d’appels dans un même processus", heroLead: "Nous déployons un agent commercial OpenAI, connectons Golani CRM et structurons le travail du centre d’appels et de l’équipe commerciale. Les conversations, clients, affaires et suivis restent dans un même système.", heroPilot: "Commencer avec une ligne pilote", heroDeck: "Voir la présentation",
    factLanguages: "langues de service possibles", factPrice: "par heure de conversation, en plus de Light / Booking", factPilot: "première ligne pour un pilote contrôlé",
    signal1: "Réponses fondées sur les données métier", signal2: "Actions limitées aux autorisations", signal3: "Transfert humain lorsqu’un jugement est requis",
    salesStackKicker: "Solution intégrée", salesStackTitle: "Centre d’appels, CRM et ventes dans un même processus", salesStackLead: "Le client parle à l’agent IA, Golani CRM conserve le contexte et la prochaine étape est attribuée à la bonne personne de l’équipe commerciale.", salesStack1Title: "Agent commercial IA", salesStack1Text: "Clarifie le besoin, utilise le catalogue approuvé, répond aux questions et prépare l’étape suivante.", salesStack2Title: "Golani CRM", salesStack2Text: "Conserve les clients, conversations, affaires, statuts et tâches de suivi.", salesStack3Title: "Équipe commerciale", salesStack3Text: "Reçoit des prospects documentés, poursuit l’échange et suit le résultat.",
    outcomesKicker: "Ce qui change", outcomesTitle: "Une conversation au lieu d’une chaîne de vérifications manuelles", outcomesLead: "Nous commençons par des demandes récurrentes faciles à définir et à tester. Le système n’invente ni politique, ni promesse, ni date : chaque réponse opérationnelle repose sur une source approuvée.",
    outcome1Title: "Comprend la demande", outcome1Text: "L’intention, la langue et le contexte client sont conservés pendant l’échange.", outcome2Title: "Vérifie les données", outcome2Text: "Commande, stock, livraison, catalogue, retour ou garantie selon les droits accordés.", outcome3Title: "Exécute une action définie", outcome3Text: "Ouvre un dossier, complète les données, coordonne ou transmet au flux existant.", outcome4Title: "Confirme et journalise", outcome4Text: "Le client reçoit un résumé vérifié et l’entreprise une piste d’audit complète.",
    virtualKicker: "Un employé virtuel aux limites claires", virtualTitle: "L’automatisation pour le répétitif. L’humain lorsque le risque exige du jugement.", virtualText: "Nous définissons les réponses et actions autorisées, les vérifications obligatoires et les conditions de transfert. Le résultat est testé en pilote avant toute extension.", virtualImageAlt: "Conversation de service connectée aux données de commande",
    integrationsKicker: "Architecture d’intégration", integrationsTitle: "Connexion aux systèmes qui pilotent déjà l’entreprise", integrationsLead: "Le périmètre final suit l’analyse des API, droits, données, téléphonie et règles de sécurité. Chaque système impose ses limites.", integration1: "Téléphonie SIP ou PBX cloud", integration2: "CRM et profil client", integration3: "ERP, commandes et stocks", integration4: "Livraisons, retours et garantie", integration5: "Journal et transfert humain",
    pricingKicker: "Modèle commercial", priceUnit: "Light par mois, plus les conversations", pricingTitle: "Offres CRM, IA et ventes", pricingText: "Light : 2 000 ₪/mois. Booking : 3 000 ₪/mois. Conversations réelles : 18 ₪/heure. Business / Business Plus : 12 960 ₪ pour 30 jours ou 13 392 ₪ pour 31 jours pour la première ligne 24 h/24.", pricingNote: "Les prix sont hors TVA. Chaque offre inclut Light sans second abonnement Light. Les prestations et modalités complètes sont disponibles en hébreu et en russe ci-dessous.",
    pilotKicker: "Pilote ciblé", pilotTitle: "Une ligne, un processus, des mesures claires", pilotLead: "Le pilote mesure la précision, le temps de traitement, le taux de transfert et la qualité du journal avant extension.", pilot1Title: "Cartographier", pilot1Text: "Choisir des appels récurrents avec règles et source de vérité claires.", pilot2Title: "Connecter", pilot2Text: "Définir les API, droits, journaux et le transfert vers un agent.", pilot3Title: "Tester", pilot3Text: "Tester succès, exceptions, données absentes et faible confiance.", pilot4Title: "Mesurer et décider", pilot4Text: "Analyser les résultats et décider d’étendre, modifier ou arrêter.",
    faqKicker: "FAQ sur l’automatisation du centre de service", faqTitle: "À savoir avant de connecter un employé virtuel", faqLead: "Chaque projet commence par l’analyse des systèmes et du risque opérationnel. Ces réponses donnent un point de départ sans remplacer l’étude technique.", faq1Question: "Qu’est-ce que l’automatisation d’un centre d’appels par IA ?", faq1Answer: "Elle combine la conversation vocale et un accès contrôlé aux systèmes métier pour vérifier les données, exécuter des actions autorisées et transférer les exceptions à un agent.", faq2Question: "Quels systèmes peuvent être connectés ?", faq2Answer: "Nous pouvons évaluer la téléphonie, le CRM, l’ERP, les commandes, les stocks, les livraisons, les retours et la garantie selon les API, droits, données et règles de sécurité.", faq3Question: "Un employé virtuel remplace-t-il tous les agents ?", faq3Answer: "Non. Nous commençons par des processus récurrents et définis. Les exceptions, la faible confiance et les décisions à risque sont transférées à un humain.", faq4Question: "Comment commencer un pilote ?", faq4Answer: "Choisir une ligne et un processus, définir les sources et droits, tester les scénarios puis mesurer la précision, le temps, les transferts et la qualité du journal.", faq5Question: "Comment le prix est-il calculé ?", faq5Answer: "Light : 2 000 ₪/mois ; Booking : 3 000 ₪/mois, plus 18 ₪ par heure de conversation réelle (0,30 ₪/min). Business et la première ligne Business Plus sont facturés pour le mois calendaire complet 24 h/24, périodes sans appels comprises : 12 960 ₪ pour 30 jours ou 13 392 ₪ pour 31 jours. Les lignes supplémentaires Business Plus sont facturées sur les conversations réelles uniquement. Light est inclus sans second abonnement. Prix hors TVA.", faq6Question: "Comment contrôler les données et les actions ?", faq6Answer: "Le périmètre définit les droits, sources de vérité, actions permises, journaux et règles de transfert. La sécurité suit les systèmes et la politique du client.",
    deckKicker: "Présentation commerciale", deckTitle: "CRM, offres et formule pour les garages", deckLead: "Mise à jour du 10 novembre 2026 en hébreu et en russe avec la formule garage : 1 000 ILS/mois, 100 minutes incluses, hors TVA applicable.", deckVersion: "CRM + AI + Auto · 10.11.2026", openRussianDeck: "Ouvrir le PDF russe",
    contactKicker: "Évaluation sans engagement", contactTitle: "Envoyez les trois demandes les plus fréquentes de votre centre", contactText: "Nous identifierons les données et actions nécessaires, la possibilité d’intégration et un périmètre pilote raisonnable.", contactWhatsapp: "Envoyer un scénario sur WhatsApp", footerText: "Agent commercial IA · Golani CRM · Centre d’appels et ventes",
    whatsapp: "Bonjour, je souhaite évaluer un pilote d’employé virtuel. Nos trois demandes les plus fréquentes sont :",
    openHebrewDeck: "Ouvrir le PDF hébreu",
    deckFrameTitle: "Présentation CRM et offres de service"
  }
};

const languageMeta = {
  he: { dir: "rtl", locale: "he_IL" },
  en: { dir: "ltr", locale: "en_US" },
  ru: { dir: "ltr", locale: "ru_RU" },
  fr: { dir: "ltr", locale: "fr_FR" }
};

const supportedLanguages = Object.keys(translations);
let currentLanguage = "he";
let deckLanguage = "he";

function applyLanguage(language, updateUrl = true) {
  if (!supportedLanguages.includes(language)) return;
  currentLanguage = language;
  const copy = translations[language];
  const meta = languageMeta[language];

  document.documentElement.lang = language;
  document.documentElement.dir = meta.dir;
  document.title = copy.pageTitle;
  document.querySelector("meta[name='description']")?.setAttribute("content", copy.pageDescription);
  document.querySelector("meta[property='og:locale']")?.setAttribute("content", meta.locale);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value) element.setAttribute("alt", value);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const plansHost = document.querySelector("#crm-plans-host");
  if (plansHost) plansHost.innerHTML = renderCrmPlans(language);
  const fallback = document.querySelector("[data-pricing-fallback]");
  if (fallback) fallback.hidden = Boolean(crmPlans[language]);
  if (language === "he" || language === "ru") deckLanguage = language;
  renderDeck();

  const whatsapp = document.querySelector("[data-whatsapp]");
  if (whatsapp) whatsapp.href = `https://wa.me/972533613100?text=${encodeURIComponent(copy.whatsapp)}`;

  try {
    window.localStorage.setItem("structor-call-center-language", language);
  } catch {}

  if (updateUrl) {
    const url = new URL(window.location.href);
    if (language === "he") url.searchParams.delete("lang");
    else url.searchParams.set("lang", language);
    window.history.replaceState({}, "", url);
  }
}

function renderDeck() {
  const frame = document.querySelector("[data-deck-frame]");
  const source = `deck/Edelstein_Digital_CRM_${deckLanguage.toUpperCase()}_2026-11-10.pdf#view=FitH`;
  if (frame && frame.getAttribute("src") !== source) frame.src = source;
  if (frame) frame.title = translations[currentLanguage].deckFrameTitle;
  document.querySelectorAll("[data-deck-lang]").forEach(button => {
    const active = button.dataset.deckLang === deckLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.querySelectorAll("[data-deck-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    deckLanguage = button.dataset.deckLang;
    document.querySelectorAll("[data-deck-lang]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderDeck();
  });
});

document.querySelector("[data-whatsapp]")?.addEventListener("click", () => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", { service: "ai_contact_center" });
  }
});

const params = new URLSearchParams(window.location.search);
let initialLanguage = params.get("lang");
if (!supportedLanguages.includes(initialLanguage)) {
  try {
    initialLanguage = window.localStorage.getItem("structor-call-center-language");
  } catch {
    initialLanguage = null;
  }
}
applyLanguage(supportedLanguages.includes(initialLanguage) ? initialLanguage : "he", false);
renderDeck();
