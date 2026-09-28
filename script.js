// ===== Menu mobile =====
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false');
}));

// ===== Thème clair / sombre =====
const root = document.documentElement;
const KEY = 'portfolio-theme';
function applyTheme(t) {
  root.setAttribute('data-theme', t);
  try { localStorage.setItem(KEY, t); } catch (e) {}
}
(function () {
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved === 'light' || saved === 'dark') applyTheme(saved);
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) applyTheme('dark');
})();
document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// ===== Lien actif dans le menu au scroll =====
const links = [...menu.querySelectorAll('a')];
const sections = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));

// ===== Fenêtres de détail =====
document.querySelectorAll('[data-open]').forEach(btn => {
  btn.addEventListener('click', () => document.getElementById(btn.dataset.open).showModal());
});
const skillDlg = document.getElementById('dlg-skill');
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById('dlgSkillTitle').textContent = card.dataset.title;
    document.getElementById('dlgSkillText').textContent = card.dataset.text;
    skillDlg.showModal();
  });
});
document.querySelectorAll('dialog').forEach(d => {
  d.addEventListener('click', e => { if (e.target === d) d.close(); }); // clic hors de la boîte
  d.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => d.close()));
});

// ===== Année dans le footer =====
document.getElementById('year').textContent = new Date().getFullYear();
