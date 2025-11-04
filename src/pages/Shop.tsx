import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { Search, Filter, X } from 'lucide-react';
import { allProducts } from '../utils/products';
import { useNotification } from '../contexts/NotificationContext';

const categories = [
  'All Categories',
  'New Holland Parts / Ford',
  'FP Agri Tractors',
  'CASE SPARE PARTS',
  'Cummins Spare Parts',
  'ACCESSORIES',
  'DIY TOOLS',
  'FILTERS',
  'Plough Parts',
  'Agco Spare Parts',
  'ATS England',
  'Perkins Spare Parts',
  'Massey Ferguson Spare Parts',
  'Bosch Spare Parts',
  'Bosch Power Tools',
  'Makita Power Tools',
  'STIHL Tools',
  'KARCHER POWER WASHER',
  'Force Tools',
  'Sparex England',
  'John Deere Replacement Parts',
  'Claas Spare Parts',
  'JCB Parts',
  'Deutz Spare Parts',
  'Agro Master',
  'Toyota Car Parts: Genuine Spare Parts',
  'ISUZU SPARE PARTS',
  'Mitsubishi Parts',
  'Nissan Spare Parts',
  'Landrover Parts',
  'VW Spare Parts',
  'Mercedes Spare Parts',
  'BMW SPARE PARTS',
  'VOLVO SPARE PARTS',
  'Mahindra Bolero Parts',
  'CAR CARE PRODUCTS',
  'SECOND HAND FARM MACHINERY',
  'Farm Parts',
];

const subcategories: Record<string, string[]> = {
  'Tractor Parts': ['Engine Components', 'Transmission Parts', 'Hydraulic Systems', 'Electrical Parts', 'Filters & Fluids'],
  'Vehicle Parts': ['Brake Systems', 'Suspension & Steering', 'Engine Parts', 'Cooling System', 'Exhaust Systems'],
  'Power Tools': ['Makita Tools', 'Bosch Professional', 'STIHL Equipment', 'Drills & Drivers', 'Cutting Tools'],
  'Workshop Items': ['Hand Tools', 'Diagnostic Equipment', 'Lubricants & Oils', 'Safety Equipment', 'Workshop Supplies'],
};

