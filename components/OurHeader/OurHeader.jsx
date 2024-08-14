import Image from "next/image";
import React from "react";

const OurHeader = ({ title }) => {
  return (
    <div className="font-jost font-bold bg-center relative flex justify-center items-center  w-[100vw] md:h-[70vh]">
      <Image
        src={"/Images/banner.jpeg"}
        width={2500}
        height={2500}
        className="w-[100vw] h-full hidden md:flex object-cover"
      />
      <Image
        src={"/Images/banner-crop.jpeg"}
        width={2500}
        height={2500}
        className="w-full h-full object-cover flex md:hidden"
        alt="Banner"
      />
      <span className="z-20 text-white text-[24px] md:text-[40px] absolute">
        {title}
      </span>
      <div className=" absolute top-0 left-0 bg-black w-full h-full  opacity-50 "></div>
    </div>
  );
};

export default OurHeader;
