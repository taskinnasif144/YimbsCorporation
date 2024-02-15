"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { forHomeServices } from "@/constants";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const ForHomeMobile = ({ title, array }) => {
  const [counter, setCounter] = useState(0);

  const animateFrom = { scale: 0.99, opacity: 0.5 };
  const animateTo = { scale: 1, opacity: 1 };

  const clickLeft = () => {
    if (counter === 0) {
      return;
    }
    setCounter((counter - 1) % array.length);
  };

  const clickRight = () => {
    setCounter((counter + 1) % array.length);
  };

  return (
    <div className="flex justify-center items-center flex-col my-12">
      <h3 className=" text-3xl sxs:text-4xl mb-4">{title}</h3>
      <div className="text-center inline-block h-[250px] w-[250px] sxs:h-[350px] sxs:w-[350px] relative">
        <button
          onClick={clickLeft}
          className="absolute top-[50%] left-0 z-10 translate-y-[-50%] h-full rounded-l-xl hover:bg-gray-400 px-2 hover:bg-opacity-40 transition-all duration-300">
          <ChevronLeftIcon />
        </button>
        <motion.img
          key={counter}
          initial={animateFrom}
          animate={animateTo}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
          src={array[counter].path}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="mt-3 absolute -bottom-0 right-1/2 translate-x-1/2 ">
          <div className="relative">
            <h4 className="text-base sxs:text-xl text-black py-2 px-3 after:content-[''] after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:opacity-50 after:rounded-2xl after:-z-20">
              {array[counter].title}
            </h4>
          </div>
        </div>
        <button
          onClick={clickRight}
          className="absolute top-[50%] right-0 z-10 translate-y-[-50%] h-full rounded-r-xl hover:bg-gray-400 px-2 hover:bg-opacity-40 transition-all duration-300">
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default ForHomeMobile;
