import React from 'react';

const products = [
  {
    id: 1,
    name: 'Смартфон 12 Pro',
    category: 'Электроника',
    price: 999,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Футболка "Супергерой"',
    category: 'Одежда',
    price: 19.99,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Книга "Учебник по React"',
    category: 'Книги',
    price: 29.99,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Крем для лица',
    category: 'Косметика',
    price: 15.99,
    image: 'https://via.placeholder.com/150',
  },
];

interface ProductListProps {
  category: string;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const filteredProducts = category === 'Все товары' ? products : products.filter(product => product.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {filteredProducts.map((product) => (
        <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{product.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;