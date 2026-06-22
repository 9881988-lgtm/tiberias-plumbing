const SETTINGS = {
  googleScriptUrl: "",
  ownerEmail: "",
  whatsappNumber: "972533613100",
  phoneDisplay: "053 361 3100",
  priceLabel: "החל מ-2,200 ₪ · קוד שמש2200: 100 ₪ הנחה",
  bookingHours: 3,
  slotDaysAhead: 21,
  workingDays: [0, 1, 2, 3, 4],
  dailySlotStarts: ["09:00", "12:00", "15:00"],
  serviceName: {
    he: "מכירה והתקנה של דוד שמש",
    ru: "Продажа и установка солнечного бойлера"
  }
};

const translations = {
  he: {
    title: "דודי שמש בטבריה | מכירה והתקנה מ-2,200 ₪ | 053 361 3100",
    description: "מכירה והתקנה של דודי שמש בטבריה: דוד שמש, קולטים, חיבורי מים ובדיקת מערכת. מחיר החל מ-2,200 ₪. קוד שמש2200 נותן 100 ₪ הנחה.",
    brandTitle: "מים ושמש",
    brandSubtitle: "דודי שמש",
    navService: "השירות",
    navBooking: "הזמנה",
    navFaq: "שאלות",
    languageButton: "Русский",
    heroEyebrow: "טבריה · מכירה והתקנה",
    heroTitle: "דוד שמש חדש לבית, כולל התקנה מסודרת",
    heroLead: "אספקה והתקנה של דודי שמש וקולטים, חיבורי מים ובדיקת מערכת. מתאים לדירות, בתים פרטיים ויחידות אירוח בטבריה.",
    bookButton: "לקבלת הצעת מחיר",
    bookButtonShort: "להצעת מחיר",
    priceNote: "החל מ-2,200 ₪ · קוד שמש2200: 100 ₪ הנחה",
    timeNote: "חלון עבודה 3 שעות",
    areaNote: "טבריה בלבד",
    trustCleanTitle: "דוד וקולטים",
    trustCleanText: "התאמה לפי נפח וגג",
    trustDisinfectionTitle: "התקנה וחיבורים",
    trustDisinfectionText: "מים, קולטים ובדיקת מערכת",
    trustHoursTitle: "א-ה 09:00-18:00",
    trustHoursText: "לפי זמינות ביומן",
    serviceEyebrow: "מה מקבלים",
    serviceTitle: "פתרון מלא לדוד שמש חדש, מהבדיקה עד מים חמים",
    serviceLead: "לפני הצעת המחיר בודקים את נפח הדוד הדרוש, מצב הגג, גישה לקולטים ותשתית המים. כך אפשר לתת מחיר מסודר ולתאם התקנה בלי הפתעות מיותרות.",
    featureUnitTitle: "התאמת דוד",
    featureUnitText: "בחירת נפח הדוד לפי מספר הדיירים, שימוש יומי ותנאי הגג, כולל המלצה לקולטים מתאימים.",
    featureWashTitle: "התקנת קולטים",
    featureWashText: "הצבת קולטים בכיוון נכון ככל האפשר, חיבור למערכת ובדיקה שהזרימה תקינה.",
    featureDisinfectTitle: "בדיקה וסיום",
    featureDisinfectText: "בדיקת חיבורים, נזילות, ברזים וניקיון אזור העבודה לפני מסירת המערכת ללקוח.",
    leadEyebrow: "תיאום מהיר",
    leadTitle: "השאירו כתובת וטלפון, ונשריין חלון עבודה של 3 שעות",
    leadText: "מחיר דוד שמש מתחיל מ-2,200 ₪. קוד שמש2200 נותן 100 ₪ הנחה. אחרי שליחת הפרטים נפתחת הודעת WhatsApp מוכנה להמשך תיאום.",
    leadHighlight1: "חלון עבודה 3 שעות",
    leadHighlight2: "WhatsApp או email",
    leadHighlight3: "א-ה 09:00-18:00",
    fieldName: "שם",
    fieldPhone: "טלפון",
    fieldAddress: "כתובת מלאה",
    fieldArea: "אזור",
    fieldUnits: "סוג הבקשה",
    fieldBookingDate: "בחרו תאריך",
    fieldBookingTime: "בחרו שעה",
    fieldEmail: "email לאישור מחיר",
    fieldContact: "איך נוח לקבל תשובה?",
    contactEither: "מה שיותר מהיר",
    fieldNotes: "הערות",
    notesPlaceholder: "נפח דוד רצוי, קומה, גישה לגג, דוד קיים או תמונה ב-WhatsApp",
    slotLoading: "טוען שעות פנויות...",
    slotUnavailable: "אין שעות פנויות בתאריך הזה",
    slotHelper: "כל מועד שומר 3 שעות עבודה. לאחר שליחת הטופס המועד נבדק ונשמר ביומן.",
    slotLive: "השעות מוצגות לפי היומן.",
    slotFallback: "השעות זמינות לתצוגה. לאחר חיבור השרת הן ייבדקו מול היומן.",
    slotRequired: "בחרו תאריך ושעה פנויים.",
    submitButton: "שליחת בקשה",
    submitWorking: "שולח...",
    successWithGoogle: "הבקשה נשלחה והמועד נשלח לשמירה ביומן. מחיר התחלתי מאושר: החל מ-2,200 ₪ לדוד שמש. קוד שמש2200 נותן 100 ₪ הנחה.",
    successFallback: "הפרטים מוכנים לשליחה. מחיר התחלתי מאושר: החל מ-2,200 ₪ לדוד שמש. קוד שמש2200 נותן 100 ₪ הנחה.",
    errorMessage: "לא הצלחנו לשלוח לשרת Google. אפשר לשלוח את הפרטים ב-WhatsApp.",
    emailRequired: "בחרת email, לכן צריך למלא כתובת email.",
    areaTiberias: "טבריה",
    units1: "דוד שמש חדש",
    units2: "דוד וקולטים",
    units3: "בדיקה והצעת מחיר",
    areaEyebrow: "אזור השירות",
    areaTitle: "דודי שמש בטבריה",
    areaText: "העבודה מתאימה לבתים פרטיים, דירות, יחידות אירוח ועסקים קטנים בטבריה.",
    contactTitle: "פרטי קשר",
    copyButton: "העתקת המספר",
    copiedButton: "המספר הועתק",
    faqEyebrow: "שאלות",
    faqTitle: "מה כדאי לדעת לפני התיאום",
    faq1Question: "מה כולל התקנת דוד שמש?",
    faq1Answer: "אספקת דוד מתאים, הצבה וחיבור, בדיקת קולטים, בדיקת נזילות והפעלת מערכת לפי מצב התשתית במקום.",
    faq2Question: "כמה זמן מוקצה להזמנה?",
    faq2Answer: "לכל בקשה מוקצות 3 שעות עבודה ביומן, כולל זמן בדיקה, הגעה ותיאום המשך עבודה לפי תנאי הגג.",
    faq3Question: "האם המחיר קבוע?",
    faq3Answer: "המחיר מתחיל מ-2,200 ₪ לדוד שמש. קוד שמש2200 נותן 100 ₪ הנחה. המחיר הסופי תלוי בנפח, קולטים, גישה לגג ומצב חיבורי המים.",
    faq4Question: "אפשר לשלוח תמונה ב-WhatsApp?",
    faq4Answer: "כן. אחרי שליחת הטופס נפתחת הודעת WhatsApp מוכנה, ואפשר לצרף תמונה של הגג או הדוד הקיים.",
    footerTitle: "מים ושמש - דודי שמש",
    footerText: "מכירה והתקנה של דודי שמש בטבריה."
  },
  ru: {
    title: "Солнечные бойлеры в Тверии | Продажа и установка от 2,200 ₪ | 053 361 3100",
    description: "Продажа и установка солнечных бойлеров в Тверии: бойлер, коллекторы, водяные подключения и проверка системы. Цена от 2,200 ₪. Код שמש2200 дает скидку 100 ₪.",
    brandTitle: "Маим ве-Шемеш",
    brandSubtitle: "Солнечные бойлеры",
    navService: "Услуга",
    navBooking: "Заявка",
    navFaq: "Вопросы",
    languageButton: "עברית",
    heroEyebrow: "Тверия · продажа и установка",
    heroTitle: "Новый солнечный бойлер для дома с аккуратной установкой",
    heroLead: "Поставка и установка солнечных бойлеров и коллекторов, подключение воды и проверка системы. Для квартир, частных домов и гостевых юнитов в Тверии.",
    bookButton: "Получить цену",
    bookButtonShort: "Цена",
    priceNote: "от 2,200 ₪ · код שמש2200: скидка 100 ₪",
    timeNote: "3 часа рабочего времени",
    areaNote: "Тверия",
    trustCleanTitle: "Бойлер и коллекторы",
    trustCleanText: "подбор по объему и крыше",
    trustDisinfectionTitle: "Установка и подключения",
    trustDisinfectionText: "вода, коллекторы, проверка",
    trustHoursTitle: "Вс-Чт 09:00-18:00",
    trustHoursText: "по свободным слотам календаря",
    serviceEyebrow: "Что входит",
    serviceTitle: "Полное решение для нового солнечного бойлера: от проверки до горячей воды",
    serviceLead: "Перед финальной ценой проверяются нужный объем бойлера, состояние крыши, доступ к коллекторам и водяная инфраструктура. Так можно дать понятную цену и согласовать установку без лишних сюрпризов.",
    featureUnitTitle: "Подбор бойлера",
    featureUnitText: "Выбор объема по количеству жильцов, ежедневному расходу и условиям крыши, с рекомендацией по коллекторам.",
    featureWashTitle: "Установка коллекторов",
    featureWashText: "Размещение коллекторов в подходящем направлении, подключение к системе и проверка нормального потока.",
    featureDisinfectTitle: "Проверка и завершение",
    featureDisinfectText: "Проверка соединений, протечек, кранов и уборка рабочей зоны перед передачей системы клиенту.",
    leadEyebrow: "Быстрая заявка",
    leadTitle: "Оставьте адрес и телефон, а мы зарезервируем 3-часовой рабочий слот",
    leadText: "Цена солнечного бойлера начинается от 2,200 ₪. Код שמש2200 дает скидку 100 ₪. После отправки откроется готовое сообщение WhatsApp для дальнейшего согласования.",
    leadHighlight1: "3-часовой слот",
    leadHighlight2: "WhatsApp или email",
    leadHighlight3: "Вс-Чт 09:00-18:00",
    fieldName: "Имя",
    fieldPhone: "Телефон",
    fieldAddress: "Полный адрес",
    fieldArea: "Район",
    fieldUnits: "Тип заявки",
    fieldBookingDate: "Выберите дату",
    fieldBookingTime: "Выберите время",
    fieldEmail: "email для подтверждения цены",
    fieldContact: "Как удобнее получить ответ?",
    contactEither: "как быстрее",
    fieldNotes: "Комментарий",
    notesPlaceholder: "желаемый объем бойлера, этаж, доступ на крышу, старый бойлер или фото в WhatsApp",
    slotLoading: "Загружаю свободное время...",
    slotUnavailable: "На эту дату свободных слотов нет",
    slotHelper: "Каждый слот резервирует 3 часа работы. После отправки форма проверит время и передаст бронь в календарь.",
    slotLive: "Время показано по календарю.",
    slotFallback: "Слоты показаны для предпросмотра. После подключения backend они будут проверяться по календарю.",
    slotRequired: "Выберите свободную дату и время.",
    submitButton: "Отправить заявку",
    submitWorking: "Отправляю...",
    successWithGoogle: "Заявка отправлена, выбранный слот передан на бронирование в календарь. Стартовая цена подтверждена: от 2,200 ₪ за солнечный бойлер. Код שמש2200 дает скидку 100 ₪.",
    successFallback: "Данные готовы к отправке. Стартовая цена подтверждена: от 2,200 ₪ за солнечный бойлер. Код שמש2200 дает скидку 100 ₪.",
    errorMessage: "Не удалось отправить на сервер Google. Можно отправить данные в WhatsApp.",
    emailRequired: "Вы выбрали email, поэтому нужно заполнить адрес email.",
    areaTiberias: "Тверия",
    units1: "новый солнечный бойлер",
    units2: "бойлер и коллекторы",
    units3: "проверка и расчет цены",
    areaEyebrow: "Зона обслуживания",
    areaTitle: "Солнечные бойлеры в Тверии",
    areaText: "Работа подходит для частных домов, квартир, гостевых юнитов и небольших бизнесов в Тверии.",
    contactTitle: "Контакты",
    copyButton: "Скопировать номер",
    copiedButton: "Номер скопирован",
    faqEyebrow: "Вопросы",
    faqTitle: "Что знать перед заявкой",
    faq1Question: "Что входит в установку солнечного бойлера?",
    faq1Answer: "Поставка подходящего бойлера, размещение и подключение, проверка коллекторов, проверка протечек и запуск системы по состоянию инфраструктуры на месте.",
    faq2Question: "Сколько времени резервируется?",
    faq2Answer: "На каждую заявку выделяется 3 часа в календаре, включая проверку, выезд и согласование дальнейшей работы по условиям крыши.",
    faq3Question: "Цена фиксированная?",
    faq3Answer: "Цена начинается от 2,200 ₪ за солнечный бойлер. Код שמש2200 дает скидку 100 ₪. Финальная цена зависит от объема, коллекторов, доступа на крышу и состояния водяных подключений.",
    faq4Question: "Можно отправить фото в WhatsApp?",
    faq4Answer: "Да. После формы откроется готовое сообщение WhatsApp, к нему можно прикрепить фото крыши или старого бойлера.",
    footerTitle: "Маим ве-Шемеш - солнечные бойлеры",
    footerText: "Продажа и установка солнечных бойлеров в Тверии."
  }
};

