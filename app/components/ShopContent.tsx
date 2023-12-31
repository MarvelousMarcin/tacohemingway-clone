import prisma from "@/prisma/client";
import Product from "./Product";

export const dynamic = "force-dynamic";

const ShopContent = async () => {
  const data = await prisma.product.findMany({});

  return (
    <section className="grid grid-cols-2 min-h-[70vh] sm:grid-cols-3 md:grid-cols-4 gap-4 px-6 xl:px-0 align-top content-start items-center mt-7">
      {data.map((item) => (
        <Product
          id={item.id}
          key={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
          status={item.status}
        />
      ))}
    </section>
  );
};

export default ShopContent;
