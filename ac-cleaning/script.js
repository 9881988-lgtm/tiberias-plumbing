const SETTINGS = {
  googleScriptUrl: "",
  ownerEmail: "tib778877@gmail.com",
  whatsappNumber: "972533613100",
  phoneDisplay: "053 361 3100",
  priceLabel: {
    he: "ניקוי אקספרס + חיטוי 190 ₪ / 3 מזגנים ב-490 ₪ / ניקוי עמוק מ-450 ₪",
    ru: "экспресс-мойка + дезинфекция 190 ₪ / 3 кондиционера за 490 ₪ / глубокая мойка от 450 ₪",
    en: "express cleaning + disinfection 190 ₪ / 3 AC units for 490 ₪ / deep cleaning from 450 ₪",
    fr: "nettoyage express + désinfection 190 ₪ / 3 climatiseurs pour 490 ₪ / nettoyage profond dès 450 ₪"
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
    ru: "Мойка и дезинфекция внутреннего блока кондиционера",
    en: "Cleaning and disinfection of an indoor AC unit",
    fr: "Nettoyage et désinfection de l'unité intérieure de climatisation"
  }
};

const translations = {
  he: {
    title: "ניקוי מזגנים בטבריה ובצפון | שטיפה וחיטוי | 053 361 3100",
    description: "ניקוי מזגנים בטבריה, צפת, נוף הגליל, בית שאן ועמק הירדן: ניקוי אקספרס + חיטוי ב-190 ₪ או 3 מזגנים ב-490 ₪.",
    brandTitle: "מים ושמש",
    brandSubtitle: "ניקוי מזגנים",
    navService: "השירות",
    navBooking: "הזמנה",
    navFaq: "שאלות",
    languageButton: "Русский",
    heroEyebrow: "טבריה וצפון ישראל · WhatsApp מהיר",
    heroTitle: "ניקוי מזגנים בטבריה ובצפון",
    heroLead: "יש ריח רע מהמזגן, אבק או קירור חלש? מבצע בטבריה, צפת, נוף הגליל, בית שאן ועמק הירדן: ניקוי אקספרס עם חיטוי ב-190 ₪, או 3 מזגנים באותה כתובת ב-490 ₪.",
    todayOfferTitle: "ניקוי אקספרס + חיטוי 190 ₪ | 3 מזגנים ב-490 ₪",
    todayOfferText: "למזגנים עיליים, בגישה רגילה ובאותה כתובת. המחיר מאושר לפי תמונה.",
    bookButton: "בדיקת זמינות עכשיו",
    bookButtonShort: "זמינות עכשיו",
    priceNote: "אקספרס + חיטוי 190 ₪",
    timeNote: "חלון עבודה 3 שעות",
    areaNote: "טבריה וערים נבחרות בצפון",
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
    pricingTitle: "מבצע ברור למזגן אחד או לשלושה מזגנים",
    pricingLead: "המחיר מאושר מראש לפי תמונה, מספר היחידות, הגישה ומצב המזגן. המבצע מיועד למזגנים עיליים בגישה רגילה; עובש קשה, עבודה אחרי שיפוץ או פירוק עמוק נבדקים בנפרד.",
    priceBasicTitle: "ניקוי אקספרס + חיטוי — 190 ₪",
    priceBasicText: "שטיפה וחיטוי למזגן עילי אחד בגישה רגילה, ללא פירוק עמוק.",
    priceDeepTitle: "3 מזגנים אקספרס + חיטוי — 490 ₪",
    priceDeepText: "שלושה מזגנים עיליים באותה כתובת ובאותו ביקור.",
    priceSecondTitle: "ניקוי עמוק + חיטוי — מ-450 ₪",
    priceSecondText: "מתאים לעובש, ריח חזק, יחידה מלוכלכת מאוד או קירור חלש.",
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
    whyTitle: "שירות מקומי בטבריה ובצפון עם מענה מהיר ב-WhatsApp",
    why1: "מענה מהיר ב-WhatsApp",
    why2: "מחיר ברור לפני העבודה",
    why3: "אפשר לשלוח תמונה לפני הגעה",
    why4: "הגנה על הקיר והרצפה בזמן השטיפה",
    why5: "עבודה נקייה ומסודרת",
    why6: "מתאים לדירות, קליניקות, צימרים ועסקים קטנים",
    leadEyebrow: "תיאום מהיר",
    leadTitle: "רוצים ניקוי היום? השאירו טלפון וכתובת, ונבדוק זמינות מיידית",
    leadText: "ניקוי אקספרס + חיטוי: 190 ₪. שלושה מזגנים באותה כתובת: 490 ₪. ניקוי עמוק + חיטוי: מ-450 ₪. לאחר שליחת הפרטים נפתחת הודעת WhatsApp מוכנה כדי שנוכל לענות מהר.",
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
    successFallback: "הפרטים מוכנים לשליחה. המחיר יאושר לפי התמונה: אקספרס + חיטוי 190 ₪, 3 מזגנים ב-490 ₪ או ניקוי עמוק מ-450 ₪.",
    errorMessage: "לא הצלחנו לשלוח לשרת Google. אפשר לשלוח את הפרטים ב-WhatsApp.",
    emailRequired: "בחרת email, לכן צריך למלא כתובת email.",
    areaTiberias: "טבריה",
    areaSafed: "צפת",
    areaNofHaGalil: "נוף הגליל",
    areaBeitShean: "בית שאן",
    areaJordanValley: "עמק הירדן",
    units1: "יחידה אחת",
    units2: "2 יחידות",
    units3: "3+ יחידות",
    areaEyebrow: "אזור השירות",
    areaTitle: "ניקוי מזגנים בטבריה ובצפון ישראל",
    areaText: "שירות בטבריה, צפת, נוף הגליל, בית שאן ועמק הירדן למזגנים עיליים בדירות, יחידות אירוח, קליניקות ועסקים קטנים. שולחים כתובת ותמונה ב-WhatsApp ומקבלים הערכת מחיר לפני הגעה.",
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
    faq3Answer: "כן. ניקוי אקספרס עם חיטוי עולה 190 ₪, ו-3 מזגנים באותה כתובת עולים 490 ₪. המבצע מיועד למזגנים עיליים בגישה רגילה. ניקוי עמוק מתחיל מ-450 ₪, והמחיר מאושר לפי תמונה ומצב היחידה.",
    faq4Question: "אפשר לשלוח תמונה ב-WhatsApp?",
    faq4Answer: "כן. אחרי שליחת הטופס נפתחת הודעת WhatsApp מוכנה עם הפרטים, ואפשר לצרף אליה תמונה של המזגן.",
    footerTitle: "מים ושמש - ניקוי מזגנים",
    footerText: "ניקוי יחידה פנימית, שטיפה וחיטוי בטבריה ובערים נבחרות בצפון ישראל."
  },
  ru: {
    title: "Мойка кондиционеров в Тверии и на севере Израиля | 053 361 3100",
    description: "Мойка кондиционеров в Тверии, Цфате, Ноф-ха-Галиле, Бейт-Шеане и Иорданской долине: 190 ₪ или 3 кондиционера за 490 ₪.",
    brandTitle: "Маим ве-Шемеш",
    brandSubtitle: "Мойка кондиционеров",
    navService: "Услуга",
    navBooking: "Заявка",
    navFaq: "Вопросы",
    languageButton: "עברית",
    heroEyebrow: "Тверия и север Израиля · быстрый WhatsApp",
    heroTitle: "Мойка кондиционеров в Тверии и на севере",
    heroLead: "Есть запах, пыль или слабое охлаждение? Акция в Тверии, Цфате, Ноф-ха-Галиле, Бейт-Шеане и Иорданской долине: экспресс-мойка с дезинфекцией за 190 ₪ или 3 кондиционера по одному адресу за 490 ₪.",
    todayOfferTitle: "Экспресс-мойка + дезинфекция 190 ₪ | 3 кондиционера за 490 ₪",
    todayOfferText: "Для настенных кондиционеров с обычным доступом по одному адресу. Цена подтверждается по фото.",
    bookButton: "Проверить время сейчас",
    bookButtonShort: "Проверить время",
    priceNote: "экспресс + дезинфекция 190 ₪",
    timeNote: "3 часа рабочего времени",
    areaNote: "Тверия и выбранные города севера",
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
    pricingTitle: "Понятная акция для одного или трёх кондиционеров",
    pricingLead: "Цена подтверждается заранее по фото, количеству блоков, доступу и состоянию кондиционера. Акция действует для настенных блоков с обычным доступом; сильная плесень, грязь после ремонта и глубокая разборка оцениваются отдельно.",
    priceBasicTitle: "Экспресс-мойка + дезинфекция — 190 ₪",
    priceBasicText: "Промывка и дезинфекция одного настенного кондиционера с обычным доступом, без глубокой разборки.",
    priceDeepTitle: "3 кондиционера + дезинфекция — 490 ₪",
    priceDeepText: "Три настенных кондиционера по одному адресу за один визит.",
    priceSecondTitle: "Глубокая мойка + дезинфекция — от 450 ₪",
    priceSecondText: "Для сильной плесени, запаха, очень грязного блока или слабого охлаждения.",
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
    whyTitle: "Местный сервис в Тверии и на севере с быстрым ответом в WhatsApp",
    why1: "Быстрый ответ в WhatsApp",
    why2: "Понятная цена до работы",
    why3: "Можно отправить фото до выезда",
    why4: "Защита стены и пола во время мойки",
    why5: "Аккуратная и чистая работа",
    why6: "Для квартир, клиник, циммеров и небольших бизнесов",
    leadEyebrow: "Быстрая заявка",
    leadTitle: "Хотите чистку сегодня? Оставьте телефон и адрес, проверим доступность сразу",
    leadText: "Экспресс-мойка + дезинфекция: 190 ₪. Три кондиционера по одному адресу: 490 ₪. Глубокая мойка + дезинфекция: от 450 ₪. После отправки откроется готовое сообщение WhatsApp.",
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
    successFallback: "Данные готовы к отправке. Цена подтверждается по фото: экспресс + дезинфекция 190 ₪, 3 кондиционера за 490 ₪ или глубокая мойка от 450 ₪.",
    errorMessage: "Не удалось отправить на сервер Google. Можно отправить данные в WhatsApp.",
    emailRequired: "Вы выбрали email, поэтому нужно заполнить адрес email.",
    areaTiberias: "Тверия",
    areaSafed: "Цфат",
    areaNofHaGalil: "Ноф-ха-Галиль",
    areaBeitShean: "Бейт-Шеан",
    areaJordanValley: "Иорданская долина",
    units1: "1 блок",
    units2: "2 блока",
    units3: "3+ блока",
    areaEyebrow: "Зона обслуживания",
    areaTitle: "Мойка кондиционеров в Тверии и на севере Израиля",
    areaText: "Работаем в Тверии, Цфате, Ноф-ха-Галиле, Бейт-Шеане и Иорданской долине с настенными кондиционерами в квартирах, гостевых домах, кабинетах и небольших бизнесах. Отправьте адрес и фото в WhatsApp для оценки до выезда.",
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
    faq3Answer: "Да. Экспресс-мойка с дезинфекцией стоит 190 ₪, а 3 кондиционера по одному адресу — 490 ₪. Акция действует для настенных блоков с обычным доступом. Глубокая мойка начинается от 450 ₪; цена подтверждается по фото.",
    faq4Question: "Можно отправить фото в WhatsApp?",
    faq4Answer: "Да. После формы откроется готовое сообщение WhatsApp, к нему можно прикрепить фото кондиционера.",
    footerTitle: "Маим ве-Шемеш - мойка кондиционеров",
    footerText: "Чистка внутреннего блока, промывка и дезинфекция в Тверии и выбранных городах севера Израиля."
  },
  en: {
    title: "AC Cleaning in Tiberias and Northern Israel | 053 361 3100",
    description: "AC cleaning in Tiberias, Safed, Nof HaGalil, Beit She'an and the Jordan Valley: 190 ₪ or 3 AC units for 490 ₪.",
    brandTitle: "Mayim VeShemesh",
    brandSubtitle: "AC cleaning",
    navService: "Service",
    navBooking: "Booking",
    navFaq: "Questions",
    languageButton: "עברית",
    heroEyebrow: "Tiberias and northern Israel · fast WhatsApp",
    heroTitle: "AC cleaning in Tiberias and northern Israel",
    heroLead: "Bad smell, dust or weak cooling? Offer in Tiberias, Safed, Nof HaGalil, Beit She'an and the Jordan Valley: express AC cleaning with disinfection for 190 ₪, or 3 AC units at the same address for 490 ₪.",
    todayOfferTitle: "Express cleaning + disinfection 190 ₪ | 3 AC units for 490 ₪",
    todayOfferText: "For wall-mounted units with standard access at one address. Price is confirmed by photo.",
    bookButton: "Check availability now",
    bookButtonShort: "Check availability",
    priceNote: "express + disinfection 190 ₪",
    timeNote: "3-hour work window",
    areaNote: "Tiberias and selected northern cities",
    trustCleanTitle: "Internal washing",
    trustCleanText: "evaporator, filters and drain",
    trustDisinfectionTitle: "Clear price in advance",
    trustDisinfectionText: "photo on WhatsApp before arrival",
    trustHoursTitle: "Sun-Thu 08:00-20:00, Fri 08:00-12:00",
    trustHoursText: "according to calendar availability",
    serviceEyebrow: "What is included",
    serviceTitle: "Cleaning the dirt inside the unit, not only the filter",
    serviceLead: "Dust and moisture inside the AC can cause bad odors, weaker cooling and dripping. Proper cleaning helps restore cleaner airflow.",
    featureUnitTitle: "Opening the unit",
    featureUnitText: "Careful opening of the cover, filter check and preparation for washing with protection for the wall and work area.",
    featureWashTitle: "Deep washing",
    featureWashText: "Cleaning the evaporator area, airflow channels and accessible parts where dust, moisture and odors build up.",
    featureDisinfectTitle: "Disinfection and clean finish",
    featureDisinfectText: "Disinfection after washing, cleaning the work area and a short test run to check airflow.",
    pricingEyebrow: "Clear prices",
    pricingTitle: "A clear offer for one or three AC units",
    pricingLead: "The price is confirmed in advance by photo, number of units, access and condition. The offer covers wall-mounted units with standard access; heavy mold, post-renovation dirt and deep dismantling are assessed separately.",
    priceBasicTitle: "Express cleaning + disinfection — 190 ₪",
    priceBasicText: "Washing and disinfection for one wall-mounted AC with standard access, without deep dismantling.",
    priceDeepTitle: "3 AC units + disinfection — 490 ₪",
    priceDeepText: "Three wall-mounted AC units at the same address in one visit.",
    priceSecondTitle: "Deep cleaning + disinfection — from 450 ₪",
    priceSecondText: "For heavy mold, strong odor, a very dirty unit or weak cooling.",
    priceComplexTitle: "Heavy mold / after renovation — by photo",
    priceComplexText: "Send a photo on WhatsApp and we will check price and availability before arrival.",
    proofEyebrow: "Before / after",
    proofTitle: "What usually changes after proper cleaning",
    proofLead: "The goal is to reduce odors, dust and mold inside the unit, improve airflow and leave the work area clean.",
    proofBeforeTitle: "Before: odor, dust and mold",
    proofBeforeText: "Common signs: bad smell, weak airflow, black dust or mold near the air outlet.",
    proofWaterTitle: "During cleaning: dirt comes out",
    proofWaterText: "During deep washing, dark water and dirt often come out of the indoor unit.",
    proofAfterTitle: "After: cleaner operation",
    proofAfterText: "We check airflow, return the unit clean and protect the wall and floor.",
    whyEyebrow: "Why choose us?",
    whyTitle: "Local service in Tiberias and the north with fast WhatsApp response",
    why1: "Fast WhatsApp response",
    why2: "Clear price before the work",
    why3: "You can send a photo before arrival",
    why4: "Wall and floor protection during washing",
    why5: "Clean and orderly work",
    why6: "Suitable for apartments, clinics, guest units and small businesses",
    leadEyebrow: "Fast booking",
    leadTitle: "Want cleaning today? Leave a phone number and address, and we will check availability immediately",
    leadText: "Express cleaning + disinfection: 190 ₪. Three AC units at the same address: 490 ₪. Deep cleaning + disinfection: from 450 ₪. After sending, a ready WhatsApp message opens.",
    leadHighlight1: "3-hour slot",
    leadHighlight2: "WhatsApp or email",
    leadHighlight3: "Sun-Thu 08:00-20:00, Fri 08:00-12:00",
    fieldName: "Name",
    fieldPhone: "Phone",
    fieldAddress: "Full address",
    fieldArea: "Area",
    fieldUnits: "Number of units",
    fieldBookingDate: "Choose a date",
    fieldBookingTime: "Choose a time",
    fieldEmail: "email for price confirmation",
    fieldContact: "How should we answer?",
    contactEither: "whichever is faster",
    fieldNotes: "Notes",
    notesPlaceholder: "floor, AC access, smell, dripping or photo on WhatsApp",
    slotLoading: "Loading available times...",
    slotUnavailable: "No available slots on this date",
    slotHelper: "Each slot reserves 3 hours of work. After sending the form, the time is checked and sent to the calendar.",
    slotLive: "Times are shown according to the calendar.",
    slotFallback: "Slots are shown for preview. After backend connection they will be checked against the calendar.",
    slotRequired: "Choose an available date and time.",
    submitButton: "Send request on WhatsApp",
    submitWorking: "Sending...",
    successWithGoogle: "The request was sent and the selected slot was sent for calendar booking. Price is confirmed by cleaning type, number of units and access.",
    successFallback: "Details are ready to send. Price is confirmed by photo: express + disinfection 190 ₪, 3 AC units for 490 ₪, or deep cleaning from 450 ₪.",
    errorMessage: "Could not send to the Google server. You can send the details on WhatsApp.",
    emailRequired: "You selected email, so an email address is required.",
    areaTiberias: "Tiberias",
    areaSafed: "Safed",
    areaNofHaGalil: "Nof HaGalil",
    areaBeitShean: "Beit She'an",
    areaJordanValley: "Jordan Valley",
    units1: "1 unit",
    units2: "2 units",
    units3: "3+ units",
    areaEyebrow: "Service area",
    areaTitle: "AC cleaning in Tiberias and northern Israel",
    areaText: "Service in Tiberias, Safed, Nof HaGalil, Beit She'an and the Jordan Valley for wall-mounted AC units in apartments, guest units, offices and small businesses. Send your address and a photo on WhatsApp for an estimate before the visit.",
    contactTitle: "Contact",
    copyButton: "Copy number",
    copiedButton: "Number copied",
    faqEyebrow: "Questions",
    faqTitle: "What to know before booking",
    faq1Question: "What is included in indoor unit cleaning?",
    faq1Answer: "Opening the unit, cleaning filters, washing the accessible internal part, disinfection and a clean finish of the work area.",
    faq2Question: "How much time is reserved?",
    faq2Answer: "Each request reserves 3 hours in the calendar, including orderly work time and travel margin in the area.",
    faq3Question: "Is disinfection included in the price?",
    faq3Answer: "Yes. Express cleaning with disinfection is 190 ₪, and 3 AC units at one address are 490 ₪. The offer covers wall-mounted units with standard access. Deep cleaning starts at 450 ₪; price is confirmed by photo.",
    faq4Question: "Can I send a photo on WhatsApp?",
    faq4Answer: "Yes. After the form, a ready WhatsApp message opens and you can attach a photo of the AC.",
    footerTitle: "Mayim VeShemesh - AC cleaning",
    footerText: "Indoor unit cleaning, washing and disinfection in Tiberias and selected northern cities."
  },
  fr: {
    title: "Nettoyage de climatiseurs à Tibériade et dans le nord | 053 361 3100",
    description: "Nettoyage à Tibériade, Safed, Nof HaGalil, Beit She'an et dans la vallée du Jourdain : 190 ₪ ou 3 climatiseurs pour 490 ₪.",
    brandTitle: "Mayim VeShemesh",
    brandSubtitle: "Nettoyage de climatiseurs",
    navService: "Service",
    navBooking: "Demande",
    navFaq: "Questions",
    languageButton: "עברית",
    heroEyebrow: "Tibériade et nord d'Israël · WhatsApp rapide",
    heroTitle: "Nettoyage de climatiseurs à Tibériade et dans le nord",
    heroLead: "Mauvaise odeur, poussière ou refroidissement faible ? Offre à Tibériade, Safed, Nof HaGalil, Beit She'an et dans la vallée du Jourdain : nettoyage express avec désinfection à 190 ₪, ou 3 climatiseurs à la même adresse pour 490 ₪.",
    todayOfferTitle: "Nettoyage express + désinfection 190 ₪ | 3 climatiseurs pour 490 ₪",
    todayOfferText: "Pour unités murales avec accès standard à la même adresse. Prix confirmé par photo.",
    bookButton: "Vérifier la disponibilité",
    bookButtonShort: "Disponibilité",
    priceNote: "express + désinfection 190 ₪",
    timeNote: "créneau de travail de 3 heures",
    areaNote: "Tibériade et villes sélectionnées du nord",
    trustCleanTitle: "Lavage intérieur",
    trustCleanText: "évaporateur, filtres et évacuation",
    trustDisinfectionTitle: "Prix clair à l'avance",
    trustDisinfectionText: "photo sur WhatsApp avant l'arrivée",
    trustHoursTitle: "Dim-Jeu 08:00-20:00, Ven 08:00-12:00",
    trustHoursText: "selon les disponibilités du calendrier",
    serviceEyebrow: "Ce qui est inclus",
    serviceTitle: "Un nettoyage qui traite la saleté à l'intérieur de l'unité, pas seulement le filtre",
    serviceLead: "La poussière et l'humidité à l'intérieur du climatiseur peuvent causer des odeurs, un refroidissement plus faible et des gouttes. Un nettoyage correct aide à retrouver un flux d'air plus propre.",
    featureUnitTitle: "Ouverture de l'unité",
    featureUnitText: "Ouverture prudente du capot, vérification des filtres et préparation du lavage avec protection du mur et de la zone de travail.",
    featureWashTitle: "Lavage profond",
    featureWashText: "Nettoyage de la zone de l'évaporateur, des passages d'air et des parties accessibles où s'accumulent poussière, humidité et odeurs.",
    featureDisinfectTitle: "Désinfection et finition propre",
    featureDisinfectText: "Désinfection après le lavage, nettoyage de la zone de travail et court test pour vérifier le flux d'air.",
    pricingEyebrow: "Prix clairs",
    pricingTitle: "Une offre claire pour un ou trois climatiseurs",
    pricingLead: "Le prix est confirmé à l'avance selon la photo, le nombre d'unités, l'accès et l'état. L'offre couvre les unités murales avec accès standard ; moisissure forte, saleté après rénovation et démontage profond sont évalués séparément.",
    priceBasicTitle: "Nettoyage express + désinfection — 190 ₪",
    priceBasicText: "Lavage et désinfection d'un climatiseur mural avec accès standard, sans démontage profond.",
    priceDeepTitle: "3 climatiseurs + désinfection — 490 ₪",
    priceDeepText: "Trois climatiseurs muraux à la même adresse lors d'une seule visite.",
    priceSecondTitle: "Nettoyage profond + désinfection — dès 450 ₪",
    priceSecondText: "Pour moisissure forte, mauvaise odeur, unité très sale ou refroidissement faible.",
    priceComplexTitle: "Moisissure forte / après rénovation — selon photo",
    priceComplexText: "Envoyez une photo sur WhatsApp et nous vérifierons le prix et la disponibilité avant l'arrivée.",
    proofEyebrow: "Avant / après",
    proofTitle: "Ce qui change généralement après un bon nettoyage",
    proofLead: "L'objectif est de réduire les odeurs, la poussière et la moisissure à l'intérieur de l'unité, d'améliorer le flux d'air et de laisser la zone de travail propre.",
    proofBeforeTitle: "Avant : odeur, poussière et moisissure",
    proofBeforeText: "Signes fréquents : mauvaise odeur, flux d'air faible, poussière noire ou moisissure près de la sortie d'air.",
    proofWaterTitle: "Pendant le nettoyage : la saleté sort",
    proofWaterText: "Pendant un lavage profond, on voit souvent de l'eau sombre et de la saleté sortir de l'unité intérieure.",
    proofAfterTitle: "Après : fonctionnement plus propre",
    proofAfterText: "Nous vérifions le flux d'air, rendons l'unité propre et protégeons le mur et le sol.",
    whyEyebrow: "Pourquoi nous choisir ?",
    whyTitle: "Service local à Tibériade et dans le nord avec réponse rapide sur WhatsApp",
    why1: "Réponse rapide sur WhatsApp",
    why2: "Prix clair avant le travail",
    why3: "Possibilité d'envoyer une photo avant l'arrivée",
    why4: "Protection du mur et du sol pendant le lavage",
    why5: "Travail propre et organisé",
    why6: "Adapté aux appartements, cliniques, unités d'hôtes et petits commerces",
    leadEyebrow: "Demande rapide",
    leadTitle: "Vous voulez un nettoyage aujourd'hui ? Laissez un téléphone et une adresse, nous vérifierons tout de suite",
    leadText: "Nettoyage express + désinfection : 190 ₪. Trois climatiseurs à la même adresse : 490 ₪. Nettoyage profond + désinfection : dès 450 ₪. Après l'envoi, un message WhatsApp prêt s'ouvre.",
    leadHighlight1: "Créneau de 3 heures",
    leadHighlight2: "WhatsApp ou email",
    leadHighlight3: "Dim-Jeu 08:00-20:00, Ven 08:00-12:00",
    fieldName: "Nom",
    fieldPhone: "Téléphone",
    fieldAddress: "Adresse complète",
    fieldArea: "Zone",
    fieldUnits: "Nombre d'unités",
    fieldBookingDate: "Choisir une date",
    fieldBookingTime: "Choisir une heure",
    fieldEmail: "email pour confirmation du prix",
    fieldContact: "Comment répondre ?",
    contactEither: "le plus rapide",
    fieldNotes: "Notes",
    notesPlaceholder: "étage, accès au climatiseur, odeur, fuite ou photo sur WhatsApp",
    slotLoading: "Chargement des créneaux...",
    slotUnavailable: "Aucun créneau disponible à cette date",
    slotHelper: "Chaque créneau réserve 3 heures de travail. Après l'envoi du formulaire, l'heure est vérifiée et envoyée au calendrier.",
    slotLive: "Les heures sont affichées selon le calendrier.",
    slotFallback: "Les créneaux sont affichés pour aperçu. Après connexion du backend, ils seront vérifiés avec le calendrier.",
    slotRequired: "Choisissez une date et une heure disponibles.",
    submitButton: "Envoyer sur WhatsApp",
    submitWorking: "Envoi...",
    successWithGoogle: "La demande a été envoyée et le créneau choisi a été transmis au calendrier. Le prix est confirmé selon le type de nettoyage, le nombre d'unités et l'accès.",
    successFallback: "Les détails sont prêts à être envoyés. Prix confirmé par photo : express + désinfection 190 ₪, 3 climatiseurs pour 490 ₪ ou nettoyage profond dès 450 ₪.",
    errorMessage: "Impossible d'envoyer au serveur Google. Vous pouvez envoyer les détails sur WhatsApp.",
    emailRequired: "Vous avez choisi email, une adresse email est donc nécessaire.",
    areaTiberias: "Tibériade",
    areaSafed: "Safed",
    areaNofHaGalil: "Nof HaGalil",
    areaBeitShean: "Beit She'an",
    areaJordanValley: "Vallée du Jourdain",
    units1: "1 unité",
    units2: "2 unités",
    units3: "3+ unités",
    areaEyebrow: "Zone de service",
    areaTitle: "Nettoyage de climatiseurs à Tibériade et dans le nord d'Israël",
    areaText: "Service à Tibériade, Safed, Nof HaGalil, Beit She'an et dans la vallée du Jourdain pour les climatiseurs muraux des appartements, logements d'hôtes, bureaux et petits commerces. Envoyez l'adresse et une photo sur WhatsApp pour une estimation.",
    contactTitle: "Contact",
    copyButton: "Copier le numéro",
    copiedButton: "Numéro copié",
    faqEyebrow: "Questions",
    faqTitle: "À savoir avant la demande",
    faq1Question: "Que comprend le nettoyage de l'unité intérieure ?",
    faq1Answer: "Ouverture de l'unité, nettoyage des filtres, lavage de la partie intérieure accessible, désinfection et finition propre de la zone de travail.",
    faq2Question: "Combien de temps est réservé ?",
    faq2Answer: "Chaque demande réserve 3 heures dans le calendrier, y compris le temps de travail et une marge de déplacement dans la zone.",
    faq3Question: "La désinfection est-elle incluse dans le prix ?",
    faq3Answer: "Oui. Le nettoyage express avec désinfection coûte 190 ₪, et 3 climatiseurs à la même adresse coûtent 490 ₪. L'offre couvre les unités murales avec accès standard. Le nettoyage profond commence à 450 ₪ ; prix confirmé par photo.",
    faq4Question: "Puis-je envoyer une photo sur WhatsApp ?",
    faq4Answer: "Oui. Après le formulaire, un message WhatsApp prêt s'ouvre et vous pouvez y joindre une photo du climatiseur.",
    footerTitle: "Mayim VeShemesh - nettoyage de climatiseurs",
    footerText: "Nettoyage, lavage et désinfection de l'unité intérieure à Tibériade et dans les villes sélectionnées du nord."
  }
};

