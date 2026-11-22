import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { contact, copy } from './contact-copy.mjs';
import { capabilities } from './capabilities.mjs';
import { products, entry, formUrl, leadCopy, siteSales } from './lead-copy.mjs';
const file=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
for(const lang of Object.keys(copy)){
  test('contact and enquiry routes: '+lang,()=>{
    const suffix=lang==='he'?'':lang+'/';
    const home=file(suffix+'index.html'), contactPage=file('contacts/'+suffix+'index.html'), form=file('request/'+suffix+'index.html');
    assert.ok(home.includes('contacts/'+suffix+'"'));assert.ok(form.includes(formUrl+'/formResponse'));
    assert.ok(form.includes('name="'+entry+'"'));assert.ok(contactPage.includes('tel:'+contact.phone));
    assert.ok(form.includes('id="enquiry-receipt" aria-labelledby="receipt-title" tabindex="-1" hidden'));
    assert.ok(form.includes('class="product-select"><select id="product"'));
    assert.ok(contactPage.includes('mailto:'+contact.email));assert.ok(contactPage.includes('href="'+contact.whatsapp+'"'));
    const advisor=JSON.parse(contactPage.match(/id="page-data">([^<]+)<\/script>/)[1]);
    for(const c of capabilities){
      assert.ok(home.includes('id="'+c.id+'"'));assert.ok(home.includes(c[lang][0]));
      assert.ok(advisor.terms[c.id].length>1);
      assert.ok(advisor.answers[c.id][1].endsWith('?product='+c.id));
      assert.ok(form.includes('value="'+c.id+'"'));
    }
    for(const p of ['galany-crm','dental-secretary','hotel-consulting','innovation-applications']){
      assert.ok(file(p+'/'+suffix+'index.html').includes('request/'+suffix+'?product='+p));
      assert.ok(form.includes('value="'+p+'"'));
    }
  });
}
test('a product enquiry reaches the CRM only on explicit submission with a callback and consent',async ()=>{
  let submit;
  const fields=Object.fromEntries(['page-data','enquiry','enquiry-title','enquiry-lead','enquiry-receipt','product','need-label','email','phone','name','need','tools','when','payload','form-error','allow-contact','form-result','budget'].map(k=>[k,{value:'',textContent:'',addEventListener(ev,fn){if(ev==='submit')submit=fn;}}]));
  fields['enquiry-receipt'].hidden=true;
  fields['enquiry-receipt'].focus=function(){this.focused=true;};
  const endpoint='https://example.invalid/api/site-sales/enquiry';
  fields['page-data'].textContent=JSON.stringify({l:leadCopy.en,prompts:products,endpoint,intake:siteSales.en,receipt:['Thank you','We’ll be in touch','Enquiry reference']});
  const submitButton={disabled:false};
  fields.enquiry.querySelector=()=>submitButton;
  fields.enquiry.reset=()=>{};
  fields.product.selectedOptions=[{text:'Galany CRM'}];
  const sent=[];
  const measured=[];
  let accepted=false;
  runInNewContext(file('contact-pages.js'),{window:{edlAnalytics:{enquiryAccepted:(...args)=>measured.push(args)}},document:{getElementById:k=>fields[k],documentElement:{lang:'en'},querySelectorAll:()=>[],querySelector:()=>({})},location:{search:'?product=galany-crm&intent=order'},URLSearchParams,
    crypto:{randomUUID:()=> '4dd6c5a3-c253-403a-8d18-756b60b09e12'}, AbortSignal,
    fetch:async(url,options)=>{sent.push([url,JSON.parse(options.body)]);return {ok:accepted,json:async()=>({accepted,reference:'WEB-4DD6C5A3'})};}});
  const event={preventDefault(){}};
  await submit(event);assert.equal(sent.length,0);
  fields.email.value='example@example.invalid';fields.need.value='Consolidate enquiries.';
  await submit(event);assert.equal(sent.length,0);
  fields['allow-contact'].checked=true;
  await submit(event);assert.equal(sent.length,1);
  assert.deepEqual(measured,[]);
  assert.equal(fields.enquiry.hidden,false);assert.equal(fields['enquiry-receipt'].hidden,true);
  accepted=true;
  await submit(event);assert.equal(sent.length,2);
  assert.equal(sent[1][1].requestId,sent[0][1].requestId);
  assert.equal(sent[0][0],endpoint);assert.equal(sent[0][1].product,'galany-crm');
  assert.equal(sent[0][1].intent,'order');assert.equal(sent[0][1].consent,true);
  assert.match(fields['form-result'].textContent,/WEB-4DD6C5A3$/);
  assert.equal(fields.enquiry.hidden,true);assert.equal(fields['enquiry-title'].hidden,true);
  assert.equal(fields['enquiry-receipt'].hidden,false);assert.equal(fields['enquiry-receipt'].focused,true);
  await submit(event);assert.equal(sent.length,2);
  assert.deepEqual(measured,[['galany-crm','order']]);
});
