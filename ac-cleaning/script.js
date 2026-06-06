const SETTINGS = {
  googleScriptUrl: "",
  ownerEmail: "tib778877@gmail.com",
  whatsappNumber: "972533613100",
  phoneDisplay: "053 361 3100",
  priceLabels: {
    he: "ניקוי ללא פירוק: מ-200 ₪, בדרך כלל 200-350 ₪; ניקוי עמוק עם פירוק וחיטוי: 400-500 ₪",
    ru: "мойка без разборки: от 200 ₪, обычно 200-350 ₪; глубокая мойка с разборкой и дезинфекцией: 400-500 ₪"
  },
  packagePrices: {
    basic: { he: "מ-200 ₪, בדרך כלל 200-350 ₪", ru: "от 200 ₪, обычно 200-350 ₪" },
    deep: { he: "400-500 ₪", ru: "400-500 ₪" }
  },
  bookingHours: 3,
  slotDaysAhead: 21,
  workingDays: [0, 1, 2, 3, 4, 5],
  slotStartsByDay: {
    0: ["08:00", "11:00", "14:00", "17:00"],
    1: ["08:00", "11:00", "14:00", "17:00"],
    2: ["08:00", "11:00", "14:00", "17:00"],
    3: ["08:00", "11:00", "14:00", "17:00"],
    4: ["08:00", "11:00", "14:00", "17:00"],
    5: ["08:00"]
  },
  serviceName: {
    he: "ניקוי יחידה פנימית של מזגן",
    ru: "Мойка внутреннего блока кондиционера"
  }
};

