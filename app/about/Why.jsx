"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Why = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="w-[100vw] h-auto md:mt-4">
      <div className="w-10/12 mx-auto ">
        {/* heading section  */}
        <div className="">
          <h1 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
            WHY CHOOSE US
          </h1>
          <p className="font-jost text-center text-[#5C6066] text-[14px] md:text-[16px]">
            Endless possibilities begin here
          </p>
        </div>

        {/* section second  */}
        <div className="my-[1rem] md:my-[3rem] flex flex-col lg:flex-row gap-2 md:gap-4 justify-between text-center">
          <div>
            <h1 className=" text-[60px] leading-[90px] text-[#1F94F3] font-poppins">
              {inView && <CountUp end={10000} duration={3} suffix="+" />}
            </h1>
            <p className=" font-jost text-[#5C6066] text-[15px] leading-[21px] font-bold">
              STUDENTS Abroad in last 14 years
            </p>
          </div>
          <div className=" bg-[#1F94F3] w-[0.1rem]"></div>
          <div>
            <h1 className=" text-[60px] leading-[90px] text-[#1F94F3] font-poppins">
              {inView && <CountUp end={100} duration={3} suffix="%" />}
            </h1>
            <p className=" font-jost font-semibold text-[#5C6066]">
              Admission Success Rate
            </p>
          </div>
          <div className=" bg-[#1F94F3] w-[0.1rem]"></div>
          <div>
            <h1 className=" text-[60px] leading-[90px] text-[#1F94F3] font-poppins">
              {inView && <CountUp end={100} duration={3} suffix="%" />}
            </h1>
            <p className=" font-jost font-semibold text-[#5C6066]">
              VISA SUCCESS RATE
            </p>
          </div>
          <div className=" bg-[#1F94F3] w-[0.1rem]"></div>
          <div>
            <h1 className=" text-[60px] leading-[90px] text-[#1F94F3] font-poppins">
              {inView && <CountUp end={100} duration={3} suffix="%" />}
            </h1>
            <p className=" font-jost font-semibold text-[#5C6066]">
              SATISFIED PARENTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
