/**
 * Interspecies i18n — EN/ZH language switcher
 * Elements with data-en and data-zh attributes get swapped automatically.
 * Dynamic content listens to the 'lang-change' event on document.
 */
const STORAGE_KEY = 'interspecies-lang';
let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  localStorage.setItem(STORAGE_KEY, lang);

  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text !== null) {
      if (text.includes('<') || text.includes('&')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.dispatchEvent(new CustomEvent('lang-change', { detail: { lang } }));
}

function initLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  currentLang = saved || 'en';
  applyLang(currentLang);
}

function toggleLang(lang) {
  if (lang && lang !== currentLang) {
    applyLang(lang);
  }
}

window.__i18n = {
  get lang() { return currentLang; },
  apply: applyLang,
  toggle: toggleLang,
  init: initLang,
};

// Auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
}

// Toggle button click handler (delegated)
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.lang-toggle-btn');
  if (btn) {
    e.preventDefault();
    toggleLang(btn.dataset.lang);
  }
});
