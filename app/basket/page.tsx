import Link from "next/link";
import Image from "next/image";
import BasketHeader from "./components/BasketHeader";
export default function Basket() {
  return (
    <main className="min-h-screen max-w- flex flex-col justify-start items-center">
      <Link href="/">
        <Image
          src="/assets/logo.png"
          width={150}
          height={150}
          alt="logo"
          className="mt-2"
        />
      </Link>
      <BasketHeader />
    </main>
  );
}
