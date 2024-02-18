import React from "react";
import Image from "next/image";

const PhoneSignUp = ({ handleAction }) => {
  return (
    <div className="w-full sxs:w-[80%] mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[90%] xs:w-[80%]">
          <label htmlFor="phoneNum" className="ml-2 text-sm xs:text-lg">
            Mobile Number
          </label>
          <div className="flex justify-center items-center bg-white px-5 py-2 rounded-s-full rounded-e-full mt-2">
            <Image
              alt="Bangladesh Flag"
              src={"/clipArts/bangladesh.png"}
              height={30}
              width={30}
            />
            <span className="text-black text-sm xs:text-xl ml-2">+88</span>
            <input
              type="text"
              id="mobileNum"
              className="ml-2 bg-transparent border-none outline-none text-black w-full text-sm xs:text-xl"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <button className="w-[80%] text-sm xs:text-base bg-[#6C22A6] hover:bg-[#7F27FF] rounded-e-full rounded-s-full my-4 py-1 transition-all duration-150">
          Continue
        </button>

        <div className="text-center cursor-pointer " onClick={handleAction}>
          <button className="px-5 py-1 text-xs xs:text-base rounded-e-full rounded-s-full hover:bg-[#6d22a657] transition-all ">
            Login with other options
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneSignUp;
