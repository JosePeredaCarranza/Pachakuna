"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const updateHeader = () => setIsCompact(window.scrollY > 56);
    updateHeader();
    const initialSync = window.setTimeout(updateHeader, 120);
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => {
      window.clearTimeout(initialSync);
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  return (
    <header className={`site-header${isCompact ? " is-compact" : ""}`}>
      <div className="header-sample header-sample--line-rounded">
        <div className="kit-header kit-header--line">
          <a className="logo-slot logo-slot--pachakuna" href="#inicio" aria-label="Pachakuna">
            <img src="/set-fotos/logo.png" alt="Pachakuna" />
          </a>
          <nav className={`kit-nav${isMenuOpen ? " is-open" : ""}`} id="navigation-06" aria-label="Navegación principal">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#catalogo" onClick={() => setIsMenuOpen(false)}>Catálogo</a>
            <a href="#galeria" onClick={() => setIsMenuOpen(false)}>Raíces</a>
          </nav>
          <div className="kit-actions"><a className="action-button action-button--solid action-button--rounded" href="#catalogo" onClick={() => setIsMenuOpen(false)}>Ver colecciones</a></div>
          <button className="menu-button" type="button" aria-expanded={isMenuOpen} aria-controls="navigation-06" onClick={() => setIsMenuOpen((value) => !value)}>
            <span className="sr-only">{isMenuOpen ? "Cerrar navegación" : "Abrir navegación"}</span><i></i><i></i>
          </button>
        </div>
      </div>
    </header>
  );
}
