"use client";

import { useStore } from "../store/store";

const Backdrop = ({}) => {
  const { setIsAddedToBasket, isAddedToBasket } = useStore();

  return (
    <div
      onClick={() => setIsAddedToBasket(false)}
      className="w-screen h-screen opacity-40 bg-black fixed top-0 left-0"
    ></div>
  );
};

export default Backdrop;
