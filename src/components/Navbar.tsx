import React, { useState } from 'react';
import { ShoppingCart, Code2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md text-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-400" />
            <span className="ml-3 text-2xl font-bold">DevWear</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-white hover:text-indigo-400 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-indigo-400 transition-colors">Shop</a>
              <a href="#" className="text-white hover:text-indigo-400 transition-colors">Collections</a>
              <a href="#" className="text-white hover:text-indigo-400 transition-colors">About</a>
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart (0)</span>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-indigo-400 transition-colors px-3 py-2">Home</a>
              <a href="#" className="text-white hover:text-indigo-400 transition-colors px-3 py-2">Shop</a>
              <a href="#" className="text-white hover:text-indigo-400 transition-colors px-3 py-2">Collections</a>
              <a href="#" className="text-white hover:text-indigo-400 transition-colors px-3 py-2">About</a>
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors mx-3">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart (0)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}