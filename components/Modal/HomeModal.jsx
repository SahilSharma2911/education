"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LiaTimesSolid } from "react-icons/lia";

const HomeModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 md:py-4 lg:m-0 px-[0.2rem] lg:px-0 lg:pr-20">
      <div className="relative p-4 lg:w-[800px] h-fit lg:h-[550px] flex flex-col lg:flex-row items-center justify-center overflow-hidden ">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-8 lg:top-4 right-8 lg:right-4 text-2xl lg:mt-20 z-10"
        >
          <LiaTimesSolid />
        </button>
        {/* Background Image */}
        <div className="lg:absolute inset-0 flex items-center lg:items-end justify-center lg:justify-end">
          <Image
            src="/Images/bg-modal.jpeg"
            width={700}
            height={700}
            alt="Modal background"
            className="object-cover hidden lg:flex"
          />
          <Image
            src="/Images/bg-modal2.jpeg"
            width={700}
            height={700}
            alt="Modal background"
            className="object-cover flex lg:hidden"
          />
        </div>
        {/* Human Image */}
        <div className="absolute top-[55%] left-0 transform -translate-y-1/2 hidden lg:flex">
          <Image
            src="/Images/human.png"
            width={400}
            height={400}
            alt="Human"
            className="z-20 w-[60%] lg:w-[400px]"
          />
        </div>
        {/* Form Content */}
        <form className="lg:absolute bottom-2 right-0 z-30 p-8 lg:rounded-lg text-center lg:text-start text-[#000000] w-full lg:w-[50%] font-jost flex flex-col bg-white lg:bg-transparent ">
          <h2 className="text-[22px] md:text-[28px] leading-[33px] md:leading-[42px] font-bold font-poppins">
            Unlock Your Dream of Studying Abroad!
          </h2>
          <p className="text-[14px] leading-[20px] font-semibold mt-3">
            Get expert guidance and personalized support.
          </p>
          <div className="text-[#1C1F2A] space-y-3 mt-10 w-full">
            <input
              type="text"
              placeholder="Name"
              className="border border-[#CBD6E2] p-2.5 rounded w-full outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-[#CBD6E2] p-2.5 rounded w-full outline-none"
            />
            <div className="w-full">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 mx-auto text-white px-8 py-4 text-[16px] leading-[16px] rounded-lg mt-3 md:mt-4 w-full"
              >
                SIGN ME UP
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeModal;
