"use client";
import React, { useEffect, useState } from "react";
import { Hero1, Hero2 } from "..";

function Hero() {
  const [width, setWidth] = useState(0);
  const [animating, setAnimating] = useState(true);
  const [count, setCount] = useState(0);

  const onAnimationCompleted = () => {
    setCount((count + 1) % 4);
    setAnimating(!animating);
  };

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={
        "w-full  flex p-4 sxs:px-9 sxs:py-3 sm:pr-0 items-center flex-col md:flex-row gradient-black_to_grey "
      }>
      <Hero1
        animating={animating}
        count={count}
        onAnimationCompleted={onAnimationCompleted}
      />
      <Hero2 count={count} />
    </section>
  );
}

export default Hero;
