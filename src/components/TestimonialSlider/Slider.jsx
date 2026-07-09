"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { studentVideos, videoPoster } from "@/lib/videos";
import { MdOutlinePlayCircle } from "react-icons/md";

const VideoSlide = ({
  id,
  src,
  zoom,
  shade,
  activeVideoId,
  onPlay,
  onStop,
  centerOnClick,
  onCenter,
}) => {
  const playing = activeVideoId === id;

  const handleClick = (e) => {
    // A side slide first slides to the middle; the centered slide plays.
    if (centerOnClick) {
      onCenter();
      return;
    }
    const v = e.currentTarget.parentElement.querySelector("video");
    v?.play();
    onPlay(id);
  };

  return (
    <div
      className={`mx-3 xl:mx-4 transition-transform duration-300 ${shade} ${
        zoom ? "lg:transform lg:scale-110" : ""
      }`}
    >
      <div className="relative w-full max-w-[280px] mx-auto aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-lg">
        <video
          src={src}
          poster={videoPoster(src)}
          className="w-full h-full object-cover"
          preload="none"
          playsInline
          controls={playing}
          onEnded={() => onStop(id)}
        />
        {!playing && (
          <button
            onClick={handleClick}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
            aria-label={centerOnClick ? "Bring video to center" : "Play testimonial video"}
          >
            <MdOutlinePlayCircle className="text-6xl text-white drop-shadow-lg" />
          </button>
        )}
      </div>
    </div>
  );
};

const SliderComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [showDots, setShowDots] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  // Enforce single playback + autoplay control across slick's cloned slides.
  // Media events don't bubble, but they pass through the capture phase, so a
  // capture listener on the container catches every <video> (original + clone).
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const handlePlayEvent = (e) => {
      root.querySelectorAll("video").forEach((v) => {
        if (v !== e.target) v.pause();
      });
      sliderRef.current?.slickPause();
    };
    const handleStopEvent = () => {
      const anyPlaying = Array.from(root.querySelectorAll("video")).some(
        (v) => !v.paused && !v.ended
      );
      if (!anyPlaying) sliderRef.current?.slickPlay();
    };

    root.addEventListener("play", handlePlayEvent, true);
    root.addEventListener("pause", handleStopEvent, true);
    root.addEventListener("ended", handleStopEvent, true);
    return () => {
      root.removeEventListener("play", handlePlayEvent, true);
      root.removeEventListener("pause", handleStopEvent, true);
      root.removeEventListener("ended", handleStopEvent, true);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setShowArrows(w >= 1024);
      setShowDots(w <= 1024);
      setVisibleCount(w > 1024 ? 3 : w > 800 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pauseAllVideos = useCallback(() => {
    containerRef.current?.querySelectorAll("video").forEach((v) => v.pause());
    setActiveVideoId(null);
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
    beforeChange: (current, next) => {
      setActiveSlide(next);
      // Pause any playing video when the slide changes.
      pauseAllVideos();
    },
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
        <div
          ref={containerRef}
          className="slider mt-8 mb-14 lg:mb-0 lg:mt-8 px-4 lg:px-6 max-w-[1200px] mx-auto"
        >
          <Slider ref={sliderRef} {...settings}>
            {studentVideos.map((item, index) => {
              const len = studentVideos.length;
              const centerOffset = Math.floor(visibleCount / 2);
              const centerIndex = (activeSlide + centerOffset) % len;
              const isCenter = index === centerIndex;
              const isZoomed = visibleCount === 3 && isCenter;
              const shade =
                visibleCount === 3 && !isCenter ? "lg:opacity-50" : "";
              const centerOnClick = visibleCount > 1 && !isCenter;

              return (
                <div className="lg:py-10" key={item.id}>
                  <VideoSlide
                    id={item.id}
                    src={item.src}
                    zoom={isZoomed}
                    shade={shade}
                    activeVideoId={activeVideoId}
                    onPlay={setActiveVideoId}
                    onStop={() => setActiveVideoId(null)}
                    centerOnClick={centerOnClick}
                    onCenter={() =>
                      sliderRef.current?.slickGoTo(
                        (index - centerOffset + len) % len
                      )
                    }
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
