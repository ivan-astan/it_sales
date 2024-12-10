import React from 'react';
import Header from './Header.tsx';
import ProductList from './ProductList.tsx';

const App: React.FC = () => {


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <ProductList />
    </div>
  );
};

export default App;