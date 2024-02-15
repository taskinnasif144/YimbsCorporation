"use client";

import React, { useState } from "react";
import { locations } from "../../constants";
import { optimizeFonts } from "@/next.config";
import LandingPageInput from "./LandingPageInput";
import SearchIcon from "@mui/icons-material/Search";

function VendorQuery() {
  const [division, setDiviison] = useState("--Select Division--");
  const [area, setArea] = useState("--Select Area--");
  const [areas, setAreas] = useState([]);

  const selectDivision = (e) => {
    setDiviison(e.target.value);
    locations.forEach((element) => {
      if (element.name === e.target.value) {
        setAreas(element.areas);
      }
    });
  };

  return (
    <div className="p-3 my-8 sm:p-6 bg-[#D9D9D9] rounded-lg ">
      <h4 className="text-black text-sm sxs:text-lg lg:text-[30px] font-bold my-3">
        What Are You Looking For?
      </h4>
      <LandingPageInput />
      <div className="my-2 sxs:my-4 flex overflow-hidden">
        <select
          className="w-1/2 p-[3px] sxs:p-2 sm:p-[10px]  bg-white text-black text-[10px] sxs:text-sm sm:text-lg shadow-2xl"
          name="division"
          id=""
          onChange={selectDivision}>
          <option value="">--Division--</option>
          {locations
            ? locations.map((location, index) => (
                <option
                  key={index}
                  value={location.name}
                  onClick={selectDivision}>
                  {location.name}
                </option>
              ))
            : ""}
        </select>
        <select
          className="ml-2 w-1/2 p-[3px] sxs:p-2 sm:p-[10px]  bg-white text-black  text-[10px] sxs:text-sm sm:text-lg shadow-2xl"
          name="Area"
          id="">
          <option value="">--Area--</option>
          {areas.length !== 0
            ? areas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))
            : "Select Division First"}
        </select>
      </div>
      <div className="text-center">
        <button className="text-white text-sm bg-black px-[12px] lg:px-[30px] py-[2px] sxs:py-2 lg:py-[12px] rounded-lg hover:bg-gray-800 ">
          Get Started <SearchIcon className="text-base" />
        </button>
      </div>
    </div>
  );
}

export default VendorQuery;
