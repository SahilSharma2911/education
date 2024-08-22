import Image from "next/image";
import Link from "next/link";
import React from "react";

const universities = [
  { src: "/Images/u1.png", link: "https://www.utoronto.ca/" },
  { src: "/Images/u2.png", link: "https://www.ubc.ca/" },
  { src: "/Images/u3.png", link: "https://www.mcgill.ca/" },
  { src: "/Images/u4.png", link: "https://www.unimelb.edu.au/" },
  { src: "/Images/u5.png", link: "https://www.sydney.edu.au/" },
  { src: "/Images/u6.png", link: "https://www.uq.edu.au/" },
  { src: "/Images/u7.png", link: "https://www.ucla.edu/" },
  { src: "/Images/u8.png", link: "https://www.berkeley.edu/" },
  { src: "/Images/u9.png", link: "https://www.bristol.ac.uk/" },
  { src: "/Images/u10.png", link: "https://www.ed.ac.uk/" },
  { src: "/Images/u11.png", link: "https://www.gla.ac.uk/" },
  { src: "/Images/u12.png", link: "https://www.southampton.ac.uk/" },
  { src: "/Images/u13.png", link: "https://www.nottingham.ac.uk/" },
  { src: "/Images/u14.png", link: "https://www.leeds.ac.uk/" },
  { src: "/Images/u15.png", link: "https://www.sheffield.ac.uk/" },
  { src: "/Images/u16.png", link: "https://www.washington.edu/" },
  { src: "/Images/u17.png", link: "https://www.uq.edu.au/" },
  { src: "/Images/u18.png", link: "https://www.usf.edu/" },
];

const University = () => {
  return (
    <section className="w-full h-auto md:my-[3rem] px-[1rem]">
      <div>
        <h2 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[24px] leading-[33.6px]">
          SOME TOP RANKED UNIVERSITIES WHERE WE CAN GET YOU PLACED
        </h2>
        <p className="font-jost text-center text-[#5C6066] text-[14px] md:text-[24px] md:mt-1 leading-[42px]">
          Rankings as per QS World University Rankings 2024
        </p>
      </div>

      {/* grid  */}
      <div className="md:w-10/12 gap-3 md:gap-5 lg:gap-9 mx-auto md:grid-cols-4 lg:grid-cols-6 grid grid-cols-3 grid-rows-6 mt-[2rem] mb-[3rem] md:mb-[4rem] md:mt-[3rem] place-items-center lg:grid-rows-3">
        {universities.map((university, index) => (
          <Link
            href={university.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            <Image
              src={university.src}
              width={600}
              height={600}
              alt={`University ${index + 1}`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default University;
