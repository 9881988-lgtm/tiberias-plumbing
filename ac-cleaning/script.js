const SETTINGS = {
  googleScriptUrl: "",
  ownerEmail: "tib778877@gmail.com",
  whatsappNumber: "972533613100",
  phoneDisplay: "053 361 3100",
  priceLabel: {
    he: "בסיסי ללא פירוק 250 ₪ / עמוק + חיטוי מ-450 ₪ / יחידה שנייה מ-200 ₪",
    ru: "базовая мойка 250 ₪ / глубокая + дезинфекция от 450 ₪ / второй блок от 200 ₪"
  },
  bookingHours: 3,
  slotDaysAhead: 21,
  workingSchedule: {
    0: { opens: "08:00", closes: "20:00" },
    1: { opens: "08:00", closes: "20:00" },
    2: { opens: "08:00", closes: "20:00" },
    3: { opens: "08:00", closes: "20:00" },
    4: { opens: "08:00", closes: "20:00" },
    5: { opens: "08:00", closes: "12:00" }
  },
  serviceName: {
    he: "ניקוי וחיטוי יחידה פנימית של מזגן",
    ru: "Мойка и дезинфекция внутреннего блока кондиционера"
  }
};

const translations = {
  he: {
    title: "ניקוי מזגנים בחדרה וקיסריה | שטיפת יחידה פנימית וחיטוי | 053 361 3100",
    description: "ניקוי מזגנים בחדרה, קיסריה, אור עקיבא, בנימינה והסביבה: ניקוי בסיסי מ-250 ₪, ניקוי עמוק + חיטוי מ-450 ₪, יחידה שנייה מ-200 ₪. שלחו תמונה ב-WhatsApp.",
    brandTitle: "מים ושמש",
    brandSubtitle: "ניקוי מזגנים",
    navService: "השירות",
    navBooking: "הזמנה",
    navFaq: "שאלות",
    languageButton: "Русский",
    heroEyebrow: "חדרה · קיסריה · אור עקיבא · בנימינה · WhatsApp מהיר",
    heroTitle: "ניקוי מזגנים בחדרה, קיסריה והסביבה",
    heroLead: "יש ריח רע מהמזגן, עובש או קירור חלש? ניקוי בסיסי ללא פירוק מ-250 ₪, ניקוי עמוק + חיטוי מ-450 ₪, ויחידה שנייה באותו ביקור מ-200 ₪. שלחו תמונה ב-WhatsApp ונבדוק מחיר וזמינות היום.",
    todayOfferTitle: "ניקוי בסיסי מ-250 ₪ | ניקוי עמוק + חיטוי מ-450 ₪",
    todayOfferText: "אפשר לשלוח תמונה ולקבל הערכת מחיר לפני הגעה.",
    bookButton: "בדיקת זמינות עכשיו",
    bookButtonShort: "זמינות עכשיו",
    priceNote: "בסיסי מ-250 ₪",
    timeNote: "חלון עבודה 3 שעות",
    areaNote: "חדרה וקיסריה +15 ק״מ",
    trustCleanTitle: "שטיפה פנימית",
    trustCleanText: "מאייד, פילטרים וניקוז",
    trustDisinfectionTitle: "מחיר ברור מראש",
    trustDisinfectionText: "תמונה ב-WhatsApp לפני הגעה",
    trustHoursTitle: "א-ה 08:00-20:00, ו 08:00-12:00",
    trustHoursText: "לפי זמינות ביומן",
    serviceEyebrow: "מה מקבלים",
    serviceTitle: "ניקוי שמטפל בלכלוך בתוך היחידה, לא רק בפילטר",
    serviceLead: "הצטברות אבק ולחות בתוך המזגן יכולה לגרום לריח לא נעים, ירידה בעוצמת הקירור וטפטוף. ניקוי מסודר עוזר להחזיר זרימת אוויר נקייה יותר.",
    featureUnitTitle: "פתיחת היחידה",
    featureUnitText: "פתיחה זהירה של הכיסוי, בדיקת מצב הפילטרים והכנה לשטיפה עם הגנה על הקיר והסביבה.",
    featureWashTitle: "שטיפה עמוקה",
    featureWashText: "ניקוי אזור המאייד, מסילות האוויר והחלקים הנגישים שבהם מצטברים אבק, לחות וריחות.",
    featureDisinfectTitle: "חיטוי וסיום נקי",
    featureDisinfectText: "חיטוי לאחר השטיפה, ניקוי אזור העבודה והפעלה קצרה לבדיקת זרימת אוויר תקינה.",
    pricingEyebrow: "מחירון ברור",
    pricingTitle: "מחירים שמרגישים מקצועיים, בלי למשוך רק מחפשי הכי זול",
    pricingLead: "המחיר מאושר מראש לפי תמונה, מספר יחידות, גישה ומצב המזגן. אם יש עובש קשה, עבודה אחרי שיפוץ או גישה מורכבת, נבדוק לפני הגעה.",
    priceBasicTitle: "ניקוי בסיסי ללא פירוק — 250 ₪",
    priceBasicText: "מתאים לריח קל, אבק ותחזוקה שוטפת של מזגן עילי.",
    priceDeepTitle: "ניקוי עמוק + חיטוי — מ-450 ₪",
    priceDeepText: "מתאים לעובש, ריח חזק, מזגן מלוכלך או קירור חלש.",
    priceSecondTitle: "יחידה שנייה באותו ביקור — מ-200 ₪",
    priceSecondText: "מחיר מיוחד לכמה מזגנים באותה כתובת.",
    priceComplexTitle: "עובש קשה / אחרי שיפוץ — לפי תמונה",
    priceComplexText: "שלחו תמונה ב-WhatsApp ונבדוק מחיר וזמינות לפני שמגיעים.",
    proofEyebrow: "לפני / אחרי",
    proofTitle: "מה בדרך כלל משתנה אחרי ניקוי נכון",
    proofLead: "המטרה היא להפחית ריחות, אבק ועובש בחלק הפנימי, לשפר זרימת אוויר ולהשאיר את אזור העבודה נקי.",
    proofBeforeTitle: "לפני: ריח, אבק ועובש",
    proofBeforeText: "סימנים נפוצים: ריח רע, זרימת אוויר חלשה, אבק שחור או עובש ליד פתחי האוויר.",
    proofWaterTitle: "בזמן ניקוי: לכלוך יוצא החוצה",
    proofWaterText: "בשטיפה עמוקה רואים לעיתים מים כהים ולכלוך שיוצאים מתוך היחידה.",
    proofAfterTitle: "אחרי: פעולה נקייה יותר",
    proofAfterText: "בודקים זרימת אוויר, מחזירים את היחידה נקייה ומשאירים את הקיר והרצפה מוגנים.",
    whyEyebrow: "למה לבחור בנו?",
    whyTitle: "שירות מקומי בחדרה וקיסריה עם מענה מהיר ב-WhatsApp",
    why1: "מענה מהיר ב-WhatsApp",
    why2: "מחיר ברור לפני העבודה",
    why3: "אפשר לשלוח תמונה לפני הגעה",
    why4: "הגנה על הקיר והרצפה בזמן השטיפה",
    why5: "עבודה נקייה ומסודרת",
    why6: "מתאים לדירות, קליניקות, צימרים ועסקים קטנים",
    leadEyebrow: "תיאום מהיר",
    leadTitle: "רוצים ניקוי היום? השאירו טלפון וכתובת, ונבדוק זמינות מיידית",
    leadText: "ניקוי בסיסי ללא פירוק: 250 ₪. ניקוי עמוק + חיטוי: מ-450 ₪. יחידה שנייה באותו ביקור: מ-200 ₪. לאחר שליחת הפרטים נפתחת הודעת WhatsApp מוכנה כדי שנוכל לענות מהר.",
    leadHighlight1: "חלון עבודה 3 שעות",
    leadHighlight2: "WhatsApp או email",
    leadHighlight3: "א-ה 08:00-20:00, ו 08:00-12:00",
    fieldName: "שם",
    fieldPhone: "טלפון",
    fieldAddress: "כתובת מלאה",
    fieldArea: "אזור",
    fieldUnits: "מספר יחידות",
    fieldBookingDate: "בחרו תאריך",
    fieldBookingTime: "בחרו שעה",
    fieldEmail: "email לאישור מחיר",
    fieldContact: "איך נוח לקבל תשובה?",
    contactEither: "מה שיותר מהיר",
    fieldNotes: "הערות",
    notesPlaceholder: "קומה, גישה למזגן, ריח, טפטוף או תמונה ב-WhatsApp",
    slotLoading: "טוען שעות פנויות...",
    slotUnavailable: "אין שעות פנויות בתאריך הזה",
    slotHelper: "כל מועד שומר 3 שעות עבודה. לאחר שליחת הטופס המועד נבדק ונשמר ביומן.",
    slotLive: "השעות מוצגות לפי היומן.",
    slotFallback: "השעות זמינות לתצוגה. לאחר חיבור השרת הן ייבדקו מול היומן.",
    slotRequired: "בחרו תאריך ושעה פנויים.",
    submitButton: "שליחת בקשה ב-WhatsApp",
    submitWorking: "שולח...",
    successWithGoogle: "הבקשה נשלחה והמועד נשלח לשמירה ביומן. המחיר יאושר לפי סוג הניקוי, מספר היחידות והגישה למזגן.",
    successFallback: "הפרטים מוכנים לשליחה. המחיר יאושר לפי סוג הניקוי: בסיסי 250 ₪, עמוק + חיטוי מ-450 ₪ או יחידה שנייה מ-200 ₪.",
    errorMessage: "לא הצלחנו לשלוח לשרת Google. אפשר לשלוח את הפרטים ב-WhatsApp.",
    emailRequired: "בחרת email, לכן צריך למלא כתובת email.",
    areaCaesarea: "קיסריה",
    areaOrAkiva: "אור עקיבא",
    areaHadera: "חדרה",
    areaBinyamina: "בנימינה-גבעת עדה",
    areaZichron: "זכרון יעקב",
    areaPardesHanna: "פרדס חנה-כרכור",
    areaJisrFureidis: "ג׳סר א-זרקא / פוריידיס",
    areaSdotBeitHanania: "שדות ים / בית חנניה",
    areaHarish: "חריש",
    areaOther: "יישוב קרוב אחר",
    units1: "יחידה אחת",
    units2: "2 יחידות",
    units3: "3+ יחידות",
    areaEyebrow: "אזור השירות",
    areaTitle: "ניקוי מזגנים בחדרה, קיסריה וביישובים סביב עד 15 ק״מ",
    areaText: "העבודה מתאימה למזגנים עיליים בדירות, יחידות אירוח, קליניקות ועסקים קטנים. אזור השירות: חדרה, קיסריה, אור עקיבא, בנימינה-גבעת עדה, זכרון יעקב, פרדס חנה-כרכור, חריש, ג׳סר א-זרקא, פוריידיס, בית חנניה, מעגן מיכאל ושדות ים.",
    contactTitle: "פרטי קשר",
    copyButton: "העתקת המספר",
    copiedButton: "המספר הועתק",
    faqEyebrow: "שאלות",
    faqTitle: "מה כדאי לדעת לפני התיאום",
    faq1Question: "מה כולל ניקוי יחידה פנימית?",
    faq1Answer: "פתיחת היחידה, ניקוי פילטרים, שטיפה של החלק הפנימי הנגיש, חיטוי וסיום נקי של אזור העבודה.",
    faq2Question: "כמה זמן מוקצה להזמנה?",
    faq2Answer: "לכל בקשה מוקצות 3 שעות עבודה ביומן, כולל זמן עבודה מסודר ומרווח נסיעה באזור.",
    faq3Question: "האם המחיר כולל חיטוי?",
    faq3Answer: "ניקוי בסיסי ללא פירוק מתחיל מ-250 ₪. ניקוי עמוק + חיטוי מתחיל מ-450 ₪. יחידה שנייה באותו ביקור מתחילה מ-200 ₪. המחיר הסופי מאושר לפי תמונה, מספר יחידות, גישה ומיקום.",
    faq4Question: "אפשר לשלוח תמונה ב-WhatsApp?",
    faq4Answer: "כן. אחרי שליחת הטופס נפתחת הודעת WhatsApp מוכנה עם הפרטים, ואפשר לצרף אליה תמונה של המזגן.",
    footerTitle: "מים ושמש - ניקוי מזגנים",
    footerText: "ניקוי יחידה פנימית, שטיפה וחיטוי באזור חדרה, קיסריה והיישובים הקרובים."
  },
  ru: {
    title: "Мойка кондиционеров в Хадере и Кейсарии | Чистка внутреннего блока | 053 361 3100",
    description: "Мойка кондиционеров в Хадере, Кейсарии, Ор-Акиве, Биньямине и рядом: базовая чистка 250 ₪, глубокая + дезинфекция от 450 ₪, второй блок от 200 ₪. Фото в WhatsApp.",
    brandTitle: "Маим ве-Шемеш",
    brandSubtitle: "Мойка кондиционеров",
    navService: "Услуга",
    navBooking: "Заявка",
    navFaq: "Вопросы",
    languageButton: "עברית",
    heroEyebrow: "Хадера · Кейсария · Ор-Акива · Биньямина · быстрый WhatsApp",
    heroTitle: "Мойка кондиционеров в Хадере, Кейсарии и рядом",
    heroLead: "Есть запах из кондиционера, плесень или слабое охлаждение? Базовая чистка без разборки от 250 ₪, глубокая + дезинфекция от 450 ₪, второй блок в тот же визит от 200 ₪. Пришлите фото в WhatsApp, проверим цену и доступность сегодня.",
    todayOfferTitle: "Базовая чистка от 250 ₪ | глубокая + дезинфекция от 450 ₪",
    todayOfferText: "Можно отправить фото и получить предварительную оценку до выезда.",
    bookButton: "Проверить время сейчас",
    bookButtonShort: "Проверить время",
    priceNote: "базовая от 250 ₪",
    timeNote: "3 часа рабочего времени",
    areaNote: "Хадера и Кейсария +15 км",
    trustCleanTitle: "Внутренняя мойка",
    trustCleanText: "испаритель, фильтры и дренаж",
    trustDisinfectionTitle: "Понятная цена заранее",
    trustDisinfectionText: "фото в WhatsApp до выезда",
    trustHoursTitle: "Вс-Чт 08:00-20:00, Пт 08:00-12:00",
    trustHoursText: "по свободным слотам календаря",
    serviceEyebrow: "Что входит",
    serviceTitle: "Чистка внутри блока, а не только фильтра",
    serviceLead: "Пыль и влажность внутри кондиционера могут давать запах, слабое охлаждение и протечки. Аккуратная мойка помогает вернуть более чистый поток воздуха.",
    featureUnitTitle: "Открытие блока",
    featureUnitText: "Аккуратное открытие крышки, проверка фильтров и подготовка к промывке с защитой стены и зоны работы.",
    featureWashTitle: "Глубокая промывка",
    featureWashText: "Очистка зоны испарителя, воздушных каналов и доступных частей, где скапливаются пыль, влага и запахи.",
    featureDisinfectTitle: "Дезинфекция и чистый финал",
    featureDisinfectText: "Дезинфекция после мойки, уборка зоны работы и короткий запуск для проверки потока воздуха.",
    pricingEyebrow: "Прозрачные цены",
    pricingTitle: "Профессиональная цена без ощущения слишком дешевой услуги",
    pricingLead: "Цена подтверждается заранее по фото, количеству блоков, доступу и состоянию кондиционера. Сильная плесень, работа после ремонта или сложный доступ оцениваются до выезда.",
    priceBasicTitle: "Базовая чистка без разборки — 250 ₪",
    priceBasicText: "Подходит для легкого запаха, пыли и регулярного обслуживания настенного кондиционера.",
    priceDeepTitle: "Глубокая + дезинфекция — от 450 ₪",
    priceDeepText: "Подходит при плесени, сильном запахе, грязном блоке или слабом охлаждении.",
    priceSecondTitle: "Второй блок в тот же визит — от 200 ₪",
    priceSecondText: "Специальная цена для нескольких кондиционеров по одному адресу.",
    priceComplexTitle: "Сильная плесень / после ремонта — по фото",
    priceComplexText: "Пришлите фото в WhatsApp, проверим цену и доступность до выезда.",
    proofEyebrow: "До / после",
    proofTitle: "Что обычно меняется после правильной чистки",
    proofLead: "Цель — уменьшить запахи, пыль и плесень внутри блока, улучшить поток воздуха и оставить рабочее место чистым.",
    proofBeforeTitle: "До: запах, пыль и плесень",
    proofBeforeText: "Частые признаки: неприятный запах, слабый поток воздуха, черная пыль или плесень у выхода воздуха.",
    proofWaterTitle: "Во время мойки: грязь выходит наружу",
    proofWaterText: "При глубокой промывке часто видна темная вода и грязь из внутреннего блока.",
    proofAfterTitle: "После: более чистая работа",
    proofAfterText: "Проверяем поток воздуха, возвращаем блок чистым и защищаем стену и пол.",
    whyEyebrow: "Почему мы?",
    whyTitle: "Местный сервис в Хадере и Кейсарии с быстрым ответом в WhatsApp",
    why1: "Быстрый ответ в WhatsApp",
    why2: "Понятная цена до работы",
    why3: "Можно отправить фото до выезда",
    why4: "Защита стены и пола во время мойки",
    why5: "Аккуратная и чистая работа",
    why6: "Для квартир, клиник, циммеров и небольших бизнесов",
    leadEyebrow: "Быстрая заявка",
    leadTitle: "Хотите чистку сегодня? Оставьте телефон и адрес, проверим доступность сразу",
    leadText: "Базовая чистка без разборки: 250 ₪. Глубокая + дезинфекция: от 450 ₪. Второй блок в тот же визит: от 200 ₪. После отправки откроется готовое сообщение WhatsApp, чтобы мастер мог ответить быстро.",
    leadHighlight1: "3-часовой слот",
    leadHighlight2: "WhatsApp или email",
    leadHighlight3: "Вс-Чт 08:00-20:00, Пт 08:00-12:00",
    fieldName: "Имя",
    fieldPhone: "Телефон",
    fieldAddress: "Полный адрес",
    fieldArea: "Район",
    fieldUnits: "Количество блоков",
    fieldBookingDate: "Выберите дату",
    fieldBookingTime: "Выберите время",
    fieldEmail: "email для подтверждения цены",
    fieldContact: "Как удобнее получить ответ?",
    contactEither: "как быстрее",
    fieldNotes: "Комментарий",
    notesPlaceholder: "этаж, доступ к кондиционеру, запах, протечка или фото в WhatsApp",
    slotLoading: "Загружаю свободное время...",
    slotUnavailable: "На эту дату свободных слотов нет",
    slotHelper: "Каждый слот резервирует 3 часа работы. После отправки форма проверит время и передаст бронь в календарь.",
    slotLive: "Время показано по календарю.",
    slotFallback: "Слоты показаны для предпросмотра. После подключения backend они будут проверяться по календарю.",
    slotRequired: "Выберите свободную дату и время.",
    submitButton: "Отправить в WhatsApp",
    submitWorking: "Отправляю...",
    successWithGoogle: "Заявка отправлена, выбранный слот передан на бронирование в календарь. Цена подтверждается по типу чистки, количеству блоков и доступу.",
    successFallback: "Данные готовы к отправке. Цена подтверждается по типу чистки: базовая 250 ₪, глубокая + дезинфекция от 450 ₪ или второй блок от 200 ₪.",
    errorMessage: "Не удалось отправить на сервер Google. Можно отправить данные в WhatsApp.",
    emailRequired: "Вы выбрали email, поэтому нужно заполнить адрес email.",
    areaCaesarea: "Кейсария",
    areaOrAkiva: "Ор-Акива",
    areaHadera: "Хадера",
    areaBinyamina: "Биньямина-Гиват-Ада",
    areaZichron: "Зихрон-Яаков",
    areaPardesHanna: "Пардес-Хана-Каркур",
    areaJisrFureidis: "Джиср-аз-Зарка / Фурейдис",
    areaSdotBeitHanania: "Сдот-Ям / Бейт-Ханания",
    areaHarish: "Хариш",
    areaOther: "другой близкий поселок",
    units1: "1 блок",
    units2: "2 блока",
    units3: "3+ блока",
    areaEyebrow: "Зона обслуживания",
    areaTitle: "Мойка кондиционеров в Хадере, Кейсарии и городах вокруг до 15 км",
    areaText: "Услуга подходит для настенных кондиционеров в квартирах, гостевых юнитах, кабинетах и небольших бизнесах. Зона выезда: Хадера, Кейсария, Ор-Акива, Биньямина-Гиват-Ада, Зихрон-Яаков, Пардес-Хана-Каркур, Хариш, Джиср-аз-Зарка, Фурейдис, Бейт-Ханания, Мааган-Михаэль и Сдот-Ям.",
    contactTitle: "Контакты",
    copyButton: "Скопировать номер",
    copiedButton: "Номер скопирован",
    faqEyebrow: "Вопросы",
    faqTitle: "Что знать перед заявкой",
    faq1Question: "Что входит в чистку внутреннего блока?",
    faq1Answer: "Открытие блока, чистка фильтров, промывка доступной внутренней части, дезинфекция и аккуратное завершение работы.",
    faq2Question: "Сколько времени резервируется?",
    faq2Answer: "На каждую заявку в календаре выделяется 3 часа, включая рабочее время и запас на дорогу по району.",
    faq3Question: "Дезинфекция входит в цену?",
    faq3Answer: "Базовая чистка без разборки начинается от 250 ₪. Глубокая + дезинфекция начинается от 450 ₪. Второй блок в тот же визит начинается от 200 ₪. Итог подтверждается по фото, количеству блоков, доступу и адресу.",
    faq4Question: "Можно отправить фото в WhatsApp?",
    faq4Answer: "Да. После формы откроется готовое сообщение WhatsApp, к нему можно прикрепить фото кондиционера.",
    footerTitle: "Маим ве-Шемеш - мойка кондиционеров",
    footerText: "Чистка внутреннего блока, промывка и дезинфекция в районе Хадеры, Кейсарии и ближайших городов."
  }
};

