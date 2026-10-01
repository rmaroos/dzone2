import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { reviews } from '@/data/reviews';

export function FleetTrust() {
  const review = reviews[0];

  return (
    <section className="bg-dzone-soft-white py-20 lg:py-24">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>Trusted by Drivers</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-dzone-yellow text-dzone-yellow" />
              ))}
              <span className="ml-2 font-display font-bold text-[15px] text-dzone-black">
                {review.rating.toFixed(1)} — Verified Turo Review
              </span>
            </div>
            <Quote className="w-8 h-8 text-dzone-yellow mb-4" strokeWidth={1.5} />
            <blockquote className="font-display font-semibold text-xl lg:text-2xl text-dzone-black leading-snug">
              &ldquo;{review.review}&rdquo;
            </blockquote>
            <p className="mt-5 font-body text-[14px] text-dzone-text-muted">
              {review.customerName} — {review.date}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
