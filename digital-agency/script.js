(() => {
  'use strict';
  const page = document.body;
  const locale = document.documentElement.lang;
  const base = new URL(page.dataset.base, window.location.href);
  const legacyLanguage = new URLSearchParams(window.location.search).get('lang');
  if (['he', 'en', 'ru', 'fr'].includes(legacyLanguage) && legacyLanguage !== locale) {
    const destination = new URL(legacyLanguage === 'he' ? './' : `${legacyLanguage}/`, base);
    destination.search = window.location.search;
    destination.searchParams.delete('lang');
    destination.hash = window.location.hash;
    window.location.replace(destination.href);
    return;
  }
  const language = document.querySelector('#language');
  language.addEventListener('change', () => {
    const next = new URL(language.value, base);
    next.hash = window.location.hash;
    const params = new URLSearchParams(window.location.search);
    params.delete('lang');
    next.search = params.toString();
    window.location.assign(next.href);
  });

  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  function closeMenu() {
    mobileNav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', toggle.dataset.openLabel);
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    mobileNav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? toggle.dataset.closeLabel : toggle.dataset.openLabel);
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });

  const form = document.querySelector('#project-brief');
  const service = form.elements.service;
  const budget = form.elements.budget;
  const brief = form.elements.brief;
  const continueLink = document.querySelector('#continue-whatsapp');
  const emailLink = document.querySelector('#brief-email');
  const status = document.querySelector('#brief-error');
  function updateBrief() {
    const message = [page.dataset.messagePrefix, '', `${page.dataset.messageService}: ${service.selectedOptions[0].text}`, `${page.dataset.messageBudget}: ${budget.selectedOptions[0].text}`, '', `${page.dataset.messageBrief}:`, brief.value.trim()].join('\n');
    continueLink.href = `https://wa.me/972533613100?text=${encodeURIComponent(message)}`;
    emailLink.href = `mailto:9881988@gmail.com?subject=${encodeURIComponent(`Structor Digital · ${service.selectedOptions[0].text}`)}&body=${encodeURIComponent(message)}`;
    status.textContent = '';
  }
  form.addEventListener('input', updateBrief);
  form.addEventListener('change', updateBrief);
  continueLink.addEventListener('click', event => {
    if (!brief.value.trim()) {
      event.preventDefault();
      status.textContent = page.dataset.invalid;
      brief.focus();
      return;
    }
    track('whatsapp_brief', {service: service.value});
  });
  form.addEventListener('submit', event => event.preventDefault());
  document.querySelectorAll('[data-service-choice]').forEach(button => {
    button.addEventListener('click', () => {
      service.value = button.dataset.serviceChoice;
      updateBrief();
      document.querySelector('#contact').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
      service.focus({preventScroll: true});
    });
  });
  updateBrief();

  const bubble = document.querySelector('.mobile-contact');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => bubble.classList.toggle('is-hidden', entries[0].isIntersecting), {threshold: 0.05}).observe(document.querySelector('#contact'));
  }
  // Analytics receives event categories, never the visitor's project description.
  function track(action, extra = {}) {
    if (typeof window.gtag === 'function') window.gtag('event', action, {event_category: 'digital_enquiry', language: locale, ...extra});
  }
  document.querySelectorAll('a[href^="tel:"]').forEach(link => link.addEventListener('click', () => track('phone_click')));
})();
