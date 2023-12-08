"use client";

import React from "react";
import Image from "next/image";
import { whyYimbns } from "@/constants";
import { motion } from "framer-motion";

function WhyYimbs() {
  return (
    <section className="flex flex-col md:justify-center md:items-center md:flex-row my-12">
      <motion.div className="">
        <h4 className="bg-white text-black text-3xl p-2 px-8 w-[600px] text-bg-gradient m-auto">
          -Why Yimbs?
        </h4>
        <Image
          src={"/girl-happy.png"}
          alt="picture of a girl being happy about our services"
          width={600}
          height={800}
          className="m-auto"
        />
      </motion.div>
      <div className="flex flex-col items-center">
        <motion.div>
          <h4 className="text-4xl from-neutral-600 mb-5">
            Where Needs Connect!{" "}
          </h4>
          <ul className="list-style ">
            {whyYimbns.map((element, index) => {
              return (
                <li className="text-2xl" key={index}>
                  {element}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyYimbs;