const translations = {
  he: {
    title: "ניקוי מזגן בטבריה מ-200 ₪ | שטיפת יחידה פנימית וחיטוי | 053 361 3100",
    description: "ניקוי יחידה פנימית של מזגן בטבריה והסביבה: ניקוי ללא פירוק מ-200 ₪, בדרך כלל 200-350 ₪, או ניקוי עמוק עם פירוק וחיטוי 400-500 ₪. שלחו תמונה ב-WhatsApp לקבלת מחיר מהיר.",
    brandTitle: "מים ושמש",
    brandSubtitle: "ניקוי מזגנים",
    navService: "השירות",
    navBooking: "הזמנה",
    navFaq: "שאלות",
    languageButton: "Русский",
    heroEyebrow: "טבריה והסביבה · מחיר פתיחה מ-200 ₪",
    heroTitle: "ריח מהמזגן? ניקוי מזגן מ-200 ₪ בטבריה",
    heroLead: "שלחו תמונה ב-WhatsApp וקבלו הערכת מחיר מהירה. ניקוי ללא פירוק או ניקוי עמוק עם פירוק וחיטוי לדירות, יחידות אירוח ועסקים באזור טבריה.",
    whatsappButton: "מחיר ב-WhatsApp",
    bookButton: "בחירת מועד באתר",
    bookButtonShort: "לתיאום",
    callButtonShort: "שיחה",
    priceNote: "ללא פירוק מ-200 ₪ · עמוק עם פירוק וחיטוי 400-500 ₪",
    photoNote: "שלחו תמונה וקבלו מחיר",
    timeNote: "חלון עבודה 3 שעות",
    areaNote: "טבריה וסובב כנרת",
    trustCleanTitle: "מחיר פתיחה מ-200 ₪",
    trustCleanText: "לניקוי פשוט ללא פירוק",
    trustDisinfectionTitle: "חיטוי במסלול העמוק",
    trustDisinfectionText: "עם פירוק וניקוי יסודי",
    trustHoursTitle: "א-ה 08:00-20:00 · ו 08:00-12:00",
    trustHoursText: "לפי זמינות ביומן",
    serviceEyebrow: "מה מקבלים",
    serviceTitle: "ניקוי שמטפל בלכלוך בתוך היחידה, לא רק בפילטר",
    serviceLead: "הצטברות אבק ולחות בתוך המזגן יכולה לגרום לריח לא נעים, ירידה בעוצמת הקירור וטפטוף. ניקוי מסודר עוזר להחזיר זרימת אוויר נקייה יותר.",
    featureUnitTitle: "פתיחת היחידה",
    featureUnitText: "בדיקת מצב הפילטרים והכנה לשטיפה. במסלול העמוק מתבצע פירוק זהיר עם הגנה על הקיר והסביבה.",
    featureWashTitle: "שטיפה עמוקה",
    featureWashText: "ניקוי אזור המאייד, מסילות האוויר והחלקים הנגישים שבהם מצטברים אבק, לחות וריחות.",
    featureDisinfectTitle: "חיטוי וסיום נקי",
    featureDisinfectText: "במסלול העמוק מתבצע חיטוי לאחר השטיפה, ניקוי אזור העבודה והפעלה קצרה לבדיקת זרימת אוויר תקינה.",
    leadEyebrow: "תיאום מהיר",
    leadTitle: "השאירו פרטים או שלחו WhatsApp, ונחזור עם מחיר וזמן פנוי",
    leadText: "ניקוי ללא פירוק מתחיל מ-200 ₪ ובדרך כלל 200-350 ₪. ניקוי עמוק עם פירוק וחיטוי 400-500 ₪. אפשר לבחור מועד באתר, או פשוט לשלוח תמונה ב-WhatsApp לקבלת מחיר מהיר.",
    leadHighlight1: "חלון עבודה 3 שעות",
    leadHighlight2: "WhatsApp או email",
    leadHighlight3: "א-ה 08:00-20:00 · ו 08:00-12:00",
    quickWhatsapp: "שלחו תמונה וקבלו מחיר",
    fieldName: "שם",
    fieldPhone: "טלפון",
    fieldAddress: "כתובת מלאה",
    fieldArea: "אזור",
    fieldUnits: "מספר יחידות",
    fieldServicePackage: "סוג ניקוי",
    serviceBasic: "ניקוי ללא פירוק - מ-200 ₪",
    serviceDeep: "ניקוי עמוק עם פירוק וחיטוי - 400-500 ₪",
    fieldBookingDate: "תאריך מועדף",
    fieldBookingTime: "שעה מועדפת",
    fieldEmail: "email לאישור מחיר",
    fieldContact: "איך נוח לקבל תשובה?",
    contactEither: "מה שיותר מהיר",
    fieldNotes: "הערות",
    notesPlaceholder: "קומה, גישה למזגן, ריח, טפטוף או תמונה ב-WhatsApp",
    slotLoading: "טוען שעות פנויות...",
    slotUnavailable: "אין שעות פנויות בתאריך הזה",
    slotHelper: "אפשר להשאיר ריק ולתאם זמן ב-WhatsApp. כל מועד שומר 3 שעות עבודה.",
    slotLive: "השעות מוצגות לפי היומן.",
    slotFallback: "השעות זמינות לתצוגה. לאחר חיבור השרת הן ייבדקו מול היומן.",
    slotRequired: "אפשר לשלוח גם בלי מועד, או לבחור תאריך ושעה פנויים.",
    submitButton: "שליחה ופתיחת WhatsApp",
    submitWorking: "שולח...",
    successWithGoogle: "הבקשה נשלחה והמועד נשלח לשמירה ביומן. טווח המחיר יאושר לפי סוג הניקוי שנבחר.",
    successFallback: "הפרטים מוכנים לשליחה. WhatsApp נפתח כדי לסיים את הפנייה ולקבל מחיר.",
    errorMessage: "לא הצלחנו לשלוח לשרת Google. אפשר לשלוח את הפרטים ב-WhatsApp.",
    emailRequired: "בחרת email, לכן צריך למלא כתובת email.",
    areaTiberias: "טבריה",
    areaKinneret: "סובב כנרת",
    areaNof: "נוף הגליל",
    areaSafed: "צפת",
    areaBeitShean: "בית שאן",
    areaOther: "יישוב קרוב אחר",
    units1: "יחידה אחת",
    units2: "2 יחידות",
    units3: "3+ יחידות",
    areaEyebrow: "אזור השירות",
    areaTitle: "ניקוי מזגנים בטבריה, סביב הכנרת והיישובים הקרובים",
    areaText: "העבודה מתאימה למזגנים עיליים בדירות, יחידות אירוח, קליניקות ועסקים קטנים. ניתן לתאם גם מחוץ לטבריה לפי מרחק וזמינות.",
    contactTitle: "פרטי קשר",
    copyButton: "העתקת המספר",
    copiedButton: "המספר הועתק",
    faqEyebrow: "שאלות",
    faqTitle: "מה כדאי לדעת לפני התיאום",
    faq1Question: "מה כולל ניקוי יחידה פנימית?",
    faq1Answer: "במסלול ללא פירוק מקבלים ניקוי ושטיפה של החלקים הנגישים. במסלול העמוק מקבלים פירוק זהיר, שטיפה יסודית וחיטוי.",
    faq2Question: "כמה זמן מוקצה להזמנה?",
    faq2Answer: "לכל בקשה מוקצות 3 שעות עבודה ביומן, כולל זמן עבודה מסודר ומרווח נסיעה באזור.",
    faq3Question: "מה המחיר ואיזה מסלול לבחור?",
    faq3Answer: "ניקוי ללא פירוק מתחיל מ-200 ₪ ובדרך כלל עולה 200-350 ₪. ניקוי עמוק עם פירוק וחיטוי עולה 400-500 ₪. המחיר הסופי מאושר לפי מספר היחידות, גישה ומיקום.",
    faq4Question: "אפשר לשלוח תמונה ב-WhatsApp?",
    faq4Answer: "כן. אחרי שליחת הטופס נפתחת הודעת WhatsApp מוכנה עם הפרטים, ואפשר לצרף אליה תמונה של המזגן.",
    footerTitle: "מים ושמש - ניקוי מזגנים",
    footerText: "ניקוי יחידה פנימית, שטיפה וחיטוי באזור טבריה."
  },
  ru: {
    title: "Мойка кондиционера в Тверии от 200 ₪ | Чистка внутреннего блока | 053 361 3100",
    description: "Мойка внутреннего блока кондиционера в Тверии и окрестностях: без разборки от 200 ₪, обычно 200-350 ₪, или глубокая мойка с разборкой и дезинфекцией 400-500 ₪. Отправьте фото в WhatsApp для быстрой цены.",
    brandTitle: "Маим ве-Шемеш",
    brandSubtitle: "Мойка кондиционеров",
    navService: "Услуга",
    navBooking: "Заявка",
    navFaq: "Вопросы",
    languageButton: "עברית",
    heroEyebrow: "Тверия и окрестности · старт от 200 ₪",
    heroTitle: "Запах из кондиционера? Мойка от 200 ₪ в Тверии",
    heroLead: "Отправьте фото в WhatsApp и получите быструю оценку цены. Мойка без разборки или глубокая мойка с разборкой и дезинфекцией для квартир, гостевых юнитов и бизнеса.",
    whatsappButton: "Цена в WhatsApp",
    bookButton: "Выбрать время на сайте",
    bookButtonShort: "Заявка",
    callButtonShort: "Позвонить",
    priceNote: "Без разборки от 200 ₪ · глубокая с разборкой 400-500 ₪",
    photoNote: "Отправьте фото и получите цену",
    timeNote: "3 часа рабочего времени",
    areaNote: "Тверия и Кинерет",
    trustCleanTitle: "Старт от 200 ₪",
    trustCleanText: "простая мойка без разборки",
    trustDisinfectionTitle: "Дезинфекция в глубокой мойке",
    trustDisinfectionText: "с разборкой и тщательной промывкой",
    trustHoursTitle: "Вс-Чт 08:00-20:00 · Пт 08:00-12:00",
    trustHoursText: "по свободным слотам календаря",
    serviceEyebrow: "Что входит",
    serviceTitle: "Чистка внутри блока, а не только фильтра",
    serviceLead: "Пыль и влажность внутри кондиционера могут давать запах, слабое охлаждение и протечки. Аккуратная мойка помогает вернуть более чистый поток воздуха.",
    featureUnitTitle: "Открытие блока",
    featureUnitText: "Проверка фильтров и подготовка к промывке. В глубоком варианте выполняется аккуратная разборка с защитой стены и зоны работы.",
    featureWashTitle: "Глубокая промывка",
    featureWashText: "Очистка зоны испарителя, воздушных каналов и доступных частей, где скапливаются пыль, влага и запахи.",
    featureDisinfectTitle: "Дезинфекция и чистый финал",
    featureDisinfectText: "В глубокой мойке выполняется дезинфекция после промывки, уборка зоны работы и короткий запуск для проверки потока воздуха.",
    leadEyebrow: "Быстрая заявка",
    leadTitle: "Оставьте данные или напишите в WhatsApp, и мы вернемся с ценой и временем",
    leadText: "Мойка без разборки начинается от 200 ₪ и обычно стоит 200-350 ₪. Глубокая мойка с разборкой и дезинфекцией 400-500 ₪. Можно выбрать время на сайте или просто отправить фото в WhatsApp.",
    leadHighlight1: "3-часовой слот",
    leadHighlight2: "WhatsApp или email",
    leadHighlight3: "Вс-Чт 08:00-20:00 · Пт 08:00-12:00",
    quickWhatsapp: "Отправить фото и получить цену",
    fieldName: "Имя",
    fieldPhone: "Телефон",
    fieldAddress: "Полный адрес",
    fieldArea: "Район",
    fieldUnits: "Количество блоков",
    fieldServicePackage: "Тип мойки",
    serviceBasic: "Мойка без разборки - от 200 ₪",
    serviceDeep: "Глубокая мойка с разборкой и дезинфекцией - 400-500 ₪",
    fieldBookingDate: "Желаемая дата",
    fieldBookingTime: "Желаемое время",
    fieldEmail: "email для подтверждения цены",
    fieldContact: "Как удобнее получить ответ?",
    contactEither: "как быстрее",
    fieldNotes: "Комментарий",
    notesPlaceholder: "этаж, доступ к кондиционеру, запах, протечка или фото в WhatsApp",
    slotLoading: "Загружаю свободное время...",
    slotUnavailable: "На эту дату свободных слотов нет",
    slotHelper: "Можно оставить пустым и согласовать время в WhatsApp. Каждый слот резервирует 3 часа работы.",
    slotLive: "Время показано по календарю.",
    slotFallback: "Слоты показаны для предпросмотра. После подключения backend они будут проверяться по календарю.",
    slotRequired: "Можно отправить без времени или выбрать свободный слот.",
    submitButton: "Отправить и открыть WhatsApp",
    submitWorking: "Отправляю...",
    successWithGoogle: "Заявка отправлена, выбранный слот передан на бронирование в календарь. Диапазон цены будет подтвержден по выбранному типу мойки.",
    successFallback: "Данные готовы к отправке. WhatsApp открыт, чтобы завершить обращение и получить цену.",
    errorMessage: "Не удалось отправить на сервер Google. Можно отправить данные в WhatsApp.",
    emailRequired: "Вы выбрали email, поэтому нужно заполнить адрес email.",
    areaTiberias: "Тверия",
    areaKinneret: "вокруг Кинерета",
    areaNof: "Ноф-ха-Галиль",
    areaSafed: "Цфат",
    areaBeitShean: "Бейт-Шеан",
    areaOther: "другой близкий поселок",
    units1: "1 блок",
    units2: "2 блока",
    units3: "3+ блока",
    areaEyebrow: "Зона обслуживания",
    areaTitle: "Мойка кондиционеров в Тверии, вокруг Кинерета и рядом",
    areaText: "Услуга подходит для настенных кондиционеров в квартирах, гостевых юнитах, кабинетах и небольших бизнесах. Выезд за пределы Тверии согласуется по расстоянию и доступности.",
    contactTitle: "Контакты",
    copyButton: "Скопировать номер",
    copiedButton: "Номер скопирован",
    faqEyebrow: "Вопросы",
    faqTitle: "Что знать перед заявкой",
    faq1Question: "Что входит в чистку внутреннего блока?",
    faq1Answer: "В варианте без разборки очищаются и промываются доступные части. В глубоком варианте добавляется аккуратная разборка, тщательная промывка и дезинфекция.",
    faq2Question: "Сколько времени резервируется?",
    faq2Answer: "На каждую заявку в календаре выделяется 3 часа, включая рабочее время и запас на дорогу по району.",
    faq3Question: "Какая цена и какой вариант выбрать?",
    faq3Answer: "Мойка без разборки начинается от 200 ₪ и обычно стоит 200-350 ₪. Глубокая мойка с разборкой и дезинфекцией стоит 400-500 ₪. Итог подтверждается по количеству блоков, доступу и адресу.",
    faq4Question: "Можно отправить фото в WhatsApp?",
    faq4Answer: "Да. После формы откроется готовое сообщение WhatsApp, к нему можно прикрепить фото кондиционера.",
    footerTitle: "Маим ве-Шемеш - мойка кондиционеров",
    footerText: "Чистка внутреннего блока, промывка и дезинфекция в районе Тверии."
  }
};

