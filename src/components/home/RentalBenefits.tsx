import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { rentalBenefits } from '@/data/benefits';

export function RentalBenefits() {
  return (
    <section className="bg-dzone-soft-white py-20 lg:py-28">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>What's Included</SectionLabel>
          <h2 className="mt-5 font-display font-extrabold text-display-m text-dzone-black max-w-xl">
            Rental benefits,
            <br />
            included in every trip.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-dzone-black/8">
          {rentalBenefits.map((benefit, i) => (
            <ScrollReveal key={benefit.id} delay={i * 60}>
              <div className="bg-white p-6 lg:p-7 h-full flex items-start gap-4 group hover:bg-dzone-yellow/5 transition-colors duration-300">
                <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg bg-dzone-black text-dzone-yellow font-display font-bold text-sm">
                  {benefit.id}
                </span>
                <div>
                  <h3 className="font-display font-bold text-[16px] text-dzone-black mb-1">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-[14px] text-dzone-text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
