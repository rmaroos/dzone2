import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import type { Vehicle } from '@/types/car';

interface VehicleShowcaseProps {
  car: Vehicle;
  index: number;
}

export function VehicleShowcase({ car, index }: VehicleShowcaseProps) {
  const reversed = index % 2 === 1;
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div id={car.id} className="scroll-mt-24">
      {/* Vehicle label + identity */}
      <ScrollReveal>
        <div className={`flex items-end gap-4 mb-6 ${reversed ? 'lg:justify-end' : ''}`}>
          <span className="font-display font-extrabold text-5xl text-dzone-yellow">
            {car.label}
          </span>
          <div className="h-px flex-1 bg-dzone-black/10 mb-3" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Identity + image */}
        <div className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}>
          <ScrollReveal>
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-dzone-black/40 mb-3">
              {car.make}
            </p>
            <h2 className="font-display font-extrabold text-display-l text-dzone-black leading-none">
              {car.model}
            </h2>
            <p className="mt-3 font-body text-[15px] text-dzone-text-muted max-w-md">
              {car.year} {car.variant}
            </p>
          </ScrollReveal>

          {/* Main gallery image */}
          <ScrollReveal delay={60}>
            <div className="relative mt-8 group">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="font-display font-extrabold text-[clamp(4rem,12vw,9rem)] text-dzone-black/[0.04] tracking-tighter whitespace-nowrap">
                  {car.model.toUpperCase()}
                </span>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={car.images[activeImage]}
                  alt={`${car.year} ${car.make} ${car.model} — ${car.variant}, view ${activeImage + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Gallery thumbnails */}
          <ScrollReveal delay={120}>
            <div className="mt-4 grid grid-cols-4 gap-3 lg:gap-4">
              {car.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-dzone-soft-white transition-all duration-300 ${
                    activeImage === i
                      ? 'ring-2 ring-dzone-yellow ring-offset-2'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`${car.make} ${car.model} — thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Specs sidebar */}
        <div className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
          <ScrollReveal delay={80}>
            <div className="bg-dzone-black rounded-2xl p-6 lg:p-8">
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-dzone-yellow mb-6">
                Specifications
              </p>

              <div className="space-y-px bg-white/10">
                {[
                  { label: 'Year', value: car.year.toString() },
                  { label: 'Seats', value: car.seats.toString() },
                  { label: 'Powertrain', value: car.powertrain },
                  { label: 'Fuel Economy', value: car.fuelEconomy },
                  { label: 'Transmission', value: car.transmission },
                ].map((spec) => (
                  <div key={spec.label} className="bg-dzone-black flex items-baseline justify-between py-4">
                    <span className="font-body text-[12px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      {spec.label}
                    </span>
                    <span className="font-display font-bold text-[16px] text-white">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Turo snapshot */}
              <div className="mt-6 flex items-center gap-6 pt-6 border-t border-white/10">
                <div>
                  <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                    Turo Rating
                  </p>
                  <p className="font-display font-bold text-2xl text-dzone-yellow">
                    {car.ratingSnapshot.toFixed(1)}
                  </p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                    Trips
                  </p>
                  <p className="font-display font-bold text-2xl text-white">
                    {car.tripSnapshot}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                {car.turoUrl ? (
                  <a
                    href={car.turoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full bg-dzone-yellow text-dzone-black font-body font-semibold text-[14px] uppercase tracking-wide rounded-lg transition-all hover:bg-dzone-yellow-dark hover:-translate-y-0.5 py-3.5"
                  >
                    Book This Car on Turo
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <div className="flex items-center justify-center w-full bg-white/10 text-white/40 font-body font-semibold text-[13px] uppercase tracking-wide rounded-lg py-3.5">
                    Booking link pending confirmation
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
