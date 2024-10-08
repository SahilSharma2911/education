"use client";
import React from "react";
import { useState } from "react";

const Professional = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  return (
    <section>
      <div className="w-10/12 mx-auto mb-[3rem] md:mb-[4rem] mt-[1rem]">
        {/* heading section  */}
        <div className="space-y-1 md:space-y-3">
          <h2 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
            The Best of Professionals
          </h2>
          <p className="font-jost text-center text-[#5C6066] text-[14px] md:text-[16px]">
            With over 14 years of experience in overseas education counseling,
            our team has successfully placed more than 10,000 students in
            universities and colleges worldwide. We are dedicated to advancing
            the field of education, where our expertise and the diversity of
            opportunities allow us to play a pivotal role in international
            education
          </p>
        </div>

        {/* second section  */}
        <div className="mt-[2rem] md:mt-[3.5rem] flex-col gap-[2rem] md:flex-wrap md:flex-row  flex flex-wrap justify-between">
          {/* first  */}
          <div
            onMouseEnter={() => setShow1(true)}
            onMouseLeave={() => setShow1(false)}
            className=" md:w-3/12 relative w-full rounded-xl shadow-xl"
          >
            <img
              src={"/Images/team.jpeg"}
              alt="img"
              className="rounded-xl shadow-xl "
            />
            <div
              className={` cursor-pointer light-black flex rounded-xl justify-end px-5 pb-[2rem] text-center flex-col  top-0 h-full w-full text-white absolute bg-black bg-opacity-35 ${
                show1 ? "block" : "hidden"
              } `}
            >
              <h3 className="font-bold text-[1.5rem]">Linda asand</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia, quod.
              </p>
            </div>
          </div>

          {/* second  */}
          <div
            onMouseEnter={() => setShow2(true)}
            onMouseLeave={() => setShow2(false)}
            className="md:w-3/12 relative w-full rounded-xl shadow-xl"
          >
            <img
              src={"/Images/team.jpeg"}
              alt="img"
              className="rounded-xl shadow-xl "
            />
            <div
              className={` cursor-pointer light-black flex rounded-xl justify-end px-5 pb-[2rem] text-center flex-col  top-0 h-full w-full text-white absolute bg-black bg-opacity-35 ${
                show2 ? "block" : "hidden"
              } `}
            >
              <h3 className="font-bold text-[1.5rem]">Linda asand</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia, quod.
              </p>
            </div>
          </div>

          {/* third  */}
          <div
            onMouseEnter={() => setShow3(true)}
            onMouseLeave={() => setShow3(false)}
            className=" md:w-3/12 relative w-full rounded-xl shadow-xl"
          >
            <img
              src={"/Images/team.jpeg"}
              alt="img"
              className="rounded-xl shadow-xl "
            />
            <div
              className={` cursor-pointer light-black flex rounded-xl justify-end px-5 pb-[2rem] text-center flex-col  top-0 h-full w-full text-white absolute bg-black bg-opacity-35 ${
                show3 ? "block" : "hidden"
              } `}
            >
              <h3 className="font-bold text-[1.5rem]">Linda asand</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia, quod.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;
