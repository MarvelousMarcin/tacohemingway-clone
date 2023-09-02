"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { $Enums } from "@prisma/client";

export interface ProductDetailsProps {
  name: string;
  price: number;
  img: string[];
  status: "AVAILABLE" | "PREORDER" | "UNAVAILABLE";
  type: $Enums.Type;
}

const ProductDetails: FC<ProductDetailsProps> = ({
  name,
  price,
  img,
  type,
}) => {
  const [prodQuant, setProdQuant] = useState(1);

  return (
    <section className="flex mt-8 justify-evenly w-full items-center md:items-start md:flex-row flex-col max-w-[90rem]">
      <motion.div className="border-[0.2px] p-3 border-gray-300 cursor-pointer relative overflow-hidden flex justify-center items-center">
        <Image src={img[0]} width={450} height={450} alt={`img-${name}`} />
      </motion.div>
      <article className="flex flex-col gap-5 justify-start items-start w-[90%] md:w-[40%] ">
        <h1 className="text-[2.4rem] font-bold">{name}</h1>
        <section className="w-2/3 flex flex-col gap-8 pb-10">
          <h2 className="text-xs">
            Nasza cena: <span className="text-2xl font-bold">{price} </span>zł
          </h2>
          {type === "TSHIRT" && (
            <div className="flex justify-between items-center w-full md:w-2/3">
              <h1 className="text-xs">Rozmiar: </h1>
              <select className="w-24 text-[12px] py-1 px-2">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          )}

          <div className="flex justify-between items-center w-full md:w-2/3">
            <div className="text-xs">Ilość: </div>

            <section className="flex justify-center items-center gap-1">
              <input
                value={prodQuant}
                onChange={(e) => setProdQuant(Number(e.target.value))}
                className="w-[2rem] text-center outline-none border-[1px] border-gray-300 text-sm"
              />
              <button
                onClick={() => setProdQuant((prev) => prev + 1)}
                className="bg-black p-[2px]"
              >
                <Plus className="text-white" size={14} />
              </button>
              <button
                onClick={() =>
                  setProdQuant((prev) => {
                    if (prev == 0) return prev;
                    else return prev - 1;
                  })
                }
                className="bg-black p-[2px]"
              >
                <Minus className="text-white" size={14} />
              </button>
              <h2 className="text-xs text-gray-300">szt.</h2>
            </section>
          </div>

          <button className="text-white bg-black px-2 py-2 font-bold text-md ">
            DODAJ DO KOSZYKA
          </button>
        </section>
        <section className="border-t-[1px] border-gray-300 pt-3">
          <table className="border-spacing-4 text-[13px]">
            <tbody>
              <tr>
                <td className="text-[13px]">Dostępność: </td>
                <td className="px-7 font-bold">
                  Przedsprzedaż - premiera: 24.10.2023{" "}
                </td>
              </tr>
              <tr>
                <td className="text-[13px]">Czas realizacji: </td>
                <td className="px-7">37 dni roboczych</td>
              </tr>
              <tr>
                <td className="text-[13px]">Koszt dostawy: </td>
                <td className="px-7">od 13,00 zł - zobacz wszystkie</td>
              </tr>
            </tbody>
          </table>
        </section>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-t-[1px] border-black">
            <AccordionTrigger className="text-md">OPIS</AccordionTrigger>
            <AccordionContent>
              Skład: 100% bawełna
              <br />
              Wymiary: Rozmiar / długość / szerokość pod pachami
              <br /> S / 69 cm / 61 cm
              <br /> M / 74 cm / 65 cm
              <br /> L / 77 cm / 68 cm <br />
              XL / 80 cm / 71 cm
              <br /> XXL / 83 cm / 74 cm
              <br /> projekt: Ola Niepsuj
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-y-[1px] border-black">
            <AccordionTrigger className="text-md">
              DANE TECHNICZNE
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </article>
    </section>
  );
};

export default ProductDetails;
