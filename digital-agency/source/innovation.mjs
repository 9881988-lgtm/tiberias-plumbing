import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = 'https://9881988-lgtm.github.io/tiberias-plumbing/digital-agency/';
const branch = 'innovation-applications/';
const officialHE = 'https://innovationisrael.org.il/programs/מסלול-תנופה-קרן-ההזנק/';
const officialEN = 'https://innovationisrael.org.il/en/programs/ideation-tnufa-incentive-program/';
const e = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export const innovation = {
  ru: {
    language: 'Русский', label: 'Инновационные проекты', title: 'Подготовка и подача заявок в «Тнуфа» и акселераторы',
    summary: 'Помогаем развить технологическую идею, собрать документы и подать заявку на грант или в акселератор.',
    lead: 'Работаем с изобретателями и командами на ранней стадии: от технической проработки идеи и плана прототипа до подготовки и подачи согласованного пакета документов.',
    stages: 'Что входит в работу', steps: [
      ['Выбор программы', 'Сверяем стадию проекта, требования, сроки и список документов. Рассматриваем программу «Тнуфа» Управления инноваций Израиля, профильные акселераторы и инкубаторы.'],
      ['Разработка проекта', 'Формулируем проблему и техническую новизну. Определяем, что проверить на прототипе или PoC, и составляем план работ с этапами и критериями проверки.'],
      ['Подготовка заявки', 'Собираем техническое описание, план НИОКР и бюджет на основе ваших данных. По требованиям программы готовим презентацию, резюме проекта и приложения.'],
      ['Подача и сопровождение', 'Проверяем комплект, согласуем финальную версию с заявителем и помогаем с подачей в порядке, предусмотренном программой. При необходимости готовим материалы для интервью и ответы на уточнения.']
    ],
    program: 'Официальные условия программы «Тнуфа»', note: 'Мы независимый подрядчик. Решение о гранте или приёме принимает организатор программы. Одобрение и финансирование не гарантируются.',
    contact: 'Обсудить инновационный проект', contactIntro: 'Расскажите в нескольких предложениях, какую проблему решает ваш проект, что уже сделано и куда хотите подать заявку. Пакет работ согласуем после первичного обсуждения.',
    cta: 'Обсудить заявку', details: 'Подробнее об услуге', skip: 'К содержанию',
    message: 'Здравствуйте! Хочу обсудить разработку инновационного проекта и подготовку заявки.'
  },
  he: {
    language: 'עברית', label: 'מיזמים חדשניים', title: 'הכנה והגשה של בקשות לתנופה ולאקסלרטורים',
    summary: 'מסייעים בגיבוש מיזם טכנולוגי, בהכנת מסמכים ובהגשת בקשות למענקים ולתוכניות האצה.',
    lead: 'מלווים יזמים וצוותים בתחילת הדרך: מגיבוש הרעיון ותכנון אב הטיפוס ועד להכנת תיק הבקשה ולהגשתו לאחר אישורכם.',
    stages: 'מה כולל הליווי', steps: [
      ['בחירת מסלול', 'בודקים את שלב המיזם, תנאי הסף, המועדים והמסמכים הנדרשים. בוחנים את מסלול תנופה של רשות החדשנות, תוכניות האצה וחממות רלוונטיות.'],
      ['גיבוש המיזם', 'מגדירים את הבעיה ואת החדשנות הטכנולוגית. קובעים מה צריך לבדוק באב טיפוס או בהוכחת היתכנות ומכינים תוכנית עבודה עם אבני דרך ומדדי הצלחה לבדיקה.'],
      ['הכנת הבקשה', 'מכינים תיאור טכנולוגי, תוכנית מו״פ ותקציב על בסיס הנתונים שלכם. בהתאם לדרישות המסלול מכינים מצגת, תקציר ונספחים.'],
      ['הגשה וליווי', 'בודקים את שלמות המסמכים, מאשרים את הנוסח עם מגיש הבקשה ומסייעים בהגשה לפי הנהלים. לפי הצורך מכינים חומרים לריאיון ומענה לבקשות הבהרה.']
    ],
    program: 'הדרישות הרשמיות של מסלול תנופה', note: 'אנחנו ספק עצמאי ואיננו נציגים של רשות החדשנות או של תוכניות ההאצה. ההחלטה על קבלה או מענק היא של הגוף המפעיל. אין התחייבות לאישור או למימון.',
    contact: 'בואו נדבר על המיזם שלכם', contactIntro: 'ספרו בקצרה איזו בעיה המיזם פותר, מה כבר פותח ולאיזה מסלול תרצו להגיש מועמדות. נסכם את היקף העבודה לאחר שיחה ראשונית.',
    cta: 'נדבר על הבקשה', details: 'פרטים על השירות', skip: 'דילוג לתוכן',
    message: 'שלום! אשמח לדבר על גיבוש מיזם חדשני והכנת בקשה.'
  },
  en: {
    language: 'English', label: 'Innovation projects', title: 'Tnufa and accelerator application support',
    summary: 'Develop your concept, prepare the documents and submit an innovation grant or accelerator application.',
    lead: 'Support for founders and early-stage teams, from defining the technology and prototype plan to preparing and submitting the approved application.',
    stages: 'What we do', steps: [
      ['Program fit', 'We review the project stage, published requirements, deadlines and supporting documents. We look at the Israel Innovation Authority’s Tnufa program and relevant accelerators and incubators.'],
      ['Project development', 'We define the problem and technical novelty, scope a prototype or proof of concept, and set milestones and validation criteria.'],
      ['Application preparation', 'We draft the technical description, R&D plan and budget using your information. We prepare a pitch deck, summary and attachments as required.'],
      ['Submission and follow-up', 'We check the package against the requirements, get your approval and assist with submission as permitted by the program. We can help prepare for interviews and respond to clarification requests.']
    ],
    program: 'Official Tnufa program requirements', note: 'We are an independent service provider. Admission and grant decisions are made by the program organizer. No approval or funding is guaranteed.',
    contact: 'Tell us about your innovation project', contactIntro: 'Share the problem you solve, what you have built and the program you are considering. We agree the scope after an initial conversation.',
    cta: 'Discuss your application', details: 'Explore this service', skip: 'Skip to content',
    message: 'Hello! I would like to discuss an innovation project and application support.'
  },
  fr: {
    language: 'Français', label: 'Projets innovants', title: 'Préparer et déposer une candidature à Tnufa ou à un accélérateur',
    summary: 'Nous vous aidons à structurer votre idée, à constituer le dossier et à déposer une demande de financement ou une candidature à un programme d’accélération.',
    lead: 'Nous accompagnons les porteurs de projet, de la définition du concept et du prototype à la préparation et au dépôt du dossier validé.',
    stages: 'Notre accompagnement', steps: [
      ['Choix du programme', 'Nous examinons la maturité du projet, les critères publics, les délais et les pièces nécessaires pour Tnufa, le programme de l’Autorité israélienne de l’innovation, et les accélérateurs ou incubateurs pertinents.'],
      ['Développement du projet', 'Nous définissons le problème et la nouveauté technique, puis cadrons le prototype ou la preuve de concept, les jalons et les critères de validation.'],
      ['Préparation du dossier', 'À partir de vos données, nous préparons le descriptif technique, le plan de R&D, le budget et, si nécessaire, la présentation et les annexes.'],
      ['Dépôt et suivi', 'Nous vérifions et validons le dossier avec vous avant de vous accompagner dans le dépôt selon les règles du programme. Nous pouvons préparer les entretiens et les réponses aux demandes de précisions.']
    ],
    program: 'Conditions officielles de Tnufa', note: 'Nous sommes un prestataire indépendant. L’organisme responsable décide de l’admission et du financement. Aucune acceptation ni subvention n’est garantie.',
    contact: 'Parlons de votre projet innovant', contactIntro: 'Indiquez le problème à résoudre, l’état d’avancement et le programme envisagé. Nous définirons les prestations après un premier échange.',
    cta: 'Parler de votre candidature', details: 'Découvrir ce service', skip: 'Aller au contenu',
    message: 'Bonjour ! Je souhaite discuter de mon projet innovant et de la préparation du dossier.'
  }
};

export const innovationPath = lang => branch + (lang === 'he' ? '' : `${lang}/`);
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
    const schema = {'@context':'https://schema.org','@type':'Service',name:t.title,url:canonical,description:t.summary,areaServed:{'@type':'Country',name:'Israel'},provider:{'@type':'Organization',name:'Eydelstein Digital Lab',url:root}};
    const folder = join(target, innovationPath(lang));
    await mkdir(folder, {recursive:true});
    await writeFile(join(folder,'index.html'), `<!doctype html>
<html lang="${lang}" dir="${lang === 'he' ? 'rtl' : 'ltr'}">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${e(t.title)} | Eydelstein Digital Lab</title>
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
      <a class="text-link" href="${e(lang==='he'?officialHE:officialEN)}">${e(t.program)} <span aria-hidden="true">↗</span></a>
    </div></section>
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
