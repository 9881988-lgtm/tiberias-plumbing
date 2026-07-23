const translations = {
  en: {
    brandLine: "Private AI for Mac", navCapabilities: "Capabilities", navPrivacy: "Privacy", navArticle: "Article", downloadShort: "App Store",
    heroEyebrow: "PRIVATE · OFFLINE-FIRST · NATIVE FOR MAC", heroTitle: "Your documents. Your Mac. Your AI.", heroLead: "Ask focused questions, translate, summarize, extract facts and write drafts in a calm workspace designed to keep imported files on your device.", download: "Download on the Mac App Store", seeHow: "See how it works", heroNote: "No account · No document uploads · Optional local model",
    signalFormats: "document formats", signalLocalValue: "Local", signalLocal: "document retrieval", signalAccountValue: "None", signalAccount: "account required", signalDevices: "one focused workspace",
    capEyebrow: "WORK WITH INFORMATION, NOT TABS", capTitle: "A practical AI workspace for everyday documents", capLead: "Neravia brings the tasks that usually scatter across several tools into one restrained native interface.",
    featureAskTitle: "Ask your documents", featureAskText: "Import PDF, TXT, Markdown, RTF, JSON or CSV. Neravia retrieves relevant passages locally and shows the source material behind the answer.", featureTranslateTitle: "Translate and summarize", featureTranslateText: "Turn long material into a concise brief, translate selected text and extract useful facts without creating an account.", featureWriteTitle: "Write with focus", featureWriteText: "Draft, reshape and organize text in a quiet black-and-white workspace built for concentration.",
    workflowEyebrow: "A CLEAR THREE-STEP FLOW", workflowTitle: "Open a file. Choose a task. Review the source.", step1Title: "Import", step1Text: "Select a supported document from your Mac.", step2Title: "Work", step2Text: "Ask, translate, summarize, extract or draft.", step3Title: "Verify", step3Text: "Review the passages used to form a document answer.", modelsCaption: "Device-aware controls make advanced local generation explicit, never silent.",
    privacyEyebrow: "LOCAL BY DESIGN", privacyTitle: "Private work should stay private", privacyLead: "Imported documents remain on the device. The core experience does not require a Neravia account or a document-processing server.", privacy1: "No account required", privacy2: "No document uploads for the core workflow", privacy3: "No personalized advertising", privacy4: "Optional model downloads are clearly initiated by the user",
    modelEyebrow: "FOR HIGH-MEMORY MACS", modelTitle: "Optional Bonsai 27B local generation", modelText: "On compatible devices with at least 10 GB of physical memory, Neravia can download the Bonsai 27B MLX 1-bit model separately for advanced local generation. The model is about 5.16 GB and is never bundled or downloaded without an explicit action.", modelFine: "Performance varies by Mac, available memory, temperature and Low Power Mode. Core document and writing tools remain available when the optional model is unavailable.",
    storyEyebrow: "FROM THE NERAVIA JOURNAL", storyTitle: "Why local AI belongs on the Mac", storyText: "A practical look at privacy, device limits and the value of source-aware document work without turning your computer into a black box.", readArticle: "Read the article", ctaEyebrow: "AVAILABLE NOW", ctaTitle: "Put private AI to work on your Mac", ctaText: "Start with the core workspace. Advanced local generation remains optional and under your control.", footerBy: "A Structor Robotics product", support: "Support", privacyPolicy: "Privacy policy", allApps: "All apps"
  },
  ru: {
    brandLine: "Приватный ИИ для Mac", navCapabilities: "Возможности", navPrivacy: "Приватность", navArticle: "Статья", downloadShort: "App Store",
    heroEyebrow: "ПРИВАТНО · OFFLINE-FIRST · СОЗДАНО ДЛЯ MAC", heroTitle: "Ваши документы. Ваш Mac. Ваш ИИ.", heroLead: "Задавайте точные вопросы, переводите, сокращайте, извлекайте факты и готовьте тексты в спокойном рабочем пространстве, где импортированные файлы остаются на устройстве.", download: "Скачать в Mac App Store", seeHow: "Как это работает", heroNote: "Без аккаунта · Без загрузки документов · Локальная модель по желанию",
    signalFormats: "форматов документов", signalLocalValue: "Локально", signalLocal: "поиск по документам", signalAccountValue: "Не нужен", signalAccount: "аккаунт", signalDevices: "единое рабочее пространство",
    capEyebrow: "РАБОТАЙТЕ С ИНФОРМАЦИЕЙ, А НЕ С ВКЛАДКАМИ", capTitle: "Практичное ИИ-пространство для повседневных документов", capLead: "Neravia собирает задачи, обычно разбросанные по нескольким сервисам, в одном сдержанном нативном интерфейсе.",
    featureAskTitle: "Вопросы к документам", featureAskText: "Импортируйте PDF, TXT, Markdown, RTF, JSON или CSV. Neravia локально находит нужные фрагменты и показывает исходный материал ответа.", featureTranslateTitle: "Перевод и сводки", featureTranslateText: "Превращайте длинные материалы в краткую выжимку, переводите текст и извлекайте факты без регистрации.", featureWriteTitle: "Текст без лишнего", featureWriteText: "Создавайте, улучшайте и упорядочивайте тексты в спокойном чёрно-белом интерфейсе.",
    workflowEyebrow: "ТРИ ПОНЯТНЫХ ШАГА", workflowTitle: "Откройте файл. Выберите задачу. Проверьте источник.", step1Title: "Импорт", step1Text: "Выберите поддерживаемый документ на Mac.", step2Title: "Работа", step2Text: "Задайте вопрос, переведите, сократите, извлеките или напишите.", step3Title: "Проверка", step3Text: "Просмотрите фрагменты, использованные в ответе.", modelsCaption: "Управление с учётом возможностей устройства делает запуск большой локальной модели явным и контролируемым.",
    privacyEyebrow: "ЛОКАЛЬНАЯ АРХИТЕКТУРА", privacyTitle: "Приватная работа должна оставаться приватной", privacyLead: "Импортированные документы остаются на устройстве. Для основных функций не нужен аккаунт Neravia или сервер обработки документов.", privacy1: "Аккаунт не требуется", privacy2: "Основной процесс не загружает документы на сервер", privacy3: "Нет персонализированной рекламы", privacy4: "Дополнительная модель загружается только по решению пользователя",
    modelEyebrow: "ДЛЯ MAC С БОЛЬШИМ ОБЪЁМОМ ПАМЯТИ", modelTitle: "Опциональная локальная генерация Bonsai 27B", modelText: "На совместимых устройствах с не менее чем 10 ГБ физической памяти Neravia может отдельно загрузить Bonsai 27B MLX 1-bit для расширенной локальной генерации. Модель занимает около 5,16 ГБ и не входит в приложение и не загружается без явного действия.", modelFine: "Производительность зависит от модели Mac, свободной памяти, температуры и режима энергосбережения. Основные инструменты работы с документами и текстом доступны и без дополнительной модели.",
    storyEyebrow: "ЖУРНАЛ NERAVIA", storyTitle: "Почему локальному ИИ место на Mac", storyText: "Практичный взгляд на приватность, ограничения устройства и работу с источниками без превращения компьютера в чёрный ящик.", readArticle: "Читать статью", ctaEyebrow: "УЖЕ ДОСТУПНО", ctaTitle: "Подключите приватный ИИ к работе на Mac", ctaText: "Начните с основных инструментов. Расширенная локальная генерация остаётся опциональной и под вашим контролем.", footerBy: "Продукт Structor Robotics", support: "Поддержка", privacyPolicy: "Конфиденциальность", allApps: "Все приложения"
  },
  he: {
    brandLine: "AI פרטי ל-Mac", navCapabilities: "יכולות", navPrivacy: "פרטיות", navArticle: "מאמר", downloadShort: "App Store",
    heroEyebrow: "פרטי · OFFLINE-FIRST · נבנה ל-MAC", heroTitle: "המסמכים שלך. ה-Mac שלך. ה-AI שלך.", heroLead: "שאלו שאלות ממוקדות, תרגמו, סכמו, חלצו עובדות וכתבו טיוטות בסביבת עבודה רגועה שנועדה להשאיר קבצים מיובאים במכשיר.", download: "הורדה ב-Mac App Store", seeHow: "איך זה עובד", heroNote: "ללא חשבון · ללא העלאת מסמכים · מודל מקומי אופציונלי",
    signalFormats: "פורמטים של מסמכים", signalLocalValue: "מקומי", signalLocal: "איתור מידע במסמכים", signalAccountValue: "אין", signalAccount: "צורך בחשבון", signalDevices: "סביבת עבודה ממוקדת אחת",
    capEyebrow: "עובדים עם מידע, לא עם טאבים", capTitle: "סביבת AI מעשית למסמכים יומיומיים", capLead: "Neravia מרכזת משימות שבדרך כלל מפוזרות בין כמה כלים בתוך ממשק מקומי מאופק אחד.",
    featureAskTitle: "שאלות על המסמכים", featureAskText: "ייבאו PDF, TXT, Markdown, RTF, JSON או CSV. Neravia מאתרת קטעים רלוונטיים מקומית ומציגה את חומר המקור שמאחורי התשובה.", featureTranslateTitle: "תרגום וסיכום", featureTranslateText: "הפכו חומר ארוך לתמצית, תרגמו טקסט וחלצו עובדות שימושיות ללא יצירת חשבון.", featureWriteTitle: "כתיבה ממוקדת", featureWriteText: "כתבו, ערכו וארגנו טקסט בממשק שחור-לבן שקט שנועד לריכוז.",
    workflowEyebrow: "תהליך ברור בשלושה צעדים", workflowTitle: "פותחים קובץ. בוחרים משימה. בודקים מקור.", step1Title: "ייבוא", step1Text: "בחרו מסמך נתמך מה-Mac.", step2Title: "עבודה", step2Text: "שאלו, תרגמו, סכמו, חלצו או כתבו.", step3Title: "אימות", step3Text: "בדקו את הקטעים ששימשו ליצירת התשובה.", modelsCaption: "בקרות המותאמות למכשיר הופכות יצירה מקומית מתקדמת לפעולה מפורשת, לעולם לא שקטה.",
    privacyEyebrow: "מקומי מהיסוד", privacyTitle: "עבודה פרטית צריכה להישאר פרטית", privacyLead: "המסמכים המיובאים נשארים במכשיר. חוויית הליבה אינה דורשת חשבון Neravia או שרת לעיבוד מסמכים.", privacy1: "אין צורך בחשבון", privacy2: "אין העלאת מסמכים בתהליך הליבה", privacy3: "אין פרסום מותאם אישית", privacy4: "הורדת מודל אופציונלי מתחילה רק ביוזמת המשתמש",
    modelEyebrow: "ל-MAC עם זיכרון רב", modelTitle: "יצירה מקומית אופציונלית עם Bonsai 27B", modelText: "במכשירים תואמים עם לפחות 10 GB זיכרון פיזי, Neravia יכולה להוריד בנפרד את מודל Bonsai 27B MLX 1-bit ליצירה מקומית מתקדמת. גודל המודל כ-5.16 GB והוא לעולם אינו כלול או מורד ללא פעולה מפורשת.", modelFine: "הביצועים משתנים לפי ה-Mac, הזיכרון הזמין, הטמפרטורה ומצב חיסכון בסוללה. כלי המסמכים והכתיבה הבסיסיים זמינים גם כשהמודל האופציונלי אינו זמין.",
    storyEyebrow: "מתוך היומן של NERAVIA", storyTitle: "למה AI מקומי שייך ל-Mac", storyText: "מבט מעשי על פרטיות, מגבלות מכשיר והערך של עבודה עם מקורות בלי להפוך את המחשב לקופסה שחורה.", readArticle: "לקריאת המאמר", ctaEyebrow: "זמין עכשיו", ctaTitle: "הכניסו AI פרטי לעבודה ב-Mac", ctaText: "התחילו בסביבת הליבה. היצירה המקומית המתקדמת נשארת אופציונלית ובשליטתכם.", footerBy: "מוצר של Structor Robotics", support: "תמיכה", privacyPolicy: "מדיניות פרטיות", allApps: "כל האפליקציות"
  }
};

function setLanguage(lang) {
  const selected = translations[lang] ? lang : "en";
  document.documentElement.lang = selected;
  document.documentElement.dir = selected === "he" ? "rtl" : "ltr";
  document.body.dir = document.documentElement.dir;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = translations[selected][node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === selected;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem("neravia-language", selected);
}

document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
const savedLanguage = localStorage.getItem("neravia-language");
const browserLanguage = navigator.language?.slice(0, 2);
setLanguage(savedLanguage || (translations[browserLanguage] ? browserLanguage : "en"));
