import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Award } from 'lucide-react';

const testimonials = [
  {
    name: 'James Kamau',
    role: 'Farm Manager, Nakuru',
    content: 'Farmparts has been our trusted supplier for over 15 years. Their genuine parts keep our fleet running without issues. The team knows exactly what we need.',
    rating: 5,
  },
  {
    name: 'Sarah Wanjiru',
    role: 'Workshop Owner, Nairobi',
    content: 'Best prices for genuine parts in Kenya. Fast delivery and excellent technical support. My workshop relies on Farmparts for quality automotive parts.',
    rating: 5,
  },
  {
    name: 'Peter Omondi',
    role: 'Agricultural Contractor, Eldoret',
    content: "Their sourcing service is incredible. They found a rare Perkins part for my tractor in just 2 days. That's the kind of service that keeps me coming back.",
    rating: 5,
  },
  {
    name: 'Mary Njeri',
    role: 'Transport Company, Mombasa',
    content: 'We maintain a fleet of 20 vehicles and Farmparts never disappoints. Genuine Bosch parts at competitive prices with reliable delivery to the coast.',
    rating: 5,
  },
];

const awards = [
  {
    image: 'https://farmpartsltd.com/wp-content/uploads/2023/03/farmparts1.png',
    title: 'Award Recognition',
  },
  {
    image: 'https://farmpartsltd.com/wp-content/uploads/2023/09/IMG-20230925-WA0013.jpg',
    title: 'Award Recognition',
  },
  {
    image: 'https://farmpartsltd.com/wp-content/uploads/2025/01/Top_Brands_Emblem1-2048x1456.png',
    title: 'Top Brands Emblem',
  },
  {
    image: 'https://farmpartsltd.com/wp-content/uploads/2023/03/agri-1.png',
    title: 'Agricultural Excellence',
  },
  {
    image: 'https://farmpartsltd.com/wp-content/uploads/2023/03/farmparts2.png',
    title: 'Award Recognition',
  },
  {
    image: '/Logos/farmparts%20logos/%40final%20awars.png',
    fallback: '/Logos/farmparts logos/final awars.png',
    title: 'Top 100 Mid-sized Companies',
  },
];

export const TestimonialsAwards: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-[#0A1A3F]">
                What Our Customers Say
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="bg-white border-2 border-[#D4A017] text-[#D4A017] p-2 rounded-lg hover:bg-[#D4A017] hover:text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white border-2 border-[#D4A017] text-[#D4A017] p-2 rounded-lg hover:bg-[#D4A017] hover:text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} size={20} fill="#D4A017" className="text-[#D4A017]" />
                ))}
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0A1A3F] to-[#D4A017] flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#0A1A3F]">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-[#D4A017] w-8'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#0E5E2F] to-[#12773D] text-white rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star size={24} fill="white" />
                <span className="text-3xl font-bold">4.9/5.0</span>
              </div>
              <p className="text-white/90">Average rating from 2,500+ customers</p>
            </div>

            <div className="mt-8 lg:mt-12 bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <Award size={40} className="text-[#D4A017] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#0A1A3F] mb-2">
                    Certified Excellence
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Recognized by leading manufacturers including Makita, Bosch, and Perkins for outstanding service quality, genuine parts distribution, and customer satisfaction.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D4A017] rounded-full"></div>
                  <span className="text-gray-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D4A017] rounded-full"></div>
                  <span className="text-gray-700">Authorized Distributor Network</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D4A017] rounded-full"></div>
                  <span className="text-gray-700">Kenya Bureau of Standards Approved</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D4A017] rounded-full"></div>
                  <span className="text-gray-700">45+ Years in Business</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#0A1A3F] mb-2">
                Awards & Recognition
              </h2>
              <p className="text-gray-600 mb-2">
                Honored for excellence and quality service
              </p>
              <p className="text-sm font-semibold text-[#D4A017]">
                Top 100 Automotive Awards - "Best Automotive Spare Parts Dealer in Kenya 2024"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
                >
                  <div className="aspect-square flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                    <img
                      src={(award as any).image}
                      alt={award.title}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        const fb = (award as any).fallback;
                        if (fb && e.currentTarget.getAttribute('data-tried') !== '1') {
                          e.currentTarget.setAttribute('data-tried', '1');
                          e.currentTarget.src = fb;
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
