(() => {
  'use strict';
  const el=id=>document.getElementById(id);
  const data=JSON.parse(el('page-data').textContent);
  const language=document.documentElement.lang;
  if(el('enquiry')){
    const {l,prompts}=data, product=el('product'), form=el('enquiry');
    const incoming=new URLSearchParams(location.search).get('product');
    if(incoming && Object.hasOwn(prompts,incoming)) product.value=incoming;
    function select(){
      el('need-label').textContent=prompts[product.value]||l[9];
      document.querySelectorAll('.top nav a').forEach(a=>{
        const url=new URL(a.href);url.search=product.value?new URLSearchParams({product:product.value}):'';a.href=url;
      });
    }
    select();product.addEventListener('change',select);form.hidden=false;
    form.addEventListener('submit',event=>{
      // Unnamed visible inputs stay out of the URL and only reach the receiver on submit.
      const rows=[['email',l[7]],['phone',l[6]],['name',l[5]],['need',el('need-label').textContent],['tools',l[10]],['when',l[11]]]
        .flatMap(([id,label])=>el(id).value.trim()?[label+': '+el(id).value.trim()]:[]);
      if(!rows.length){event.preventDefault();el('form-error').textContent=l[13];el('email').focus();return;}
      const title=product.value?product.selectedOptions[0].text:l[0];
      el('payload').value=['Eydelstein Digital Lab | '+title+' ('+language+')',...rows].join('\n');
      el('form-error').textContent='';
    });
    return;
  }
  const {x,terms,answers,faq,locale,email}=data, q=el('question'),mic=el('mic'),read=el('read'),status=el('speech-status');
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
    const specific=hits.filter(k=>!contacts.includes(k)&&k!=='services'&&k!=='crm');
    const keys=hits.includes('private')?[]:contacts.length?contacts:specific.length?specific.slice(0,2):hits.slice(0,1);
    const result=exact&&!hits.includes('private')?[[exact[1],exact[2]]]:keys.map(k=>answers[k]).filter(Boolean);
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
