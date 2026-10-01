import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { siteConfig } from '@/config/site';

const contactOptions = [
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: siteConfig.contact.whatsapp,
    href: `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`,
  },
];

export function ContactOptions() {
  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dzone-black/8">
          {contactOptions.map((option, i) => {
            const Icon = option.icon;
            return (
              <ScrollReveal key={option.label} delay={i * 80}>
                <a
                  href={option.href}
                  target={option.href.startsWith('http') ? '_blank' : undefined}
                  rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block bg-dzone-soft-white p-6 lg:p-8 group hover:bg-dzone-yellow/5 transition-colors duration-300 h-full"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-dzone-black text-dzone-yellow shrink-0 group-hover:bg-dzone-yellow group-hover:text-dzone-black transition-colors duration-300">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-dzone-black/40 mb-1">
                        {option.label}
                      </p>
                      <p className="font-display font-bold text-[16px] text-dzone-black break-words">
                        {option.value}
                      </p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Service area */}
        <ScrollReveal delay={240}>
          <div className="mt-6 flex items-start gap-4 bg-dzone-soft-white rounded-xl p-6 lg:p-8 border border-dzone-black/8">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-dzone-black text-dzone-yellow shrink-0">
              <MapPin className="w-5 h-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-dzone-black/40 mb-1">
                Service Area
              </p>
              <p className="font-body text-[15px] text-dzone-black">
                {siteConfig.serviceArea} Contact us to confirm pickup and delivery options.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
