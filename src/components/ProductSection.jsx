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
        product.id === id
          ? { ...product, isActive: !product.isActive }
          : product
      )
    );
  };

  return (
    <section className="relative z-20 py-8 bg-blue-100/20 overflow-hidden">
    
      <div className="pointer-events-none absolute top-0 left-0 h-40 w-full bg-gradient-to-b from-white to-blue-100/20 blur-[90px]" />

      <div className="mx-auto max-w-7xl px-4 relative">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-zinc-900">
            Products
          </h2>
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
