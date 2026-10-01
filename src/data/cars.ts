import type { Vehicle } from '@/types/car';

export const cars: Vehicle[] = [
  {
    id: 'car-01',
    label: '01',
    make: 'Toyota',
    model: 'Corolla',
    year: 2026,
    variant: 'ZR Two-Tone Opt Prem Paint HYB',
    seats: 5,
    powertrain: 'Hybrid (Premium)',
    fuelEconomy: '4.1 L/100km',
    transmission: 'Automatic',
    ratingSnapshot: 5.0,
    tripSnapshot: 1,
    images: [
      'https://images.pexels.com/photos/37620310/pexels-photo-37620310.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/37620309/pexels-photo-37620309.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/9703059/pexels-photo-9703059.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/4895432/pexels-photo-4895432.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    features: {
      safety: [
        'Adaptive Cruise Control',
        'Backup Camera',
        'Blind Spot Warning',
        'Brake Assist',
      ],
      connectivity: [
        'Apple CarPlay',
        'USB Input',
      ],
      convenience: [
        'GPS',
      ],
    },
    includedBenefits: [
      'Skip the rental counter',
      'Additional drivers for free',
      '30-minute return grace period',
      'No car wash necessary, but keep the vehicle tidy',
      'Free access to 24/7 roadside assistance',
      '24/7 customer support',
    ],
    turoUrl: 'https://turo.com',
  },
  {
    id: 'car-02',
    label: '02',
    make: 'Toyota',
    model: 'Corolla',
    year: 2026,
    variant: 'ZR Two-Tone Opt Prem Paint HYB',
    seats: 5,
    powertrain: 'Hybrid (Premium)',
    fuelEconomy: '4.1 L/100km',
    transmission: 'Automatic',
    ratingSnapshot: 5.0,
    tripSnapshot: 1,
    images: [
      'https://images.pexels.com/photos/29458514/pexels-photo-29458514.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/31095911/pexels-photo-31095911.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8305346/pexels-photo-8305346.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8332625/pexels-photo-8332625.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    features: {
      safety: [
        'Adaptive Cruise Control',
        'Backup Camera',
        'Blind Spot Warning',
        'Brake Assist',
      ],
      connectivity: [
        'Apple CarPlay',
        'USB Input',
      ],
      convenience: [
        'GPS',
      ],
    },
    includedBenefits: [
      'Skip the rental counter',
      'Additional drivers for free',
      '30-minute return grace period',
      'No car wash necessary, but keep the vehicle tidy',
      'Free access to 24/7 roadside assistance',
      '24/7 customer support',
    ],
    turoUrl: undefined,
  },
];
