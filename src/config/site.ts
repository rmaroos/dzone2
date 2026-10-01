import type { SiteConfig } from '@/types/site';

export const siteConfig: SiteConfig = {
  businessName: 'Dzone Car Rental',
  websiteUrl: 'https://dzone.rentals',
  turoHostUrl: 'https://turo.com',
  contact: {
    phone: '+1 (555) 000-0000',
    email: 'hello@dzone.rentals',
    whatsapp: '+1 (555) 000-0000',
  },
  serviceArea: 'Service area to be confirmed.',
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Cars', path: '/cars' },
  { label: 'Contact', path: '/contact' },
];
