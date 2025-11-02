import React from 'react';
import { ShoppingCart, Heart, ArrowLeftRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  inStock: boolean;
  oemNumber?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  inStock,
  oemNumber,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden bg-gray-100">
        <div className="aspect-square flex items-center justify-center p-6">
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            {image}
          </div>
        </div>
        {inStock ? (
          <span className="absolute top-3 right-3 bg-[#0E5E2F] text-white text-xs font-semibold px-3 py-1 rounded-full">
            In Stock
          </span>
        ) : (
          <span className="absolute top-3 right-3 bg-gray-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            On Order
          </span>
        )}
        <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-[#D4A017] hover:text-white transition-colors">
            <Heart size={18} />
          </button>
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-[#D4A017] hover:text-white transition-colors">
            <ArrowLeftRight size={18} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#2A2A2A] mb-1 line-clamp-2 min-h-[3rem]">
          {title}
        </h3>
        {oemNumber && (
          <p className="text-xs text-gray-500 mb-2">OEM: {oemNumber}</p>
        )}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-[#0A1A3F]">{price}</span>
          <button className="bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
