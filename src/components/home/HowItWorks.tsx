import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { howItWorks } from '@/data/benefits';

export function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="mt-5 font-display font-extrabold text-display-m text-dzone-black max-w-xl">
            Three simple steps
            <br />
            to your next drive.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {howItWorks.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 120}>
              <div className="relative">
                <div className="flex items-center gap-4 mb-5">
                  <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-dzone-black text-dzone-yellow font-display font-extrabold text-2xl relative z-10">
                    {step.step}
                  </span>
                  {i < howItWorks.length - 1 && (
                    <span className="hidden md:block flex-1 h-px bg-dzone-black/10" />
                  )}
                </div>
                <h3 className="font-display font-bold text-xl lg:text-2xl text-dzone-black mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-[15px] text-dzone-text-muted leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
