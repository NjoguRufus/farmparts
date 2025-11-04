import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Map: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-16" data-section="map">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Location</h2>
          <p className="text-gray-600 text-lg">Find us at our head office in Nakuru</p>
        </div>

        {/* Map */}
        <div className="mb-8">
          <div className="rounded-xl overflow-hidden shadow-2xl bg-white" style={{ height: '500px' }}>
            <iframe
              src="https://www.google.com/maps?q=-0.2890826,36.0568974&hl=en&z=13&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Farmparts Ltd Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="space-y-6">
          {/* First Row: Head Office and Get In Touch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="text-[#D4A017]" size={28} />
                HEAD OFFICE NAKURU
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Farmparts Ltd</p>
                  <p>George Morara Avenue</p>
                  <p>P.O Box 7117 – 20100</p>
                  <p className="text-sm text-gray-500 mt-2">Nakuru, Kenya</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Phone className="text-[#D4A017] flex-shrink-0" size={20} />
                  <div className="text-gray-700">
                    <p>+254 727 817 817</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-[#D4A017] flex-shrink-0" size={20} />
                  <div className="text-gray-700">
                    <p>sales@farmpartsltd.com</p>
                    <p>salesfarmpartsltd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row: Business Hours and Nairobi Branch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#D4A017] to-[#B8880F] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Business Hours</h3>
              <div className="space-y-2 text-white/90">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">8:00 AM - 2:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-dashed border-gray-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <MapPin className="text-[#D4A017]" size={20} />
                NAIROBI BRANCH
              </h3>
              <p className="text-gray-600 italic text-lg">COMING SOON!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

