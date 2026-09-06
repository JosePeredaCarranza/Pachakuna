// Componente 04: demostración local; evita envíos reales y confirma campos válidos.
document.querySelectorAll('[data-contact-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) return form.reportValidity();
    const status = form.querySelector('.form-status');
    if (status) status.textContent = 'Mensaje listo para enviar.';
  });
});
