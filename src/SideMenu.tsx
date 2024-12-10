import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

const categories = ['Все товары', 'Электроника', 'Одежда', 'Книги', 'Косметика'];

type SideMenuProps = {
  isOpen: boolean,
  onClose: () => void,
  onCategoryChange: (category) => void
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose, onCategoryChange }) => {
  const [search, setSearch] = useState('');

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(search.toLowerCase())
  );

  const handleCategorySelect = category => {
    onCategoryChange(category);
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed top-0 left-0 h-full w-64 bg-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold">Категории</h2>
          <button onClick={onClose}>
            <MdClose size={24} />
          </button>
        </div>
        <input
          type="text"
          placeholder="Поиск..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
        <ul className="p-4">
          {filteredCategories.map(category => (
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