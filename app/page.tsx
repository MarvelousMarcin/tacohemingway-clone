import Image from "next/image";
import MainHeader from "./components/MainHeader";

export default function Home() {
  return (
    <main className="min-h-screen w-screen flex flex-col justify-start items-center">
      <MainHeader />
      <Image
        src="/assets/logo.png"
        width={150}
        height={150}
        alt="logo"
        className="mt-12"
      />
    </main>
  );
}
