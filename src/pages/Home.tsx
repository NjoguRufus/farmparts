import { Hero } from '../components/Hero';
import { BrandsSlider } from '../components/BrandsSlider';
import { CategoryGrid } from '../components/CategoryGrid';
import { BestSellers } from '../components/BestSellers';
import { TractorSpareParts } from '../components/TractorSpareParts';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TestimonialsAwards } from '../components/TestimonialsAwards';
import { Map } from '../components/Map';

export const Home: React.FC = () => {
  return (
    <main className="pb-20 lg:pb-0">
      <Hero />
      <BrandsSlider />
      <CategoryGrid />
      <BestSellers />
      <TractorSpareParts />
      <WhyChooseUs />
      <TestimonialsAwards />
      <Map />
    </main>
  );
};



