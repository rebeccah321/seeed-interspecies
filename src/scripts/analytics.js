/**
 * Open Datalogger — GA4 event layer (measurement ID G-DS2CF25J1Y).
 *
 * Every component reports through window.odlTrack() so parameter names stay
 * consistent across the site. Parameter names that are registered as GA4
 * event-scoped custom dimensions are documented in DIMENSIONS.md — renaming a
 * parameter here requires registering/renaming the dimension in GA4 too.
 *
 * Events emitted:
 *   page_view        {content_group}
 *   scroll_depth     {percent}
 *   section_view     {section_id, section_index}
 *   nav_click        {section_id}                     in-page anchor navigation
 *   cta_click        {cta_id, link_domain}            tagged CTAs (data-odl-cta)
 *   outbound_click   {link_domain, link_url}          external links
 *   language_switch  {language}                       EN / 中文 toggle
 *   case_view        {case_id, case_name, case_status, case_source}
 *   case_filter      {filter_tag}
 */

const SECTION_IDS = ['top', 'why', 'what', 'cases', 'partners', 'join', 'contact'];
const SCROLL_STEPS = [25, 50, 75, 100];

function track(name, params) {
  try {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, Object.assign({ content_group: 'home' }, params || {}));
  } catch (err) {
    /* analytics must never break the page */
  }
}

window.odlTrack = track;

function hostOf(href) {
  if (!href) return '';
  if (href.startsWith('mailto:')) return 'email';
  try {
    return new URL(href, location.href).hostname.replace(/^www\./, '');
  } catch (err) {
    return '';
  }
}

/* ---------------------------------------------------------------- page view */

function pageView(contentGroup) {
  track('page_view', {
    page_title: document.title,
    page_location: location.href,
    page_path: location.pathname,
    content_group: contentGroup || 'home',
  });
}

// Kept for compatibility with the previous implementation: any component can
// re-trigger a page view by dispatching this event.
document.addEventListener('odl:pageview', function (event) {
  pageView(event.detail && event.detail.content_group);
});
pageView('home');

/* ------------------------------------------------------------ scroll depth */

const reachedDepth = new Set();

function measureDepth() {
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - window.innerHeight;
  const percent = scrollable > 0 ? Math.min(100, Math.round((window.scrollY / scrollable) * 100)) : 100;
  SCROLL_STEPS.forEach(function (step) {
    if (percent >= step && !reachedDepth.has(step)) {
      reachedDepth.add(step);
      track('scroll_depth', { percent: String(step) });
    }
  });
}

let depthScheduled = false;
window.addEventListener(
  'scroll',
  function () {
    if (depthScheduled) return;
    depthScheduled = true;
    requestAnimationFrame(function () {
      depthScheduled = false;
      measureDepth();
    });
  },
  { passive: true }
);
window.addEventListener('load', measureDepth);

/* ------------------------------------------------------------ section view */

if ('IntersectionObserver' in window) {
  const seen = new Set();
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        const id = entry.target.id;
        if (!entry.isIntersecting || seen.has(id)) return;
        seen.add(id);
        track('section_view', {
          section_id: id,
          section_index: String(SECTION_IDS.indexOf(id) + 1),
        });
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );
  SECTION_IDS.forEach(function (id) {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

/* ------------------------------------------------------------------ clicks */

document.addEventListener(
  'click',
  function (event) {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const tagged = target.closest('[data-odl-cta]');
    if (tagged) {
      const href = tagged.getAttribute('href') || '';
      track('cta_click', {
        cta_id: tagged.getAttribute('data-odl-cta') || '',
        link_domain: hostOf(href),
      });
      return;
    }

    const link = target.closest('a');
    if (link) {
      const href = link.getAttribute('href') || '';
      if (href.startsWith('#')) {
        track('nav_click', { section_id: href.slice(1) || 'top' });
      } else if (/^mailto:/i.test(href)) {
        track('cta_click', { cta_id: 'email_click', link_domain: 'email' });
      } else if (/^https?:/i.test(href)) {
        const host = hostOf(href);
        if (host && host !== location.hostname.replace(/^www\./, '')) {
          track('outbound_click', { link_domain: host, link_url: href });
        }
      }
      return;
    }
  },
  true
);

/* ---------------------------------------------------------------- language */

document.addEventListener('lang-change', function (event) {
  track('language_switch', { language: (event.detail && event.detail.lang) || 'unknown' });
});
