"use client";
import Image from "next/image";
import {
  motion,
  useAnimate,
  useInView,
  useMotionValueEvent,
} from "framer-motion";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import TopMenu from "./components/TopMenu";
import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const raleway = Poppins({ subsets: ["latin"], weight: ["400"] });
const cs = ["Trójkąt Warszawki", "Umowa o dzieło", "Marmur", "Szprycer"];
import { usePrevious } from "@uidotdev/usehooks";

export default function Taco() {
  const [scope, animate] = useAnimate();
  const [bg, bgAnimate] = useAnimate();
  const [bg2, bg2Animate] = useAnimate();
  const [bg3, bg3Animate] = useAnimate();
  const [text, textAnimate] = useAnimate();

  const didMountRef = useRef(false);
  const [ref1, ref1Anim] = useAnimate();
  const [ref2, ref2Anim] = useAnimate();
  const [ref3, ref3Anim] = useAnimate();

  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const [currentCD, setCurrentCD] = useState(0);
  const previousCD = usePrevious(currentCD);
  console.log(currentCD, previousCD);
  const [ease, setEase] = useState(false);
  const isInView = useInView(text, { margin: "-50%" });

  useEffect(() => {
    (async () => {
      if (isInView) {
        await ref1Anim(
          ref1.current,
          { y: "0" },
          { ease: [0.19, 1, 0.9, 1], duration: 0.4 }
        );
        await ref2Anim(
          ref2.current,
          { y: "0" },
          { ease: [0.19, 1, 0.9, 1], duration: 0.4 }
        );
        await ref3Anim(
          ref3.current,
          { y: "0" },
          { ease: [0.19, 1, 0.9, 1], duration: 0.4 }
        );
      } else {
        await ref1Anim(ref1.current, { y: "100%" }, { duration: 0.1 });
        await ref2Anim(ref2.current, { y: "100%" }, { duration: 0.1 });
        await ref3Anim(ref3.current, { y: "100%" }, { duration: 0.1 });
      }
    })();
    (async () => {
      if (currentCD === 0) {
        if (ease === false) {
          if (didMountRef.current === true) {
            await animate(
              scope.current,
              { y: "-100%" },
              { ease: [0.19, 1, 0.9, 1], duration: 0.2 }
            );
            scope.current.innerHTML = cs[0];

            await bgAnimate(
              bg.current,
              { x: "100%" },
              { ease: [0.19, 1, 0.9, 1], duration: 1 }
            );
          }
          animate(
            scope.current,
            { y: "0%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.2 }
          );
        }
      }

      if (currentCD === 1) {
        if (didMountRef.current === true) {
          if (ease === false) {
            await animate(
              scope.current,
              { y: "-100%" },
              { ease: [0.19, 1, 0.9, 1], duration: 0.2 }
            );
            scope.current.innerHTML = cs[1];

            bg2Animate(
              bg2.current,
              { x: "100%" },
              { ease: [0, 1, 0.78, 0.98], duration: 1 }
            );

            await animate(
              scope.current,
              { y: "0%" },
              { ease: [0.19, 1, 0.9, 1], duration: 0.2 }
            );
          } else {
            await animate(
              scope.current,
              { y: "-100%" },
              { ease: [0.19, 1, 0.9, 1], duration: 0.2 }
            );
            scope.current.innerHTML = cs[1];

            await bgAnimate(
              bg.current,
              { x: "0%" },
              { ease: [0, 1, 0.78, 0.98], duration: 1 }
            );
            await animate(
              scope.current,
              { y: "0%" },
              { ease: [0.19, 1, 0.9, 1], duration: 0.2 }
            );
          }
        }
      }
      if (currentCD === 2) {
        if (didMountRef.current === true) {
          if (ease === false) {
            await animate(
              scope.current,
              { y: "-100%" },
              { ease: [0.19, 1, 0.9, 1], duration: 0.2 }
            );
            scope.current.innerHTML = cs[2];

            await bg3Animate(
              bg3.current,
              { x: "100%" },
              { ease: [0, 1, 0.78, 0.98], duration: 1 }
            );

            await animate(
              scope.current,
              { y: "0%" },
              { ease: [0.19, 1, 0.9, 1], duration: 0.2 }
            );
          } else {
            await animate(
              scope.current,
              { y: "-100%" },
              { ease: [0.19, 1, 0.9, 1], duration: 0.2 }
            );
            scope.current.innerHTML = cs[2];

            await bg2Animate(
              bg2.current,
              { x: "0%" },
              { ease: [0, 1, 0.78, 0.98], duration: 1 }
            );

            await animate(
              scope.current,
              { y: "0%" },
              { ease: [0.19, 1, 0.9, 1], duration: 0.2 }
            );
          }
        }
      }

      if (currentCD === 3) {
        if (didMountRef.current === true) {
          await animate(
            scope.current,
            { y: "-100%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.2 }
          );
          scope.current.innerHTML = cs[3];

          await bg3Animate(
            bg3.current,
            { x: "0%" },
            { ease: [0, 1, 0.78, 0.98], duration: 1 }
          );

          await animate(
            scope.current,
            { y: "0%" },
            { ease: [0.19, 1, 0.9, 1], duration: 0.2 }
          );
        }
      }
    })();
    didMountRef.current = true;
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
    isInView,
    textAnimate,
  ]);

  return (
    <main
      className={clsx(
        "min-w-screen min-h-screen overflow-x-hidden  flex flex-col justify-center items-center ",
        raleway.className
      )}
    >
      <TopMenu
        setIsAboutOpen={setIsAboutOpen}
        isAboutOpen={isAboutOpen}
        didMountRef={didMountRef}
      />
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
            initial={{ y: "-100%" }}
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
      <motion.section
        ref={text}
        animate={{ y: isAboutOpen ? "0" : "100%" }}
        initial={{ y: "100%" }}
        transition={{ ease: [0, 1, 0.78, 0.98], duration: 1 }}
        className="w-screen min-h-[100vh] fixed top-0 left-0 bg-[#141414] z-40 text-white flex flex-col justify-center items-center"
      >
        <div className="overflow-hidden">
          <motion.div
            ref={ref1}
            initial={{ y: "100%" }}
            className="text-[3rem]"
          >
            Taco Hemingway
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div ref={ref2} initial={{ y: "100%" }}>
            Filip Tadeusz Szcześniak
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div ref={ref3} initial={{ y: "100%" }}>
            polski raper oraz autor tekstów.
          </motion.div>
        </div>
        <Image
          src="/assets/taco.jpg"
          width={300}
          height={300}
          alt="logo"
          className="mt-5"
        />
      </motion.section>
    </main>
  );
}
