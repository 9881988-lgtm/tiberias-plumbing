export const finderLocales = {
  en: { code: "en", dir: "ltr", name: "English", short: "EN" },
  es: { code: "es", dir: "ltr", name: "Español", short: "ES" },
  ru: { code: "ru", dir: "ltr", name: "Русский", short: "RU" },
  he: { code: "he", dir: "rtl", name: "עברית", short: "HE" }
};

export const finderCommon = {
  en: {
    hubTitle: "1,000 focused App Store finders", hubLead: "Search source-linked app comparisons built around a specific job and buying intent, not a generic chart.",
    directory: "Directory", guides: "Decision guides", language: "Language", allFinders: "All app finders", methodology: "Methodology",
    searchPlaceholder: "Search by app, developer or requirement...", search: "Search apps", filters: "Filters", reset: "Reset",
    sortRecommended: "Evidence score", sortName: "Name", sortPrice: "Lowest price", sortLocation: "Developer",
    count: "current App Store results", compare: "Compare", compareTitle: "Compare App Store evidence", close: "Close",
    official: "View on App Store", save: "Save", saved: "Saved", suggest: "Report an update", any: "Any",
    price: "Price", anyPrice: "Any price", free: "Free", paid: "Paid",
    rating: "Rating", anyRating: "Any rating", ratingHigh: "4.5+", ratingGood: "4.0–4.49", ratingOther: "Below 4.0 / unrated",
    reviews: "Rating volume", anyReviews: "Any volume", reviewsHigh: "1,000+", reviewsMid: "100–999", reviewsLow: "Under 100",
    updated: "Last update", anyUpdated: "Any date", current: "2026", previous: "2025", older: "Older",
    factRating: "App Store rating", factPrice: "Store price", factSystem: "Minimum OS", developer: "Developer", bestFor: "Evidence", feature: "Measure",
    matcher: "Find a strong starting point", matcherLead: "Choose price, rating and rating volume. The matcher applies the same visible evidence used in the list.", matcherButton: "Show match",
    noMatchesTitle: "No exact match in this snapshot", noMatchesText: "Clear a filter or verify the current App Store page.",
    proof: ["Official App Store links", "Transparent evidence score", "No paid ranking"],
    snapshot: "Snapshot", listings: "apps", disclosed: "Source", sourceName: "Apple Search API",
    editorialTitle: "Choose with a repeatable process", editorialLead: "Three short guides turn store metadata into a safer install decision.", read: "Read guide", minRead: "min read",
    methodTitle: "What the evidence score does and does not mean", methodLead: "It rewards fresh, well-rated listings with enough rating volume. It is not hands-on testing or a guarantee of quality.",
    methodSteps: [["01", "Official query", "Every listing comes from a dated Apple Search API response."], ["02", "Normalize", "Price, rating volume, OS and update date use one visible format."], ["03", "Check confidence", "A high rating with two reviews is not treated like a mature signal."], ["04", "Verify now", "The App Store page controls current features, privacy and purchases."]],
    footer: "Independent discovery layer using official App Store links. Verify current pricing, compatibility, privacy labels and in-app purchases before installing.",
    indexable: "Quality-checked", reviewNeeded: "Editorial review", category: "Category", browse: "Open catalog",
    categoryCount: "categories", qualityCount: "quality-checked", qualityHold: "Catalog drafts that have not passed source, uniqueness and editorial gates remain explicitly noindex.", dateLabel: "14 August 2026",
    catalogSearch: "Search 1,000 catalogs...", catalogSearchLabel: "Search catalogs", filterCatalogs: "Filter catalogs", showAll: "All catalogs", showReady: "Quality-checked", related: "Related intent catalogs", relatedLead: "Compare the same core job across narrower needs before choosing an app.", baseCatalog: "Core catalog", intentCaveat: "The search snapshot is a candidate list, not proof that every app meets this qualifier. Verify the current product page and test the workflow."
  },
  es: {
    hubTitle: "1.000 buscadores especializados de App Store", hubLead: "Busca comparaciones con fuentes para una tarea e intención concretas, no una clasificación genérica.",
    directory: "Directorio", guides: "Guías de decisión", language: "Idioma", allFinders: "Todos los buscadores", methodology: "Metodología",
    searchPlaceholder: "Busca por app, desarrollador o requisito...", search: "Buscar apps", filters: "Filtros", reset: "Restablecer",
    sortRecommended: "Puntuación de evidencia", sortName: "Nombre", sortPrice: "Menor precio", sortLocation: "Desarrollador",
    count: "resultados actuales de App Store", compare: "Comparar", compareTitle: "Comparar datos de App Store", close: "Cerrar",
    official: "Ver en App Store", save: "Guardar", saved: "Guardado", suggest: "Informar de un cambio", any: "Cualquiera",
    price: "Precio", anyPrice: "Cualquier precio", free: "Gratis", paid: "De pago",
    rating: "Valoración", anyRating: "Cualquier valoración", ratingHigh: "4,5+", ratingGood: "4,0–4,49", ratingOther: "Menos de 4,0 / sin valorar",
    reviews: "Volumen de valoraciones", anyReviews: "Cualquier volumen", reviewsHigh: "1.000+", reviewsMid: "100–999", reviewsLow: "Menos de 100",
    updated: "Última actualización", anyUpdated: "Cualquier fecha", current: "2026", previous: "2025", older: "Anterior",
    factRating: "Valoración en App Store", factPrice: "Precio", factSystem: "Sistema mínimo", developer: "Desarrollador", bestFor: "Evidencia", feature: "Medida",
    matcher: "Encuentra un buen punto de partida", matcherLead: "Elige precio, valoración y volumen. Se aplican los mismos datos visibles del directorio.", matcherButton: "Mostrar opción",
    noMatchesTitle: "No hay coincidencia exacta", noMatchesText: "Quita un filtro o verifica la ficha actual de App Store.",
    proof: ["Enlaces oficiales", "Puntuación transparente", "Sin ranking de pago"],
    snapshot: "Datos", listings: "apps", disclosed: "Fuente", sourceName: "API de búsqueda de Apple",
    editorialTitle: "Elige con un proceso repetible", editorialLead: "Tres guías convierten los metadatos en una decisión más segura.", read: "Leer guía", minRead: "min de lectura",
    methodTitle: "Qué significa la puntuación de evidencia", methodLead: "Favorece fichas recientes y bien valoradas con suficiente volumen. No sustituye una prueba práctica.",
    methodSteps: [["01", "Consulta oficial", "Cada ficha procede de una respuesta fechada de Apple."], ["02", "Normalización", "Precio, valoraciones, sistema y fecha usan un formato común."], ["03", "Confianza", "Dos opiniones no pesan como una señal madura."], ["04", "Verificación", "La ficha de App Store manda sobre funciones, privacidad y compras."]],
    footer: "Capa de descubrimiento independiente con enlaces oficiales. Verifica precio, compatibilidad, privacidad y compras antes de instalar.",
    indexable: "Calidad verificada", reviewNeeded: "Revisión editorial", category: "Categoría", browse: "Abrir catálogo",
    categoryCount: "categorías", qualityCount: "con calidad verificada", qualityHold: "Los borradores sin aprobación de fuentes, singularidad y revisión editorial permanecen explícitamente en noindex.", dateLabel: "14 de agosto de 2026",
    catalogSearch: "Buscar entre 1.000 catálogos...", catalogSearchLabel: "Buscar catálogos", filterCatalogs: "Filtrar catálogos", showAll: "Todos", showReady: "Verificados", related: "Catálogos relacionados", relatedLead: "Compara la misma tarea con necesidades más precisas antes de elegir.", baseCatalog: "Catálogo principal", intentCaveat: "La búsqueda es una lista de candidatos, no prueba que cada app cumpla este criterio. Verifica la ficha actual y prueba el flujo."
  },
  ru: {
    hubTitle: "1000 точных каталогов приложений App Store", hubLead: "Ищите сравнения по конкретной задаче и намерению, основанные на источниках, а не общей популярности.",
    directory: "Каталог", guides: "Гайды по выбору", language: "Язык", allFinders: "Все каталоги", methodology: "Методика",
    searchPlaceholder: "Поиск по приложению, разработчику или требованиям...", search: "Найти приложения", filters: "Фильтры", reset: "Сбросить",
    sortRecommended: "Оценка доказательности", sortName: "Название", sortPrice: "Минимальная цена", sortLocation: "Разработчик",
    count: "актуальных результатов App Store", compare: "Сравнить", compareTitle: "Сравнение данных App Store", close: "Закрыть",
    official: "Открыть в App Store", save: "Сохранить", saved: "Сохранено", suggest: "Сообщить об изменении", any: "Любой",
    price: "Цена", anyPrice: "Любая цена", free: "Бесплатно", paid: "Платно",
    rating: "Рейтинг", anyRating: "Любой рейтинг", ratingHigh: "4,5+", ratingGood: "4,0–4,49", ratingOther: "Ниже 4,0 / нет рейтинга",
    reviews: "Число оценок", anyReviews: "Любое число", reviewsHigh: "1 000+", reviewsMid: "100–999", reviewsLow: "Менее 100",
    updated: "Обновление", anyUpdated: "Любая дата", current: "2026", previous: "2025", older: "Раньше",
    factRating: "Рейтинг App Store", factPrice: "Цена в магазине", factSystem: "Минимальная ОС", developer: "Разработчик", bestFor: "Доказательства", feature: "Показатель",
    matcher: "Найдите сильный стартовый вариант", matcherLead: "Выберите цену, рейтинг и число оценок. Подбор использует те же прозрачные данные.", matcherButton: "Показать вариант",
    noMatchesTitle: "В снимке нет точного совпадения", noMatchesText: "Уберите фильтр или проверьте текущую карточку App Store.",
    proof: ["Официальные ссылки App Store", "Прозрачная оценка", "Без платного рейтинга"],
    snapshot: "Снимок", listings: "приложений", disclosed: "Источник", sourceName: "Apple Search API",
    editorialTitle: "Выбирайте по повторяемому процессу", editorialLead: "Три коротких гайда превращают метаданные магазина в более осознанное решение.", read: "Читать гайд", minRead: "мин чтения",
    methodTitle: "Что означает оценка доказательности", methodLead: "Она учитывает свежесть, рейтинг и число оценок. Это не ручное тестирование и не гарантия качества.",
    methodSteps: [["01", "Официальный запрос", "Каждая карточка получена из датированного ответа Apple."], ["02", "Единый формат", "Цена, рейтинг, ОС и дата показаны одинаково."], ["03", "Уверенность", "Высокий рейтинг из двух голосов не равен зрелому сигналу."], ["04", "Проверка сейчас", "Функции, приватность и покупки определяет текущая карточка App Store."]],
    footer: "Независимый каталог с официальными ссылками. До установки проверьте цену, совместимость, приватность и встроенные покупки.",
    indexable: "Проверено", reviewNeeded: "Нужна редактура", category: "Категория", browse: "Открыть каталог",
    categoryCount: "категорий", qualityCount: "прошли проверку", qualityHold: "Черновики без проверки источников, уникальности и редакционного допуска явно остаются в noindex.", dateLabel: "14 августа 2026",
    catalogSearch: "Поиск по 1000 каталогам...", catalogSearchLabel: "Найти каталог", filterCatalogs: "Фильтр каталогов", showAll: "Все каталоги", showReady: "Проверенные", related: "Связанные каталоги", relatedLead: "Сравните одну основную задачу для разных условий до выбора приложения.", baseCatalog: "Основной каталог", intentCaveat: "Снимок поиска — список кандидатов, а не доказательство соответствия каждого приложения критерию. Проверьте актуальную карточку и протестируйте сценарий."
  },
  he: {
    hubTitle: "1,000 מדריכי App Store ממוקדים", hubLead: "מחפשים השוואות מבוססות מקורות לפי משימה וכוונת שימוש מוגדרות, לא לפי טבלה כללית.",
    directory: "מדריך", guides: "מדריכי החלטה", language: "שפה", allFinders: "כל המדריכים", methodology: "מתודולוגיה",
    searchPlaceholder: "חיפוש לפי אפליקציה, מפתח או דרישה...", search: "חיפוש אפליקציות", filters: "מסננים", reset: "איפוס",
    sortRecommended: "ציון ראיות", sortName: "שם", sortPrice: "מחיר נמוך", sortLocation: "מפתח",
    count: "תוצאות עדכניות מ-App Store", compare: "השוואה", compareTitle: "השוואת נתוני App Store", close: "סגירה",
    official: "צפייה ב-App Store", save: "שמירה", saved: "נשמר", suggest: "דיווח על שינוי", any: "הכול",
    price: "מחיר", anyPrice: "כל מחיר", free: "חינם", paid: "בתשלום",
    rating: "דירוג", anyRating: "כל דירוג", ratingHigh: "+4.5", ratingGood: "4.0–4.49", ratingOther: "פחות מ-4.0 / ללא דירוג",
    reviews: "כמות דירוגים", anyReviews: "כל כמות", reviewsHigh: "+1,000", reviewsMid: "100–999", reviewsLow: "פחות מ-100",
    updated: "עדכון אחרון", anyUpdated: "כל תאריך", current: "2026", previous: "2025", older: "ישן יותר",
    factRating: "דירוג App Store", factPrice: "מחיר בחנות", factSystem: "מערכת מינימלית", developer: "מפתח", bestFor: "ראיות", feature: "מדד",
    matcher: "מציאת נקודת פתיחה חזקה", matcherLead: "בחרו מחיר, דירוג וכמות דירוגים. ההתאמה משתמשת באותם נתונים גלויים.", matcherButton: "הצגת התאמה",
    noMatchesTitle: "אין התאמה מדויקת בצילום", noMatchesText: "אפשר להסיר מסנן או לבדוק את עמוד App Store העדכני.",
    proof: ["קישורים רשמיים ל-App Store", "ציון שקוף", "ללא דירוג בתשלום"],
    snapshot: "צילום נתונים", listings: "אפליקציות", disclosed: "מקור", sourceName: "Apple Search API",
    editorialTitle: "בוחרים בתהליך שחוזר על עצמו", editorialLead: "שלושה מדריכים קצרים הופכים מטא-נתונים להחלטת התקנה בטוחה יותר.", read: "קריאת מדריך", minRead: "דקות קריאה",
    methodTitle: "מה ציון הראיות אומר", methodLead: "הוא מתגמל עדכניות, דירוג טוב וכמות מספקת. הוא אינו בדיקה מעשית או הבטחה לאיכות.",
    methodSteps: [["01", "שאילתה רשמית", "כל רישום מגיע מתשובת Apple מתוארכת."], ["02", "נרמול", "מחיר, דירוג, מערכת ותאריך מוצגים באותו פורמט."], ["03", "בדיקת ביטחון", "דירוג גבוה משתי הצבעות אינו אות בוגר."], ["04", "אימות עכשיו", "עמוד App Store קובע תכונות, פרטיות ורכישות."]],
    footer: "שכבת גילוי עצמאית עם קישורים רשמיים. בדקו מחיר, תאימות, תוויות פרטיות ורכישות לפני התקנה.",
    indexable: "עבר בדיקת איכות", reviewNeeded: "נדרשת עריכה", category: "קטגוריה", browse: "פתיחת מדריך",
    categoryCount: "קטגוריות", qualityCount: "עברו בדיקת איכות", qualityHold: "טיוטות ללא בדיקת מקורות, ייחודיות ואישור עריכתי נשארות במפורש ב-noindex.", dateLabel: "14 באוגוסט 2026",
    catalogSearch: "חיפוש בין 1,000 מדריכים...", catalogSearchLabel: "חיפוש מדריכים", filterCatalogs: "סינון מדריכים", showAll: "כל המדריכים", showReady: "נבדקו", related: "מדריכים קשורים", relatedLead: "משווים את אותה משימה לצרכים מדויקים יותר לפני הבחירה.", baseCatalog: "המדריך הראשי", intentCaveat: "תמונת החיפוש היא רשימת מועמדים ולא הוכחה שכל אפליקציה עומדת בתנאי. בדקו את עמוד המוצר העדכני ונסו את התהליך."
  }
};

