import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useNotification } from '../contexts/NotificationContext';
import { useConfirm } from '../hooks/useConfirm';
import { allProducts } from '../utils/products';
import { getProductImage } from '../utils/imageMapper';

interface WishlistItem {
  title: string;
  price: string;
  oemNumber?: string;
  image?: string;
  inStock?: boolean;
}

export const Wishlist: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useNotification();
  const { confirm, ConfirmDialog } = useConfirm();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    // Backfill missing images from catalog or generate from mapper
    const withImages = wishlist.map((item: WishlistItem) => {
      if (item.image && (item.image.startsWith('/') || item.image.startsWith('http'))) {
        return item;
      }
      const match = allProducts.find((p) =>
        (item.oemNumber && p.oemNumber && p.oemNumber.toUpperCase() === item.oemNumber.toUpperCase()) ||
        p.title.toLowerCase() === item.title.toLowerCase()
      );
      const image = match?.image || getProductImage({
        title: item.title,
        category: 'Farm Parts',
        subcategory: 'General',
        oemNumber: item.oemNumber,
        brand: undefined,
      } as any);
      return { ...item, image } as WishlistItem;
    });
    setWishlistItems(withImages);
    // Keep storage updated so future loads have images
    localStorage.setItem('wishlist', JSON.stringify(withImages));
  }, []);

  const updateWishlist = (updatedItems: WishlistItem[]) => {
    setWishlistItems(updatedItems);
    localStorage.setItem('wishlist', JSON.stringify(updatedItems));
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const removeItem = (index: number) => {
    const updated = wishlistItems.filter((_, i) => i !== index);
    updateWishlist(updated);
  };

  const handleAddToCart = (item: WishlistItem) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({
      ...item,
      quantity: 1,
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    showToast(`${item.title} added to cart!`, 'success');
  };

  const handleAddAllToCart = async () => {
    if (wishlistItems.length === 0) {
      showToast('Your wishlist is empty!', 'warning');
      return;
    }

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    wishlistItems.forEach(item => {
      cart.push({
        ...item,
        quantity: 1,
      });
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    showToast(`All ${wishlistItems.length} items added to cart!`, 'success');
  };

  const handleClearWishlist = async () => {
    const confirmed = await confirm({
      title: 'Clear Wishlist',
      message: 'Are you sure you want to clear your wishlist? This action cannot be undone.',
      confirmText: 'Clear',
      cancelText: 'Cancel',
      type: 'warning',
    });
    
    if (confirmed) {
      updateWishlist([]);
      showToast('Wishlist cleared successfully', 'success');
    }
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A1A3F]">My Wishlist</h1>
          </div>

          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Heart size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">Start adding products you love!</p>
            <button
              onClick={() => navigate('/shop')}
              className="px-8 py-3 bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1A3F]">My Wishlist</h1>
        </div>
        <p className="text-gray-600 mb-6">{wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist</p>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={handleAddAllToCart}
            className="px-6 py-3 bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white rounded-lg hover:shadow-lg transition-all font-semibold flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            Add All to Cart
          </button>
          <button
            onClick={handleClearWishlist}
            className="px-6 py-3 border-2 border-red-500 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-semibold flex items-center justify-center gap-2"
          >
            <Trash2 size={20} />
            Clear Wishlist
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group relative">
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100">
                <div className="aspect-square flex items-center justify-center p-0 overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                      {item.title}
                    </div>
                  )}
                </div>
                
                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => removeItem(index)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                  title="Remove from Wishlist"
                >
                  <Heart size={18} className="fill-red-500 group-hover:fill-white" />
                </button>

                {/* Add to Cart Button on Hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full px-4 py-2 bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white rounded-lg hover:shadow-lg transition-all font-semibold flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-[#2A2A2A] mb-1 line-clamp-2 min-h-[3rem]">
                  {item.title}
                </h3>
                {item.oemNumber && (
                  <p className="text-xs text-gray-500 mb-2">OEM: {item.oemNumber}</p>
                )}
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xl font-bold text-[#0A1A3F]">{item.price}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                    title="Add to Cart"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/shop')}
            className="px-8 py-3 border-2 border-[#0A1A3F] text-[#0A1A3F] rounded-lg hover:bg-[#0A1A3F] hover:text-white transition-colors font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
      
      {ConfirmDialog}
    </div>
  );
};

