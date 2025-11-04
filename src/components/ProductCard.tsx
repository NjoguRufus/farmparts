import React from 'react';
import { ShoppingCart, Heart, ArrowLeftRight } from 'lucide-react';
import { useNotification } from '../contexts/NotificationContext';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  inStock: boolean;
  oemNumber?: string;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  onCompare?: () => void;
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  inStock,
  oemNumber,
  onAddToCart,
  onAddToWishlist,
  onCompare,
  onClick,
}) => {
  const { showToast } = useNotification();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart();
    } else {
      // Default behavior - show notification
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push({ title, price, oemNumber });
      localStorage.setItem('cart', JSON.stringify(cart));
      showToast(`${title} added to cart!`, 'success');
      // Trigger cart update event
      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToWishlist) {
      onAddToWishlist();
    } else {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      if (!wishlist.find((item: any) => item.oemNumber === oemNumber)) {
        wishlist.push({ title, price, oemNumber });
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showToast(`${title} added to wishlist!`, 'success');
        window.dispatchEvent(new Event('wishlistUpdated'));
      } else {
        showToast(`${title} is already in your wishlist!`, 'warning');
      }
    }
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onCompare) {
      onCompare();
    } else {
      const compare = JSON.parse(localStorage.getItem('compare') || '[]');
      if (compare.length < 3) {
        if (!compare.find((item: any) => item.oemNumber === oemNumber)) {
          compare.push({ title, price, oemNumber });
          localStorage.setItem('compare', JSON.stringify(compare));
          showToast(`${title} added to compare!`, 'success');
          window.dispatchEvent(new Event('compareUpdated'));
        } else {
          showToast(`${title} is already in compare!`, 'warning');
        }
      } else {
        showToast('You can compare up to 3 products at a time!', 'warning');
      }
    }
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Navigate to product details page if product has an id (from utils/products)
      const productId = (window as any).productIdMap?.[title] || null;
      if (productId) {
        window.location.href = `/product/${productId}`;
      } else {
        // Fallback: store product info and show details
        sessionStorage.setItem('selectedProduct', JSON.stringify({ title, price, oemNumber, image, inStock }));
        showToast(`Product: ${title} - ${price}`, 'info');
      }
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-gray-100">
        <div className="aspect-square flex items-center justify-center p-0">
          {image && image.trim() !== '' && (image.startsWith('/') || image.startsWith('http')) ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm p-4">${title}</div>`;
                }
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm p-4 text-center">
              <span className="line-clamp-3">{title}</span>
            </div>
          )}
        </div>
        {inStock ? (
          <span className="absolute top-3 right-3 bg-[#0E5E2F] text-white text-xs font-semibold px-3 py-1 rounded-full">
            In Stock
          </span>
        ) : (
          <span className="absolute top-3 right-3 bg-gray-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            On Order
          </span>
        )}
        <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={handleAddToWishlist}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-[#D4A017] hover:text-white transition-colors"
            title="Add to Wishlist"
          >
            <Heart size={18} />
          </button>
          <button 
            onClick={handleCompare}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-[#D4A017] hover:text-white transition-colors"
            title="Add to Compare"
          >
            <ArrowLeftRight size={18} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#2A2A2A] mb-1 line-clamp-2 min-h-[3rem]">
          {title}
        </h3>
        {oemNumber && (
          <p className="text-xs text-gray-500 mb-2">OEM: {oemNumber}</p>
        )}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-[#0A1A3F]">{price}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            title="Add to Cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
