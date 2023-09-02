import { FC } from "react";

interface TopMenuProps {}

const TopMenu: FC<TopMenuProps> = ({}) => {
  return (
    <menu className="flex text-white gap-7 text-sm fixed top-4 z-40 ">
      <div className="cursor-pointer drop-shadow-xl">Work</div>
      <div className="cursor-pointer text-[#5a5a5a] drop-shadow-2xl">About</div>
    </menu>
  );
};

export default TopMenu;
