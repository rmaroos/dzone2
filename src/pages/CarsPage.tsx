import { CarsHeader } from '@/components/cars/CarsHeader';
import { FleetSelector } from '@/components/cars/FleetSelector';
import { VehicleShowcase } from '@/components/cars/VehicleShowcase';
import { VehicleFeatures } from '@/components/cars/VehicleFeatures';
import { VehicleBenefits } from '@/components/cars/VehicleBenefits';
import { VehicleBookingCTA } from '@/components/cars/VehicleBookingCTA';
import { FleetTrust } from '@/components/cars/FleetTrust';
import { FinalCTA } from '@/components/home/FinalCTA';
import { cars } from '@/data/cars';

export function CarsPage() {
  return (
    <>
      <CarsHeader />
      <FleetSelector />
      {cars.map((car, i) => (
        <div key={car.id}>
          <section className="bg-white py-12 lg:py-16">
            <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
              <VehicleShowcase car={car} index={i} />
            </div>
          </section>
          <VehicleFeatures car={car} />
          <VehicleBenefits car={car} />
          <VehicleBookingCTA car={car} />
        </div>
      ))}
      <FleetTrust />
      <FinalCTA />
    </>
  );
}
