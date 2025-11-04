import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { BookServiceModal } from '../components/BookServiceModal';

export const CarService: React.FC = () => {
  const [showServiceModal, setShowServiceModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Car Service Section */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1A3F] mb-4">About Car Service</h1>
          <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
            <p>
              Farmparts Ltd has an in-house Car Services Centre where we provide Premium Car Services with Genuine and 
              Quality Parts at Wholesale Outlet Prices.
            </p>
          </div>

          <div className="bg-white border-l-4 border-[#D4A017] p-6 mb-8">
            <h2 className="text-xl font-bold text-[#0A1A3F] mb-4">Our Services:</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#D4A017] mt-1">–</span>
                <span>Oil Service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4A017] mt-1">–</span>
                <span>Brake Service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4A017] mt-1">–</span>
                <span>Suspension Service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4A017] mt-1">–</span>
                <span>3D Wheel Alignment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4A017] mt-1">–</span>
                <span>Comprehensive Car Inspection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4A017] mt-1">–</span>
                <span>Battery Check</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#0E5E2F] text-white p-6 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-2">Want Guaranteed Parts and Service?</h3>
            <p className="mb-4">Call our Farmparts Ltd Car Service Centre today</p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={20} />
                <a href="tel:+254727817817" className="hover:text-[#D4A017] transition-colors">
                  Tel: 0727 817 817
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={20} />
                <a href="mailto:servicefarmpartsltd@gmail.com" className="hover:text-[#D4A017] transition-colors">
                  Email: servicefarmpartsltd@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <button
              onClick={() => setShowServiceModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
            >
              Book Your Service Now
            </button>
          </div>
        </div>

        {/* Bosch Tools Kenya Section */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-[#0A1A3F] mb-6">Bosch Tools Kenya</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#0A1A3F] mb-2">
                Where can I get a replacement part for my Bosch Tools in Kenya?
              </h3>
              <p className="text-gray-700">
                Please see our Spare Parts Catalogue online. Here you can see the exploded schematics and part information 
                for our tools. Type the product model or bare tool number in the catalog search area. You can find the model 
                number on the nameplate of the product.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0A1A3F] mb-2">
                How can I get a copy of the Bosch Use and Care Manuals for my power tools?
              </h3>
              <p className="text-gray-700">
                You can download the manuals directly from our website or contact us for assistance with specific tool manuals.
              </p>
            </div>
          </div>
        </div>
      </div>


      <BookServiceModal isOpen={showServiceModal} onClose={() => setShowServiceModal(false)} />
    </div>
  );
};

