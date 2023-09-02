"use client";
import { FC } from "react";
import Backdrop from "./Backdrop";
import { useStore } from "../store/store";
import { X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AddedToBasketProps {}

const AddedToBasket: FC<AddedToBasketProps> = ({}) => {
  const { setIsAddedToBasket, isAddedToBasket, addedProduct } = useStore();

  return (
    <>
      {isAddedToBasket && <Backdrop />}
      {isAddedToBasket && (
        <div className="w-96 h-fit bg-white fixed top-16 flex flex-col p-2">
          <h1 className="">DODANIE PRODUKTU DO KOSZYKA</h1>
          <div className="h-[2px] w-full bg-black"></div>

          <div className="bg-green-200 h-6 flex justify-start items-center border-l-4 border-l-green-400 px-2 my-2">
            <h1 className="text-green-600 text-[11px]">
              Produkt został dodany do koszyka.
            </h1>
          </div>
          <motion.div
            className="flex flex-row items-center my-6 gap-5 px-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Image
              src={addedProduct?.img!}
              width={120}
              height={120}
              alt="foto"
            />
            <section className="flex flex-col text-[12px]">
              <h1>{addedProduct?.name}</h1>
              <p className="text-gray-300">
                {addedProduct?.quantity} szt x{" "}
                <span className="text-black">{addedProduct?.price} zł</span>
              </p>
            </section>
          </motion.div>
          <section className="flex justify-between  text-[10px]">
            <button
              onClick={() => setIsAddedToBasket(false)}
              className="border-[1px] border-black text-black px-2"
            >
              KONTYNUUJ ZAKUPY
            </button>
            <button className="bg-black text-white px-2">
              PRZEJDŹ DO KOSZYKA
            </button>
          </section>

          <div
            onClick={() => setIsAddedToBasket(false)}
            className="cursor-pointer absolute top-0 right-0 w-3 h-3 bg-black flex justify-center items-center"
          >
            <X className="text-white" />
          </div>
        </div>
      )}
    </>
  );
};

export default AddedToBasket;