const whatsappMessages = {
  he: "שלום, ראיתי את המבצע לניקוי מזגנים בטבריה ובצפון. אני רוצה לבדוק זמינות לניקוי אקספרס + חיטוי ב-190 ₪ / 3 מזגנים ב-490 ₪. אפשר לשלוח תמונה וכתובת?",
  ru: "Здравствуйте, увидел акцию на мойку кондиционеров в Тверии и на севере Израиля. Хочу проверить доступность: экспресс-мойка + дезинфекция 190 ₪ / 3 кондиционера за 490 ₪. Можно отправить фото и адрес?",
  en: "Hello, I saw the AC cleaning offer in Tiberias and northern Israel. I would like to check availability: express cleaning + disinfection 190 ₪ / 3 AC units for 490 ₪. Can I send a photo and address?",
  fr: "Bonjour, j'ai vu l'offre de nettoyage de climatiseurs à Tibériade et dans le nord. Je voudrais vérifier la disponibilité : nettoyage express + désinfection 190 ₪ / 3 climatiseurs pour 490 ₪. Puis-je envoyer une photo et l'adresse ?"
};

const supportedLanguages = ["he", "ru", "en", "fr"];
const metaLocales = {
  he: "he_IL",
  ru: "ru_RU",
  en: "en_US",
  fr: "fr_FR"
};
const urlLanguage = new URLSearchParams(window.location.search).get("lang");
let currentLanguage = supportedLanguages.includes(urlLanguage) ? urlLanguage : "he";

