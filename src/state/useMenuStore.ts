import { create } from "zustand";
import { Category } from "./useITStore";

interface Store {
  isMenuOpen: boolean;
  query: string;
  categories: Category[];
  setMenuOpen: (isOpen: boolean) => void;
  setQuery: (query: string) => void;
}

export const useMenuStore = create<Store>((set) => ({
  query: "",
  categories: ["Все товары", "Электроника", "Одежда", "Книги", "Косметика"],
  setQuery: (query: string) => set(() => ({ query })),
  isMenuOpen: false,
  setMenuOpen: (isMenuOpen: boolean) => set(() => ({ isMenuOpen })),
}));
