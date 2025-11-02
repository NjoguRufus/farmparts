import React from 'react';

const categories = [
  {
    title: 'Tractor Parts',
    icon: '🚜',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    title: 'Vehicle Parts',
    icon: '🚗',
    color: 'from-[#0A1A3F] to-[#1A2F5F]',
  },
  {
    title: 'Power Tools',
    icon: '⚙️',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
  {
    title: 'Engine Components',
    icon: '🔧',
    color: 'from-[#6C757D] to-[#495057]',
  },
  {
    title: 'Filters & Fluids',
    icon: '💧',
    color: 'from-[#0A1A3F] to-[#1A2F5F]',
  },
  {
    title: 'Hydraulic Systems',
    icon: '⚡',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    title: 'Electrical Parts',
    icon: '🔌',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
  {
    title: 'Workshop Tools',
    icon: '🛠️',
    color: 'from-[#6C757D] to-[#495057]',
  },
];

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1A3F] mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Browse our extensive catalog of genuine parts and equipment
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-gray-100 hover:border-transparent"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative p-6 flex flex-col items-center justify-center text-center space-y-3">
                <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>

                <h3 className="text-base font-bold text-[#0A1A3F] group-hover:text-white transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
