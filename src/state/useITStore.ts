import { create } from 'zustand';

export type Category = 'Все товары' | 'Электроника' | 'Одежда' | 'Книги' | 'Косметика'
type Product = {
    id: number,
    name: string,
    category: Category,
    price: number,
    image: string
}

interface Store {
    products: Product[]
    category: Category
    setCategory: (category: Category) => void
}

export const useITStore = create<Store>(
        (set) => ({
            products: [
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
              ],
            category: 'Все товары',
            setCategory: (category: Category) => set(() => ({category: category}))
        }),

);