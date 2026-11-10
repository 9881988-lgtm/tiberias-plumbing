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
  node('#cost-plan',{value:'Light'});
  node('#cost-minutes',{value:'60'});
  node('#cost-days',{value:'30'});
  node('#cost-minute-text',{dataset:{normal:'Call minutes',extra:'Extra-line minutes'}});
  node('#cost-days-label');
  node('#cost-minutes-label');
  node('#cost-total');
  const opens=[],assignments=[];
  const document = {body:{dataset:{language,message:'Please arrange a Galany CRM demo.',taskLabel:'Need',planLabel:'Plan',invalid:'Invalid brief',prepared:'Draft prepared'}},querySelector:s=>nodes.get(s),querySelectorAll:()=>[]};
  const window = {location:{search:'?utm_source=linkedin&utm_medium=organic&utm_campaign=galany_launch&password=not-for-transmission',assign:u=>assignments.push(u)},open:(...args)=>opens.push(args)};
  vm.runInNewContext(source,{document,window,URLSearchParams,Intl,Number,encodeURIComponent});
  return {nodes,opens,assignments,fire:(id,type='input',event={})=>events.get(`${id}:${type}`)(event)};
}

test('Light and Booking bill actual call time, not idle time',()=>{
  const f=fixture();
  assert.equal(f.nodes.get('#cost-total').textContent,'2,018 ₪');
  f.nodes.get('#cost-minutes').value='120';f.fire('#cost-minutes');
  assert.equal(f.nodes.get('#cost-total').textContent,'2,036 ₪');
  f.nodes.get('#cost-plan').value='Booking';f.fire('#cost-plan');
  assert.equal(f.nodes.get('#cost-total').textContent,'3,036 ₪');
});
test('Dental plan includes the first 100 minutes and bills only excess duration',()=>{
  const f=fixture();f.nodes.get('#cost-plan').value='dental_secretary';
  for(const [minutes,total] of [[0,'1,000 ₪'],[100,'1,000 ₪'],[101,'1,000.3 ₪'],[160,'1,018 ₪'],[200,'1,030 ₪']]){
    f.nodes.get('#cost-minutes').value=String(minutes);f.fire('#cost-plan');
    assert.equal(f.nodes.get('#cost-total').textContent,total);
  }
});
test('Unconfirmed generic receptionist plan does not show a made-up price',()=>{
  const f=fixture();f.nodes.get('#cost-plan').value='My Receptionist';f.fire('#cost-plan');
  assert.equal(f.nodes.get('#cost-total').textContent,'Quote required');
});
test('Business follows 28/29/30/31 calendar days without duplicate call fees',()=>{
  const f=fixture();f.nodes.get('#cost-plan').value='Business';
  for(const [days,total] of [[28,'12,096 ₪'],[29,'12,528 ₪'],[30,'12,960 ₪'],[31,'13,392 ₪']]){
    f.nodes.get('#cost-days').value=String(days);f.fire('#cost-plan');
    assert.equal(f.nodes.get('#cost-total').textContent,total);
    assert.equal(f.nodes.get('#cost-minutes-label').hidden,true);
    assert.equal(f.nodes.get('#cost-days-label').hidden,false);
  }
});
test('Business Plus adds actual extra-line minutes only',()=>{
  const f=fixture();f.nodes.get('#cost-plan').value='Business Plus';f.nodes.get('#cost-minutes').value='180';f.fire('#cost-plan');
  assert.equal(f.nodes.get('#cost-total').textContent,'13,014 ₪');
  assert.equal(f.nodes.get('#cost-minute-text').textContent,'Extra-line minutes');
});
test('Invalid minute inputs do not produce misleading prices',()=>{
  const f=fixture();
  for(const invalid of ['', '-1', '1.5', 'Infinity', '1000001']){
    f.nodes.get('#cost-minutes').value=invalid;f.fire('#cost-minutes');assert.equal(f.nodes.get('#cost-total').textContent,'—');
  }
  f.nodes.get('#cost-plan').value='Business';f.fire('#cost-plan');
  assert.equal(f.nodes.get('#cost-total').textContent,'12,960 ₪');
});
test('Number formatting supports all three languages',()=>{
  for(const language of ['he','ru','en']){
    const f=fixture(language);
    const expected=new Intl.NumberFormat(language==='he'?'he-IL':language==='ru'?'ru-RU':'en-US',{maximumFractionDigits:2}).format(2018)+' ₪';
    assert.equal(f.nodes.get('#cost-total').textContent,expected);
  }
});
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
