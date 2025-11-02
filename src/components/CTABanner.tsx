import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export const CTABanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0A1A3F] via-[#1A2F5F] to-[#0A1A3F] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 text-9xl">⚙️</div>
        <div className="absolute bottom-10 right-20 text-8xl">🔧</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Looking for Genuine Spare Parts?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 mb-2">
            We Deliver Quality You Can Trust
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Over 45 years of expertise in agricultural and automotive parts. Fast delivery across Kenya.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <a
            href="tel:+254700000000"
            className="group bg-[#D4A017] hover:bg-[#B8880F] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Phone size={24} />
            <div className="text-left">
              <div className="text-xs opacity-90">Call Us Now</div>
              <div className="text-lg">+254 700 000 000</div>
            </div>
          </a>

          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0E5E2F] hover:bg-[#12773D] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-90">WhatsApp Us</div>
              <div className="text-lg">Quick Order</div>
            </div>
          </a>

          <a
            href="/contact"
            className="group bg-white text-[#0A1A3F] px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <MapPin size={24} />
            <div className="text-left">
              <div className="text-xs opacity-70">Visit Our Store</div>
              <div className="text-lg">Get Directions</div>
            </div>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl mb-2">🚚</div>
            <h3 className="font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-300 text-sm">
              Same-day delivery in Nairobi. Nationwide shipping available.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl mb-2">💳</div>
            <h3 className="font-bold mb-2">Flexible Payment</h3>
            <p className="text-gray-300 text-sm">
              Cash, M-Pesa, bank transfer, and credit terms available.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl mb-2">🔧</div>
            <h3 className="font-bold mb-2">Expert Support</h3>
            <p className="text-gray-300 text-sm">
              Technical advice and installation support from our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
