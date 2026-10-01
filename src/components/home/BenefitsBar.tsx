import { Zap, Users, Smartphone, Headphones } from 'lucide-react';
import { keyBenefits } from '@/data/benefits';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const iconMap: Record<string, typeof Zap> = {
  Zap,
  Users,
  Smartphone,
  Headphones,
};

export function BenefitsBar() {
  return (
    <section className="bg-dzone-black py-12 lg:py-14">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {keyBenefits.map((benefit) => {
              const Icon = iconMap[benefit.icon];
              return (
                <div
                  key={benefit.label}
                  className="bg-dzone-black px-5 py-6 lg:px-8 lg:py-7 flex flex-col gap-3 group hover:bg-dzone-black-pure transition-colors duration-300"
                >
                  <Icon className="w-7 h-7 text-dzone-yellow" strokeWidth={1.75} />
                  <div>
                    <p className="font-display font-bold text-lg lg:text-xl text-white">
                      {benefit.label}
                    </p>
                    <p className="font-body text-[13px] text-white/50 mt-0.5">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
