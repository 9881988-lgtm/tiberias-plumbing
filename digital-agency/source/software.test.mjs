import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../software.js',import.meta.url),'utf8');

function fixture(language='en') {
  const nodes = new Map();
  const events = new Map();
  const node = (id,extra={}) => {
    const n = {value:'',textContent:'',hidden:false,dataset:{},focus(){this.focused=true;},addEventListener(type,callback){events.set(`${id}:${type}`,callback);},...extra};
    nodes.set(id,n);
    return n;
  };
  node('#software-language');
  node('#crm-demo-form');
  node('#demo-product',{value:'crm',selectedOptions:[{textContent:'Galany CRM'}]});
  node('#demo-plan',{value:'Light',selectedOptions:[{textContent:'Light'}]});
  node('#demo-status');
  node('#demo-need',{value:'A business in Haifa needs customer follow-up.'});
  const opens=[],assignments=[];
  const document = {body:{dataset:{language,message:'Please arrange a Galany CRM demo.',taskLabel:'Need',planLabel:'Plan',invalid:'Invalid brief',prepared:'Draft prepared'}},querySelector:s=>nodes.get(s),querySelectorAll:()=>[]};
  const window = {location:{search:'?utm_source=linkedin&utm_medium=organic&utm_campaign=galany_launch&password=not-for-transmission',assign:u=>assignments.push(u)},open:(...args)=>opens.push(args)};
  vm.runInNewContext(source,{document,window,URLSearchParams,Intl,Number,encodeURIComponent});
  return {nodes,opens,assignments,fire:(id,type='input',event={})=>events.get(`${id}:${type}`)(event)};
}

test('Brief validation stops navigation',()=>{
  const f=fixture();f.nodes.get('#demo-need').value='  ';let prevented=false;
  f.fire('#crm-demo-form','submit',{preventDefault(){prevented=true;}});
  assert.equal(prevented,true);assert.equal(f.opens.length,0);assert.equal(f.assignments.length,0);assert.equal(f.nodes.get('#demo-need').focused,true);
});
test('WhatsApp draft has correct contact, plan and allowlisted attribution; does not send',()=>{
  const f=fixture();f.fire('#crm-demo-form','submit',{preventDefault(){},submitter:{value:''}});
  assert.equal(f.opens.length,1);
  const u=new URL(f.opens[0][0]);assert.equal(u.origin,'https://wa.me');assert.equal(u.pathname,'/972533613100');
  assert.match(u.searchParams.get('text'),/Galany CRM/);assert.match(u.searchParams.get('text'),/Plan: Light/);
  assert.match(u.searchParams.get('text'),/utm_source=linkedin/);assert.doesNotMatch(u.searchParams.get('text'),/password|not-for-transmission/);
  assert.equal(f.nodes.get('#demo-status').textContent,'Draft prepared');
});
test('Email option opens a draft to the existing business address',()=>{
  const f=fixture();f.fire('#crm-demo-form','submit',{preventDefault(){},submitter:{value:'email'}});
  assert.equal(f.opens.length,0);assert.match(f.assignments[0],/^mailto:9881988@gmail.com\?/);
  assert.match(decodeURIComponent(f.assignments[0]),/Galany CRM/);
});
test('Language selection uses the rendered static route',()=>{
  const f=fixture();f.fire('#software-language','change',{target:{value:'../../galany-crm/ru/'}});
  assert.deepEqual(f.assignments,['../../galany-crm/ru/']);
});