export const Shop: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All Subcategories');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const { showToast } = useNotification();

  useEffect(() => {
    // Check for search query from sessionStorage
    const savedQuery = sessionStorage.getItem('searchQuery');
    const savedCategory = sessionStorage.getItem('searchCategory');
    const savedSubcategory = sessionStorage.getItem('searchSubcategory');
    const savedBrand = sessionStorage.getItem('searchBrand');
    
    if (savedQuery) {
      setSearchQuery(savedQuery);
      sessionStorage.removeItem('searchQuery');
    }
    if (savedCategory && savedCategory !== 'All Categories') {
      setSelectedCategory(savedCategory);
      sessionStorage.removeItem('searchCategory');
    }
    if (savedSubcategory) {
      setSelectedSubcategory(savedSubcategory);
      sessionStorage.removeItem('searchSubcategory');
    }
    if (savedBrand) {
      setSelectedBrand(savedBrand);
      sessionStorage.removeItem('searchBrand');
    }
  }, []);

  useEffect(() => {
    let filtered = allProducts;

    // Filter by brand
    if (selectedBrand) {
      filtered = filtered.filter(p => {
        // Map brand names to match product brands
        const brandMap: Record<string, string[]> = {
          'Baldwin': ['Baldwin'],
          'Bosch': ['Bosch'],
          'Deutz': ['Deutz'],
          'Ford': ['Ford'],
          'Heyco': ['Heyco'],
          'Isuzu': ['Isuzu'],
          'Massey Ferguson': ['Massey Ferguson'],
          'SAME': ['SAME'],
          'Makita': ['Makita'],
          'STIHL': ['STIHL'],
          'Castrol': ['Castrol'],
          'Champion': ['Champion', 'Federal-Mogul'],
          'Case IH': ['Case IH', 'CNH'],
          'Sparex': ['Sparex'],
          'Perkins': ['Perkins'],
        };
        
        const matchingBrands = brandMap[selectedBrand] || [selectedBrand];
        return p.brand && matchingBrands.some(b => p.brand?.includes(b));
      });
    }

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by subcategory
    if (selectedSubcategory !== 'All Subcategories') {
      filtered = filtered.filter(p => p.subcategory === selectedSubcategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.oemNumber?.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.subcategory.toLowerCase().includes(query) ||
        p.brand?.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, selectedSubcategory, selectedBrand]);

  const availableSubcategories = selectedCategory !== 'All Categories' 
    ? subcategories[selectedCategory] || []
    : [];

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by part number, brand, or vehicle..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    showToast(
                      filteredProducts.length
                        ? `${filteredProducts.length} product${filteredProducts.length>1?'s':''} found`
                        : 'No products found',
                      filteredProducts.length ? 'success' : 'warning'
                    );
                  }
                }}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017]"
              />
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedSubcategory('All Subcategories');
                }}
                className="w-full min-w-0 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017]"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {availableSubcategories.length > 0 && (
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="w-full min-w-0 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017]"
                >
                  <option>All Subcategories</option>
                  {availableSubcategories.map(subcat => (
                    <option key={subcat} value={subcat}>{subcat}</option>
                  ))}
                </select>
              )}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden w-full sm:w-auto px-4 py-3 bg-[#0A1A3F] text-white rounded-lg flex items-center justify-center gap-2"
              >
                <Filter size={20} />
                Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex gap-8">
          {/* Filters Sidebar (Desktop) */}
          <div className={`hidden md:block w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Filters</h3>
                <button onClick={() => {
                  setSelectedCategory('All Categories');
                  setSelectedSubcategory('All Subcategories');
                  setSelectedBrand(null);
                  setSearchQuery('');
                }} className="text-sm text-[#D4A017] hover:underline">
                  Clear All
                </button>
              </div>
              
              {selectedBrand && (
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-800">
                      <strong>Brand:</strong> {selectedBrand}
                    </span>
                    <button
                      onClick={() => setSelectedBrand(null)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setSelectedSubcategory('All Subcategories');
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A017]"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {availableSubcategories.length > 0 && (
                  <div>
                    <label className="block text-sm font-semibold mb-2">Subcategory</label>
                    <select
                      value={selectedSubcategory}
                      onChange={(e) => setSelectedSubcategory(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A017]"
                    >
                      <option>All Subcategories</option>
                      {availableSubcategories.map(subcat => (
                        <option key={subcat} value={subcat}>{subcat}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} onClick={() => navigate(`/product/${product.id}`)} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-xl text-gray-600 mb-4">No products found</p>
                <p className="text-gray-500">Try adjusting your search or filters</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Categories');
                    setSelectedSubcategory('All Subcategories');
                    setSelectedBrand(null);
                  }}
                  className="mt-4 px-6 py-2 bg-[#D4A017] text-white rounded-lg hover:bg-[#B8880F] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={() => setShowFilters(false)}>
          <div className="bg-white h-full w-80 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setSelectedSubcategory('All Subcategories');
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                {availableSubcategories.length > 0 && (
                  <div>
                    <label className="block text-sm font-semibold mb-2">Subcategory</label>
                    <select
                      value={selectedSubcategory}
                      onChange={(e) => setSelectedSubcategory(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    >
                      <option>All Subcategories</option>
                      {availableSubcategories.map(subcat => (
                        <option key={subcat} value={subcat}>{subcat}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
              {selectedBrand && (
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-800">
                      <strong>Brand:</strong> {selectedBrand}
                    </span>
                    <button
                      onClick={() => setSelectedBrand(null)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              )}
              <button
                onClick={() => {
                  setSelectedCategory('All Categories');
                  setSelectedSubcategory('All Subcategories');
                  setSelectedBrand(null);
                  setSearchQuery('');
                  setShowFilters(false);
                }}
                className="mt-6 w-full px-4 py-2 bg-[#0A1A3F] text-white rounded-lg"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

