"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqData = [
  {
    id: 1,
    question: "How can I find scholarships or financial aid for studying abroad?",
    answer:
      "Key opportunities include merit-based, need-based, and country-specific scholarships, often covering tuition, accommodation, and travel costs. Start by contacting university advisors.",
  },
  {
    id: 2,
    question: "What is the cost of studying abroad?",
    answer:
      "Studying abroad generally costs between ₹11 lakhs and ₹40 lakhs per year for Indian students, covering tuition, living expenses, and travel. It can range from ₹10 lakhs to over ₹50 lakhs depending on the country and program.",
  },
  {
    id: 3,
    question: "How do I know if I'm eligible to study abroad?",
    answer:
      "Eligibility depends on academic qualifications, language requirements (like IELTS/TOEFL), and financial criteria.",
  },
];

const Faq = () => {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (id) => {
    setOpenFaqs((prevOpenFaqs) => ({
      ...prevOpenFaqs,
      [id]: !prevOpenFaqs[id],
    }));
  };

  const getContentStyle = (isOpen) => ({
    maxHeight: isOpen ? "1000px" : "0px",
    overflow: "hidden",
    transition: "max-height 0.6s ease-in-out",
  });

  return (
    <section className="w-full my-[3rem]">
      <div className="space-y-1.5">
        <h2 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2 border-b-[3px] border-[#1F94F3] w-fit mx-auto px-1 pb-1">
          FAQ
        </h2>
      </div>
      <div className="w-9/12 lg:item-center lg:flex lg:flex-row lg:justify-between mx-auto mt-[2rem] md:mt-[4rem]">
        <div className="space-y-8 w-full">
          {faqData.map(({ id, question, answer }) => (
            <div key={id} className="flex justify-between">
              <div>
                <h3 className="font-heading font-semibold">{question}</h3>
                <div style={getContentStyle(openFaqs[id])}>
                  <p className="font-text mt-3 w-10/12">{answer}</p>
                </div>
              </div>
              <div>
                <button onClick={() => toggleFaq(id)}>
                  {openFaqs[id] ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
