import { Star, Quote } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { reviews } from '@/data/reviews';

export function Review() {
  const review = reviews[0];

  return (
    <section className="bg-dzone-black py-20 lg:py-28">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel light>Customer Review</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="mt-10 max-w-4xl">
            <Quote className="w-10 h-10 text-dzone-yellow mb-6" strokeWidth={1.5} />

            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-dzone-yellow text-dzone-yellow" />
              ))}
              <span className="ml-3 font-display font-bold text-lg text-white">
                {review.rating.toFixed(1)}
              </span>
            </div>

            <blockquote className="font-display font-semibold text-2xl lg:text-3xl text-white leading-snug">
              &ldquo;{review.review}&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-dzone-yellow text-dzone-black font-display font-bold text-lg">
                {review.customerName.charAt(0)}
              </div>
              <div>
                <p className="font-display font-bold text-[15px] text-white">
                  {review.customerName}
                </p>
                <p className="font-body text-[13px] text-white/40">
                  {review.date}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dzone response */}
        <ScrollReveal delay={160}>
          <div className="mt-10 max-w-4xl border-l-2 border-dzone-yellow pl-6">
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-dzone-yellow mb-3">
              Dzone Car Rentals — Response
            </p>
            <p className="font-body text-[15px] text-white/70 leading-relaxed">
              {review.response}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
