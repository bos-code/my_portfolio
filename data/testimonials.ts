export type Testimonial = {
  name: string;
  role?: string;
  quote: string;
  rating?: number;
};

// Real client reviews only — add entries here once a submission has been
// reviewed. New submissions arrive by email via the review form on the
// homepage rather than publishing automatically.
export const testimonials: Testimonial[] = [];
