"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../public/yimbs-logo.jpg";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [width, setWidth] = useState(0);
  const [hamAni, setHamAni] = useState(false);

  const updateScrollY = () => {
    const pageYOffset = window.scrollY;
    setScrollY(pageYOffset);
  };
  const updateHam = () => {
    setHamAni(!hamAni);
  };

  function handleResize() {
    // Set window width/height to state
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("scroll", updateScrollY);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", updateScrollY);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full flex flex-col justify-center items-center sticky top-0 left-0 bg-black p-4 z-20">
      <nav className="w-4/5 max-w-[1440px] relative flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="logo"
            height={width < 400 ? 30 : 40}
            width={width < 400 ? 30 : 40}
            className="rounded-lg"
          />
          <h1 className="text-3xl sm:text-4xl font-bold">Yimbs</h1>
        </div>

        {/*  Search-Bar hid, unhid*/}

        <div
          className={` hidden md:flex items-center transition-all bg-slate-100 px-4 py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[30px] w-[300px]  ${
            scrollY > 900 ? "scale-100" : "scale-0"
          } `}>
          <input
            type="text"
            className="bg-transparent outline-none w-full text-black"
            placeholder="eg. AC service, PC service.."
          />
          <SearchIcon className="text-black ml-1" />
        </div>

        {/*  Search-Bar hid, unhid*/}

        <div className="hidden md:flex items-center">
          <Link
            className={`mr-4 transition-all underline text-xs ${
              scrollY > 900 ? "scale-0" : "scale-100"
            } `}
            href="/">
            Join as Proffessional
          </Link>
          <Link className="mr-4 text-lg" href="/">
            Service
          </Link>
          <Link className="text-lg" href="/">
            Login
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="flex flex-col md:hidden z-20" onClick={updateHam}>
          <span
            className={`h-[2px] w-6 bg-white inline-block transition-all ${
              hamAni ? "rotate-45 translate-y-1/2" : ""
            }`}>
            {" "}
          </span>
          <span
            className={`h-[2px] w-6 bg-white  my-1 ${
              hamAni ? "hidden" : "inline-block"
            }`}>
            {" "}
          </span>
          <span
            className={`h-[2px] w-6 bg-white inline-block transition-all ${
              hamAni ? "-rotate-45 -translate-y-1/2 " : ""
            } `}>
            {" "}
          </span>
        </div>
        {/* Hamburger icon */}
      </nav>
      {/* Hamburger Drawer */}
      <div
        className={`flex flex-col items-end bg-[#191E24] w-[60%] min-w-[200px] max-w-[350px] h-[100vh] fixed top-0 right-0 transition-all text-start pl-4 sxs:pl-6 ${
          hamAni ? "translate-x-0" : "translate-x-[1000px]"
        }`}>
        <Link
          href={""}
          className="my-2 py-2 transition-all duration-150 w-full  mr-2 hover:bg-[#333333]  text-xs xs:text-lg px-3 rounded-lg mt-16  text-gray-400">
          Join As Proffessional
        </Link>
        <Link
          href={""}
          className="my-2 py-2 transition-all duration-150 w-full  mr-2 hover:bg-[#333333] text-xs xs:text-lg px-3 rounded-lg  text-gray-400">
          Services
        </Link>
        <Link
          href={""}
          className="my-2 py-2 transition-all duration-150 w-full  mr-2 hover:bg-[#333333]  text-xs xs:text-lg px-3 rounded-lg text-gray-400">
          Login
        </Link>
      </div>
      {/* Hamburger Drawer */}
    </header>
  );
}

export default Navbar;
