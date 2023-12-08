import React from "react";
import { motion } from "framer-motion";

const ExpandedReviewCard = ({ customerData, index, selectedId }) => {
  return (
    <motion.div
      layoutId={index}
      onClick={() => selectedId(null)}
      className="w-[500px] h-[300px] bg-[#D9D9D9] px-4 py-3 rounded-lg shadow-xl text-black mx-4 my-6 absolute top-[20%] left-[33%] ">
      <motion.div className="flex items-center">
        <motion.img
          src={customerData.image}
          width={80}
          height={80}
          alt="Image of one of the customers"
          className="rounded-full h-[80px] w-{80px} object-center border-4 border-black translate-y-[-50%]"
        />

        <motion.div className="ml-4 text-left translate-y-[-15px]">
          <motion.h4 className="text-xl font-bold">
            {customerData.name}
          </motion.h4>
          <motion.h5 className="text-sm">{customerData.address}</motion.h5>
        </motion.div>
      </motion.div>
      <motion.div className="translate-y-[-20px] text-start">
        <motion.span>{customerData.review}</motion.span>
      </motion.div>
    </motion.div>
  );
};

export default ExpandedReviewCard;
