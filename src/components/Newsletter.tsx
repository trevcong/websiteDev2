import React from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 text-indigo-200 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Developer Community</h2>
          <p className="text-lg text-indigo-200 mb-8">
            Subscribe to get updates on new products, special offers, and coding-inspired fashion tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-md border-2 border-transparent focus:border-indigo-300 focus:ring-0 text-gray-900 w-full sm:w-96"
            />
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-md font-semibold hover:bg-indigo-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}