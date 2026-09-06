"use client";

import { asset } from "../lib/assets";

const whatsappMessage =
  "José, me interesó mucho el diseño y la implementación de tu página web. Me gustaría conversar contigo.";

export function ContactForm() {
  const handleWhatsApp = () => {
    const shouldContinue = window.confirm(
      "Esta página es una muestra de un sistema de venta de trajes tradicionales. ¿Deseas enviar este mensaje por WhatsApp a José?",
    );

    if (shouldContinue) {
      window.open(
        `https://wa.me/51932316704?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  return (
    <section className="contact-sample contact-sample--whatsapp" id="contacto" aria-label="Contacto">
      <div className="kit-contact-form whatsapp-contact">
        <figure className="whatsapp-contact__image">
          <img src={asset("/set-fotos/contactanos.jpg")} alt="Indumentaria tradicional de Pachakuna" loading="lazy" decoding="async" />
        </figure>
        <div className="whatsapp-contact__content">
          <div>
            <p className="form-kicker">Atención al cliente</p>
            <span className="whatsapp-contact__hours">Lun–Sáb · 9:00 a. m. – 7:00 p. m.</span>
          </div>
          <button className="whatsapp-contact__action" type="button" onClick={handleWhatsApp}>
            <span>Contáctanos por WhatsApp</span><i aria-hidden="true">↗</i>
          </button>
          <p className="whatsapp-contact__disclaimer">Proyecto demostrativo: no se procesan compras ni pedidos.</p>
        </div>
      </div>
    </section>
  );
}
