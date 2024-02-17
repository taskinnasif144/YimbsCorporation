import React from "react";
import Image from "next/image";

const LoginPageButtons = ({ title, path, isBottom }) => {
  return (
    <div
      className={`py-2 px-4 mx-4 ${
        !isBottom && "my-3"
      } flex justify-start border-2 rounded-e-full rounded-s-full hover:bg-[#1B1A55] hover:border-[#1B1A55] transition-all duration-100 cursor-pointer select-none`}>
      <Image
        alt="Google Logo"
        src={path}
        height={20}
        width={20}
        className={`h-4 w-4 ${isBottom && "mr-2"}`}
      />
      <h4 className="text-xs text-center w-full">{title}</h4>
    </div>
  );
};

export default LoginPageButtons;