const whatsappMessages = {
  he: "שלום, ראיתי את הפרסום לניקוי מזגנים בחדרה וקיסריה. אני רוצה לבדוק זמינות להיום/מחר. ניקוי בסיסי 250 ₪, ניקוי עמוק + חיטוי מ-450 ₪, יחידה שנייה מ-200 ₪.",
  ru: "Здравствуйте, увидел рекламу мойки кондиционеров в Хадере и Кейсарии. Хочу проверить доступность на сегодня/завтра. Базовая чистка 250 ₪, глубокая + дезинфекция от 450 ₪, второй блок от 200 ₪."
};

let currentLanguage = new URLSearchParams(window.location.search).get("lang") === "ru" ? "ru" : "he";

const setMeta = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", value);
};

const setLocalizedText = (element, value) => {
  element.textContent = value;
};

const applyLanguage = (language) => {
  currentLanguage = language;
  const dictionary = translations[language];
  const isHebrew = language === "he";

  document.documentElement.lang = language;
  document.documentElement.dir = isHebrew ? "rtl" : "ltr";
  document.title = dictionary.title;
  setMeta('meta[name="description"]', dictionary.description);
  setMeta('meta[property="og:title"]', isHebrew ? "ניקוי מזגנים בחדרה וקיסריה | שטיפת יחידה פנימית וחיטוי" : "Мойка кондиционеров в Хадере и Кейсарии | Чистка внутреннего блока");
  setMeta('meta[property="og:description"]', isHebrew ? "ניקוי בסיסי מ-250 ₪, ניקוי עמוק + חיטוי מ-450 ₪. שירות מקומי בחדרה, קיסריה, אור עקיבא ובנימינה." : "Базовая чистка от 250 ₪, глубокая + дезинфекция от 450 ₪. Местный сервис в Хадере, Кейсарии, Ор-Акиве и Биньямине.");
  setMeta('meta[property="og:locale"]', isHebrew ? "he_IL" : "ru_RU");
  setMeta('meta[name="twitter:title"]', isHebrew ? "ניקוי מזגנים בחדרה וקיסריה | שטיפת יחידה פנימית וחיטוי" : "Мойка кондиционеров в Хадере и Кейсарии | Чистка внутреннего блока");
  setMeta('meta[name="twitter:description"]', isHebrew ? "ניקוי בסיסי מ-250 ₪, ניקוי עמוק + חיטוי מ-450 ₪. שירות מקומי בחדרה וקיסריה." : "Базовая чистка от 250 ₪, глубокая + дезинфекция от 450 ₪. Местный сервис в Хадере и Кейсарии.");

  document.querySelectorAll("[data-key]").forEach((element) => {
    const value = dictionary[element.dataset.key];
    if (value) setLocalizedText(element, value);
  });

  document.querySelectorAll("[data-placeholder-key]").forEach((element) => {
    const value = dictionary[element.dataset.placeholderKey];
    if (value) element.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(whatsappMessages[language])}`;
  });

  if (availableSlots.length && bookingDateInput?.value) {
    renderSlotsForDate(bookingDateInput.value);
  }

  const toggle = document.querySelector("[data-language-toggle]");
  if (toggle) {
    toggle.setAttribute("aria-label", isHebrew ? "לעבור לרוסית" : "Переключить на иврит");
  }
};

document.querySelector("[data-language-toggle]")?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "he" ? "ru" : "he");
});

const copyButton = document.querySelector("[data-copy]");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const number = copyButton.getAttribute("data-copy");
    const label = copyButton.querySelector(".copy-button__label");

    try {
      await navigator.clipboard.writeText(number);
      copyButton.classList.add("is-copied");
      if (label) label.textContent = translations[currentLanguage].copiedButton;
      window.setTimeout(() => {
        copyButton.classList.remove("is-copied");
        if (label) label.textContent = translations[currentLanguage].copyButton;
      }, 1800);
    } catch {
      window.location.href = `tel:${number.replace(/\s/g, "")}`;
    }
  });
}

const leadForm = document.querySelector("#lead-form");
leadForm?.setAttribute("novalidate", "novalidate");
const formStatus = document.querySelector("#form-status");
const emailInput = leadForm?.querySelector('input[name="email"]');
const bookingDateInput = leadForm?.querySelector("[data-booking-date]");
const slotSelect = leadForm?.querySelector("[data-slot-select]");
const preferredDateTimeInput = leadForm?.querySelector("[data-preferred-datetime]");
const slotHelper = leadForm?.querySelector(".slot-helper");
let availableSlots = [];
let slotsLoadedFromGoogle = false;

const hasGoogleEndpoint = () => {
  return SETTINGS.googleScriptUrl && SETTINGS.googleScriptUrl.startsWith("https://script.google.com/");
};

const updateEmailRequirement = () => {
  if (!leadForm || !emailInput) return;
  emailInput.required = false;
};

leadForm?.querySelectorAll('input[name="contactPreference"]').forEach((input) => {
  input.addEventListener("change", updateEmailRequirement);
});

const setStatus = (message, type = "") => {
  if (!formStatus) return;
  formStatus.className = `form-status${type ? ` is-${type}` : ""}`;
  formStatus.textContent = message;
};

const pad2 = (value) => String(value).padStart(2, "0");

const formatLocalDate = (date) => {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
};

const formatLocalDateTime = (date) => {
  return `${formatLocalDate(date)}T${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
};

const parseSlotDateTime = (value) => {
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]), Number(match[4]), Number(match[5]), 0, 0);
};

