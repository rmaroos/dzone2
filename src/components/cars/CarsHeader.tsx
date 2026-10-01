import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function CarsHeader() {
  return (
    <section className="bg-white pt-28 sm:pt-32 lg:pt-40 pb-12 lg:pb-16">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>Our Cars</SectionLabel>
          <h1 className="mt-6 font-display font-extrabold text-display-xl text-dzone-black">
            Choose your
            <br />
            next <span className="relative inline-block">
              drive.
              <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-dzone-yellow" />
            </span>
          </h1>
          <p className="mt-6 max-w-lg font-body text-[17px] text-dzone-text-muted leading-relaxed">
            Explore the current Dzone fleet, compare the key details, and continue to Turo when you're ready.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