const whatsappMessages = {
  he: "שלום, אני רוצה לקבל הצעת מחיר לדוד שמש בטבריה. המחיר מתחיל מ-2,200 ₪. קוד שמש2200 נותן 100 ₪ הנחה.",
  ru: "Здравствуйте, хочу получить цену на солнечный бойлер в Тверии. Цена начинается от 2,200 ₪. Код שמש2200 дает скидку 100 ₪."
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
  setMeta('meta[property="og:title"]', isHebrew ? "דודי שמש בטבריה | מכירה והתקנה מ-2,200 ₪" : "Солнечные бойлеры в Тверии | Продажа и установка от 2,200 ₪");
  setMeta('meta[property="og:description"]', isHebrew ? "מכירה, התקנה וחיבור דודי שמש בטבריה. מחיר החל מ-2,200 ₪. קוד שמש2200: 100 ₪ הנחה." : "Продажа и установка солнечных бойлеров в Тверии. Цена от 2,200 ₪. Код שמש2200: скидка 100 ₪.");
  setMeta('meta[property="og:locale"]', isHebrew ? "he_IL" : "ru_RU");
  setMeta('meta[name="twitter:title"]', isHebrew ? "דודי שמש בטבריה | מכירה והתקנה מ-2,200 ₪" : "Солнечные бойлеры в Тверии | Продажа и установка от 2,200 ₪");
  setMeta('meta[name="twitter:description"]', isHebrew ? "מכירה והתקנה של דודי שמש בטבריה. מחיר החל מ-2,200 ₪. קוד שמש2200: 100 ₪ הנחה." : "Продажа и установка солнечных бойлеров в Тверии. Цена от 2,200 ₪. Код שמש2200: скидка 100 ₪.");

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

    SETTINGS.dailySlotStarts.forEach((time) => {
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

    const callbackName = `solarBoilerSlots_${Date.now()}_${Math.random().toString(16).slice(2)}`;
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
    priceLabel: SETTINGS.priceLabel,
    bookingHours: SETTINGS.bookingHours,
    serviceName: SETTINGS.serviceName[currentLanguage],
    sourceUrl: window.location.href,
    submittedAt: new Date().toISOString()
  };
};

const formatLeadMessage = (lead) => {
  if (currentLanguage === "he") {
    return [
      "בקשה להצעת מחיר לדוד שמש",
      `מחיר התחלתי: ${SETTINGS.priceLabel}`,
      `שם: ${lead.name}`,
      `טלפון: ${lead.phone}`,
      lead.email ? `email: ${lead.email}` : "",
      `כתובת: ${lead.address}`,
      `אזור: ${lead.area}`,
      `סוג הבקשה: ${lead.units}`,
      lead.preferredDateTime ? `מועד שנבחר: ${lead.bookingDate} ${lead.bookingSlotLabel || lead.preferredDateTime}` : "מועד שנבחר: לא נבחר",
      `חלון עבודה: ${SETTINGS.bookingHours} שעות`,
      lead.notes ? `הערות: ${lead.notes}` : ""
    ].filter(Boolean).join("\n");
  }

  return [
    "Заявка на расчет солнечного бойлера",
    `Стартовая цена: ${SETTINGS.priceLabel}`,
    `Имя: ${lead.name}`,
    `Телефон: ${lead.phone}`,
    lead.email ? `email: ${lead.email}` : "",
    `Адрес: ${lead.address}`,
    `Район: ${lead.area}`,
    `Тип заявки: ${lead.units}`,
    lead.preferredDateTime ? `Выбранный слот: ${lead.bookingDate} ${lead.bookingSlotLabel || lead.preferredDateTime}` : "Выбранный слот: не выбран",
    `Рабочий слот: ${SETTINGS.bookingHours} часа`,
    lead.notes ? `Комментарий: ${lead.notes}` : ""
  ].filter(Boolean).join("\n");
};

const openFallbackChannel = (lead, message) => {
  if (lead.contactPreference === "email" && SETTINGS.ownerEmail) {
    const subject = encodeURIComponent(currentLanguage === "he" ? "בקשה לדוד שמש בטבריה" : "Заявка на солнечный бойлер в Тверии");
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

  if (!lead.preferredDateTime) {
    setStatus(dictionary.slotRequired, "error");
    bookingDateInput?.focus();
    return;
  }

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
