import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { URLSearchParams } from 'node:url';
const root='https://9881988-lgtm.github.io/tiberias-plumbing/digital-agency/';
const esc=x=>String(x).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const en={
  'hotel-consulting':['Hotel consulting in Israel','Connect reservations, guest service and the tasks between shifts. We start with one property and test a real booking before extending the rollout.',[
    ['Reservations and revenue','Review your direct website, PMS and channel manager. Test availability, cancellations and rate updates across supported Booking.com and Airbnb connections. Rate changes stay within limits you approve.'],
    ['Guests and staff','Set reception policies, test handoffs to the duty manager and share arrivals, room readiness, housekeeping and maintenance tasks.'],
    ['Operations and reporting','Track occupancy, average rate, commissions and direct bookings. Add reconciliation, staffing and supplier workflows with the people responsible for checking them.'],
    ['Audit, pilot and rollout','Agree access and baseline figures, test changes on a pilot, then train the team. Support is included around the clock; the proposal defines the properties, telephone service, external costs and advertising budget.']]],
  'hotel-secretary':['AI receptionist for hotels','Capture a guest enquiry even when the front desk is checking someone in. The receptionist uses your approved policies and hands exceptions to a person.',[
    ['Guest calls','Answer practical questions about arrival, departure and services. Log the enquiry in Galany CRM; confirm an actual reservation only after availability is checked.'],
    ['Website and local listings','Prepare the agreed hotel site, contact form, basic CRM and map listings with the owner. Booking.com and Airbnb integrations are scoped separately.'],
    ['Content and reviews','Prepare one weekly topic for four social networks and a short YouTube video. Ask for honest guest feedback and approve content before publication.'],
    ['Subscription and pilot','The hotel offer includes 100 minutes of incoming calls per month. Start with a handoff test. Domain, hosting, media spend and external services are agreed separately.']]],
  'small-business-secretary':['AI receptionist for small businesses','Keep serving the customer in front of you while routine calls and appointment requests are captured for follow-up.',[
    ['Telephone receptionist · ₪149/month','Answers incoming calls using your approved services, prices and hours. This plan does not include a website, promotion or social posts.'],
    ['Receptionist, website and promotion · ₪590/month','Adds the agreed website, basic CRM and map listings, organic promotion and social posts. Call usage and external costs are agreed before activation.'],
    ['Scheduling and handoff','Test caller language, request capture, staff handoff and appointment entry in a supported calendar before going live.'],
    ['Weekly content','One shared topic for Instagram, Facebook, LinkedIn and X, plus a short YouTube video. Publication requires approval and authorised access.']]]};
