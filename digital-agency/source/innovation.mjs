import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = 'https://9881988-lgtm.github.io/tiberias-plumbing/digital-agency/';
const branch = 'innovation-applications/';
const officialHE = 'https://innovationisrael.org.il/programs/מסלול-תנופה-קרן-ההזנק/';
const officialEN = 'https://innovationisrael.org.il/en/programs/ideation-tnufa-incentive-program/';
const e = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export const innovation = {
  ru: {
    language: 'Русский', label: 'Инновационные проекты', title: 'Подготовка заявки в «Тнуфа» и акселераторы Израиля',
    seoTitle: 'Подготовка заявки в «Тнуфа» и акселераторы',
    lastModified: '2026-11-19',
    summary: 'Готовим и подаём по вашей идее заявки в «Тнуфа» и другие акселераторы. Подбор программы, план проекта, бюджет и отправка согласованного пакета.',
    lead: 'По вашей идее готовим и подаём заявки в программу «Тнуфа» и в другие подходящие акселераторы. Подбираем программу под стадию проекта, готовим пакет документов и отправляем его после вашего согласования.',
    stages: 'Что входит в работу', steps: [
      ['Выбор программы', 'Сверяем стадию проекта, требования, сроки и список документов. Рассматриваем программу «Тнуфа» Управления инноваций Израиля, профильные акселераторы и инкубаторы.'],
      ['Разработка проекта', 'Формулируем проблему и техническую новизну. Определяем, что проверить на прототипе или PoC, и составляем план работ с этапами и критериями проверки.'],
      ['Подготовка заявки', 'Собираем техническое описание, план НИОКР и бюджет на основе ваших данных. По требованиям программы готовим презентацию, резюме проекта и приложения.'],
      ['Подача и сопровождение', 'Проверяем комплект и после вашего согласования подаём заявку от вашего имени, если это разрешено программой. Если отправить её может только заявитель, готовим комплект и вместе с вами проходим последний шаг.']
    ],
    guideTitle: 'Гранты для стартапов в Израиле: с чего начать',
    questions: [
      ['Для каких проектов подходит «Тнуфа»?', '«Тнуфа» (Tnufa, תנופה) — программа Управления инноваций Израиля для ранних технологических проектов. Её стоит рассмотреть, если вам нужно проверить осуществимость идеи или создать первый прототип. Перед подготовкой заявки сверяем актуальные условия и стадию проекта с официальными требованиями.'],
      ['Что подготовить для заявки в «Тнуфа»?', 'Начните с короткого описания проблемы, пользователей и отличий вашего решения от существующих. Перечислите, что уже проверили, что предстоит проверить и как поймёте, что прототип работает. На этой основе составим план работ и бюджет, а список обязательных приложений уточним по официальной форме.'],
      ['Как проходит подача заявки в акселератор?', 'Сначала проверяем, соответствует ли проект профилю и этапам отбора программы. Затем готовим презентацию, описание команды, рынка и результатов первых проверок. После вашего согласования помогаем подать заявку; если есть интервью, готовим ответы на вопросы отбора.'],
      ['Что выбрать: грант или акселератор?', 'Если нужно проверить техническую гипотезу, в первую очередь изучите грантовые программы на ранней стадии. Если важнее доступ к наставникам, партнёрам или площадкам для пилота, сравните подходящие акселераторы и их условия участия. На первом обсуждении поможем определить, что нужно проекту сейчас.']
    ],
    program: 'Официальные условия программы «Тнуфа»', note: 'Мы независимый подрядчик. Решение о гранте или приёме принимает организатор программы. Одобрение и финансирование не гарантируются.',
    contact: 'Обсудить инновационный проект', contactIntro: 'Расскажите в нескольких предложениях, какую проблему решает ваш проект, что уже сделано и куда хотите подать заявку. Пакет работ согласуем после первичного обсуждения.',
    cta: 'Обсудить заявку', details: 'Подготовка и подача заявки', skip: 'К содержанию',
    message: 'Здравствуйте! Хочу обсудить разработку инновационного проекта и подготовку заявки.'
  },
  he: {
    language: 'עברית', label: 'מיזמים חדשניים', title: 'הכנת בקשה למסלול תנופה ולאקסלרטורים בישראל',
    seoTitle: 'הכנת בקשה למסלול תנופה ולאקסלרטורים',
    lastModified: '2026-11-19',
    summary: 'מהרעיון שלכם ועד ההגשה: הכנת בקשות למסלול תנופה ולאקסלרטורים נוספים, בחירת תוכנית, בניית תקציב והגשה לאחר אישורכם.',
    lead: 'יש לכם רעיון למיזם? אנחנו מכינים ומגישים עבורכם בקשות למסלול תנופה וגם לאקסלרטורים נוספים. מתאימים את התוכנית לשלב שבו אתם נמצאים, מכינים את המסמכים ומגישים לאחר אישורכם.',
    stages: 'מה כולל הליווי', steps: [
      ['בחירת מסלול', 'בודקים את שלב המיזם, תנאי הסף, המועדים והמסמכים הנדרשים. בוחנים את מסלול תנופה של רשות החדשנות, תוכניות האצה וחממות רלוונטיות.'],
      ['גיבוש המיזם', 'מגדירים את הבעיה ואת החדשנות הטכנולוגית. קובעים מה צריך לבדוק באב טיפוס או בהוכחת היתכנות ומכינים תוכנית עבודה עם אבני דרך ומדדי הצלחה לבדיקה.'],
      ['הכנת הבקשה', 'מכינים תיאור טכנולוגי, תוכנית מו״פ ותקציב על בסיס הנתונים שלכם. בהתאם לדרישות המסלול מכינים מצגת, תקציר ונספחים.'],
      ['הגשה וליווי', 'בודקים את המסמכים ומגישים בשמכם לאחר אישורכם, ככל שנהלי התוכנית מאפשרים זאת. אם רק היזם רשאי להגיש, מכינים את התיק ומלווים אתכם בשלב ההגשה הסופי.']
    ],
    guideTitle: 'מענקים לסטארטאפים בישראל: מאיפה מתחילים?',
    questions: [
      ['לאילו מיזמים מתאים מסלול תנופה?', 'מסלול תנופה (Tnufa) של רשות החדשנות מיועד למיזמים טכנולוגיים בתחילת הדרך. כדאי לבדוק אותו כשצריך לבחון היתכנות של רעיון או לבנות אב טיפוס ראשון. לפני הכנת הבקשה בודקים את שלב המיזם מול תנאי המסלול העדכניים.'],
      ['מה צריך להכין לפני הגשת בקשה למסלול תנופה?', 'התחילו בתיאור קצר של הבעיה, המשתמשים וההבדל בין הפתרון שלכם לחלופות. ציינו מה כבר נבדק, מה עדיין צריך לבדוק ואיך תמדדו הצלחה. על בסיס זה נכין תוכנית עבודה ותקציב, ונבדוק בטופס הרשמי אילו מסמכים נדרשים.'],
      ['איך מגישים מועמדות לאקסלרטור?', 'בודקים קודם אם המיזם מתאים לקהל היעד ולשלבי המיון של תוכנית ההאצה. אחר כך מכינים מצגת ותיאור של הצוות, השוק ותוצאות הבדיקות הראשוניות. לאחר אישורכם נסייע בהגשת המועמדות ובהכנה לריאיון, אם הוא חלק מהתהליך.'],
      ['מה מתאים יותר למיזם: מענק או אקסלרטור?', 'אם המטרה היא לבדוק הנחה טכנולוגית, כדאי לבחון מענקים לשלב מוקדם. אם חשובים יותר ליווי מקצועי, שותפים או גישה לאתרי פיילוט, כדאי להשוות בין תוכניות האצה ותנאי ההשתתפות שלהן. בשיחה ראשונית נעזור להגדיר מה דרוש למיזם כעת.']
    ],
    program: 'הדרישות הרשמיות של מסלול תנופה', note: 'אנחנו ספק עצמאי ואיננו נציגים של רשות החדשנות או של תוכניות ההאצה. ההחלטה על קבלה או מענק היא של הגוף המפעיל. אין התחייבות לאישור או למימון.',
    contact: 'בואו נדבר על המיזם שלכם', contactIntro: 'ספרו בקצרה איזו בעיה המיזם פותר, מה כבר פותח ולאיזה מסלול תרצו להגיש מועמדות. נסכם את היקף העבודה לאחר שיחה ראשונית.',
    cta: 'נדבר על הבקשה', details: 'הכנה והגשה של בקשות', skip: 'דילוג לתוכן',
    message: 'שלום! אשמח לדבר על גיבוש מיזם חדשני והכנת בקשה.'
  },
  en: {
    language: 'English', label: 'Innovation projects', title: 'Tnufa and accelerator application support',
    summary: 'From your idea to submission: we prepare and submit applications to Tnufa and other accelerators, with a project plan, budget and your approval.',
    lead: 'Bring us your idea. We prepare and submit applications to Tnufa and to other accelerators that fit your project. We select a programme, assemble the documents and submit the package once you approve it.',
    stages: 'What we do', steps: [
      ['Program fit', 'We review the project stage, published requirements, deadlines and supporting documents. We look at the Israel Innovation Authority’s Tnufa program and relevant accelerators and incubators.'],
      ['Project development', 'We define the problem and technical novelty, scope a prototype or proof of concept, and set milestones and validation criteria.'],
      ['Application preparation', 'We draft the technical description, R&D plan and budget using your information. We prepare a pitch deck, summary and attachments as required.'],
      ['Submission and follow-up', 'We submit the approved application on your behalf where the programme permits it. If only the founder can submit, we prepare the complete file and guide you through the final step.']
    ],
    program: 'Official Tnufa program requirements', note: 'We are an independent service provider. Admission and grant decisions are made by the program organizer. No approval or funding is guaranteed.',
    contact: 'Tell us about your innovation project', contactIntro: 'Share the problem you solve, what you have built and the program you are considering. We agree the scope after an initial conversation.',
    cta: 'Discuss your application', details: 'Explore this service', skip: 'Skip to content',
    message: 'Hello! I would like to discuss an innovation project and application support.'
  },
  fr: {
    language: 'Français', label: 'Projets innovants', title: 'Préparer et déposer une candidature à Tnufa ou à un accélérateur',
    summary: 'De votre idée au dépôt du dossier : préparation et soumission de candidatures à Tnufa et à d’autres accélérateurs, avec plan de projet, budget et validation.',
    lead: 'À partir de votre idée, nous préparons et déposons votre dossier auprès de Tnufa ou d’autres accélérateurs adaptés à votre projet. Nous choisissons le programme avec vous et déposons le dossier après votre validation.',
    stages: 'Notre accompagnement', steps: [
      ['Choix du programme', 'Nous examinons la maturité du projet, les critères publics, les délais et les pièces nécessaires pour Tnufa, le programme de l’Autorité israélienne de l’innovation, et les accélérateurs ou incubateurs pertinents.'],
      ['Développement du projet', 'Nous définissons le problème et la nouveauté technique, puis cadrons le prototype ou la preuve de concept, les jalons et les critères de validation.'],
      ['Préparation du dossier', 'À partir de vos données, nous préparons le descriptif technique, le plan de R&D, le budget et, si nécessaire, la présentation et les annexes.'],
      ['Dépôt et suivi', 'Après votre validation, nous déposons le dossier en votre nom lorsque le règlement le permet. Si le dépôt est réservé au porteur du projet, nous préparons le dossier complet et vous accompagnons dans la dernière étape.']
    ],
    program: 'Conditions officielles de Tnufa', note: 'Nous sommes un prestataire indépendant. L’organisme responsable décide de l’admission et du financement. Aucune acceptation ni subvention n’est garantie.',
    contact: 'Parlons de votre projet innovant', contactIntro: 'Indiquez le problème à résoudre, l’état d’avancement et le programme envisagé. Nous définirons les prestations après un premier échange.',
    cta: 'Parler de votre candidature', details: 'Découvrir ce service', skip: 'Aller au contenu',
    message: 'Bonjour ! Je souhaite discuter de mon projet innovant et de la préparation du dossier.'
  }
};

