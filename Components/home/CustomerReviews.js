"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import { customerReview } from "@/constants";
import { useDraggable } from "react-use-draggable-scroll";

function CustomerReviews() {
  const parent = useRef();
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const scrollElement = parent.current;
            const scrollWidth = scrollElement.scrollWidth;
            const clientWidth = scrollElement.clientWidth;
            console.log("scroll width", scrollWidth);
            console.log("client width", clientWidth);
            if (scrollWidth > clientWidth) {
              scrollElement.scrollBy({ left: 25, behavior: "smooth" });
              console.log("scroll started");
              setTimeout(() => {
                scrollElement.scrollBy({ left: -25, behavior: "smooth" });
                console.log("Back to position");
              }, 200);
            }
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px",
      }
    );
    observer.current.observe(parent.current);
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return (
    <section className="text-center w-[80%] m-auto my-16 relative ">
      <h2 className="text-xl sxs:text-3xl md:text-5xl my-12">
        What Customers Says about Yimmbs!
      </h2>
      <div className="flex">
        <div
          ref={parent}
          className="snap-mandatory snap-x flex flex-row overflow-hidden overflow-x-scroll noScrollBar scroll-smooth cursor-grab">
          {customerReview.map((review, index) => (
            <ReviewCard
              key={index + 1}
              customerData={review}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
