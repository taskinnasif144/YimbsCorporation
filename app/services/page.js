"use client";
import { AllServices } from "@/constants";
import { servicesHoverColor } from "@/constants/ColorConsts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const serviceRef = useRef({});
  const observer = useRef();
  const currentServiceRef = serviceRef.current;

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = document.querySelector(`#${entry.target.id}-btn`);
            element.classList.add("bg-[#436850]");
            element.classList.add("scale-110");
          } else {
            const element = document.querySelector(`#${entry.target.id}-btn`);
            element.classList.remove("bg-[#436850]");
            element.classList.remove("scale-110");
          }
        });
      },
      {
        // Set rootMargin for vertical center intersection
        rootMargin: "-40% 0% -55% 0%",
        // You can adjust the threshold if needed
        threshold: 0,
      }
    );

    Object.values(currentServiceRef).forEach((div) =>
      observer.current.observe(div)
    );
    return () => {
      Object.values(currentServiceRef).forEach((div) =>
        observer.current.unobserve(div)
      );
    };
  }, [currentServiceRef]);

  const scrollTOHash = (element_id) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <main className=" w-[full] max-w-[1440px] m-auto">
      <div className="flex">
        <div className="w-[30%] max-w-52 h-[89vh] overflow-hidden overflow-y-auto ">
          {AllServices.map((val, index) => {
            return (
              <div
                key={index}
                onClick={() => scrollTOHash(val.service.serviceID)}
                id={`${val.service.serviceID}-btn`}
                className={`flex flex-col xs:flex-row justify-center items-center m-2 p-2  cursor-pointer select-none rounded-lg transition-all scale-1`}>
                <Image
                  alt="logo"
                  src={"/clipArts/apple.png"}
                  height={20}
                  width={20}
                  className="h-6 w-6 mb-2 xs:mr-2"
                />

                <h2 className="text-[12px] text-center">{val.service.title}</h2>
              </div>
            );
          })}
        </div>
        <div className="w-[70%] h-[89vh] overflow-hidden overflow-y-auto ">
          {AllServices.map((val, index) => {
            return (
              <div
                key={index}
                className=""
                id={val.service.serviceID}
                ref={(el) => (currentServiceRef[val.service.serviceID] = el)}>
                <h2 className="text-xs text-center font-thin ">
                  {val.subServices.length} services in {val.service.title}{" "}
                  service
                </h2>
                {val.subServices.map((sub, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex items-center my-3  m-2 p-2 rounded-xl border-b-[1px] border-[#436850]`}>
                      <Image
                        alt="service image"
                        src={sub.source}
                        height={100}
                        width={100}
                        className="w-12 h-12 rounded-lg mr-2 object-cover object-center"
                      />
                      <h3 className="text-xs h-full">{sub.title}</h3>
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
