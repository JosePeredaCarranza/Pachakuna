"use client";

import { useState } from "react";

export function Faq() {
  const [open, setOpen] = useState(0);
  return <section className="faq-sample faq-sample--photo" aria-label="Preguntas frecuentes"><div className="kit-faq"><div className="faq-heading"><p className="faq-kicker">Preguntas frecuentes</p><h3>Una respuesta a la vez, con contexto visual.</h3></div><div className="faq-list">{[0, 1, 2].map((index) => <details key={index} open={open === index} onToggle={(event) => { if ((event.currentTarget as HTMLDetailsElement).open) setOpen(index); }}><summary>Pregunta frecuente<span>+</span></summary><div className="faq-answer"><div className="faq-answer__inner"><div className="faq-answer__copy"><p>Respuesta genérica que explica el contexto de la imagen y resuelve la pregunta de forma clara.</p><small>Texto y recurso visual trabajan como una sola respuesta.</small></div><figure className={`faq-photo ${index === 1 ? "faq-photo--soft" : index === 2 ? "faq-photo--dark" : ""}`}><span>Tu foto</span></figure></div></div></details>)}</div></div></section>;
}
