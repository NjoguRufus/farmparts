import React from 'react';
import { Award, Users, Package, Clock, Shield, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A1A3F] mb-4">About Us</h1>
            <h2 className="text-2xl font-bold text-[#D4A017] mb-6">Farmparts Limited</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Farmparts Ltd is a retail and wholesale Spare Parts Business established over 45 years ago and growing 
                from Strength to Strength with a good reputation for Genuine Agricultural and Motor Vehicle Spare Parts.
              </p>
              <p>
                Farmparts ltd has been awarded a TOP 100 company in Kenya for the years 2015/2016 2017/2018 2019/2020 
                2021/2022 as well as the "Best Spare Parts Dealer in Kenya 2024" and Agricultural Excellence Award. 
                We have a competitive advantage over other spare parts dealers as we are stockists For strong agency brands 
                such as CNH, Bosch, Perkins, Sparex, ATS England, Federal Mogul… to name a few.
              </p>
              <h3 className="text-xl font-bold text-[#0A1A3F] mt-6 mb-4">More about our company</h3>
              <p>
                Farmparts Ltd have established a good reputation for genuine spare parts and quality replacement parts as 
                the country is increasingly being flooded with counterfeit spare parts of poor quality. Customers have 
                reported more frequent break downs with these counterfeit spare parts which have led to more down time for 
                machinery and vehicles which is not affordable in any industry and hence our customer base has increased 
                and continues to increase as a result of this good reputation.
              </p>
              <p>
                Farmparts has a key, highly visible and sought after shop location along the George Morara highway which runs 
                through Nakuru Town. The other advantage of this location is we can service all our clients in the region 
                with quick reliable service without the down time that may be expected due to traffic delays etc that plague 
                retailers and consumers in the capital.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="aspect-video bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="https://farmpartsltd.com/wp-content/uploads/2023/03/Top-100-Logo2.png"
                alt="Top 100 Company Award"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0A1A3F] text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#D4A017] rounded-full flex items-center justify-center mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1A3F] mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We source only genuine, high-quality parts from trusted manufacturers to ensure reliability and longevity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#0E5E2F] rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1A3F] mb-2">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We provide personalized assistance and support for all your parts needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#0A1A3F] rounded-full flex items-center justify-center mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1A3F] mb-2">Excellence</h3>
              <p className="text-gray-600">
                Awarded "Best Automotive Spare Parts Dealer in Kenya 2024" - recognized for outstanding service quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#D4A017] rounded-full flex items-center justify-center mb-4">
                <Package className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1A3F] mb-2">Extensive Inventory</h3>
              <p className="text-gray-600">
                Over 5,000 parts in stock ready for immediate dispatch, minimizing equipment downtime.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#0E5E2F] rounded-full flex items-center justify-center mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1A3F] mb-2">Quick Sourcing</h3>
              <p className="text-gray-600">
                Our extensive network allows us to quickly source hard-to-find parts to minimize your downtime.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#0A1A3F] rounded-full flex items-center justify-center mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1A3F] mb-2">Authorized Dealer</h3>
              <p className="text-gray-600">
                Authorized distributor for leading manufacturers: Makita, Bosch, Perkins, Sparex, STIHL and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#0A1A3F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#D4A017] mb-2">45+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#D4A017] mb-2">5,000+</div>
              <div className="text-gray-300">Parts in Stock</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#D4A017] mb-2">10,000+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#D4A017] mb-2">99%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            To be the leading supplier of genuine agricultural and automotive spare parts in Kenya, 
            providing exceptional service, quality products, and competitive prices that enable farmers 
            and vehicle owners to maximize productivity and profitability.
          </p>
        </div>
      </div>
    </div>
  );
};