export const archetypeCopy = {
  document: {
    en: "Compare capture quality, export formats, OCR, privacy and repeat-workflow fit before trusting important files.",
    es: "Compara captura, exportación, OCR, privacidad y flujo antes de confiar documentos importantes.",
    ru: "Сравните качество захвата, экспорт, OCR, приватность и повторяемый процесс до работы с важными файлами.",
    he: "השוו איכות צילום, ייצוא, OCR, פרטיות ותהליך חוזר לפני טיפול בקבצים חשובים."
  },
  creator: {
    en: "Compare output quality, watermark and export limits, workflow speed and current pricing before committing media.",
    es: "Compara calidad, marcas de agua, límites de exportación, velocidad y precio antes de usar tus archivos.",
    ru: "Сравните качество результата, водяные знаки, экспорт, скорость и цену до загрузки медиаматериалов.",
    he: "השוו איכות פלט, סימן מים, מגבלות ייצוא, מהירות ומחיר לפני העלאת מדיה."
  },
  finance: {
    en: "Compare export, recurring workflows, account requirements and pricing. Verify financial records independently.",
    es: "Compara exportación, tareas recurrentes, cuentas y precio. Verifica los registros financieros de forma independiente.",
    ru: "Сравните экспорт, регулярные операции, требования к аккаунту и цену. Финансовые данные проверяйте отдельно.",
    he: "השוו ייצוא, תהליכים חוזרים, דרישות חשבון ומחיר. יש לאמת רשומות פיננסיות בנפרד."
  },
  productivity: {
    en: "Compare capture speed, reminders, calendar or team integration and the friction of using the app every day.",
    es: "Compara rapidez, recordatorios, integración y la fricción del uso diario.",
    ru: "Сравните скорость ввода, напоминания, интеграции и ежедневное удобство.",
    he: "השוו מהירות הזנה, תזכורות, שילובים והחיכוך בשימוש יומיומי."
  },
  business: {
    en: "Compare team roles, export, customer data controls, integrations and total cost before moving a real workflow.",
    es: "Compara roles, exportación, control de datos, integraciones y coste total antes de mover un proceso real.",
    ru: "Сравните роли, экспорт, контроль клиентских данных, интеграции и полную цену до переноса рабочего процесса.",
    he: "השוו תפקידי צוות, ייצוא, בקרת נתוני לקוחות, שילובים ועלות מלאה לפני העברת תהליך אמיתי."
  },
  research: {
    en: "Compare source handling, export, offline claims, model or transcription limits and the work needed to verify output.",
    es: "Compara fuentes, exportación, uso sin conexión, límites y el trabajo necesario para verificar resultados.",
    ru: "Сравните работу с источниками, экспорт, офлайн-режим, ограничения и объём проверки результата.",
    he: "השוו טיפול במקורות, ייצוא, טענות לא מקוונות, מגבלות והעבודה לאימות פלט."
  },
  learning: {
    en: "Compare lesson depth, pronunciation or review tools, offline access and whether the practice matches your level.",
    es: "Compara profundidad, pronunciación, repaso, acceso sin conexión y nivel.",
    ru: "Сравните глубину уроков, произношение, повторение, офлайн-доступ и соответствие уровню.",
    he: "השוו עומק שיעורים, הגייה, חזרה, גישה לא מקוונת והתאמה לרמה."
  },
  home: {
    en: "Compare shared access, reminders, data portability and how quickly the household can keep information current.",
    es: "Compara acceso compartido, recordatorios, portabilidad y facilidad para mantener datos al día.",
    ru: "Сравните общий доступ, напоминания, перенос данных и простоту поддержания актуальности.",
    he: "השוו גישה משותפת, תזכורות, ניידות נתונים וקלות העדכון בבית."
  },
  travel: {
    en: "Compare offline coverage, update recency, location data, battery use and the plan for when connectivity fails.",
    es: "Compara cobertura sin conexión, actualidad, ubicación, batería y el plan cuando falla la red.",
    ru: "Сравните офлайн-покрытие, свежесть данных, геолокацию, батарею и работу без связи.",
    he: "השוו כיסוי לא מקוון, עדכניות, מיקום, סוללה ותוכנית כשאין חיבור."
  },
  mac: {
    en: "Compare Apple Silicon and macOS compatibility, permissions, background resource use and whether the utility is easy to remove.",
    es: "Compara Apple Silicon, macOS, permisos, recursos en segundo plano y desinstalación.",
    ru: "Сравните совместимость с Apple Silicon и macOS, разрешения, фоновые ресурсы и удаление.",
    he: "השוו תאימות Apple Silicon ו-macOS, הרשאות, משאבי רקע והסרה."
  }
};

