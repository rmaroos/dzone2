import { ArrowRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { cars } from '@/data/cars';

export function Hero() {
  const heroCar = cars[0];

  return (
    <section className="relative bg-white pt-28 sm:pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left: text content */}
          <div className="lg:col-span-5 relative z-10">
            <div
              className="flex items-center gap-3 mb-6 animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              <span className="block w-8 h-[2px] bg-dzone-yellow" />
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-dzone-black/60">
                Dzone Car Rental
              </span>
            </div>

            <h1
              className="font-display font-extrabold text-display-xl text-dzone-black animate-fade-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Your Next
              <br />
              Drive Starts
              <br />
              <span className="relative inline-block">
                Here.
                <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-dzone-yellow" />
              </span>
            </h1>

            <p
              className="mt-6 max-w-md font-body text-[17px] text-dzone-text-muted leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.35s', opacity: 0 }}
            >
              Premium hybrid vehicles, available through Turo. Discover the car, understand the details, and book in minutes.
            </p>

            <div
              className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <LinkButton to="/cars" variant="secondary" size="lg" className="group">
                Explore Our Cars
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </LinkButton>
              <LinkButton
                to="https://turo.com"
                external
                variant="primary"
                size="lg"
                withArrow
                className="group"
              >
                Book on Turo
              </LinkButton>
            </div>

            {/* Metadata */}
            <div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 animate-fade-up"
              style={{ animationDelay: '0.65s', opacity: 0 }}
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {['2026', 'Hybrid', 'Automatic', '5 Seats', '4.1 L/100km'].map((item, i) => (
                  <span key={item} className="flex items-center gap-3">
                    <span className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-dzone-black/50">
                      {item}
                    </span>
                    {i < 4 && <span className="w-1 h-1 rounded-full bg-dzone-yellow" />}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: vehicle image */}
          <div className="lg:col-span-7 relative">
            {/* Oversized model text */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none overflow-hidden">
              <span className="font-display font-extrabold text-[clamp(5rem,16vw,12rem)] text-dzone-black/[0.04] tracking-tighter whitespace-nowrap">
                COROLLA
              </span>
            </div>

            <div
              className="relative animate-scale-in"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              <img
                src={heroCar.images[0]}
                alt={`${heroCar.year} ${heroCar.make} ${heroCar.model} — premium hybrid sedan in white`}
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                fetchPriority="high"
              />
              {/* Floating spec card */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-dzone-black text-white px-5 py-4 rounded-xl shadow-xl hidden sm:block">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      Rating
                    </p>
                    <p className="font-display font-bold text-xl text-dzone-yellow">5.0</p>
                  </div>
                  <div className="w-px h-10 bg-white/15" />
                  <div>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      Powertrain
                    </p>
                    <p className="font-display font-bold text-xl">Hybrid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
