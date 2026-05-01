import React from "react";

const cards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4 6v-2m0 0a4 4 0 10-4-4 4 4 0 004 4zm0 0a4 4 0 104-4 4 4 0 00-4 4z" />
      </svg>
    ),
    title: "Life After Admission",
    text: "At Career Thrive, we assist you in confidently starting a new chapter in your life, not only in being admitted. Even after you leave, we remain in touch and provide prompt support when you need it.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Settlement & Opportunities",
    text: "We can help you with anything from community groups to part-time work possibilities to acclimating to a new academic system. Our support extends well beyond the application process.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Family Support",
    text: "Since families want comfort during this process, we also provide resources for parents. Our staff makes sure parents are educated and involved at every stage—from financial planning to safety and healthcare in destination countries.",
  },
];

const BeyondEducation = () => {
  return (
    <section className="w-full bg-[#F0F0F0] py-[3rem] md:py-[4rem]">
      <div className="w-10/12 mx-auto">
        {/* Heading */}
        <div className="space-y-2 mb-[2.5rem] md:mb-[3rem]">
          <h2 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px]">
            Beyond Education: A Comprehensive Support System
          </h2>
          <p className="font-jost text-center text-[#5C6066] text-[14px] md:text-[16px]">
            We stay with you every step of the way — before, during, and after
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon, title, text }, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#EBF5FE] flex items-center justify-center text-[#1F94F3] shrink-0">
                {icon}
              </div>
              <h3 className="font-poppins font-semibold text-[#1F94F3] text-[16px] md:text-[18px] leading-snug">
                {title}
              </h3>
              <p className="font-jost text-[#5C6066] text-[14px] md:text-[15px] leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondEducation;
