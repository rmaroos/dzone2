import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { whyDzone } from '@/data/benefits';

export function WhyDzone() {
  return (
    <section className="bg-dzone-black py-20 lg:py-28">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel light>Why Dzone</SectionLabel>
          <div className="mt-5 max-w-2xl">
            <h2 className="font-display font-extrabold text-display-m text-white">
              A better rental experience,
              <br />
              <span className="text-dzone-yellow">without the complexity.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {whyDzone.map((item, i) => (
            <ScrollReveal key={item.number} delay={i * 100}>
              <div className="bg-dzone-black p-6 lg:p-8 h-full group hover:bg-dzone-black-pure transition-colors duration-300">
                <span className="font-display font-extrabold text-4xl text-dzone-yellow block mb-4">
                  {item.number}
                </span>
                <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">
                  {item.label}
                </p>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-[14px] text-white/55 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
