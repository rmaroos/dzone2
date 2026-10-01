import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import type { Vehicle } from '@/types/car';

interface VehicleBookingCTAProps {
  car: Vehicle;
}

export function VehicleBookingCTA({ car }: VehicleBookingCTAProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-dzone-black rounded-2xl px-6 py-10 lg:px-16 lg:py-14 text-center">
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-dzone-yellow mb-4">
              Car {car.label} — {car.make} {car.model}
            </p>
            <h2 className="font-display font-extrabold text-display-m text-white">
              Ready to book?
            </h2>
            <p className="mt-4 max-w-md mx-auto font-body text-[16px] text-white/60 leading-relaxed">
              Check the current price and availability for this vehicle on Turo and complete your booking in minutes.
            </p>
            <div className="mt-8 flex justify-center">
              {car.turoUrl ? (
                <a
                  href={car.turoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-dzone-yellow text-dzone-black font-body font-semibold text-[14px] uppercase tracking-wide px-8 h-14 rounded-xl transition-all hover:bg-dzone-yellow-dark hover:-translate-y-0.5"
                >
                  Book This Car on Turo
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <div className="inline-flex items-center justify-center bg-white/10 text-white/40 font-body font-semibold text-[14px] uppercase tracking-wide px-8 h-14 rounded-xl">
                  Booking link pending client confirmation
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