const addHours = (date, hours) => {
  return new Date(date.getTime() + hours * 60 * 60 * 1000);
};

const getWorkingWindow = (date) => {
  return SETTINGS.workingSchedule[date.getDay()];
};

const atTime = (date, hm) => {
  const [hours, minutes] = hm.split(":").map(Number);
  const result = new Date(date);
  result.setHours(hours, minutes, 0, 0);
  return result;
};

const formatSlotLabel = (slot) => {
  const start = parseSlotDateTime(slot.start);
  const end = parseSlotDateTime(slot.end);
  if (!start || !end) return slot.label || slot.start;
  return `${pad2(start.getHours())}:${pad2(start.getMinutes())}-${pad2(end.getHours())}:${pad2(end.getMinutes())}`;
};

const uniqueDatesFromSlots = (slots) => {
  return [...new Set(slots.map((slot) => slot.date).filter(Boolean))].sort();
};

const generateFallbackSlots = () => {
  const now = new Date();
  const slots = [];

  for (let offset = 0; offset < SETTINGS.slotDaysAhead; offset += 1) {
    const day = new Date(now);
    day.setDate(now.getDate() + offset);
    day.setHours(0, 0, 0, 0);
    const workingWindow = getWorkingWindow(day);
    if (!workingWindow) continue;

    let start = atTime(day, workingWindow.opens);
    const close = atTime(day, workingWindow.closes);

    while (addHours(start, SETTINGS.bookingHours) <= close) {
      const end = addHours(start, SETTINGS.bookingHours);
      if (start > now) {
        slots.push({
          start: formatLocalDateTime(start),
          end: formatLocalDateTime(end),
          date: formatLocalDate(start)
        });
      }
      start = addHours(start, SETTINGS.bookingHours);
    }
  }

  return slots;
};

const setSlotHelper = (messageKey) => {
  if (!slotHelper) return;
  slotHelper.textContent = translations[currentLanguage][messageKey];
};

const updateSelectedSlot = () => {
  if (!slotSelect || !preferredDateTimeInput) return;
  preferredDateTimeInput.value = slotSelect.value || "";
  const selectedOption = slotSelect.selectedOptions[0];
  if (selectedOption) {
    preferredDateTimeInput.dataset.slotLabel = selectedOption.textContent || "";
  }
};

const renderSlotsForDate = (dateValue) => {
  if (!slotSelect || !preferredDateTimeInput) return;
  const dictionary = translations[currentLanguage];
  const slotsForDate = availableSlots.filter((slot) => slot.date === dateValue);

  slotSelect.textContent = "";

  if (!slotsForDate.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = dictionary.slotUnavailable;
    slotSelect.append(option);
    slotSelect.disabled = true;
    preferredDateTimeInput.value = "";
    setSlotHelper(slotsLoadedFromGoogle ? "slotLive" : "slotFallback");
    return;
  }

  slotSelect.disabled = false;
  slotsForDate.forEach((slot) => {
    const option = document.createElement("option");
    option.value = slot.start;
    option.textContent = slot.label || formatSlotLabel(slot);
    option.dataset.end = slot.end || "";
    slotSelect.append(option);
  });

  updateSelectedSlot();
  setSlotHelper(slotsLoadedFromGoogle ? "slotLive" : "slotFallback");
};

