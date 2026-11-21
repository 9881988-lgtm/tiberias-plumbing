import { capabilities } from './capabilities.mjs';
export const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSetNUqXz3oVz8USoO2yOEjXZXVZZEDMWjKQZ8ay0sAFfAWh-A';
export const entry = 'entry.1598828035';
export const order = ['ru','he','en','fr'];
export const leadCopy = {
  ru: ['Сделать заявку','Как с вами связаться?','Достаточно телефона или почты. Остальное можно пропустить.','Продукт или услуга','Выберите направление','Ваше имя','Телефон','Электронная почта','Рассказать подробнее','Что хотите получить?','Что используете сейчас?','Когда нужен результат?','Отправить заявку','Оставьте хотя бы контакт или несколько слов о задаче.','При отправке данные получит Eydelstein Digital Lab через Google Forms для ответа на заявку. Не указывайте пароли и данные клиентов.','Открыть форму Google','Для ответа оставьте телефон или почту.'],
  he: ['שליחת פנייה','איך אפשר לחזור אליך?','מספיק להשאיר טלפון או כתובת מייל. אפשר לדלג על שאר השאלות.','מוצר או שירות','בחירת תחום','שם','טלפון','דוא״ל','פרטים נוספים','מה היעד של הפרויקט?','באילו כלים משתמשים היום?','מתי נדרשת התוצאה?','שליחת הפנייה','נא להשאיר פרט ליצירת קשר או כמה מילים על הצורך.','בלחיצה על שליחה, הפרטים יועברו אל Eydelstein Digital Lab באמצעות Google Forms לצורך טיפול בפנייה. אין להזין סיסמאות או פרטי לקוחות.','פתיחת טופס Google','כדי שנוכל לחזור אליך, כדאי להשאיר טלפון או דוא״ל.'],
  en: ['Make an enquiry','How can we reach you?','A phone number or email is enough. You can skip the rest.','Product or service','Choose a service','Your name','Phone','Email','Add project details','What would you like to achieve?','What do you use today?','When do you need it?','Send enquiry','Leave a contact detail or a few words about the project.','Submitting shares your details with Eydelstein Digital Lab through Google Forms so we can respond. Please leave out passwords and customer data.','Open Google Form','Leave an email or phone number if you would like a reply.'],
  fr: ['Faire une demande','Comment vous joindre ?','Un téléphone ou une adresse e-mail suffit. Le reste est facultatif.','Produit ou service','Choisir un service','Votre nom','Téléphone','E-mail','Préciser mon projet','Quel résultat souhaitez-vous obtenir ?','Quels outils utilisez-vous actuellement ?','Pour quelle échéance ?','Envoyer ma demande','Laissez un moyen de contact ou quelques mots sur le projet.','En envoyant ce formulaire, vous transmettez vos informations à Eydelstein Digital Lab via Google Forms afin que nous puissions vous répondre. Ne communiquez ni mots de passe ni données clients.','Ouvrir le formulaire Google','Indiquez un téléphone ou un e-mail si vous souhaitez une réponse.'],
};
export const products = {
  ...Object.fromEntries(capabilities.map(c=>[c.id,order.map(lang=>c[lang][0])])),
  'galany-crm':['Galany CRM','Galany CRM','Galany CRM','Galany CRM'],
  'desktop-crm':['Edelstein CRM Israel','Edelstein CRM Israel','Edelstein CRM Israel','Edelstein CRM Israel'],
  'ai-sales-agent':['AI-продавец','נציג מכירות AI','AI sales agent','Agent commercial IA'],
  'call-center-software':['ПО для колл-центра','תוכנה למוקד','Call centre software','Logiciel de centre d’appels'],
  'ai-call-center':['Голосовой колл-центр','מוקד קולי','Voice contact centre','Centre de contact vocal'],
  'software':['Программное обеспечение','תוכנה לעסקים','Business software','Logiciels professionnels'],
  'auto-secretary':['Автосекретарь для автосервиса','מזכירות למוסך','Automotive receptionist','Secrétariat automobile'],
  'dental-secretary':['Секретарь для стоматологии','מזכירות למרפאת שיניים','Dental receptionist','Secrétariat dentaire'],
  'hotel-secretary':['Секретарь для отеля','מזכירות למלון','Hotel receptionist','Secrétariat hôtelier'],
  'small-business-secretary':['Секретарь для малого бизнеса','מזכירות לעסק קטן','Small business receptionist','Secrétariat pour TPE'],
  'hotel-consulting':['Консалтинг для отелей','ייעוץ למלונות','Hotel consulting','Conseil hôtelier'],
  'innovation-applications':['Тнуфа и акселераторы','תנופה ואקסלרטורים','Tnufa and accelerators','Tnufa et accélérateurs'],
  website:['Сайты и лендинги','אתרים ודפי נחיתה','Websites and landing pages','Sites web et landing pages'],
  landing:['Лендинг','דף נחיתה','Landing page','Landing page'],
  app:['Разработка приложений','פיתוח אפליקציות','App development','Développement d’applications'],
  ai:['AI и автоматизация','AI ואוטומציה','AI and automation','IA et automatisation'],
  ads:['Google и Meta Ads','פרסום בגוגל ובמטא','Google and Meta Ads','Publicité Google et Meta'],
  receiptil:['ReceiptIL','ReceiptIL','ReceiptIL','ReceiptIL'],
  'ac-cleaning':['Сервис кондиционеров','ניקוי מזגנים','AC cleaning','Nettoyage de climatiseurs'],
  light:Array(4).fill('Galany CRM Light'),
  booking:Array(4).fill('Galany CRM Booking'),
  business:Array(4).fill('Galany CRM Business'),
  'business-plus':Array(4).fill('Galany CRM Business Plus'),
};

