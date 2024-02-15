import Image from "next/image";
import Link from "next/link";
import React from "react";

function RequestService() {
  return (
    <section className="py-[5%] px-[7%] flex items-center justify-center flex-col sm:flex-row my-12">
      <div className="mb-6">
        <h2 className="text-lg sxs:text-xl xs:text-3xl lg:text-5xl  font-medium mb-2 sxs:mb-5 md:mb-7 md:text-4xl">
          One Stop, One Tap, Every Solution
        </h2>
        <div className="flex ">
          <Link
            href="/#"
            className="text-[12px] sxs:text-sm xs:text-xl md:text-2xl lg:text-4xl p-1 px-3 border-2 rounded-lg ">
            Request a Service
          </Link>
          <Link
            href="/#"
            className="flex items-center justify-center text-[12px] sxs:text-sm xs:text-xl  md:text-2xl lg:text-4xl ml-2 sxs:ml-4 bg-[#D9D9D9] px-2 sxs:px-3 rounded-lg text-black">
            <Image
              src="/clipArts/viber.png"
              alt="image of a phone icon"
              height={40}
              width={40}
              className="h-3 w-3 xs:h-6 xs:w-6 mr-1"
            />
            01408080808
          </Link>
        </div>
      </div>

      <Image
        src="/call-girl.png"
        alt="A picture of a girl worling in a call center"
        height={400}
        width={400}
        className="h-[170px] w-[230px] sxs:h-[200px] sxs:w-[270px] sm:h-[30%] sm:w-[40%] max-h-[400px] max-w-[525px]"
      />
    </section>
  );
}

export default RequestService;
/* viber 1 */
