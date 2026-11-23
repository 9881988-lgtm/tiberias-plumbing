import { createRequire } from 'node:module';
import { mkdir, readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { brand, branch, email, pathFor, pdfFor, phone, photo, priceFor, site, words } from './hotel-cyprus-copy.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const destination = resolve(process.argv[2] || fileURLToPath(new URL('../hotel-consulting/cyprus/', import.meta.url)));
const photoUrl = 'data:image/jpeg;base64,' + (await readFile(new URL('../'+photo, import.meta.url))).toString('base64');
const esc = v => v.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const mailto = 'mailto:' + email + '?subject=Cyprus%20hotel%20consulting';
const tel = 'tel:' + phone.replaceAll(' ','');

function render(lang,t) {
  const header = `<header><span class="wordmark" dir="ltr"><b>E</b> ${brand}</span><span>${esc(t.country)} · ${esc(t.proposal)}</span></header>`;
  const url = site + branch + pathFor(lang);
  const footer = (n) => `<footer><a href="${url}">${brand}</a><bdi>${n} / 4</bdi></footer>`;
  const sheet = (n,body) => `<section class="sheet">${header}<div class="content">${body}</div>${footer(n)}</section>`;
  const intro = `<div class="intro"><p class="key">${esc(t.proposal)}</p><h1>${esc(t.title)}</h1><p>${esc(t.lead)}</p></div>
    <img class="cover" src="${photoUrl}" alt="">
    <div class="price"><div><p>${esc(t.package)}</p><strong dir="ltr">${esc(priceFor(lang))}</strong><p>${esc(t.month)}</p></div><b>${esc(t.support)}</b></div>
    <div class="small"><h2>${esc(t.scope)}</h2><p>${esc(t.terms)}</p></div>`;
  const chapters = t.sections.map(([title,lead,items],i) => sheet(i+2,`<div class="chapter"><p class="key">${esc(t.title)}</p><h2>${esc(title)}</h2><p>${esc(lead)}</p></div>
    <div class="entries">${items.map(([heading,desc],j) => `<article><bdi class="number">0${j+1}</bdi><div><h3>${esc(heading)}</h3><p>${esc(desc)}</p></div></article>`).join('')}</div>
    ${i===2?`<div class="contact"><h3>${esc(t.contact)}</h3><p>${esc(t.contactNote)}</p><div class="contact-links"><a dir="ltr" href="${mailto}">${email}</a><a dir="ltr" href="${tel}">${phone}</a></div></div>`:''}`)).join('');
  return `<!doctype html><html lang="${lang}" dir="${lang==='he'?'rtl':'ltr'}"><meta charset="utf-8"><title>${esc(t.title)} | ${brand}</title>
<style>
@page{size:A4;margin:0}
*{box-sizing:border-box}html,body{margin:0;color:#142922;background:#fff;font:12.5pt/1.46 Arial,sans-serif;letter-spacing:0}
.sheet{min-height:297mm;padding:13mm 17mm 11mm;display:flex;flex-direction:column;break-after:page}
.sheet:last-child{break-after:auto}
header,footer{display:flex;align-items:center;justify-content:space-between;gap:4mm;font-size:9.8pt}
header{border-bottom:1px solid #b6c7bf;padding-bottom:4mm}
.wordmark{display:flex;align-items:center;gap:3mm;font-weight:700;white-space:nowrap}
.wordmark b{display:grid;place-items:center;background:#dafa79;width:7mm;height:7mm;color:#142922}
.content{flex:1}
.intro,.chapter{padding-block:9mm 5mm}
.intro .key,.chapter .key{font-size:10pt;color:#356457;font-weight:700;margin:0 0 2mm}
h1{font-size:38pt;line-height:1.08;margin:0 0 4mm}
h2{font-size:25pt;line-height:1.15;margin:0 0 3mm}
h3{font-size:14pt;line-height:1.24;margin:0 0 1.2mm}
p{margin:0}
.intro>p:last-child,.chapter>p:last-child{max-width:145mm;color:#345148}
.cover{width:100%;height:75mm;object-fit:cover;object-position:center;border-radius:2mm;display:block}
.price{display:flex;align-items:center;justify-content:space-between;gap:7mm;padding:6mm;margin-top:6mm;background:#dafa79;border-radius:2mm}
.price p,.price b{font-size:11pt}.price strong{display:inline-block;font-size:35pt;line-height:1.1}
.small{padding-block:6mm 0;font-size:11pt;color:#345148}.small h2{font-size:14pt}
.entries article{display:grid;grid-template-columns:9mm minmax(0,1fr);gap:3mm;border-top:1px solid #b9cbc3;padding-block:4mm}
.entries article p{font-size:11.5pt;color:#263d35}.number{font-size:10pt;color:#356457;font-weight:bold}
.contact{padding:4mm 5mm;margin-top:3mm;color:#fff;background:#17382e;border-radius:2mm;font-size:10.7pt}
.contact-links{display:flex;flex-wrap:wrap;gap:2mm 6mm;margin-top:2mm}.contact a{color:#dafa79}
footer{border-top:1px solid #b6c7bf;margin-top:5mm;padding-top:3mm;color:#356457}
footer a{text-decoration:none;color:inherit}
</style><body>${sheet(1,intro)}${chapters}</body></html>`;
}

await mkdir(destination,{recursive:true});
const browser = await chromium.launch({executablePath:process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
try {
  const page = await browser.newPage();
  for (const [lang,t] of Object.entries(words)) {
    await page.setContent(render(lang,t));
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({path:join(destination,pdfFor(lang)),preferCSSPageSize:true,printBackground:true,tagged:true});
  }
} finally {
  await browser.close();
}
