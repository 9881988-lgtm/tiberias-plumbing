import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
const root = new URL('../',import.meta.url);
const slugs=['galany-crm','ai-sales-agent','call-center-software','software','dental-secretary','auto-secretary','hotel-secretary','small-business-secretary','hotel-consulting','innovation-applications'];
for(const slug of slugs) test(slug+': reciprocal static routes, translations and downloads',()=>{
  for(const lang of ['he','ru','fr','en']){
    const path=slug+'/'+(lang==='he'?'':lang+'/');const dir=new URL(path,root);
    const html=readFileSync(new URL('index.html',dir),'utf8');
    assert.ok(html.includes('<html lang="'+lang+'"'));
    assert.ok(html.includes('service-studio.css'));
    assert.ok(html.includes('class="service-rail"'));
    for(const code of ['he','ru','fr','en']){
      const alternate='https://9881988-lgtm.github.io/tiberias-plumbing/digital-agency/'+slug+'/'+(code==='he'?'':code+'/');
      assert.ok(html.includes('hreflang="'+(code==='he'?'he-IL':code)+'" href="'+alternate+'"'),path+' → '+code);
    }
    for(const [_,href] of html.matchAll(/<a[^>]* href="([^"]+\.pdf)"/gi)){
      const file=href.startsWith('https://')?new URL(href.split('/digital-agency/')[1],root):new URL(href,dir);
      assert.ok(existsSync(file),href);
    }
  }
});
