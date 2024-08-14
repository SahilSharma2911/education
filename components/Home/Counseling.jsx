"use client";
import { StoreContext } from "@/context/StoreContext";
import React from "react";
import { useContext } from "react";

const Counseling = ({ bgColor }) => {
  const { images } = useContext(StoreContext);

  return (
    <div className={`w-[100vw] h-auto bg-[${bgColor}]`}>
      <div className="w-10/12 mx-auto my-[3rem] md:py-[4rem]">
        <div className="space-y-1">
          <h1 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
            THE COUNSELING PROCESS
          </h1>
          <p className="font-jost text-center text-[#5C6066] text-[14px] md:text-[16px]">
            Professional-Streamlined-Simple
          </p>
        </div>
        {/* steps  */}
        <div className=" flex gap-5 md:flex-wrap md:flex-row flex-col items-center justify-between mt-[1.5rem] md:mt-[3rem] flex-wrap">
          {/* step-1  */}
          <div className="w-8/12 md:w-5/12 lg:w-2/12  flex flex-col items-center gap-3 text-center">
            <div className="bg-[#1F94F3] w-[3.5rem] font-bold text-white text-[24px] rounded-full flex justify-center items-center h-[3.5rem]">
              1
            </div>
            <div>
              <img src={"/Images/step1.png"} alt="step1" />
            </div>
            <p className="text-[14px] md:text-[16px] leading-[20px] font-jost">
              Free Expert Counseling Service
            </p>
          </div>

          {/* step-2  */}
          <div className="w-8/12  md:w-5/12 lg:w-2/12 flex flex-col items-center gap-3 text-center">
            <div className="bg-[#1F94F3] w-[3.5rem] font-bold text-white text-[24px] rounded-full flex justify-center items-center h-[3.5rem]">
              2
            </div>
            <div>
              <img src={"/Images/step2.png"} alt="step1" />
            </div>
            <p className="text-[14px] md:text-[16px] leading-[20px] font-jost">
              Identify Course, Country & University
            </p>
          </div>

          {/* step-3  */}
          <div className="w-8/12 md:w-5/12 lg:w-2/12 flex flex-col items-center gap-3 text-center">
            <div className="bg-[#1F94F3] w-[3.5rem] font-bold text-white text-[24px] rounded-full flex justify-center items-center h-[3.5rem]">
              3
            </div>
            <div>
              <img src={"/Images/step3.png"} alt="step1" />
            </div>
            <p className="text-[14px] md:text-[16px] leading-[20px] font-jost">
              International Test Preparation
            </p>
          </div>

          {/* step-4  */}
          <div className="w-8/12 md:w-5/12 lg:w-2/12 flex flex-col items-center gap-3 text-center">
            <div className="bg-[#1F94F3] w-[3.5rem] font-bold text-white text-[24px] rounded-full flex justify-center items-center h-[3.5rem]">
              4
            </div>
            <div>
              <img src={"/Images/step4.png"} alt="step1" />
            </div>
            <p className="text-[14px] md:text-[16px] leading-[20px] font-jost">
              FApplication Editing & Processing
            </p>
          </div>

          {/* step-5 */}
          <div className="w-8/12 md:w-5/12 lg:w-2/12 flex flex-col items-center gap-3 text-center">
            <div className="bg-[#1F94F3] w-[3.5rem] font-bold text-white text-[24px] rounded-full flex justify-center items-center h-[3.5rem]">
              5
            </div>
            <div>
              <img src={"/Images/step5.png"} alt="step1" />
            </div>
            <p className="text-[14px] md:text-[16px] leading-[20px] font-jost">
              Funding, Visa & Pre- Departure Prep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counseling;
