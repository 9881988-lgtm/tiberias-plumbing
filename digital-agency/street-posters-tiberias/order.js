(()=>{
  const form=document.getElementById('poster-order');
  if(!form)return;
  const t=JSON.parse(document.getElementById('poster-data').textContent);
  const fields=form.elements, err=document.getElementById('poster-error'), result=document.getElementById('poster-result');
  const lang=document.documentElement.lang, submit=form.querySelector('[type=submit]'), wa=document.getElementById('p-wa');
  const value=k=>fields[k].value.trim();
  const line=(k,v)=>v?t[k]+': '+v:'';
  let previous='',requestId='';
  function quote(){
    const unit=Number(value('format')), qty=fields.quantity.valueAsNumber;
    const total=[10,20,30].includes(unit)&&Number.isInteger(qty)&&qty>=100&&fields.quantity.validity.valid?
      new Intl.NumberFormat(lang,{style:'currency',currency:'ILS',maximumFractionDigits:0}).format(unit*qty):'';
    return line('quote',total);
  }
  const renderQuote=()=>{document.getElementById('p-quote').textContent=quote();};
  form.addEventListener('input',()=>{err.textContent='';renderQuote();});
  function brief(){
    const format=fields.format.selectedOptions[0].textContent;
    const need=[t.subject,...['service','copy','design','layout'].map(k=>line(k,value(k))),line('format',format),
      line('quantity',value('quantity')),quote()].filter(Boolean).join('\n');
    return {product:'street-posters-tiberias',language:lang,intent:'order',need,email:value('email'),phone:value('phone'),
      tools:value('email')?t.proof:'',when:[line('district',value('district')),line('date',value('date'))].filter(Boolean).join('\n'),consent:fields.consent.checked};
  }
  wa.addEventListener('click',()=>{
    if(!form.reportValidity())return;
    const b=brief(), message=[b.need,b.when,b.tools,line('email',b.email),line('phone',b.phone)].filter(Boolean).join('\n');
    const url=new URL('https://wa.me/972533613100');url.searchParams.set('text',message);location.assign(url.href);
  });
  form.addEventListener('submit',async e=>{
    e.preventDefault();if(submit.disabled)return;
    const b=brief();
    if(!b.email&&!b.phone){err.textContent=t.contact;fields.email.focus();return;}
    const key=JSON.stringify(b);
    submit.disabled=wa.disabled=true;err.textContent='';
    try{
      if(key!==previous){requestId=crypto.randomUUID();previous=key;}
      const r=await fetch('https://91.107.216.53/api/site-sales/enquiry',{method:'POST',credentials:'omit',
        headers:{'Content-Type':'application/json'},body:JSON.stringify({...b,requestId}),signal:AbortSignal.timeout(15000)});
      const o=await r.json();if(!r.ok||o.accepted!==true||!/^WEB-[0-9A-F]{8}$/.test(o.reference))throw Error();
      form.reset();form.hidden=true;result.textContent=t.success+' '+o.reference;result.focus();
      try{window.edlAnalytics?.enquiryAccepted(b.product,b.intent);}catch{}
    }catch{err.textContent=t.fail;}
    finally{submit.disabled=wa.disabled=false;}
  });
  form.hidden=false;renderQuote();
})();
