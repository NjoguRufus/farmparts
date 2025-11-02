import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1A3F] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/Logos/farmparts logos/2.png" 
                alt="Farmparts Logo" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="font-bold text-xl">Farmparts</div>
                <div className="text-xs text-gray-400">Since 1979</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Kenya's most trusted supplier of genuine agricultural and automotive spare parts.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#D4A017] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#D4A017] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#D4A017] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#D4A017] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#D4A017]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-gray-400 hover:text-white transition-colors">
                  Shop Parts
                </a>
              </li>
              <li>
                <a href="/service" className="text-gray-400 hover:text-white transition-colors">
                  Car Service
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#D4A017]">Top Brands</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Makita Power Tools</li>
              <li>Bosch Professional</li>
              <li>Perkins Engine Parts</li>
              <li>Sparex Agricultural</li>
              <li>CNH Case IH Parts</li>
              <li>STIHL Equipment</li>
              <li>Federal-Mogul</li>
              <li>Castrol Lubricants</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#D4A017]">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={20} className="text-[#D4A017] flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <p className="font-semibold text-white mb-1">Main Store</p>
                  <p>Industrial Area, Nairobi</p>
                  <p>P.O. Box 12345-00100</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone size={20} className="text-[#D4A017] flex-shrink-0" />
                <div className="text-gray-400">
                  <p>+254 700 000 000</p>
                  <p>+254 20 123 4567</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail size={20} className="text-[#D4A017] flex-shrink-0" />
                <div className="text-gray-400">
                  <p>info@farmparts.co.ke</p>
                  <p>sales@farmparts.co.ke</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock size={20} className="text-[#D4A017] flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4A017]/30 pt-8 mb-8">
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-center">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 text-center mb-4">
              Get updates on new arrivals, special offers, and parts availability
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
              />
              <button className="bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Farmparts Limited. All rights reserved. | 45+ Years of Excellence Since 1979
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="/warranty" className="text-gray-400 hover:text-white transition-colors">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
