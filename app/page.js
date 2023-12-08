"use client";

import {
  CustomerReviews,
  DownloadApp,
  Footer1,
  Footer2,
  ForHome,
  ForHomeMobile,
  Hero,
  RequestService,
} from "@/Components";
import Image from "next/image";

import { forHomeServices } from "@/constants";
import WhyYimbs from "@/Components/home/WhyYimbs";
import { Download } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Home() {
  const [width, setWidth] = useState(0);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen w-[full] ">
      <div className="">
        <Hero />
        {width < 720 ? (
          <ForHomeMobile />
        ) : (
          <ForHome title={"For Home"} array={forHomeServices} />
        )}

        {/* <ForHome title={"Trending Services"} array={forHomeServices} /> */}
        <WhyYimbs />
        <CustomerReviews />
        <DownloadApp />
        <RequestService />
        <footer>
          <Footer1 />
          <Footer2 />
        </footer>
      </div>
    </main>
  );
}
