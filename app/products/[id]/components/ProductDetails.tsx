"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";

interface ProductDetailsProps {
  name: string;
  price: number;
  img: string[];
  status: "AVAILABLE" | "PREORDER" | "UNAVAILABLE";
}

const ProductDetails: FC<ProductDetailsProps> = ({
  name,
  price,
  img,
  status,
}) => {
  const [prodQuant, setProdQuant] = useState(1);

  return (
    <section className="flex mt-8 justify-evenly w-full">
      <motion.div className="border-[0.2px] p-3 border-gray-300 cursor-pointer relative overflow-hidden flex justify-center items-center">
        <Image src={img[0]} width={550} height={550} alt={`img-${name}`} />
      </motion.div>
      <article className="flex flex-col gap-5 justify-start items-start w-[40%]">
        <h1 className="text-[2.4rem] font-bold">{name}</h1>
        <section className="w-2/3 flex flex-col gap-8">
          <h2>
            Nasza cena: <span className="text-2xl font-bold">{price} </span>zł
          </h2>
          <div className="flex justify-between items-center">
            <h1>Rozmiar: </h1>
            <select className="w-32 py-1 px-2">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>

          <div className="flex justify-between w-full">
            <div>Ilość: </div>

            <section className="flex justify-center items-center gap-2">
              <input
                value={prodQuant}
                defaultValue={prodQuant}
                className="w-[3rem] text-center outline-none border-[1px] border-gray-300"
              />
              <button
                onClick={() => setProdQuant((prev) => prev + 1)}
                className="bg-black p-[2px]"
              >
                <Plus className="text-white" />
              </button>
              <button
                onClick={() => setProdQuant((prev) => prev - 1)}
                className="bg-black p-[2px]"
              >
                <Minus className="text-white" />
              </button>
              <h2 className="text-xs text-gray-300">szt.</h2>
            </section>
          </div>

          <button className="text-white bg-black px-4 py-2 font-bold text-xl ">
            DODAJ DO KOSZYKA
          </button>
        </section>
      </article>
    </section>
  );
};

export default ProductDetails;
