(() => {
  'use strict';
  const el=id=>document.getElementById(id);
  const data=JSON.parse(el('page-data').textContent);
  const language=document.documentElement.lang;
  const query=new URLSearchParams(location.search);
  const intake=data.intake;
  const productId=query.get('product');
  const briefKey='edelstein-sales-question';
  if(el('enquiry')){
    const {l,prompts}=data, product=el('product'), form=el('enquiry');
    if(productId && Object.hasOwn(prompts,productId)) product.value=productId;
    const intent=['order','question'].includes(query.get('intent'))?query.get('intent'):'enquiry';
    if(intent==='order')document.querySelector('.funnel h1').textContent=intake[2];
    if(intent==='question'){
      try {
        const draft=JSON.parse(sessionStorage.getItem(briefKey)||'null');
        sessionStorage.removeItem(briefKey);
        if (draft && draft.product===productId) el('need').value=draft.text.slice(0,500);
      } catch {}
    }
    function select(){
      el('need-label').textContent=prompts[product.value]||l[9];
      document.querySelectorAll('.top nav a').forEach(a=>{
        const url=new URL(a.href);url.search=new URLSearchParams(product.value?{product:product.value,intent}:{intent});a.href=url;
      });
    }
    select();product.addEventListener('change',select);form.hidden=false;
    let lastRequest='';
    let requestId='';
    const submit=form.querySelector('button[type=submit]');
    form.addEventListener('submit',async event=>{
      event.preventDefault();
      if(submit.disabled)return;
      const payload={product:product.value,language,intent,consent:el('allow-contact').checked};
      for(const name of ['phone','email','name','need','tools','when','budget'])payload[name]=el(name).value.trim();
      if(!payload.product||!(payload.email||payload.phone)||!payload.need||!payload.consent){
        el('form-error').textContent=payload.consent?intake[6]:intake[4];return;
      }
      const signature=JSON.stringify(payload);
      if(signature!==lastRequest){requestId=crypto.randomUUID();lastRequest=signature;}
      submit.disabled=true;
      el('form-error').textContent='';
      el('form-result').textContent='';
      try {
        const response=await fetch(data.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},
          credentials:'omit',body:JSON.stringify({...payload,requestId}),signal:AbortSignal.timeout(15000)});
        const result=await response.json();
        if(!response.ok||result.accepted!==true||!/^WEB-[0-9A-F]{8}$/.test(result.reference))throw new Error('Unconfirmed enquiry');
        form.reset();product.value=payload.product;select();lastRequest='';
        el('form-result').textContent=intake[5]+' · '+result.reference;
      } catch {el('form-error').textContent=intake[7];}
      finally {submit.disabled=false;}
    });
    return;
  }
  const {x,terms,answers,faq,locale,email}=data, q=el('question'),mic=el('mic'),read=el('read'),status=el('speech-status');
  const chosen=Object.hasOwn(data.scripts,productId)?data.scripts[productId]:null;
  const advisorRequest=intent=>{
    const params=new URLSearchParams({intent});
    if(chosen)params.set('product',productId);
    return data.request+'?'+params;
  };
  if(chosen){
    el('advisor-topic').textContent=chosen[0];
    el('advisor-context').textContent=[chosen[2],chosen[1]].filter(Boolean).join(' ');
  }
  el('advisor-write').href=advisorRequest('question');
  el('advisor-order').href=advisorRequest('order');
  el('advisor-write').addEventListener('click',()=>{
    try {sessionStorage.setItem(briefKey,JSON.stringify({product:chosen?productId:null,text:q.value.trim()}));} catch {}
  });
  const norm=s=>s.toLowerCase().replaceAll('ё','е').normalize('NFD').replace(/\p{M}/gu,'').replace(/[^\p{L}\p{N}*]+/gu,' ').trim().replace(/\s+/g,' ');
  const matches=(words,term)=>{
    const tokens=norm(term).split(' ');
    return words.some((_,i)=>tokens.every((t,j)=>t.endsWith('*')?words[i+j]?.startsWith(t.slice(0,-1)):words[i+j]===t));
  };
  const synthesis=window.speechSynthesis, canRead=Boolean(synthesis && window.SpeechSynthesisUtterance);
  const Rec=window.SpeechRecognition||window.webkitSpeechRecognition;
  let rec=null, utter=null, last='', timer=0;
  const buttonText=(btn,label)=>{btn.querySelector('span').textContent=label;btn.title=label;btn.setAttribute('aria-label',label);};
  const stopSound=()=>{if(utter){utter=null;synthesis.cancel();}buttonText(read,x.listen);};
  const stopMic=()=>{const old=rec;rec=null;clearTimeout(timer);if(old){try{old.abort();}catch{}}buttonText(mic,x.mic);};
  function speak(){
    if(!canRead || !last)return;
    stopMic();stopSound();
    const msg=new SpeechSynthesisUtterance(last);utter=msg;msg.lang=locale;
    const voice=synthesis.getVoices().find(v=>v.lang.toLowerCase().split(/[-_]/)[0]===language);if(voice)msg.voice=voice;
    buttonText(read,x.stop);
    msg.onend=msg.onerror=event=>{if(utter!==msg)return;utter=null;buttonText(read,x.listen);if(event.type==='error')status.textContent=x.noVoice;};
    try{synthesis.speak(msg);}catch{stopSound();status.textContent=x.noVoice;}
  }
  function answer(question,voice=false){
    if(!question.trim())return;
    q.value=question;stopMic();stopSound();status.textContent=Rec?'':x.noMic;
    const key=norm(question), words=key.split(' ');
    const hits=Object.keys(terms).filter(k=>terms[k].some(v=>matches(words,v)));
    const exact=faq.find(([title])=>norm(title)===key);
    const contacts=['phone','email','whatsapp','hours','office'].filter(k=>hits.includes(k));
    const catalog=hits.filter(k=>data.catalogIds?.includes(k));
    const specific=catalog.length?[...catalog,...hits.filter(k=>k==='price')]:hits.filter(k=>!contacts.includes(k)&&k!=='services'&&k!=='crm');
    const keys=hits.includes('private')?[]:contacts.length?contacts:specific.length?specific.slice(0,2):hits.slice(0,1);
    const result=exact&&!hits.includes('private')?[[exact[1],exact[2]]]:keys.map(k=>answers[k]).filter(Boolean);
    if(!result.length && chosen && !hits.includes('private'))result.push([[chosen[2]||intake[8],chosen[1]].join(' '),advisorRequest('order'),intake[2]]);
    if(!result.length)result.push([x.unknown,'mailto:'+email+'?body='+encodeURIComponent(question),x.hand]);
    const panel=el('answer');panel.replaceChildren();
    for(const [text,url,label] of result){const p=document.createElement('p');p.textContent=text;panel.append(p);
      if(url){const a=document.createElement('a');a.href=url;a.textContent=label||(/^(mailto:|tel:)/.test(url)?text.split(':')[0]:x.more);panel.append(a);}
    }
    last=result.map(row=>row[0]).join(' ');read.disabled=!canRead;if(voice)speak();
  }
  el('advisor').hidden=false;read.disabled=true;read.hidden=!canRead;mic.disabled=!Rec;
  mic.setAttribute('aria-describedby','privacy speech-status');
  if(!Rec)status.textContent=x.noMic;
  el('ask').addEventListener('submit',ev=>{ev.preventDefault();answer(q.value);});
  document.querySelectorAll('[data-question]').forEach(btn=>btn.addEventListener('click',()=>answer(btn.textContent)));
  read.addEventListener('click',()=>utter?stopSound():speak());
  mic.addEventListener('click',()=>{
    if(rec){stopMic();status.textContent='';return;}
    stopSound();let r;
    try{
      r=new Rec();rec=r;r.lang=locale;r.continuous=false;r.interimResults=false;
      r.onresult=ev=>{if(rec===r){const transcript=ev.results[0][0].transcript.trim();if(transcript)answer(transcript,true);}};
      r.onerror=()=>{if(rec===r){stopMic();status.textContent=x.failed;}};
      r.onend=()=>{if(rec===r){stopMic();status.textContent=x.failed;}};
      r.start();buttonText(mic,x.stop);status.textContent=x.listening;
      timer=setTimeout(()=>{if(rec===r){stopMic();status.textContent=x.failed;}},25000);
    }catch{stopMic();status.textContent=x.failed;}
  });
  window.addEventListener('pagehide',()=>{stopMic();stopSound();});
})();
