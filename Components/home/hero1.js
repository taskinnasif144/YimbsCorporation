"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import VendorQuery from "./VendorQuery";
import KeyWords from "./KeyWords";
import Image from "next/image";

function Hero1({ animating, count, onAnimationCompleted }) {
  const serviceArray = [
    "Air Conndition",
    "Desktop",
    "Refrigerator",
    "Appliances",
  ];

  const [width, setWidth] = useState(0);

  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <div className="w-full py-3 flex flex-col justify-center items-center">
      <h2 className=" text-xl sxs:text-2xl xs:text-4xl lg:text-6xl font-bold relative ">
        <div className="flex items-center w-[210px] sxs:w-[290px] xs:w-[450px] lg:w-[600px]">
          Your
          <AnimatePresence>
            <div className="width-fit-conent inline-block ml-2 mr-2 relative overflow-hidden">
              <motion.h2
                className="gradient-text"
                key={count}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  repeatType: "loop",
                }}>
                {serviceArray[count]}
              </motion.h2>
            </div>
          </AnimatePresence>
        </div>
        <div className="text-xl sxs:text-2xl xs:text-4xl lg:text-6xl flex items-end">
          Service by One
          <motion.div
            className="inline-block ml-3 "
            initial={{ x: animating ? 0 : 40 }}
            animate={{ x: animating ? 40 : 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
            }}
            onAnimationComplete={onAnimationCompleted}>
            <Image
              alt={"tap icon"}
              src={"/clipArts/tap.png"}
              width={width < 480 ? 30 : 40}
              height={width < 480 ? 30 : 40}
            />
          </motion.div>
        </div>
      </h2>
      <div className="w-full max-w-[500px]  sm:w-[70%] md:pt-12">
        <VendorQuery />
        <KeyWords />
      </div>
    </div>
  );
}

export default Hero1;

// className="h-10 overflow-hidden"
