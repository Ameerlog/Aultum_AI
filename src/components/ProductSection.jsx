// import React, { useEffect, useState } from "react";
// import { LayoutGrid, List } from "lucide-react";
// import ProductCard from "./ProductCard";
// import axios from "axios";

// const ProductsSection = () => {
//   const [viewMode, setViewMode] = useState("grid");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(
//           "http://192.168.29.184:8081/api/getAllProducts"
//         );

//         const mappedProducts = res.data.map((item) => ({
//           id: item.id,
//           title: item.productName,
//           description: item.productDescription,
//           isActive: false,
//           theme: {
//             bg: "bg-blue-100",
//             iconColor: "text-blue-600",
//           },
//         }));

//         setProducts(mappedProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, []);

//   const handleToggle = (id) => {
//     setProducts((prev) =>
//       prev.map((product) =>
//         product.id === id
//           ? { ...product, isActive: !product.isActive }
//           : product
//       )
//     );
//   };

//   if (loading) {
//     return (
//       <p className="text-center py-8 text-zinc-500">
//         Loading products...
//       </p>
//     );
//   }

//   return (
//     <section className="relative z-20 py-8 bg-blue-100/20 overflow-hidden">
//       <div className="pointer-events-none absolute top-0 left-0 h-40 w-full bg-gradient-to-b from-white to-blue-100/20 blur-[90px]" />

//       <div className="mx-auto max-w-7xl px-4 relative">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-xl font-semibold text-zinc-900">
//             Products
//           </h2>

//           <div className="flex gap-2">
//             <button onClick={() => setViewMode("grid")}>
//               <LayoutGrid />
//             </button>
//             <button onClick={() => setViewMode("list")}>
//               <List />
//             </button>
//           </div>
//         </div>

//         <div
//           className={
//             viewMode === "grid"
//               ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
//               : "flex flex-col gap-4"
//           }
//         >
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onToggle={handleToggle}
//               viewMode={viewMode}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;


import React, { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
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
    <section className="relative z-20 overflow-hidden bg-blue-100/20 py-8">
      <div className="pointer-events-none absolute left-0 top-0 h-40 w-full bg-gradient-to-b from-white to-blue-100/20 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-zinc-900">
            Products
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "text-blue-600" : "text-zinc-400"}
            >
              <LayoutGrid />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "text-blue-600" : "text-zinc-400"}
            >
              <List />
            </button>
          </div>
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
