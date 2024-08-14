import React from "react";

const WhoAre = () => {
  return (
    <div className="w-[100vw] h-auto">
      <div className="w-10/12 mx-auto  md:pb-[2rem] pt-[3rem] md:pt-[4rem]">
        <div>
          <h1 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
            WHO WE ARE
          </h1>
          <p className="font-jost text-center text-[#5C6066] text-[14px] md:text-[16px]">
            Road Map to Study Abroad
          </p>
        </div>
        <div className="w-full lg:justify-between lg:flex-row flex flex-col-reverse my-[2rem] mt-4 md:mt-12">
          <div className="lg:w-6/12 font-jost lg:text-left text-center py-4 text-[#5C6066] leading-[20px] md:leading-[23px] mt-2 md:mt-0">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </div>
          <div className=" lg:w-5/12 mt-3">
            <img
              src={"/Images/whoareimg.jpeg"}
              alt="img"
              className=" rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAre;