export const innovationPath = lang => branch + (lang === 'he' ? '' : `${lang}/`);
const applicationTerms = {
  ru:['От идеи до подачи','Разработаем проект по вашей идее: вместе с командой проработаем техническое решение, проверку осуществимости, этапы, бюджет и полный комплект заявки. После вашего утверждения подадим его в порядке, предусмотренном программой.',
    'Оплата только после получения гранта','Наш гонорар за эту услугу по «Тнуфа» составляет 10% денег, фактически полученных вами по гранту, а не запрошенной или одобренной суммы. Не получили грант — гонорара нет. Это отдельная оплата услуг студии, а не сбор Управления инноваций; мы не обещаем возмещения этих расходов.',
    'Что нужно от заявителя','Сообщите, кто подаёт заявку: частный предприниматель или группа резидентов Израиля либо подходящая израильская компания. Частному заявителю не обязательно учреждать компанию. Для компании проверяем выручку за последний календарный год (до 200 000 ₪), привлечённое с основания финансирование (до 500 000 ₪) и состав владельцев.',
    'Подготовьте краткое описание идеи, её новизны, команды, прав на разработку, уже проведённых испытаний и необходимого бюджета. Укажите предыдущие заявки: одну и ту же программу нельзя параллельно подавать на финансирование по другой линии Управления. Для подачи нужен личный кабинет, заполненная форма, бюджет и приложения по типу заявителя.'],
  he:['מהרעיון שלכם ועד להגשה','נגבש עם הצוות שלכם את המיזם לפי דרישות תנופה: פתרון טכנולוגי, בדיקת היתכנות, אבני דרך, תקציב ותיק בקשה מלא. לאחר אישורכם נגיש בהתאם לנהלי המסלול.',
    'שכר טרחה רק לאחר קבלת המענק','שכר הטרחה עבור שירות זה במסלול תנופה הוא 10% מסכום המענק שקיבלתם בפועל, ולא מהסכום שביקשתם או שאושר. לא התקבל מענק, לא משולם שכר טרחה. זהו תשלום פרטי לסטודיו, לא אגרת רשות החדשנות; אין התחייבות להכרה בהוצאה.',
    'מה נדרש מכם','ציינו אם אתם יזם יחיד או קבוצת יזמים תושבי ישראל, או חברה ישראלית מתאימה. יזם פרטי אינו נדרש להקים חברה. לחברה נבדוק מחזור הכנסות בשנה הקלנדרית האחרונה (עד 200,000 ₪), מימון שגויס מאז הקמתה (עד 500,000 ₪) והרכב בעלי המניות.',
    'שלחו תיאור של הרעיון והחידוש הטכנולוגי, הצוות, הזכויות בידע, בדיקות שכבר נערכו והתקציב הדרוש. פרטו בקשות מימון קודמות: אין להגיש אותה תוכנית במקביל למסלול נוסף של הרשות. נדרשים רישום לאזור האישי, טופס מלא, תקציב ונספחים בהתאם לסוג המבקש.'],
  en:['From your idea to submission','We develop your project with your team: the technical concept, feasibility tests, milestones, budget and complete Tnufa application. Once you approve the package, we submit it as the programme permits.',
    'A fee only after you receive funding','Our fee for this Tnufa service is 10% of grant funds you actually receive, not the amount requested or approved. No grant received means no fee. This is a private service fee, not an Innovation Authority charge; reimbursement is not guaranteed.',
    'What we need from you','Tell us whether you are applying as an individual or team resident in Israel, or as an eligible Israeli company. Individuals need not incorporate. For companies we check last calendar year’s revenue (up to ₪200,000), funding raised since incorporation (up to ₪500,000) and ownership.',
    'Send a short description of your idea, its technical novelty, team, intellectual property, tests so far and budget. Disclose prior applications: the same project cannot be submitted concurrently to another Authority track. Submission requires a portal account, a completed form, budget and applicant-specific attachments.'],
  fr:['De votre idée au dépôt du dossier','Nous développons votre projet avec votre équipe : solution technique, essais de faisabilité, étapes, budget et dossier Tnufa complet. Après votre validation, nous déposons la demande selon les règles du programme.',
    'Des honoraires après versement uniquement','Pour cet accompagnement Tnufa, nos honoraires sont de 10 % du montant de la subvention effectivement perçu, et non du montant demandé ou approuvé. Sans versement, aucun honoraire. Il s’agit de nos honoraires privés et non de frais de l’Autorité de l’innovation ; leur remboursement n’est pas garanti.',
    'Éléments à nous fournir','Précisez si vous candidatez en tant que porteur de projet ou équipe résidant en Israël, ou société israélienne admissible. Un particulier n’a pas à créer de société. Pour une société, nous vérifions le chiffre d’affaires de la dernière année civile (jusqu’à 200 000 ₪), les financements levés depuis la création (jusqu’à 500 000 ₪) et l’actionnariat.',
    'Décrivez l’idée, sa nouveauté technique, l’équipe, les droits de propriété intellectuelle, les essais réalisés et le budget. Signalez toute demande antérieure : un même projet ne peut être déposé en parallèle dans un autre dispositif de l’Autorité. Un compte sur le portail, le formulaire complet, le budget et les annexes correspondant au demandeur sont nécessaires.']
};
export const innovationUrls = Object.keys(innovation).map(lang => root + innovationPath(lang));

