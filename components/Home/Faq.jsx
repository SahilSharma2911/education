"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqData = [
  {
    id: 1,
    question: "What are the top attractions included in your tours?",
    answer:
      "Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations. Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures.",
  },
  {
    id: 2,
    question: "Do I need to make a reservation?",
    answer:
      "Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations. Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures.",
  },
  {
    id: 3,
    question: "Are children allowed on the tour?",
    answer:
      "Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations. Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures.",
  },
  {
    id: 4,
    question: "What safety measures are in place for tours?",
    answer:
      "Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations. Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures.",
  },
  {
    id: 5,
    question: "Do you offer group or private tours?",
    answer:
      "Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations. Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures.",
  },
  {
    id: 6,
    question: "What is your cancellation and refund policy?",
    answer:
      "Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations. Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures.",
  },
  {
    id: 7,
    question: "Do you offer customized or private tours?",
    answer:
      "Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations. Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures.",
  },
  {
    id: 8,
    question: "What are the payment options available?",
    answer:
      "Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations. Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures.",
  },
  {
    id: 9,
    question: "How do I contact customer support?",
    answer:
      "Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations. Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures.",
  },
];

const Faq = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id));
  };

  const getContentStyle = (isOpen) => ({
    maxHeight: isOpen ? "1000px" : "0px",
    overflow: "hidden",
    transition: "max-height 0.6s ease-in-out",
  });

  return (
    <div className="w-full my-[6rem]">
      <div className="w-9/12 lg:item-center lg:flex lg:flex-row lg:justify-between mx-auto">
        <div className="space-y-8 w-full">
          {faqData.map(({ id, question, answer }) => (
            <div key={id} className="flex justify-between">
              <div>
                <h1 className="font-heading font-semibold">{question}</h1>
                <div style={getContentStyle(openFaqId === id)}>
                  <p className="font-text mt-3 w-10/12">{answer}</p>
                </div>
              </div>
              <div>
                <button onClick={() => toggleFaq(id)}>
                  {openFaqId === id ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
