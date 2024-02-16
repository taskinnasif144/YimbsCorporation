"use client";

import React from "react";
import Image from "next/image";
import { whyYimbns } from "@/constants";
import { motion } from "framer-motion";

function WhyYimbs() {
  return (
    <section className="flex flex-col md:justify-center md:items-center md:flex-row my-12 w-4/5 m-auto text-center">
      <div className="flex flex-col justify-center items-center ">
        <h4 className="bg-white text-black text-sm sxs:text-xl xs:text-2xl md:text-3xl p-2 px-8 w-full text-bg-gradient text-center">
          -Why Yimbs?
        </h4>
        <Image
          src={"/girl-happy.png"}
          alt="picture of a girl being happy about our services"
          width={600}
          height={800}
          className="m-auto"
        />
      </div>
      <div className="flex flex-col items-center">
        <div>
          <h4 className="text-2xl xs:text-4xl sm:text-6xl md:text-4xl from-neutral-600 mb-5 ">
            Where Needs Connect!{" "}
          </h4>
          <ul className="list-style ">
            {whyYimbns.map((element, index) => {
              return (
                <li
                  className="text-[12px] sxs:text-sm xs:text-base sm:text-2xl md:text-lg text-start"
                  key={index}>
                  {element}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyYimbs;