export function finderPageCopy(locale, topic) {
  const c = finderCommon[locale];
  const label = topic.labels[locale];
  const title = locale === "en" ? `Compare ${label} with current App Store evidence.`
    : locale === "es" ? `Compara ${label} con datos actuales de App Store.`
    : locale === "ru" ? `Сравните ${label} по актуальным данным App Store.`
    : `השוו ${label} בעזרת נתוני App Store עדכניים.`;
  const seoTitle = topic.series === "intent"
    ? locale === "en" ? `${label} | App Store comparison`
      : locale === "es" ? `${label} | comparativa App Store`
      : locale === "ru" ? `${label} | сравнение App Store`
      : `${label} | השוואת App Store`
    : locale === "en" ? `Compare ${label} | App Store guide`
      : locale === "es" ? `Compara ${label} | guía App Store`
      : locale === "ru" ? `Сравнение: ${label} | гид App Store`
      : `השוואת ${label} | מדריך App Store`;
  const lead = topic.series === "intent"
    ? locale === "en" ? `${label}: compare current price, rating volume, compatibility and update evidence for this specific use case.`
      : locale === "es" ? `${label}: compara precio, valoraciones, compatibilidad y actualización para este caso de uso.`
      : locale === "ru" ? `${label}: сравните цену, число оценок, совместимость и свежесть для этого сценария.`
      : `${label}: השוו מחיר, כמות דירוגים, תאימות ועדכניות לתרחיש השימוש הזה.`
    : locale === "en" ? `${label} directory: ${archetypeCopy[topic.archetype][locale]}`
      : locale === "es" ? `Directorio de ${label}: ${archetypeCopy[topic.archetype][locale]}`
      : locale === "ru" ? `Каталог «${label}»: ${archetypeCopy[topic.archetype][locale]}`
      : `מדריך ${label}: ${archetypeCopy[topic.archetype][locale]}`;
  return { ...c, label, title, seoTitle, lead };
}

