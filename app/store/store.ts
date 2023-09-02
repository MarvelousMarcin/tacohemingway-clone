import { create } from "zustand";

type Product = {
  id: string;
  img: string;
  name: string;
  quantity: number;
  price: number;
};

type State = {
  isAddedToBasket: boolean;
  addedProduct: Product | null;
  basket: Product[];
};

type Action = {
  setIsAddedToBasket: (value: boolean) => void;
  setAddedProduct: (product: Product) => void;
  addToBasket: (product: Product) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useStore = create<State & Action>((set) => ({
  addedProduct: null,
  basket: [],
  isAddedToBasket: false,
  setIsAddedToBasket: (value) => set(() => ({ isAddedToBasket: value })),
  setAddedProduct: (product) => set(() => ({ addedProduct: product })),
  addToBasket: (product) =>
    set((state) => ({ basket: [...state.basket, product] })),
}));
