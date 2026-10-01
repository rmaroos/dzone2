import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function ContactHeader() {
  return (
    <section className="bg-white pt-28 sm:pt-32 lg:pt-40 pb-12 lg:pb-16">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-6 font-display font-extrabold text-display-xl text-dzone-black">
            Let's talk.
          </h1>
          <p className="mt-6 max-w-lg font-body text-[17px] text-dzone-text-muted leading-relaxed">
            Need help before booking? Get in touch with Dzone Car Rental or continue directly to Turo.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
