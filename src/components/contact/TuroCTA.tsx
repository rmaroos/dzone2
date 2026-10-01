import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { siteConfig } from '@/config/site';

export function TuroCTA() {
  return (
    <section className="bg-dzone-yellow py-20 lg:py-24">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-extrabold text-display-l text-dzone-black">
              Ready to book?
            </h2>
            <p className="mt-5 font-body text-[17px] text-dzone-black/70 leading-relaxed">
              Browse the vehicles on Dzone and complete your booking on Turo.
            </p>
            <div className="mt-8">
              <a
                href={siteConfig.turoHostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-dzone-black text-white font-body font-semibold text-[14px] uppercase tracking-wide px-8 h-14 rounded-xl transition-all duration-300 hover:bg-dzone-black/85 hover:-translate-y-0.5"
              >
                Book on Turo
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
