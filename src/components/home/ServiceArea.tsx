import { MapPin } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function ServiceArea() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative bg-dzone-soft-white rounded-2xl overflow-hidden px-6 py-12 lg:px-16 lg:py-16 border border-dzone-black/8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <SectionLabel>Where We Operate</SectionLabel>
                <h2 className="mt-5 font-display font-extrabold text-display-m text-dzone-black">
                  Serving your area.
                </h2>
                <p className="mt-4 font-body text-[16px] text-dzone-text-muted leading-relaxed max-w-md">
                  {siteConfig.serviceArea} Contact us to confirm pickup and delivery details for your trip.
                </p>
                <div className="mt-6">
                  <LinkButton to="/contact" variant="secondary" size="md">
                    Contact Us
                  </LinkButton>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-sm aspect-[4/3] rounded-xl bg-dzone-black/5 border border-dzone-black/8 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-dzone-black/20" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
