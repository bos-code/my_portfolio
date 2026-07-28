import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { ReviewForm } from "@/components/ReviewForm";

export function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="shell">
        <div className="section-head">
          <div className="mono eyebrow">06 / Client reviews</div>
          <div>
            <h2>What it&apos;s like<br /><span className="serif">to work together.</span></h2>
            <p>Notes from people I&apos;ve built products with. Worked with me? Leave your own below.</p>
          </div>
        </div>

        {testimonials.length === 0 ? (
          <p className="testimonial-empty">
            No reviews published yet — be the first to share what it was like working together.
          </p>
        ) : (
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={`${testimonial.name}-${testimonial.quote.slice(0, 20)}`}>
                {testimonial.rating && (
                  <div className="testimonial-rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        fill={index < testimonial.rating! ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                )}
                <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="testimonial-name">{testimonial.name}</div>
                  {testimonial.role && <div className="testimonial-role">{testimonial.role}</div>}
                </div>
              </article>
            ))}
          </div>
        )}

        <ReviewForm />
      </div>
    </section>
  );
}
