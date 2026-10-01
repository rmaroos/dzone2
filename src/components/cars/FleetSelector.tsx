import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { cars } from '@/data/cars';

export function FleetSelector() {
  const scrollToCar = (carId: string) => {
    const el = document.getElementById(carId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-dzone-black py-16 lg:py-20">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel light>Explore the Fleet</SectionLabel>
          <h2 className="mt-5 font-display font-extrabold text-display-m text-white">
            Two vehicles.
            <br />
            <span className="text-dzone-yellow">Pick your match.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:gap-6">
            {cars.map((car) => (
              <button
                key={car.id}
                onClick={() => scrollToCar(car.id)}
                className="group relative bg-dzone-black-pure border border-white/10 hover:border-dzone-yellow rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                {/* Car label badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-display font-extrabold text-2xl text-dzone-yellow">
                    {car.label}
                  </span>
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={car.images[0]}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    className="w-full h-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dzone-black-pure via-dzone-black-pure/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6 text-left">
                  <p className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-1">
                    {car.year}
                  </p>
                  <h3 className="font-display font-bold text-xl lg:text-2xl text-white mb-2">
                    {car.make} {car.model}
                  </h3>
                  <div className="flex items-center gap-3 text-white/50">
                    <span className="font-body text-[13px]">Hybrid</span>
                    <span className="w-1 h-1 rounded-full bg-dzone-yellow" />
                    <span className="font-body text-[13px]">Automatic</span>
                    <span className="w-1 h-1 rounded-full bg-dzone-yellow" />
                    <span className="font-body text-[13px]">5 Seats</span>
                  </div>
                </div>

                {/* Yellow accent on hover */}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-dzone-yellow transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
