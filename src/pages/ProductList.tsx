import React from "react";
import { useITStore } from "../state/useITStore.ts";
import { useMenuStore } from "../state/useMenuStore.ts";
import { Navigate, useNavigate } from "react-router-dom";

const ProductList: React.FC = () => {
  const products = useITStore((state) => state.products);
  const category = useITStore((state) => state.category);
  const query = useMenuStore((state) => state.query);
  const navigate = useNavigate();

  let filteredProducts =
    category === "Все товары"
      ? products
      : products.filter((product) => product.category === category);
  filteredProducts =
  query === ""
      ? filteredProducts
      : filteredProducts.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          onClick={() => navigate(`/products/${product.id}`)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {product.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
