export const monthlyFee = 5500;
export const site = 'https://9881988-lgtm.github.io/tiberias-plumbing/digital-agency/';
export const branch = 'hotel-consulting/cyprus/';
export const brand = 'Eydelstein Digital Lab';
export const phone = '+972 50 302 70 14';
export const email = 'tib778877@gmail.com';
export const languages = {en:'English', he:'עברית', ru:'Русский', el:'Ελληνικά'};
export const pathFor = lang => lang === 'en' ? '' : lang + '/';
export const pdfFor = lang => 'hotel-consulting-cyprus-' + lang + '.pdf';
export const priceFor = lang => new Intl.NumberFormat({en:'en-IE',he:'en-IE',ru:'ru-RU',el:'el-CY'}[lang], {style:'currency',currency:'EUR',maximumFractionDigits:0}).format(monthlyFee);
export const photo = 'hotel-consulting/hotel-reception.jpg';

export const words = {
  en: {
    title:'Hotel consulting in Cyprus',
    description:'Operations consulting for Cyprus hotels: direct bookings, revenue management, multilingual AI reception, CRM and hotel IT.',
    lead:'Connect reservations, guest service and daily operations. Start with one property, verify the pilot and roll out what works.',
    country:'Cyprus', proposal:'Commercial proposal', package:'Base plan', month:'per month, excluding VAT', support:'24/7 support included',
    scope:'Scope and costs', terms:'We agree the properties and room count, integrations and support response times in your proposal. Telephony, third-party licences and advertising budgets are quoted separately. VAT is not included.',
    documents:'Download the proposal', documentNote:'Four-page PDF. Choose your language.',
    languages:'Languages', skip:'Skip to content', back:'Hotel consulting', contact:'Discuss your hotel',
    contactNote:'Tell us your location, number of rooms and current booking system. We can then agree where a first pilot would help most.',
    sections:[
      ['Reservations and guest service','Start with sales channels, pricing and the enquiries your reception handles every day.',[
        ['Direct bookings and channels','Connect Booking.com, Expedia and other suitable channels through your PMS and channel manager. Test availability, rate updates, reservations, changes and cancellations. We can also set up a direct booking site and payment integration if agreed.'],
        ['Rates and occupancy','Compare equivalent rooms, dates, meal plans and cancellation terms. Use seasonality, occupancy and channel commissions to recommend rates. Enable automation only within limits approved by your team.'],
        ['Multilingual AI reception','Start with Greek and English; scope additional languages for your guests. Handle common calls and arrival questions using approved instructions. Escalate exceptions to your staff and invite all eligible guests to leave honest reviews.'],
        ['Marketing and reporting','Plan weekly content, local SEO and Google Business Profile updates. Run Google and Meta campaigns only within approved budgets. Track occupancy, average daily rate and the share of direct bookings.'],
      ]],
      ['Team, operations and IT','Set ownership and make handovers visible across departments.',[
        ['Staff and shifts','Organise employee records, onboarding, shift plans, hours and leave. Prepare draft employment documents for approval and signature by your team.'],
        ['Housekeeping and procurement','Assign room turnaround and inspections. Track room readiness, linen, stock and purchase requests. Log maintenance tasks and owners.'],
        ['Finance and documents','Prepare reconciliation of payments, commissions, deposits and refunds. Help organise payroll inputs and draft reports or supplier documents. Your local accountant or legal adviser reviews regulated matters; formal advice and representation are not included.'],
        ['Hotel IT and office support','Scope CRM, PMS, booking website and payment connections. Manage agreed access, backups and recovery checks. Help route enquiries and prepare replies for approval. Support is included 24/7; response times are agreed.'],
      ]],
      ['Channels and rollout','Use only channels that fit the property and the guests you serve.',[
        ['Hotels and resorts','Evaluate Booking.com, Expedia and Agoda alongside direct bookings. Consider Google Hotels and trivago for comparison traffic, subject to eligibility and connectivity.'],
        ['Aparthotels and groups','Consider Airbnb or Vrbo where the property fits their policies. Assess Bedbank or corporate distribution where relevant. Terms, commissions and access are checked before connecting.'],
        ['1. Baseline review','Review occupancy, booking mix, commissions and the current systems. Choose one workflow and agree how the pilot will be measured.'],
        ['2. Pilot and rollout','Run test reservations, rate changes and staff handovers. Extend only after acceptance, with staff training and agreed support response times.'],
      ]],
    ],
  },
  ru: {
    title:'Консалтинг для отелей Кипра',
    description:'Операционный консалтинг для отелей Кипра: прямые бронирования, управление тарифами, многоязычный AI-ресепшн, CRM и IT.',
    lead:'Объединяем бронирования, гостевой сервис и ежедневную работу отеля. Начинаем с одного объекта и расширяем внедрение после проверки пилота.',
    country:'Кипр', proposal:'Коммерческое предложение', package:'Базовый пакет', month:'в месяц, без НДС', support:'Поддержка 24/7 включена',
    scope:'Условия и дополнительные расходы', terms:'Число объектов и номеров, интеграции и сроки реакции поддержки фиксируем в предложении. Телефония, лицензии сторонних сервисов и рекламный бюджет рассчитываются отдельно. НДС не включён.',
    documents:'Скачать предложение', documentNote:'Четыре страницы в PDF. Выберите язык.',
    languages:'Языки', skip:'К содержанию', back:'Консалтинг для отелей', contact:'Обсудить ваш отель',
    contactNote:'Укажите город, число номеров и текущую систему бронирования. Вместе определим, с какого процесса начать пилот.',
    sections:[
      ['Бронирования и гостевой сервис','Начинаем с каналов продаж, тарифов и типовых обращений на ресепшн.',[
        ['Прямые продажи и каналы','Подключаем Booking.com, Expedia и другие подходящие каналы через PMS и менеджер каналов. Проверяем наличие номеров, обновление тарифов, брони, изменения и отмены. По согласованию настраиваем сайт прямого бронирования и приём оплаты.'],
        ['Тарифы и загрузка','Сравниваем сопоставимые номера, даты, питание и условия отмены. Учитываем сезонность, загрузку и комиссии. Автоматическое обновление цен включаем только в утверждённых вами пределах.'],
        ['Многоязычный AI-ресепшн','Начинаем с греческого и английского; дополнительные языки согласуем под ваших гостей. Ассистент отвечает на типовые звонки и вопросы о заезде, сложные случаи передаёт сотруднику. Просим честный отзыв у всех гостей, которым он доступен.'],
        ['Маркетинг и отчётность','Планируем еженедельный контент, локальное SEO и обновления профиля Google. Кампании Google и Meta ведём в согласованном бюджете. Отслеживаем загрузку, средний тариф и долю прямых броней.'],
      ]],
      ['Команда, операции и IT','Фиксируем ответственных и упрощаем передачу задач между сменами.',[
        ['Персонал и графики','Ведём карточки сотрудников, оформление, графики, рабочие часы и отпуска. Готовим проекты трудовых документов для проверки и подписи вашей командой.'],
        ['Номерной фонд и закупки','Назначаем уборки и проверки, отслеживаем готовность номеров, бельё и расходники. Фиксируем заявки на закупку, задачи по обслуживанию и ответственных.'],
        ['Финансы и документы','Готовим сверки оплат, комиссий, депозитов и возвратов. Помогаем собрать данные для расчёта зарплаты и проекты отчётов или договоров. Вопросы местного регулирования проверяет ваш бухгалтер или юрист; официальные консультации и представительство не входят.'],
        ['IT отеля и помощь офису','Согласуем подключение CRM, PMS, сайта и оплаты. Настраиваем доступ, резервное копирование и проверку восстановления. Помогаем распределять запросы и готовить ответы на согласование. Поддержка 24/7 включена; сроки реакции согласуются.'],
      ]],
      ['Каналы продаж и запуск','Подбираем каналы под тип отеля и аудиторию.',[
        ['Гостиницы и курорты','Рассматриваем Booking.com, Expedia и Agoda параллельно с прямыми бронями. Google Hotels и trivago оцениваем как источники переходов при доступном подключении.'],
        ['Апарт-отели и группы','Рассматриваем Airbnb или Vrbo, если объект соответствует правилам платформы. Для групп оцениваем корпоративные и оптовые каналы. Условия, комиссии и доступ проверяем до подключения.'],
        ['1. Исходная диагностика','Изучаем загрузку, структуру продаж, комиссии и текущие системы. Выбираем один процесс и согласуем критерии пилота.'],
        ['2. Пилот и внедрение','Проверяем тестовые брони, обновление цен и передачу задач. Внедряем остальные модули после приёмки, с обучением команды и согласованными сроками поддержки.'],
      ]],
    ],
  },
  he: {
    title:'ייעוץ תפעולי למלונות בקפריסין',
    description:'ייעוץ וניהול תפעול למלונות בקפריסין: הזמנות ישירות, ניהול תעריפים, מענה קולי רב־לשוני, CRM ומערכות מלונאיות.',
    lead:'מחברים בין ההזמנות, שירות האורחים והתפעול היומיומי. מתחילים בנכס אחד ומרחיבים את ההטמעה לאחר בדיקת הפיילוט.',
    country:'קפריסין', proposal:'הצעה מסחרית', package:'חבילת בסיס', month:'לחודש, לא כולל מע״מ', support:'תמיכה 24/7 כלולה',
    scope:'תנאים ועלויות נוספות', terms:'מספר הנכסים והחדרים, החיבורים וזמני התגובה של התמיכה יוגדרו בהצעה למלון. טלפוניה, רישיונות של ספקים חיצוניים ותקציב פרסום מתומחרים בנפרד. המחיר אינו כולל מע״מ.',
    documents:'הורדת ההצעה', documentNote:'מסמך PDF בן ארבעה עמודים. בחרו שפה.',
    languages:'שפות', skip:'דילוג לתוכן', back:'ייעוץ למלונות', contact:'בואו נדבר על המלון שלכם',
    contactNote:'ספרו לנו היכן המלון, כמה חדרים יש בו ובאיזו מערכת הזמנות אתם עובדים. יחד נחליט באיזה תהליך להתחיל.',
    sections:[
      ['הזמנות ושירות לאורחים','מתחילים בערוצי מכירה, תעריפים ובפניות השוטפות לקבלה.',[
        ['הזמנות ישירות וערוצי הפצה','מחברים את Booking.com, את Expedia וערוצים מתאימים דרך מערכת ניהול המלון ומנהל הערוצים. בודקים זמינות, עדכוני תעריפים, הזמנות, שינויים וביטולים. לפי הצורך, מקימים אתר להזמנות ישירות ומחברים תשלום.'],
        ['תעריפים ותפוסה','משווים חדרים ותאריכים מקבילים, סוגי אירוח ותנאי ביטול. מתחשבים בעונתיות, בתפוסה ובעמלות. עדכון אוטומטי מופעל רק בגבולות שאישרתם.'],
        ['קבלה קולית רב־לשונית','מתחילים ביוונית ובאנגלית ומתאמים שפות נוספות לפי קהל האורחים. המענה מטפל בשיחות ובשאלות נפוצות לפני הגעה, ומעביר מקרים חריגים לצוות. מזמינים את כל האורחים הזכאים לתת משוב אמיתי.'],
        ['שיווק ודוחות','מתכננים תוכן שבועי, קידום מקומי ועדכונים לפרופיל העסק ב־Google. קמפיינים ב־Google וב־Meta מופעלים רק בתקציב מאושר. עוקבים אחר תפוסה, תעריף יומי ממוצע ושיעור ההזמנות הישירות.'],
      ]],
      ['צוות, תפעול ומחשוב','מגדירים תחומי אחריות ומוודאים שהמשימות עוברות בין המשמרות.',[
        ['עובדים ומשמרות','מנהלים רישומי עובדים, קליטה, סידור עבודה, שעות וחופשות. מכינים טיוטות של מסמכי העסקה לאישור ולחתימה של הצוות המוסמך.'],
        ['משק בית ורכש','מקצים משימות ניקיון וביקורת ועוקבים אחר מוכנות החדרים, מצעים ומלאי. מתעדים בקשות רכש, משימות תחזוקה ואחראים.'],
        ['כספים ומסמכים','מסייעים בהתאמת תשלומים, עמלות, פיקדונות והחזרים, באיסוף נתוני שכר ובהכנת טיוטות לדוחות ולמסמכי ספקים. נושאים מוסדרים נבדקים בידי רואה החשבון או היועץ המשפטי המקומי שלכם. ייעוץ רשמי וייצוג אינם כלולים.'],
        ['מחשוב המלון וסיוע למשרד','מתאמים חיבור בין CRM, מערכת ניהול המלון, האתר וסליקת תשלומים. מגדירים הרשאות וגיבויים ובודקים שחזור. מנתבים פניות ומכינים תשובות לאישור. התמיכה כלולה 24/7; זמני תגובה יסוכמו מראש.'],
      ]],
      ['ערוצי מכירה והטמעה','בוחרים ערוצים שמתאימים לסוג הנכס ולקהל האורחים.',[
        ['מלונות ואתרי נופש','בוחנים את Booking.com, את Expedia ואת Agoda לצד הזמנות ישירות. בודקים את Google Hotels ואת trivago כמקורות תנועה, בהתאם לזכאות ולחיבור הזמין.'],
        ['מלונות דירות וקבוצות','בוחנים את Airbnb או את Vrbo אם הנכס מתאים לתנאי הפלטפורמה, וכן ערוצים סיטונאיים או עסקיים לפי הצורך. בודקים תנאים, עמלות וגישה לפני חיבור.'],
        ['1. תמונת מצב','בודקים תפוסה, תמהיל הזמנות, עמלות ומערכות קיימות. בוחרים תהליך אחד ומסכמים איך יימדד הפיילוט.'],
        ['2. פיילוט והטמעה','בודקים הזמנות לדוגמה, שינויי תעריפים והעברת משימות בין משמרות. מרחיבים אחרי אישור הפיילוט, מדריכים את הצוות ומסכמים זמני תמיכה.'],
      ]],
    ],
  },
  el: {
    title:'Συμβουλευτική για ξενοδοχεία στην Κύπρο',
    description:'Οργάνωση λειτουργίας για ξενοδοχεία στην Κύπρο: απευθείας κρατήσεις, διαχείριση τιμών, πολύγλωσση υποδοχή με AI, CRM και IT.',
    lead:'Συνδέουμε τις κρατήσεις, την εξυπηρέτηση επισκεπτών και τις καθημερινές εργασίες. Ξεκινάμε με μία μονάδα και επεκτείνουμε ό,τι αποδίδει στην πιλοτική εφαρμογή.',
    country:'Κύπρος', proposal:'Εμπορική πρόταση', package:'Βασικό πακέτο', month:'τον μήνα, χωρίς ΦΠΑ', support:'Περιλαμβάνεται υποστήριξη 24/7',
    scope:'Αντικείμενο και πρόσθετο κόστος', terms:'Ο αριθμός μονάδων και δωματίων, οι διασυνδέσεις και οι χρόνοι απόκρισης καθορίζονται στην πρόταση για το ξενοδοχείο σας. Τηλεφωνία, άδειες τρίτων και διαφημιστική δαπάνη κοστολογούνται χωριστά. Δεν περιλαμβάνεται ΦΠΑ.',
    documents:'Λήψη της πρότασης', documentNote:'Τετρασέλιδο PDF. Επιλέξτε γλώσσα.',
    languages:'Γλώσσες', skip:'Μετάβαση στο περιεχόμενο', back:'Ξενοδοχειακή συμβουλευτική', contact:'Ας μιλήσουμε για το ξενοδοχείο σας',
    contactNote:'Πείτε μας την περιοχή, τον αριθμό δωματίων και το σύστημα κρατήσεων που χρησιμοποιείτε. Θα συμφωνήσουμε ποια διαδικασία αξίζει να δοκιμάσουμε πρώτη.',
    sections:[
      ['Κρατήσεις και εξυπηρέτηση επισκεπτών','Ξεκινάμε από τα κανάλια πωλήσεων, την τιμολόγηση και τα καθημερινά αιτήματα της υποδοχής.',[
        ['Απευθείας κρατήσεις και κανάλια','Συνδέουμε Booking.com, Expedia και κατάλληλα κανάλια μέσω του PMS και του διαχειριστή καναλιών. Ελέγχουμε διαθεσιμότητα, ενημέρωση τιμών, κρατήσεις, αλλαγές και ακυρώσεις. Εφόσον συμφωνηθεί, στήνουμε ιστοσελίδα για απευθείας κρατήσεις και σύνδεση πληρωμών.'],
        ['Τιμές και πληρότητα','Συγκρίνουμε αντίστοιχα δωμάτια, ημερομηνίες, παροχές γευμάτων και όρους ακύρωσης. Συνυπολογίζουμε εποχικότητα, πληρότητα και προμήθειες. Η αυτόματη ενημέρωση τιμών γίνεται μόνο εντός των ορίων που εγκρίνετε.'],
        ['Πολύγλωσση υποδοχή με AI','Ξεκινάμε με ελληνικά και αγγλικά και συμφωνούμε επιπλέον γλώσσες ανάλογα με το κοινό σας. Ο βοηθός απαντά σε συνήθεις κλήσεις και ερωτήσεις άφιξης. Τα ιδιαίτερα περιστατικά περνούν στο προσωπικό. Όλοι οι επιλέξιμοι επισκέπτες καλούνται να αφήσουν ειλικρινή αξιολόγηση.'],
        ['Μάρκετινγκ και αναφορές','Σχεδιάζουμε εβδομαδιαίο περιεχόμενο, τοπικό SEO και ενημερώσεις του Εταιρικού Προφίλ Google. Οι καμπάνιες Google και Meta μένουν στον συμφωνημένο προϋπολογισμό. Παρακολουθούμε πληρότητα, μέση ημερήσια τιμή και ποσοστό απευθείας κρατήσεων.'],
      ]],
      ['Ομάδα, λειτουργία και IT','Ορίζουμε υπευθύνους και κάνουμε τις εκκρεμότητες ορατές στην επόμενη βάρδια.',[
        ['Προσωπικό και βάρδιες','Οργανώνουμε αρχεία εργαζομένων, ένταξη προσωπικού, βάρδιες, ώρες και άδειες. Συντάσσουμε προσχέδια εγγράφων εργασίας για έλεγχο και υπογραφή από την ομάδα σας.'],
        ['Οροφοκομία και προμήθειες','Αναθέτουμε καθαρισμούς και ελέγχους δωματίων, παρακολουθούμε ετοιμότητα, ιματισμό και αναλώσιμα. Καταγράφουμε αιτήματα αγορών και εργασίες συντήρησης.'],
        ['Οικονομικά και έγγραφα','Βοηθάμε στη συμφωνία πληρωμών, προμηθειών, καταθέσεων και επιστροφών, στη συγκέντρωση στοιχείων μισθοδοσίας και σε προσχέδια αναφορών ή εγγράφων προμηθευτών. Ο τοπικός λογιστής ή νομικός σας χειρίζεται τα ρυθμιζόμενα θέματα. Δεν περιλαμβάνεται επίσημη συμβουλή ή εκπροσώπηση.'],
        ['Ξενοδοχειακό IT και γραμματεία','Συμφωνούμε τις διασυνδέσεις CRM, PMS, ιστοσελίδας και πληρωμών. Ρυθμίζουμε προσβάσεις, αντίγραφα ασφαλείας και ελέγχους επαναφοράς. Δρομολογούμε αιτήματα και ετοιμάζουμε απαντήσεις προς έγκριση. Περιλαμβάνεται υποστήριξη 24/7 με συμφωνημένους χρόνους απόκρισης.'],
      ]],
      ['Κανάλια πωλήσεων και υλοποίηση','Επιλέγουμε κανάλια ανάλογα με τη μονάδα και το κοινό της.',[
        ['Ξενοδοχεία και θέρετρα','Εξετάζουμε Booking.com, Expedia και Agoda μαζί με τις απευθείας κρατήσεις. Αξιολογούμε Google Hotels και trivago ως πηγές επισκεψιμότητας, εφόσον υπάρχει δυνατότητα σύνδεσης.'],
        ['Επιπλωμένα διαμερίσματα και ομάδες','Εξετάζουμε Airbnb ή Vrbo εφόσον το κατάλυμα πληροί τους όρους τους, καθώς και εταιρικά ή χονδρικά κανάλια όπου χρειάζεται. Επιβεβαιώνουμε όρους, προμήθειες και πρόσβαση πριν από τη διασύνδεση.'],
        ['1. Αρχική αποτύπωση','Ελέγχουμε πληρότητα, μείγμα κρατήσεων, προμήθειες και υπάρχοντα συστήματα. Επιλέγουμε μία διαδικασία και ορίζουμε πώς θα αξιολογηθεί η δοκιμή.'],
        ['2. Πιλοτική εφαρμογή και επέκταση','Δοκιμάζουμε κρατήσεις, αλλαγές τιμών και παράδοση εκκρεμοτήτων μεταξύ βαρδιών. Επεκτείνουμε μετά την αποδοχή του πιλοτικού, με εκπαίδευση προσωπικού και συμφωνημένους χρόνους υποστήριξης.'],
      ]],
    ],
  },
};
