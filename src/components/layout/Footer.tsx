import { ArrowUpRight, Phone, Mail } from 'lucide-react';
import { useRouter } from '@/lib/router';
import { navLinks, siteConfig } from '@/config/site';

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="bg-dzone-black text-white">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-dzone-yellow text-dzone-black font-display font-extrabold text-lg">
                DZ
              </span>
              <span className="font-display font-bold text-[16px]">Dzone Car Rental</span>
            </div>
            <p className="font-body text-[15px] text-white/60 leading-relaxed max-w-xs">
              Premium vehicle rental, made simple. Discover the car, understand the details, and book on Turo.
            </p>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3">
            <h3 className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="font-body text-[15px] text-white/80 hover:text-dzone-yellow transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking */}
          <div className="md:col-span-2">
            <h3 className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
              Booking
            </h3>
            <a
              href={siteConfig.turoHostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-[15px] text-white/80 hover:text-dzone-yellow transition-colors group"
            >
              Book on Turo
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 font-body text-[14px] text-white/80 hover:text-dzone-yellow transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Phone</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 font-body text-[14px] text-white/80 hover:text-dzone-yellow transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-body text-[13px] text-white/40">
            © 2026 Dzone Car Rental. All rights reserved.
          </p>
          <p className="font-body text-[12px] text-white/30">
            Apple CarPlay is a trademark of Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
