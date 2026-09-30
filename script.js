const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', nav.classList.contains('open'));
});

document.querySelectorAll('.site-header nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('appointment-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('form-note').textContent =
    'Demo: Das Formular wird verbunden, sobald die endgültige Kontaktlösung feststeht.';
});
