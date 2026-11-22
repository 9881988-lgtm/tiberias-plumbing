(() => {
  'use strict';
  const measurementId = 'G-P6VFK6LL54';
  const site = 'https://9881988-lgtm.github.io';
  const directory = '/tiberias-plumbing/digital-agency/';
  if (!/^G-[A-Z0-9]+$/.test(measurementId) || location.origin !== site || !location.pathname.startsWith(directory)) return;

  const key = 'edl-analytics-choice';
  const disableKey = 'ga-disable-' + measurementId;
  const layer = 'edlAnalyticsLayer';
  const stylesheet = new URL('analytics.css?v=1', document.currentScript.src);
  const language = document.documentElement.lang.slice(0, 2);
  const strings = {
    ru: ['Аналитика сайта', 'С вашего согласия Google Analytics измеряет просмотры страниц, скачивания PDF и подтверждённые заявки. Данные из формы не передаются в аналитику.', 'Разрешить аналитику', 'Отклонить', 'Настройки аналитики'],
    he: ['מדידת שימוש באתר', 'בהסכמתכם, Google Analytics מודד צפיות בדפים, הורדות PDF ופניות שאושרו. פרטי הטופס אינם נשלחים לשירות המדידה.', 'אישור מדידה', 'דחייה', 'הגדרות מדידה'],
    en: ['Website analytics', 'With your permission, Google Analytics measures page views, PDF downloads and confirmed enquiries. Your form details are not sent to analytics.', 'Allow analytics', 'Decline', 'Analytics settings'],
    fr: ['Mesure d’audience', 'Avec votre accord, Google Analytics mesure les vues de pages, les téléchargements PDF et les demandes confirmées. Les données du formulaire ne sont pas envoyées à cet outil.', 'Autoriser la mesure', 'Refuser', 'Préférences de mesure'],
  };
  const [heading, description, allow, decline, preferences] = strings[language] || strings.en;
  const disclosures = {
    ru: ['Google Analytics использует cookies для измерения визитов и их источников. Вы можете изменить свой выбор внизу любой страницы.', 'Как Google обрабатывает данные'],
    he: ['Google Analytics משתמש בקובצי Cookie למדידת ביקורים ומקורות הגעה. אפשר לשנות את הבחירה בתחתית כל דף.', 'איך Google מעבדת נתונים'],
    en: ['Google Analytics uses cookies to measure visits and traffic sources. You can change your choice at the bottom of any page.', 'How Google processes data'],
    fr: ['Google Analytics utilise des cookies pour mesurer les visites et leurs sources. Vous pouvez modifier votre choix en bas de chaque page.', 'Comment Google traite les données'],
  };
  const [notice, policyLabel] = disclosures[language] || disclosures.en;
  let choice;
  try { choice = localStorage.getItem(key); } catch {}
  let configured = false;
  let sentView = false;
  let panel;
  let settings;
  const locationWithoutQuery = site + location.pathname;
  const shortSlug = value => typeof value === 'string' && /^[a-z][a-z0-9_-]{0,63}$/i.test(value) && !/\d{7}/.test(value);

  const tag = function () { (window[layer] ??= []).push(arguments); };
  function send(name, params = {}) {
    if (!configured || choice !== 'allow') return;
    tag('event', name, {
      ...params, send_to: measurementId, page_location: locationWithoutQuery, page_referrer: referrer(),
    });
  }
  function referrer() {
    try {
      const url = new URL(document.referrer);
      return ['https:', 'http:'].includes(url.protocol) ? url.origin + '/' : '';
    } catch { return ''; }
  }

  function enable() {
    window[disableKey] = false;
    if (!configured) {
      configured = true;
      const config = {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        cookie_prefix: 'edl',
        cookie_domain: location.hostname,
        cookie_expires: 60 * 60 * 24 * 90,
        cookie_path: directory,
        page_location: locationWithoutQuery,
        page_referrer: referrer(),
      };
      // Pass only campaign slugs; the raw URL and referral path can contain personal data.
      const query = new URLSearchParams(location.search);
      for (const [utm, field] of [['source','source'],['medium','medium'],['campaign','name']]) {
        const value = query.get('utm_' + utm);
        if (shortSlug(value)) config['campaign_' + field] = value;
      }
      // Google Tag Manager can initialise the destination before the ID-specific config.
      // Seed the same settings on this separate data layer before the tag is loaded.
      tag('set', config);
      tag('js', new Date());
      tag('config', measurementId, config);
      // Keep this GA4 stream separate from the existing Google Ads tag and draft events.
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId + '&l=' + layer;
      document.head.append(script);
    }
    if (!sentView) {
      sentView = true;
      send('page_view');
    }
  }

  function update(next) {
    choice = next;
    if (next === 'allow') enable();
    else {
      window[disableKey] = true;
      for (const name of ['edl_ga', 'edl_ga_' + measurementId.slice(2)]) {
        const expiry = '=; Max-Age=0; Path=' + directory + '; Secure; SameSite=Lax';
        document.cookie = name + expiry;
        document.cookie = name + expiry + '; Domain=' + location.hostname;
      }
    }
  }

  const make = (tagName, label, className) => {
    const el = document.createElement(tagName);
    if (label) el.textContent = label;
    if (className) el.className = className;
    if (tagName === 'button') el.type = 'button';
    return el;
  };
  function initialise() {
    const style = make('link');
    style.rel = 'stylesheet';
    style.href = stylesheet;
    document.head.append(style);
    const controls = make('div', '', 'edl-analytics-controls');
    settings = make('button', preferences);
    settings.setAttribute('aria-expanded', 'false');
    settings.setAttribute('aria-controls', 'edl-analytics-choice');
    controls.append(settings);
    document.body.append(controls);
    panel = make('aside', '', 'edl-analytics-panel');
    panel.id = 'edl-analytics-choice';
    panel.setAttribute('aria-label', heading);
    panel.hidden = choice === 'allow' || choice === 'decline';
    settings.setAttribute('aria-expanded', String(!panel.hidden));
    const actions = make('div', '', 'edl-analytics-actions');
    for (const [name, value] of [[decline, 'decline'], [allow, 'allow']]) {
      const button = make('button', name);
      button.onclick = () => {
        try { localStorage.setItem(key, value); } catch {}
        update(value);
        panel.hidden = true;
        settings.setAttribute('aria-expanded', 'false');
        // Do not jump to the footer if the visitor dismissed the initial prompt.
        if (openedFromSettings) settings.focus({preventScroll: true});
        openedFromSettings = false;
      };
      actions.append(button);
    }
    const policy = make('a', policyLabel);
    policy.href = 'https://policies.google.com/technologies/partner-sites';
    policy.rel = 'noopener noreferrer';
    policy.target = '_blank';
    const details = make('p', notice + ' ');
    const detailsLink = make('span');
    detailsLink.append(policy);
    details.append(detailsLink);
    panel.append(make('strong', heading), make('p', description), actions, details);
    document.body.append(panel);
    let openedFromSettings = false;
    settings.onclick = () => {
      panel.hidden = !panel.hidden;
      openedFromSettings = !panel.hidden;
      settings.setAttribute('aria-expanded', String(!panel.hidden));
      if (!panel.hidden) actions.firstElementChild.focus();
    };
    window.addEventListener('storage', event => {
      if (event.key === key || event.key === null) {
        update(event.newValue);
        panel.hidden = choice === 'allow' || choice === 'decline';
        settings.setAttribute('aria-expanded', String(!panel.hidden));
      }
    });
    update(choice);
  }

  document.addEventListener('click', event => {
    const anchor = event.target.closest?.('a[href]');
    if (!anchor || event.defaultPrevented) return;
    const url = new URL(anchor.href);
    if (url.origin !== site || !url.pathname.startsWith(directory) || !/\.pdf$/i.test(url.pathname)) return;
    send('file_download', {
      file_name: url.pathname.split('/').pop(),
      file_extension: 'pdf',
      link_url: site + url.pathname,
    });
  });

  window.edlAnalytics = {
    enquiryAccepted(product, intent) {
      send('generate_lead', {
        lead_product: shortSlug(product) ? product : 'unspecified',
        lead_intent: ['enquiry', 'order', 'question'].includes(intent) ? intent : 'enquiry',
      });
    },
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialise, {once: true});
  else initialise();
})();
