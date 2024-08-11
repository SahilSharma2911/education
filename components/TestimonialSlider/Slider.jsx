"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from "../../public/Images/data";
import Card from "../Card/Card";

const SliderComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
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
  };

  return (
    <section id="slider" className="pt-8 pb-20 mx-auto">
      <div className="mx-auto">
        <h1 className="text-center text-[2rem] text-yellow-500">
          <b>TESTIMONIALS</b>
        </h1>
        <p className="text-center">What Our Students Say</p>
        <div className="slider my-6 px-4 lg:px-10 xl:px-14">
          <Slider {...settings}>
            {testimonial.map((item) => {
              const isZoomed =
                settings.slidesToShow === 3 &&
                item.id === (activeSlide + 1) % testimonial.length;

              return (
                <div className="lg:py-10" key={item.id}>
                  <Card
                    className="slider-card"
                    name={item.name}
                    description={item.description}
                    image={item.img}
                    university={item.school}
                    zoom={isZoomed}
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
