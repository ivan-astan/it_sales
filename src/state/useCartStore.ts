import { create } from "zustand";
import { Product } from "./useITStore.ts";

type CartProduct = Product & { amount: number };

interface Store {
  cart: CartProduct[];
  addToCart: (product: Product) => void;
  deleteFromCart: (id: number) => void;
}

export const useCartStore = create<Store>((set) => ({
  cart: [],
  addToCart: (product: Product | CartProduct) => {
    set((state) => {
      const existingProductIndex = state.cart.findIndex((p) => p.id === product.id);

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        const existingProduct = updatedCart[existingProductIndex];
        updatedCart[existingProductIndex] = { 
          ...existingProduct, 
          amount: existingProduct.amount + 1 
        };
        return { cart: updatedCart };
      } else {
        return {
          cart: [
            ...state.cart,
            { ...product, amount: 1 }, 
          ],
        };
      }
    });
  },
  deleteFromCart: (id: number) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id),
    })),
}));