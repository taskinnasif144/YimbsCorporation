import Image from "next/image";
import React from "react";

function DownloadApp() {
  return (
    <section className="bg-[#D9D9D9] p-12 w-[80%] flex flex-col items-center justify-center text-black md:flex-row md:justify-around m-auto rounded-2xl">
      <div className="flex justify-center items-center mb-8 md:mb-0 md:mr-12">
        <Image
          src="/downloadApp/phone.png"
          alt="Yimbs open on a phone"
          width={300}
          height={300}
          className="min-w-[155px] min-h-[300px] w-[50%] h-[80%]"
        />
        <Image
          src="/downloadApp/scanME.png"
          alt="Yimbs open on a phone"
          width={500}
          height={500}
          className="h-[30%] w-[30%] min-h-[150px] min-w-[150px] ml-12"
        />
      </div>

      <div>
        <h4 className="text-2xl md:text-3xl lg:text-4xl m-2">
          - Download Yimbs App
        </h4>
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold m-2">
          Instant, Easy & Everywhere
        </h4>
        <div className="m-2">
          <input className="bg-white rounded-l-full px-3 py-1" type="text" />
          <button className="bg-black px-3 py-1 text-white rounded-r-full hover:bg-gray-600 focus:outline-none">
            Get The App
          </button>
        </div>
        <h4 className="m-2">You'll Fet an SMS with the App Download Link</h4>
      </div>
    </section>
  );
}

export default DownloadApp;
