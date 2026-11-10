(() => {
  'use strict';
  const language = document.body.dataset.language || 'he';
  document.querySelector('#software-language')?.addEventListener('change', event => {
    window.location.assign(event.target.value);
  });
  const form = document.querySelector('#crm-demo-form');
  const product = document.querySelector('#demo-product');
  const plan = document.querySelector('#demo-plan');
  const status = document.querySelector('#demo-status');
  document.querySelectorAll('.crm-contact').forEach(link => link.addEventListener('click', () => {
    plan.value = link.closest('.crm-plan').querySelector('h3').textContent.trim();
  }));
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const need = document.querySelector('#demo-need');
    if (need.value.trim().length < 8) {
      status.textContent = document.body.dataset.invalid;
      need.focus();
      return;
    }
    const message = [document.body.dataset.message, product.selectedOptions[0].textContent, `${document.body.dataset.planLabel}: ${plan.selectedOptions[0].textContent}`, `${document.body.dataset.taskLabel}: ${need.value.trim()}`];
    const params = new URLSearchParams(window.location.search);
    const source = ['utm_source','utm_medium','utm_campaign','utm_content'].flatMap(key => {
      const value = params.get(key);
      return value && /^[a-zA-Z0-9_-]{1,80}$/.test(value) ? [`${key}=${value}`] : [];
    });
    if (source.length) message.push(source.join('&'));
    const text = message.join('\n');
    const email = event.submitter?.value === 'email';
    const url = email ? `mailto:9881988@gmail.com?subject=${encodeURIComponent('Galany CRM · Demo')}&body=${encodeURIComponent(text)}` : `https://wa.me/972533613100?text=${encodeURIComponent(text)}`;
    status.textContent = document.body.dataset.prepared;
    if (typeof window.gtag === 'function') window.gtag('event','crm_demo_draft',{product:product.value,plan:plan.value || 'undecided',channel:email?'email':'whatsapp'});
    if (email) window.location.assign(url);
    else window.open(url,'_blank','noopener,noreferrer');
  });
  const costPlan = document.querySelector('#cost-plan');
  const minutes = document.querySelector('#cost-minutes');
  const days = document.querySelector('#cost-days');
  function estimate() {
    const enterprise = ['Business','Business Plus'].includes(costPlan.value);
    const extra = costPlan.value === 'Business Plus';
    const minuteLabel = document.querySelector('#cost-minute-text');
    document.querySelector('#cost-days-label').hidden = !enterprise;
    document.querySelector('#cost-minutes-label').hidden = enterprise && !extra;
    minuteLabel.textContent = extra ? minuteLabel.dataset.extra : minuteLabel.dataset.normal;
    const count = enterprise && !extra ? 0 : Number(minutes.value);
    if ((!enterprise || extra) && (minutes.value === '' || !Number.isFinite(count) || count < 0 || count > 1000000 || !Number.isInteger(count))) {
      document.querySelector('#cost-total').textContent = '—';
      return;
    }
    const bundledSecretary = ['dental_secretary','auto_secretary'].includes(costPlan.value);
    const uncertainReceptionist = ['Свой секретарь','המזכירה שלי','My Receptionist'].includes(costPlan.value);
    if (uncertainReceptionist) {
      document.querySelector('#cost-total').textContent = language==='he'?'לפי הצעה':language==='ru'?'По предложению':'Quote required';
      return;
    }
    const total = bundledSecretary ? 1000+Math.max(0,count-100)*.30 : enterprise ? 18*24*Number(days.value)+(extra?count*.30:0) : (costPlan.value==='Booking'?3000:2000)+count*.30;
    document.querySelector('#cost-total').textContent = `${new Intl.NumberFormat(language==='he'?'he-IL':language==='ru'?'ru-RU':'en-US',{maximumFractionDigits:2}).format(total)} ₪`;
  }
  if (costPlan) {
    [costPlan,minutes,days].forEach(control=>control.addEventListener('input',estimate));
    estimate();
  }
})();
