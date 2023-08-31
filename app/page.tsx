import Image from "next/image";
import MainHeader from "./components/MainHeader";
import ShopContent from "./components/ShopContent";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-start items-center">
      <MainHeader />
      <Image
        src="/assets/logo.png"
        width={150}
        height={150}
        alt="logo"
        className="mt-2"
      />
      <section className="flex flex-col justify-center h-fit gap-7">
        <ShopContent />
        <Footer />
      </section>
      <Image
        className="mb-3"
        src="/assets/logo.png"
        width={120}
        height={120}
        alt="logo"
      />
    </main>
  );
}
