import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../contexts/NotificationContext';

interface CartItem {
  title: string;
  price: string;
  oemNumber?: string;
  quantity?: number;
  image?: string;
}

export const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useNotification();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    // Ensure each item has quantity
    const itemsWithQuantity = cart.map((item: CartItem) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(itemsWithQuantity);
  }, []);

  const updateCart = (updatedItems: CartItem[]) => {
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (index: number) => {
    const updated = cartItems.filter((_, i) => i !== index);
    updateCart(updated);
  };

  const updateQuantity = (index: number, delta: number) => {
    const updated = [...cartItems];
    updated[index].quantity = Math.max(1, (updated[index].quantity || 1) + delta);
    updateCart(updated);
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const priceStr = item.price.replace(/[^\d]/g, '');
      const price = parseInt(priceStr) || 0;
      return total + (price * (item.quantity || 1));
    }, 0);
  };

  const formatPrice = (amount: number) => {
    return `KSh ${amount.toLocaleString('en-KE')}`;
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showToast('Your cart is empty!', 'warning');
      return;
    }
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <button
              onClick={() => navigate('/shop')}
              className="px-8 py-3 bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              Continue Shopping
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
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1A3F]">Shopping Cart</h1>
        </div>
        <p className="text-gray-600 mb-6">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-[#0A1A3F] mb-6">Cart Items</h2>
              <div className="space-y-4">
                {cartItems.map((item, index) => {
                  const priceStr = item.price.replace(/[^\d]/g, '');
                  const price = parseInt(priceStr) || 0;
                  const itemTotal = price * (item.quantity || 1);

                  return (
                    <div key={index} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        {item.image ? (
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 text-xs">{item.title}</div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#0A1A3F] mb-1">{item.title}</h3>
                        {item.oemNumber && (
                          <p className="text-xs text-gray-500 mb-2">OEM: {item.oemNumber}</p>
                        )}
                        <p className="text-lg font-bold text-[#D4A017]">{formatPrice(itemTotal)}</p>
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(index, -1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-3 py-1 min-w-[3rem] text-center">{item.quantity || 1}</span>
                            <button
                              onClick={() => updateQuantity(index, 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-[#0A1A3F] mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>{formatPrice(getTotal())}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-[#0A1A3F]">
                    <span>Total</span>
                    <span>{formatPrice(getTotal())}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white rounded-lg hover:shadow-lg transition-all font-semibold mb-4"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate('/shop')}
                className="w-full px-6 py-3 border-2 border-[#0A1A3F] text-[#0A1A3F] rounded-lg hover:bg-[#0A1A3F] hover:text-white transition-colors font-semibold"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

