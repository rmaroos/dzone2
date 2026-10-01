import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useRouter } from '@/lib/router';
import { navLinks, siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function Header() {
  const { path, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (to: string) => {
    navigate(to);
    setMenuOpen(false);
  };

  const isActive = (linkPath: string) => {
    if (linkPath === '/') return path === '/';
    return path.startsWith(linkPath);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth',
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-dzone-black/10'
            : 'bg-transparent border-b border-transparent'
        )}
        style={{ height: scrolled ? '68px' : '80px' }}
      >
        <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            className="flex items-center gap-2.5 group"
            aria-label="Dzone Car Rental — Home"
          >
            <span
              className={cn(
                'flex items-center justify-center w-10 h-10 rounded-lg font-display font-extrabold text-lg transition-colors duration-300',
                scrolled
                  ? 'bg-dzone-black text-dzone-yellow'
                  : 'bg-dzone-yellow text-dzone-black'
              )}
            >
              DZ
            </span>
            <span
              className={cn(
                'font-display font-bold text-[15px] tracking-tight transition-colors duration-300 hidden sm:block',
                scrolled ? 'text-dzone-black' : 'text-dzone-black'
              )}
            >
              Dzone
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={cn(
                  'relative px-4 py-2 font-body text-[14px] font-medium transition-colors duration-200',
                  isActive(link.path)
                    ? 'text-dzone-black'
                    : 'text-dzone-black/55 hover:text-dzone-black'
                )}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-dzone-yellow" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={siteConfig.turoHostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-dzone-yellow text-dzone-black font-body font-semibold text-[13px] uppercase tracking-wide px-6 h-11 rounded-lg transition-all duration-300 hover:bg-dzone-yellow-dark hover:-translate-y-0.5 group"
          >
            Book on Turo
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-dzone-black text-white"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-dzone-black/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col animate-slide-left">
            <div className="flex items-center justify-between px-5 h-16 border-b border-dzone-black/10 shrink-0">
              <span className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-dzone-black text-dzone-yellow font-display font-extrabold text-base">
                  DZ
                </span>
                <span className="font-display font-bold text-[15px]">Dzone</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-dzone-soft-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col px-5 py-6 gap-1 flex-1">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={cn(
                    'flex items-center justify-between py-4 border-b border-dzone-black/8 font-display font-bold text-2xl text-left transition-colors',
                    isActive(link.path) ? 'text-dzone-black' : 'text-dzone-black/50'
                  )}
                >
                  {link.label}
                  {isActive(link.path) && <span className="w-3 h-3 rounded-full bg-dzone-yellow" />}
                </button>
              ))}
            </nav>
            <div className="p-5 border-t border-dzone-black/10 shrink-0">
              <a
                href={siteConfig.turoHostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-dzone-yellow text-dzone-black font-body font-semibold text-[14px] uppercase tracking-wide h-13 rounded-lg transition-all hover:bg-dzone-yellow-dark py-3.5"
              >
                Book on Turo
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
