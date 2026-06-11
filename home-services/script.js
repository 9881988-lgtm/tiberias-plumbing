(function () {
  const phone = "972533613100";
  const displayPhone = "053 361 3100";

  const translations = {
    he: {
      brandTitle: "מים ושמש",
      brandSubtitle: "שירותי בית בטבריה",
      navServices: "שירותים",
      navLead: "הזמנה",
      navFaq: "שאלות",
      languageButton: "Русский",
      heroEyebrow: "טבריה +15 ק״מ · מענה מהיר ב-WhatsApp",
      heroTitle: "דודי שמש, ניקוי מזגנים ועבודות קטנות",
      heroLead: "דוד שמש קומפלט מ-₪3,450, ניקוי מזגן מ-₪190, מבצע 3 מזגנים ב-₪500 ועבודות קטנות בבית באזור טבריה. מענה בעברית וברוסית.",
      bookButton: "לקבלת הצעת מחיר",
      badgeArea: "טבריה והסביבה",
      badgeFast: "הגעה לפי זמינות",
      badgeLang: "עברית / Русский",
      servicesEyebrow: "מה אפשר להזמין",
      servicesTitle: "שירותי בית שמתאימים בדיוק לחיפושים שלכם בגוגל",
      servicesLead: "בחרו את השירות הדרוש, שלחו כתובת ותמונה אם יש, ונחזור עם זמינות ומחיר לפי העבודה בפועל.",
      solarPill: "הכל כולל מ־₪3,450",
      solarTitle: "התקנת דוד שמש קומפלט",
      solarText: "מכירה והתקנה של דוד שמש, החלפה, קולטים, חיבורי מים ובדיקת מערכת. פתרון מסודר לבית פרטי, דירה או יחידת אירוח.",
      acPill: "מ־₪190 · 3 ב־₪500",
      acTitle: "ניקוי ושטיפת מזגנים",
      acText: "ניקוי פנימי, שטיפה וחיטוי להפחתת ריחות, אבק וחולשה בזרימת האוויר. מזגן אחד מ-₪190, מבצע 3 מזגנים ב-₪500.",
      repairPill: "עבודות קטנות",
      repairTitle: "תיקונים קטנים בבית",
      repairText: "תלייה, הרכבה, תיקונים, החלפות קטנות, סידור בעיות נקודתיות ועבודות תחזוקה לבית ולעסק קטן.",
      leadEyebrow: "בקשה מהירה",
      leadTitle: "השאירו פרטים ונחזור עם מחיר וזמן הגעה",
      leadText: "אפשר גם ללחוץ WhatsApp ולשלוח לנו ישירות: איזה שירות צריך, כתובת בטבריה או בסביבה, ותמונה אם היא עוזרת להבין את העבודה.",
      check1: "קמפיין מיועד לטבריה ורדיוס כ-15 ק״מ",
      check2: "מענה בעברית וברוסית",
      check3: "דודי שמש, מזגנים ותיקונים קטנים במקום אחד",
      fieldService: "איזה שירות צריך?",
      optionSolar: "התקנת דוד שמש",
      optionAc: "ניקוי / שטיפת מזגן",
      optionRepairs: "עבודות קטנות בבית",
      fieldName: "שם",
      fieldPhone: "טלפון",
      fieldAddress: "כתובת / שכונה בטבריה",
      fieldNotes: "תיאור קצר",
      notesPlaceholder: "לדוגמה: דוד 150 ליטר, מזגן עם ריח, תליית מדף, תיקון קטן",
      submitButton: "שליחת בקשה ב-WhatsApp",
      formNote: "הטופס פותח הודעת WhatsApp מוכנה. לא מתבצע חיוב באתר.",
      termsEyebrow: "מתאים לחיפושים",
      termsTitle: "אם חיפשתם אחד מהשירותים האלה, הגעתם למקום הנכון",
      faqEyebrow: "שאלות",
      faqTitle: "מה כדאי לדעת לפני שמזמינים",
      faq1Q: "באיזה אזור השירות?",
      faq1A: "טבריה והיישובים הקרובים, בערך עד 15 ק״מ, לפי זמינות וסוג העבודה.",
      faq2Q: "אפשר להזמין כמה עבודות יחד?",
      faq2A: "כן. למשל ניקוי מזגן ותיקון קטן באותה הגעה, או בדיקת דוד שמש יחד עם עבודה קטנה בבית.",
      faq3Q: "איך נקבע המחיר?",
      faq3A: "המחיר תלוי בסוג העבודה, גישה, חומרים ומספר יחידות. דוד שמש קומפלט מתחיל מ-₪3,450; ניקוי מזגן מתחיל מ-₪190 ויש מבצע 3 מזגנים ב-₪500."
    },
    ru: {
      brandTitle: "Майм ве-Шемеш",
      brandSubtitle: "Услуги на дому в Тверии",
      navServices: "Услуги",
      navLead: "Заявка",
      navFaq: "Вопросы",
      languageButton: "עברית",
      heroEyebrow: "Тверия +15 км · быстрый ответ в WhatsApp",
      heroTitle: "Солнечные бойлеры, мойка кондиционеров и мелкий ремонт",
      heroLead: "Солнечный бойлер с установкой от ₪3,450, мойка кондиционера от ₪190, акция 3 за ₪500 и мелкие работы дома в районе Тверии.",
      bookButton: "Получить цену",
      badgeArea: "Тверия и рядом",
      badgeFast: "Выезд по доступности",
      badgeLang: "Русский / עברית",
      servicesEyebrow: "Что можно заказать",
      servicesTitle: "Услуги, которые обычно ищут в Google",
      servicesLead: "Выберите нужную услугу, отправьте адрес и фото, если оно поможет, и мы ответим по цене и ближайшему времени.",
      solarPill: "Цена с установкой от ₪3,450",
      solarTitle: "Установка солнечного бойлера",
      solarText: "Продажа и установка солнечного бойлера, замена, коллекторы, водяные подключения и проверка системы. Для дома, квартиры или гостевой единицы.",
      acPill: "от ₪190 · 3 за ₪500",
      acTitle: "Мойка и чистка кондиционеров",
      acText: "Внутренняя чистка, промывка и обработка от запахов, пыли и слабого потока воздуха. Один кондиционер от ₪190, акция 3 за ₪500.",
      repairPill: "Мелкие работы",
      repairTitle: "Мелкий ремонт дома",
      repairText: "Навеска, сборка, небольшие замены, локальные исправления и простые работы по обслуживанию дома или малого бизнеса.",
      leadEyebrow: "Быстрая заявка",
      leadTitle: "Оставьте данные, и мы ответим по цене и времени выезда",
      leadText: "Можно нажать WhatsApp и сразу написать: какая услуга нужна, адрес в Тверии или рядом, и приложить фото, если оно поможет оценить работу.",
      check1: "Реклама рассчитана на Тверию и радиус около 15 км",
      check2: "Отвечаем на русском и иврите",
      check3: "Бойлеры, кондиционеры и мелкий ремонт в одном месте",
      fieldService: "Какая услуга нужна?",
      optionSolar: "Установка солнечного бойлера",
      optionAc: "Мойка / чистка кондиционера",
      optionRepairs: "Мелкий ремонт дома",
      fieldName: "Имя",
      fieldPhone: "Телефон",
      fieldAddress: "Адрес / район в Тверии",
      fieldNotes: "Короткое описание",
      notesPlaceholder: "Например: бойлер 150 литров, запах из кондиционера, повесить полку, мелкий ремонт",
      submitButton: "Отправить заявку в WhatsApp",
      formNote: "Форма открывает готовое сообщение WhatsApp. Оплата на сайте не выполняется.",
      termsEyebrow: "Подходит под поиски",
      termsTitle: "Если вы искали одну из этих услуг, вы попали по адресу",
      faqEyebrow: "Вопросы",
      faqTitle: "Что стоит знать перед заказом",
      faq1Q: "В каком районе работаете?",
      faq1A: "Тверия и ближайшие населенные пункты примерно до 15 км, в зависимости от доступности и вида работы.",
      faq2Q: "Можно заказать несколько работ вместе?",
      faq2A: "Да. Например, чистку кондиционера и мелкий ремонт за один выезд, или проверку солнечного бойлера вместе с небольшой работой дома.",
      faq3Q: "Как определяется цена?",
      faq3A: "Цена зависит от вида работы, доступа, материалов и количества единиц. Солнечный бойлер с установкой от ₪3,450; мойка кондиционера от ₪190, акция 3 за ₪500."
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
        "Здравствуйте! Хочу получить цену на услугу в районе Тверии.",
        `Телефон: ${displayPhone}`,
        "Интересует: солнечный бойлер / мойка кондиционера / мелкий ремонт."
      ].join("\n");
    }

    return [
      "שלום, אשמח לקבל הצעת מחיר לשירות באזור טבריה.",
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

    if (currentLanguage === "ru") {
      return [
        "Здравствуйте! Хочу получить цену на услугу.",
        `Услуга: ${selectedService}`,
        `Имя: ${formData.get("name") || ""}`,
        `Телефон: ${formData.get("phone") || ""}`,
        `Адрес / район: ${formData.get("address") || ""}`,
        `Описание: ${formData.get("notes") || ""}`,
        "Лендинг: https://9881988-lgtm.github.io/tiberias-plumbing/home-services/"
      ].join("\n");
    }

    return [
      "שלום, אשמח לקבל הצעת מחיר לשירות.",
      `שירות: ${selectedService}`,
      `שם: ${formData.get("name") || ""}`,
      `טלפון: ${formData.get("phone") || ""}`,
      `כתובת / שכונה: ${formData.get("address") || ""}`,
      `תיאור: ${formData.get("notes") || ""}`,
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
