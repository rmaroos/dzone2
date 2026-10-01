import { Hero } from '@/components/home/Hero';
import { BenefitsBar } from '@/components/home/BenefitsBar';
import { FeaturedCars } from '@/components/home/FeaturedCars';
import { WhyDzone } from '@/components/home/WhyDzone';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Review } from '@/components/home/Review';
import { RentalBenefits } from '@/components/home/RentalBenefits';
import { ServiceArea } from '@/components/home/ServiceArea';
import { FinalCTA } from '@/components/home/FinalCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsBar />
      <FeaturedCars />
      <WhyDzone />
      <HowItWorks />
      <Review />
      <RentalBenefits />
      <ServiceArea />
      <FinalCTA />
    </>
  );
}
