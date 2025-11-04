import React, { useState } from 'react';
import { X } from 'lucide-react';

// Sample gallery images - in a real app, these would be actual image URLs
const galleryImages = [
  { id: 1, category: 'Showroom', title: 'Main Showroom', description: 'Our spacious showroom with extensive parts display' },
  { id: 2, category: 'Workshop', title: 'Service Center', description: 'State-of-the-art service and repair facility' },
  { id: 3, category: 'Products', title: 'Tractor Parts', description: 'Genuine tractor spare parts inventory' },
  { id: 4, category: 'Products', title: 'Vehicle Parts', description: 'Comprehensive vehicle parts collection' },
  { id: 5, category: 'Awards', title: 'Awards Display', description: 'Recognitions and certifications' },
  { id: 6, category: 'Team', title: 'Expert Team', description: 'Our dedicated parts specialists' },
  { id: 7, category: 'Showroom', title: 'Power Tools Section', description: 'Makita, Bosch, and STIHL tools' },
  { id: 8, category: 'Workshop', title: 'Workshop Equipment', description: 'Professional diagnostic tools' },
  { id: 9, category: 'Products', title: 'Filters & Fluids', description: 'Wide range of filters and lubricants' },
  { id: 10, category: 'Awards', title: 'Top 100 Automotive Award', description: 'Best Automotive Spare Parts Dealer 2024' },
  { id: 11, category: 'Team', title: 'Customer Service', description: 'Dedicated support team' },
  { id: 12, category: 'Showroom', title: 'Brand Display', description: 'Authorized dealer products' },
];

const categories = ['All', 'Showroom', 'Workshop', 'Products', 'Awards', 'Team'];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-[#D4A017] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="relative group cursor-pointer bg-gray-100 rounded-lg overflow-hidden aspect-square"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-sm">{image.title}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold mb-1">{image.title}</h3>
                  <p className="text-xs text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No images found in this category</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded flex items-center justify-center mb-4">
                <span className="text-gray-400">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </span>
              </div>
              <div className="text-white text-center">
                <h3 className="text-xl font-bold mb-2">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </h3>
                <p className="text-gray-300">
                  {galleryImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

