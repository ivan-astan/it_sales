import React from "react";
import Header from "./pages/Header.tsx";
import ProductList from "./pages/ProductList.tsx";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetailed from "./pages/ProductDetailed.tsx";
import ProductCart from "./pages/ProductCart.tsx";

const App: React.FC = () => {
  return (
    
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetailed />} />
          <Route path="/cart" element={<ProductCart />} />
        </Routes>
      </div>

  );
};

export default App;
