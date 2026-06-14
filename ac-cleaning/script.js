const SETTINGS = {
  googleScriptUrl: "",
  ownerEmail: "tib778877@gmail.com",
  whatsappNumber: "972533613100",
  phoneDisplay: "053 361 3100",
  priceLabel: {
    he: "ללא פירוק 200-350 ₪ / עמוק + חיטוי 400-500 ₪",
    ru: "без разборки 200-350 ₪ / глубокая с дезинфекцией 400-500 ₪"
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
    title: "ניקוי מזגן בקיסריה וטבריה | שטיפת יחידה פנימית וחיטוי | 053 361 3100",
    description: "ניקוי מזגנים בקיסריה והיישובים סביב עד 15 ק״מ, וגם בטבריה: ניקוי ללא פירוק מ-200 ₪ וניקוי עמוק עם פירוק וחיטוי 400-500 ₪. WhatsApp מהיר.",
    brandTitle: "מים ושמש",
    brandSubtitle: "ניקוי מזגנים",
    navService: "השירות",
    navBooking: "הזמנה",
    navFaq: "שאלות",
    languageButton: "Русский",
    heroEyebrow: "קיסריה +15 ק״מ · טבריה · זמינות מהירה היום",
    heroTitle: "ניקוי מזגנים היום בקיסריה, בטבריה והסביבה",
    heroLead: "יש ריח מהמזגן או זרימת אוויר חלשה? ניקוי ללא פירוק מ-200 ₪, או ניקוי עמוק עם פירוק וחיטוי 400-500 ₪. שלחו WhatsApp ונבדוק זמינות מיידית.",
    todayOfferTitle: "מבצע מהיר להיום: ניקוי ללא פירוק מ-200 ₪",
    todayOfferText: "מתאים למזגן עם ריח, אבק או קירור חלש. מענה מהיר ב-WhatsApp.",
    bookButton: "בדיקת זמינות עכשיו",
    bookButtonShort: "זמינות עכשיו",
    priceNote: "ללא פירוק 200-350 ₪",
    timeNote: "חלון עבודה 3 שעות",
    areaNote: "קיסריה +15 ק״מ · טבריה",
    trustCleanTitle: "שטיפה פנימית",
    trustCleanText: "מאייד, פילטרים וניקוז",
    trustDisinfectionTitle: "עמוק + חיטוי",
    trustDisinfectionText: "400-500 ₪ לפי גישה ומצב",
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
    leadEyebrow: "תיאום מהיר",
    leadTitle: "רוצים ניקוי היום? השאירו טלפון וכתובת, ונבדוק זמינות מיידית",
    leadText: "ניקוי ללא פירוק: 200-350 ₪. ניקוי עמוק עם פירוק וחיטוי: 400-500 ₪. לאחר שליחת הפרטים נפתחת הודעת WhatsApp מוכנה כדי שנוכל לענות מהר.",
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
    successFallback: "הפרטים מוכנים לשליחה. המחיר יאושר לפי סוג הניקוי: ללא פירוק 200-350 ₪ או עמוק + חיטוי 400-500 ₪.",
    errorMessage: "לא הצלחנו לשלוח לשרת Google. אפשר לשלוח את הפרטים ב-WhatsApp.",
    emailRequired: "בחרת email, לכן צריך למלא כתובת email.",
    areaTiberias: "טבריה",
    areaCaesarea: "קיסריה",
    areaOrAkiva: "אור עקיבא",
    areaHadera: "חדרה",
    areaBinyamina: "בנימינה-גבעת עדה",
    areaZichron: "זכרון יעקב",
    areaPardesHanna: "פרדס חנה-כרכור",
    areaJisrFureidis: "ג׳סר א-זרקא / פוריידיס",
    areaSdotBeitHanania: "שדות ים / בית חנניה",
    areaKinneret: "סובב כנרת",
    areaNof: "נוף הגליל",
    areaSafed: "צפת",
    areaBeitShean: "בית שאן",
    areaOther: "יישוב קרוב אחר",
    units1: "יחידה אחת",
    units2: "2 יחידות",
    units3: "3+ יחידות",
    areaEyebrow: "אזור השירות",
    areaTitle: "ניקוי מזגנים בקיסריה וביישובים סביב עד 15 ק״מ",
    areaText: "העבודה מתאימה למזגנים עיליים בדירות, יחידות אירוח, קליניקות ועסקים קטנים. אזור קיסריה: קיסריה, אור עקיבא, חדרה, בנימינה-גבעת עדה, זכרון יעקב, פרדס חנה-כרכור, ג׳סר א-זרקא, פוריידיס, בית חנניה, מעגן מיכאל ושדות ים. בנוסף אפשר לתאם גם בטבריה, לפי זמינות.",
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
    faq3Answer: "ניקוי ללא פירוק מתחיל מ-200 ₪. ניקוי עמוק עם פירוק וחיטוי עולה בדרך כלל 400-500 ₪. המחיר הסופי מאושר לפי מספר היחידות, גישה ומיקום.",
    faq4Question: "אפשר לשלוח תמונה ב-WhatsApp?",
    faq4Answer: "כן. אחרי שליחת הטופס נפתחת הודעת WhatsApp מוכנה עם הפרטים, ואפשר לצרף אליה תמונה של המזגן.",
    footerTitle: "מים ושמש - ניקוי מזגנים",
    footerText: "ניקוי יחידה פנימית, שטיפה וחיטוי באזור קיסריה, היישובים הקרובים וטבריה."
  },
  ru: {
    title: "Мойка кондиционера в Кейсарии и Тверии | Чистка внутреннего блока | 053 361 3100",
    description: "Мойка кондиционеров в Кейсарии, городах до 15 км от Кейсарии и в Тверии: без разборки от 200 ₪, глубокая мойка с разборкой и дезинфекцией 400-500 ₪. WhatsApp.",
    brandTitle: "Маим ве-Шемеш",
    brandSubtitle: "Мойка кондиционеров",
    navService: "Услуга",
    navBooking: "Заявка",
    navFaq: "Вопросы",
    languageButton: "עברית",
    heroEyebrow: "г. Кейсария +15 км · Тверия · быстрая доступность сегодня",
    heroTitle: "Мойка кондиционеров сегодня в Кейсарии, Тверии и рядом",
    heroLead: "Есть запах из кондиционера или слабый поток воздуха? Простая мойка без разборки от 200 ₪, глубокая мойка с разборкой и дезинфекцией 400-500 ₪. Напишите в WhatsApp, проверим ближайшее время.",
    todayOfferTitle: "Быстрое предложение на сегодня: мойка без разборки от 200 ₪",
    todayOfferText: "Подходит, если есть запах, пыль или слабое охлаждение. Быстрый ответ в WhatsApp.",
    bookButton: "Проверить время сейчас",
    bookButtonShort: "Проверить время",
    priceNote: "без разборки 200-350 ₪",
    timeNote: "3 часа рабочего времени",
    areaNote: "г. Кейсария +15 км · Тверия",
    trustCleanTitle: "Внутренняя мойка",
    trustCleanText: "испаритель, фильтры и дренаж",
    trustDisinfectionTitle: "Глубокая + дезинфекция",
    trustDisinfectionText: "400-500 ₪ по доступу и состоянию",
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
    leadEyebrow: "Быстрая заявка",
    leadTitle: "Хотите чистку сегодня? Оставьте телефон и адрес, проверим доступность сразу",
    leadText: "Мойка без разборки: 200-350 ₪. Глубокая мойка с разборкой и дезинфекцией: 400-500 ₪. После отправки откроется готовое сообщение WhatsApp, чтобы мастер мог ответить быстро.",
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
    successFallback: "Данные готовы к отправке. Цена подтверждается по типу чистки: без разборки 200-350 ₪ или глубокая + дезинфекция 400-500 ₪.",
    errorMessage: "Не удалось отправить на сервер Google. Можно отправить данные в WhatsApp.",
    emailRequired: "Вы выбрали email, поэтому нужно заполнить адрес email.",
    areaTiberias: "Тверия",
    areaCaesarea: "Кейсария",
    areaOrAkiva: "Ор-Акива",
    areaHadera: "Хадера",
    areaBinyamina: "Биньямина-Гиват-Ада",
    areaZichron: "Зихрон-Яаков",
    areaPardesHanna: "Пардес-Хана-Каркур",
    areaJisrFureidis: "Джиср-аз-Зарка / Фурейдис",
    areaSdotBeitHanania: "Сдот-Ям / Бейт-Ханания",
    areaKinneret: "вокруг Кинерета",
    areaNof: "Ноф-ха-Галиль",
    areaSafed: "Цфат",
    areaBeitShean: "Бейт-Шеан",
    areaOther: "другой близкий поселок",
    units1: "1 блок",
    units2: "2 блока",
    units3: "3+ блока",
    areaEyebrow: "Зона обслуживания",
    areaTitle: "Мойка кондиционеров в г. Кейсария и городах вокруг до 15 км",
    areaText: "Услуга подходит для настенных кондиционеров в квартирах, гостевых юнитах, кабинетах и небольших бизнесах. Зона выезда вокруг г. Кейсария: Ор-Акива, Хадера, Биньямина-Гиват-Ада, Зихрон-Яаков, Пардес-Хана-Каркур, Джиср-аз-Зарка, Фурейдис, Бейт-Ханания, Мааган-Михаэль и Сдот-Ям. Также можно согласовать выезд в Тверии.",
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
    faq3Answer: "Мойка без разборки начинается от 200 ₪. Глубокая мойка с разборкой и дезинфекцией обычно стоит 400-500 ₪. Итог подтверждается по количеству блоков, доступу и адресу.",
    faq4Question: "Можно отправить фото в WhatsApp?",
    faq4Answer: "Да. После формы откроется готовое сообщение WhatsApp, к нему можно прикрепить фото кондиционера.",
    footerTitle: "Маим ве-Шемеш - мойка кондиционеров",
    footerText: "Чистка внутреннего блока, промывка и дезинфекция в районе Кейсарии, ближайших городов и Тверии."
  }
};

