import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: "Git Commit Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
    description: "Show your love for version control with this stylish Git-themed t-shirt."
  },
  {
    id: 2,
    title: "Debug Mode Hoodie",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80",
    description: "Stay warm while hunting those elusive bugs in this comfortable hoodie."
  },
  {
    id: 3,
    title: "Coffee.code() Mug",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?auto=format&fit=crop&q=80",
    description: "The perfect companion for your late-night coding sessions."
  },
  {
    id: 4,
    title: "Binary Beanie",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80",
    description: "Keep your head warm with this binary-patterned beanie."
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular developer-inspired merchandise, crafted for coders who appreciate both style and function.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}