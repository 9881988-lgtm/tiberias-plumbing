import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { contact, copy } from './contact-copy.mjs';
import { products, entry, formUrl, leadCopy } from './lead-copy.mjs';
const file=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
for(const lang of Object.keys(copy)){
  test('contact and enquiry routes: '+lang,()=>{
    const suffix=lang==='he'?'':lang+'/';
    const home=file(suffix+'index.html'), contactPage=file('contacts/'+suffix+'index.html'), form=file('request/'+suffix+'index.html');
    assert.ok(home.includes('contacts/'+suffix+'"'));assert.ok(form.includes(formUrl+'/formResponse'));
    assert.ok(form.includes('name="'+entry+'"'));assert.ok(contactPage.includes('tel:'+contact.phone));
    assert.ok(contactPage.includes('mailto:'+contact.email));assert.ok(contactPage.includes('href="'+contact.whatsapp+'"'));
    for(const p of ['galany-crm','dental-secretary','hotel-consulting','innovation-applications']){
      assert.ok(file(p+'/'+suffix+'index.html').includes('request/'+suffix+'?product='+p));
      assert.ok(form.includes('value="'+p+'"'));
    }
  });
}
test('partial enquiries serialize on explicit submission only',()=>{
  let submit;
  const fields=Object.fromEntries(['page-data','enquiry','product','need-label','email','phone','name','need','tools','when','payload','form-error'].map(k=>[k,{value:'',textContent:'',addEventListener(ev,fn){if(ev==='submit')submit=fn;},focus(){}}]));
  fields['page-data'].textContent=JSON.stringify({l:leadCopy.en,prompts:products});
  fields.product.selectedOptions=[{text:'Galany CRM'}];
  runInNewContext(file('contact-pages.js'),{document:{getElementById:k=>fields[k],documentElement:{lang:'en'},querySelectorAll:()=>[]},location:{search:'?product=galany-crm'},URLSearchParams});
  assert.equal(fields.payload.value,'');
  let blocked=false;submit({preventDefault(){blocked=true;}});assert.ok(blocked);
  for(const [k,v] of [['email','example@example.invalid'],['phone','5550100'],['need','A website']]){
    fields[k].value=v;submit({preventDefault(){assert.fail('Partial enquiry rejected');}});assert.ok(fields.payload.value.includes(v));fields[k].value='';
  }
});
