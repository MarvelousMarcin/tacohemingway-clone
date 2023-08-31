const MainHeader = () => {
  return (
    <header className="w-full h-9 flex flex-row text-[10px] items-center justify-center md:justify-end gap-6 md:px-48">
      <div className="flex gap-2">
        <div className="border-black cursor-pointer hover:underline">
          Logowanie
        </div>
        <div className=" bg-black w-[0.5px] h-4"></div>
        <div className="cursor-pointer hover:underline">Rejestracja</div>
      </div>
      <div className="text-xs hidden md:block">170,00 zł</div>
      <button className="bg-black text-white text-[10px] px-4 py-1 hidden md:block cursor-pointer">
        DO KASY
      </button>
    </header>
  );
};

export default MainHeader;
