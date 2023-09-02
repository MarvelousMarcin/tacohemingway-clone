"use client";
import { useStore } from "@/app/store/store";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Label } from "@/app/components/ui/label";
const BasketHeader = ({}) => {
  const { basket } = useStore();

  if (basket.length === 0)
    return <div className="mt-10">Koszyk jest pusty</div>;

  return (
    <div className="flex flex-col gap-12 md:px-0 px-3">
      <section>
        <h1 className="text-xl border-b-[2px] border-gray-300 pb-5">KOSZYK</h1>
        <table className="border-spacing-x-4 text-left text-[12px] mt-3">
          <thead>
            <tr>
              <th>PRODUKT</th>
              <th>CENA</th>
              <th>ILOŚĆ</th>
              <th>WARTOŚĆ</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((prod) => (
              <tr key={prod.id}>
                <td className="pr-8 py-3 flex justify-start items-center gap-8">
                  <Image
                    src={prod.img}
                    width={90}
                    height={90}
                    alt="logo"
                    className="mt-2"
                  />
                  {prod.name}
                </td>

                <td className="pr-8 py-3">{prod.price} zł</td>
                <td className="pr-16 py-3">{prod.quantity}</td>
                <td className="pr-8 py-3">{prod.price * prod.quantity} zł</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="flex flex-col">
        <h1 className="text-xl border-b-[2px] border-gray-300 pb-3">
          FORMA DOSTAWY
        </h1>
        <RadioGroup defaultValue="comfortable" className="mt-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">InPost</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Kurier DHL</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Poczta Polska</Label>
          </div>
        </RadioGroup>
      </section>
      <section className="flex flex-col">
        <h1 className="text-xl border-b-[2px] border-gray-300 pb-3">
          PODSUMOWANIE
        </h1>
        <div className="flex flex-col items-start text-[12px] mt-3 self-end">
          <div className="flex gap-2 w-full">
            <h1>RAZEM: </h1>
            <div className="flex-grow"></div>
            <div>{793.0},00 zł</div>
          </div>
          <div className="flex gap-2 w-full">
            <h1>DO ZAPŁATY: </h1>
            <div className="flex-grow"></div>
            <div>{0.0},00 zł</div>
          </div>
          <div className="mt-2 text-gray-400">
            {" "}
            Czas realizacji [dni robocze]: 15
          </div>
        </div>
        <button className="bg-black text-white text-[13px] w-36 px-2 py-2 self-end mt-2">
          Przejdź dalej
        </button>
      </section>
    </div>
  );
};

export default BasketHeader;
