import React from "react";

const WhoAre = () => {
  return (
    <div className="w-[100vw] h-auto">
      <div className="w-10/12 mx-auto  md:pb-[2rem] pt-[3rem] md:pt-[4rem]">
        <div>
          <h1 className="text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
            WHO WE ARE
          </h1>
          <p className="font-jost text-center text-[#5C6066] text-[14px] md:text-[16px]">
            Road Map to Study Abroad
          </p>
        </div>
        <div className="w-full lg:justify-between lg:flex-row flex flex-col-reverse my-[2rem] mt-4 md:mt-12">
          <div className="lg:w-6/12 font-jost lg:text-left text-center py-4 text-[#5C6066] leading-[20px] md:leading-[23px] mt-2 md:mt-0">
            <span className="space-y-5">
              <p>
                At Career Thrive, we take pride in guiding aspiring students and
                their parents on their educational journeys. Our primary focus
                is counseling students seeking to study overseas, ensuring they
                receive the best guidance every step of the way. We have
                partnered with industry leaders like KC Overseas, Edu World
                International, and SI-UK International to bring comprehensive
                support to our clients.
              </p>
              <p>
                As a one-stop solution, we offer a full suite of services,
                including study loans, foreign exchange, visa assistance, flight
                bookings, insurance, accommodation arrangements, and more—for
                both students and parents.
              </p>
              <p>
                In addition to our student-focused offerings, we also provide
                retail foreign exchange services, travel solutions (including
                tickets, visas, and holiday packages), and life and general
                insurance for a wide range of customers.
              </p>
            </span>
          </div>
          <div className=" lg:w-5/12 mt-3">
            <img
              src={"/Images/whoareimg.jpeg"}
              alt="img"
              className=" rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAre;
