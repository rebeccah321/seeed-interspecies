// ============================================================
// Interspecies — journal motion (GSAP ScrollTrigger)
// Philosophy: content scrolls, effects follow. No pinning,
// no scroll-jacking. Compositor-friendly transforms only.
// ============================================================

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Masthead: scrolled state + reading progress ----------
(function nav() {
  const nav = document.getElementById('journal-nav');
  const progress = document.getElementById('nav-progress');
  const burger = document.getElementById('nav-burger');
  const menu = document.getElementById('nav-menu');
  if (!nav) return;

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 60);
      if (progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      }
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
      burger.style.setProperty('transform', open ? 'rotate(45deg)' : '');
    });
    menu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        burger.style.setProperty('transform', '');
      })
    );
  }
})();

// ---------- "Locate on the map" from Field Stories → Pulse ----------
document.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest?.('[data-focus-node]');
  if (!btn) return;
  const id = btn.getAttribute('data-focus-node');
  document.dispatchEvent(new CustomEvent('focus-node', { detail: { id } }));
});

// ---------- Scroll reveal fallback (IO, no GSAP needed) ----------
(function reveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          obs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => obs.observe(el));
})();

// ---------- Hero waveform — bioacoustic trace (IO-paused rAF) ----------
(function wave() {
  const canvas = document.getElementById('prologue-wave') as HTMLCanvasElement | null;
  if (!canvas || reduced) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let w = 0;
  let h = 0;
  let phase = 0;
  let running = false;
  let rafId = 0;

  function resize() {
    const r = canvas.getBoundingClientRect();
    const d = window.devicePixelRatio || 1;
    w = canvas.width = Math.round(r.width * d);
    h = canvas.height = Math.round(r.height * d);
  }

  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    phase += 0.018;
    const cy = h / 2;
    for (let k = 0; k < 2; k++) {
      ctx.beginPath();
      for (let x = 0; x <= w; x += 4) {
        const t = x / w;
        const y =
          cy +
          (k === 0 ? -5 : 5) +
          Math.sin(t * Math.PI * 4 + phase * 1.3 + k * 1.7) * Math.sin(t * Math.PI) * 12;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = k === 0 ? 'rgba(62, 184, 168, 0.55)' : 'rgba(123, 184, 66, 0.45)';
      ctx.lineWidth = 1.4;
      ctx.stroke();
    }
    // signal pulse traveling along the trace
    const px = ((phase * 0.22) % 1) * w;
    const py = cy + Math.sin((px / w) * Math.PI * 4 + phase * 1.3) * Math.sin((px / w) * Math.PI) * 12;
    ctx.beginPath();
    ctx.arc(px, py, 2.6, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(232, 230, 223, 0.85)';
    ctx.fill();
    rafId = requestAnimationFrame(draw);
  }

  function start() {
    if (running) return;
    running = true;
    resize();
    draw();
  }

  function stop() {
    running = false;
    cancelAnimationFrame(rafId);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => (en.isIntersecting ? start() : stop()));
  }, { threshold: 0.05 });
  io.observe(canvas);
  window.addEventListener('resize', stop, { passive: true });
})();

// ---------- GSAP scene work (skipped entirely under reduced motion) ----------
if (!reduced) {
  const ctx = gsap.context(() => {
    // Prologue entrance: title lines rise, epigraph follows
    gsap.from('[data-rise]', {
      y: 28,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.12,
      delay: 0.25,
    });

    // Hero image: slow settle toward the page as it leaves
    gsap.to('[data-parallax="hero"]', {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: { trigger: '#prologue', start: 'top top', end: 'bottom top', scrub: 0.6 },
    });

    // Field story photos: shutter-style clip reveal on entry
    document.querySelectorAll('[data-clip]').forEach((frame) => {
      gsap.fromTo(
        frame,
        { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: { trigger: frame, start: 'top 82%' },
        }
      );
    });

    // Story photos: gentle counter-scroll drift
    gsap.utils.toArray<HTMLElement>('[data-parallax="story"]').forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: img.closest('.story-media') as HTMLElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        }
      );
    });
  });

  // Layout settles (fonts/images) → re-measure all triggers once
  window.addEventListener('load', () => ScrollTrigger.refresh());

  // Expose for debugging / teardown if ClientRouter ever lands
  (window as any).__journalGsap = ctx;
}
