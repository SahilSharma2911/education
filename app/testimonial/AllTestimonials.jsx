import React from "react";
import { testimonial } from "../../public/Images/data";
import Card from "@/components/Card/Card";
const AllTestimonials = () => {
  return (
    <section className="mt-[3rem] mb-[3rem] md:mt-[4rem]">
      <div className="space-y-1">
        <h2 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
          STUDENT TESTIMONIALS
        </h2>
        <p className="font-jost text-center text-[#5C6066] text-[14px] md:text-[16px]">
          Experiences, and stories from our students
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto my-[3rem]">
        {testimonial.map((item) => (
          <Card
            className="slider-card"
            key={item.id}
            name={item.name}
            description={item.description}
            image={item.img}
            university={item.school}
          />
        ))}
      </div>
      <div className=" flex">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 mx-auto text-white px-8 py-4 text-[16px] leading-[16px] rounded-xl -mt-2 md:mt-4"
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default AllTestimonials;