const setMeta = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", value);
};

const setLocalizedText = (element, value) => {
  element.textContent = value;
};

const applyLanguage = (language) => {
  currentLanguage = supportedLanguages.includes(language) ? language : "he";
  const dictionary = translations[currentLanguage];
  const isHebrew = currentLanguage === "he";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = isHebrew ? "rtl" : "ltr";
  document.title = dictionary.title;
  setMeta('meta[name="description"]', dictionary.description);
  setMeta('meta[property="og:title"]', dictionary.title);
  setMeta('meta[property="og:description"]', dictionary.description);
  setMeta('meta[property="og:locale"]', metaLocales[currentLanguage]);
  setMeta('meta[name="twitter:title"]', dictionary.title);
  setMeta('meta[name="twitter:description"]', dictionary.description);

  document.querySelectorAll("[data-key]").forEach((element) => {
    const value = dictionary[element.dataset.key];
    if (value) setLocalizedText(element, value);
  });

  document.querySelectorAll("[data-placeholder-key]").forEach((element) => {
    const value = dictionary[element.dataset.placeholderKey];
    if (value) element.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(whatsappMessages[currentLanguage])}`;
  });

  if (availableSlots.length && bookingDateInput?.value) {
    renderSlotsForDate(bookingDateInput.value);
  }

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isActive = button.dataset.languageOption === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

document.querySelectorAll("[data-language-option]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.languageOption);
  });
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

const leadMessageLabels = {
  he: {
    title: "בקשה לניקוי וחיטוי יחידה פנימית של מזגן",
    price: "מחיר",
    name: "שם",
    phone: "טלפון",
    email: "email",
    address: "כתובת",
    area: "אזור",
    units: "מספר יחידות",
    slot: "מועד שנבחר",
    noSlot: "לא נבחר",
    workWindow: "חלון עבודה",
    hours: "שעות",
    notes: "הערות"
  },
  ru: {
    title: "Заявка на мойку и дезинфекцию внутреннего блока кондиционера",
    price: "Цена",
    name: "Имя",
    phone: "Телефон",
    email: "email",
    address: "Адрес",
    area: "Район",
    units: "Количество блоков",
    slot: "Выбранный слот",
    noSlot: "не выбран",
    workWindow: "Рабочий слот",
    hours: "часа",
    notes: "Комментарий"
  },
  en: {
    title: "Request for cleaning and disinfection of an indoor AC unit",
    price: "Price",
    name: "Name",
    phone: "Phone",
    email: "email",
    address: "Address",
    area: "Area",
    units: "Number of units",
    slot: "Selected slot",
    noSlot: "not selected",
    workWindow: "Work window",
    hours: "hours",
    notes: "Notes"
  },
  fr: {
    title: "Demande de nettoyage et désinfection d'une unité intérieure de climatisation",
    price: "Prix",
    name: "Nom",
    phone: "Téléphone",
    email: "email",
    address: "Adresse",
    area: "Zone",
    units: "Nombre d'unités",
    slot: "Créneau choisi",
    noSlot: "non choisi",
    workWindow: "Créneau de travail",
    hours: "heures",
    notes: "Notes"
  }
};

const emailSubjects = {
  he: "בקשה לניקוי מזגן בטבריה ובצפון",
  ru: "Заявка на мойку кондиционера в Тверии и на севере",
  en: "AC cleaning request in Tiberias and northern Israel",
  fr: "Demande de nettoyage de climatiseur à Tibériade et dans le nord"
};

const formatLeadMessage = (lead) => {
  const labels = leadMessageLabels[currentLanguage] || leadMessageLabels.he;
  return [
    labels.title,
    `${labels.price}: ${SETTINGS.priceLabel[currentLanguage] || SETTINGS.priceLabel.he}`,
    lead.name ? `${labels.name}: ${lead.name}` : "",
    lead.phone ? `${labels.phone}: ${lead.phone}` : "",
    lead.email ? `${labels.email}: ${lead.email}` : "",
    lead.address ? `${labels.address}: ${lead.address}` : "",
    lead.area ? `${labels.area}: ${lead.area}` : "",
    lead.units ? `${labels.units}: ${lead.units}` : "",
    lead.preferredDateTime ? `${labels.slot}: ${lead.bookingDate} ${lead.bookingSlotLabel || lead.preferredDateTime}` : `${labels.slot}: ${labels.noSlot}`,
    `${labels.workWindow}: ${SETTINGS.bookingHours} ${labels.hours}`,
    lead.notes ? `${labels.notes}: ${lead.notes}` : ""
  ].filter(Boolean).join("\n");
};

const openFallbackChannel = (lead, message) => {
  if (lead.contactPreference === "email" && lead.email && SETTINGS.ownerEmail) {
    const subject = encodeURIComponent(emailSubjects[currentLanguage] || emailSubjects.he);
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
