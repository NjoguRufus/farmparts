import React from 'react';
import { Button } from './Button';
import { Search, Wrench } from 'lucide-react';

export const Hero: React.FC = () => {
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
              <Button variant="gold" className="text-xs sm:text-sm lg:text-lg px-3 py-2 sm:px-4 sm:py-2.5 lg:px-8 lg:py-4 flex-1 lg:flex-initial">
                <Search className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                <span className="whitespace-nowrap">Shop Parts</span>
              </Button>
              <Button variant="outline" className="text-xs sm:text-sm lg:text-lg px-3 py-2 sm:px-4 sm:py-2.5 lg:px-8 lg:py-4 flex-1 lg:flex-initial">
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
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-[#D4A017]/20 to-transparent rounded-xl flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="text-6xl">🔧</div>
                  <p className="text-lg font-semibold">Premium Parts</p>
                  <p className="text-gray-300 text-sm">For All Your Machinery</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#D4A017] text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-center text-xs shadow-xl">
                Award Winning Dealer
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-white/20">
            <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
              <input
                type="text"
                placeholder="Enter part number, vehicle model, or machinery type..."
                className="flex-1 px-4 py-2.5 lg:py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-sm lg:text-base"
              />
              <select className="px-4 py-2.5 lg:py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-sm lg:text-base">
                <option>All Categories</option>
                <option>Tractor Parts</option>
                <option>Vehicle Parts</option>
                <option>Power Tools</option>
                <option>Engine Components</option>
              </select>
              <Button variant="gold" size="lg">
                <Search size={18} />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
