export const workflows = {
  ru: {
    title:'Внедрение ИИ в бизнес', desc:'Автоматизация продаж, документов, поддержки и отчётности. Подбираем ИИ-агентов под ваши процессы и проверяем на пилоте, сколько ручной работы они снимают.',
    lead:'Сколько раз сотрудник переписывает одну заявку: из письма в CRM, из CRM в таблицу, из таблицы в отчёт? Мы соединяем эти шаги, чтобы команда тратила время на клиента, а не на перенос данных.',
    cta:'Обсудить мой процесс', browse:'Примеры по отделам', back:'Услуги студии', skip:'К содержанию',
    example:'Пример для отдела продаж', flow:'От письма до готового предложения',
    steps:[['Поступает запрос','Клиент присылает письмо со списком товаров. Система выделяет позиции и отмечает, каких данных не хватает.'],['Готовится черновик','Система подбирает позиции по согласованному прайсу. Если цены нет, она оставляет строку на проверку.'],['Менеджер решает','Менеджер проверяет цену и условия. Только после его подтверждения система отправляет предложение и записывает следующий шаг в CRM.']],
    cases:'Какую работу можно передать системе', metric:'Что измерить',
    uses:[
      ['Продажи и CRM','Разбирать входящие заявки, находить дубли, заполнять карточки и напоминать менеджеру, кому обещали перезвонить.','Время до первого ответа; заявки без ответственного.'],
      ['Поддержка и звонки','Отвечать по утверждённой базе знаний и собирать детали обращения. Если ответа нет, сотрудник получает вопрос вместе с историей разговора.','Время ожидания; повторные обращения по той же теме.'],
      ['Документы и учёт','Извлекать реквизиты из счетов и заказов, сверять строки и передавать расхождения бухгалтеру. Платежи система не проводит.','Минуты на документ; ошибки после проверки.'],
      ['Бронирования и выезды','Проверять свободное время в подключённом календаре, готовить подтверждения и напоминания, а спорные переносы передавать диспетчеру.','Время на запись; конфликты расписания.'],
      ['Склад и закупки','Сверять остатки с заказами, отмечать позиции ниже согласованного запаса и составлять черновик заявки поставщику.','Часы на сверку; пропущенные позиции.'],
      ['Маркетинг и интернет-магазин','Готовить описания товаров по проверенным характеристикам, переводы и варианты объявлений. Редактор утверждает их до публикации.','Время до публикации; доля текстов, требующих правок.'],
      ['Отчёты руководителю','Собирать показатели из CRM и таблиц по согласованным формулам, показывать источник и дату каждой цифры.','Часы на подготовку отчёта; расхождения с источниками.'],
      ['База знаний и адаптация сотрудников','Находить нужный пункт инструкции, давать ссылку на документ и передавать вопрос наставнику, если правила нет.','Время поиска; вопросы, оставшиеся без ответа.'],
      ['Разработка и внутренние инструменты','С помощью Codex создаём интеграции, кабинеты сотрудников и автоматические тесты. Инженер проверяет изменения до выпуска.','Время выпуска; повторяющиеся ошибки после обновлений.']
    ],
    pilot:'Как понять, окупится ли внедрение?', baseline:'Выбираем одну частую операцию. Замеряем объём, время и ошибки до внедрения. Проверяем прототип на обезличенных примерах, затем сравниваем те же показатели с учётом времени на проверку и стоимости эксплуатации.',
    calc:'Пример расчёта, не прогноз: 120 заявок в месяц × 5 минут чистой экономии на заявке = 10 часов команды в месяц. Если выгода не покрывает расходы, расширять пилот не стоит.',
    scope:'Что мы называем «суперинтеллектом для бизнеса»', guard:'Это не универсальный разум. Мы подбираем модели для конкретных задач и используем Codex для разработки и тестирования связей с вашими системами. Если достаточно обычного правила, используем правило. До запуска согласуем права доступа, сроки хранения и журнал действий. Платежи, нестандартные скидки и другие ответственные решения остаются за человеком; у команды есть ручной режим.',
    close:'Что у вас до сих пор делают вручную?', brief:'Назовите одну задачу, как часто она повторяется и в каких программах работает команда. Для первого обсуждения не нужны пароли или данные клиентов.'
  },
  en: {
    title:'AI implementation for business', desc:'Automate sales admin, documents, support and reporting. We build AI workflows around your tools and measure the time saved in a pilot.',
    lead:'How often does someone copy the same enquiry from an email into your CRM, then into a spreadsheet for a report? We connect those steps so your team can spend that time with customers instead.',
    cta:'Discuss my workflow', browse:'Explore use cases', back:'Agency services', skip:'Skip to content',
    example:'Sales desk example', flow:'From an email to a quote',
    steps:[['An enquiry arrives','A customer emails a list of items. The system extracts each line and flags missing details.'],['A quote is drafted','Items are matched to your approved price list. If no price is found, the line is left for review.'],['The sales rep decides','The rep checks prices and terms. Only after approval does the system send the quote and record the next action in the CRM.']],
    cases:'What your team can hand over', metric:'What to measure',
    uses:[
      ['Sales and CRM','Triage incoming enquiries, detect duplicates, fill in records and remind reps about promised calls.','Time to first response; leads without an owner.'],
      ['Support and calls','Answer from approved guidance, collect details and hand the case history to an agent when no answer is documented.','Wait time; repeat contacts on the same issue.'],
      ['Documents and finance admin','Extract invoice and order details, reconcile line items and flag differences for an accountant. No automatic payments.','Minutes per document; errors after review.'],
      ['Bookings and field service','Check a connected calendar, prepare confirmations and reminders, and flag conflicting changes for the dispatcher.','Booking time; scheduling conflicts.'],
      ['Stock and purchasing','Compare orders with stock, flag items below an agreed threshold and draft a purchase request.','Reconciliation time; overlooked items.'],
      ['Marketing and ecommerce','Draft listings from verified specifications, prepare translations and ad variants. An editor approves publication.','Time to publish; drafts needing corrections.'],
      ['Management reporting','Combine CRM and spreadsheet figures using agreed formulas, with a source and reporting date for each figure.','Preparation hours; discrepancies with source data.'],
      ['Internal knowledge and onboarding','Find an instruction, link to the current document and refer the question to a colleague when no policy covers it.','Search time; questions left unanswered.'],
      ['Engineering and internal tools','We use Codex to build connectors, internal tools and automated tests. An engineer reviews changes before release.','Release time; recurring defects after updates.']
    ],
    pilot:'Is the workflow worth automating?', baseline:'Pick one frequent task. Record volume, handling time and errors before changing anything. Test on de-identified examples, then compare the same measures, including review time and running costs.',
    calc:'Illustration, not a forecast: 120 enquiries per month × 5 net minutes saved per enquiry = 10 team hours per month. If the benefit does not cover the cost, do not scale the pilot.',
    scope:'What we mean by “business superintelligence”', guard:'This is not a general-purpose superintelligence. We choose models for specific tasks and use Codex to build and test the software connecting them to your tools. Where a simple rule is enough, we use one. Before launch we agree on access, retention and activity logs. People approve payments, exceptional discounts and other consequential decisions, and can switch back to manual processing.',
    close:'What is your team still doing by hand?', brief:'Tell us one task, how often it happens and which tools it touches. We do not need passwords or customer records for the first conversation.'
  },
  he: {
    title:'הטמעת בינה מלאכותית בעסקים', desc:'אוטומציה של מכירות, מסמכים, שירות ודוחות. מחברים סוכני AI לכלים של הצוות ובודקים בפיילוט כמה עבודה ידנית באמת נחסכת.',
    lead:'כמה פעמים צריך להעתיק את אותה פנייה מהמייל ל־CRM, משם לגיליון ולבסוף לדוח? אנחנו מחברים בין השלבים כדי שהצוות יוכל להקדיש את הזמן הזה ללקוחות.',
    cta:'נדבר על התהליך שלכם', browse:'דוגמאות לפי מחלקה', back:'שירותי הסטודיו', skip:'דילוג לתוכן',
    example:'דוגמה ממחלקת המכירות', flow:'ממייל נכנס להצעת מחיר',
    steps:[['הבקשה מתקבלת','לקוח שולח רשימת פריטים במייל. המערכת מחלצת את הפריטים ומסמנת אילו פרטים חסרים.'],['נבנית טיוטה','המערכת מתאימה את הפריטים למחירון שאישרתם. כשמחיר לא נמצא, השורה נשארת לבדיקה.'],['נציג המכירות מאשר','הנציג בודק את המחירים והתנאים. רק לאחר האישור המערכת שולחת את ההצעה ומתעדת את המשימה הבאה ב־CRM.']],
    cases:'איזו עבודה אפשר להעביר למערכת?', metric:'מה מודדים',
    uses:[
      ['מכירות ו־CRM','מיון פניות נכנסות, איתור כפילויות, עדכון כרטיסי לקוחות ותזכורות לנציגים שהבטיחו לחזור ללקוח.','זמן עד למענה ראשון; פניות ללא נציג אחראי.'],
      ['שירות ומוקד טלפוני','מענה מתוך מאגר מאושר ואיסוף פרטי הפנייה. כשאין תשובה מתועדת, נציג אנושי מקבל את הפנייה עם היסטוריית השיחה.','זמן המתנה; פניות חוזרות באותו נושא.'],
      ['מסמכים והנהלת חשבונות','חילוץ נתונים מחשבוניות ומהזמנות, השוואת שורות והעברת פערים לבדיקת הנהלת החשבונות. אין ביצוע תשלומים אוטומטי.','דקות למסמך; טעויות שנותרו לאחר הבדיקה.'],
      ['הזמנות ושירות בשטח','בדיקת זמינות ביומן מחובר, הכנת אישורים ותזכורות והעברת התנגשויות בשיבוץ לסדרן.','זמן לקביעת תור; התנגשויות ביומן.'],
      ['מלאי ורכש','השוואת הזמנות למלאי, סימון פריטים שירדו מתחת לסף שנקבע והכנת טיוטת הזמנה לספק.','זמן התאמת מלאי; פריטים שנשמטו.'],
      ['שיווק ומסחר מקוון','ניסוח תיאורי מוצרים מתוך מפרט בדוק, תרגומים וגרסאות למודעות. הפרסום מותנה באישור עורך.','זמן עד לפרסום; שיעור הטיוטות שדורשות תיקון.'],
      ['דוחות ניהוליים','ריכוז נתונים מה־CRM ומגיליונות לפי נוסחאות מוסכמות, עם מקור ותאריך לכל נתון.','שעות הכנת דוח; פערים מול נתוני המקור.'],
      ['ידע ארגוני וקליטת עובדים','איתור סעיף בנוהל וקישור למסמך העדכני. אם אין נוהל מתאים, השאלה מועברת לאיש צוות.','זמן חיפוש; שאלות שנותרו ללא מענה.'],
      ['פיתוח וכלים פנימיים','בעזרת Codex אנחנו בונים חיבורים בין מערכות, כלים לצוות ובדיקות אוטומטיות. מהנדס בודק את השינויים לפני ההפצה.','זמן עד לשחרור גרסה; תקלות שחוזרות לאחר עדכונים.']
    ],
    pilot:'איך בודקים אם ההטמעה משתלמת?', baseline:'בוחרים פעולה שחוזרת לעיתים קרובות ומודדים את היקף העבודה, זמן הטיפול ומספר הטעויות. בודקים אבטיפוס על דוגמאות ללא פרטים מזהים ומשווים לאותם מדדים, כולל זמן הבקרה ועלות התפעול.',
    calc:'דוגמה לחישוב בלבד: 120 פניות בחודש כפול 5 דקות שנחסכו נטו בכל פנייה הן 10 שעות צוות בחודש. אם התועלת לא מכסה את העלות, לא מרחיבים את הפיילוט.',
    scope:'למה אנחנו מתכוונים ב״בינת־על לעסקים״?', guard:'לא מדובר במערכת שיודעת לעשות הכול. אנחנו בוחרים מודלים למשימות מוגדרות ונעזרים ב־Codex לכתיבה ולבדיקה של החיבורים למערכות שלכם. כשכלל פשוט מספיק, אין צורך במודל. לפני ההפעלה מסכמים הרשאות, משך שמירת נתונים ותיעוד פעולות. תשלומים, הנחות חריגות והחלטות מהותיות נשארים באישור אנושי, והצוות יכול לעבור לעבודה ידנית.',
    close:'מה הצוות שלכם עדיין עושה ידנית?', brief:'ספרו לנו על משימה אחת, באיזו תדירות היא חוזרת ובאילו כלים אתם משתמשים. בשיחה הראשונה אין צורך בסיסמאות או בפרטים של לקוחות.'
  },
  fr: {
    title:'Intégration de l’IA en entreprise', desc:'Automatisez le suivi commercial, les documents, le support et les rapports. Un pilote mesure le temps gagné avec les outils de votre équipe.',
    lead:'Combien de fois faut-il recopier la même demande, du courriel au CRM, puis du tableur au rapport ? Nous relions ces étapes pour que votre équipe consacre ce temps aux clients.',
    cta:'Parler de mon processus', browse:'Exemples par métier', back:'Services du studio', skip:'Aller au contenu',
    example:'Exemple au service commercial', flow:'Du courriel au devis',
    steps:[['La demande arrive','Un client envoie une liste de produits. Le système en extrait les lignes et signale les renseignements manquants.'],['Le devis se prépare','Le système rapproche les produits de votre tarif validé. Si un prix est introuvable, la ligne reste à vérifier.'],['Le commercial décide','Il vérifie prix et conditions. Après son accord, le système envoie le devis et consigne la prochaine action dans le CRM.']],
    cases:'Quelles tâches déléguer au système ?', metric:'Indicateurs à suivre',
    uses:[
      ['Ventes et CRM','Trier les demandes, repérer les doublons, renseigner les fiches et rappeler aux commerciaux les appels promis.','Délai de première réponse ; demandes sans responsable.'],
      ['Assistance et appels','Répondre à partir de consignes validées, recueillir les détails et transmettre l’historique à un conseiller en l’absence de réponse documentée.','Temps d’attente ; nouvelles demandes sur le même sujet.'],
      ['Documents et comptabilité','Extraire les données des factures et commandes, rapprocher les lignes et signaler les écarts au comptable. Aucun paiement automatique.','Minutes par document ; erreurs après vérification.'],
      ['Réservations et interventions','Vérifier les créneaux dans un agenda connecté, préparer confirmations et rappels, soumettre les conflits au responsable du planning.','Délai de réservation ; conflits de planning.'],
      ['Stocks et achats','Rapprocher commandes et stocks, signaler les références sous le seuil convenu et préparer une demande d’achat.','Temps de rapprochement ; références oubliées.'],
      ['Marketing et commerce en ligne','Rédiger des fiches à partir de caractéristiques vérifiées, préparer traductions et variantes d’annonces. La publication reste soumise à validation.','Délai de publication ; textes à corriger.'],
      ['Rapports de gestion','Réunir les chiffres du CRM et des tableurs selon des formules convenues, avec la source et la date de chaque chiffre.','Heures de préparation ; écarts avec les sources.'],
      ['Savoirs internes et intégration','Retrouver une consigne, citer le document à jour et orienter la question vers un collègue si aucune procédure ne la couvre.','Temps de recherche ; questions sans réponse.'],
      ['Développement et outils internes','Avec Codex, nous créons des connecteurs, des outils internes et des tests automatisés. Un ingénieur vérifie les modifications avant livraison.','Délai de livraison ; défauts récurrents après mise à jour.']
    ],
    pilot:'L’automatisation en vaut-elle la peine ?', baseline:'Choisissons une tâche fréquente. Mesurons son volume, sa durée et ses erreurs avant tout changement. Testons le prototype sur des exemples sans données identifiantes, puis comparons les mêmes indicateurs en intégrant le temps de contrôle et les coûts d’exploitation.',
    calc:'Exemple de calcul, et non prévision : 120 demandes par mois × 5 minutes nettes gagnées par demande = 10 heures de travail libérées par mois. Si le gain ne couvre pas le coût, mieux vaut ne pas étendre le pilote.',
    scope:'Qu’entendons-nous par « superintelligence en entreprise » ?', guard:'Il ne s’agit pas d’une intelligence universelle. Nous choisissons des modèles adaptés à chaque tâche et utilisons Codex pour développer et tester les connexions à vos outils. Quand une règle suffit, elle remplace le modèle. Avant le démarrage, nous convenons des accès, de la conservation des données et des journaux d’activité. Une personne valide paiements, remises exceptionnelles et décisions sensibles ; le retour au traitement manuel reste possible.',
    close:'Quelle tâche effectuez-vous encore à la main ?', brief:'Décrivez une tâche, sa fréquence et les logiciels concernés. Pour ce premier échange, aucun mot de passe ni dossier client n’est nécessaire.'
  },
};
