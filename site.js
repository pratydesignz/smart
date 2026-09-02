function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

function checkReveals() {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => {
    if (el.offsetParent === null) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < vh * 0.92 && rect.bottom > 0) el.classList.add('in-view');
  });
}
function initReveal() {
  document.querySelectorAll('section.block, section.page-hero, .testimonials, .stats-bar').forEach((el) => {
    el.classList.add('reveal');
  });
  checkReveals();
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { checkReveals(); ticking = false; });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initReveal();
});
