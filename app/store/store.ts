import { Product } from "@prisma/client";
import { create } from "zustand";

type State = {
  basket: {
    id: string;
    img: string;
    name: string;
    quantity: number;
    price: number;
  }[];
};

type Action = {};

// Create your store, which includes both state and (optionally) actions
const useStore = create<State & Action>((set) => ({
  basket: [],
}));
