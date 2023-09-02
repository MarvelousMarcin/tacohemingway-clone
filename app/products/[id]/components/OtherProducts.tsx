import { FC } from "react";
import { $Enums } from "@prisma/client";
import Product from "@/app/components/Product";

interface OtherProductsProps {
  otherProducts: {
    id: string;
    name: string;
    price: number;
    img: string[];
    status: $Enums.Status;
  }[];
}

const OtherProducts: FC<OtherProductsProps> = ({ otherProducts }) => {
  return (
    <div className="mt-28 max-w-[90rem] ">
      <h1 className="mb-2">POLECAMY RÓWNIEŻ</h1>
      <section className="flex gap-2 flex-col md:flex-row">
        {otherProducts.map((prod) => (
          <Product
            id={prod.id}
            key={prod.id}
            img={prod.img}
            name={prod.name}
            price={prod.price}
            status={prod.status}
          />
        ))}
      </section>
    </div>
  );
};

export default OtherProducts;
