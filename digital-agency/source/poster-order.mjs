export const rates = [10,20,30];
export const orders = {
  ru:{
    prices:'Форматы и стоимость', unit:'За одно объявление', bulk:'За 100 штук', format:'Формат', sizes:['Полоса: ¼ листа А4','А5: половина листа А4','Целый лист А4'], strip:'Самоклеящаяся бумага. Из одного вертикального листа А4 получаются четыре горизонтальные полоски. Полный А4 печатаем в цвете.',
    terms:'Минимальный заказ: 100 объявлений. Цены не включают НДС. В стоимость входят дизайн, печать, размещение и фотоотчёт: отдельное фото каждого наклеенного объявления.',
    payment:'После согласования заказа выставляем счёт на 100% предоплаты банковским переводом. После предоплаты и утверждения макета изготовим и разместим тираж в течение семи дней.',
    title:'Что вы хотите прорекламировать?', intro:'Опишите услугу и замысел. Чтобы получить эскиз до печати, укажите электронную почту. Если нужна только консультация, достаточно телефона или почты.',
    service:'Услуга или товар',copy:'Текст объявления',design:'Дизайн: цвета, стиль, изображения',layout:'Структура: что и где разместить',layoutHint:'Например: сверху название, в центре услуга и цена, внизу телефон.',quantity:'Тираж',district:'Район размещения',date:'Желаемая дата',email:'E-mail для эскиза',phone:'Телефон',unsure:'Нужен совет',consent:'Разрешаю связаться со мной по этой заявке и прислать эскиз на указанную почту.',send:'Передать бриф агенту',success:'Бриф принят. Номер заявки:',fail:'Получение брифа не подтверждено. Данные сохранены в форме. Попробуйте ещё раз или откройте запрос в WhatsApp.',contact:'Укажите e-mail или телефон для ответа.',quote:'Стоимость до НДС',subject:'Уличные объявления в Тверии',proof:'Подготовить эскиз и отправить клиенту на указанный e-mail после проверки.'},
  he:{
    prices:'פורמטים ומחירים',unit:'למודעה',bulk:'ל־100 מודעות',format:'פורמט',sizes:['רצועה: רבע גיליון A4','A5: חצי גיליון A4','גיליון A4 שלם'],strip:'ההדפסה על נייר מדבקה. גיליון A4 לאורך נחתך לארבע רצועות אופקיות. מודעת A4 שלמה מודפסת בצבע.',
    terms:'מינימום להזמנה: 100 מודעות. המחירים אינם כוללים מע״מ. המחיר כולל עיצוב, הדפסה, תלייה ותיעוד מצולם: תמונה נפרדת של כל מודעה שנתלתה.',
    payment:'לאחר סיכום ההזמנה נשלח דרישת תשלום למקדמה של 100% בהעברה בנקאית. נדפיס ונתלה את המודעות בתוך שבעה ימים מקבלת התשלום ואישור הסקיצה.',
    title:'מה תרצו לפרסם?',intro:'ספרו לנו על השירות ועל העיצוב הרצוי. לקבלת סקיצה לפני ההדפסה השאירו כתובת מייל. להתייעצות בלבד מספיק טלפון או מייל.',
    service:'השירות או המוצר',copy:'נוסח המודעה',design:'עיצוב: צבעים, סגנון ותמונות',layout:'מבנה המודעה ומיקום הפרטים',layoutHint:'לדוגמה: שם העסק למעלה, השירות והמחיר במרכז וטלפון למטה.',quantity:'כמות',district:'אזור התלייה',date:'מועד מועדף',email:'מייל לקבלת הסקיצה',phone:'טלפון',unsure:'אשמח לייעוץ',consent:'אפשר ליצור איתי קשר לגבי הפנייה ולשלוח סקיצה לכתובת המייל שמסרתי.',send:'שליחת הבקשה לצוות',success:'הבקשה התקבלה. מספר פנייה:',fail:'לא התקבל אישור קליטה. הפרטים עדיין בטופס. אפשר לנסות שוב או לפתוח את הבקשה בוואטסאפ.',contact:'יש לציין מייל או טלפון ליצירת קשר.',quote:'מחיר לפני מע״מ',subject:'מודעות רחוב בטבריה',proof:'להכין סקיצה, לבדוק אותה ולשלוח לכתובת המייל שמסר הלקוח.'},
  en:{
    prices:'Poster sizes and prices',unit:'Per poster',bulk:'For 100',format:'Size',sizes:['Strip: quarter of A4','A5: half of A4','Full A4 sheet'],strip:'Printed on self-adhesive paper. A portrait A4 sheet is cut into four horizontal strips. Full A4 posters are printed in colour.',
    terms:'Minimum order: 100 posters. Prices exclude VAT. Design, printing, placement and a photo report are included: one photograph of every poster put up.',
    payment:'Once you agree to the order, we issue a payment request for 100% upfront by bank transfer. We print and place the posters within seven days of payment and artwork approval.',
    title:'What would you like to advertise?',intro:'Tell us about the service and how you picture your poster. Leave an email for the design proof before printing. For a general enquiry, a phone number or email is enough.',
    service:'Service or product',copy:'Poster text',design:'Design: colours, style and images',layout:'Layout: what goes where',layoutHint:'For example: business name at the top, offer and price in the centre, phone at the bottom.',quantity:'Quantity',district:'Neighbourhood',date:'Preferred date',email:'Email for your proof',phone:'Phone',unsure:'Help me choose',consent:'You may contact me about this enquiry and send a design proof to the email I provided.',send:'Send brief to the team',success:'Brief received. Your reference:',fail:'Receipt was not confirmed. Your details are still in the form. Try again or open the enquiry in WhatsApp.',contact:'Please enter an email or phone number.',quote:'Total before VAT',subject:'Street posters in Tiberias',proof:'Prepare a design proof; review it and email it to the address provided.'},
  fr:{
    prices:'Formats et tarifs',unit:'Par affiche',bulk:'Pour 100 affiches',format:'Format',sizes:['Bande : un quart de feuille A4','A5 : une demi-feuille A4','Feuille A4 entière'],strip:'Impression sur papier autocollant. Une feuille A4 en orientation portrait est découpée en quatre bandes horizontales. Le format A4 entier est imprimé en couleur.',
    terms:'Commande minimale : 100 affiches. Prix hors TVA. Création, impression, pose et reportage photo compris : une photo de chaque affiche posée.',
    payment:'Après accord sur la commande, nous envoyons une demande de paiement de 100 % par virement bancaire. Nous imprimons et posons les affiches dans les sept jours suivant le paiement et la validation de la maquette.',
    title:'Que souhaitez-vous promouvoir ?',intro:'Décrivez votre service et vos idées. Indiquez un e-mail pour recevoir la maquette avant impression. Pour un simple renseignement, un téléphone ou un e-mail suffit.',
    service:'Service ou produit',copy:'Texte de l’affiche',design:'Création : couleurs, style et images',layout:'Mise en page et ordre des éléments',layoutHint:'Par exemple : le nom en haut, l’offre et le prix au centre, le téléphone en bas.',quantity:'Quantité',district:'Quartier',date:'Date souhaitée',email:'E-mail pour la maquette',phone:'Téléphone',unsure:'À définir ensemble',consent:'Vous pouvez me contacter au sujet de cette demande et envoyer la maquette à l’adresse indiquée.',send:'Envoyer le brief à l’équipe',success:'Demande reçue. Votre référence :',fail:'Réception non confirmée. Vos informations sont toujours dans le formulaire. Réessayez ou ouvrez la demande dans WhatsApp.',contact:'Indiquez un e-mail ou un téléphone.',quote:'Total hors TVA',subject:'Affichage à Tibériade',proof:'Préparer une maquette, la vérifier, puis l’envoyer à l’adresse e-mail indiquée.'}
};

