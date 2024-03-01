"use client";
import { AllServices } from "@/constants";
import { servicesHoverColor } from "@/constants/ColorConsts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-[full] max-w-[1440px] m-auto">
      <div className="flex">
        <div className="w-[30%] max-w-52">
          {AllServices.map((val, index) => {
            return (
              <Link
                key={index}
                href={`services/#${val.service.title}`}
                className={`flex flex-col xs:flex-row justify-center items-center m-2 p-2 hover:bg-[${servicesHoverColor}] cursor-pointer select-none rounded-lg`}>
                <Image
                  alt="logo"
                  src={"/clipArts/apple.png"}
                  height={20}
                  width={20}
                  className="h-6 w-6 mb-2 xs:mr-2"
                />

                <h2 className="text-[12px] text-center">{val.service.title}</h2>
              </Link>
            );
          })}
        </div>
        <div className="w-[70%] my-4">
          {AllServices.map((val, index) => {
            return (
              <div key={index} className="" id={val.service.title}>
                <h2 className="text-xs text-center font-thin">
                  {val.subServices.length} services in {val.service.title}{" "}
                  service
                </h2>
                {val.subServices.map((sub, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex items-center my-3 hover:bg-[${servicesHoverColor}] m-2 p-2 rounded-xl`}>
                      <Image
                        alt="service image"
                        src={sub.source}
                        height={100}
                        width={100}
                        className="w-12 h-12 rounded-lg mr-2 object-cover object-center"
                      />
                      <h3 className="text-xs">{sub.title}</h3>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
