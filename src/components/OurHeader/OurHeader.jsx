"use client";
import Image from "next/image";
import React, { useState } from "react";

const OurHeader = ({ title }) => {
  const [loaded, setLoaded] = useState(false);

  const imgFade = `transition-opacity duration-700 ${
    loaded ? "opacity-100" : "opacity-0"
  }`;

  return (
    <header className="font-jost font-bold bg-center relative flex justify-center items-center w-[100vw] min-h-[220px] md:h-[70vh] overflow-hidden">
      {/* Shimmer placeholder while the banner loads */}
      {!loaded && <div className="shimmer absolute inset-0 z-10" />}

      <Image
        src={"/Images/banner.jpeg"}
        width={2500}
        height={2500}
        priority
        onLoad={() => setLoaded(true)}
        className={`w-[100vw] h-full hidden md:flex object-cover ${imgFade}`}
        alt="Banner"
      />
      <Image
        src={"/Images/banner-crop.jpeg"}
        width={2500}
        height={2500}
        priority
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover flex md:hidden ${imgFade}`}
        alt="Banner"
      />
      <span className="z-20 text-white text-[24px] md:text-[40px] absolute">
        {title}
      </span>
      <div className="absolute top-0 left-0 bg-black w-full h-full opacity-50"></div>
    </header>
  );
};

export default OurHeader;
