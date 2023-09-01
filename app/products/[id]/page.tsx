import MainHeader from "@/app/components/MainHeader";
import prisma from "@/prisma/client";
import Image from "next/image";
import Link from "next/link";
import ProductDetails from "./components/ProductDetails";

export default async function Product({ params }: { params: { id: string } }) {
  const prodId = params.id;

  const product = await prisma.product.findUnique({ where: { id: prodId } });

  if (!product)
    return (
      <main className="min-h-screen flex flex-col justify-start items-center">
        <MainHeader />
        <Link href="/">
          <Image
            src="/assets/logo.png"
            width={150}
            height={150}
            alt="logo"
            className="mt-2"
          />
        </Link>
        Nie ma takiego produktu
      </main>
    );

  return (
    <main className="min-h-screen flex flex-col justify-start items-center">
      <MainHeader />
      <Link href="/">
        <Image
          src="/assets/logo.png"
          width={150}
          height={150}
          alt="logo"
          className="mt-2"
        />
      </Link>
      <ProductDetails
        img={product?.img!}
        name={product?.name}
        price={product.price}
        status={product.status}
        key={product.id}
      />
    </main>
  );
}
