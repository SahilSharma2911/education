"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from "../../public/Images/data";
import Card from "../Card/Card";
import Image from "next/image";

const SliderComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [showDots, setShowDots] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth >= 1024);
      setShowDots(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    arrows: showArrows,
    dots: showDots,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => <div key={i}></div>,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul
          style={{
            margin: "0",
            padding: "0",
            display: "flex",
            listStyleType: "none",
          }}
        >
          {dots.map((dot, index) => (
            <li key={index}>
              {React.cloneElement(dot.props.children, {
                style: {
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  margin: "40px 0",
                  background: dot.props.className.includes("slick-active")
                    ? "#000"
                    : "#ddd",
                  transition: "background 0.3s ease",
                },
              })}
            </li>
          ))}
        </ul>
      </div>
    ),
    prevArrow: showArrows && (
      <Image src="/Images/left-ta.png" width={40} height={40} alt="Previous" />
    ),
    nextArrow: showArrows && (
      <Image src="/Images/right-ta.png" width={40} height={40} alt="Next" />
    ),
  };

  return (
    <section id="slider" className="pt-10 pb-10 mx-auto">
      <div className="mx-auto">
        <h2 className="font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2 text-center text-[#FED425]">
          <b>TESTIMONIALS</b>
        </h2>
        <p className="font-jost text-center text-white text-[14px] md:text-[16px]">
          What Our Students Say
        </p>
        <div className="slider mt-8 mb-14 lg:mb-0 lg:mt-8 px-4 lg:px-10 xl:px-14">
          <Slider {...settings}>
            {testimonial.map((item, index) => {
              const isZoomed =
                settings.slidesToShow === 3 &&
                item.id === (activeSlide + 1) % testimonial.length;

              let shade = "bg-blue-900";
              if (settings.slidesToShow === 3) {
                if (item.id === (activeSlide + 1) % testimonial.length) {
                  shade = "";
                } else {
                  shade = "lg:opacity-50";
                }
              }

              return (
                <div className="lg:py-10" key={item.id}>
                  <Card
                    className="slider-card"
                    name={item.name}
                    description={item.description}
                    image={item.img}
                    university={item.school}
                    zoom={isZoomed}
                    shade={shade}
                    linkedinUrl={item.linkedinUrl}
                    googlePlusUrl={item.googlePlusUrl}
                    imageUrl={item.imageUrl}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
