import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const categories = [
  {
    title: 'New Holland Parts / Ford',
    icon: '🚜',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    title: 'FP Agri Tractors',
    icon: '🚜',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    title: 'CASE SPARE PARTS',
    icon: '🔧',
    color: 'from-[#0A1A3F] to-[#1A2F5F]',
  },
  {
    title: 'Cummins Spare Parts',
    icon: '⚙️',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
  {
    title: 'ACCESSORIES',
    icon: '🎁',
    color: 'from-[#6C757D] to-[#495057]',
  },
  {
    title: 'DIY TOOLS',
    icon: '🛠️',
    color: 'from-[#0A1A3F] to-[#1A2F5F]',
  },
  {
    title: 'FILTERS',
    icon: '💧',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    title: 'Plough Parts',
    icon: '🚜',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
  {
    title: 'Agco Spare Parts',
    icon: '🔧',
    color: 'from-[#6C757D] to-[#495057]',
  },
  {
    title: 'ATS England',
    icon: '🇬🇧',
    color: 'from-[#0A1A3F] to-[#1A2F5F]',
  },
  {
    title: 'Perkins Spare Parts',
    icon: '⚙️',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    title: 'Massey Ferguson Spare Parts',
    icon: '🚜',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
  {
    title: 'Bosch Spare Parts',
    icon: '🔌',
    color: 'from-[#6C757D] to-[#495057]',
  },
  {
    title: 'Bosch Power Tools',
    icon: '⚡',
    color: 'from-[#0A1A3F] to-[#1A2F5F]',
  },
  {
    title: 'Makita Power Tools',
    icon: '🔨',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    title: 'STIHL Tools',
    icon: '🪚',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
  {
    title: 'KARCHER POWER WASHER',
    icon: '💦',
    color: 'from-[#6C757D] to-[#495057]',
  },
  {
    title: 'Force Tools',
    icon: '🔧',
    color: 'from-[#0A1A3F] to-[#1A2F5F]',
  },
  {
    title: 'Sparex England',
    icon: '🇬🇧',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    title: 'John Deere Replacement Parts',
    icon: '🚜',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
  {
    title: 'Claas Spare Parts',
    icon: '🔧',
    color: 'from-[#6C757D] to-[#495057]',
  },
  {
    title: 'JCB Parts',
    icon: '🚜',
    color: 'from-[#0A1A3F] to-[#1A2F5F]',
  },
  {
    title: 'Deutz Spare Parts',
    icon: '⚙️',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    title: 'Agro Master',
    icon: '🚜',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
  {
    title: 'Toyota Car Parts: Genuine Spare Parts',
    icon: '🚗',
    color: 'from-[#6C757D] to-[#495057]',
  },
  {
    title: 'ISUZU SPARE PARTS',
    icon: '🚗',
    color: 'from-[#0A1A3F] to-[#1A2F5F]',
  },
  {
    title: 'Mitsubishi Parts',
    icon: '🚗',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    title: 'Nissan Spare Parts',
    icon: '🚗',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
  {
    title: 'Landrover Parts',
    icon: '🚗',
    color: 'from-[#6C757D] to-[#495057]',
  },
  {
    title: 'VW Spare Parts',
    icon: '🚗',
    color: 'from-[#0A1A3F] to-[#1A2F5F]',
  },
  {
    title: 'Mercedes Spare Parts',
    icon: '🚗',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    title: 'BMW SPARE PARTS',
    icon: '🚗',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
  {
    title: 'VOLVO SPARE PARTS',
    icon: '🚗',
    color: 'from-[#6C757D] to-[#495057]',
  },
  {
    title: 'Mahindra Bolero Parts',
    icon: '🚗',
    color: 'from-[#0A1A3F] to-[#1A2F5F]',
  },
  {
    title: 'CAR CARE PRODUCTS',
    icon: '✨',
    color: 'from-[#0E5E2F] to-[#12773D]',
  },
  {
    title: 'SECOND HAND FARM MACHINERY',
    icon: '🔄',
    color: 'from-[#D4A017] to-[#B8880F]',
  },
  {
    title: 'Farm Parts',
    icon: '🌾',
    color: 'from-[#6C757D] to-[#495057]',
  },
];

export const CategoryGrid: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const desktopScrollContainerRef = useRef<HTMLDivElement>(null);
  const desktopScrollContentRef = useRef<HTMLDivElement>(null);
  const mobileScrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollContentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleCategoryClick = (categoryTitle: string) => {
    // Store selected category and navigate to shop
    sessionStorage.setItem('searchCategory', categoryTitle);
    navigate('/shop');
  };

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayCategories = searchQuery ? filteredCategories : categories;

  // Auto-scroll functionality for desktop
  useEffect(() => {
    const container = desktopScrollContainerRef.current;
    const content = desktopScrollContentRef.current;
    
    if (!container || !content || displayCategories.length === 0) return;

    let autoScrollInterval: NodeJS.Timeout;
    let scrollTimeout: NodeJS.Timeout;
    let isUserScrolling = false;
    let lastScrollLeft = container.scrollLeft;

    // Auto-scroll function
    const autoScroll = () => {
      if (!isPaused && !isUserScrolling) {
        const maxScroll = content.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 5) {
          // Reset to beginning when reaching the end
          container.scrollLeft = 0;
        } else {
          // Smooth auto-scroll
          container.scrollLeft += 0.5;
        }
      }
    };

    // Handle user scrolling - detect when user manually scrolls
    const handleScroll = () => {
      const currentScrollLeft = container.scrollLeft;
      
      // If scroll position changed significantly, user is scrolling
      if (Math.abs(currentScrollLeft - lastScrollLeft) > 2) {
        setIsPaused(true);
        isUserScrolling = true;
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isUserScrolling = false;
          setIsPaused(false);
        }, 3000); // Resume auto-scroll 3 seconds after user stops scrolling
      }
      
      lastScrollLeft = currentScrollLeft;
    };

    const handleTouchStart = () => {
      setIsPaused(true);
      isUserScrolling = true;
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        isUserScrolling = false;
        setIsPaused(false);
      }, 1500);
    };

    // Start auto-scroll
    autoScrollInterval = setInterval(autoScroll, 16); // ~60fps

    // Handle mouse interactions for desktop
    const handleMouseEnter = () => {
      setIsPaused(true);
    };

    const handleMouseLeave = () => {
      setIsPaused(false);
    };

    // Event listeners
    container.addEventListener('scroll', handleScroll);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(autoScrollInterval);
      clearTimeout(scrollTimeout);
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [displayCategories, isPaused]);

  // Auto-scroll functionality for mobile
  useEffect(() => {
    const container = mobileScrollContainerRef.current;
    const content = mobileScrollContentRef.current;
    
    if (!container || !content || displayCategories.length === 0) return;

    let autoScrollInterval: NodeJS.Timeout;
    let scrollTimeout: NodeJS.Timeout;
    let isUserScrolling = false;
    let lastScrollLeft = container.scrollLeft;

    // Auto-scroll function
    const autoScroll = () => {
      if (!isPaused && !isUserScrolling) {
        const maxScroll = content.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 5) {
          // Reset to beginning when reaching the end
          container.scrollLeft = 0;
        } else {
          // Smooth auto-scroll
          container.scrollLeft += 0.5;
        }
      }
    };

    // Handle user scrolling - detect when user manually scrolls
    const handleScroll = () => {
      const currentScrollLeft = container.scrollLeft;
      
      // If scroll position changed significantly, user is scrolling
      if (Math.abs(currentScrollLeft - lastScrollLeft) > 2) {
        setIsPaused(true);
        isUserScrolling = true;
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isUserScrolling = false;
          setIsPaused(false);
        }, 3000); // Resume auto-scroll 3 seconds after user stops scrolling
      }
      
      lastScrollLeft = currentScrollLeft;
    };

    const handleTouchStart = () => {
      setIsPaused(true);
      isUserScrolling = true;
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        isUserScrolling = false;
        setIsPaused(false);
      }, 1500);
    };

    // Start auto-scroll
    autoScrollInterval = setInterval(autoScroll, 16); // ~60fps

    // Event listeners
    container.addEventListener('scroll', handleScroll);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      clearInterval(autoScrollInterval);
      clearTimeout(scrollTimeout);
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [displayCategories, isPaused]);

  return (
    <section className="py-16 bg-white" data-section="categories">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1A3F] mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Browse our extensive catalog of genuine parts and equipment
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4A017] transition-colors text-gray-900 placeholder-gray-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Desktop: Horizontal scrolling with auto-scroll */}
        {displayCategories.length > 0 ? (
          <div 
            ref={desktopScrollContainerRef}
            className="hidden lg:block overflow-x-auto scrollbar-hide touch-pan-x"
            style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}
          >
            <div 
              ref={desktopScrollContentRef}
              className="flex flex-nowrap justify-start items-center gap-3"
              style={{ width: 'max-content' }}
            >
              {[...displayCategories, ...displayCategories, ...displayCategories].map((category, index) => (
                <div
                  key={`${category.title}-${index}`}
                  onClick={() => handleCategoryClick(category.title)}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-gray-100 hover:border-transparent flex-shrink-0"
                  style={{ minWidth: '140px', flex: '0 0 auto' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                  <div className="relative p-4 flex flex-col items-center justify-center text-center space-y-2">
                    <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>

                    <h3 className="text-sm font-bold text-[#0A1A3F] group-hover:text-white transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="hidden lg:block text-center py-12">
            <p className="text-gray-500 text-lg">No categories found matching "{searchQuery}"</p>
          </div>
        )}

        {/* Mobile: Horizontal scrolling (manual scroll + auto scroll) */}
        {displayCategories.length > 0 ? (
          <div 
            ref={mobileScrollContainerRef}
            className="lg:hidden overflow-x-auto scrollbar-hide touch-pan-x"
            style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}
          >
            <div 
              ref={mobileScrollContentRef}
              className="flex gap-4" 
              style={{ width: 'max-content' }}
            >
              {[...displayCategories, ...displayCategories, ...displayCategories].map((category, index) => (
                <div
                  key={`${category.title}-${index}`}
                  onClick={() => handleCategoryClick(category.title)}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-gray-100 hover:border-transparent flex-shrink-0"
                  style={{ minWidth: '140px' }}
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
        ) : (
          <div className="lg:hidden text-center py-12">
            <p className="text-gray-500 text-lg">No Categories Found Matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </section>
  );
};
