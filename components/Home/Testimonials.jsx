"use client";
import React from "react";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import Slider from "../TestimonialSlider/Slider";

const Testimonials = () => {
  return (
    <>
      <div className="relative lg:bg-banner bg-center bg-contain bg-no-repeat w-[100vw] h-[60vh]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full lg:w-10/12 bg-[#FAB819] mx-auto flex flex-col lg:flex-row justify-evenly h-full lg:h-auto py-7">
          {/* first block  */}
          <div className="flex flex-col items-center py-[1rem]">
            <h1 className="font-poppins text-[2.2rem] text-[#1B52E0]">
              100<span className="text-[1rem] font-bold">%</span>
            </h1>
            <p className="text-[#5C6066] font-bold">VISA GRANT (2023-24)</p>
          </div>

          {/* second block  */}
          <div className="flex flex-col items-center py-[1rem]">
            <h1 className="font-poppins text-[2.2rem] text-[#1B52E0]">
              24<span className="text-[1rem] font-bold">x7</span>
            </h1>
            <p className="text-[#5C6066] font-bold">SERVICE</p>
          </div>

          {/* Third block  */}
          <div className="flex flex-col items-center py-[1rem]">
            <h1 className="flex items-baseline font-poppins text-[2.2rem] text-[#1B52E0]">
              5
              <span className="text-[1rem]">
                <MdOutlineStarBorderPurple500 />
              </span>
            </h1>
            <p className="text-[#5C6066] font-bold">GOOGLE RATING</p>
          </div>

          {/* fourth block  */}
          <div className="flex flex-col items-center py-[1rem]">
            <h1 className="font-poppins text-[2.2rem] text-[#1B52E0]">
              10,000<span className="text-[1rem] font-bold">+</span>
            </h1>
            <p className="text-[#5C6066] font-bold">Students Abroad</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1F94F3] mx-auto">
        {/* Slider */}
        <Slider />
      </div>
    </>
  );
};

export default Testimonials;
