export interface VehicleFeatures {
  safety: string[];
  connectivity: string[];
  convenience: string[];
}

export interface Vehicle {
  id: string;
  label: string;
  make: string;
  model: string;
  year: number;
  variant: string;
  seats: number;
  powertrain: string;
  fuelEconomy: string;
  transmission: string;
  ratingSnapshot: number;
  tripSnapshot: number;
  images: string[];
  features: VehicleFeatures;
  includedBenefits: string[];
  turoUrl?: string;
}
