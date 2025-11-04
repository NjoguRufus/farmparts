import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, Grid3x3, ShoppingCart } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const handleHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      sessionStorage.setItem('searchQuery', searchQuery);
      navigate('/shop');
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  const handleCategories = () => {
    navigate('/shop');
  };

  const handleCart = () => {
    navigate('/cart');
  };

  return (
    <>
      {showSearch && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowSearch(false)}>
          <div className="bg-white p-4 mt-20 mx-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017]"
                autoFocus
              />
              <button 
                onClick={handleSearch}
                className="bg-[#D4A017] text-white px-4 py-2 rounded-lg"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
        <div className="grid grid-cols-5 h-16">
          <button
            onClick={handleHome}
            className="flex flex-col items-center justify-center gap-1 text-[#0A1A3F] hover:bg-gray-50 transition-colors"
          >
            <Home size={22} />
            <span className="text-xs font-medium">Home</span>
          </button>

          <button
            onClick={handleSearchClick}
            className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-[#0A1A3F] hover:bg-gray-50 transition-colors"
          >
            <Search size={22} />
            <span className="text-xs font-medium">Search</span>
          </button>

          <button
            onClick={handleCategories}
            className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-[#0A1A3F] hover:bg-gray-50 transition-colors"
          >
            <Grid3x3 size={22} />
            <span className="text-xs font-medium">Categories</span>
          </button>

          <button
            onClick={handleCart}
            className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-[#0A1A3F] hover:bg-gray-50 transition-colors relative"
          >
            <ShoppingCart size={22} />
            <span className="text-xs font-medium">Cart</span>
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1/4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

        <a
          href="https://wa.me/254700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-white bg-[#0E5E2F] hover:bg-[#12773D] transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        </div>
      </nav>
    </>
  );
};
