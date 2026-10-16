
  // ─── NAV SCROLL ───
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ─── MOBILE MENU ───
  function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '100%';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'rgba(255,255,255,0.98)';
    links.style.padding = '2rem';
    links.style.gap = '1.5rem';
  }

  // ─── COUNTER ANIMATION ───
  function animateCounter(el) {
    const target = +el.dataset.target;
    const duration = 1800;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target).toLocaleString('cs-CZ');
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString('cs-CZ');
    }
    requestAnimationFrame(step);
  }

  // ─── INTERSECTION OBSERVER ───
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // trigger counters inside this element
        entry.target.querySelectorAll('.counter').forEach(c => animateCounter(c));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Also observe counter wrappers directly
  document.querySelectorAll('.hero-stats').forEach(el => {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.counter').forEach(c => animateCounter(c));
          heroObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    heroObserver.observe(el);
  });