const applySlots = (slots, fromGoogle) => {
  availableSlots = slots.filter((slot) => slot.start && slot.end && slot.date);
  slotsLoadedFromGoogle = fromGoogle;

  if (!bookingDateInput || !slotSelect || !preferredDateTimeInput) return;

  const dates = uniqueDatesFromSlots(availableSlots);
  if (!dates.length) {
    slotSelect.textContent = "";
    const option = document.createElement("option");
    option.value = "";
    option.textContent = translations[currentLanguage].slotUnavailable;
    slotSelect.append(option);
    slotSelect.disabled = true;
    preferredDateTimeInput.value = "";
    setSlotHelper(fromGoogle ? "slotLive" : "slotFallback");
    return;
  }

  bookingDateInput.min = dates[0];
  bookingDateInput.max = dates[dates.length - 1];
  if (!dates.includes(bookingDateInput.value)) {
    bookingDateInput.value = dates[0];
  }
  renderSlotsForDate(bookingDateInput.value);
};

const loadGoogleSlots = () => {
  return new Promise((resolve, reject) => {
    if (!hasGoogleEndpoint()) {
      reject(new Error("Google Apps Script endpoint is not configured"));
      return;
    }

    const callbackName = `acCleaningSlots_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    const script = document.createElement("script");
    const separator = SETTINGS.googleScriptUrl.includes("?") ? "&" : "?";
    const cleanup = () => {
      delete window[callbackName];
      script.remove();
    };

    window[callbackName] = (payload) => {
      cleanup();
      if (payload && payload.ok && Array.isArray(payload.slots)) {
        resolve(payload.slots);
        return;
      }
      reject(new Error("Invalid slots response"));
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("Could not load slots"));
    };
    script.src = `${SETTINGS.googleScriptUrl}${separator}action=slots&daysAhead=${encodeURIComponent(SETTINGS.slotDaysAhead)}&callback=${encodeURIComponent(callbackName)}`;
    document.head.append(script);
  });
};

const initializeSlotPicker = async () => {
  if (!bookingDateInput || !slotSelect || !preferredDateTimeInput) return;

  bookingDateInput.addEventListener("change", () => {
    renderSlotsForDate(bookingDateInput.value);
  });
  slotSelect.addEventListener("change", updateSelectedSlot);

  const loadingOption = slotSelect.querySelector("option");
  if (loadingOption) loadingOption.textContent = translations[currentLanguage].slotLoading;
  setSlotHelper("slotHelper");

  try {
    const slots = await loadGoogleSlots();
    applySlots(slots, true);
  } catch {
    applySlots(generateFallbackSlots(), false);
  }
};

const collectLead = () => {
  const data = new FormData(leadForm);
  const selectedSlot = slotSelect?.selectedOptions[0];
  return {
    name: String(data.get("name") || "").trim(),
    phone: String(data.get("phone") || "").trim(),
    email: String(data.get("email") || "").trim(),
    address: String(data.get("address") || "").trim(),
    area: String(data.get("area") || "").trim(),
    units: String(data.get("units") || "").trim(),
    bookingDate: String(data.get("bookingDate") || "").trim(),
    bookingSlot: String(data.get("bookingSlot") || "").trim(),
    preferredDateTime: String(data.get("preferredDateTime") || data.get("bookingSlot") || "").trim(),
    bookingSlotLabel: selectedSlot ? selectedSlot.textContent.trim() : "",
    contactPreference: String(data.get("contactPreference") || "whatsapp").trim(),
    notes: String(data.get("notes") || "").trim(),
    language: currentLanguage,
    priceLabel: SETTINGS.priceLabel[currentLanguage],
    bookingHours: SETTINGS.bookingHours,
    serviceName: SETTINGS.serviceName[currentLanguage],
    sourceUrl: window.location.href,
    submittedAt: new Date().toISOString()
  };
};

const formatLeadMessage = (lead) => {
  if (currentLanguage === "he") {
    return [
      "בקשה לניקוי וחיטוי יחידה פנימית של מזגן",
      `מחיר: ${SETTINGS.priceLabel.he}`,
      lead.name ? `שם: ${lead.name}` : "",
      lead.phone ? `טלפון: ${lead.phone}` : "",
      lead.email ? `email: ${lead.email}` : "",
      lead.address ? `כתובת: ${lead.address}` : "",
      lead.area ? `אזור: ${lead.area}` : "",
      lead.units ? `מספר יחידות: ${lead.units}` : "",
      lead.preferredDateTime ? `מועד שנבחר: ${lead.bookingDate} ${lead.bookingSlotLabel || lead.preferredDateTime}` : "מועד שנבחר: לא נבחר",
      `חלון עבודה: ${SETTINGS.bookingHours} שעות`,
      lead.notes ? `הערות: ${lead.notes}` : ""
    ].filter(Boolean).join("\n");
  }

  return [
    "Заявка на мойку и дезинфекцию внутреннего блока кондиционера",
    `Цена: ${SETTINGS.priceLabel.ru}`,
    lead.name ? `Имя: ${lead.name}` : "",
    lead.phone ? `Телефон: ${lead.phone}` : "",
    lead.email ? `email: ${lead.email}` : "",
    lead.address ? `Адрес: ${lead.address}` : "",
    lead.area ? `Район: ${lead.area}` : "",
    lead.units ? `Количество блоков: ${lead.units}` : "",
    lead.preferredDateTime ? `Выбранный слот: ${lead.bookingDate} ${lead.bookingSlotLabel || lead.preferredDateTime}` : "Выбранный слот: не выбран",
    `Рабочий слот: ${SETTINGS.bookingHours} часа`,
    lead.notes ? `Комментарий: ${lead.notes}` : ""
  ].filter(Boolean).join("\n");
};

const openFallbackChannel = (lead, message) => {
  if (lead.contactPreference === "email" && lead.email && SETTINGS.ownerEmail) {
    const subject = encodeURIComponent(currentLanguage === "he" ? "בקשה לניקוי מזגן בחדרה או קיסריה" : "Заявка на мойку кондиционера в Хадере или Кейсарии");
    window.location.href = `mailto:${SETTINGS.ownerEmail}?subject=${subject}&body=${encodeURIComponent(message)}`;
    return;
  }

  window.open(`https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
};

leadForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  updateEmailRequirement();

  const lead = collectLead();
  const dictionary = translations[currentLanguage];
  const submitButton = leadForm.querySelector('button[type="submit"]');
  const originalButtonText = submitButton?.textContent || "";
  const message = formatLeadMessage(lead);
  const shouldOpenWhatsapp = lead.contactPreference !== "email" || !lead.email;
  let sentToGoogle = false;

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = dictionary.submitWorking;
  }
  setStatus(dictionary.submitWorking);

  if (hasGoogleEndpoint()) {
    try {
      await fetch(SETTINGS.googleScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...lead, message })
      });
      sentToGoogle = true;
    } catch {
      sentToGoogle = false;
    }
  }

  if (shouldOpenWhatsapp || !sentToGoogle) {
    openFallbackChannel(lead, message);
  }

  if (sentToGoogle) {
    setStatus(dictionary.successWithGoogle, "success");
    leadForm.reset();
    updateEmailRequirement();
    applySlots(availableSlots, slotsLoadedFromGoogle);
  } else {
    setStatus(hasGoogleEndpoint() ? dictionary.errorMessage : dictionary.successFallback, hasGoogleEndpoint() ? "error" : "success");
  }

  if (submitButton) {
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  }
});

applyLanguage(currentLanguage);
updateEmailRequirement();
initializeSlotPicker();
