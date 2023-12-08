"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { forHomeServices } from "@/constants";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const ForHomeMobile = () => {
  const [counter, setCounter] = useState(0);

  const animateFrom = { scale: 0.8, opacity: 0.5 };
  const animateTo = { scale: 1, opacity: 1 };

  const clickLeft = () => {
    if (counter === 0) {
      return;
    }
    setCounter((counter - 1) % forHomeServices.length);
  };

  const clickRight = () => {
    setCounter((counter + 1) % forHomeServices.length);
  };

  return (
    <div className="flex justify-center ">
      <div className="text-center inline-block h-[300px] w-[300px] relative">
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
          src={forHomeServices[counter].path}
          className="w-full h-full object-cover rounded-xl"
        />
        <h4 className="text-xl mt-3 text-whtie">
          {forHomeServices[counter].title}
        </h4>
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
