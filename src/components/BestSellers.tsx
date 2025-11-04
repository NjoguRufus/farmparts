import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductImage } from '../utils/imageMapper';
import { allProducts } from '../utils/products';

// Build Best Sellers from the same products used in Shop: pick 8 at random

export const BestSellers: React.FC = () => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 8;

  const products = useMemo(() => {
    const arr = [...allProducts];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, 8).map((p) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      image: p.image || getProductImage(p as any),
      inStock: p.inStock,
      oemNumber: p.oemNumber,
      category: p.category,
    }));
  }, []);

  const handleViewAll = () => {
    navigate('/shop');
  };

  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - itemsPerPage));
  };

  const handleNext = () => {
    setStartIndex(Math.min(products.length - itemsPerPage, startIndex + itemsPerPage));
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-16 bg-gray-50" data-section="products">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              onClick={() => {
                if ((product as any).id) {
                  navigate(`/product/${(product as any).id}`);
                } else {
                  // Fallback: go to shop with category preselected if available
                  if ((product as any).category) {
                    sessionStorage.setItem('searchCategory', (product as any).category);
                  }
                  navigate('/shop');
                }
              }}
            />
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
          <button 
            onClick={handleViewAll}
            className="bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};