const fr={
  'hotel-consulting':['Conseil hôtelier en Israël','Reliez les réservations, la réception et les tâches entre deux équipes. Nous partons d’un établissement et vérifions une réservation réelle avant de déployer les autres outils.',[
    ['Réservations et revenus','Examinez le site de vente directe, le PMS et le gestionnaire de canaux. Testez les disponibilités, les annulations et les tarifs sur les connexions compatibles, notamment Booking.com et Airbnb. Les prix évoluent dans les limites que vous validez.'],
    ['Accueil et exploitation','Définissez les consignes de réception et le passage au responsable de garde. Suivez les arrivées, la préparation des chambres, le ménage et la maintenance.'],
    ['Suivi de gestion','Rapprochez les paiements, commissions et remboursements. Le responsable vérifie les états de paie et de gestion avant leur transmission.'],
    ['Audit, pilote et déploiement','Relevez l’occupation et la part des ventes directes, testez le pilote puis formez les équipes. L’assistance est incluse 24 h/24, 7 j/7 ; la proposition précise les établissements, la téléphonie et les frais externes.']]],
  'hotel-secretary':['Secrétariat IA pour hôtels','Pendant une arrivée, le standard peut traiter une autre demande. Il répond selon les consignes de l’hôtel et transmet les cas particuliers à la réception.',[
    ['Demandes des clients','Renseignez sur les horaires, les services et le départ. Enregistrez la demande dans Galany CRM et vérifiez la disponibilité avant de confirmer une réservation.'],
    ['Site et fiches locales','Préparez le site convenu, le formulaire, le CRM de base et les fiches cartographiques. Les connexions à Booking.com et Airbnb sont étudiées séparément.'],
    ['Contenu et avis','Un thème hebdomadaire adapté à quatre réseaux et une courte vidéo YouTube. Le contenu est validé avant publication ; tous les avis sollicités doivent être sincères.'],
    ['Abonnement et pilote','L’offre hôtelière comprend 100 minutes d’appels entrants par mois. Testez le transfert à un collaborateur. Domaine, hébergement, publicité et services tiers sont convenus séparément.']]],
  'small-business-secretary':['Secrétariat IA pour petites entreprises','Accueillez le client présent sans perdre la demande de celui qui appelle. Le secrétariat note le motif et prépare la suite.',[
    ['Secrétariat téléphonique · 149 ₪/mois','Répond aux appels selon vos prestations, tarifs et horaires approuvés. Le site, la promotion et les publications sociales ne sont pas inclus.'],
    ['Secrétariat, site et promotion · 590 ₪/mois','Ajoute le site convenu, la configuration de base du CRM, les fiches cartographiques, la promotion organique et les publications sociales. Usage téléphonique et frais externes sont convenus avant activation.'],
    ['Rendez-vous et transfert','Testez la langue, la collecte des demandes, le relais humain et l’inscription dans un agenda compatible avant le lancement.'],
    ['Contenu hebdomadaire','Un thème adapté pour Instagram, Facebook, LinkedIn et X, plus une courte vidéo YouTube. Publication après validation et autorisation d’accès.']]],
  'auto-secretary':['Secrétariat IA pour garages et concessions','Quand l’atelier est occupé, le secrétariat prend la demande, identifie le véhicule et prépare un rendez-vous ou un rappel.',[
    ['Secrétariat téléphonique · 149 ₪/mois','Recevez les appels et consignez la demande du conducteur. Site web, promotion et publications sociales ne sont pas compris.'],
    ['Secrétariat, site et promotion · 590 ₪/mois','Ajoute le site convenu, une configuration CRM de base, les fiches locales et le contenu hebdomadaire. Les frais externes et l’usage téléphonique sont convenus avant la mise en service.'],
    ['Du premier appel au garage','Saisissez véhicule, type de service et créneau souhaité. Testez l’agenda et les doublons. Seul votre atelier confirme diagnostic, devis, sécurité et délai.'],
    ['Visibilité locale','Un même thème adapté aux quatre réseaux et une courte vidéo YouTube chaque semaine. Le garage valide les informations techniques avant publication.']]],
  'dental-secretary':['Secrétariat IA pour cabinets dentaires','Accueillez les appels administratifs pendant une consultation. Les demandes de rendez-vous arrivent avec le motif et les coordonnées utiles au rappel.',[
    ['Secrétariat téléphonique · 149 ₪/mois','Répond aux appels administratifs selon les consignes du cabinet. Site, promotion et publications sociales ne sont pas compris.'],
    ['Secrétariat, site et promotion · 590 ₪/mois','Comprend aussi le site convenu, la configuration CRM de base, les fiches locales et la promotion organique. Les communications et les frais externes sont convenus séparément.'],
    ['Agenda et confidentialité','Testez la prise de rendez-vous, les doublons et le relais au cabinet. Le secrétariat ne pose pas de diagnostic et ne donne pas de conseil médical. Ne communiquez pas de dossier patient dans le formulaire public.'],
    ['Contenu approuvé','Un thème hebdomadaire adapté à quatre réseaux sociaux et une courte vidéo YouTube. Le cabinet valide chaque publication.']]]};
