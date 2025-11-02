import React from 'react';
import { Package, Shield, Users, Zap, Award, ShoppingCart } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Extensive Range',
    description: 'Extensive range of tractor spare parts and farm machinery components',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    icon: Shield,
    title: 'Genuine Quality',
    description: 'Genuine and high-quality products from trusted manufacturers',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Dedicated team of experts providing personalized assistance',
    color: 'from-[#0A1A3F] to-[#1A2F5F]',
  },
  {
    icon: Zap,
    title: 'Quick Sourcing',
    description: 'Quick sourcing of hard-to-find parts to minimize equipment downtime',
    color: 'from-[#6C757D] to-[#495057]',
  },
  {
    icon: Award,
    title: 'Quality & Value',
    description: 'Commitment to quality assurance and competitive prices',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    icon: ShoppingCart,
    title: 'Easy Access',
    description: 'efficient operation through our online catalogue or contact team',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1A3F] mb-4">
            Why Choose Farmparts Limited?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-2 bg-gray-100 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-[#0A1A3F] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 group-hover:text-white/90 transition-colors duration-300 leading-snug flex-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