const intentAdviceCopy = {
  beginners: {
    en: ["Test the first ten minutes", "Look for a clear first run, a reversible sample task and an export you can understand before adding real data."],
    es: ["Prueba los primeros diez minutos", "Busca un inicio claro, una tarea de muestra reversible y una exportación comprensible antes de añadir datos reales."],
    ru: ["Проверьте первые десять минут", "Оцените понятность первого запуска, обратимость тестовой задачи и экспорт до добавления реальных данных."],
    he: ["בדקו את עשר הדקות הראשונות", "חפשו התחלה ברורה, משימת דוגמה הפיכה וייצוא מובן לפני הוספת מידע אמיתי."]
  },
  "small-business": {
    en: ["Price the complete business workflow", "Check export, ownership, support, recurring limits and the cost of every seat needed for the real job."],
    es: ["Calcula el flujo completo del negocio", "Comprueba exportación, propiedad, soporte, límites recurrentes y el coste de cada plaza necesaria."],
    ru: ["Посчитайте весь рабочий процесс", "Проверьте экспорт, владение данными, поддержку, регулярные лимиты и стоимость каждого нужного места."],
    he: ["תמחרו את תהליך העסק המלא", "בדקו ייצוא, בעלות, תמיכה, מגבלות חוזרות ועלות כל מושב שנדרש לעבודה האמיתית."]
  },
  teams: {
    en: ["Test roles before rollout", "Use a sample workspace to verify invitations, permissions, shared state, audit history and a clean export."],
    es: ["Prueba los roles antes del despliegue", "Usa un espacio de muestra para verificar invitaciones, permisos, estado compartido, historial y exportación."],
    ru: ["Проверьте роли до внедрения", "На тестовом пространстве проверьте приглашения, права, общее состояние, историю действий и экспорт."],
    he: ["בדקו תפקידים לפני הטמעה", "השתמשו בסביבת דוגמה כדי לבדוק הזמנות, הרשאות, מצב משותף, היסטוריה וייצוא נקי."]
  },
  students: {
    en: ["Check the semester cost", "Compare the free limit, offline access, file export and whether your work remains usable after a course ends."],
    es: ["Calcula el coste del semestre", "Compara el límite gratuito, acceso sin conexión, exportación y si el trabajo sigue siendo útil al acabar el curso."],
    ru: ["Посчитайте стоимость семестра", "Сравните бесплатный лимит, доступ без сети, экспорт и доступность работы после окончания курса."],
    he: ["חשבו את עלות הסמסטר", "השוו מגבלה חינמית, גישה לא מקוונת, ייצוא והאם העבודה נשארת שימושית אחרי סיום הקורס."]
  },
  offline: {
    en: ["Prove it without a connection", "Complete setup first, switch off Wi-Fi and cellular data, then repeat the core task and verify what still syncs later."],
    es: ["Compruébalo sin conexión", "Completa la configuración, apaga Wi-Fi y datos, repite la tarea principal y verifica qué se sincroniza después."],
    ru: ["Докажите работу без сети", "Завершите настройку, отключите Wi-Fi и мобильные данные, повторите основную задачу и проверьте последующую синхронизацию."],
    he: ["הוכיחו פעולה ללא חיבור", "סיימו הגדרה, כבו Wi-Fi ונתונים סלולריים, חזרו על המשימה המרכזית ובדקו מה מסתנכרן אחר כך."]
  },
  privacy: {
    en: ["Trace the data path", "Review permissions, account requirements, local or cloud processing, retention and deletion before using sensitive material."],
    es: ["Sigue la ruta de los datos", "Revisa permisos, cuenta, procesamiento local o en nube, retención y borrado antes de usar material sensible."],
    ru: ["Проследите путь данных", "До работы с чувствительными материалами проверьте разрешения, аккаунт, локальную или облачную обработку, хранение и удаление."],
    he: ["עקבו אחר מסלול הנתונים", "בדקו הרשאות, דרישת חשבון, עיבוד מקומי או בענן, שמירה ומחיקה לפני שימוש בחומר רגיש."]
  },
  free: {
    en: ["Find the real paywall", "Run the full task through export and identify limits, watermarks, ads, trials and recurring purchases before choosing."],
    es: ["Encuentra el muro de pago real", "Completa la tarea hasta exportar e identifica límites, marcas de agua, anuncios, pruebas y compras recurrentes."],
    ru: ["Найдите настоящий платный барьер", "Пройдите задачу до экспорта и выясните лимиты, водяные знаки, рекламу, пробный период и регулярные покупки."],
    he: ["מצאו את חומת התשלום האמיתית", "השלימו את המשימה עד לייצוא וזהו מגבלות, סימני מים, פרסומות, תקופות ניסיון ורכישות חוזרות."]
  },
  ipad: {
    en: ["Test the iPad workflow", "Verify Files and Share Sheet support, multitasking, keyboard behavior and Apple Pencil input where the task needs it."],
    es: ["Prueba el flujo en iPad", "Verifica Archivos, compartir, multitarea, teclado y Apple Pencil cuando la tarea lo necesite."],
    ru: ["Проверьте сценарий на iPad", "Проверьте Files и меню «Поделиться», многозадачность, клавиатуру и Apple Pencil, если он нужен задаче."],
    he: ["בדקו את תהליך העבודה ב-iPad", "בדקו Files ושיתוף, ריבוי משימות, מקלדת ו-Apple Pencil כאשר המשימה דורשת זאת."]
  },
  mac: {
    en: ["Verify the Mac build", "Confirm Apple Silicon and macOS support, file access, background activity, menu-bar behavior and clean removal."],
    es: ["Verifica la versión para Mac", "Confirma Apple Silicon, macOS, acceso a archivos, actividad en segundo plano, barra de menús y desinstalación."],
    ru: ["Проверьте версию для Mac", "Уточните поддержку Apple Silicon и macOS, доступ к файлам, фоновую работу, строку меню и полное удаление."],
    he: ["בדקו את גרסת ה-Mac", "אשרו Apple Silicon ו-macOS, גישה לקבצים, פעילות רקע, שורת תפריטים והסרה נקייה."]
  },
  "no-account": {
    en: ["Test without creating an identity", "Confirm the core task, local history and export work without sign-up, then check what optional sync would change."],
    es: ["Prueba sin crear una identidad", "Confirma que tarea, historial y exportación funcionan sin registro y revisa qué cambiaría una sincronización opcional."],
    ru: ["Проверьте работу без регистрации", "Убедитесь, что основная задача, локальная история и экспорт доступны без аккаунта, и выясните роль необязательной синхронизации."],
    he: ["בדקו ללא יצירת זהות", "אשרו שהמשימה, ההיסטוריה המקומית והייצוא עובדים ללא הרשמה ובדקו מה ישתנה בסנכרון אופציונלי."]
  },
  "no-subscription": {
    en: ["Confirm the purchase model", "Check whether one-time access includes updates, every required feature, export and continued use without a recurring payment."],
    es: ["Confirma el modelo de compra", "Comprueba si el pago único incluye actualizaciones, funciones necesarias, exportación y uso continuado sin cuota."],
    ru: ["Уточните модель покупки", "Проверьте, включает ли разовая оплата обновления, нужные функции, экспорт и дальнейшее использование без регулярного платежа."],
    he: ["אשרו את מודל הרכישה", "בדקו אם תשלום חד-פעמי כולל עדכונים, תכונות נדרשות, ייצוא ושימוש מתמשך ללא חיוב חוזר."]
  },
  "apple-silicon": {
    en: ["Check native compatibility", "Verify the exact chip and macOS requirement, then measure first launch, memory use and any Rosetta dependency."],
    es: ["Comprueba la compatibilidad nativa", "Verifica chip y macOS exactos y mide primer inicio, memoria y cualquier dependencia de Rosetta."],
    ru: ["Проверьте нативную совместимость", "Уточните чип и версию macOS, затем оцените первый запуск, память и зависимость от Rosetta."],
    he: ["בדקו תאימות טבעית", "אמתו שבב וגרסת macOS מדויקים ומדדו הפעלה ראשונה, זיכרון ותלות ב-Rosetta."]
  },
  lightweight: {
    en: ["Measure background load", "Compare idle CPU, memory, launch time, background helpers and whether quitting the app actually stops its processes."],
    es: ["Mide la carga en segundo plano", "Compara CPU y memoria en reposo, inicio, procesos auxiliares y si cerrar detiene realmente la app."],
    ru: ["Измерьте фоновую нагрузку", "Сравните CPU и память в простое, время запуска, фоновые помощники и остановку процессов после выхода."],
    he: ["מדדו עומס ברקע", "השוו CPU וזיכרון במנוחה, זמן הפעלה, תהליכי עזר והאם יציאה באמת עוצרת את התהליכים."]
  },
  productivity: {
    en: ["Time one repeated task", "Measure setup, clicks, keyboard flow, automation and export on the same task instead of comparing feature counts."],
    es: ["Cronometra una tarea repetida", "Mide configuración, clics, teclado, automatización y exportación en la misma tarea, no el número de funciones."],
    ru: ["Замерьте одну повторяемую задачу", "Сравнивайте настройку, клики, клавиатуру, автоматизацию и экспорт на одной задаче, а не число функций."],
    he: ["מדדו משימה חוזרת אחת", "מדדו הגדרה, לחיצות, מקלדת, אוטומציה וייצוא באותה משימה במקום לספור תכונות."]
  },
  "power-users": {
    en: ["Verify control and portability", "Test shortcuts, batch actions, advanced settings, error recovery and complete export with a realistic sample."],
    es: ["Verifica control y portabilidad", "Prueba atajos, lotes, ajustes avanzados, recuperación de errores y exportación completa con una muestra realista."],
    ru: ["Проверьте контроль и переносимость", "На реалистичном примере проверьте горячие клавиши, пакетные действия, тонкие настройки, восстановление ошибок и полный экспорт."],
    he: ["בדקו שליטה וניידות", "בדקו קיצורים, פעולות אצווה, הגדרות מתקדמות, התאוששות משגיאות וייצוא מלא עם דוגמה מציאותית."]
  },
  developers: {
    en: ["Inspect integration and data access", "Verify file formats, automation hooks, logs, local paths, version control fit and an exit route before adoption."],
    es: ["Revisa integración y acceso a datos", "Verifica formatos, automatización, registros, rutas locales, control de versiones y una salida antes de adoptar."],
    ru: ["Проверьте интеграции и доступ к данным", "Уточните форматы, автоматизацию, логи, локальные пути, совместимость с контролем версий и способ выхода."],
    he: ["בדקו אינטגרציה וגישה לנתונים", "אמתו פורמטים, אוטומציה, יומנים, נתיבים מקומיים, התאמה לבקרת גרסאות ודרך יציאה."]
  },
  business: {
    en: ["Check ownership and continuity", "Confirm licensing, business data ownership, backup, export, support response and what happens if billing stops."],
    es: ["Comprueba propiedad y continuidad", "Confirma licencia, propiedad de datos, copia, exportación, soporte y qué ocurre si se detiene la facturación."],
    ru: ["Проверьте владение и непрерывность", "Уточните лицензию, права на деловые данные, резервирование, экспорт, поддержку и последствия остановки оплаты."],
    he: ["בדקו בעלות והמשכיות", "אשרו רישוי, בעלות על נתוני העסק, גיבוי, ייצוא, תגובת תמיכה ומה קורה כשהחיוב נפסק."]
  }
};

