export const finderLocales = {
  en: { code: "en", dir: "ltr", name: "English", short: "EN" },
  es: { code: "es", dir: "ltr", name: "Español", short: "ES" },
  ru: { code: "ru", dir: "ltr", name: "Русский", short: "RU" },
  he: { code: "he", dir: "rtl", name: "עברית", short: "HE" }
};

export const finderCommon = {
  en: {
    hubTitle: "100 focused App Store finders", hubLead: "Browse source-linked app comparisons built around a specific job, not a generic chart.",
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
    categoryCount: "categories", qualityCount: "quality-checked", qualityHold: "Catalog drafts that fail a source or uniqueness gate remain explicitly noindex.", dateLabel: "14 August 2026"
  },
  es: {
    hubTitle: "100 buscadores especializados de App Store", hubLead: "Compara apps con fuentes y una tarea concreta, no con una clasificación genérica.",
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
    categoryCount: "categorías", qualityCount: "con calidad verificada", qualityHold: "Los borradores que no superan el control de fuentes o singularidad permanecen explícitamente en noindex.", dateLabel: "14 de agosto de 2026"
  },
  ru: {
    hubTitle: "100 точных каталогов приложений App Store", hubLead: "Сравнивайте приложения для конкретной задачи по источникам, а не по общей таблице популярности.",
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
    categoryCount: "категорий", qualityCount: "прошли проверку", qualityHold: "Черновики, не прошедшие проверку источников или уникальности, явно остаются в noindex.", dateLabel: "14 августа 2026"
  },
  he: {
    hubTitle: "100 מדריכי App Store ממוקדים", hubLead: "משווים אפליקציות לפי משימה מוגדרת ומקורות רשמיים, לא לפי טבלה כללית.",
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
    categoryCount: "קטגוריות", qualityCount: "עברו בדיקת איכות", qualityHold: "טיוטות שאינן עוברות בדיקת מקורות או ייחודיות נשארות במפורש ב-noindex.", dateLabel: "14 באוגוסט 2026"
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
  const seoTitle = locale === "en" ? `Best ${label} | App Store guide`
    : locale === "es" ? `Mejores ${label} | guía App Store`
    : locale === "ru" ? `Лучшие ${label} | гид App Store`
    : `${label} | מדריך App Store`;
  const lead = locale === "en" ? `${label} directory: ${archetypeCopy[topic.archetype][locale]}`
    : locale === "es" ? `Directorio de ${label}: ${archetypeCopy[topic.archetype][locale]}`
    : locale === "ru" ? `Каталог «${label}»: ${archetypeCopy[topic.archetype][locale]}`
    : `מדריך ${label}: ${archetypeCopy[topic.archetype][locale]}`;
  return { ...c, label, title, seoTitle, lead };
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
