import React from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { toggleAuthDialog } from "@/redux/Slices/AuthDialogSlice";
import Image from "next/image";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import LoginPageButtons from "./LoginPageButtons";

const LoginPage = () => {
  const dispath = useDispatch();
  const handleDialog = () => {
    dispath(toggleAuthDialog());
  };
  return (
    <div className="h-full w-full xs:h-[500px] xs:w-[500px] flex flex-col justify-around fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 z-20 gradient-grey_to_black">
      <button
        onClick={handleDialog}
        className=" p-0 bg-[#D9D9D9] text-black absolute top-0 right-0 xs:translate-x-1/2 xs:-translate-y-1/2 xs:rounded-full">
        <ClearOutlinedIcon />
      </button>
      {/* PRODUCT */}
      <div className="text-center pt-12 xs:pt-5">
        <Image
          alt={"logo"}
          src={"/yimbs-logo.jpg"}
          height={40}
          width={40}
          className="m-auto rounded-full"
        />
        <h1 className="text-2xl font-bold my-3">YIMBS</h1>

        <h3 className=" text-lg">Where Needs Connect!</h3>
      </div>
      {/* PRODUCT */}
      {/* SIGN IN BUTTONS */}
      <div className="w-full sxs:w-[80%] mx-auto">
        <h3 className="text-center mb-3">Sign In to Your Account</h3>
        <LoginPageButtons
          title={"Continue With Google"}
          path={"/clipArts/google.png"}
          isBottom={false}
        />
        <LoginPageButtons
          title={" Continue with Email/password"}
          path={"/clipArts/gmail.png"}
          isBottom={false}
        />
        <LoginPageButtons
          title={"Continue with Phone"}
          path={"/clipArts/google.png"}
          isBottom={false}
        />

        <div className="text-center">Or </div>
        <div className="flex justify-center">
          <LoginPageButtons
            title={"Apple"}
            path={"/clipArts/apple.png"}
            isBottom={true}
          />
          <LoginPageButtons
            title={"Facebook"}
            path={"/clipArts/facebook.jpg"}
            isBottom={true}
          />
        </div>
      </div>
      {/* SIGN IN BUTTONS */}
      {/* SIGN UP SING IN TOGGLE */}
      <div>
        <h3 className="text-center">
          {"Don't have an account?"} <span className="font-bold">Sign Up</span>
        </h3>
      </div>
      {/* SIGN UP SING IN TOGGLE */}
    </div>
  );
};

export default LoginPage;
