import React, { useState } from "react";
import { ArrowBigDown, ArrowDown, LayoutGrid, List } from "lucide-react";
import ProductCard from "./ProductCard";
import { products as initialProducts } from "../data/product";

const ProductsSection = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [products, setProducts] = useState(initialProducts);

  const handleToggle = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, isActive: !product.isActive } : product
      )
    );
  };

  return (
    <section className="relative z-20   py-8 bg-blue-200/20
     ">
      <div className="mx-auto max-w-7xl px-4">
       
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-zinc-900">Products</h2>

          
        </div>

   
        <div
          className={
            viewMode === "grid"
              ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              : "flex flex-col gap-4"
          }
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onToggle={handleToggle}
              viewMode={viewMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;