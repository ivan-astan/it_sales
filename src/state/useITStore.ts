import { create } from "zustand";

export type Category =
  | "Все товары"
  | "Электроника"
  | "Одежда"
  | "Книги"
  | "Косметика";
export type Product = {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string;
  stock: number;
  description: string;
};

interface Store {
  products: Product[];
  category: Category;
  setCategory: (category: Category) => void;
}

export const useITStore = create<Store>((set) => ({
  products: [
    {
      id: 1,
      name: "Смартфон 12 Pro",
      description:
        "Высококачественный смартфон с передовыми технологиями, подходит для профессиональной съемки и многозадачности. Обладая элегантным дизайном, он предлагает отличную производительность и множество функций.",
      category: "Электроника",
      price: 999,
      stock: 10,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBgml_8lUn5UKi5i1PzOfVxjaKAHvaKnJvw&s",
    },
    {
      id: 2,
      name: 'Футболка "Супергерой"',
      category: "Одежда",
      description:
        "Яркая и комфортная футболка для детей и взрослых с забавным дизайном супергероя. Идеально подходит для повседневной носки и мероприятий, придавая вашему стилю игривый акцент.",
      price: 19.99,
      stock: 58,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXck4PTJBBdqf6qa5Eov8UMJ9c96nh1clGLw&s",
    },
    {
      id: 3,
      name: 'Книга "Учебник по React"',
      category: "Книги",
      description:
        "Полный учебник по React, предназначенный как для новичков, так и для опытных разработчиков. Он охватывает основы и продвинутые темы, помогает освоить этот популярный библиотеку для создания пользовательских интерфейсов.",
      price: 29.99,
      stock: 74,
      image: "https://pics.craiyon.com/2024-09-07/XIEcMg2UQ-Gic2NaTH2xEQ.webp",
    },
    {
      id: 4,
      name: "Крем для лица",
      category: "Косметика",
      description:
        "Увлажняющий крем для лица, который питает и защищает кожу. Подходит для всех типов кожи. Формула увлажняет, делает кожу мягкой и эластичной, защищая её от вредных факторов окружающей среды.",
      price: 15.99,
      stock: 107,
      image: "https://ckztsaritsino.ru/wp-content/uploads/2023/06/yur_me_face_cream_brightening.jpg",
    },
  ],
  category: "Все товары",
  setCategory: (category: Category) => set(() => ({ category: category })),
}));