export function intentAdvice(locale, topic) {
  if (topic.series !== "intent") return null;
  const copy = intentAdviceCopy[topic.qualifier]?.[locale];
  if (!copy) throw new Error(`Missing intent advice for ${topic.qualifier}/${locale}`);
  return { title: copy[0], body: copy[1] };
}

export function articleTemplates(locale, topic) {
  const label = topic.labels[locale];
  const sets = {
    en: [
      { slug: "how-to-choose", title: `How to choose ${label}: seven checks before installing`, description: `A repeatable checklist for comparing ${label} beyond screenshots and star ratings.`, lead: `Start with the job, then verify evidence. The store page is a source, not a complete test.`, sections: [["Define one job", `Write the one result you need from ${label}. A narrow test makes comparison honest and prevents a long feature list from hiding a poor core workflow.`], ["Check compatibility", "Confirm device, minimum OS, account requirements and any hardware dependency before you import real data."], ["Run a sample", "Use a small, non-sensitive sample. Measure setup, time to first useful result, export and the effort needed to correct mistakes."], ["Verify exit", "Find export, deletion and subscription controls before committing. A good tool should be easy to leave."]], takeaway: "Install the smallest number of candidates, test the same task and keep the one with the least total friction." },
      { slug: "privacy-checklist", title: `Privacy and permissions checklist for ${label}`, description: `Questions to ask about permissions, accounts, cloud processing, retention and deletion.`, lead: `Permission prompts are part of the product. Grant only what the tested workflow needs.`, sections: [["Inventory permissions", "List photos, files, contacts, microphone, location, network and tracking access. Connect each permission to a visible feature."], ["Trace the data", "Check whether processing is local or remote, whether an account is required and which service receives uploaded content."], ["Test deletion", "Look for export, history removal, account deletion and retention language. Removing an app may not delete cloud data."], ["Limit the first test", "Use a non-sensitive sample, deny optional access and review the current App Store privacy label and developer policy."]], takeaway: "A privacy claim is useful when the data path, permissions and deletion controls can be explained plainly." },
      { slug: "free-vs-paid", title: `Free vs paid ${label}: estimate the real cost`, description: `Compare subscriptions, one-time purchases, limits, export friction and switching cost.`, lead: `The download price is only the first number. Price the workflow you will actually repeat.`, sections: [["Name the paywall", "Check whether payment unlocks export, removes a watermark, raises a limit, adds cloud storage or only removes ads."], ["Annualize recurring cost", "Convert weekly and monthly prices to one year and include team seats, storage and add-ons."], ["Measure time cost", "Extra taps, repeated cleanup and manual export can cost more than a modest purchase when the task is frequent."], ["Protect portability", "Confirm that your data can leave in a useful format before paying for a long period."]], takeaway: "Choose the lowest total cost for the complete workflow, not automatically the lowest download price." }
    ],
    es: [
      { slug: "how-to-choose", title: `Cómo elegir ${label}: siete comprobaciones antes de instalar`, description: `Lista repetible para comparar ${label} más allá de capturas y estrellas.`, lead: "Empieza por la tarea y después verifica la evidencia.", sections: [["Define una tarea", `Escribe el único resultado que necesitas de ${label}. Una prueba estrecha evita que una lista larga oculte un flujo deficiente.`], ["Comprueba compatibilidad", "Confirma dispositivo, sistema, cuenta y hardware antes de importar datos reales."], ["Ejecuta una muestra", "Usa un ejemplo pequeño y no sensible. Mide configuración, resultado, exportación y correcciones."], ["Verifica la salida", "Busca exportación, borrado y suscripción antes de comprometerte."]], takeaway: "Prueba la misma tarea y conserva la opción con menor fricción total." },
      { slug: "privacy-checklist", title: `Privacidad y permisos de ${label}`, description: "Preguntas sobre permisos, cuentas, nube, retención y borrado.", lead: "Concede solo lo necesario para el flujo probado.", sections: [["Inventario de permisos", "Relaciona fotos, archivos, contactos, micrófono, ubicación, red y seguimiento con funciones visibles."], ["Sigue los datos", "Comprueba procesamiento local o remoto, cuenta y servicios que reciben contenido."], ["Prueba el borrado", "Busca exportación, historial, cuenta y retención. Desinstalar no siempre borra la nube."], ["Limita la prueba", "Usa una muestra no sensible y revisa la etiqueta de privacidad y la política."]], takeaway: "Una promesa de privacidad sirve cuando se explican ruta, permisos y borrado." },
      { slug: "free-vs-paid", title: `${label}: gratis o de pago y coste real`, description: "Compara suscripciones, compras, límites, exportación y cambio.", lead: "El precio de descarga es solo el primer número.", sections: [["Identifica el muro de pago", "Comprueba si paga exportación, marca de agua, límites, almacenamiento o anuncios."], ["Anualiza", "Convierte precio semanal o mensual a un año e incluye plazas y extras."], ["Mide el tiempo", "Pasos y limpieza repetidos pueden costar más que una compra pequeña."], ["Protege la portabilidad", "Confirma una exportación útil antes de pagar largo plazo."]], takeaway: "Elige el menor coste total del flujo completo." }
    ],
    ru: [
      { slug: "how-to-choose", title: `Как выбрать ${label}: семь проверок до установки`, description: `Повторяемый чек-лист сравнения ${label} не только по скриншотам и звёздам.`, lead: "Начните с задачи, затем проверяйте доказательства.", sections: [["Опишите одну задачу", `Запишите один результат, который должны дать ${label}. Узкий тест не позволит списку функций скрыть слабый процесс.`], ["Проверьте совместимость", "Уточните устройство, ОС, аккаунт и железо до импорта реальных данных."], ["Запустите образец", "Используйте небольшой несекретный пример. Замерьте настройку, результат, экспорт и исправления."], ["Проверьте выход", "Найдите экспорт, удаление и управление подпиской до долгого обязательства."]], takeaway: "Тестируйте одну задачу и оставляйте вариант с минимальным полным трением." },
      { slug: "privacy-checklist", title: `Приватность и разрешения: ${label}`, description: "Вопросы о разрешениях, аккаунте, облаке, хранении и удалении.", lead: "Выдавайте только те разрешения, которые нужны проверенному сценарию.", sections: [["Составьте список разрешений", "Свяжите доступ к фото, файлам, контактам, микрофону, геолокации, сети и трекингу с видимой функцией."], ["Проследите данные", "Уточните локальную или удалённую обработку, необходимость аккаунта и получателя загрузки."], ["Проверьте удаление", "Найдите экспорт, очистку истории, удаление аккаунта и срок хранения."], ["Ограничьте первый тест", "Используйте несекретный пример и читайте текущую метку приватности и политику разработчика."]], takeaway: "Обещание приватности ценно, когда понятны путь данных, разрешения и удаление." },
      { slug: "free-vs-paid", title: `${label}: бесплатно или платно и как считать цену`, description: "Сравнение подписки, разовой покупки, лимитов, экспорта и стоимости перехода.", lead: "Цена загрузки — только первое число.", sections: [["Назовите платный барьер", "Уточните, платите ли вы за экспорт, отсутствие водяного знака, лимит, облако или рекламу."], ["Посчитайте год", "Переведите недельную и месячную цену в год, добавьте места и дополнения."], ["Оцените время", "Повторные шаги и ручной экспорт могут стоить дороже небольшой покупки."], ["Защитите переносимость", "До оплаты убедитесь, что данные можно выгрузить в полезном формате."]], takeaway: "Выбирайте минимальную полную стоимость сценария, а не минимальную цену загрузки." }
    ],
    he: [
      { slug: "how-to-choose", title: `איך לבחור ${label}: שבע בדיקות לפני התקנה`, description: `רשימת בדיקה להשוואת ${label} מעבר לצילומי מסך וכוכבים.`, lead: "מתחילים במשימה ואז מאמתים ראיות.", sections: [["מגדירים משימה אחת", `כתבו את התוצאה היחידה שצריך לקבל מ-${label}. מבחן צר מונע מרשימת תכונות להסתיר תהליך חלש.`], ["בודקים תאימות", "מאשרים מכשיר, מערכת, חשבון וחומרה לפני ייבוא מידע אמיתי."], ["מריצים דוגמה", "משתמשים בדוגמה קטנה ולא רגישה ומודדים הגדרה, תוצאה, ייצוא ותיקונים."], ["בודקים יציאה", "מוצאים ייצוא, מחיקה וניהול מנוי לפני התחייבות."]], takeaway: "בודקים אותה משימה ושומרים את האפשרות עם החיכוך הכולל הנמוך ביותר." },
      { slug: "privacy-checklist", title: `פרטיות והרשאות עבור ${label}`, description: "שאלות על הרשאות, חשבון, ענן, שמירה ומחיקה.", lead: "נותנים רק הרשאות הדרושות לתהליך שנבדק.", sections: [["ממפים הרשאות", "מקשרים תמונות, קבצים, אנשי קשר, מיקרופון, מיקום, רשת ומעקב לתכונה נראית."], ["עוקבים אחר הנתונים", "בודקים עיבוד מקומי או מרוחק, חשבון ושירות שמקבל תוכן."], ["בודקים מחיקה", "מחפשים ייצוא, מחיקת היסטוריה, חשבון ומדיניות שמירה."], ["מגבילים את הבדיקה", "משתמשים בדוגמה לא רגישה ובודקים תווית פרטיות ומדיניות."]], takeaway: "טענת פרטיות מועילה כשאפשר להסביר מסלול, הרשאות ומחיקה." },
      { slug: "free-vs-paid", title: `${label}: חינם או בתשלום והעלות האמיתית`, description: "השוואת מנויים, רכישה, מגבלות, ייצוא ועלות מעבר.", lead: "מחיר ההורדה הוא רק המספר הראשון.", sections: [["מזהים את חומת התשלום", "בודקים אם משלמים על ייצוא, סימן מים, מגבלה, אחסון או הסרת פרסומות."], ["מחשבים שנה", "ממירים מחיר שבועי או חודשי לשנה ומוסיפים מושבים ותוספים."], ["מודדים זמן", "צעדים חוזרים וייצוא ידני יכולים לעלות יותר מרכישה קטנה."], ["מגנים על ניידות", "מאשרים ייצוא שימושי לפני תשלום ארוך."]], takeaway: "בוחרים את העלות הכוללת הנמוכה ביותר לתהליך המלא." }
    ]
  };
  return sets[locale];
}
