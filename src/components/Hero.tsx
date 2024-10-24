import React from 'react';
import { Code, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/50"></div>
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
          alt="Coding background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left max-w-3xl">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-indigo-600/10 text-indigo-400 mb-8">
            <Code className="h-5 w-5 mr-2" />
            <span>New Collection Available</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Wear What You <span className="text-indigo-400">Code</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Express your passion for programming with our unique collection of developer-inspired clothing and accessories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-indigo-600 text-white text-lg font-semibold hover:bg-indigo-700 transition-colors">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white/10 text-white text-lg font-semibold hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}