const library={
  'hotel-consulting':['hotel-consulting/hotel-consulting-en.pdf','hotel-consulting/hotel-consulting-he.pdf','hotel-consulting/hotel-consulting-ru.pdf'],
  'hotel-secretary':['secretary-catalog/Hotel_Secretary_A4_HE.pdf','secretary-catalog/Hotel_Secretary_A4_RU.pdf'],
  'small-business-secretary':['secretary-catalog/Small_Business_Secretary_A4_HE.pdf','secretary-catalog/Small_Business_Secretary_A4_RU.pdf']
};
export async function buildServiceEditions(target){
  for(const [lang,entries] of Object.entries({en,fr})) for(const [slug,[title,lead,features]] of Object.entries(entries)){
    const french=lang==='fr',hotel=slug==='hotel-consulting', url=root+slug+'/'+lang+'/', home='../../'+lang+'/', media=hotel?'hotel-consulting/hotel-reception.jpg':'assets/hero.webp';
    const cta=french?'Discuter de votre projet':'Discuss your project',services=french?'Services':'Services',scope=french?'Ce qui est inclus':'What’s included', docs=library[slug]||[];
    const pdfs=docs.map(f=>{const code=f.toLowerCase().match(/(he|en|ru)\.pdf$/)[1];return '<a href="../../'+f+'" type="application/pdf" hreflang="'+code+'">'+({he:'עברית',ru:'Русский',en:'English'}[code])+' · PDF</a>'}).join('');
    const contact=hotel?['+972503027014','+972 50 302 70 14','tib778877@gmail.com']:['+972555071400','+972 55 507 1400','9881988@gmail.com'];
    const schema={'@context':'https://schema.org','@type':'Service',name:title,description:lead,url,areaServed:'Israel',provider:{'@type':'Organization',name:'Eydelstein Digital Lab',url:root}};
    const bits=features.map(([name,p])=>'<article><h3>'+esc(name)+'</h3><p>'+esc(p)+'</p></article>').join('');
    const canonical='<link rel="canonical" href="'+url+'">';
    const html='<!doctype html><html lang="'+lang+'" dir="ltr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(title)+' | Eydelstein Digital Lab</title><meta name="description" content="'+esc(lead)+'">'+canonical+'<meta property="og:title" content="'+esc(title)+'"><meta property="og:description" content="'+esc(lead)+'"><meta property="og:url" content="'+url+'"><meta property="og:image" content="'+root+media+'"><link rel="icon" href="../../assets/edelstein-lab-digital-mark.svg"><link rel="stylesheet" href="../../styles.css"><link rel="stylesheet" href="../../software.css"><link rel="stylesheet" href="../../hotel-consulting/styles.css"><script type="application/ld+json">'+JSON.stringify(schema)+'</script></head><body><a class="skip" href="#main">'+(french?'Aller au contenu':'Skip to content')+'</a><header class="product-header"><div class="product-wrap product-header-inner"><a class="product-brand" href="'+home+'"><img width="32" height="32" src="../../assets/edelstein-lab-digital-mark.svg" alt="">Eydelstein Digital Lab</a><div class="product-header-tools"><select id="software-language" aria-label="Language"></select></div></div></header><main id="main"><section class="'+(hotel?'hotel-hero':'product-intro')+'"><div class="product-wrap"><p class="eyebrow">'+(hotel?'Eydelstein Digital Lab':'Galany CRM')+'</p><h1>'+esc(title)+'</h1><p class="product-lead">'+esc(lead)+'</p><div class="product-actions"><a class="btn '+(hotel?'btn-light':'')+'" href="#contact">'+cta+'</a><a class="text-link" href="#included">'+scope+'</a></div></div></section><section class="product-section" id="included"><div class="product-wrap"><h2>'+scope+'</h2><div class="hotel-grid">'+bits+'</div></div></section>'+(docs.length?'<section class="studio-resources product-section" id="presentations"><div class="product-wrap"><h2>'+(french?'Proposition commerciale':'Service proposal')+'</h2>'+pdfs+'</div></section>':'')+'<section class="product-section product-contact" id="contact"><div class="product-wrap section-two"><h2>'+cta+'</h2><div><a class="product-phone" href="tel:'+contact[0]+'">'+contact[1]+'</a><a href="mailto:'+contact[2]+'?'+new URLSearchParams({subject:title})+'">'+contact[2]+'</a>'+(!hotel?'<div class="product-actions"><a class="btn btn-light" href="https://wa.me/972533613100?text='+encodeURIComponent((french?'Bonjour, je souhaite en savoir plus : ':'Hello, I’m interested in ')+title)+'">WhatsApp</a></div>':'')+'</div></div></section></main><footer class="product-footer"><div class="product-wrap"><strong>Eydelstein Digital Lab</strong><a href="'+home+'#services">'+services+'</a></div></footer><script src="../../software.js" defer></script></body></html>';
    const dir=join(target,slug,lang);await mkdir(dir,{recursive:true});await writeFile(join(dir,'index.html'),html);
  }
}
