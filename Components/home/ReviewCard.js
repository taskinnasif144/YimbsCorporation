"use client";

import { Widgets } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function ReviewCard({ customerData, index }) {
  return (
    <div
      className={`bg-[#D9D9D9] snap-center xs:px-4 py-3 rounded-lg shadow-xl text-black mx-4 first:ml-0 my-6 unselectable min-w-[100%]  xs:min-w-[400px] xs:min-h-[260px] `}>
      <div className="flex items-center justify-center ">
        <Image
          src={customerData.image}
          width={80}
          height={80}
          alt="Image of one of the customers"
          className="rounded-full h-[80px] w-{80px} object-center border-4 border-white mt-3 "
        />
      </div>
      <div className=" text-center my-5">
        <span className="text-[12px] sxs:text-sm italic text-gray-700 leading-none">
          {customerData.review}
        </span>
      </div>
      <div className="my-4 text-center">
        <h4 className="text-xl text-[#436850] font-bold">
          {customerData.name}
        </h4>
        <h5 className="text-sm">{customerData.address}</h5>
      </div>
    </div>
  );
}

export default ReviewCard;
