import React, { useState } from "react";

const EmailPassSignUp = ({ handleAction, isSignUp }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const color = "bg-white text-black";
  return (
    <div className="w-full px-5 sxs:px-4 sxs:w-[80%] mx-auto ">
      {isSignUp && (
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="mb-1 ml-2 text-xs sxs:text-sm xs:text-base">
              First Name
            </label>
            <input
              id="firstName"
              className={`w-full px-3 py-1 xs:py-2 border rounded-s-full rounded-e-full outline-none border-none ${color}`}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="mb-1 text-xs sxs:text-sm xs:text-base ml-2">
              Last Name
            </label>
            <input
              id="lastName"
              className={`w-full px-3 py-1 xs:py-2 border rounded-md rounded-s-full rounded-e-full border-none outline-none ${color}`}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className="flex flex-col my-4">
        <label
          htmlFor="email"
          className="mb-1 text-xs sxs:text-sm xs:text-base ml-2">
          Email
        </label>
        <input
          id="email"
          className={`w-full px-3 py-1 xs:py-2 border rounded-md rounded-s-full rounded-e-full border-none outline-none ${color}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="mb-1 text-xs sxs:text-sm xs:text-base ml-2">
          password
        </label>
        <input
          id="password"
          className={`w-full px-3 py-1 xs:py-2 border rounded-md rounded-s-full rounded-e-full border-none outline-none ${color}`}
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <button className="w-[80%] text-sm xs:text-base bg-[#6C22A6] hover:bg-[#7F27FF] rounded-e-full rounded-s-full my-4 py-1 transition-all duration-150">
          SignUp
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

export default EmailPassSignUp;
