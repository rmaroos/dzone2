import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useRouter } from '@/lib/router';
import { cars } from '@/data/cars';
import type { Vehicle } from '@/types/car';

function FeaturedCarCard({ car, index }: { car: Vehicle; index: number }) {
  const { navigate } = useRouter();

  return (
    <ScrollReveal delay={index * 120}>
      <div className="group bg-dzone-soft-white rounded-2xl overflow-hidden border border-dzone-black/8 hover:border-dzone-black/15 transition-all duration-500 hover:shadow-xl">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-dzone-soft-white">
          <img
            src={car.images[0]}
            alt={`${car.year} ${car.make} ${car.model} — ${car.variant}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 bg-dzone-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-md">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.15em]">
              Car {car.label}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.15em] text-dzone-black/40 mb-2">
            {car.year} • {car.make}
          </p>
          <h3 className="font-display font-bold text-2xl lg:text-3xl text-dzone-black mb-1">
            {car.model}
          </h3>
          <p className="font-body text-[14px] text-dzone-text-muted mb-5 line-clamp-1">
            {car.variant}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { label: 'Seats', value: car.seats },
              { label: 'Engine', value: 'Hybrid' },
              { label: 'Trans', value: 'Auto' },
              { label: 'Economy', value: '4.1' },
            ].map((spec) => (
              <div key={spec.label} className="text-center">
                <p className="font-display font-bold text-base text-dzone-black">{spec.value}</p>
                <p className="font-body text-[10px] font-semibold uppercase tracking-wider text-dzone-black/40 mt-0.5">
                  {spec.label}
                </p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate('/cars')}
              className="flex-1 inline-flex items-center justify-center gap-2 border border-dzone-black/15 text-dzone-black font-body font-semibold text-[13px] uppercase tracking-wide h-11 rounded-lg transition-all hover:border-dzone-black hover:bg-dzone-black hover:text-white group/btn"
            >
              View Car
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
            </button>
            {car.turoUrl ? (
              <a
                href={car.turoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-dzone-yellow text-dzone-black font-body font-semibold text-[13px] uppercase tracking-wide h-11 rounded-lg transition-all hover:bg-dzone-yellow-dark hover:-translate-y-0.5 group/btn"
              >
                Book on Turo
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            ) : (
              <div className="flex-1 inline-flex items-center justify-center gap-2 bg-dzone-black/8 text-dzone-black/40 font-body font-semibold text-[13px] uppercase tracking-wide h-11 rounded-lg cursor-not-allowed">
                Link Pending
              </div>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function FeaturedCars() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel>Meet the Fleet</SectionLabel>
          <div className="mt-5 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-display font-extrabold text-display-m text-dzone-black max-w-xl">
              Two Corollas.
              <br />
              One easy way to get moving.
            </h2>
            <p className="font-body text-[16px] text-dzone-text-muted max-w-sm">
              Explore the current Dzone fleet and choose the vehicle that suits your trip.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cars.map((car, i) => (
            <FeaturedCarCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
