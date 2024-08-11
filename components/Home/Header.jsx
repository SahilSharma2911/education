"use client";
import React, { useContext } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { StoreContext } from "@/context/StoreContext";
import "./Header.css";

const Header = () => {
  const { headerData } = useContext(StoreContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="slider-dot" />,
  };

  return (
    <div className="w-full relative">
      <div className="">
        <Image
          src={"/Images/homeBanner.png"}
          width={2500}
          height={2500}
          className="w-[100vw] h-full hidden md:flex"
        />
        <Image
          src={"/Images/homeBanner2.png"}
          width={2500}
          height={2500}
          className="w-full h-full object-cover flex md:hidden"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-black opacity-50 flex md:hidden"></div>
      </div>

      {/* Slider  */}
      <div className="w-10/12 z-20 md:w-7/12 left-[2rem] md:left-[6rem] lg:w-5/12 mx-auto absolute top-[26%] md:top-14 lg:top-[-26px] xl:top-7 2xl:top-20  text-white">
        <Slider {...settings}>
          {headerData.map((el) => (
            <div
              key={el.id}
              className=" space-y-5  md:mt-6 md:space-y-5 mt-1 lg:mt-[5rem]"
            >
              <h1 className=" text-[0.8rem] lg:text-[1.9rem] font-bold font-poppins">
                {el.title}
              </h1>
              <p className=" text-[0.6rem] font-jost lg:text-[1.1rem]">
                {el.description}
              </p>
              <button className=" bg-[#1F94F3] hover:bg-[#077bda] px-[0.9rem] text-[0.5rem] rounded-3xl py-1  lg:text-[1.2rem] ">
                Enquire Now
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Header;
