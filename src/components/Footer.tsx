import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useNotification } from '../contexts/NotificationContext';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { showToast } = useNotification();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Store subscription (in a real app, this would send to a server)
      const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions') || '[]');
      if (!subscriptions.includes(email)) {
        subscriptions.push(email);
        localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
        showToast('Thank you for subscribing to our newsletter!', 'success');
        setEmail('');
      } else {
        showToast('This email is already subscribed!', 'warning');
      }
    }
  };

  return (
    <footer className="bg-[#0A1A3F] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/Logos/farmparts logos/1.png" 
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
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
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
                  <p className="font-semibold text-white mb-1">HEAD OFFICE NAKURU</p>
                  <p>George Morara Avenue</p>
                  <p>P.O Box 7117 – 20100</p>
                  <p className="text-sm mt-1">Nakuru, Kenya</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone size={20} className="text-[#D4A017] flex-shrink-0" />
                <div className="text-gray-400">
                  <p>+254 727 817 817</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail size={20} className="text-[#D4A017] flex-shrink-0" />
                <div className="text-gray-400">
                  <p>sales@farmpartsltd.com</p>
                  <p>salesfarmpartsltd@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={20} className="text-[#D4A017] flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <p className="font-semibold text-white mb-1">NAIROBI BRANCH</p>
                  <p className="text-sm italic">COMING SOON!</p>
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
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
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
