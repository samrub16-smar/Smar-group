// Smar Group — Interactions

// Sticky nav state
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile burger
const burger = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    if (isOpen) {
      navLinks.style.display = '';
      navLinks.style.position = '';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.position = 'absolute';
      navLinks.style.flexDirection = 'column';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'var(--paper)';
      navLinks.style.padding = '1.5rem 2rem';
      navLinks.style.borderTop = '1px solid var(--line)';
      navLinks.style.gap = '1.25rem';
    }
  });
}

// Reveal on scroll
const reveals = document.querySelectorAll('[data-reveal]');
if (reveals.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((el) => io.observe(el));
}

// Form (placeholder — wire up to email/CRM later)
const form = document.querySelector('#enquiry-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Sent ✓';
      form.reset();
      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 2400);
    }, 800);
  });
}
