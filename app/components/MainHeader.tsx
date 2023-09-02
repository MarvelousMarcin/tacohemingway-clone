"use client";

import { ShoppingCart } from "lucide-react";
import { useStore } from "../store/store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

const MainHeader = () => {
  const { basket } = useStore();
  const fullPrice = basket.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  return (
    <header className="w-full h-9 flex flex-row text-[10px] items-center justify-center md:justify-end gap-4 md:px-24">
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
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2"></div>
          </div>
        </PopoverContent>
      </Popover>
      <div className="text-xs hidden md:block">{fullPrice},00 zł</div>
      <button className="bg-black text-white text-[10px] px-4 py-1 hidden md:block cursor-pointer">
        DO KASY
      </button>
    </header>
  );
};

export default MainHeader;
