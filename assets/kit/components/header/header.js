// Componente 01: comportamiento reutilizable para cada menú móvil del catálogo.
document.querySelectorAll('[data-header]').forEach((header) => {
  const menuToggle = header.querySelector('[data-menu-toggle]');
  const navigation = header.querySelector('.kit-nav');
  if (!menuToggle || !navigation) return;
  const closeMenu = () => { navigation.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.querySelector('.sr-only').textContent = 'Abrir navegación'; };
  menuToggle.addEventListener('click', () => { const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'; navigation.classList.toggle('is-open', !isOpen); menuToggle.setAttribute('aria-expanded', String(!isOpen)); menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Abrir navegación' : 'Cerrar navegación'; });
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', (event) => { if (!header.contains(event.target)) closeMenu(); });
});
