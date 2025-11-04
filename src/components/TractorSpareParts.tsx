import React from 'react';

const sections = [
  {
    title: 'Trusted Nairobi tractor spare parts supplier',
    description: 'Leading supplier of high-quality tractor spare parts and farm machinery components in Nairobi, our commitment to customer satisfaction and extensive product range makes us a reliable source for all agricultural equipment needs.',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    title: 'Tractor Spare Parts for Every Need',
    description: 'Our inventory includes genuine tractor spare parts from renowned manufacturers, ensuring smooth operation and finding the correct parts for routine maintenance or major repairs.',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
  {
    title: 'Reliable Spare Parts Supplier in Nairobi',
    description: 'We offer personalized assistance to farmers and commercial agricultural operations, utilizing an extensive network for parts and efficient service.',
    color: 'from-[#0A1A3F] to-[#1A2F5F]',
  },
  {
    title: 'Quality Assurance and Competitive Prices',
    description: 'We focus on sourcing high-quality spare parts from trusted manufacturers, ensuring longevity and reliability in farming machinery. We offer competitive prices, enabling farmers to focus on productivity and profitability.',
    color: 'from-[#6C757D] to-[#495057]',
  },
];

export const TractorSpareParts: React.FC = () => {
  const handleCardClick = (title: string) => {
    // Scroll to categories or products
    const categoriesSection = document.querySelector('[data-section="categories"]');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1A3F] mb-4">
            Tractor Spare Parts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(section.title)}
              className="group relative bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-bold text-[#0A1A3F] group-hover:text-white transition-colors duration-300">
                  {section.title}
                </h3>
                <p className="text-gray-700 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

