import React from "react";

const Why = () => {
  return (
    <div className="w-[100vw] h-auto md:mt-4">
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
              10,000+
            </h1>
            <p className=" font-jost text-[#5C6066] text-[15px] leading-[21px] font-bold">
              STUDENTS Abroad in last 14 years
            </p>
          </div>
          <div className=" bg-[#1F94F3] w-[0.1rem]"></div>
          <div>
            <h1 className=" text-[60px] leading-[90px] text-[#1F94F3] font-poppins">
              100%
            </h1>
            <p className=" font-jost font-semibold text-[#5C6066]">
              Admission Success Rate
            </p>
          </div>
          <div className=" bg-[#1F94F3] w-[0.1rem]"></div>
          <div>
            <h1 className=" text-[60px] leading-[90px] text-[#1F94F3] font-poppins">
              100%
            </h1>
            <p className=" font-jost font-semibold text-[#5C6066]">
              VISA SUCCESS RATE
            </p>
          </div>
          <div className=" bg-[#1F94F3] w-[0.1rem]"></div>
          <div>
            <h1 className=" text-[60px] leading-[90px] text-[#1F94F3] font-poppins">
              100%
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
