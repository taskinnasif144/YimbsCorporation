import Image from "next/image";
import React from "react";
import { footerImages } from "@/constants";
function Footer2() {
  const usebg = (path) => {
    const cmp = "/clipArts/twitter.png";
    if (path === cmp) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex justify-between items-center w-full flex-col md:flex-row bg-black px-16 py-4">
      <div className="flex items-center">
        <Image
          width={20}
          height={20}
          src="/yimbs-logo.jpg"
          alt="logo of the website"
          className="h-4 w-4 sxs:h-8 sxs:w-8"
        />
        <p className="ml-3 text-[10px] sxs:text-xs xs:text-sm sm:text-base md:text-lg">
          © 2023 | Yimbs Ltd. | All Rights Reserved
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/clipArts/globe.png"
          alt="image of an globe"
          width={10}
          height={10}
          className="bg-[#D9D9D9] border-white border-[1px] rounded-full h-3 sxs:h-4 w-3 sxs:w-4 xs:h-6 xs:w-6 my-3"
        />
        <p className="my-3 ml-2 mr-2 text-[10px] sxs:text-sm">English</p>

        {footerImages.map((image, index) => {
          return (
            <Image
              key={index}
              src={image}
              alt="image of logos"
              width={10}
              height={10}
              className={`rounded-sm h-3 sxs:h-4 w-3 sxs:w-4 m-1 xs:h-6 xs:w-6 ${
                usebg(image) ? "bg-white" : ""
              } `}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Footer2;
