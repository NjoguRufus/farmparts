import React, { useState } from 'react';
import { Map, Phone, Mail, Clock, Send } from 'lucide-react';
import { Map as MapComponent } from '../components/Map';
import { useNotification } from '../contexts/NotificationContext';

export const Contact: React.FC = () => {
  const { showToast } = useNotification();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save contact form to localStorage
    const contacts = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    contacts.push({
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem('contactMessages', JSON.stringify(contacts));
    
    showToast('Thank you for your message! We will get back to you shortly.', 'success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#D4A017] rounded-full flex items-center justify-center mx-auto mb-4">
              <Map className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-[#0A1A3F] mb-2">HEAD OFFICE NAKURU</h3>
            <p className="text-gray-600 text-sm">
              George Morara Avenue<br />
              P.O Box 7117 – 20100<br />
              Nakuru, Kenya
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#0E5E2F] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-[#0A1A3F] mb-2">TEL</h3>
            <p className="text-gray-600 text-sm">
              <a href="tel:+254727817817" className="hover:text-[#D4A017] transition-colors">
                +254 727 817 817
              </a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#0A1A3F] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-[#0A1A3F] mb-2">EMAIL</h3>
            <p className="text-gray-600 text-sm">
              <a href="mailto:sales@farmpartsltd.com" className="hover:text-[#D4A017] transition-colors block mb-1">
                sales@farmpartsltd.com
              </a>
              <a href="mailto:salesfarmpartsltd@gmail.com" className="hover:text-[#D4A017] transition-colors block">
                salesfarmpartsltd@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#D4A017] rounded-full flex items-center justify-center mx-auto mb-4">
              <Map className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-[#0A1A3F] mb-2">NAIROBI BRANCH</h3>
            <p className="text-gray-600 text-sm italic">
              COMING SOON!
            </p>
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#0A1A3F] mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017]"
                  placeholder="+254 727 817 817"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017]"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="parts">Parts Inquiry</option>
                  <option value="service">Service Booking</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017]"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white rounded-lg hover:shadow-lg transition-all font-semibold flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

