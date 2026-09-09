"use client";

import { useState } from "react";
import { asset } from "../lib/assets";

const slides = [
  {
    image: asset("/set-fotos/carrousel-1.webp"),
    eyebrow: "Nuestra esencia",
    title: "Vestimos la tradición que nos representa",
    body: [
      "Pachakuna nace para preservar y compartir la riqueza del folklore peruano a través de su indumentaria tradicional.",
      "Cada prenda refleja la identidad de nuestras regiones, sus colores, bordados y formas, cuidando los detalles que hacen única a cada expresión cultural.",
    ],
    action: "Explorar colecciones",
    href: "#catalogo",
  },
  {
    image: asset("/set-fotos/carrousel-2.webp"),
    eyebrow: "Nuestras raíces",
    title: "Cada prenda lleva una historia del Perú",
    body: [
      "Costa, sierra y selva reúnen tradiciones distintas, colores distintos y formas distintas de expresar nuestra identidad.",
      "En Pachakuna trabajamos para que esas tradiciones sigan vivas a través de prendas que respetan su origen y celebran la diversidad cultural del Perú.",
    ],
    action: "Ver las colecciones",
    href: "#catalogo",
  },
  {
    image: asset("/set-fotos/carrousel-3.webp"),
    eyebrow: "Pachakuna",
    title: "Indumentaria con identidad",
    body: [
      "Creamos y seleccionamos prendas tradicionales del folklore peruano, cuidando materiales, bordados y acabados para representar con respeto la esencia de cada tradición.",
    ],
    action: "Ver colecciones",
    href: "#catalogo",
  },
] as const;

export function Carousel() {
  const [active, setActive] = useState(0);
  const go = (direction: number) => setActive((value) => (value + direction + slides.length) % slides.length);

  return (
    <section className="carousel-sample carousel-sample--story" id="galeria" aria-label="Historias de Pachakuna">
      <div className="kit-carousel">
        <div className="carousel-viewport">
          <div className="carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
            {slides.map((slide, index) => (
              <article className="carousel-slide story-slide" key={slide.title} aria-hidden={active !== index}>
                <img className="story-image" src={slide.image} alt="" loading="lazy" decoding="async" />
                <div className="story-image-shade" aria-hidden="true" />
                <div className="story-panel">
                  <div className="story-copy">
                    <p className="story-eyebrow">{slide.eyebrow}</p>
                    <h2>{slide.title}</h2>
                    <div className="story-body">{slide.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                    <a href={slide.href}>{slide.action}<span aria-hidden="true">→</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="carousel-side-controls carousel-controls">
          <button type="button" aria-label="Historia anterior" onClick={() => go(-1)}>←</button>
          <button type="button" aria-label="Historia siguiente" onClick={() => go(1)}>→</button>
        </div>
        <div className="story-footer">
          <span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          <div className="carousel-progress" aria-hidden="true"><i style={{ transform: `scaleX(${(active + 1) / slides.length})` }} /></div>
        </div>
      </div>
    </section>
  );
}
