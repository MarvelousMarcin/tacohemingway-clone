import prisma from "@/prisma/client";
import Product from "./Product";

const ShopContent = async () => {
  const data = await prisma.product.findMany({});

  console.log(data);

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 align-middle content-center items-center mt-7">
      {data.map((item) => (
        <Product
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
