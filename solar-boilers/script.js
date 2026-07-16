const SETTINGS = {
  googleScriptUrl: "",
  ownerEmail: "",
  whatsappNumber: "972533613100",
  phoneDisplay: "053 361 3100",
  priceLabel: {
    he: "החל מ-2,200 ₪ · קוד שמש2200: 100 ₪ הנחה",
    ru: "от 2,200 ₪ · код שמש2200: скидка 100 ₪",
    en: "from 2,200 ₪ · code שמש2200: 100 ₪ discount",
    fr: "à partir de 2 200 ₪ · code שמש2200 : remise de 100 ₪"
  },
  bookingHours: 3,
  slotDaysAhead: 21,
  workingDays: [0, 1, 2, 3, 4],
  dailySlotStarts: ["09:00", "12:00", "15:00"],
  serviceName: {
    he: "מכירה והתקנה של דוד שמש",
    ru: "Продажа и установка солнечного бойлера",
    en: "Solar boiler sale and installation",
    fr: "Vente et installation de chauffe-eau solaire"
  }
};

const translations = {
  he: {
    title: "דודי שמש בטבריה והצפון | התקנה מ-2,200 ₪ | 053 361 3100",
    description: "מכירה והתקנה של דודי שמש בטבריה, צפת, נוף הגליל, בית שאן ועמק הירדן. מחיר החל מ-2,200 ₪. קוד שמש2200 נותן 100 ₪ הנחה.",
    brandTitle: "מים ושמש",
    brandSubtitle: "דודי שמש",
    navService: "השירות",
    navBooking: "הזמנה",
    navFaq: "שאלות",
    languageButton: "Русский",
    heroEyebrow: "טבריה והצפון · מכירה והתקנה",
    heroTitle: "דוד שמש חדש לבית, כולל התקנה מסודרת",
    heroLead: "אספקה והתקנה של דודי שמש וקולטים, חיבורי מים ובדיקת מערכת בטבריה, צפת, נוף הגליל, בית שאן ועמק הירדן.",
    bookButton: "לקבלת הצעת מחיר",
    bookButtonShort: "להצעת מחיר",
    priceNote: "החל מ-2,200 ₪ · קוד שמש2200: 100 ₪ הנחה",
    timeNote: "חלון עבודה 3 שעות",
    areaNote: "טבריה · צפת · נוף הגליל · בית שאן · עמק הירדן",
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
    areaSafed: "צפת",
    areaNofHagalil: "נוף הגליל",
    areaBeitShean: "בית שאן",
    areaJordanValley: "עמק הירדן",
    units1: "דוד שמש חדש",
    units2: "דוד וקולטים",
    units3: "בדיקה והצעת מחיר",
    areaEyebrow: "אזור השירות",
    areaTitle: "דודי שמש בטבריה ובצפון",
    areaText: "שירות לבתים פרטיים, דירות, יחידות אירוח ועסקים קטנים בטבריה, צפת, נוף הגליל, בית שאן ויישובי עמק הירדן.",
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
    footerText: "מכירה והתקנה של דודי שמש בטבריה ובצפון ישראל."
  },
  ru: {
    title: "Солнечные бойлеры в Тверии и на севере | Установка от 2,200 ₪ | 053 361 3100",
    description: "Продажа и установка солнечных бойлеров в Тверии, Цфате, Ноф-ха-Галиле, Бейт-Шеане и Иорданской долине. Цена от 2,200 ₪. Код שמש2200 дает скидку 100 ₪.",
    brandTitle: "Маим ве-Шемеш",
    brandSubtitle: "Солнечные бойлеры",
    navService: "Услуга",
    navBooking: "Заявка",
    navFaq: "Вопросы",
    languageButton: "עברית",
    heroEyebrow: "Тверия и север Израиля · продажа и установка",
    heroTitle: "Новый солнечный бойлер для дома с аккуратной установкой",
    heroLead: "Поставка и установка солнечных бойлеров и коллекторов, подключение воды и проверка системы в Тверии, Цфате, Ноф-ха-Галиле, Бейт-Шеане и Иорданской долине.",
    bookButton: "Получить цену",
    bookButtonShort: "Цена",
    priceNote: "от 2,200 ₪ · код שמש2200: скидка 100 ₪",
    timeNote: "3 часа рабочего времени",
    areaNote: "Тверия · Цфат · Ноф-ха-Галиль · Бейт-Шеан · Иорданская долина",
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
    areaSafed: "Цфат",
    areaNofHagalil: "Ноф-ха-Галиль",
    areaBeitShean: "Бейт-Шеан",
    areaJordanValley: "Иорданская долина",
    units1: "новый солнечный бойлер",
    units2: "бойлер и коллекторы",
    units3: "проверка и расчет цены",
    areaEyebrow: "Зона обслуживания",
    areaTitle: "Солнечные бойлеры в Тверии и на севере Израиля",
    areaText: "Работаем в Тверии, Цфате, Ноф-ха-Галиле, Бейт-Шеане и населённых пунктах Иорданской долины.",
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
    footerText: "Продажа и установка солнечных бойлеров в Тверии и на севере Израиля."
  },
  en: {
    title: "Solar boilers in Tiberias and Northern Israel | From 2,200 ₪ | 053 361 3100",
    description: "Solar boiler sale and installation in Tiberias, Safed, Nof HaGalil, Beit She'an and the Jordan Valley. Price from 2,200 ₪. Code שמש2200 gives 100 ₪ off.",
    brandTitle: "Mayim VeShemesh",
    brandSubtitle: "Solar boilers",
    navService: "Service",
    navBooking: "Booking",
    navFaq: "FAQ",
    languageButton: "עברית",
    heroEyebrow: "Tiberias and Northern Israel · sale and installation",
    heroTitle: "A new solar boiler for your home, installed properly",
    heroLead: "Supply and installation of solar boilers and collectors, water connections and system checks in Tiberias, Safed, Nof HaGalil, Beit She'an and the Jordan Valley.",
    bookButton: "Get a quote",
    bookButtonShort: "Quote",
    priceNote: "from 2,200 ₪ · code שמש2200: 100 ₪ discount",
    timeNote: "3-hour work window",
    areaNote: "Tiberias · Safed · Nof HaGalil · Beit She'an · Jordan Valley",
    trustCleanTitle: "Boiler and collectors",
    trustCleanText: "sized for the roof and household",
    trustDisinfectionTitle: "Installation and connections",
    trustDisinfectionText: "water, collectors and system check",
    trustHoursTitle: "Sun-Thu 09:00-18:00",
    trustHoursText: "by available calendar slots",
    serviceEyebrow: "What is included",
    serviceTitle: "A complete solution for a new solar boiler, from inspection to hot water",
    serviceLead: "Before the final quote, we check the required boiler volume, roof condition, access to collectors and the water infrastructure. This keeps the price clear and the installation coordinated without unnecessary surprises.",
    featureUnitTitle: "Boiler sizing",
    featureUnitText: "Choosing the right volume based on household size, daily use and roof conditions, including a collector recommendation.",
    featureWashTitle: "Collector installation",
    featureWashText: "Positioning collectors in the best practical direction, connecting them to the system and checking proper flow.",
    featureDisinfectTitle: "Check and finish",
    featureDisinfectText: "Checking connections, leaks, valves and cleaning the work area before handing the system to the customer.",
    leadEyebrow: "Fast booking",
    leadTitle: "Leave your address and phone number, and we will reserve a 3-hour work window",
    leadText: "Solar boiler pricing starts from 2,200 ₪. Code שמש2200 gives 100 ₪ off. After sending the details, a prepared WhatsApp message opens for quick coordination.",
    leadHighlight1: "3-hour work window",
    leadHighlight2: "WhatsApp or email",
    leadHighlight3: "Sun-Thu 09:00-18:00",
    fieldName: "Name",
    fieldPhone: "Phone",
    fieldAddress: "Full address",
    fieldArea: "Area",
    fieldUnits: "Request type",
    fieldBookingDate: "Choose date",
    fieldBookingTime: "Choose time",
    fieldEmail: "email for quote confirmation",
    fieldContact: "How should we reply?",
    contactEither: "whichever is faster",
    fieldNotes: "Notes",
    notesPlaceholder: "desired boiler size, floor, roof access, existing boiler or WhatsApp photo",
    slotLoading: "Loading available times...",
    slotUnavailable: "No available times for this date",
    slotHelper: "Each slot reserves 3 hours of work. After sending the form, the time is checked and reserved in the calendar.",
    slotLive: "Times are shown from the calendar.",
    slotFallback: "Times are shown for preview. After backend connection they will be checked against the calendar.",
    slotRequired: "Choose an available date and time.",
    submitButton: "Send request",
    submitWorking: "Sending...",
    successWithGoogle: "Request sent and the selected slot was sent for calendar booking. Starting price confirmed: from 2,200 ₪ for a solar boiler. Code שמש2200 gives 100 ₪ off.",
    successFallback: "The details are ready to send. Starting price confirmed: from 2,200 ₪ for a solar boiler. Code שמש2200 gives 100 ₪ off.",
    errorMessage: "Could not send to the Google server. You can send the details through WhatsApp.",
    emailRequired: "You chose email, so an email address is required.",
    areaTiberias: "Tiberias",
    areaSafed: "Safed",
    areaNofHagalil: "Nof HaGalil",
    areaBeitShean: "Beit She'an",
    areaJordanValley: "Jordan Valley",
    units1: "new solar boiler",
    units2: "boiler and collectors",
    units3: "inspection and quote",
    areaEyebrow: "Service area",
    areaTitle: "Solar boilers in Tiberias and Northern Israel",
    areaText: "Service for homes, apartments, guest units and small businesses in Tiberias, Safed, Nof HaGalil, Beit She'an and Jordan Valley communities.",
    contactTitle: "Contact",
    copyButton: "Copy number",
    copiedButton: "Number copied",
    faqEyebrow: "FAQ",
    faqTitle: "What to know before booking",
    faq1Question: "What is included in solar boiler installation?",
    faq1Answer: "Supplying a suitable boiler, placement and connection, collector check, leak check and system startup according to the existing infrastructure.",
    faq2Question: "How much time is reserved?",
    faq2Answer: "Each request receives a 3-hour calendar slot, including inspection, arrival and further coordination according to roof conditions.",
    faq3Question: "Is the price fixed?",
    faq3Answer: "The price starts from 2,200 ₪ for a solar boiler. Code שמש2200 gives 100 ₪ off. The final price depends on volume, collectors, roof access and the state of the water connections.",
    faq4Question: "Can I send a photo on WhatsApp?",
    faq4Answer: "Yes. After the form, a prepared WhatsApp message opens, and you can attach a photo of the roof or existing boiler.",
    footerTitle: "Mayim VeShemesh - solar boilers",
    footerText: "Solar boiler sale and installation in Tiberias and Northern Israel."
  },
  fr: {
    title: "Chauffe-eau solaires à Tibériade et dans le nord | Dès 2 200 ₪ | 053 361 3100",
    description: "Vente et installation de chauffe-eau solaires à Tibériade, Safed, Nof HaGalil, Beit She'an et dans la vallée du Jourdain. Dès 2 200 ₪. Code שמש2200 : remise de 100 ₪.",
    brandTitle: "Mayim VeShemesh",
    brandSubtitle: "Chauffe-eau solaires",
    navService: "Service",
    navBooking: "Devis",
    navFaq: "Questions",
    languageButton: "עברית",
    heroEyebrow: "Tibériade et nord d'Israël · vente et installation",
    heroTitle: "Un chauffe-eau solaire neuf, installé proprement chez vous",
    heroLead: "Fourniture et installation de chauffe-eau solaires et de capteurs, raccordements d'eau et contrôle du système à Tibériade, Safed, Nof HaGalil, Beit She'an et dans la vallée du Jourdain.",
    bookButton: "Obtenir un devis",
    bookButtonShort: "Devis",
    priceNote: "dès 2 200 ₪ · code שמש2200 : remise de 100 ₪",
    timeNote: "Créneau de travail de 3 heures",
    areaNote: "Tibériade · Safed · Nof HaGalil · Beit She'an · vallée du Jourdain",
    trustCleanTitle: "Ballon et capteurs",
    trustCleanText: "dimensionnés selon le foyer et le toit",
    trustDisinfectionTitle: "Installation et raccordements",
    trustDisinfectionText: "eau, capteurs et contrôle du système",
    trustHoursTitle: "Dim-Jeu 09:00-18:00",
    trustHoursText: "selon les créneaux disponibles",
    serviceEyebrow: "Ce qui est compris",
    serviceTitle: "Une solution complète, de l'inspection jusqu'à l'eau chaude",
    serviceLead: "Avant le devis final, nous vérifions le volume nécessaire, l'état du toit, l'accès aux capteurs et les raccordements d'eau afin de coordonner une installation claire, sans surprise inutile.",
    featureUnitTitle: "Choix du ballon",
    featureUnitText: "Sélection du volume selon le nombre d'occupants, l'usage quotidien et les conditions du toit, avec recommandation des capteurs.",
    featureWashTitle: "Installation des capteurs",
    featureWashText: "Positionnement des capteurs dans la meilleure orientation possible, raccordement et contrôle du débit.",
    featureDisinfectTitle: "Contrôle et finition",
    featureDisinfectText: "Contrôle des raccords, fuites et vannes, puis nettoyage de la zone de travail avant la remise au client.",
    leadEyebrow: "Demande rapide",
    leadTitle: "Indiquez votre adresse et votre téléphone pour réserver un créneau de 3 heures",
    leadText: "Le prix commence à 2 200 ₪. Le code שמש2200 donne 100 ₪ de remise. Après l'envoi, un message WhatsApp préparé s'ouvre pour finaliser les détails.",
    leadHighlight1: "Créneau de 3 heures",
    leadHighlight2: "WhatsApp ou email",
    leadHighlight3: "Dim-Jeu 09:00-18:00",
    fieldName: "Nom",
    fieldPhone: "Téléphone",
    fieldAddress: "Adresse complète",
    fieldArea: "Zone",
    fieldUnits: "Type de demande",
    fieldBookingDate: "Choisir une date",
    fieldBookingTime: "Choisir une heure",
    fieldEmail: "Email pour confirmer le devis",
    fieldContact: "Comment souhaitez-vous recevoir la réponse ?",
    contactEither: "le moyen le plus rapide",
    fieldNotes: "Remarques",
    notesPlaceholder: "volume souhaité, étage, accès au toit, ballon existant ou photo sur WhatsApp",
    slotLoading: "Chargement des créneaux...",
    slotUnavailable: "Aucun créneau disponible à cette date",
    slotHelper: "Chaque créneau réserve 3 heures de travail. Après l'envoi, l'horaire est vérifié et réservé dans le calendrier.",
    slotLive: "Les horaires sont affichés depuis le calendrier.",
    slotFallback: "Les horaires sont affichés à titre indicatif et seront confirmés lors de la prise de contact.",
    slotRequired: "Choisissez une date et une heure disponibles.",
    submitButton: "Envoyer la demande",
    submitWorking: "Envoi...",
    successWithGoogle: "Demande envoyée et créneau transmis au calendrier. Prix de départ confirmé : dès 2 200 ₪. Code שמש2200 : remise de 100 ₪.",
    successFallback: "Les informations sont prêtes à être envoyées. Prix de départ : dès 2 200 ₪. Code שמש2200 : remise de 100 ₪.",
    errorMessage: "L'envoi au serveur Google a échoué. Vous pouvez envoyer les informations par WhatsApp.",
    emailRequired: "Vous avez choisi l'email ; veuillez saisir une adresse email.",
    areaTiberias: "Tibériade",
    areaSafed: "Safed",
    areaNofHagalil: "Nof HaGalil",
    areaBeitShean: "Beit She'an",
    areaJordanValley: "Vallée du Jourdain",
    units1: "nouveau chauffe-eau solaire",
    units2: "ballon et capteurs",
    units3: "inspection et devis",
    areaEyebrow: "Zone de service",
    areaTitle: "Chauffe-eau solaires à Tibériade et dans le nord d'Israël",
    areaText: "Service pour maisons, appartements, hébergements et petites entreprises à Tibériade, Safed, Nof HaGalil, Beit She'an et dans les localités de la vallée du Jourdain.",
    contactTitle: "Contact",
    copyButton: "Copier le numéro",
    copiedButton: "Numéro copié",
    faqEyebrow: "Questions",
    faqTitle: "À savoir avant de réserver",
    faq1Question: "Que comprend l'installation ?",
    faq1Answer: "Fourniture d'un ballon adapté, pose et raccordement, contrôle des capteurs, recherche de fuites et mise en service selon l'installation existante.",
    faq2Question: "Combien de temps est réservé ?",
    faq2Answer: "Chaque demande reçoit un créneau de 3 heures comprenant l'inspection, le déplacement et la coordination selon les conditions du toit.",
    faq3Question: "Le prix est-il fixe ?",
    faq3Answer: "Le prix commence à 2 200 ₪. Le code שמש2200 donne 100 ₪ de remise. Le prix final dépend du volume, des capteurs, de l'accès au toit et de l'état des raccordements d'eau.",
    faq4Question: "Puis-je envoyer une photo sur WhatsApp ?",
    faq4Answer: "Oui. Un message WhatsApp préparé s'ouvre et vous pouvez joindre une photo du toit ou du chauffe-eau existant.",
    footerTitle: "Mayim VeShemesh - chauffe-eau solaires",
    footerText: "Vente et installation de chauffe-eau solaires à Tibériade et dans le nord d'Israël."
  }
};

