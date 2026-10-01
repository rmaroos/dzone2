import { Shield, Cable, Map } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { Vehicle } from '@/types/car';

const categoryConfig = [
  { key: 'safety' as const, number: '01', label: 'Safety', icon: Shield },
  { key: 'connectivity' as const, number: '02', label: 'Connectivity', icon: Cable },
  { key: 'convenience' as const, number: '03', label: 'Convenience', icon: Map },
];

interface VehicleFeaturesProps {
  car: Vehicle;
}

export function VehicleFeatures({ car }: VehicleFeaturesProps) {
  return (
    <section className="bg-dzone-black py-20 lg:py-24">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
            <div>
              <SectionLabel light>Features — Car {car.label}</SectionLabel>
              <h2 className="mt-4 font-display font-extrabold text-display-m text-white">
                Everything included.
              </h2>
            </div>
            <p className="font-body text-[15px] text-white/50 max-w-xs">
              Safety, connectivity, and convenience features standard on every {car.model}.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {categoryConfig.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal key={cat.key} delay={i * 100}>
                <div className="bg-dzone-black p-6 lg:p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-display font-extrabold text-2xl text-dzone-yellow">
                      {cat.number}
                    </span>
                    <Icon className="w-5 h-5 text-dzone-yellow" strokeWidth={1.75} />
                    <span className="font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">
                      {cat.label}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {car.features[cat.key].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 font-body text-[15px] text-white/80"
                      >
                        <span className="block w-1.5 h-1.5 rounded-full bg-dzone-yellow shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
