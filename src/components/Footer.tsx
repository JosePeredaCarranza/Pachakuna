type FooterLink = { label: string; href?: string };

const groups: ReadonlyArray<{ title: string; links: ReadonlyArray<FooterLink> }> = [
  { title: "Tienda", links: [{ label: "Todos los productos", href: "#catalogo" }, { label: "Costa", href: "#catalogo" }, { label: "Sierra", href: "#catalogo" }, { label: "Selva", href: "#catalogo" }, { label: "Nuevos ingresos" }] },
  { title: "Ayuda", links: [{ label: "Guía de tallas" }, { label: "Envíos" }, { label: "Cambios y devoluciones" }, { label: "Preguntas frecuentes" }, { label: "Contacto", href: "#contacto" }] },
  { title: "Pachakuna", links: [{ label: "Nosotros", href: "#galeria" }, { label: "Nuestra historia", href: "#galeria" }, { label: "Tradiciones", href: "#galeria" }, { label: "Calidad y confección", href: "#galeria" }, { label: "Contacto", href: "#contacto" }] },
];

function PendingFooterItem({ children }: { children: string }) {
  return <span className="footer-pending" aria-label={`${children}: contenido próximamente disponible`}>{children}</span>;
}

function FooterGroup({ title, links }: (typeof groups)[number]) {
  return <div className="footer-link-group"><b>{title}</b>{links.map((link) => link.href ? <a href={link.href} key={link.label}>{link.label}</a> : <PendingFooterItem key={link.label}>{link.label}</PendingFooterItem>)}</div>;
}

export function Footer() {
  return (
    <footer className="footer-sample footer-sample--wordmark">
      <div className="kit-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#inicio" aria-label="Pachakuna, volver al inicio"><img src="/set-fotos/logo.png" alt="Pachakuna" loading="lazy" decoding="async" /></a>
            <p>Indumentaria folklórica tradicional del Perú.</p>
          </div>
          <div className="footer-links">{groups.map((group) => <FooterGroup {...group} key={group.title} />)}</div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Pachakuna. Todos los derechos reservados.</span>
          <nav className="footer-legal" aria-label="Información legal">
            <PendingFooterItem>Términos y condiciones</PendingFooterItem><PendingFooterItem>Política de privacidad</PendingFooterItem><PendingFooterItem>Libro de reclamaciones</PendingFooterItem>
          </nav>
          <nav className="footer-social" aria-label="Redes sociales">
            <PendingFooterItem>Instagram</PendingFooterItem><PendingFooterItem>Facebook</PendingFooterItem><PendingFooterItem>TikTok</PendingFooterItem>
          </nav>
        </div>
      </div>
    </footer>
  );
}