export function orderForm(lang,wa,e){
  const t=orders[lang], money=n=>new Intl.NumberFormat(lang,{style:'currency',currency:'ILS',maximumFractionDigits:0}).format(n);
  const label=(key,control)=>`<label for="p-${key}">${e(t[key])}</label>${control}`;
  const input=(key,type,max,attr='')=>label(key,`<input id="p-${key}" name="${key}" type="${type}" maxlength="${max}" ${attr}>`);
  const area=(key,max)=>label(key,`<textarea name="${key}" id="p-${key}" dir="auto" rows="2" maxlength="${max}"${key==='layout'?' placeholder="'+e(t.layoutHint)+'"':''}></textarea>`);
  return `<section class="product-section poster-pricing"><div class="product-wrap"><h2>${e(t.prices)}</h2>
<table><thead><tr>${[t.format,t.unit,t.bulk].map(s=>'<th scope="col">'+e(s)+'</th>').join('')}</tr></thead><tbody>${t.sizes.map((s,i)=>`<tr><th scope="row">${e(s)}</th><td>${e(money(rates[i]))}</td><td>${e(money(100*rates[i]))}</td></tr>`).join('')}</tbody></table>
<p>${e(t.strip)}</p><p><strong>${e(t.terms)}</strong></p><p>${e(t.payment)}</p></div></section>
<section id="brief" class="product-section poster-brief"><div class="product-wrap section-two"><div><h2>${e(t.title)}</h2><p>${e(t.intro)}</p></div>
<div><form id="poster-order" hidden>
${input('service','text',95,'dir="auto"')}${area('copy',320)}${area('design',200)}${area('layout',200)}
<div class="poster-pair"><div>${label('format',`<select id="p-format" name="format"><option value="">${e(t.unsure)}</option>${t.sizes.map((s,i)=>`<option value="${rates[i]}">${e(s)} · ${e(money(rates[i]))}</option>`).join('')}</select>`)}</div><div>${label('quantity','<input id="p-quantity" name="quantity" type="number" min="100" max="999999" step="1" value="100">')}</div></div><output id="p-quote" aria-live="polite"></output>
<div class="poster-pair"><div>${input('district','text',65,'dir="auto"')}</div><div>${input('date','date',10)}</div></div>
<div class="poster-pair"><div>${input('email','email',254,'autocomplete="email" dir="ltr"')}</div><div>${input('phone','tel',35,'autocomplete="tel" dir="ltr"')}</div></div>
<label class="poster-consent"><input type="checkbox" name="consent" required> ${e(t.consent)}</label>
<p role="alert" id="poster-error"></p><div class="poster-actions"><button class="btn" type="submit">${e(t.send)}</button><button type="button" id="p-wa" class="poster-alt">${e(wa)}</button></div></form>
<p id="poster-result" role="status" tabindex="-1"></p><noscript><a href="https://wa.me/972533613100">${e(wa)}</a></noscript></div></div></section>
<script id="poster-data" type="application/json">${JSON.stringify(t).replaceAll('<','\\u003c')}</script>`;
}
