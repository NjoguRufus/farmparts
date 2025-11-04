import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowLeftRight, Star, Check, X, Plus, Minus } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../utils/products';
import { ProductCard } from '../components/ProductCard';
import { useNotification } from '../contexts/NotificationContext';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { showToast } = useNotification();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = id ? getProductById(id) : undefined;
  const relatedProducts = product ? getRelatedProducts(id!, 4) : [];

  useEffect(() => {
    if (!product && id) {
      // Product not found, redirect to shop
      navigate('/shop');
    }
  }, [product, id, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Product not found</p>
          <button
            onClick={() => navigate('/shop')}
            className="px-6 py-3 bg-[#D4A017] text-white rounded-lg hover:bg-[#B8880F] transition-colors"
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    for (let i = 0; i < quantity; i++) {
      cart.push({
        title: product.title,
        price: product.price,
        oemNumber: product.oemNumber,
        quantity: 1,
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    showToast(`${quantity} ${quantity === 1 ? 'item' : 'items'} added to cart!`, 'success');
  };

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (!wishlist.find((item: any) => item.oemNumber === product.oemNumber)) {
      wishlist.push({
        title: product.title,
        price: product.price,
        oemNumber: product.oemNumber,
      });
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      window.dispatchEvent(new Event('wishlistUpdated'));
      showToast(`${product.title} added to wishlist!`, 'success');
    } else {
      showToast(`${product.title} is already in your wishlist!`, 'warning');
    }
  };

  const handleCompare = () => {
    const compare = JSON.parse(localStorage.getItem('compare') || '[]');
    if (compare.length < 3) {
      if (!compare.find((item: any) => item.oemNumber === product.oemNumber)) {
        compare.push({
          title: product.title,
          price: product.price,
          oemNumber: product.oemNumber,
        });
        localStorage.setItem('compare', JSON.stringify(compare));
        window.dispatchEvent(new Event('compareUpdated'));
        showToast(`${product.title} added to compare!`, 'success');
      } else {
        showToast(`${product.title} is already in compare!`, 'warning');
      }
    } else {
      showToast('You can compare up to 3 products at a time!', 'warning');
    }
  };

  const images = product.image 
    ? [product.image, product.image, product.image] 
    : ['/Logos/farmpartsproductimages/imgi_40_Brake-pads-300x300.jpg'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-[#D4A017] transition-colors">
              Home
            </button>
            <span>/</span>
            <button onClick={() => navigate('/shop')} className="hover:text-[#D4A017] transition-colors">
              Shop
            </button>
            <span>/</span>
            <button onClick={() => navigate(`/shop?category=${product.category}`)} className="hover:text-[#D4A017] transition-colors">
              {product.category}
            </button>
            <span>/</span>
            <span className="text-gray-900">{product.title}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden border border-gray-200">
              {images[selectedImage] && images[selectedImage].trim() !== '' && (images[selectedImage].startsWith('/') || images[selectedImage].startsWith('http')) ? (
                <img
                  src={images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
                  <span className="text-gray-400 text-lg text-center">{product.title}</span>
                </div>
              )}
            </div>
            <div className="flex gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-white rounded-lg border-2 overflow-hidden ${
                    selectedImage === index ? 'border-[#D4A017]' : 'border-gray-200'
                  }`}
                >
                  {img && img.trim() !== '' && (img.startsWith('/') || img.startsWith('http')) ? (
                    <img
                      src={img}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-xs text-gray-400 p-1 text-center">
                      {product.title.substring(0, 15)}...
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#0A1A3F] mb-4">{product.title}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600">(4.9/5.0 - 25 reviews)</span>
                </div>
              </div>

              {product.oemNumber && (
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">OEM Number:</span> {product.oemNumber}
                </p>
              )}

              {product.brand && (
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Brand:</span> {product.brand}
                </p>
              )}

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-[#0A1A3F]">{product.price}</span>
                {product.inStock ? (
                  <span className="bg-[#0E5E2F] text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                    <Check size={16} />
                    In Stock
                  </span>
                ) : (
                  <span className="bg-gray-500 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                    <X size={16} />
                    On Order
                  </span>
                )}
              </div>

              {product.description && (
                <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-semibold text-gray-700">Quantity:</span>
                <div className="flex items-center gap-2 border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white rounded-lg hover:shadow-lg transition-all font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart size={22} />
                  Add to Cart
                </button>
                <button
                  onClick={handleAddToWishlist}
                  className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <Heart size={22} />
                  Wishlist
                </button>
                <button
                  onClick={handleCompare}
                  className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <ArrowLeftRight size={22} />
                  Compare
                </button>
              </div>

              {/* Product Info */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                {product.warranty && (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Check className="text-[#0E5E2F]" size={20} />
                    <span><strong>Warranty:</strong> {product.warranty}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="text-[#0E5E2F]" size={20} />
                  <span><strong>Genuine OEM Part</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="text-[#0E5E2F]" size={20} />
                  <span><strong>Free Shipping</strong> on orders over KSh 5,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold text-[#0A1A3F] mb-6">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700 w-40">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#0A1A3F] mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((review) => (
              <div key={review} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">John Doe</span>
                  <span className="text-sm text-gray-500">2 weeks ago</span>
                </div>
                <p className="text-gray-700">
                  Excellent quality part! Fits perfectly and works as expected. Highly recommended!
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#0A1A3F] mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  {...relatedProduct}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

