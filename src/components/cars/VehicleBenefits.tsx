import { Check } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { Vehicle } from '@/types/car';

interface VehicleBenefitsProps {
  car: Vehicle;
}

export function VehicleBenefits({ car }: VehicleBenefitsProps) {
  return (
    <section className="bg-dzone-soft-white py-20 lg:py-24">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>Included With Your Rental — Car {car.label}</SectionLabel>
          <h2 className="mt-5 font-display font-extrabold text-display-m text-dzone-black">
            No hidden extras.
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {car.includedBenefits.map((benefit, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="flex items-center gap-3 bg-white rounded-xl p-5 border border-dzone-black/8 h-full">
                <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-dzone-yellow/15 text-dzone-black">
                  <Check className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <p className="font-body text-[14px] font-medium text-dzone-black leading-snug">
                  {benefit}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
