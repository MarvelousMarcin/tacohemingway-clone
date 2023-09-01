"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
interface ProductProps {
  name: string;
  price: number;
  img: string[];
  status: "AVAILABLE" | "PREORDER" | "UNAVAILABLE";
  id: string;
}

const Product: FC<ProductProps> = ({ img, name, price, status, id }) => {
  const hasMoreThanOneFoto = img.length > 1;
  const router = useRouter();

  const [isHovering, setIsHovering] = useState(false);
  const statusValue =
    status === "AVAILABLE"
      ? "Dostępny"
      : status === "PREORDER"
      ? "Przedsprzedaż"
      : "Niedostępny";

  return (
    <div className="flex justify-start flex-col items-center">
      <motion.div
        onClick={() => router.push(`/products/${id}`)}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        className="border-[0.2px] p-3 border-gray-300 cursor-pointer relative overflow-hidden flex justify-center items-center"
      >
        <motion.div
          initial={{ y: "5rem" }}
          animate={{
            y: isHovering ? "0" : "5rem",
            transition: { type: "tween", duration: 0.4 },
          }}
          className="absolute bottom-1 right-1 flex gap-1"
        >
          <button className=" p-[4px] border-[1px] border-black">
            <Heart className="fill-black" size={15} />
          </button>
          <button className="p-[4px] border-[1px] border-black bg-black">
            <ShoppingCart className="fill-white text-white" size={15} />
          </button>
        </motion.div>
        {hasMoreThanOneFoto && (
          <Image
            src={isHovering ? img[1] : img[0]}
            width={250}
            height={250}
            alt={`img-${name}`}
          />
        )}
        {!hasMoreThanOneFoto && (
          <Image src={img[0]} width={250} height={250} alt={`img-${name}`} />
        )}
      </motion.div>
      <h1 className="text-sm mt-4 text-center">{name}</h1>
      <div className="text-sm font-bold">{statusValue}</div>
      <div className="text-sm tracking-widest">{price},00 zł</div>
      <div className="w-6 h-[2px] bg-gray-300 mt-3"></div>
    </div>
  );
};

export default Product;
