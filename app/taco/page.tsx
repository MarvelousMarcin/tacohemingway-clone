"use client";
import Image from "next/image";
import {
  motion,
  useAnimate,
  useInView,
  useMotionValueEvent,
} from "framer-motion";
import { useScroll } from "framer-motion";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import TopMenu from "./components/TopMenu";
import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const raleway = Poppins({ subsets: ["latin"], weight: ["400"] });
const cs = ["Trójkąt Warszawki", "Umowa o dzieło", "Marmur", "Szprycer"];

export default function Taco() {
  const { scrollY } = useScroll();
  const [scope, animate] = useAnimate();
  const [bg, bgAnimate] = useAnimate();
  const [bg2, bg2Animate] = useAnimate();
  const [bg3, bg3Animate] = useAnimate();
  const ref = useRef();

  const [currentCD, setCurrentCD] = useState(0);

  const [ease, setEase] = useState(false);

  useEffect(() => {
    (async () => {
      if (currentCD === 0) {
        if (ease === false) {
          await animate(
            scope.current,
            { y: "-100%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.3 }
          );
          scope.current.innerHTML = cs[0];

          await bgAnimate(
            bg.current,
            { x: "100%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.8 }
          );

          animate(
            scope.current,
            { y: "0%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.3 }
          );
        }
      }

      if (currentCD === 1) {
        if (ease === false) {
          await animate(
            scope.current,
            { y: "-100%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.3 }
          );
          scope.current.innerHTML = cs[1];

          await bgAnimate(
            bg2.current,
            { x: "100%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.8 }
          );

          await animate(
            scope.current,
            { y: "0%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.3 }
          );
        } else {
          await animate(
            scope.current,
            { y: "-100%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.3 }
          );
          scope.current.innerHTML = cs[1];

          await bgAnimate(
            bg.current,
            { x: "0%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.8 }
          );
          await animate(
            scope.current,
            { y: "0%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.3 }
          );
        }
      }
      if (currentCD === 2) {
        if (ease === false) {
          await animate(
            scope.current,
            { y: "-100%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.3 }
          );
          scope.current.innerHTML = cs[2];

          await bgAnimate(
            bg3.current,
            { x: "100%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.8 }
          );

          await animate(
            scope.current,
            { y: "0%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.3 }
          );
        } else {
          await animate(
            scope.current,
            { y: "-100%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.3 }
          );
          scope.current.innerHTML = cs[2];

          await bg2Animate(
            bg2.current,
            { x: "0%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.8 }
          );

          await animate(
            scope.current,
            { y: "0%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.3 }
          );
        }
      }

      if (currentCD === 3) {
        await animate(
          scope.current,
          { y: "-100%" },
          { ease: [0.19, 1, 0.9, 1], duration: 0.3 }
        );
        scope.current.innerHTML = cs[3];

        await bg3Animate(
          bg3.current,
          { x: "0%" },
          { ease: [0.19, 1, 0.9, 1], duration: 0.8 }
        );

        await animate(
          scope.current,
          { y: "0%" },
          { ease: [0.19, 1, 0.9, 1], duration: 0.3 }
        );
      }
    })();
  }, [
    ease,
    animate,
    scope,
    bg,
    bgAnimate,
    bg2Animate,
    bg3Animate,
    currentCD,
    bg3,
    bg2,
  ]);

  return (
    <main
      className={clsx(
        "min-w-screen min-h-screen overflow-x-hidden  flex flex-col justify-center items-center ",
        raleway.className
      )}
    >
      <TopMenu />
      <motion.div className="w-full h-screen bg-center bg-cover bg-taco-bg-1 bg-no-repeat flex justify-evenly items-center fixed"></motion.div>
      <motion.div
        ref={bg}
        initial={{ x: "100%" }}
        className="w-full h-screen bg-center bg-cover bg-taco-bg-2 bg-no-repeat flex justify-evenly items-center fixed"
      ></motion.div>
      <motion.div
        ref={bg2}
        initial={{ x: "100%" }}
        className="w-full h-screen bg-center bg-cover bg-taco-bg-3 bg-no-repeat flex justify-evenly items-center fixed"
      ></motion.div>
      <motion.div
        ref={bg3}
        initial={{ x: "100%" }}
        className="w-full h-screen bg-center bg-cover bg-taco-bg-4 bg-no-repeat flex justify-evenly items-center fixed"
      ></motion.div>

      <motion.div className="flex justify-center items-center gap-16">
        <motion.div
          style={{ zIndex: currentCD === 0 ? "-20" : "1" }}
          whileTap={{ rotate: "90deg" }}
        >
          <Plus
            onClick={() => {
              setEase(false);
              setCurrentCD((prev) => {
                if (prev === 0) return cs.length - 1;
                return prev - 1;
              });
            }}
            size={30}
            className="text-white drop-shadow-2xl cursor-pointer"
          />
        </motion.div>
        <div className="overflow-hidden">
          <motion.div
            ref={scope}
            transition={{ ease: [0.39, 1, 0.265, 0.9] }}
            className="text-white text-[3rem] font-bold drop-shadow-xl cursor-pointer min-w-[30rem] text-center"
          >
            {cs[0]}
          </motion.div>
        </div>
        <motion.div
          style={{ zIndex: currentCD === 3 ? "-20" : "1" }}
          whileTap={{ rotate: "90deg" }}
        >
          <Plus
            onClick={() => {
              setEase(true);
              setCurrentCD((prev) => {
                if (prev === cs.length - 1) return 0;
                return prev + 1;
              });
            }}
            size={30}
            className="text-white drop-shadow-xl cursor-pointer"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
