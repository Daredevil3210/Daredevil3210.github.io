(() => {
  // Only pin the profile when its entire content fits below the header.
  const profile = document.querySelector('.profile');
  const header = document.querySelector('.site-header');
  if (profile && header && 'ResizeObserver' in window) {
    const fitProfile = () => {
      const top = Math.max(100, header.getBoundingClientRect().height + 8);
      profile.style.top = `${top}px`;
      profile.toggleAttribute('data-sticky', window.innerWidth > 960 &&
        profile.getBoundingClientRect().height + top + 16 <= window.innerHeight);
    };
    const sizeObserver = new ResizeObserver(fitProfile);
    sizeObserver.observe(profile);
    sizeObserver.observe(header);
    window.addEventListener('resize', fitProfile);
    fitProfile();
  }

  const controls = document.querySelector('.project-filters');
  const projects = [...document.querySelectorAll('[data-project]')];
  const status = document.getElementById('project-status');

  if (controls && status && projects.length) {
    controls.addEventListener('click', event => {
      const button = event.target.closest('button[data-filter]');
      if (!button || !controls.contains(button)) return;
      const category = button.dataset.filter;
      for (const project of projects) {
        project.hidden = category !== 'all' && project.dataset.category !== category;
      }
      for (const control of controls.querySelectorAll('button')) {
        control.setAttribute('aria-pressed', String(control === button));
      }
      const count = projects.filter(project => !project.hidden).length;
      status.textContent = category === 'all'
        ? `显示全部 ${count} 个项目`
        : `${button.textContent}方向 · ${count} 个项目`;
    });
    controls.hidden = false;
    status.hidden = false;
  }

  // Content is visible in HTML. Animation never controls access to the text.
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const movingElements = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.filter(entry => entry.isIntersecting).forEach((entry, index) => {
      observer.unobserve(entry.target);
      if (motion.matches) return;
      const image = entry.target.matches('.certificate-print');
      const row = entry.target.matches('.honor-list li, .learning-list li > *');
      const element = entry.target;
      element.dataset.revealKind = image ? 'image' : row ? 'row' : 'copy';
      element.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 70}ms`);
      element.classList.add('entering');
      movingElements.add(element);
      element.addEventListener('animationend', () => {
        element.classList.remove('entering');
        movingElements.delete(element);
      }, {once:true});
    });
  }, {threshold:.08});
  document.querySelectorAll('.reveal').forEach(element => {
    if (element.matches('.project-entry, .education-record, .learning-list li')) {
      [...element.children].forEach(part => observer.observe(part));
    } else {
      observer.observe(element);
    }
  });
  motion.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    for (const element of movingElements) element.classList.remove('entering');
    movingElements.clear();
  });
})();
