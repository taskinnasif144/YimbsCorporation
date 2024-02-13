import React from "react";
import Image from "next/image";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";

const DownloadButton = () => {
  return (
    <div className="flex flex-col xs:flex-row items-center justify-center m-auto">
      <Image
        height={80}
        width={100}
        alt="download links"
        src={"/clipArts/appstore.png"}
        className="my-2 xs:my-0 xs: mx-4"
      />
      <Image
        height={70}
        width={110}
        alt="download links"
        src={"/clipArts/gplay.png"}
        className="my-2"
      />
    </div>
  );
};

export default DownloadButton;