export const siteSales = {
  ru: ['Спросить Байлу','Позвонить Байле','Запросить заказ','Бюджет, если известен','Разрешаю обработать заявку и связаться со мной.','Заявка в CRM','Укажите продукт, контакт и кратко опишите задачу.','Не удалось подтвердить отправку. Повторите попытку или свяжитесь с нами по телефону.','Задайте вопрос по продукту. Байла поможет уточнить состав предложения.','При отправке данные поступят в CRM Eydelstein Digital Lab для ответа. Не указывайте пароли, карты и данные клиентов.'],
  he: ['לשאול את ביילה','להתקשר לביילה','בקשה להזמנה','תקציב משוער, אם ידוע','אני מאשר/ת לטפל בפנייה ולחזור אליי.','הפנייה התקבלה במערכת','נא לבחור מוצר, להשאיר פרטי קשר ולתאר בקצרה את הצורך.','לא הצלחנו לאשר שהפנייה נקלטה. נסו שוב או התקשרו אלינו.','אפשר לשאול על המוצר. ביילה תעזור להבין מה כדאי לכלול בהצעה.','בלחיצה על שליחה הפרטים יועברו ל-CRM של Eydelstein Digital Lab כדי לענות לפנייה. אין להזין סיסמאות, כרטיסים או פרטי לקוחות.'],
  en: ['Ask Bayla','Call Bayla','Request an order','Budget, if known','I agree to have my enquiry processed and to be contacted.','Enquiry received in our CRM','Choose a product, leave a contact detail and briefly describe what you need.','We could not confirm receipt. Retry or call us.','Ask about the product. Bayla can help narrow down the right offer.','Submitting sends these details to Eydelstein Digital Lab’s CRM so we can respond. Leave out passwords, cards and customer data.'],
  fr: ['Demander à Bayla','Appeler Bayla','Demander une commande','Budget, si connu','J’accepte le traitement de ma demande et d’être recontacté.','Demande reçue dans notre CRM','Choisissez un produit, laissez vos coordonnées et décrivez brièvement votre besoin.','Nous n’avons pas pu confirmer la réception. Réessayez ou appelez-nous.','Posez votre question sur le produit. Bayla vous aide à préciser l’offre.','En envoyant ce formulaire, vous transmettez vos informations au CRM d’Eydelstein Digital Lab. N’indiquez ni mots de passe, ni carte, ni données clients.'],
};
const prompts = {
  sales:['На каком этапе теряются обращения и что нужно автоматизировать?','באיזה שלב פניות מתפספסות ומה תרצו להפוך לאוטומטי?','Where do enquiries get lost, and what should be automated?','À quelle étape perdez-vous des demandes et que faut-il automatiser ?'],
  calls:['Какие звонки поступают, на каких языках и что должно происходить после разговора?','אילו שיחות נכנסות, באילו שפות ומה צריך לקרות אחרי השיחה?','What calls come in, in which languages, and what should happen after a call?','Quels appels recevez-vous, dans quelles langues, et quelle suite faut-il leur donner ?'],
  grants:['На какой стадии идея и в какую программу хотите подать заявку?','באיזה שלב המיזם ולאיזו תוכנית תרצו להגיש בקשה?','What stage is the idea at, and which programme interests you?','À quel stade en est votre projet et quel programme visez-vous ?'],
  hotel:['Сколько объектов и номеров и какую задачу с бронированиями или продажами нужно решить?','כמה נכסים וחדרים יש ואיזו בעיה בהזמנות או במכירות תרצו לפתור?','How many properties and rooms do you manage, and what booking or sales problem needs solving?','Combien de sites et de chambres gérez-vous, et quel problème de réservation ou de vente souhaitez-vous résoudre ?'],
  web:['Для кого ваш продукт, на каких языках и какое действие должен совершить посетитель?','למי מיועד המוצר, באילו שפות ומה המבקרים אמורים לעשות?','Who is it for, which languages do you need, and what should visitors do?','À qui vous adressez-vous, dans quelles langues, et que doivent faire les visiteurs ?'],
  app:['Какая платформа и какое главное действие должен выполнять пользователь?','מה הפלטפורמה ומה הפעולה העיקרית שהמשתמש צריך לבצע?','Which platform and what main action should the user perform?','Sur quelle plateforme, et quelle action principale l’utilisateur doit-il effectuer ?'],
  shop:['Какие товары, витрина, оплата, доставка и учёт уже есть?','אילו מוצרים, תשלומים, משלוחים ומערכות כבר קיימים?','What products, checkout, delivery and stock systems do you already use?','Quels produits, paiements, livraisons et outils de stock utilisez-vous déjà ?'],
  campaign:['Какой результат, рынок и бюджет кампании вам нужны?','איזה יעד, שוק ותקציב יש לקמפיין?','What result, market and campaign budget do you have in mind?','Quels résultats, marché et budget visez-vous ?'],
};
const groups = {
  'galany-crm':'sales','desktop-crm':'sales','ai-sales-agent':'sales',software:'sales',ai:'sales','ai-workflows':'sales',
  light:'sales',booking:'hotel',business:'calls','business-plus':'calls','auto-secretary':'calls','dental-secretary':'calls',
  'small-business-secretary':'calls','ai-call-center':'calls','call-center-software':'calls','hotel-secretary':'hotel',
  'hotel-consulting':'hotel','innovation-applications':'grants',website:'web',landing:'web','cms-care':'web',
  'store-integrations':'shop',app:'app','mobile-delivery':'app','software-engineering':'app',receiptil:'app',
  ads:'campaign','campaign-measurement':'campaign','video-content':'campaign','visual-design':'web',
};
export const promptFor = (slug,lang) => prompts[groups[slug]]?.[order.indexOf(lang)] || leadCopy[lang][9];
