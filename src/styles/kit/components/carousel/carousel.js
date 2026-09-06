// Componente 03: navegación reutilizable para todos los carruseles del catálogo.
document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('[data-carousel-track]');
  const slides = [...track.querySelectorAll('.carousel-slide')];
  const dots = [...carousel.querySelectorAll('[data-carousel-dot]')];
  const progress = carousel.querySelector('[data-carousel-progress]');
  const usesAdaptiveProgress = carousel.closest('.carousel-sample--hover-controls');
  let activeIndex = 0;

  const setAdaptiveProgressTone = () => {
    if (!usesAdaptiveProgress) return;
    const slide = slides[activeIndex];
    const setTone = (luminance) => {
      const isDark = luminance < 0.5;
      carousel.style.setProperty('--adaptive-progress-fill', isDark ? '#ffffff' : '#171717');
      carousel.style.setProperty('--adaptive-progress-track', isDark ? 'rgba(255,255,255,.42)' : 'rgba(23,23,23,.32)');
    };
    const image = slide.querySelector('img');
    if (!image || !image.complete || !image.naturalWidth) {
      setTone(slide.classList.contains('photo-slot--dark') ? 0.15 : 0.85);
      return;
    }

    try {
      const canvas = document.createElement('canvas');
      canvas.width = 28;
      canvas.height = 5;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      context.drawImage(image, 0, image.naturalHeight * 0.84, image.naturalWidth, image.naturalHeight * 0.16, 0, 0, canvas.width, canvas.height);
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
      let total = 0;
      for (let index = 0; index < pixels.length; index += 4) total += (0.2126 * pixels[index] + 0.7152 * pixels[index + 1] + 0.0722 * pixels[index + 2]) / 255;
      setTone(total / (pixels.length / 4));
    } catch {
      // Imágenes de otro origen sin CORS: usar una alternativa neutra y segura.
      setTone(0.2);
    }
  };

  const render = () => {
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
    dots.forEach((dot, index) => dot.classList.toggle('is-active', index === activeIndex));
    if (progress) progress.style.transform = `scaleX(${(activeIndex + 1) / slides.length})`;
    setAdaptiveProgressTone();
  };
  const show = (index) => { activeIndex = (index + slides.length) % slides.length; render(); };

  carousel.querySelector('[data-carousel-prev]')?.addEventListener('click', () => show(activeIndex - 1));
  carousel.querySelector('[data-carousel-next]')?.addEventListener('click', () => show(activeIndex + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)));
  slides.forEach((slide) => slide.querySelector('img')?.addEventListener('load', setAdaptiveProgressTone));

  let startX = 0;
  carousel.addEventListener('pointerdown', (event) => { startX = event.clientX; });
  carousel.addEventListener('pointerup', (event) => {
    const distance = event.clientX - startX;
    if (Math.abs(distance) > 40) show(activeIndex + (distance < 0 ? 1 : -1));
  });
  render();
});
