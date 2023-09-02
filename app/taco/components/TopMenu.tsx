"use client";

import clsx from "clsx";
import { Dispatch, FC, MutableRefObject, SetStateAction } from "react";

interface TopMenuProps {
  setIsAboutOpen: Dispatch<SetStateAction<boolean>>;
  isAboutOpen: boolean;
  didMountRef: MutableRefObject<boolean>;
}

const TopMenu: FC<TopMenuProps> = ({
  setIsAboutOpen,
  isAboutOpen,
  didMountRef,
}) => {
  return (
    <menu className="flex text-white gap-7 text-sm fixed top-4 z-50 ">
      <div
        onClick={() => {
          setIsAboutOpen(false);
          didMountRef.current = false;
        }}
        className={clsx(
          "cursor-pointer  drop-shadow-2xl",
          isAboutOpen && "text-[#5a5a5a]"
        )}
      >
        Work
      </div>
      <div
        onClick={() => {
          setIsAboutOpen(true);
          didMountRef.current = false;
        }}
        className={clsx(
          "cursor-pointer  drop-shadow-2xl",
          !isAboutOpen && "text-[#5a5a5a]"
        )}
      >
        About
      </div>
    </menu>
  );
};

export default TopMenu;
