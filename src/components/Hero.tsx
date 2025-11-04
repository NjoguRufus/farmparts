import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { Search, Wrench } from 'lucide-react';
import { BookServiceModal } from './BookServiceModal';
import { useNotification } from '../contexts/NotificationContext';
import { allProducts } from '../utils/products';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [showServiceModal, setShowServiceModal] = useState(false);
  const { showToast } = useNotification();

  const handleShopParts = () => {
    navigate('/shop');
  };

  const handleBookService = () => {
    setShowServiceModal(true);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const results = allProducts.filter((p) =>
        (!category || category === 'All Categories' || p.category === category) &&
        (
          p.title.toLowerCase().includes(query) ||
          (p.oemNumber || '').toLowerCase().includes(query) ||
          (p.brand || '').toLowerCase().includes(query) ||
          (p.subcategory || '').toLowerCase().includes(query)
        )
      );
      if (results.length > 0) {
        showToast(`${results.length} product${results.length > 1 ? 's' : ''} found`, 'success');
      } else {
        showToast('No products found. Try another term.', 'warning');
      }
      sessionStorage.setItem('searchQuery', searchQuery);
      sessionStorage.setItem('searchCategory', category);
      navigate('/shop');
    }
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0A1A3F] via-[#1A2F5F] to-[#0A1A3F] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🚜</div>
        <div className="absolute bottom-20 right-20 text-8xl">🚗</div>
        <div className="absolute top-1/2 left-1/3 text-7xl">⚙️</div>
        <div className="absolute bottom-10 left-1/4 text-6xl">🔧</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="bg-[#D4A017] text-white px-3 py-1.5 rounded-full text-xs lg:text-sm font-semibold">
                Since 1979 - Trusted Nationwide
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Genuine Agricultural and Automotive Parts
            </h1>
            <div className="flex flex-row gap-2 lg:gap-3 pt-2">
              <Button 
                variant="gold" 
                onClick={handleShopParts}
                className="text-xs sm:text-sm lg:text-lg px-3 py-2 sm:px-4 sm:py-2.5 lg:px-8 lg:py-4 flex-1 lg:flex-initial"
              >
                <Search className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                <span className="whitespace-nowrap">Shop Parts</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={handleBookService}
                className="text-xs sm:text-sm lg:text-lg px-3 py-2 sm:px-4 sm:py-2.5 lg:px-8 lg:py-4 flex-1 lg:flex-initial"
              >
                <Wrench className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                <span className="whitespace-nowrap">Book Car Service</span>
              </Button>
            </div>
            <div className="pt-6 border border-white/30 rounded-lg p-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-[#D4A017]">5000+</div>
                  <div className="text-xs lg:text-sm text-gray-400">Parts in Stock</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-[#D4A017]">45+</div>
                  <div className="text-xs lg:text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-[#D4A017]">100%</div>
                  <div className="text-xs lg:text-sm text-gray-400">Genuine Parts</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="bg-gray-100 rounded-lg p-2 lg:p-3 shadow-xl">
              <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://i.pinimg.com/736x/fd/2d/b2/fd2db204203b2ae81137e93318d6c2d7.jpg"
                  alt="Premium Parts"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-white/20 shadow-lg">
            <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
              <input
                type="text"
                placeholder="Enter part number, vehicle model, or machinery type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearchKeyPress}
                className="flex-1 px-4 py-2.5 lg:py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-sm lg:text-base"
              />
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-2.5 lg:py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-sm lg:text-base"
              >
                <option>All Categories</option>
                <option>New Holland Parts / Ford</option>
                <option>FP Agri Tractors</option>
                <option>CASE SPARE PARTS</option>
                <option>Cummins Spare Parts</option>
                <option>ACCESSORIES</option>
                <option>DIY TOOLS</option>
                <option>FILTERS</option>
                <option>Plough Parts</option>
                <option>Agco Spare Parts</option>
                <option>ATS England</option>
                <option>Perkins Spare Parts</option>
                <option>Massey Ferguson Spare Parts</option>
                <option>Bosch Spare Parts</option>
                <option>Bosch Power Tools</option>
                <option>Makita Power Tools</option>
                <option>STIHL Tools</option>
                <option>KARCHER POWER WASHER</option>
                <option>Force Tools</option>
                <option>Sparex England</option>
                <option>John Deere Replacement Parts</option>
                <option>Claas Spare Parts</option>
                <option>JCB Parts</option>
                <option>Deutz Spare Parts</option>
                <option>Agro Master</option>
                <option>Toyota Car Parts: Genuine Spare Parts</option>
                <option>ISUZU SPARE PARTS</option>
                <option>Mitsubishi Parts</option>
                <option>Nissan Spare Parts</option>
                <option>Landrover Parts</option>
                <option>VW Spare Parts</option>
                <option>Mercedes Spare Parts</option>
                <option>BMW SPARE PARTS</option>
                <option>VOLVO SPARE PARTS</option>
                <option>Mahindra Bolero Parts</option>
                <option>CAR CARE PRODUCTS</option>
                <option>SECOND HAND FARM MACHINERY</option>
                <option>Farm Parts</option>
              </select>
              <Button variant="gold" size="lg" onClick={handleSearch}>
                <Search size={18} />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      
      <BookServiceModal isOpen={showServiceModal} onClose={() => setShowServiceModal(false)} />
    </section>
  );
};
