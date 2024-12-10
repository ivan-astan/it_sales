import React, { useState } from 'react';
import Header from './Header.tsx';
import SideMenu from './SideMenu.tsx';
import ProductList from './ProductList.tsx';
import Placeholder from './Placeholder.tsx';

const App: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="relative">
      <button onClick={handleMenuToggle} className="p-2 bg-blue-500 text-white rounded">
        Открыть меню
      </button>
      <SideMenu isOpen={isMenuOpen} onClose={handleMenuToggle} onCategoryChange={handleCategoryChange} />
      <div className="p-4">
        <h3 className="text-lg">Выбранная категория: {selectedCategory || 'Нет'}</h3>
      </div>
    </div>
      {selectedCategory ? <ProductList category={selectedCategory} /> : <Placeholder />}
    </div>
  );
};

export default App;