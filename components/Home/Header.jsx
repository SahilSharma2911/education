"use client";
import React from "react";
import { useContext } from "react";
import Slider from "react-slick";
import "./Header.css";
import { images } from "../../public/Images/data";
import { StoreContext } from "@/context/StoreContext";
import Image from "next/image";

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
  };
  return (
    <div className="w-full relative">
      <div className="">
        <Image
          src={"/Images/homeBanner.png"}
          width={2500}
          height={2500}
          className="w-[100vw] h-full"
        />
      </div>

      {/* Slider  */}
      <div className="w-10/12 z-20 md:w-7/12 left-[6rem] lg:w-5/12 mx-auto absolute top-20  text-white">
        <Slider {...settings}>
          {headerData.map((el) => (
            <div
              key={el.id}
              className=" lg:space-y-5 space-y-1 md:mt-6 md:space-y-5 mt-1 lg:mt-[5rem]"
            >
              <h1 className=" text-[0.8rem] md:text-[1.9rem] font-bold font-poppins">
                {el.title}
              </h1>
              <p className=" text-[0.6rem] font-jost md:text-[1.1rem]">
                {el.description}
              </p>
              <button className=" bg-[#1F94F3] hover:bg-[#077bda] px-[0.9rem] text-[0.5rem] rounded-3xl py-1  md:text-[1.2rem] ">
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
