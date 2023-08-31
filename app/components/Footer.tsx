const Footer = () => {
  return (
    <div className="flex justify-between text-[11px] gap-2 text-left px-3 xl:px-0 mb-11 md:mb-0">
      <div className="w-1/3">
        <h1 className="border-y-2 border-black p-1">DOSTAWA I PŁATNOŚĆ</h1>
        <ul className="text-[10px] flex flex-col gap-1 mt-2">
          <li className="hover:underline cursor-pointer">Dostawa i płatność</li>
          <li className="hover:underline cursor-pointer">
            Zasady dotyczące zwrotów i reklamacji
          </li>
        </ul>
      </div>
      <div className="w-1/3">
        <h1 className="border-y-2 p-1 border-black">REGULAMIN</h1>
        <ul className="text-[10px] flex flex-col gap-1 mt-2">
          <li className="hover:underline cursor-pointer">Regulamin</li>
        </ul>
      </div>
      <div className="w-1/3">
        <h1 className="border-y-2 p-1 border-black">POLITYKA PRYWATNOŚCI</h1>
        <ul className="text-[10px] flex flex-col gap-1 mt-2">
          <li className="hover:underline cursor-pointer">
            Polityka Prywatności
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
