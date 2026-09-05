// Variante FAQ 07: cajones verticales con animación de altura y una sola respuesta activa.
document.querySelectorAll('[data-single-faq]').forEach((group) => {
  const entries = [...group.querySelectorAll('details')];
  const panelFor = (entry) => entry.querySelector('.faq-answer');

  const settleOpen = (entry) => {
    const panel = panelFor(entry);
    panel.style.height = 'auto';
    panel.style.opacity = '1';
  };
  const closeEntry = (entry) => {
    if (!entry.open) return;
    const panel = panelFor(entry);
    panel.style.height = `${panel.scrollHeight}px`;
    panel.style.opacity = '1';
    requestAnimationFrame(() => {
      panel.style.height = '0px';
      panel.style.opacity = '0';
    });
    const finish = (event) => {
      if (event.propertyName !== 'height') return;
      entry.open = false;
      panel.removeEventListener('transitionend', finish);
    };
    panel.addEventListener('transitionend', finish);
  };
  const openEntry = (entry) => {
    entries.forEach((other) => { if (other !== entry) closeEntry(other); });
    const panel = panelFor(entry);
    entry.open = true;
    panel.style.height = '0px';
    panel.style.opacity = '0';
    requestAnimationFrame(() => {
      panel.style.height = `${panel.scrollHeight}px`;
      panel.style.opacity = '1';
    });
    const finish = (event) => {
      if (event.propertyName !== 'height') return;
      settleOpen(entry);
      panel.removeEventListener('transitionend', finish);
    };
    panel.addEventListener('transitionend', finish);
  };

  entries.forEach((entry) => {
    const panel = panelFor(entry);
    if (entry.open) settleOpen(entry);
    entry.querySelector('summary').addEventListener('click', (event) => {
      event.preventDefault();
      if (entry.open) closeEntry(entry);
      else openEntry(entry);
    });
  });
});
