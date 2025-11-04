import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, ArrowLeftRight, User, Menu, X, ChevronDown } from 'lucide-react';
import { useNotification } from '../contexts/NotificationContext';
import { Tractor } from 'lucide-react';
import { allProducts } from '../utils/products';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useNotification();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [compareCount, setCompareCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const updateCounts = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      const compare = JSON.parse(localStorage.getItem('compare') || '[]');
      setCartCount(cart.length);
      setWishlistCount(wishlist.length);
      setCompareCount(compare.length);
    };

    updateCounts();
    window.addEventListener('cartUpdated', updateCounts);
    window.addEventListener('wishlistUpdated', updateCounts);
    window.addEventListener('compareUpdated', updateCounts);

    return () => {
      window.removeEventListener('cartUpdated', updateCounts);
      window.removeEventListener('wishlistUpdated', updateCounts);
      window.removeEventListener('compareUpdated', updateCounts);
    };
  }, []);

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
    }
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleShopCategory = (category: string, subcategory?: string) => {
    sessionStorage.setItem('searchCategory', category);
    if (subcategory) {
      sessionStorage.setItem('searchSubcategory', subcategory);
    }
    navigate('/shop');
    setMegaMenuOpen(false);
  };

  const handleWishlistClick = () => {
    navigate('/wishlist');
  };

  const handleCompareClick = () => {
    const compare = JSON.parse(localStorage.getItem('compare') || '[]');
    if (compare.length > 0) {
      showToast(`${compare.length} product${compare.length > 1 ? 's' : ''} in compare list`, 'info');
    } else {
      showToast('No products to compare', 'warning');
    }
  };

  const handleAccountClick = () => {
    showToast('Account management coming soon!', 'info');
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="border-b border-gray-200 bg-[#0A1A3F] text-white py-1">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs">
            <div className="flex gap-6">
              <span>📞 +254 700 000 000</span>
              <span>📧 info@farmparts.co.ke</span>
            </div>
            <div className="hidden md:block">
              <span>45+ Years of Genuine Parts Excellence</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src="/Logos/farmparts logos/2.png" 
                  alt="Farmparts Logo" 
                  className="h-8 w-auto object-contain"
                />
              </Link>
            </div>

            <div className="flex-1 max-w-2xl hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by part number, brand or vehicle..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017] transition-colors"
                />
                <button 
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white p-2 rounded-lg hover:shadow-lg transition-all"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={handleWishlistClick}
                className="hidden lg:flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors relative"
                title="Wishlist"
              >
                <Heart size={20} />
                <span className="hidden xl:inline text-sm">Wishlist</span>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>
              <button 
                onClick={handleCompareClick}
                className="hidden lg:flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors relative"
                title="Compare"
              >
                <ArrowLeftRight size={20} />
                <span className="hidden xl:inline text-sm">Compare</span>
                {compareCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {compareCount}
                  </span>
                )}
              </button>
              <button 
                onClick={handleAccountClick}
                className="hidden lg:flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Account"
              >
                <User size={20} />
                <span className="hidden xl:inline text-sm">Account</span>
              </button>
              <button 
                onClick={handleCartClick}
                className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white rounded-lg hover:shadow-lg transition-all"
                title="Shopping Cart"
              >
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#0E5E2F] text-white rounded-lg hover:bg-[#12773D] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="md:hidden mt-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full px-4 py-2 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017]"
              />
              <button 
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#D4A017] text-white p-1.5 rounded-lg"
              >
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>

        <nav className="bg-[#0A1A3F] text-white hidden lg:block">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center justify-center gap-8 py-2">
              <li>
                <Link to="/" className="hover:text-[#D4A017] transition-colors font-semibold">
                  Home
                </Link>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button className="hover:text-[#D4A017] transition-colors font-semibold flex items-center gap-1">
                  Shop <ChevronDown size={16} />
                </button>
              </li>
              <li>
                <Link to="/service" className="hover:text-[#D4A017] transition-colors font-semibold">
                  Car Service
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4A017] transition-colors font-semibold">
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#D4A017] transition-colors font-semibold">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#D4A017] transition-colors font-semibold">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4A017] transition-colors font-semibold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {megaMenuOpen && (
          <div
            className="absolute left-0 right-0 bg-white shadow-2xl border-t hidden lg:block"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <h3 className="font-bold text-[#0A1A3F] mb-4 flex items-center gap-2">
                    <Tractor size={18} className="text-[#0A1A3F]" /> Tractor Parts
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><button onClick={() => handleShopCategory('Tractor Parts', 'Engine Components')} className="hover:text-[#D4A017] transition-colors text-left">Engine Components</button></li>
                    <li><button onClick={() => handleShopCategory('Tractor Parts', 'Transmission Parts')} className="hover:text-[#D4A017] transition-colors text-left">Transmission Parts</button></li>
                    <li><button onClick={() => handleShopCategory('Tractor Parts', 'Hydraulic Systems')} className="hover:text-[#D4A017] transition-colors text-left">Hydraulic Systems</button></li>
                    <li><button onClick={() => handleShopCategory('Tractor Parts', 'Electrical Parts')} className="hover:text-[#D4A017] transition-colors text-left">Electrical Parts</button></li>
                    <li><button onClick={() => handleShopCategory('Tractor Parts', 'Filters & Fluids')} className="hover:text-[#D4A017] transition-colors text-left">Filters & Fluids</button></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1A3F] mb-4 flex items-center gap-2">
                    🚗 Vehicle Parts
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><button onClick={() => handleShopCategory('Vehicle Parts', 'Brake Systems')} className="hover:text-[#D4A017] transition-colors text-left">Brake Systems</button></li>
                    <li><button onClick={() => handleShopCategory('Vehicle Parts', 'Suspension & Steering')} className="hover:text-[#D4A017] transition-colors text-left">Suspension & Steering</button></li>
                    <li><button onClick={() => handleShopCategory('Vehicle Parts', 'Engine Parts')} className="hover:text-[#D4A017] transition-colors text-left">Engine Parts</button></li>
                    <li><button onClick={() => handleShopCategory('Vehicle Parts', 'Cooling System')} className="hover:text-[#D4A017] transition-colors text-left">Cooling System</button></li>
                    <li><button onClick={() => handleShopCategory('Vehicle Parts', 'Exhaust Systems')} className="hover:text-[#D4A017] transition-colors text-left">Exhaust Systems</button></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1A3F] mb-4 flex items-center gap-2">
                    ⚙️ Power Tools
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><button onClick={() => handleShopCategory('Power Tools', 'Makita Tools')} className="hover:text-[#D4A017] transition-colors text-left">Makita Tools</button></li>
                    <li><button onClick={() => handleShopCategory('Power Tools', 'Bosch Professional')} className="hover:text-[#D4A017] transition-colors text-left">Bosch Professional</button></li>
                    <li><button onClick={() => handleShopCategory('Power Tools', 'STIHL Equipment')} className="hover:text-[#D4A017] transition-colors text-left">STIHL Equipment</button></li>
                    <li><button onClick={() => handleShopCategory('Power Tools', 'Drills & Drivers')} className="hover:text-[#D4A017] transition-colors text-left">Drills & Drivers</button></li>
                    <li><button onClick={() => handleShopCategory('Power Tools', 'Cutting Tools')} className="hover:text-[#D4A017] transition-colors text-left">Cutting Tools</button></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1A3F] mb-4 flex items-center gap-2">
                    🔧 Workshop Items
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><button onClick={() => handleShopCategory('Workshop Items', 'Hand Tools')} className="hover:text-[#D4A017] transition-colors text-left">Hand Tools</button></li>
                    <li><button onClick={() => handleShopCategory('Workshop Items', 'Diagnostic Equipment')} className="hover:text-[#D4A017] transition-colors text-left">Diagnostic Equipment</button></li>
                    <li><button onClick={() => handleShopCategory('Workshop Items', 'Lubricants & Oils')} className="hover:text-[#D4A017] transition-colors text-left">Lubricants & Oils</button></li>
                    <li><button onClick={() => handleShopCategory('Workshop Items', 'Safety Equipment')} className="hover:text-[#D4A017] transition-colors text-left">Safety Equipment</button></li>
                    <li><button onClick={() => handleShopCategory('Workshop Items', 'Workshop Supplies')} className="hover:text-[#D4A017] transition-colors text-left">Workshop Supplies</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="bg-white w-80 h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#0A1A3F]">Menu</h2>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <nav>
                <ul className="space-y-4">
                  <li><Link to="/" className="block py-2 text-lg hover:text-[#D4A017]" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                  <li><Link to="/shop" className="block py-2 text-lg hover:text-[#D4A017]" onClick={() => setMobileMenuOpen(false)}>Shop</Link></li>
                  <li><Link to="/service" className="block py-2 text-lg hover:text-[#D4A017]" onClick={() => setMobileMenuOpen(false)}>Car Service</Link></li>
                  <li><Link to="/about" className="block py-2 text-lg hover:text-[#D4A017]" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
                  <li><Link to="/gallery" className="block py-2 text-lg hover:text-[#D4A017]" onClick={() => setMobileMenuOpen(false)}>Gallery</Link></li>
                  <li><Link to="/blog" className="block py-2 text-lg hover:text-[#D4A017]" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
                  <li><Link to="/contact" className="block py-2 text-lg hover:text-[#D4A017]" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
