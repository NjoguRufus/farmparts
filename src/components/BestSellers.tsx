import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    title: 'Perkins 2644H501 Fuel Filter - Genuine OEM',
    price: 'KSh 3,450',
    image: 'Fuel Filter',
    inStock: true,
    oemNumber: '2644H501',
  },
  {
    title: 'Makita DHP484Z Cordless Hammer Driver Drill 18V',
    price: 'KSh 28,900',
    image: 'Power Drill',
    inStock: true,
    oemNumber: 'DHP484Z',
  },
  {
    title: 'Bosch 0 986 494 294 Brake Pad Set - Front',
    price: 'KSh 5,200',
    image: 'Brake Pads',
    inStock: true,
    oemNumber: '0986494294',
  },
  {
    title: 'Sparex S.67425 Hydraulic Filter Element',
    price: 'KSh 4,100',
    image: 'Hydraulic Filter',
    inStock: true,
    oemNumber: 'S.67425',
  },
  {
    title: 'STIHL MS 250 Chainsaw 18" Bar Professional',
    price: 'KSh 42,500',
    image: 'Chainsaw',
    inStock: true,
    oemNumber: 'MS250-18',
  },
  {
    title: 'Federal-Mogul Champion RC12YC Spark Plug',
    price: 'KSh 850',
    image: 'Spark Plug',
    inStock: true,
    oemNumber: 'RC12YC',
  },
  {
    title: 'CNH Case IH Air Filter 84257511',
    price: 'KSh 6,750',
    image: 'Air Filter',
    inStock: true,
    oemNumber: '84257511',
  },
  {
    title: 'Castrol GTX 20W-50 Engine Oil 5L',
    price: 'KSh 3,200',
    image: 'Engine Oil',
    inStock: true,
    oemNumber: 'GTX-20W50',
  },
];

export const BestSellers: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - itemsPerPage));
  };

  const handleNext = () => {
    setStartIndex(Math.min(products.length - itemsPerPage, startIndex + itemsPerPage));
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1A3F] mb-2">
              Best Sellers
            </h2>
            <p className="text-gray-600 text-lg">
              Our most popular genuine parts and tools
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="bg-white border-2 border-[#0A1A3F] text-[#0A1A3F] p-3 rounded-lg hover:bg-[#0A1A3F] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= products.length - itemsPerPage}
              className="bg-white border-2 border-[#0A1A3F] text-[#0A1A3F] p-3 rounded-lg hover:bg-[#0A1A3F] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {visibleProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="md:hidden flex justify-center gap-2 mt-8">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="bg-white border-2 border-[#0A1A3F] text-[#0A1A3F] p-3 rounded-lg hover:bg-[#0A1A3F] hover:text-white transition-colors disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex >= products.length - itemsPerPage}
            className="bg-white border-2 border-[#0A1A3F] text-[#0A1A3F] p-3 rounded-lg hover:bg-[#0A1A3F] hover:text-white transition-colors disabled:opacity-30"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};
