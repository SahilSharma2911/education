import React from "react";
import { MdOutlinePlayCircle } from "react-icons/md";

const StudentTestimonial = () => {
  return (
    <section className="mb-[3rem] md:mb-[4rem]">
      <div>
        <h2 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
          STUDENTS VEDIOS
        </h2>
      </div>

      <div className=" w-10/12 gap-9 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-[2.5rem] md:mt-[3rem] mb-[3rem] place-items-center ">
        {/* 1 */}
        <div className=" w-[21rem] h-[14.5rem] flex justify-center items-center  bg-[#D9D9D9]">
          <MdOutlinePlayCircle className=" text-[8rem]" />
        </div>

        {/* 2 */}
        <div className=" w-[21rem] h-[14.5rem] flex justify-center items-center  bg-[#D9D9D9]">
          <MdOutlinePlayCircle className=" text-[8rem]" />
        </div>

        {/* 3 */}
        <div className=" w-[21rem] h-[14.5rem] flex justify-center items-center  bg-[#D9D9D9]">
          <MdOutlinePlayCircle className=" text-[8rem]" />
        </div>

        {/* 4 */}
        <div className=" w-[21rem] h-[14.5rem] flex justify-center items-center  bg-[#D9D9D9]">
          <MdOutlinePlayCircle className=" text-[8rem]" />
        </div>

        {/* 5 */}
        <div className=" w-[21rem] h-[14.5rem] flex justify-center items-center  bg-[#D9D9D9]">
          <MdOutlinePlayCircle className=" text-[8rem]" />
        </div>

        {/* 6 */}
        <div className=" w-[21rem] h-[14.5rem] flex justify-center items-center  bg-[#D9D9D9]">
          <MdOutlinePlayCircle className=" text-[8rem]" />
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonial;
