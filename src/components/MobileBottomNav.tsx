import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, Grid3x3, ShoppingCart, X, ChevronDown, ChevronRight, Heart } from 'lucide-react';
import { allProducts } from '../utils/products';
import { useNotification } from '../contexts/NotificationContext';

export const MobileBottomNav: React.FC = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [categoryQuery, setCategoryQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const { showToast } = useNotification();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.length);
    };
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setWishlistCount(wishlist.length);
    };

    updateCartCount();
    updateWishlistCount();
    window.addEventListener('cartUpdated', updateCartCount);
    window.addEventListener('wishlistUpdated', updateWishlistCount);

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
      window.removeEventListener('wishlistUpdated', updateWishlistCount);
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
      const q = searchQuery.toLowerCase();
      const matches = allProducts.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        (p.oemNumber || '').toLowerCase().includes(q) ||
        (p.brand || '').toLowerCase().includes(q) ||
        (p.category || '').toLowerCase().includes(q) ||
        (p.subcategory || '').toLowerCase().includes(q)
      );
      showToast(matches.length ? `${matches.length} product${matches.length>1?'s':''} found` : 'No products found', matches.length ? 'success' : 'warning');
      sessionStorage.setItem('searchQuery', searchQuery);
      navigate('/shop');
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  const handleCategories = () => {
    setShowCategories((prev) => {
      const next = !prev;
      if (next) {
        window.dispatchEvent(new CustomEvent('sidebarOpen', { detail: 'categories' }));
      } else {
        window.dispatchEvent(new CustomEvent('sidebarClose'));
      }
      return next;
    });
  };

  const handleCart = () => {
    navigate('/cart');
  };
  const handleWishlist = () => {
    navigate('/wishlist');
  };

  // Close this sidebar when the hamburger menu opens
  useEffect(() => {
    const handleSidebarOpen = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === 'menu') setShowCategories(false);
    };
    window.addEventListener('sidebarOpen', handleSidebarOpen as EventListener);
    return () => window.removeEventListener('sidebarOpen', handleSidebarOpen as EventListener);
  }, []);

  return (
    <>
      {/* Categories Sidebar (Mobile) */}
      {showCategories && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => { setShowCategories(false); window.dispatchEvent(new CustomEvent('sidebarClose')); }}>
          <div className="bg-white w-72 h-full overflow-y-auto shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
              <h3 className="text-lg font-bold text-[#0A1A3F]">Categories</h3>
              <button onClick={() => { setShowCategories(false); window.dispatchEvent(new CustomEvent('sidebarClose')); }} className="p-1 rounded hover:bg-gray-100">
                <X size={22} />
              </button>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={categoryQuery}
                  onChange={(e) => setCategoryQuery(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017]"
                />
              </div>

              {/* Derived data */}
              {(() => {
                const categoryToProducts: Record<string, typeof allProducts> = allProducts.reduce((acc, p) => {
                  const key = p.category || 'Other';
                  if (!acc[key]) acc[key] = [] as any;
                  acc[key].push(p);
                  return acc;
                }, {} as Record<string, typeof allProducts>);

                const categoryNames = Object.keys(categoryToProducts).sort((a, b) => a.localeCompare(b));
                const filteredNames = categoryQuery
                  ? categoryNames.filter((name) => name.toLowerCase().includes(categoryQuery.toLowerCase()))
                  : categoryNames;

                const handleGoToCategory = (name: string) => {
                  sessionStorage.setItem('searchCategory', name);
                  setShowCategories(false);
                  navigate('/shop');
                };

                return (
                  <ul className="divide-y divide-gray-100">
                    {filteredNames.map((name) => {
                      const products = categoryToProducts[name] || [];
                      const isOpen = expandedCategory === name;
                      return (
                        <li key={name} className="py-2">
                          <button
                            onClick={() => setExpandedCategory(isOpen ? null : name)}
                            className="w-full flex items-center justify-between text-left px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                          >
                            <span className="text-sm font-medium text-[#0A1A3F] line-clamp-1">{name}</span>
                            <span className="flex items-center gap-2 text-xs text-gray-500">
                              <span>{products.length}</span>
                              {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </span>
                          </button>

                          {isOpen && (
                            <div className="mt-2 ml-1">
                              <button
                                onClick={() => handleGoToCategory(name)}
                                className="mb-2 text-xs text-[#D4A017] hover:underline"
                              >
                                View all in {name}
                              </button>
                              <ul className="max-h-64 overflow-auto pr-2 space-y-1">
                                {products.slice(0, 25).map((p) => (
                                  <li key={p.id}>
                                    <button
                                      onClick={() => {
                                        setShowCategories(false);
                                        navigate(`/product/${p.id}`);
                                      }}
                                      className="w-full text-left text-sm px-2 py-1 rounded border border-gray-100 hover:bg-gray-50 line-clamp-1"
                                      title={p.title}
                                    >
                                      {p.title}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                );
              })()}
            </div>
          </div>
        </div>
      )}
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
            onClick={handleWishlist}
            className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-[#0A1A3F] hover:bg-gray-50 transition-colors relative"
          >
            <Heart size={22} />
            <span className="text-xs font-medium">Wishlist</span>
            {wishlistCount > 0 && (
              <span className="absolute top-1.5 right-1/4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
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
