(function () {
  const phone = "972533613100";
  const displayPhone = "+972-53-361-31-00";

  const translations = {
    he: {
      brandTitle: "מים ושמש",
      brandSubtitle: "שירותי בית בטבריה",
      navServices: "שירותים",
      navLead: "הזמנה",
      navFaq: "שאלות",
      languageButton: "Русский",
      heroEyebrow: "טבריה · מענה מהיר ב-WhatsApp",
      heroTitle: "דודי שמש, ניקוי מזגנים ועבודות קטנות",
      heroLead: "דוד שמש קומפלט מ-₪2,200. קוד שמש2200 נותן 100 ₪ הנחה בהתקנת דוד שמש. ניקוי וחיטוי מזגנים: 1 ב-₪200, 2 ב-₪180 לכל מזגן, 3 ב-₪150 לכל מזגן. קוד נקיאוויר50 נותן 50 ₪ הנחה בהזמנה מעל 500 ₪.",
      bookButton: "לקבלת הצעת מחיר",
      badgeArea: "טבריה",
      badgeFast: "הגעה לפי זמינות",
      badgeLang: "עברית / Русский",
      servicesEyebrow: "מה אפשר להזמין",
      servicesTitle: "שירותי בית שמתאימים בדיוק לחיפושים שלכם בגוגל",
      servicesLead: "בחרו את השירות הדרוש, שלחו כתובת ותמונה אם יש, ונחזור עם זמינות ומחיר לפי העבודה בפועל.",
      solarPill: "מ־₪2,200 · קוד שמש2200: 100 ₪ הנחה",
      solarTitle: "התקנת דוד שמש קומפלט",
      solarText: "מכירה והתקנה של דוד שמש, החלפה, קולטים, חיבורי מים ובדיקת מערכת. פתרון מסודר לבית פרטי, דירה או יחידת אירוח.",
      acPill: "1 ב־₪200 · 2 ב־₪180 · 3 ב־₪150",
      acTitle: "ניקוי ושטיפת מזגנים",
      acText: "ניקוי פנימי, שטיפה וחיטוי להפחתת ריחות, אבק וחולשה בזרימת האוויר. קוד נקיאוויר50: 50 ₪ הנחה בהזמנה מעל 500 ₪.",
      repairPill: "עבודות קטנות",
      repairTitle: "תיקונים קטנים בבית",
      repairText: "תלייה, הרכבה, תיקונים, החלפות קטנות, סידור בעיות נקודתיות ועבודות תחזוקה לבית ולעסק קטן.",
      leadEyebrow: "בקשה מהירה",
      leadTitle: "השאירו פרטים ונחזור עם מחיר וזמן הגעה",
      leadText: "אפשר גם ללחוץ WhatsApp ולשלוח לנו ישירות: איזה שירות צריך, כתובת בטבריה, ותמונה אם היא עוזרת להבין את העבודה.",
      check1: "שירות בטבריה בלבד",
      check2: "מענה בעברית וברוסית",
      check3: "דודי שמש, מזגנים ותיקונים קטנים במקום אחד",
      fieldService: "איזה שירות צריך?",
      optionSolar: "התקנת דוד שמש",
      optionAc: "ניקוי / שטיפת מזגן",
      optionRepairs: "עבודות קטנות בבית",
      fieldName: "שם",
      fieldPhone: "טלפון",
      fieldAddress: "כתובת / עיר / שכונה",
      fieldNotes: "תיאור קצר",
      notesPlaceholder: "לדוגמה: דוד 150 ליטר, מזגן עם ריח, תליית מדף, תיקון קטן",
      submitButton: "שליחת בקשה ב-WhatsApp",
      formNote: "אפשר לשלוח גם רק בחירת שירות. הטופס פותח הודעת WhatsApp מוכנה, ללא חיוב באתר.",
      termsEyebrow: "מתאים לחיפושים",
      termsTitle: "אם חיפשתם אחד מהשירותים האלה, הגעתם למקום הנכון",
      faqEyebrow: "שאלות",
      faqTitle: "מה כדאי לדעת לפני שמזמינים",
      faq1Q: "באיזה אזור השירות?",
      faq1A: "השירות זמין בטבריה בלבד, לפי זמינות וסוג העבודה.",
      faq2Q: "אפשר להזמין כמה עבודות יחד?",
      faq2A: "כן. למשל ניקוי מזגן ותיקון קטן באותה הגעה, או בדיקת דוד שמש יחד עם עבודה קטנה בבית.",
      faq3Q: "איך נקבע המחיר?",
      faq3A: "המחיר תלוי בסוג העבודה, גישה, חומרים ומספר יחידות. דוד שמש קומפלט מתחיל מ-₪2,200, וקוד שמש2200 נותן 100 ₪ הנחה בהתקנת דוד שמש. ניקוי וחיטוי מזגנים: 1 ב-₪200, 2 ב-₪180 לכל מזגן, 3 ב-₪150 לכל מזגן. קוד נקיאוויר50 נותן 50 ₪ הנחה בהזמנה מעל 500 ₪."
    },
    ru: {
      brandTitle: "Майм ве-Шемеш",
      brandSubtitle: "Услуги на дому в Тверии",
      navServices: "Услуги",
      navLead: "Заявка",
      navFaq: "Вопросы",
      languageButton: "עברית",
      heroEyebrow: "Тверия · быстрый ответ в WhatsApp",
      heroTitle: "Солнечные бойлеры, мойка кондиционеров и мелкий ремонт",
      heroLead: "Солнечный бойлер с установкой от ₪2,200. Промокод שמש2200 дает скидку 100 ₪ на установку солнечного бойлера. Мойка и дезинфекция кондиционеров: 1 за ₪200, 2 по ₪180 за каждый, 3 по ₪150 за каждый. Промокод נקיאוויר50 дает скидку 50 ₪ при заказе от 500 ₪.",
      bookButton: "Получить цену",
      badgeArea: "Тверия",
      badgeFast: "Выезд по доступности",
      badgeLang: "Русский / עברית",
      servicesEyebrow: "Что можно заказать",
      servicesTitle: "Услуги, которые обычно ищут в Google",
      servicesLead: "Выберите нужную услугу, отправьте адрес и фото, если оно поможет, и мы ответим по цене и ближайшему времени.",
      solarPill: "От ₪2,200 · код שמש2200: скидка 100 ₪",
      solarTitle: "Установка солнечного бойлера",
      solarText: "Продажа и установка солнечного бойлера, замена, коллекторы, водяные подключения и проверка системы. Для дома, квартиры или гостевой единицы.",
      acPill: "1 за ₪200 · 2 по ₪180 · 3 по ₪150",
      acTitle: "Мойка и чистка кондиционеров",
      acText: "Внутренняя чистка, промывка и дезинфекция от запахов, пыли и слабого потока воздуха. Промокод נקיאוויר50: скидка 50 ₪ при заказе от 500 ₪.",
      repairPill: "Мелкие работы",
      repairTitle: "Мелкий ремонт дома",
      repairText: "Навеска, сборка, небольшие замены, локальные исправления и простые работы по обслуживанию дома или малого бизнеса.",
      leadEyebrow: "Быстрая заявка",
      leadTitle: "Оставьте данные, и мы ответим по цене и времени выезда",
      leadText: "Можно нажать WhatsApp и сразу написать: какая услуга нужна, адрес в Тверии и приложить фото, если оно поможет оценить работу.",
      check1: "Выезд только в Тверии",
      check2: "Отвечаем на русском и иврите",
      check3: "Бойлеры, кондиционеры и мелкий ремонт в одном месте",
      fieldService: "Какая услуга нужна?",
      optionSolar: "Установка солнечного бойлера",
      optionAc: "Мойка / чистка кондиционера",
      optionRepairs: "Мелкий ремонт дома",
      fieldName: "Имя",
      fieldPhone: "Телефон",
      fieldAddress: "Адрес / город / район",
      fieldNotes: "Короткое описание",
      notesPlaceholder: "Например: бойлер 150 литров, запах из кондиционера, повесить полку, мелкий ремонт",
      submitButton: "Отправить заявку в WhatsApp",
      formNote: "Можно отправить только выбранную услугу. Форма открывает готовое сообщение WhatsApp, оплата на сайте не выполняется.",
      termsEyebrow: "Подходит под поиски",
      termsTitle: "Если вы искали одну из этих услуг, вы попали по адресу",
      faqEyebrow: "Вопросы",
      faqTitle: "Что стоит знать перед заказом",
      faq1Q: "В каком районе работаете?",
      faq1A: "Работаем только в Тверии, в зависимости от доступности и вида работы.",
      faq2Q: "Можно заказать несколько работ вместе?",
      faq2A: "Да. Например, чистку кондиционера и мелкий ремонт за один выезд, или проверку солнечного бойлера вместе с небольшой работой дома.",
      faq3Q: "Как определяется цена?",
      faq3A: "Цена зависит от вида работы, доступа, материалов и количества единиц. Солнечный бойлер с установкой от ₪2,200, промокод שמש2200 дает скидку 100 ₪ на установку солнечного бойлера. Мойка и дезинфекция кондиционеров: 1 за ₪200, 2 по ₪180 за каждый, 3 по ₪150 за каждый. Промокод נקיאוויר50 дает скидку 50 ₪ при заказе от 500 ₪."
    }
  };

  const getInitialLanguage = () => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("lang");
    if (requested === "ru" || requested === "he") return requested;
    return document.documentElement.lang && document.documentElement.lang.startsWith("ru") ? "ru" : "he";
  };

  let currentLanguage = getInitialLanguage();

  const track = (action, label) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", action, {
        event_category: "lead",
        event_label: label || currentLanguage
      });
    }
  };

  const whatsappMessage = () => {
    if (currentLanguage === "ru") {
      return [
        "Здравствуйте! Хочу получить цену на услугу в Тверии.",
        `Телефон: ${displayPhone}`,
        "Интересует: солнечный бойлер / мойка кондиционера / мелкий ремонт."
      ].join("\n");
    }

    return [
      "שלום, אשמח לקבל הצעת מחיר לשירות בטבריה.",
      `טלפון: ${displayPhone}`,
      "השירות: דוד שמש / ניקוי מזגן / עבודות קטנות."
    ].join("\n");
  };

  const updateWhatsAppLinks = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage())}`;
    document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
      link.setAttribute("href", url);
    });
  };

  const applyLanguage = (language) => {
    currentLanguage = language;
    const dictionary = translations[language];
    document.documentElement.lang = language === "ru" ? "ru-IL" : "he";
    document.documentElement.dir = language === "ru" ? "ltr" : "rtl";

    document.querySelectorAll("[data-key]").forEach((node) => {
      const key = node.getAttribute("data-key");
      if (dictionary[key]) node.textContent = dictionary[key];
    });

    document.querySelectorAll("[data-placeholder-key]").forEach((node) => {
      const key = node.getAttribute("data-placeholder-key");
      if (dictionary[key]) node.setAttribute("placeholder", dictionary[key]);
    });

    const toggle = document.querySelector("[data-language-toggle]");
    if (toggle) {
      toggle.setAttribute("aria-label", language === "ru" ? "לעבור לעברית" : "Переключить на русский");
    }

    const params = new URLSearchParams(window.location.search);
    if (language === "ru") {
      params.set("lang", "ru");
    } else {
      params.delete("lang");
    }
    const nextUrl = `${window.location.pathname}${params.toString() ? `?${params}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", nextUrl);
    updateWhatsAppLinks();
  };

  const formatLeadMessage = (form) => {
    const formData = new FormData(form);
    const selectedService = form.querySelector("select[name='service']")?.selectedOptions[0]?.textContent.trim() || "";
    const optionalFields = currentLanguage === "ru"
      ? [
          ["Имя", formData.get("name")],
          ["Телефон", formData.get("phone")],
          ["Адрес / район", formData.get("address")],
          ["Описание", formData.get("notes")]
        ]
      : [
          ["שם", formData.get("name")],
          ["טלפון", formData.get("phone")],
          ["כתובת / שכונה", formData.get("address")],
          ["תיאור", formData.get("notes")]
        ];
    const optionalLines = optionalFields
      .map(([label, value]) => [label, String(value || "").trim()])
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`);

    if (currentLanguage === "ru") {
      return [
        "Здравствуйте! Хочу получить цену на услугу в Тверии.",
        `Услуга: ${selectedService}`,
        ...optionalLines,
        "Лендинг: https://9881988-lgtm.github.io/tiberias-plumbing/home-services/"
      ].join("\n");
    }

    return [
      "שלום, אשמח לקבל הצעת מחיר לשירות בטבריה.",
      `שירות: ${selectedService}`,
      ...optionalLines,
      "קישור: https://9881988-lgtm.github.io/tiberias-plumbing/home-services/"
    ].join("\n");
  };

  document.querySelector("[data-language-toggle]")?.addEventListener("click", () => {
    applyLanguage(currentLanguage === "ru" ? "he" : "ru");
    track("language_toggle", currentLanguage);
  });

  document.querySelector("[data-lead-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(formatLeadMessage(form))}`;
    track("generate_lead", "whatsapp_form");
    window.open(url, "_blank", "noopener");
  });

  document.querySelectorAll("[data-track]").forEach((node) => {
    node.addEventListener("click", () => {
      track("click_contact", node.getAttribute("data-track"));
    });
  });

  applyLanguage(currentLanguage);
})();
