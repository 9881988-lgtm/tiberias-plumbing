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

})();
