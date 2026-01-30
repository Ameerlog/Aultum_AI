import React from 'react'
import ProductCard from './ProductCard';
import ProductSection from './ProductSection';

const UniqueProducts = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Unique Products</h1>
      <div>
        <ProductSection/>
      </div>
    </div>

  );
};

export default UniqueProducts;