const whatsappMessages = {
  he: "שלום, ראיתי את המבצע לניקוי מזגנים בקיסריה או בטבריה. אני רוצה לבדוק זמינות להיום/מחר. ניקוי ללא פירוק 200-350 ₪ או ניקוי עמוק עם פירוק וחיטוי 400-500 ₪.",
  ru: "Здравствуйте, увидел рекламу мойки кондиционеров в Кейсарии или Тверии. Хочу проверить доступность на сегодня/завтра. Без разборки 200-350 ₪ или глубокая с разборкой и дезинфекцией 400-500 ₪."
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
  setMeta('meta[property="og:title"]', isHebrew ? "ניקוי מזגן בקיסריה וטבריה | שטיפת יחידה פנימית וחיטוי" : "Мойка кондиционера в Кейсарии и Тверии | Чистка внутреннего блока");
  setMeta('meta[property="og:description"]', isHebrew ? "ניקוי מזגנים בקיסריה והיישובים סביב עד 15 ק״מ, וגם בטבריה: ללא פירוק מ-200 ₪ או ניקוי עמוק עם חיטוי 400-500 ₪." : "Мойка кондиционеров в Кейсарии, городах до 15 км и Тверии: без разборки от 200 ₪ или глубокая с дезинфекцией 400-500 ₪.");
  setMeta('meta[property="og:locale"]', isHebrew ? "he_IL" : "ru_RU");
  setMeta('meta[name="twitter:title"]', isHebrew ? "ניקוי מזגן בקיסריה וטבריה | שטיפת יחידה פנימית וחיטוי" : "Мойка кондиционера в Кейсарии и Тверии | Чистка внутреннего блока");
  setMeta('meta[name="twitter:description"]', isHebrew ? "ניקוי מזגנים בקיסריה והיישובים סביב עד 15 ק״מ, וגם בטבריה: ללא פירוק מ-200 ₪ או ניקוי עמוק עם חיטוי 400-500 ₪." : "Мойка кондиционеров в Кейсарии, городах до 15 км и Тверии: без разборки от 200 ₪ или глубокая чистка 400-500 ₪.");

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
    const subject = encodeURIComponent(currentLanguage === "he" ? "בקשה לניקוי מזגן בקיסריה או טבריה" : "Заявка на мойку кондиционера в Кейсарии или Тверии");
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
