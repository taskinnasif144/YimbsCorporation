"use client";

import React, { useEffect, useRef, useState } from "react";
import DraggableServices from "./DraggableServices";
import { motion, useAnimationControls } from "framer-motion";

function ForHome({ title, array }) {
  const parent = useRef();
  const observer = useRef();
  const controls = useAnimationControls();
  const [width, setWidth] = useState(0);

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
              .start({ translateX: -50, transition: { duration: 0.5 } })
              .then(() => {
                controls.start({
                  translateX: 0,
                  transition: { duration: 0.5 },
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
    <div className="w-4/5 my-12 m-auto">
      <h3 className="text-[35px] mb-4"> {title}</h3>
      <div className="w-full overflow-hidden overflow-x-scroll noScrollBar flex-nowrap cursor-grab">
        <motion.div
          className="flex snap-mandatory snap-x "
          ref={parent}
          dragConstraints={{ right: 0, left: -width }}
          animate={controls}
          drag="x">
          {array.map((service, index) => {
            return (
              <motion.div key={index}>
                <DraggableServices title={service.title} path={service.path} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default ForHome;
