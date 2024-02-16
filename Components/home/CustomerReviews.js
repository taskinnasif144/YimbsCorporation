"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import { customerReview } from "@/constants";
import { motion, useAnimationControls } from "framer-motion";

function CustomerReviews() {
  const parent = useRef();
  const observer = useRef();
  const [width, setWidth] = useState(0);
  const controls = useAnimationControls();

  const updateWidth = () => {
    setWidth(parent.current.scrollWidth - parent.current.clientWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls
              .start({ translateX: -50, transition: { duration: 0.3 } })
              .then(() => {
                controls.start({
                  translateX: 0,
                  transition: { duration: 0.3 },
                });
              });
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px",
      }
    );
    observer.current.observe(parent.current);
    return () => {
      window.removeEventListener("resize", updateWidth);
      if (observer.current) observer.current.disconnect();
    };
  }, [controls]);

  return (
    <section className="text-center w-[80%] m-auto my-16 relative ">
      <h2 className="text-xl sxs:text-3xl md:text-5xl my-12">
        What Customers Says about Yimmbs!
      </h2>
      <div className="overflow-hidden overflow-x-scroll noScrollBar scroll-smooth cursor-grab">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          ref={parent}
          animate={controls}
          className="snap-mandatory snap-x flex flex-row ">
          {customerReview.map((review, index) => (
            <ReviewCard
              key={index + 1}
              customerData={review}
              index={index + 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CustomerReviews;
