document
  .querySelectorAll(".hero-sample--label .hero-image img")
  .forEach((image) => {
    const hero = image.closest(".hero-sample--label");
    if (!hero) return;

    const applyAmbientImage = () => {
      const source = image.currentSrc || image.src;
      if (!source) return;

      hero.style.setProperty(
        "--ambient-image",
        `url("${source.replace(/"/g, '\\"')}")`,
      );
      hero.classList.add("has-ambient-image");
    };

    if (image.complete) applyAmbientImage();
    else image.addEventListener("load", applyAmbientImage, { once: true });
  });
// Reveal the foreground only when its card enters the viewport.
const catalogCards = document.querySelectorAll(".catalog-pop-card");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const catalogObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const card = entry.target;
      card.classList.add("is-arriving");
      card.querySelector(".catalog-subject").addEventListener("animationend", () => {
        card.classList.remove("is-arriving");
      }, { once: true });
      catalogObserver.unobserve(card);
    });
  }, { threshold: 0.3 });
  catalogCards.forEach((card) => catalogObserver.observe(card));
}

document.querySelectorAll(".scroll-suave").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));
    if (!destino) return;

    const inicio = window.scrollY;
    const fin = destino.getBoundingClientRect().top + window.scrollY;
    const distancia = fin - inicio;

    const duracion = 1400; // más alto = más lento
    let tiempoInicial = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animar(tiempo) {
      if (!tiempoInicial) tiempoInicial = tiempo;

      const progreso = Math.min((tiempo - tiempoInicial) / duracion, 1);

      const suavizado = easeInOutCubic(progreso);

      window.scrollTo(0, inicio + distancia * suavizado);

      if (progreso < 1) {
        requestAnimationFrame(animar);
      }
    }

    requestAnimationFrame(animar);
  });
});