export function renderInnovationTeaser(lang, rel) {
  const t = innovation[lang];
  return `<section class="software-intro section" id="innovation"><div class="wrap"><p class="eyebrow">${e(t.label)}</p><h2>${e(t.title)}</h2><p class="software-summary">${e(t.summary)}</p><a class="btn" href="${rel + innovationPath(lang)}">${e(t.details)}</a></div></section>`;
}

export async function buildInnovation(target) {
  for (const [lang, t] of Object.entries(innovation)) {
    const canonical = root + innovationPath(lang);
    const rel = lang === 'he' ? '../' : '../../';
    const home = rel + (lang === 'he' ? '' : `${lang}/`);
    const searchTitle = t.seoTitle || t.title;
    const schema = {'@context':'https://schema.org','@type':'Service',name:t.title,url:canonical,description:t.summary,areaServed:{'@type':'Country',name:'Israel'},provider:{'@type':'Organization',name:'Eydelstein Digital Lab',url:root}};
    const folder = join(target, innovationPath(lang));
    await mkdir(folder, {recursive:true});
    await writeFile(join(folder,'index.html'), `<!doctype html>
<html lang="${lang}" dir="${lang === 'he' ? 'rtl' : 'ltr'}">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${e(searchTitle)} | Eydelstein Digital Lab</title>
  <meta name="description" content="${e(t.summary)}">
  <link rel="canonical" href="${canonical}">
  ${Object.keys(innovation).map(code=>`<link rel="alternate" hreflang="${code==='he'?'he-IL':code}" href="${root+innovationPath(code)}">`).join('\n  ')}
  <link rel="alternate" hreflang="x-default" href="${root+branch}">
  <meta property="og:title" content="${e(t.title)}"><meta property="og:description" content="${e(t.summary)}"><meta property="og:url" content="${canonical}">
  <meta property="og:type" content="website"><meta property="og:site_name" content="Eydelstein Digital Lab"><meta property="og:image" content="${root}assets/hero.webp">
  <link rel="icon" href="${rel}assets/edelstein-lab-digital-mark.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${rel}styles.css"><link rel="stylesheet" href="${rel}software.css">
  <script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script>
</head>
<body>
  <a class="skip" href="#main">${e(t.skip)}</a>
  <header class="product-header"><div class="product-wrap product-header-inner">
    <a class="product-brand" href="${home}"><img src="${rel}assets/edelstein-lab-digital-mark.svg" width="32" height="32" alt=""><span>Eydelstein Digital Lab</span></a>
    <div class="product-header-tools"><select id="software-language" aria-label="Language / שפה">${Object.entries(innovation).map(([code,item])=>`<option value="${root+innovationPath(code)}"${code===lang?' selected':''}>${e(item.language)}</option>`).join('')}</select></div>
  </div></header>
  <main id="main">
    <section class="product-intro"><div class="product-wrap" style="padding-block: 30px 20px">
      <p class="eyebrow">${e(t.label)}</p><h1>${e(t.title)}</h1>
      <p class="product-lead">${e(t.lead)}</p><div class="product-actions"><a class="btn" href="#contact">${e(t.cta)}</a></div>
    </div></section>
    <section class="product-section" id="stages"><div class="product-wrap">
      <h2>${e(t.stages)}</h2>
      <div class="capability-list">${t.steps.map(([name,detail],i)=>`<article><span class="feature-index" aria-hidden="true">0${i+1}</span><h3>${e(name)}</h3><p>${e(detail)}</p></article>`).join('')}</div>
      <div class="implementation"><p>${e(t.note)}</p></div>
      <section id="tnufa-terms"><h2>${e(applicationTerms[lang][0])}</h2><p>${e(applicationTerms[lang][1])}</p>
      <h3>${e(applicationTerms[lang][2])}</h3><p>${e(applicationTerms[lang][3])}</p>
      <h3>${e(applicationTerms[lang][4])}</h3><p>${e(applicationTerms[lang][5])}</p><p>${e(applicationTerms[lang][6])}</p></section>
      <a class="text-link" href="${e(lang==='he'?officialHE:officialEN)}">${e(t.program)} <span aria-hidden="true">↗</span></a>
    </div></section>${t.questions ? `
    <section class="product-section faq-section" id="application-guide"><div class="product-wrap section-two">
      <h2>${e(t.guideTitle)}</h2><div class="product-faq">${t.questions.map(([question, answer])=>`<details><summary>${e(question)}</summary><p>${e(answer)}</p></details>`).join('')}</div>
    </div></section>` : ''}
    <section class="product-section product-contact" id="contact"><div class="product-wrap section-two">
      <div><h2>${e(t.contact)}</h2><p>${e(t.contactIntro)}</p></div>
      <div><a class="product-phone" href="tel:+972555071400" dir="ltr">+972 55 507 1400</a><a href="mailto:9881988@gmail.com">9881988@gmail.com</a>
        <div class="product-actions"><a class="btn btn-light" href="https://wa.me/972533613100?text=${encodeURIComponent(t.message)}">WhatsApp</a></div></div>
    </div></section>
  </main>
  <footer class="product-footer"><div class="product-wrap"><a href="${home}">Eydelstein Digital Lab</a><a href="#stages">${e(t.stages)}</a></div></footer>
  <script src="${rel}software.js?v=20261118-quote" defer></script>
</body>
</html>
`);
  }
}
