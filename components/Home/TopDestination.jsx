"use client";
import React from "react";
import Slider from "react-slick";

const TopDestination = () => {
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
    <div className="w-[100vw] h-auto my-[3rem] md:my-[4rem]">
      <div className="w-10/12 mx-auto">
        {/* heading section */}
        <div className="space-y-2 md:space-y-3">
          <h1 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
            TOP 5 STUDY ABROAD DESTINATIONS
          </h1>
          <p className="font-jost text-center text-[#5C6066] text-[14px] md:text-[16px]">
            Where do you want to study?
          </p>
        </div>

        {/* Flags section */}
        <div className="hidden w-full my-[4rem] lg:flex justify-between">
          {[
            { src: "/Images/flag1.png", text: "Study in USA" },
            { src: "/Images/flag2.png", text: "Study in UK" },
            { src: "/Images/flag3.png", text: "Study in Canada" },
            { src: "/Images/flag4.png", text: "Study in Australia" },
            { src: "/Images/flag5.png", text: "Study in Italy" },
          ].map((flag, index) => (
            <div
              key={index}
              className="text-center w-2/12 flex flex-col items-center gap-3 transition-transform duration-300 transform hover:scale-105"
            >
              <div>
                <img src={flag.src} alt={flag.text} />
              </div>
              <h1 className="font-bold">{flag.text}</h1>
            </div>
          ))}
        </div>

        {/* Mobile view */}
        <div className="lg:hidden w-9/12 mx-auto mt-8">
          <Slider {...settings}>
            {[
              { src: "/Images/flag1.png", text: "Study in USA" },
              { src: "/Images/flag2.png", text: "Study in UK" },
              { src: "/Images/flag3.png", text: "Study in Canada" },
              { src: "/Images/flag4.png", text: "Study in Australia" },
              { src: "/Images/flag5.png", text: "Study in Italy" },
            ].map((flag, index) => (
              <div
                key={index}
                className="w-2/12 text-center flex flex-col items-center gap-3"
              >
                <div>
                  <img src={flag.src} alt={flag.text} />
                </div>
                <h1 className="font-bold">{flag.text}</h1>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
