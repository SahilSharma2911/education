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
    <section ref={ref} className="w-[100vw] h-auto md:mt-4">
      <div className="w-10/12 mx-auto ">
        {/* heading section  */}
        <div className="space-y-3">
          <h2 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
            WHY CHOOSE US
          </h2>
        
          <div className="max-w-3xl mx-auto pt-2 space-y-3 text-center">
            <p className="font-jost text-[#5C6066] text-[14px] md:text-[15px] leading-relaxed">
              Career Thrive primarily caters to counselling students for their quest to study overseas and ensures they are guided in the best possible manner. Career Thrive is a one-stop solution for all student needs such as study loans, foreign exchange, visas, flight tickets, insurance, accommodation, and more—for both students and parents.
            </p>
            <p className="font-jost text-[#5C6066] text-[14px] md:text-[15px] leading-relaxed">
              We also cater to all kinds of foreign exchange transactions, travel needs (tickets, visas, holidays), and insurance services.
            </p>
            <p className="font-jost text-[#5C6066] text-[14px] md:text-[15px] leading-relaxed">
              Our principle is to offer every student the same world-class service that our clientele expects. Our team&apos;s primary goal is to ensure that each student&apos;s educational and career objectives are not just met, but exceeded.
            </p>
          </div>
        </div>

        {/* section second  */}
        <div className="my-[1rem] md:my-[3rem] flex flex-col lg:flex-row gap-2 md:gap-4 justify-between text-center">
          <div>
            <h3 className=" text-[60px] leading-[90px] text-[#1F94F3] font-poppins">
              {inView && <CountUp end={10000} duration={3} suffix="+" />}
            </h3>
            <p className=" font-jost text-[#5C6066] text-[15px] leading-[21px] font-bold">
              STUDENTS Abroad in last 14 years
            </p>
          </div>
          <div className=" bg-[#1F94F3] w-[0.1rem]"></div>
          <div>
            <h3 className=" text-[60px] leading-[90px] text-[#1F94F3] font-poppins">
              {inView && <CountUp end={100} duration={3} suffix="%" />}
            </h3>
            <p className=" font-jost font-semibold text-[#5C6066]">
              Admission Success Rate
            </p>
          </div>
          <div className=" bg-[#1F94F3] w-[0.1rem]"></div>
          <div>
            <h3 className=" text-[60px] leading-[90px] text-[#1F94F3] font-poppins">
              {inView && <CountUp end={100} duration={3} suffix="%" />}
            </h3>
            <p className=" font-jost font-semibold text-[#5C6066]">
              VISA SUCCESS RATE
            </p>
          </div>
          <div className=" bg-[#1F94F3] w-[0.1rem]"></div>
          <div>
            <h3 className=" text-[60px] leading-[90px] text-[#1F94F3] font-poppins">
              {inView && <CountUp end={100} duration={3} suffix="%" />}
            </h3>
            <p className=" font-jost font-semibold text-[#5C6066]">
              SATISFIED PARENTS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
