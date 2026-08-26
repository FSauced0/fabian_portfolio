const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-placeholder="true"]').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Replace this placeholder with your GitHub repository URL in index.html.');
  });
});
