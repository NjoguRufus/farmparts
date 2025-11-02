import React, { useEffect, useState } from 'react';

const brands = [
  { name: 'Baldwin', logo: 'https://farmpartsltd.com/wp-content/uploads/2015/03/bladwin-filters.jpg', image: true },
  { name: 'Bosch', logo: 'https://farmpartsltd.com/wp-content/uploads/2016/07/bosch.png', image: true },
  { name: 'Deutz', logo: 'https://farmpartsltd.com/wp-content/uploads/2015/03/Deutz.jpg', image: true },
  { name: 'Ford', logo: 'https://farmpartsltd.com/wp-content/uploads/2014/06/ford.jpg', image: true },
  { name: 'Heyco', logo: 'https://farmpartsltd.com/wp-content/uploads/2014/06/heyco.jpg', image: true },
  { name: 'Isuzu', logo: 'https://farmpartsltd.com/wp-content/uploads/2014/06/isuzu.jpg', image: true },
  { name: 'Massey Ferguson', logo: 'https://farmpartsltd.com/wp-content/uploads/2014/06/massey-ferguson.jpg', image: true },
  { name: 'SAME', logo: 'https://farmpartsltd.com/wp-content/uploads/2015/03/same.jpg', image: true },
];

export const BrandsSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1A3F] mb-4">
            Authorized Dealer of Premium Brands
          </h2>
          <p className="text-gray-600 text-lg">
            We stock genuine parts from the world's leading manufacturers
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-8">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={`transition-all duration-500 ${
                  index === activeIndex
                    ? 'scale-110 opacity-100'
                    : 'scale-100 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="bg-white rounded-xl p-4 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    {brand.image ? (
                      <div className="flex items-center justify-center mb-2 h-12 sm:h-16 lg:h-20">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="text-2xl lg:text-3xl font-bold text-[#0A1A3F] mb-2">
                        {brand.logo}
                      </div>
                    )}
                    <div className="text-xs text-gray-500">{brand.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#0A1A3F] to-[#1A2F5F] text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Can't Find Your Brand? We Can Source It!
          </h3>
          <p className="text-gray-300 mb-6">
            With our global network, we can source genuine parts from any manufacturer
          </p>
          <button className="bg-[#D4A017] hover:bg-[#B8880F] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105">
            Request a Part
          </button>
        </div>
      </div>
    </section>
  );
};
