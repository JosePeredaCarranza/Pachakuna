"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.style.setProperty("--ambient-image", 'url("/set-fotos/Foto-2-Diablada.png")');
    hero.classList.add("has-ambient-image");
  }, []);

  return (
    <section className="hero-sample hero-sample--label" id="inicio" aria-labelledby="hero-title" ref={heroRef}>
      <div className="kit-hero">
        <div className="hero-copy">
          <h1 id="hero-title">Tradición <i><span style={{ color: "red" }}>pe</span><span style={{ color: "gray" }}>ru</span><span style={{ color: "red" }}>ana</span></i> que viste.</h1>
          <p>Trajes y prendas tradicionales de la costa, sierra y selva, elaborados con atención al bordado, los materiales y los detalles que dan identidad a cada tradición.</p>
          <a href="#catalogo">Explorar colecciones<span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-image"><img src="/set-fotos/Foto-2-Diablada.png" alt="Danzante de diablada" fetchPriority="high" decoding="async" /></div>
      </div>
      <img className="hero-subject" src="/set-fotos/hero-diablada-recorte2.png" alt="" aria-hidden="true" decoding="async" />
    </section>
  );
}
