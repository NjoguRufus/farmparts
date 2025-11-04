import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Home, ShoppingBag } from 'lucide-react';

interface Order {
  id: string;
  items: any[];
  customer: any;
  total: number;
  subtotal: number;
  shipping: number;
  status: string;
  createdAt: string;
}

export const OrderConfirmation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (id) {
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      const foundOrder = orders.find((o: Order) => o.id === id);
      if (foundOrder) {
        setOrder(foundOrder);
      } else {
        // Order not found, redirect to home
        navigate('/');
      }
    }
  }, [id, navigate]);

  const formatPrice = (amount: number) => {
    return `KSh ${amount.toLocaleString('en-KE')}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Loading order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-[#0E5E2F] rounded-full p-4">
              <CheckCircle className="text-white" size={64} />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1A3F] mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600">Thank you for your purchase</p>
          <p className="text-lg text-gray-500 mt-2">Order #{order.id.slice(-8).toUpperCase()}</p>
        </div>
        {/* Order Summary Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#0A1A3F] mb-6 flex items-center gap-2">
            <Package size={28} />
            Order Summary
          </h2>

          <div className="space-y-4 mb-6">
            {order.items.map((item, index) => {
              const priceStr = item.price.replace(/[^\d]/g, '');
              const price = parseInt(priceStr) || 0;
              const itemTotal = price * (item.quantity || 1);

              return (
                <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-4">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    {item.oemNumber && (
                      <div className="text-sm text-gray-500">OEM: {item.oemNumber}</div>
                    )}
                    <div className="text-sm text-gray-600 mt-1">Quantity: {item.quantity || 1}</div>
                  </div>
                  <div className="text-gray-900 font-semibold ml-4">{formatPrice(itemTotal)}</div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-gray-200 pt-4 space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>{formatPrice(order.subtotal)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>
                {order.shipping === 0 ? (
                  <span className="text-[#0E5E2F] font-semibold">FREE</span>
                ) : (
                  formatPrice(order.shipping)
                )}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between text-xl font-bold text-[#0A1A3F]">
                <span>Total</span>
                <span>{formatPrice(order.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#0A1A3F] mb-6 flex items-center gap-2">
            <Truck size={28} />
            Shipping Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600 mb-1">Name</div>
              <div className="font-semibold text-gray-900">
                {order.customer.firstName} {order.customer.lastName}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Email</div>
              <div className="font-semibold text-gray-900">{order.customer.email}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Phone</div>
              <div className="font-semibold text-gray-900">{order.customer.phone}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Shipping Method</div>
              <div className="font-semibold text-gray-900">
                {order.customer.shippingMethod === 'express' ? 'Express Delivery (1-2 days)' : 'Standard Delivery (3-5 days)'}
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="text-sm text-gray-600 mb-1">Address</div>
              <div className="font-semibold text-gray-900">
                {order.customer.address}, {order.customer.city}
                {order.customer.postalCode && `, ${order.customer.postalCode}`}
              </div>
              <div className="text-sm text-gray-600 mt-1">{order.customer.country}</div>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#0A1A3F] mb-6">Payment Information</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-semibold text-gray-900 capitalize">
                {order.customer.paymentMethod === 'mpesa' && 'M-Pesa'}
                {order.customer.paymentMethod === 'bank' && 'Bank Transfer'}
                {order.customer.paymentMethod === 'cash' && 'Cash on Delivery'}
              </span>
            </div>
            {order.customer.paymentMethod === 'mpesa' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-blue-800">
                  <strong>M-Pesa Instructions:</strong> You will receive an M-Pesa prompt shortly. Please complete the payment to confirm your order.
                </p>
              </div>
            )}
            {order.customer.paymentMethod === 'bank' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-blue-800">
                  <strong>Bank Transfer Details:</strong> Please transfer the amount to our account. Details will be sent to your email.
                </p>
              </div>
            )}
            <div className="flex justify-between pt-3 border-t border-gray-200 mt-4">
              <span className="text-gray-600">Order Date</span>
              <span className="font-semibold text-gray-900">{formatDate(order.createdAt)}</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <CheckCircle size={20} />
              </div>
              <div>
                <div className="font-semibold">Order Received</div>
                <div className="text-sm text-white/90">We've received your order and are processing it.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <Package size={20} />
              </div>
              <div>
                <div className="font-semibold">Order Processing</div>
                <div className="text-sm text-white/90">We'll prepare your items for shipment.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <Truck size={20} />
              </div>
              <div>
                <div className="font-semibold">Order Shipped</div>
                <div className="text-sm text-white/90">You'll receive tracking information once your order ships.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/shop"
            className="flex-1 px-6 py-4 bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white rounded-lg hover:shadow-lg transition-all font-semibold text-center flex items-center justify-center gap-2"
          >
            <ShoppingBag size={20} />
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="flex-1 px-6 py-4 border-2 border-[#0A1A3F] text-[#0A1A3F] rounded-lg hover:bg-[#0A1A3F] hover:text-white transition-colors font-semibold text-center flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