const whatsappMessages = {
  he: "שלום, אני רוצה מחיר לניקוי מזגן בטבריה. ראיתי מחיר: ניקוי ללא פירוק מ-200 ₪, בדרך כלל 200-350 ₪; ניקוי עמוק עם פירוק וחיטוי 400-500 ₪. אפשר לשלוח תמונה?",
  ru: "Здравствуйте, хочу узнать цену на мойку кондиционера в Тверии. Видел цену: без разборки от 200 ₪, обычно 200-350 ₪; глубокая мойка с разборкой и дезинфекцией 400-500 ₪. Можно отправить фото?"
};

let currentLanguage = new URLSearchParams(window.location.search).get("lang") === "ru" ? "ru" : "he";

const setMeta = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", value);
};

const setLocalizedText = (element, value) => {
  element.textContent = value;
};

const trackMarketingEvent = (eventName, parameters = {}) => {
  if (typeof window.fbq === "function") {
    window.fbq("track", eventName === "LeadFormSubmit" ? "Lead" : "Contact", {
      service: "ac_cleaning_tiberias",
      ...parameters
    });
    window.fbq("trackCustom", eventName, {
      service: "ac_cleaning_tiberias",
      ...parameters
    });
  }
};

const applyLanguage = (language) => {
  currentLanguage = language;
  const dictionary = translations[language];
  const isHebrew = language === "he";

  document.documentElement.lang = language;
  document.documentElement.dir = isHebrew ? "rtl" : "ltr";
  document.title = dictionary.title;
  setMeta('meta[name="description"]', dictionary.description);
  setMeta('meta[property="og:title"]', isHebrew ? "ניקוי מזגן בטבריה | שטיפת יחידה פנימית וחיטוי" : "Мойка кондиционера в Тверии | Чистка внутреннего блока");
  setMeta('meta[property="og:description"]', isHebrew ? "ניקוי מזגן בטבריה: ללא פירוק מ-200 ₪, בדרך כלל 200-350 ₪, או ניקוי עמוק עם פירוק וחיטוי 400-500 ₪." : "Мойка кондиционера в Тверии: без разборки от 200 ₪, обычно 200-350 ₪, или глубокая с разборкой и дезинфекцией 400-500 ₪.");
  setMeta('meta[property="og:locale"]', isHebrew ? "he_IL" : "ru_RU");
  setMeta('meta[name="twitter:title"]', isHebrew ? "ניקוי מזגן בטבריה | שטיפת יחידה פנימית וחיטוי" : "Мойка кондиционера в Тверии | Чистка внутреннего блока");
  setMeta('meta[name="twitter:description"]', isHebrew ? "ניקוי מזגן בטבריה: ללא פירוק מ-200 ₪, בדרך כלל 200-350 ₪, או עמוק עם פירוק וחיטוי 400-500 ₪." : "Мойка кондиционера в Тверии: без разборки от 200 ₪, обычно 200-350 ₪, или глубокая с разборкой и дезинфекцией 400-500 ₪.");

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

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.addEventListener("click", () => {
    trackMarketingEvent("LeadIntent", { channel: "whatsapp" });
  });
});

