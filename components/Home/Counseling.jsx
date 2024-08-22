"use client";
import { StoreContext } from "@/context/StoreContext";
import React from "react";
import { useContext } from "react";

const Counseling = ({ page }) => {
  const homepageStyles =
    page === "homepage" ? "bg-[#F0F0F0] py-[3rem]" : "my-[3rem] md:py-[4rem]";

  const { images } = useContext(StoreContext);

  return (
    <section className={`w-[100vw] h-auto ${homepageStyles}`}>
      <div className="w-10/12 mx-auto">
        <div className="space-y-1">
          <h2 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
            THE COUNSELING PROCESS
          </h2>
          <p className="font-jost text-center text-[#5C6066] text-[14px] md:text-[16px]">
            Professional-Streamlined-Simple
          </p>
        </div>
        {/* steps */}
        <div className="flex gap-5 md:flex-wrap md:flex-row flex-col items-center justify-between mt-[1.5rem] md:mt-[3rem] flex-wrap">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-8/12 md:w-5/12 lg:w-2/12 flex flex-col items-center gap-3 text-center group"
            >
              <div className="bg-[#1F94F3] w-[3.5rem] font-bold text-white text-[24px] rounded-full flex justify-center items-center h-[3.5rem] transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
                {index + 1}
              </div>
              <div>
                <img
                  src={`/Images/step${index + 1}.png`}
                  alt={`step${index + 1}`}
                />
              </div>
              <p className="text-[14px] md:text-[16px] leading-[20px] font-jost">
                {
                  [
                    "Free Expert Counseling Service",
                    "Identify Course, Country & University",
                    "International Test Preparation",
                    "Application Editing & Processing",
                    "Funding, Visa & Pre-Departure Prep.",
                  ][index]
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counseling;
