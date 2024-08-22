import React from "react";

const WhyChoose = () => {
  return (
    <section className="w-[100vw] h-auto mt-[3.5rem] md:mt-[3rem] mb-[3rem]">
      <div className="w-10/12 mx-auto">
        {/* Heading section */}
        <div className="space-y-1.5">
          <h2 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
            WHY CHOOSE US
          </h2>
          <p className="font-jost text-center text-[#5C6066] text-[14px] md:text-[16px]">
            Endless possibilities begin here
          </p>
        </div>

        {/* Grid section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[2rem] md:mt-[4rem]">
          {[
            {
              src: "/Images/choose1.jpeg",
              text: "Served",
              number: "750+",
              subtext: "Student from 21 countries",
            },
            {
              src: "/Images/choose2.jpeg",
              text: "",
              number: "120+",
              subtext: "Student got the university of their choice",
            },
            {
              src: "/Images/choose3.jpeg",
              text: "",
              number: "900+",
              subtext: "Acceptance in 2024",
            },
            {
              src: "/Images/choose4.jpeg",
              text: "",
              number: "10x",
              subtext:
                "More likely to be accepted to elite universities in the US",
            },
            {
              src: "/Images/choose5.jpeg",
              text: "",
              number: "120+",
              subtext: "Elite university admissions",
            },
            {
              src: "/Images/choose6.jpeg",
              text: "",
              number: "3,400+",
              subtext: "Acceptance over 10 years",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-slate-300 rounded-xl overflow-hidden transition-all duration-500 ${
                index === 1 || index === 3 ? "md:row-span-2" : ""
              }`}
            >
              <div className="relative w-full h-full">
                {/* Image */}
                <img
                  src={item.src}
                  alt="##"
                  className="rounded-xl w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-40 rounded-xl pointer-events-none"></div>
                {/* Text content */}
                <div className="absolute bottom-0 p-4 text-white z-10">
                  {item.text && <p className="font-jost">{item.text}</p>}
                  <h3 className="text-[2rem] font-inria">{item.number}</h3>
                  <p className="font-jost">{item.subtext}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
