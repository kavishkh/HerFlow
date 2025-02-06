import React from 'react';
import { ShoppingBag, Star, Truck, Shield } from 'lucide-react';

const Marketplace = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Essential Products for
          <span className="block bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Your Menstrual Care
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Shop our curated selection of high-quality menstrual and wellness products.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">{product.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="p-3 bg-rose-100 rounded-lg">
              {benefit.icon}
            </div>
            <div>
              <h3 className="font-semibold">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const products = [
  {
    name: "Organic Cotton Pads",
    description: "100% organic cotton, chemical-free menstrual pads for maximum comfort.",
    price: 12.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Menstrual Cup",
    description: "Medical-grade silicone cup for eco-friendly period care.",
    price: 29.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Period Pain Relief Kit",
    description: "Natural remedies and heat therapy for menstrual cramp relief.",
    price: 34.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1493548578639-b0c241186df0?auto=format&fit=crop&q=80&w=1000"
  }
];

const benefits = [
  {
    icon: <ShoppingBag className="h-6 w-6 text-rose-500" />,
    title: "Quality Products",
    description: "Carefully selected for your comfort"
  },
  {
    icon: <Truck className="h-6 w-6 text-rose-500" />,
    title: "Fast Delivery",
    description: "Free shipping on orders over $30"
  },
  {
    icon: <Shield className="h-6 w-6 text-rose-500" />,
    title: "Secure Shopping",
    description: "100% secure payment"
  }
];

export default Marketplace;