document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", () => {
    trackMarketingEvent("LeadIntent", { channel: "phone" });
  });
});

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener("click", () => {
    trackMarketingEvent("LeadIntent", { channel: "email" });
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
  const checkedPreference = leadForm.querySelector('input[name="contactPreference"]:checked');
  const preference = checkedPreference ? checkedPreference.value : "whatsapp";
  emailInput.required = preference === "email";
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

const getPriceLabel = (language = currentLanguage) => {
  return SETTINGS.priceLabels[language] || SETTINGS.priceLabels.he;
};

const getPackagePrice = (servicePackage, language = currentLanguage) => {
  return SETTINGS.packagePrices[servicePackage]?.[language] || "";
};

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
    if (!SETTINGS.workingDays.includes(day.getDay())) continue;

    const starts = SETTINGS.slotStartsByDay[day.getDay()] || [];
    starts.forEach((time) => {
      const [hours, minutes] = time.split(":").map(Number);
      const start = new Date(day);
      start.setHours(hours, minutes, 0, 0);
      if (start <= now) return;
      const end = addHours(start, SETTINGS.bookingHours);
      slots.push({
        start: formatLocalDateTime(start),
        end: formatLocalDateTime(end),
        date: formatLocalDate(start)
      });
    });
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
  const selectedService = leadForm?.querySelector('select[name="servicePackage"]')?.selectedOptions[0];
  return {
    name: String(data.get("name") || "").trim(),
    phone: String(data.get("phone") || "").trim(),
    email: String(data.get("email") || "").trim(),
    address: String(data.get("address") || "").trim(),
    area: String(data.get("area") || "").trim(),
    units: String(data.get("units") || "").trim(),
    servicePackage: String(data.get("servicePackage") || "").trim(),
    servicePackageLabel: selectedService ? selectedService.textContent.trim() : "",
    bookingDate: String(data.get("bookingDate") || "").trim(),
    bookingSlot: String(data.get("bookingSlot") || "").trim(),
    preferredDateTime: String(data.get("preferredDateTime") || data.get("bookingSlot") || "").trim(),
    bookingSlotLabel: selectedSlot ? selectedSlot.textContent.trim() : "",
    contactPreference: String(data.get("contactPreference") || "whatsapp").trim(),
    notes: String(data.get("notes") || "").trim(),
    language: currentLanguage,
    priceLabel: getPriceLabel(),
    bookingHours: SETTINGS.bookingHours,
    serviceName: SETTINGS.serviceName[currentLanguage],
    sourceUrl: window.location.href,
    submittedAt: new Date().toISOString()
  };
};

const formatLeadMessage = (lead) => {
  if (currentLanguage === "he") {
    return [
      "בקשה לניקוי יחידה פנימית של מזגן",
      `אפשרויות מחיר: ${getPriceLabel()}`,
      `שם: ${lead.name}`,
      `טלפון: ${lead.phone}`,
      lead.email ? `email: ${lead.email}` : "",
      `כתובת: ${lead.address}`,
      `אזור: ${lead.area}`,
      `מספר יחידות: ${lead.units}`,
      lead.servicePackageLabel ? `סוג ניקוי: ${lead.servicePackageLabel}` : "",
      lead.servicePackage ? `טווח מחיר למסלול: ${getPackagePrice(lead.servicePackage)}` : "",
      lead.preferredDateTime ? `מועד שנבחר: ${lead.bookingDate} ${lead.bookingSlotLabel || lead.preferredDateTime}` : "מועד שנבחר: לא נבחר",
      `חלון עבודה: ${SETTINGS.bookingHours} שעות`,
      lead.notes ? `הערות: ${lead.notes}` : ""
    ].filter(Boolean).join("\n");
  }

  return [
    "Заявка на мойку внутреннего блока кондиционера",
    `Варианты цены: ${getPriceLabel()}`,
    `Имя: ${lead.name}`,
    `Телефон: ${lead.phone}`,
    lead.email ? `email: ${lead.email}` : "",
    `Адрес: ${lead.address}`,
    `Район: ${lead.area}`,
    `Количество блоков: ${lead.units}`,
    lead.servicePackageLabel ? `Тип мойки: ${lead.servicePackageLabel}` : "",
    lead.servicePackage ? `Диапазон цены выбранного варианта: ${getPackagePrice(lead.servicePackage)}` : "",
    lead.preferredDateTime ? `Выбранный слот: ${lead.bookingDate} ${lead.bookingSlotLabel || lead.preferredDateTime}` : "Выбранный слот: не выбран",
    `Рабочий слот: ${SETTINGS.bookingHours} часа`,
    lead.notes ? `Комментарий: ${lead.notes}` : ""
  ].filter(Boolean).join("\n");
};

const openFallbackChannel = (lead, message) => {
  if (lead.contactPreference === "email" && SETTINGS.ownerEmail) {
    const subject = encodeURIComponent(currentLanguage === "he" ? "בקשה לניקוי מזגן בטבריה" : "Заявка на мойку кондиционера в Тверии");
    window.location.href = `mailto:${SETTINGS.ownerEmail}?subject=${subject}&body=${encodeURIComponent(message)}`;
    return;
  }

  window.open(`https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
};

leadForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  updateEmailRequirement();

  if (!leadForm.checkValidity()) {
    leadForm.reportValidity();
    return;
  }

  const lead = collectLead();
  const dictionary = translations[currentLanguage];

  if (lead.contactPreference === "email" && !lead.email) {
    setStatus(dictionary.emailRequired, "error");
    emailInput?.focus();
    return;
  }

  const submitButton = leadForm.querySelector('button[type="submit"]');
  const originalButtonText = submitButton?.textContent || "";
  const message = formatLeadMessage(lead);
  const shouldOpenWhatsapp = lead.contactPreference !== "email";
  let sentToGoogle = false;
  trackMarketingEvent("LeadFormSubmit", { channel: lead.contactPreference || "whatsapp" });

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
