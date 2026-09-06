const reviews = [
  { image: "/set-fotos/folklore-peruano-1000x600.jpg", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=85", name: "Andrea M.", role: "Testimonio de muestra", quote: "El bordado tiene muchísimo detalle y la prenda se siente muy bien trabajada. Los colores se ven incluso mejor en persona.", alt: "Escena de tradición peruana" },
  { image: "/set-fotos/catalogo-4.jpeg", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=85", name: "Luis C.", role: "Testimonio de muestra", quote: "Me gustó mucho cómo quedó la talla y la calidad de la tela. Se siente cómoda, resistente y con bastante trabajo en cada detalle.", alt: "Pareja con indumentaria tradicional" },
  { image: "/set-fotos/sierra3.png", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=85", name: "Valeria R.", role: "Testimonio de muestra", quote: "Buscaba una prenda para una presentación y superó mis expectativas. El diseño conserva muy bien la esencia tradicional y luce espectacular.", alt: "Paisaje cultural peruano" },
] as const;

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="review-card">
      <figure className="review-photo"><img src={review.image} alt={review.alt} loading="lazy" decoding="async" /></figure>
      <div className="review-content">
        <div className="review-rating" aria-label="5 de 5 estrellas">{Array.from({ length: 5 }, (_, index) => <span key={index} aria-hidden="true">★</span>)}</div>
        <blockquote>“{review.quote}”</blockquote>
        <div className="review-person"><img src={review.avatar} alt="" loading="lazy" decoding="async" /><span><b>{review.name}</b><small>{review.role}</small></span></div>
      </div>
    </article>
  );
}

export function Reviews() {
  return (
    <section className="reviews-sample reviews-sample--marquee" aria-label="Reseñas">
      <div className="kit-reviews" aria-label="Reseñas en desplazamiento automático">
        <h2 className="review-six-title">Quienes ya visten Pachakuna dicen:</h2>
        <div className="review-marquee"><div className="review-marquee__track">
          <div className="review-marquee__group">{reviews.map((review) => <ReviewCard review={review} key={review.image} />)}</div>
          <div className="review-marquee__group" aria-hidden="true">{reviews.map((review) => <ReviewCard review={review} key={review.image} />)}</div>
        </div></div>
      </div>
    </section>
  );
}
