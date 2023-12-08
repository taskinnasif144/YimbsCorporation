"use client";

import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { customerReview } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import ExpandedReviewCard from "./ExpandedReviewCard";

function CustomerReviews() {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelection = (id) => {
    setSelectedId(id);
  };
  console.log(selectedId);
  return (
    <section className="text-center w-[80%] m-auto my-16 relative">
      <h2 className="text-5xl my-12">What Customers Says about Yimmbs!</h2>
      <div className="flex flex-row overflow-hidden overflow-x-scroll noScrollBar">
        {customerReview.map((review, index) => (
          <ReviewCard
            key={index + 1}
            customerData={review}
            index={index + 1}
            selectedId={handleSelection}
          />
        ))}
      </div>

      <AnimatePresence>
        {customerReview.map(
          (review, index) =>
            selectedId !== null &&
            selectedId === index + 1 && (
              <ExpandedReviewCard
                key={index + 1}
                customerData={review}
                index={index + 1}
                selectedId={handleSelection}
              />
            )
        )}
      </AnimatePresence>
    </section>
  );
}

export default CustomerReviews;
