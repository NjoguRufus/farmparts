import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Map: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Location</h2>
          <p className="text-gray-600 text-lg">Find us at our main store in Nairobi</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden shadow-2xl" style={{ height: '500px' }}>
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

          {/* Contact Information Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="text-[#D4A017]" size={28} />
                Our Location
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Farmparts Ltd</p>
                  <p>Industrial Area, Nairobi</p>
                  <p>P.O. Box 12345-00100</p>
                  <p className="text-sm text-gray-500 mt-2">Kenya</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Phone className="text-[#D4A017] flex-shrink-0" size={20} />
                  <div className="text-gray-700">
                    <p>+254 700 000 000</p>
                    <p>+254 20 123 4567</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-[#D4A017] flex-shrink-0" size={20} />
                  <div className="text-gray-700">
                    <p>info@farmparts.co.ke</p>
                    <p>sales@farmparts.co.ke</p>
                  </div>
                </div>
              </div>
            </div>

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

            <a
              href="https://www.google.com/maps/place/Farmparts+Ltd/@-0.289083,36.056897,13z/data=!4m6!3m5!1s0x18298d687b3361cd:0x3b26a3a9e0e52478!8m2!3d-0.2890826!4d36.0568974!16s%2Fg%2F1tl5cln5?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all text-center font-semibold text-gray-900 hover:text-[#D4A017] border-2 border-gray-200 hover:border-[#D4A017]"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

