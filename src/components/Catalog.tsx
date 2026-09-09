"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "../lib/assets";

const collections = [
  { title: "Selva · Amazonía peruana", tone: "#d8dfca", origin: "12.5%" },
  { title: "Costa · Tradición afroperuana", tone: "#dae3ec", origin: "37.5%" },
  { title: "Costa · La Libertad", tone: "#e0d7e7", origin: "62.5%" },
  { title: "Sierra · Junín", tone: "#ead8d2", origin: "87.5%" },
] as const;

export function Catalog() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLElement>(null);
  const [openCollection, setOpenCollection] = useState(0);
  const currentCollection = collections[openCollection];
  const scrollTo = (element: HTMLElement | null) => {
    if (!element) return;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    element.scrollIntoView({ behavior, block: "start" });
  };
  const toggleCollection = (index: number) => {
    if (openCollection === index) return;
    setOpenCollection(index);
    window.setTimeout(() => scrollTo(detailRef.current), 120);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const card = entry.target as HTMLElement;
        card.classList.add("is-arriving");
        card.querySelector(".catalog-subject")?.addEventListener("animationend", () => card.classList.remove("is-arriving"), { once: true });
        observer.unobserve(card);
      });
    }, { threshold: 0.3 });
    section.querySelectorAll<HTMLElement>(".catalog-pop-card").forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="catalog-sample catalog-sample--minimal" id="catalogo" aria-labelledby="catalog-six-title" ref={sectionRef}>
      <div className="kit-catalog">
        <div className="catalog-heading"><div><p>Colecciones</p><h3 id="catalog-six-title">Un Perú, muchas formas de vestirlo.</h3></div></div>
        <div className="catalog-minimal-grid" ref={gridRef}>
          <article className={`catalog-pop-card${openCollection === 0 ? " is-selected" : ""}`} style={{ "--card-photo": `url('${asset("/set-fotos/catalogo-1.jpg")}')`, "--card-tone": "#d8dfca", "--arrival-delay": "0ms" } as React.CSSProperties} onClick={() => toggleCollection(0)}>
            <figure className="catalog-scene"><svg className="catalog-subject" viewBox="100 120 300 591" role="img" aria-label="Prenda tradicional de tonos naranjas" preserveAspectRatio="xMidYMax meet"><image href={asset("/set-fotos/catalogo-1.webp")} width="474" height="711" clipPath="url(#catalog-person-1)" /></svg></figure>
            <div><h4>Selva · Amazonía peruana</h4><button className="collection-trigger" type="button" aria-expanded={openCollection === 0} aria-controls="collection-detail" onClick={(event) => { event.stopPropagation(); toggleCollection(0); }}>Ver colección <span aria-hidden="true">→</span></button></div>
          </article>
          <article className={`catalog-pop-card${openCollection === 1 ? " is-selected" : ""}`} style={{ "--card-photo": `url('${asset("/set-fotos/catalogo-2.jpg")}')`, "--card-tone": "#dae3ec", "--arrival-delay": "120ms" } as React.CSSProperties} onClick={() => toggleCollection(1)}>
            <figure className="catalog-scene"><svg className="catalog-subject" viewBox="225 235 850 1620" role="img" aria-label="Pareja con prendas tradicionales azules y blancas" preserveAspectRatio="xMidYMax meet"><image href={asset("/set-fotos/catalogo-2.webp")} width="1312" height="1907" clipPath="url(#catalog-person-2)" /></svg></figure>
            <div><h4>Costa · Tradición afroperuana</h4><button className="collection-trigger" type="button" aria-expanded={openCollection === 1} aria-controls="collection-detail" onClick={(event) => { event.stopPropagation(); toggleCollection(1); }}>Ver colección <span aria-hidden="true">→</span></button></div>
          </article>
          <article className={`catalog-pop-card marinera${openCollection === 2 ? " is-selected" : ""}`} style={{ "--card-photo": `url('${asset("/set-fotos/catalogo-3.png")}')`, "--card-tone": "#e0d7e7", "--arrival-delay": "240ms" } as React.CSSProperties} onClick={() => toggleCollection(2)}>
            <figure className="catalog-scene"><svg className="catalog-subject" viewBox="45 43 420 652" role="img" aria-label="Pareja con trajes bordados de flores" preserveAspectRatio="xMidYMax meet"><image href={asset("/set-fotos/catalogo-3.png")} width="730" height="800" clipPath="url(#catalog-person-3)" /></svg></figure>
            <div><h4>Costa · La Libertad</h4><button className="collection-trigger" type="button" aria-expanded={openCollection === 2} aria-controls="collection-detail" onClick={(event) => { event.stopPropagation(); toggleCollection(2); }}>Ver colección <span aria-hidden="true">→</span></button></div>
          </article>
          <article className={`catalog-pop-card${openCollection === 3 ? " is-selected" : ""}`} style={{ "--card-photo": `url('${asset("/set-fotos/catalogo-4.jpeg")}')`, "--card-tone": "#ead8d2", "--arrival-delay": "360ms" } as React.CSSProperties} onClick={() => toggleCollection(3)}>
            <figure className="catalog-scene"><svg className="catalog-subject" viewBox="235 5 540 650" role="img" aria-label="Pareja bailando con trajes tradicionales bordados" preserveAspectRatio="xMidYMax meet"><defs><clipPath id="catalog-person-4"><path clipRule="evenodd" d="M356 76 C347 61 355 38 378 22 L398 12 L411 12 L420 25 L452 7 L454 11 L435 42 L443 56 L449 62 L446 69 L452 74 L449 89 L472 93 L491 90 L515 90 L534 102 L536 97 L545 85 L544 77 L552 68 L563 64 L552 52 L549 40 L544 29 L545 17 L555 17 L565 21 L568 19 L588 29 L604 41 L620 50 L634 70 L643 77 L636 79 L650 99 L659 114 L654 120 L633 117 L622 114 L625 130 L647 136 L674 147 L706 177 L729 205 L746 237 L756 269 L758 286 L762 309 L757 330 L751 341 L751 361 L756 389 L751 410 L738 419 L725 466 L707 510 L691 545 L681 555 L640 551 L624 548 L622 581 L614 610 L603 614 L591 610 L587 586 L584 558 L569 554 L567 581 L567 609 L575 655 L537 655 L529 615 L522 577 L521 551 L465 536 L460 568 L460 590 L445 588 L423 566 L420 602 L425 636 L419 655 L338 655 L338 631 L346 605 L348 580 L351 572 L349 560 L344 559 L345 553 L355 549 L355 514 L354 506 L362 464 L365 423 L337 433 L330 418 L285 428 L310 409 L319 398 L306 375 L341 371 L366 364 L365 335 L357 300 L350 271 L346 245 L340 242 L329 264 L315 280 L309 300 L299 309 L296 342 L285 374 L276 388 L274 410 L270 414 L267 412 L263 425 L258 429 L251 421 L245 408 L248 389 L260 360 L267 326 L270 300 L260 290 L276 263 L292 232 L315 198 L334 171 L331 160 L341 136 L335 139 L330 123 L316 118 L333 98 L341 86 Z M682 236 L691 245 L704 260 L710 285 L689 292 L682 282 Z" /></clipPath></defs><image href={asset("/set-fotos/catalogo-4.jpeg")} width="984" height="655" clipPath="url(#catalog-person-4)" /></svg></figure>
            <div><h4>Sierra · Junín</h4><button className="collection-trigger" type="button" aria-expanded={openCollection === 3} aria-controls="collection-detail" onClick={(event) => { event.stopPropagation(); toggleCollection(3); }}>Ver colección <span aria-hidden="true">→</span></button></div>
          </article>
        </div>
        <div className="collection-expansion is-open" style={{ "--collection-tone": currentCollection.tone, "--collection-origin": currentCollection.origin } as React.CSSProperties}>
          <div className="collection-expansion__inner">
            <section className="collection-expansion__surface" id="collection-detail" aria-label={`Detalle de ${currentCollection.title}`} key={currentCollection.title} ref={detailRef}>
              <div className="collection-expansion__copy">
                <p>Colección</p>
                <h3>{currentCollection.title}</h3>
                <span>Espacio preparado para la historia, prendas y piezas de esta colección.</span>
              </div>
              <div className="collection-expansion__items" aria-label="Próximos ítems de la colección">
                {["01", "02", "03", "04"].map((item, index) => <article className="collection-item-placeholder" key={item} style={{ "--item-delay": `${index * 100}ms` } as React.CSSProperties}><span>Ítem {item}</span><small>Próximamente</small></article>)}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
