import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, ArrowLeftRight, User, Menu, X, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

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
              <div className="flex items-center gap-2">
                <img 
                  src="/Logos/farmparts logos/2.png" 
                  alt="Farmparts Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            <div className="flex-1 max-w-2xl hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by part number, brand or vehicle..."
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017] transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white p-2 rounded-lg hover:shadow-lg transition-all">
                  <Search size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="hidden lg:flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Heart size={20} />
                <span className="hidden xl:inline text-sm">Wishlist</span>
              </button>
              <button className="hidden lg:flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeftRight size={20} />
                <span className="hidden xl:inline text-sm">Compare</span>
              </button>
              <button className="hidden lg:flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                <User size={20} />
                <span className="hidden xl:inline text-sm">Account</span>
              </button>
              <button className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white rounded-lg hover:shadow-lg transition-all">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
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
                className="w-full px-4 py-2 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#D4A017] text-white p-1.5 rounded-lg">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>

        <nav className="bg-[#0A1A3F] text-white hidden lg:block">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center justify-center gap-8 py-2">
              <li>
                <a href="/" className="hover:text-[#D4A017] transition-colors font-semibold">
                  Home
                </a>
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
                <a href="/service" className="hover:text-[#D4A017] transition-colors font-semibold">
                  Car Service
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#D4A017] transition-colors font-semibold">
                  About
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-[#D4A017] transition-colors font-semibold">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#D4A017] transition-colors font-semibold">
                  Contact
                </a>
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
                    🚜 Tractor Parts
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Engine Components</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Transmission Parts</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Hydraulic Systems</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Electrical Parts</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Filters & Fluids</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1A3F] mb-4 flex items-center gap-2">
                    🚗 Vehicle Parts
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Brake Systems</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Suspension & Steering</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Engine Parts</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Cooling System</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Exhaust Systems</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1A3F] mb-4 flex items-center gap-2">
                    ⚙️ Power Tools
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Makita Tools</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Bosch Professional</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">STIHL Equipment</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Drills & Drivers</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Cutting Tools</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1A3F] mb-4 flex items-center gap-2">
                    🔧 Workshop Items
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Hand Tools</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Diagnostic Equipment</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Lubricants & Oils</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Safety Equipment</a></li>
                    <li><a href="#" className="hover:text-[#D4A017] transition-colors">Workshop Supplies</a></li>
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
                  <li><a href="/" className="block py-2 text-lg hover:text-[#D4A017]">Home</a></li>
                  <li><a href="/shop" className="block py-2 text-lg hover:text-[#D4A017]">Shop</a></li>
                  <li><a href="/service" className="block py-2 text-lg hover:text-[#D4A017]">Car Service</a></li>
                  <li><a href="/about" className="block py-2 text-lg hover:text-[#D4A017]">About</a></li>
                  <li><a href="/gallery" className="block py-2 text-lg hover:text-[#D4A017]">Gallery</a></li>
                  <li><a href="/contact" className="block py-2 text-lg hover:text-[#D4A017]">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
