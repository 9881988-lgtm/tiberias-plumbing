export const localMacArticles = [
  {
    slug: "local-ai-without-terminal",
    minutes: 7,
    sources: [
      ["Apple: identify your Mac model and specifications", "https://support.apple.com/en-us/102767"],
      ["NoCloud AI on the Mac App Store", "https://apps.apple.com/il/app/nocloud-ai-offline-chat/id6793953951?mt=12"],
      ["Jan hardware guidance", "https://jan.ai/docs/desktop/"],
      ["Ollama for macOS", "https://ollama.com/download/mac"]
    ],
    translations: {
      en: {
        title: "How to choose local AI for Mac without living in Terminal",
        description: "A practical way to compare private Mac AI apps by hardware, setup, documents and maintenance before downloading a model.",
        eyebrow: "Local AI buying guide",
        lead: "The easiest local AI app is not the one with the longest feature list. It is the one that fits your Mac, your files and the amount of setup you are willing to maintain.",
        takeaways: ["Start with chip and macOS compatibility.", "Choose a desktop app if you do not want to manage runtimes.", "Treat document support as a workflow, not a checkbox.", "Verify important model output against the original source."],
        sections: [
          ["start-with-hardware", "1. Start with the Mac you already own", ["Open About This Mac and record the chip, macOS version, memory and free storage. Apple Silicon and Intel builds are not interchangeable, and some newer apps require a recent macOS release.", "Model files are separate from the application. A small download may be convenient for testing, while larger models usually need more memory and storage. Compatibility comes before model reputation."]],
          ["choose-the-interface", "2. Decide how much infrastructure you want", ["A desktop-first app can bundle model selection, downloads and chat into one interface. A runtime-first tool gives developers more control, but often expects Terminal commands, an API client or another interface.", "Neither approach is universally better. Choose the desktop route for a focused daily task; choose a runtime when you want to compose your own tools and are comfortable maintaining them."]],
          ["test-the-workflow", "3. Test one real document before committing", ["Import a representative, non-sensitive file and ask questions whose answers you already know. Check whether the app supports the file type, keeps context reliably and makes limitations visible.", "Local generation improves privacy posture because processing can remain on the Mac after model download, but it does not make the model authoritative. Keep the source open and verify dates, numbers and consequential claims."]]
        ],
        callout: ["A useful first test", "Ask for a short summary, three facts with page references you can verify manually, and one question the document does not answer. A trustworthy workflow should make the final uncertainty obvious."],
        table: ["Choose by operating style", ["Need", "Better starting point", "Verify first"], [["Simple document chat", "Desktop app", "Supported formats and macOS"], ["Custom local stack", "Runtime or API", "Terminal comfort and memory"], ["Older Intel Mac", "Universal/Intel build", "Current vendor download"], ["Offline use", "Downloaded local model", "What still requires internet"]]],
        conclusion: ["The shortest path to a good choice", "Filter by hardware, then setup style, then document workflow. Download only after those three constraints line up. That sequence saves more time than comparing model leaderboards first."]
      },
      es: {
        title: "Cómo elegir IA local para Mac sin vivir en Terminal",
        description: "Una forma práctica de comparar IA privada para Mac por hardware, instalación, documentos y mantenimiento antes de descargar un modelo.",
        eyebrow: "Guía de compra de IA local",
        lead: "La aplicación de IA local más sencilla no es la que tiene más funciones. Es la que encaja con tu Mac, tus archivos y el mantenimiento que estás dispuesto a asumir.",
        takeaways: ["Empieza por el chip y la versión de macOS.", "Elige una app de escritorio si no quieres gestionar motores.", "Evalúa el flujo documental completo.", "Contrasta la información importante con el archivo original."],
        sections: [
          ["start-with-hardware", "1. Empieza por el Mac que ya tienes", ["Abre Acerca de este Mac y anota chip, macOS, memoria y espacio libre. Las versiones para Apple Silicon e Intel no son intercambiables y algunas apps nuevas exigen una versión reciente del sistema.", "Los modelos se descargan aparte. Un modelo pequeño sirve para probar; los grandes suelen necesitar más memoria y almacenamiento. La compatibilidad va antes que la fama del modelo."]],
          ["choose-the-interface", "2. Decide cuánta infraestructura quieres mantener", ["Una app de escritorio puede reunir selección, descarga y chat. Un motor orientado a desarrolladores ofrece más control, pero puede exigir Terminal, una API u otra interfaz.", "El escritorio encaja con una tarea diaria concreta. El motor encaja cuando quieres construir tu propio sistema y aceptas mantenerlo."]],
          ["test-the-workflow", "3. Prueba un documento real antes de decidir", ["Importa un archivo representativo y no sensible, y haz preguntas cuya respuesta ya conozcas. Comprueba formatos, contexto y límites visibles.", "El procesamiento local puede quedarse en el Mac tras descargar el modelo, pero el modelo no se vuelve una fuente autorizada. Verifica fechas, cifras y decisiones importantes."]]
        ],
        callout: ["Una primera prueba útil", "Pide un resumen corto, tres datos que puedas comprobar manualmente y una pregunta que el documento no responda. La incertidumbre final debe quedar clara."],
        table: ["Elige por forma de trabajo", ["Necesidad", "Mejor punto de partida", "Verifica primero"], [["Chat sencillo con documentos", "App de escritorio", "Formatos y macOS"], ["Sistema local personalizado", "Motor o API", "Terminal y memoria"], ["Mac Intel antiguo", "Versión Intel/universal", "Descarga actual"], ["Uso sin conexión", "Modelo local descargado", "Qué sigue necesitando internet"]]],
        conclusion: ["El camino más corto", "Filtra primero por hardware, después por instalación y por último por documentos. Descarga solo cuando coincidan esas tres condiciones."]
      },
      ru: {
        title: "Как выбрать локальный AI для Mac и не жить в Terminal",
        description: "Практическое сравнение приватных AI-приложений для Mac по железу, установке, документам и обслуживанию до загрузки модели.",
        eyebrow: "Гайд по локальному AI",
        lead: "Самое удобное локальное AI-приложение не обязательно имеет больше функций. Оно подходит вашему Mac, вашим файлам и тому объёму настройки, который вы готовы поддерживать.",
        takeaways: ["Начните с процессора и версии macOS.", "Выбирайте настольное приложение, если не хотите обслуживать движок.", "Оценивайте весь сценарий работы с документом.", "Важные ответы сверяйте с оригиналом."],
        sections: [
          ["start-with-hardware", "1. Начните с Mac, который у вас уже есть", ["Откройте «Об этом Mac» и запишите процессор, версию macOS, память и свободное место. Сборки для Apple Silicon и Intel различаются, а некоторым новым приложениям нужна свежая macOS.", "Файлы моделей загружаются отдельно. Маленькая модель удобна для пробы, крупная обычно требует больше памяти и диска. Сначала совместимость, потом популярность модели."]],
          ["choose-the-interface", "2. Решите, сколько инфраструктуры вы готовы поддерживать", ["Настольное приложение может объединить выбор модели, загрузку и чат. Движок даёт разработчику больше контроля, но часто требует Terminal, API-клиент или отдельный интерфейс.", "Для одной повседневной задачи удобнее desktop-приложение. Для собственной системы подходит движок, если вы готовы его настраивать."]],
          ["test-the-workflow", "3. Проверьте один реальный документ", ["Импортируйте типичный несекретный файл и задайте вопросы с известными ответами. Проверьте формат, удержание контекста и видимость ограничений.", "Локальная обработка может оставаться на Mac после загрузки модели, но модель не становится авторитетным источником. Сверяйте даты, числа и значимые выводы."]]
        ],
        callout: ["Полезный первый тест", "Попросите короткое резюме, три проверяемых факта и вопрос, на который документ не отвечает. Хороший сценарий не должен скрывать неопределённость."],
        table: ["Выбор по способу работы", ["Задача", "Стартовый вариант", "Что проверить"], [["Простой чат с документом", "Настольное приложение", "Форматы и macOS"], ["Собственная локальная система", "Движок или API", "Terminal и память"], ["Старый Intel Mac", "Intel/universal сборка", "Текущая загрузка"], ["Работа без сети", "Загруженная локальная модель", "Что всё ещё требует интернет"]]],
        conclusion: ["Самый короткий путь", "Отфильтруйте приложения по железу, затем по способу запуска и только потом по документам. Загружайте модель, когда совпали все три условия."]
      },
      he: {
        title: "איך לבחור AI מקומי ל-Mac בלי לחיות ב-Terminal",
        description: "דרך מעשית להשוות אפליקציות AI פרטיות ל-Mac לפי חומרה, התקנה, מסמכים ותחזוקה לפני הורדת מודל.",
        eyebrow: "מדריך לבחירת AI מקומי",
        lead: "אפליקציית ה-AI המקומית הקלה ביותר אינה זו עם רשימת התכונות הארוכה ביותר. היא זו שמתאימה ל-Mac, לקבצים ולכמות התחזוקה שאתם מוכנים לבצע.",
        takeaways: ["מתחילים בשבב ובגרסת macOS.", "בוחרים אפליקציית שולחן עבודה כדי להימנע מניהול מנוע.", "בודקים תהליך מסמכים מלא.", "מאמתים מידע חשוב מול המקור."],
        sections: [
          ["start-with-hardware", "1. מתחילים מה-Mac שכבר יש לכם", ["פתחו את About This Mac ורשמו שבב, גרסת macOS, זיכרון ואחסון פנוי. גרסאות Apple Silicon ו-Intel אינן זהות, וחלק מהאפליקציות דורשות מערכת חדשה.", "קובצי המודל יורדים בנפרד. מודל קטן נוח לניסוי, ומודלים גדולים דורשים בדרך כלל יותר זיכרון ואחסון. תאימות קודמת למוניטין."]],
          ["choose-the-interface", "2. מחליטים כמה תשתית רוצים לתחזק", ["אפליקציית שולחן עבודה יכולה לאחד בחירת מודל, הורדה וצ'אט. מנוע למפתחים נותן יותר שליטה אך עשוי לדרוש Terminal, API או ממשק נוסף.", "למשימה יומיומית ממוקדת מתאים ממשק שולחני. לבניית מערכת אישית מתאים מנוע, אם מוכנים לתחזק אותו."]],
          ["test-the-workflow", "3. בודקים מסמך אמיתי לפני החלטה", ["ייבאו קובץ מייצג ולא רגיש ושאלו שאלות שהתשובות להן ידועות. בדקו פורמטים, שמירת הקשר והצגת מגבלות.", "עיבוד מקומי יכול להישאר ב-Mac לאחר הורדת המודל, אך המודל אינו מקור מוסמך. יש לאמת תאריכים, מספרים ומסקנות חשובות."]]
        ],
        callout: ["בדיקה ראשונה מועילה", "בקשו סיכום קצר, שלוש עובדות שאפשר לבדוק ידנית ושאלה שהמסמך אינו עונה עליה. תהליך אמין צריך להציג את אי-הוודאות."],
        table: ["בחירה לפי אופן עבודה", ["צורך", "נקודת פתיחה", "מה לבדוק"], [["צ'אט פשוט עם מסמך", "אפליקציית שולחן עבודה", "פורמטים ו-macOS"], ["מערכת מקומית מותאמת", "מנוע או API", "Terminal וזיכרון"], ["Mac ישן עם Intel", "גרסת Intel/universal", "עמוד ההורדה העדכני"], ["שימוש לא מקוון", "מודל מקומי שהורד", "מה עדיין דורש אינטרנט"]]],
        conclusion: ["הדרך הקצרה לבחירה טובה", "מסננים לפי חומרה, אחר כך לפי התקנה ולבסוף לפי מסמכים. מורידים מודל רק כששלושת התנאים מתאימים."]
      }
    }
  },
  {
    slug: "offline-document-privacy",
    minutes: 6,
    sources: [
      ["Apple Platform Security", "https://support.apple.com/guide/security/welcome/web"],
      ["NoCloud AI privacy policy", "https://9881988-lgtm.github.io/tiberias-plumbing/nocloud-ai/privacy-policy.html"],
      ["GPT4All LocalDocs documentation", "https://docs.gpt4all.io/gpt4all_desktop/localdocs.html"]
    ],
    translations: {
      en: {
        title: "Private document chat on Mac: what ‘offline’ should mean",
        description: "A privacy checklist for local document assistants: downloads, file handling, network boundaries, deletion and model accuracy.",
        eyebrow: "Document privacy",
        lead: "‘Runs locally’ is a useful claim only when you know which steps are local, which require a network, and what happens to the imported file afterward.",
        takeaways: ["Separate setup downloads from everyday processing.", "Test network behavior instead of assuming it.", "Know where files, indexes and chats are stored.", "Local models still make factual mistakes."],
        sections: [
          ["draw-the-boundary", "1. Draw the privacy boundary", ["List every step: app download, model download, file import, indexing, generation, updates and support. An app may need internet for installation and model delivery while keeping later prompts and generation on the Mac.", "Read the product privacy policy and system permissions. Look for clear statements about accounts, analytics, crash reports and third-party services rather than relying on a single ‘offline’ badge."]],
          ["inspect-storage", "2. Understand local storage and deletion", ["A document assistant may create extracted text, indexes, thumbnails, chat history or model caches. Find where those artifacts live and whether removing a conversation also removes its associated data.", "For sensitive work, use a non-sensitive sample first, review macOS permissions and keep an independent retention policy. Deleting the original file may not automatically delete derived data."]],
          ["verify-output", "3. Privacy is not accuracy", ["Keeping data local reduces one class of exposure; it does not make generated answers correct. Small models can miss context, invent details or confuse nearby numbers.", "For contracts, medical information, finance or legal matters, compare every consequential claim with the source and use a qualified professional when the decision requires one."]]
        ],
        callout: ["Five questions to ask", "Does generation work after disconnecting? Is an account required? Where are imported files and indexes stored? Can I delete them? Are analytics optional?"],
        table: ["Local privacy review", ["Stage", "Question", "Good evidence"], [["Download", "What comes from the network?", "Named app/model sources"], ["Import", "Does the file leave the Mac?", "Policy plus practical test"], ["Storage", "What derived data remains?", "Documented location and delete control"], ["Output", "How are errors handled?", "Visible limitations and source checking"]]],
        conclusion: ["A defensible definition of offline", "Describe the exact workflow: after the required app and model downloads, specified processing can run locally without an account. Anything broader should be verified, not inferred."]
      },
      es: {
        title: "Chat privado con documentos en Mac: qué debe significar ‘sin conexión’",
        description: "Lista de privacidad para asistentes locales: descargas, archivos, red, borrado y precisión del modelo.",
        eyebrow: "Privacidad documental",
        lead: "‘Funciona localmente’ solo es útil cuando sabes qué pasos son locales, cuáles necesitan red y qué ocurre con el archivo importado.",
        takeaways: ["Separa las descargas iniciales del uso diario.", "Comprueba la red; no la des por supuesta.", "Localiza archivos, índices y chats.", "Los modelos locales también se equivocan."],
        sections: [
          ["draw-the-boundary", "1. Dibuja el límite de privacidad", ["Enumera descarga de la app, modelo, importación, indexado, generación, actualizaciones y soporte. Puede necesitar internet para instalar y después generar en el Mac.", "Lee la política y los permisos. Busca información concreta sobre cuentas, analítica, fallos y terceros, no solo una etiqueta de ‘offline’." ]],
          ["inspect-storage", "2. Entiende el almacenamiento y el borrado", ["El asistente puede crear texto extraído, índices, miniaturas, historial o caché. Comprueba dónde están y si borrar una conversación elimina sus datos.", "Prueba primero con un archivo no sensible, revisa permisos y define tu propia retención. Borrar el original no siempre borra lo derivado."]],
          ["verify-output", "3. Privacidad no significa precisión", ["Mantener datos en local reduce una exposición, pero no hace correctas las respuestas. Los modelos pequeños pueden omitir contexto o inventar detalles.", "En decisiones legales, médicas o financieras, compara cada afirmación con la fuente y consulta a un profesional cuando corresponda."]]
        ],
        callout: ["Cinco preguntas", "¿Genera tras desconectar? ¿Exige cuenta? ¿Dónde guarda archivos e índices? ¿Se pueden borrar? ¿La analítica es opcional?"],
        table: ["Revisión de privacidad", ["Etapa", "Pregunta", "Buena evidencia"], [["Descarga", "¿Qué llega por red?", "Fuentes identificadas"], ["Importación", "¿Sale el archivo del Mac?", "Política y prueba"], ["Almacenamiento", "¿Qué datos derivados quedan?", "Ubicación y borrado"], ["Respuesta", "¿Cómo trata errores?", "Límites visibles y verificación"]]],
        conclusion: ["Una definición defendible", "Describe el flujo exacto: después de descargar app y modelo, un procesamiento concreto puede funcionar en local y sin cuenta. Lo demás se verifica, no se presupone."]
      },
      ru: {
        title: "Приватный чат с документами на Mac: что должно означать «офлайн»",
        description: "Чек-лист приватности локального помощника: загрузки, файлы, сеть, удаление и точность модели.",
        eyebrow: "Приватность документов",
        lead: "Фраза «работает локально» полезна только тогда, когда понятно, какие этапы локальны, где нужна сеть и что остаётся после импорта файла.",
        takeaways: ["Отделяйте начальную загрузку от ежедневной обработки.", "Проверяйте сетевое поведение.", "Знайте, где лежат файлы, индексы и чаты.", "Локальная модель тоже ошибается."],
        sections: [
          ["draw-the-boundary", "1. Проведите границу приватности", ["Разберите этапы: приложение, модель, импорт, индексирование, генерация, обновления и поддержка. Интернет может требоваться для установки, а дальнейшие запросы выполняться на Mac.", "Читайте политику и системные разрешения. Ищите конкретику об аккаунте, аналитике, отчётах о сбоях и сторонних сервисах."]],
          ["inspect-storage", "2. Разберитесь с хранением и удалением", ["Помощник может создавать извлечённый текст, индекс, миниатюры, историю и кэш. Узнайте, где они хранятся и удаляются ли вместе с диалогом.", "Сначала используйте несекретный файл, проверьте разрешения macOS и задайте собственный срок хранения. Удаление оригинала не всегда удаляет производные данные."]],
          ["verify-output", "3. Приватность не равна точности", ["Локальная обработка снижает один риск, но не делает ответы верными. Маленькие модели пропускают контекст, путают числа и выдумывают детали.", "Юридические, медицинские и финансовые выводы сверяйте с первоисточником и, когда нужно, с профильным специалистом."]]
        ],
        callout: ["Пять вопросов", "Работает ли генерация после отключения сети? Нужен ли аккаунт? Где хранятся файлы и индексы? Можно ли их удалить? Отключается ли аналитика?"],
        table: ["Проверка приватности", ["Этап", "Вопрос", "Хорошее подтверждение"], [["Загрузка", "Что приходит из сети?", "Названные источники"], ["Импорт", "Покидает ли файл Mac?", "Политика и практический тест"], ["Хранение", "Что остаётся?", "Путь и удаление"], ["Ответ", "Как учтены ошибки?", "Ограничения и сверка"]]],
        conclusion: ["Корректное определение офлайн", "После необходимых загрузок конкретная обработка может выполняться локально и без аккаунта. Более широкие обещания нужно проверять отдельно."]
      },
      he: {
        title: "צ'אט פרטי עם מסמכים ב-Mac: מה באמת אומר ‘לא מקוון’",
        description: "רשימת בדיקה לפרטיות: הורדות, קבצים, רשת, מחיקה ודיוק המודל.",
        eyebrow: "פרטיות מסמכים",
        lead: "‘פועל מקומית’ הוא ניסוח שימושי רק כשברור אילו שלבים מקומיים, מה דורש רשת ומה קורה לקובץ לאחר הייבוא.",
        takeaways: ["מפרידים הורדות התקנה מעיבוד יומיומי.", "בודקים התנהגות רשת בפועל.", "יודעים היכן נשמרים קבצים, אינדקסים וצ'אטים.", "גם מודל מקומי טועה."],
        sections: [
          ["draw-the-boundary", "1. מגדירים את גבול הפרטיות", ["ממפים הורדת אפליקציה, מודל, ייבוא, אינדוקס, יצירה, עדכונים ותמיכה. ייתכן שהאינטרנט נדרש להתקנה אך לא לעיבוד מאוחר יותר.", "קוראים מדיניות והרשאות ומחפשים מידע על חשבון, אנליטיקה, דוחות קריסה ושירותי צד שלישי."]],
          ["inspect-storage", "2. מבינים אחסון ומחיקה", ["עוזר מסמכים עשוי ליצור טקסט מחולץ, אינדקס, תמונות ממוזערות, היסטוריה ומטמון. בדקו היכן הם נמצאים ואם מחיקת שיחה מסירה אותם.", "בדקו תחילה קובץ לא רגיש, הרשאות macOS ומדיניות שמירה עצמאית. מחיקת המקור לא תמיד מוחקת מידע נגזר."]],
          ["verify-output", "3. פרטיות אינה דיוק", ["שמירת המידע מקומית מפחיתה סוג מסוים של חשיפה, אך אינה הופכת את התשובות לנכונות. מודלים קטנים עלולים להחמיץ הקשר או להמציא פרטים.", "בנושאים משפטיים, רפואיים ופיננסיים יש להשוות למקור ולהיעזר באיש מקצוע בעת הצורך."]]
        ],
        callout: ["חמש שאלות", "האם היצירה פועלת אחרי ניתוק? האם צריך חשבון? היכן נשמרים קבצים ואינדקסים? אפשר למחוק? האנליטיקה אופציונלית?"],
        table: ["בדיקת פרטיות מקומית", ["שלב", "שאלה", "ראיה טובה"], [["הורדה", "מה מגיע מהרשת?", "מקורות מזוהים"], ["ייבוא", "האם הקובץ עוזב את ה-Mac?", "מדיניות ובדיקה"], ["אחסון", "מה נשאר?", "מיקום ושליטת מחיקה"], ["פלט", "איך מטפלים בטעויות?", "מגבלות ובדיקת מקור"]]],
        conclusion: ["הגדרה מדויקת ללא מקוון", "לאחר הורדות האפליקציה והמודל, עיבוד מוגדר יכול לפעול מקומית וללא חשבון. כל טענה רחבה יותר דורשת אימות."]
      }
    }
  },
  {
    slug: "model-size-memory",
    minutes: 7,
    sources: [
      ["Apple support: Mac memory and storage", "https://support.apple.com/mac"],
      ["LM Studio system requirements", "https://lmstudio.ai/docs/app/system-requirements"],
      ["Jan desktop documentation", "https://jan.ai/docs/desktop/"]
    ],
    translations: {
      en: {
        title: "Apple Silicon, memory and model size: a calm first-run plan",
        description: "Plan a local AI model download around unified memory, storage, context and the real task instead of chasing the largest model.",
        eyebrow: "Hardware planning",
        lead: "A larger model can be more capable, but the best first model is the smallest one that completes your actual task at an acceptable speed.",
        takeaways: ["Keep free storage beyond the model file.", "Leave memory for macOS and other apps.", "Long context also consumes resources.", "Benchmark with your own task and stop when it works."],
        sections: [
          ["budget-resources", "1. Budget more than the download size", ["The model file is only part of the footprint. The app may need working space, indexes and updates, while macOS and your other applications still need memory.", "Close heavy apps for the first test and keep comfortable free disk space. If the Mac starts swapping heavily, a smaller model or shorter context is often a better experience."]],
          ["match-the-task", "2. Match size to the task", ["Short summaries, extraction and basic drafting may work with a compact model. Complex reasoning, multilingual nuance and long documents can benefit from more capacity, but only if the hardware can run it responsively.", "Use the same prompt and document for each test. Compare answer quality, time to first response and whether the interface remains usable."]],
          ["create-a-baseline", "3. Create a repeatable baseline", ["Start with the vendor's smallest recommended model, record the result and move up one step only when a specific weakness matters. Avoid downloading several large models before the workflow is proven.", "Re-test after major app or model changes. Local AI is a moving system, so a dated note about what worked on your Mac is more useful than a generic leaderboard."]]
        ],
        callout: ["The practical stopping rule", "When the smallest model produces a usable answer within your patience threshold, keep it. Upgrade only for a named quality problem, not because a larger file exists."],
        table: ["First-run benchmark", ["Measure", "Record", "Why it matters"], [["Compatibility", "Chip and macOS", "Prevents failed installs"], ["Storage", "Before/after free space", "Reveals full footprint"], ["Responsiveness", "Time to first useful answer", "Reflects daily experience"], ["Quality", "Known-answer score", "Connects size to the task"]]],
        conclusion: ["A better model plan", "Begin small, test a representative task and grow only when the evidence justifies it. Your goal is a dependable workflow, not the biggest model your Mac can barely load."]
      },
      es: {
        title: "Apple Silicon, memoria y tamaño del modelo: un primer inicio sin estrés",
        description: "Planifica la IA local según memoria unificada, almacenamiento, contexto y tarea real, no por el modelo más grande.",
        eyebrow: "Planificación de hardware",
        lead: "Un modelo mayor puede ser más capaz, pero el mejor primer modelo es el más pequeño que resuelve tu tarea a una velocidad aceptable.",
        takeaways: ["Reserva espacio además del archivo del modelo.", "Deja memoria para macOS y otras apps.", "El contexto largo también consume recursos.", "Prueba tu tarea y para cuando funcione."],
        sections: [
          ["budget-resources", "1. Calcula más que el tamaño de descarga", ["El archivo es solo parte de la huella. La app necesita trabajo, índices y actualizaciones; macOS y otras apps también usan memoria.", "Cierra apps pesadas en la primera prueba y conserva espacio libre. Si hay mucho intercambio a disco, prueba un modelo menor o un contexto más corto."]],
          ["match-the-task", "2. Ajusta el tamaño a la tarea", ["Resúmenes y extracción pueden funcionar con un modelo compacto. Razonamiento complejo, matices multilingües y documentos largos pueden necesitar más capacidad si el Mac responde bien.", "Usa el mismo documento y prompt. Compara calidad, tiempo de respuesta y fluidez de la interfaz."]],
          ["create-a-baseline", "3. Crea una referencia repetible", ["Empieza por el modelo mínimo recomendado y sube solo ante una carencia concreta. No descargues varios modelos grandes antes de validar el flujo.", "Repite la prueba tras cambios importantes. Una nota fechada de tu propio Mac vale más que una clasificación genérica."]]
        ],
        callout: ["Regla para detenerse", "Si el modelo más pequeño da una respuesta útil dentro de tu límite de espera, consérvalo. Sube solo para resolver un problema de calidad concreto."],
        table: ["Prueba inicial", ["Medida", "Anota", "Motivo"], [["Compatibilidad", "Chip y macOS", "Evita instalaciones fallidas"], ["Almacenamiento", "Espacio antes/después", "Muestra la huella real"], ["Respuesta", "Tiempo hasta una respuesta útil", "Refleja el uso diario"], ["Calidad", "Prueba con respuesta conocida", "Une tamaño y tarea"]]],
        conclusion: ["Un plan mejor", "Empieza pequeño, prueba una tarea real y crece solo cuando haya evidencia. Buscas un flujo fiable, no el modelo más grande que apenas carga."]
      },
      ru: {
        title: "Apple Silicon, память и размер модели: спокойный план первого запуска",
        description: "Как выбрать локальную модель с учётом общей памяти, места, контекста и реальной задачи, а не максимального размера.",
        eyebrow: "Планирование железа",
        lead: "Крупная модель может быть способнее, но лучшая первая модель — самая маленькая из тех, что решают вашу задачу с приемлемой скоростью.",
        takeaways: ["Оставляйте место сверх размера файла.", "Сохраняйте память для macOS и других приложений.", "Длинный контекст тоже потребляет ресурсы.", "Тестируйте свою задачу и останавливайтесь, когда всё работает."],
        sections: [
          ["budget-resources", "1. Учитывайте больше, чем размер загрузки", ["Файл модели — только часть объёма. Приложению нужно рабочее место, индексы и обновления, а macOS и другие программы продолжают использовать память.", "Для первого теста закройте тяжёлые приложения и оставьте запас диска. При активном swap модель поменьше или короткий контекст часто дают лучший опыт."]],
          ["match-the-task", "2. Подбирайте размер под задачу", ["Короткое резюме и извлечение фактов могут работать на компактной модели. Сложные рассуждения, языковые нюансы и длинные документы требуют больше мощности, если Mac сохраняет отзывчивость.", "Используйте один документ и запрос. Сравнивайте качество, время до ответа и удобство интерфейса."]],
          ["create-a-baseline", "3. Создайте повторяемый базовый тест", ["Начните с минимальной рекомендованной модели и переходите выше только при конкретной проблеме. Не загружайте несколько больших моделей до проверки сценария.", "Повторяйте тест после крупных обновлений. Датированная заметка о вашем Mac полезнее общей таблицы лидеров."]]
        ],
        callout: ["Практическое правило остановки", "Если самая маленькая модель даёт полезный ответ за приемлемое время, оставьте её. Переходите выше только ради конкретного улучшения."],
        table: ["Тест первого запуска", ["Показатель", "Что записать", "Зачем"], [["Совместимость", "Процессор и macOS", "Исключает ошибочную установку"], ["Диск", "Место до и после", "Показывает полный объём"], ["Скорость", "Время до полезного ответа", "Отражает ежедневный опыт"], ["Качество", "Тест с известным ответом", "Связывает размер с задачей"]]],
        conclusion: ["Более разумный план", "Начните с малого, проверьте типовую задачу и увеличивайте модель только по результатам. Цель — надёжная работа, а не максимальный файл."]
      },
      he: {
        title: "Apple Silicon, זיכרון וגודל מודל: תוכנית רגועה להפעלה ראשונה",
        description: "מתכננים מודל AI מקומי לפי זיכרון מאוחד, אחסון, הקשר והמשימה האמיתית, לא לפי הגודל המרבי.",
        eyebrow: "תכנון חומרה",
        lead: "מודל גדול יכול להיות חזק יותר, אבל המודל הראשון הטוב ביותר הוא הקטן ביותר שמבצע את המשימה במהירות סבירה.",
        takeaways: ["שומרים אחסון פנוי מעבר לקובץ המודל.", "משאירים זיכרון ל-macOS ולאפליקציות.", "הקשר ארוך צורך משאבים.", "בודקים משימה אמיתית ועוצרים כשזה עובד."],
        sections: [
          ["budget-resources", "1. מתכננים מעבר לגודל ההורדה", ["קובץ המודל הוא רק חלק מהנפח. האפליקציה צריכה מקום עבודה, אינדקסים ועדכונים, ו-macOS ממשיכה להשתמש בזיכרון.", "סגרו אפליקציות כבדות לבדיקה ושמרו מרווח דיסק. אם יש שימוש רב ב-swap, מודל קטן או הקשר קצר יכולים להיות נוחים יותר."]],
          ["match-the-task", "2. מתאימים את הגודל למשימה", ["סיכום קצר וחילוץ מידע יכולים לעבוד במודל קומפקטי. ניתוח מורכב, ניואנסים רב-לשוניים ומסמכים ארוכים עשויים להרוויח ממודל גדול אם ה-Mac נשאר מהיר.", "השתמשו באותו קובץ ובאותה שאלה והשוו איכות, זמן תגובה ושימושיות."]],
          ["create-a-baseline", "3. יוצרים קו בסיס שחוזר על עצמו", ["מתחילים במודל הקטן המומלץ ועולים רק כשיש חולשה מוגדרת. לא מורידים כמה מודלים גדולים לפני שהתהליך הוכח.", "בודקים מחדש אחרי עדכונים. הערה מתוארכת על ה-Mac שלכם שימושית יותר מדירוג כללי."]]
        ],
        callout: ["כלל עצירה מעשי", "אם המודל הקטן ביותר נותן תשובה שימושית בזמן סביר, השאירו אותו. משדרגים רק בגלל בעיית איכות מוגדרת."],
        table: ["בדיקת הפעלה ראשונה", ["מדד", "מה לרשום", "למה"], [["תאימות", "שבב ו-macOS", "מונע התקנה כושלת"], ["אחסון", "לפני ואחרי", "חושף את הנפח המלא"], ["תגובתיות", "זמן לתשובה שימושית", "משקף שימוש יומי"], ["איכות", "מבחן עם תשובה ידועה", "מחבר גודל למשימה"]]],
        conclusion: ["תוכנית טובה יותר", "מתחילים קטן, בודקים משימה מייצגת וגדלים רק כשהתוצאות מצדיקות זאת. המטרה היא תהליך אמין, לא המודל הגדול ביותר."]
      }
    }
  }
];
