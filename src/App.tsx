import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandsSlider } from './components/BrandsSlider';
import { CategoryGrid } from './components/CategoryGrid';
import { BestSellers } from './components/BestSellers';
import { TractorSpareParts } from './components/TractorSpareParts';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsAwards } from './components/TestimonialsAwards';
import { Map } from './components/Map';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export default App;
