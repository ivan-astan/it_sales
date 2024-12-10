import React, { useState } from 'react';
import { MdClose, MdSearch } from 'react-icons/md';
import { useMenuStore } from './state/useMenuStore.ts';
import { Category, useITStore } from './state/useITStore.ts';

const categories: Category[] = ['Все товары', 'Электроника', 'Одежда', 'Книги', 'Косметика'];


const SideMenu: React.FC = () => {
  const [search, setSearch] = useState('');
  const setQuery = useMenuStore((state) => state.setQuery)
  const setMenuOpen = useMenuStore((state) => state.setMenuOpen)
  const setCategory = useITStore((state) => state.setCategory)
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen)


  const handleCategorySelect = (category: Category) => {
    setCategory(category);
    setMenuOpen(false)
  };
  const handleSearchButton = () => {
    setQuery(search)
    setMenuOpen(false)
  }

  return (
    <div className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-75 transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed top-0 left-0 h-full w-64 bg-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold">Категории</h2>
          <button onClick={() => setMenuOpen(false)}>
            <MdClose size={24} />
          </button>
        </div>
        <div className="flex items-center p-2 mb-4 border border-gray-300 rounded-lg">
          <input
            type="text"
            placeholder="Поиск товаров..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-grow p-2 outline-none"
          />
          <button onClick={handleSearchButton}>
            <MdSearch size={24} className="ml-2 text-gray-600" />
          </button>
        </div>
        <ul className="p-4">
          {categories.map((category) => (
            <li key={category} className="py-2">
              <button onClick={() => handleCategorySelect(category)} className="text-left w-full hover:bg-gray-200 rounded-lg p-2">
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu