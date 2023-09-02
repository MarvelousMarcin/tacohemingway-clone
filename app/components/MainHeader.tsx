"use client";

import { ShoppingCart } from "lucide-react";
import { useStore } from "../store/store";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import Link from "next/link";

const MainHeader = () => {
  const { basket, removeItemFromBasket } = useStore();
  const fullPrice = basket.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  return (
    <header className="w-full h-9 flex flex-row text-[10px] items-center justify-center md:justify-end gap-4 md:px-24">
      <Link href="/taco">
        <div className="cursor-pointer font-bold">Coś specjalnego </div>
      </Link>
      <div className="flex gap-2">
        <div className="border-black cursor-pointer hover:underline">
          Logowanie
        </div>
        <div className=" bg-black w-[0.5px] h-4"></div>
        <div className="cursor-pointer hover:underline">Rejestracja</div>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <ShoppingCart className="cursor-pointer" size={15} />
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2 border-b-[2px] border-b-gray-300 p-2">
              <h4 className="font-medium leading-none">KOSZYK</h4>
            </div>
            <div className="flex flex-col gap-2">
              {basket.length === 0 && (
                <div className="text-[11px]">Koszyk jest pusty</div>
              )}
              {basket.map((prod) => {
                return (
                  <div
                    key={prod.id}
                    className="flex flex-row items-center gap-4 text-[12px] justify-start"
                  >
                    <Image src={prod?.img!} width={90} height={90} alt="foto" />
                    <section>
                      <h1>{prod.name}</h1>
                      <p>
                        {prod.quantity} x {prod.price} zł
                      </p>
                    </section>
                    <div className="flex-grow"></div>
                    <div
                      className="cursor-pointer"
                      onClick={() => removeItemFromBasket(prod.id)}
                    >
                      Usuń
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between text-[11px] items-center">
              <div>Razem: {fullPrice} zł</div>
              <Link href="/basket">
                <button className="bg-black text-white text-[11px] p-1">
                  ZAPŁAĆ
                </button>
              </Link>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <div className="text-xs hidden md:block">{fullPrice},00 zł</div>
      <Link href="/basket">
        <button className="bg-black text-white text-[10px] px-4 py-1 hidden md:block cursor-pointer">
          DO KASY
        </button>
      </Link>
    </header>
  );
};

export default MainHeader;
