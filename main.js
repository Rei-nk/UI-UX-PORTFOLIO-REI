/* ═══════════════════════════════════════
   REI DESIGNARY — main.js
   ═══════════════════════════════════════ */

/* ── Page Router ── */
const pages = ['home', 'case-byd', 'case-qrypto'];

function showPage(id) {
  pages.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (el) el.classList.toggle('hidden', p !== id);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Re-trigger fade-in animations on new page
  setTimeout(initObserver, 100);
}

/* ── Intersection Observer: Fade-in on Scroll ── */
function initObserver() {
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px',
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-fade-in').forEach((el) => {
    // Reset for re-animation on page switch
    if (el.style.opacity !== '1') {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
    }
    observer.observe(el);
  });
}

/* ── Smooth Scroll for Anchor Links ── */
document.addEventListener('click', function (e) {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  e.preventDefault();
  const targetId = anchor.getAttribute('href');
  if (targetId === '#') return;
  const target = document.querySelector(targetId);
  if (target) target.scrollIntoView({ behavior: 'smooth' });
});

/* ── Mobile Menu Toggle ── */
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const isHidden = menu.classList.contains('hidden');
  menu.classList.toggle('hidden', !isHidden);
  menu.classList.toggle('flex', isHidden);
}

/* ── Init ── */
initObserver();
