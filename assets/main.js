// Smar Group v3 — Interactions

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const onLight = nav?.dataset.theme === 'light';

  if (nav) {
    if (onLight) nav.classList.add('on-light');
    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Burger menu
  const burger = document.querySelector('.nav__burger');
  const links = document.querySelector('.nav__links');
  if (burger && links) {
    burger.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('[data-reveal]');
  if (reveals.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => io.observe(el));
  }

  // Contact form stub
  const form = document.querySelector('#enquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      const original = btn.innerHTML;
      btn.innerHTML = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = 'Thank you ✓';
        form.reset();
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 3000);
      }, 800);
    });
  }

  // SmarCEO dashboard sparkline — draws a subtle animated chart
  const sparkContainer = document.querySelector('.dash__sparkline');
  if (sparkContainer) {
    const svg = `<svg viewBox="0 0 400 70" preserveAspectRatio="none" style="width:100%;height:100%">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#D4A764" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#D4A764" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <path d="M0,55 L30,48 L60,52 L90,42 L120,38 L150,44 L180,32 L210,28 L240,34 L270,22 L300,18 L330,24 L360,14 L400,10 L400,70 L0,70 Z" fill="url(#sparkFill)"/>
      <path d="M0,55 L30,48 L60,52 L90,42 L120,38 L150,44 L180,32 L210,28 L240,34 L270,22 L300,18 L330,24 L360,14 L400,10" fill="none" stroke="#D4A764" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="400" cy="10" r="3" fill="#D4A764"/>
    </svg>`;
    sparkContainer.innerHTML = svg;
  }
});
