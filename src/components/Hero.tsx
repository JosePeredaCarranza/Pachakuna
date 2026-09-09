import type { CSSProperties } from "react";
import { asset } from "../lib/assets";

export function Hero() {
  const backgroundImage = asset("/set-fotos/foto-2-diablada.webp");

  return (
    <section
      className="hero-sample hero-sample--label has-ambient-image"
      id="inicio"
      aria-labelledby="hero-title"
      style={{ "--ambient-image": `url("${backgroundImage}")` } as CSSProperties}
    >
      <div className="kit-hero">
        <div className="hero-copy">
          <h1 id="hero-title">Tradición <i><span style={{ color: "red" }}>pe</span><span style={{ color: "gray" }}>ru</span><span style={{ color: "red" }}>ana</span></i> que viste.</h1>
          <p>Trajes y prendas tradicionales de la costa, sierra y selva, elaborados con atención al bordado, los materiales y los detalles que dan identidad a cada tradición.</p>
          <a href="#catalogo">Explorar colecciones<span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-image"><img src={backgroundImage} alt="Danzante de diablada" fetchPriority="high" loading="eager" decoding="async" /></div>
      </div>
      <img className="hero-subject" src={asset("/set-fotos/hero-diablada-recorte2.webp")} alt="" aria-hidden="true" loading="eager" decoding="async" />
    </section>
  );
}
