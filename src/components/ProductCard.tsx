import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductCard({ title, price, image, description }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">${price}</span>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}