import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Form = () => {
  return (
    <div className="w-[100vw] h-auto bg-[#F0F0F0] pt-[3rem] md:pt-[3rem] lg:pb-[4rem]">
      <div className=" mx-auto lg:flex-row lg:w-10/12 lg:mx-auto lg:justify-between flex flex-col">
        {/* section-1  */}
        <div className="font-poppins px-[1.5rem] lg:px-0 lg:w-7/12 flex justify-center items-center w-full">
          <div className="rounded-lg w-full">
            <p className="text-[12px] leading-[12px] text-[#142031]">
              Send us an Email
            </p>
            <h2 className="text-[22px] md:text-[32px] font-medium leading-[40px] md:leading-[61px] text-[#142031] mt-2 md:mt-3">
              Got a question? Ask our team!
            </h2>
            <div className="bg-[#1F94F3] h-[2px] w-[100px] mt-2 md:mt-2.5"></div>
            <p className="text-[#142031] text-[14px] md:text-[16px] leading-[20px] md:leading-[30px] mt-4 md:mt-6">
              Fill out the contact form and we will get back to you with the
              right answer.
            </p>

            <form className="space-y-4 md:space-y-6 mt-6 md:mt-12 text-[12px] leading-[18px]">
              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="border border-[#CBD6E2] p-3 rounded w-full "
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="border border-[#CBD6E2] p-3 rounded w-full"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                <input
                  type="email"
                  placeholder="Email*"
                  className="border border-[#CBD6E2] p-3 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Phone*"
                  className="border border-[#CBD6E2] p-3 rounded w-full"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                <select className="border border-gray-300 p-3 rounded w-full">
                  <option>State of residence</option>
                  <option>State 1</option>
                  <option>State 2</option>
                  <option>State 3</option>
                  {/* Add more states as needed */}
                </select>
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-[#CBD6E2] p-3 rounded w-full"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="border border-[#CBD6E2] p-3 rounded w-full h-32"
              ></textarea>
              <div className=" flex">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 mx-auto text-white px-8 py-4 text-[12px] leading-[16px] rounded-full mt-3 md:mt-4"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* section 2  */}
        <div className="w-full lg:w-4/12 bg-[#F5F8FA] mx-auto lg:border-t-[#1F94F3] lg:border-t-4 px-[2rem] py-[2.5rem] space-y-[1rem] font-poppins mt-8">
          <div className="mb-10">
            <h2 className="font-bold text-[#142031] leading-[24px]">
              Get in Touch With Us
            </h2>
            <p className="text-[12px] leading-[19.2px] mt-4 text-[#142031]">
              We&apos;re here to help with all your overseas education needs.
              Reach out to our team for personalized guidance, whether in person
              or online
            </p>
          </div>
          <hr />
          {/* number  */}
          <div className=" flex gap-4 items-center ">
            <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center">
              <FaPhoneAlt className=" text-[#1F94F3]" />
            </div>
            <p className="text-[12px] leading-[19.2px]">+91 84220-16687</p>
          </div>

          <hr />
          {/* Mail  */}
          <div className=" flex gap-4 items-center">
            <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center">
              <FaEnvelope className=" text-[#1F94F3]" />
            </div>
            <p className="text-[12px] leading-[19.2px]">info@careerthrive.in</p>
          </div>

          <hr />
          {/* whatapps  */}
          <div className=" flex gap-4 items-center">
            <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center">
              <FaWhatsapp className=" text-[#1F94F3]" />
            </div>
            <p className="text-[12px] leading-[19.2px]">+91 84220-16687</p>
          </div>

          <hr />
          {/* location  */}
          <div className=" flex gap-4 items-center">
            <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center">
              <FaMapMarkerAlt className=" text-[#1F94F3]" />
            </div>
            <div className="text-[12px] leading-[19.2px]">
              <h3 className="text-[#142031] text-[14px] leading-[27px] font-medium">
                Location
              </h3>{" "}
              <p>
                Surat | Mumbai | Pune | Bangalore | Ahmedabad
                <br /> Online sessions are also available
              </p>
            </div>
          </div>
          <hr className="" />
          <div className=" flex space-x-6 justify-center ">
            <div className="w-10 h-10 border flex justify-center items-center rounded-full mt-4">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 border flex justify-center items-center rounded-full mt-4">
              <FaTwitter />
            </div>
            <div className=" w-10 h-10 border flex justify-center items-center rounded-full mt-4">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
