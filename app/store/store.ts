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
  removeItemFromBasket: (id: string) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useStore = create<State & Action>((set) => ({
  addedProduct: null,
  basket: [],
  isAddedToBasket: false,
  setIsAddedToBasket: (value) => set(() => ({ isAddedToBasket: value })),
  setAddedProduct: (product) => set(() => ({ addedProduct: product })),
  addToBasket: (product) =>
    set((state) => {
      console.log(product);
      const isItemWithId = state.basket.find((prod) => prod.id === product.id);

      if (isItemWithId) {
        return {
          basket: state.basket.map((prod) => {
            if (prod.id === product.id) {
              return {
                ...isItemWithId,
                quantity: prod.quantity + product.quantity,
              };
            } else return prod;
          }),
        };
      } else {
        return { basket: [...state.basket, product] };
      }
    }),
  removeItemFromBasket: (id) =>
    set((state) => ({ basket: state.basket.filter((prod) => prod.id !== id) })),
}));