const whatsappMessages = {
  he: "שלום, אני רוצה לקבל הצעת מחיר לדוד שמש בטבריה או בצפון. המחיר מתחיל מ-2,200 ₪. קוד שמש2200 נותן 100 ₪ הנחה.",
  ru: "Здравствуйте, хочу получить цену на солнечный бойлер в Тверии или на севере Израиля. Цена начинается от 2,200 ₪. Код שמש2200 дает скидку 100 ₪.",
  en: "Hello, I would like a quote for a solar boiler in Tiberias or Northern Israel. The price starts from 2,200 ₪. Code שמש2200 gives 100 ₪ off.",
  fr: "Bonjour, je souhaite obtenir un devis pour un chauffe-eau solaire à Tibériade ou dans le nord d'Israël. Le prix commence à 2 200 ₪. Le code שמש2200 donne 100 ₪ de remise."
};

const supportedLanguages = ["he", "ru", "en", "fr"];
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
let currentLanguage = supportedLanguages.includes(requestedLanguage) ? requestedLanguage : "he";

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
  setMeta('meta[property="og:title"]', dictionary.title.replace(" | 053 361 3100", ""));
  setMeta('meta[property="og:description"]', dictionary.description);
  setMeta('meta[property="og:locale"]', { he: "he_IL", ru: "ru_RU", en: "en_US", fr: "fr_FR" }[language]);
  setMeta('meta[name="twitter:title"]', dictionary.title.replace(" | 053 361 3100", ""));
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
    link.href = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(whatsappMessages[language])}`;
  });

  if (availableSlots.length && bookingDateInput?.value) {
    renderSlotsForDate(bookingDateInput.value);
  }

  const toggle = document.querySelector("[data-language-toggle]");
  if (toggle) {
    toggle.setAttribute("aria-label", isHebrew ? "לעבור לרוסית" : "Переключить на иврит");
  }

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isActive = button.dataset.languageOption === language;
    button.setAttribute("aria-pressed", String(isActive));
  });

  const params = new URLSearchParams(window.location.search);
  if (language === "he") {
    params.delete("lang");
  } else {
    params.set("lang", language);
  }
  const nextUrl = `${window.location.pathname}${params.toString() ? `?${params}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", nextUrl);
};

document.querySelector("[data-language-toggle]")?.addEventListener("click", () => {
  const next = currentLanguage === "he" ? "ru" : currentLanguage === "ru" ? "en" : currentLanguage === "en" ? "fr" : "he";
  applyLanguage(next);
});

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
    priceLabel: SETTINGS.priceLabel[currentLanguage] || SETTINGS.priceLabel.he,
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
      `מחיר התחלתי: ${lead.priceLabel}`,
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

  if (currentLanguage === "en") {
    return [
      "Solar boiler quote request",
      `Starting price: ${lead.priceLabel}`,
      `Name: ${lead.name}`,
      `Phone: ${lead.phone}`,
      lead.email ? `email: ${lead.email}` : "",
      `Address: ${lead.address}`,
      `Area: ${lead.area}`,
      `Request type: ${lead.units}`,
      lead.preferredDateTime ? `Selected slot: ${lead.bookingDate} ${lead.bookingSlotLabel || lead.preferredDateTime}` : "Selected slot: not selected",
      `Work window: ${SETTINGS.bookingHours} hours`,
      lead.notes ? `Notes: ${lead.notes}` : ""
    ].filter(Boolean).join("\n");
  }

  if (currentLanguage === "fr") {
    return [
      "Demande de devis pour un chauffe-eau solaire",
      `Prix de départ : ${lead.priceLabel}`,
      `Nom : ${lead.name}`,
      `Téléphone : ${lead.phone}`,
      lead.email ? `Email : ${lead.email}` : "",
      `Adresse : ${lead.address}`,
      `Zone : ${lead.area}`,
      `Type de demande : ${lead.units}`,
      lead.preferredDateTime ? `Créneau choisi : ${lead.bookingDate} ${lead.bookingSlotLabel || lead.preferredDateTime}` : "Créneau choisi : non sélectionné",
      `Durée réservée : ${SETTINGS.bookingHours} heures`,
      lead.notes ? `Remarques : ${lead.notes}` : ""
    ].filter(Boolean).join("\n");
  }

  return [
    "Заявка на расчет солнечного бойлера",
    `Стартовая цена: ${lead.priceLabel}`,
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
    const subject = encodeURIComponent(
      currentLanguage === "he" ? "בקשה לדוד שמש בטבריה" :
      currentLanguage === "en" ? "Solar boiler request in Tiberias" :
      currentLanguage === "fr" ? "Demande de chauffe-eau solaire dans le nord d'Israël" :
      "Заявка на солнечный бойлер в Тверии"
    );
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
