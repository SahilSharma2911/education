import React from "react";

const Ourservices = () => {
  return (
    <section className="w-[100vw] h-auto ">
      <div className="w-10/12 flex flex-col mx-auto pb-[1.2rem] md:pb-[2rem] pt-[3rem] md:pt-[4rem]">
        {/* Heading section  */}
        <div className="space-y-1">
          <h2 className=" text-center font-poppins text-[#1F94F3] font-bold text-[22px] md:text-[30px] leading-[33.6px] md:mb-2">
            OUR SERVICES
          </h2>
          <p className=" font-jost text-center text-[#5C6066] text-[14px] md:text-[16px]">
            Road Map to Study Abroad
          </p>
        </div>

        {/* second sections  */}

        <div className=" flex flex-col lg:flex-row mx-auto justify-evenly gap-4 w-full h-auto my-[2rem] md:my-[3rem] ">
          {/* left side section  */}
          <div className=" w-full flex  flex-col gap-[3rem] lg:gap-[6rem]">
            <div className="flex flex-col-reverse lg:flex-col gap-[1.5rem] lg:gap-[6rem] items-center">
              {/* service1 img  */}
              <div className="w-[15rem] md:w-[20rem]">
                <img src={"/Images/service1.svg"} alt="#" />
              </div>
              {/* text section  */}
              <div className="text-center lg:text-end lg:pr-10">
                <span className="hidden lg:flex flex-col">
                  <h3 className=" font-poppins font-bold md:text-[25px] text-[#666666] leading-[16px] md:leading-[36px]">
                    Short Listing & Application
                  </h3>
                  <p className=" font-jost text-[#5C6066] leading-[20.2px] md:leading-[23px] text-[14px] md:text-[16px] mt-2 md:mt-1.5">
                    We Thoroughly Assess Your Profile And Help You Select The
                    Best Countries, Universities & Courses Meeting Your Goals.
                  </p>
                </span>
                <span className="flex lg:hidden flex-col">
                  <h3 className=" font-poppins font-bold md:text-[25px] text-[#666666] leading-[16px] md:leading-[36px]">
                    Counselling
                  </h3>
                  <p className="font-jost text-[#5C6066] leading-[20.2px] md:leading-[23px] text-[14px] md:text-[16px] mt-2 md:mt-1.5">
                    We Provide Online And Offline Counselling At A Time Of Your
                    Convenience; And Understand Your Study Abroad Goals.{" "}
                  </p>
                </span>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-col gap-[2rem] lg:gap-[6rem] items-center">
              {/* service3 img  */}
              <div className="w-[15rem] md:w-[20rem]">
                <img
                  src={"/Images/service3.svg"}
                  alt="#"
                  className="hidden lg:flex"
                />
                <img
                  src={"/Images/service2.svg"}
                  alt="#"
                  className="flex lg:hidden"
                />
              </div>
              {/* text section  */}
              <div className="text-center lg:text-end lg:pr-10">
                <span className="hidden lg:flex flex-col">
                  <h3 className=" font-poppins font-bold md:text-[25px] text-[#666666] leading-[16px] md:leading-[36px]">
                    Scholarship & Education Loan
                  </h3>
                  <p className="font-jost text-[#5C6066] leading-[20.2px] md:leading-[23px] text-[14px] md:text-[16px] mt-2 md:mt-1.5">
                    We Help You Get Scholarship And Education Loan. We Also
                    Offer Guaranteed SIO Scholarship Of Up To Rs. 20,000.
                  </p>
                </span>
                <span className="flex lg:hidden flex-col">
                  <h3 className=" font-poppins font-bold md:text-[25px] text-[#666666] leading-[16px] md:leading-[36px]">
                    Short Listing & Application
                  </h3>
                  <p className=" font-jost text-[#5C6066] leading-[20.2px] md:leading-[23px] text-[14px] md:text-[16px] mt-2 md:mt-1.5">
                    We Thoroughly Assess Your Profile And Help You Select The
                    Best Countries, Universities & Courses Meeting Your Goals.
                  </p>
                </span>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-col gap-[2rem] lg:gap-[6rem] items-center">
              {/* service5 img  */}
              <div className="w-[15rem] md:w-[20rem]">
                <img
                  src={"/Images/service5.svg"}
                  alt="#"
                  className="hidden lg:flex"
                />
                <img
                  src={"/Images/service3.svg"}
                  alt="#"
                  className="flex lg:hidden"
                />
              </div>
              {/* text section  */}
              <div className="text-center lg:text-end lg:pr-10">
                <span className="hidden lg:flex flex-col">
                  <h3 className=" font-poppins font-bold md:text-[25px] text-[#666666] leading-[16px] md:leading-[36px]">
                    Pre Departure Assistance
                  </h3>
                  <p className="font-jost text-[#5C6066] leading-[20.2px] md:leading-[23px] text-[14px] md:text-[16px] mt-2 md:mt-1.5">
                    We Help You Book Flight Ticket, Accommodation, Forex Card,
                    International SIM Card, And More, Before You Go.
                  </p>
                </span>
                <span className="flex lg:hidden flex-col">
                  <h3 className=" font-poppins font-bold md:text-[25px] text-[#666666] leading-[16px] md:leading-[36px]">
                    Online & Offline Coaching
                  </h3>
                  <p className="font-jost text-[#5C6066] leading-[20.2px] md:leading-[23px] text-[14px] md:text-[16px] mt-2 md:mt-1.5">
                    We Provide Excellent Offline & Online Coaching For IELTS/
                    TOEFL/ PTE/ GRE/ GMAT/ SAT at the most affordable fee.
                  </p>
                </span>
              </div>
            </div>
          </div>

          {/* Middle section  */}
          <div className="relative">
            {/* front block  */}
            <div className="bg-[#1E73BE] ml-[-1px] mb-[-1px] w-2 h-2 rotate-45 hidden lg:flex"></div>
            <div className=" hidden lg:flex flex-col gap-[16rem] item-center  bg-[#1E73BE] w-1 ">
              {/* first block  */}
              <div className="bg-[#1E73BE] ml-[-6px] w-4 h-4 rotate-45 mt-[6rem] relative">
                <div className=" absolute bottom-[-6px] left-4 bg-[#1E73BE] rotate-45 w-1 h-[3rem]"></div>
              </div>
              {/* second block  */}
              <div className="bg-[#1E73BE] relative ml-[-6px] w-4 h-4 rotate-45">
                <div className=" absolute top-[-6px] right-4 bg-[#1E73BE] rotate-45 w-1 h-[3rem]"></div>
              </div>

              {/* third block  */}
              <div className="bg-[#1E73BE] ml-[-6px] w-4 h-4 rotate-45 mt-[-3.5rem] relative">
                <div className=" absolute bottom-[-6px] left-4 bg-[#1E73BE] rotate-45 w-1 h-[3rem]"></div>
              </div>

              {/* fourth block  */}
              <div className="bg-[#1E73BE] relative ml-[-6px] w-4 h-4 rotate-45">
                <div className=" absolute top-[-6px] right-4 bg-[#1E73BE] rotate-45 w-1 h-[3rem]"></div>
              </div>

              {/* fifth block  */}
              <div className="bg-[#1E73BE] relative ml-[-6px] w-4 h-4 rotate-45 mt-[-2.7rem]">
                <div className=" absolute bottom-[-6px] left-4 bg-[#1E73BE] rotate-45 w-1 h-[3rem]"></div>
              </div>

              {/* sixth block  */}
              <div className="bg-[#1E73BE] ml-[-6px] w-4 h-4 rotate-45 mt-[-1rem] relative">
                <div className=" absolute top-[-6px] right-4  bg-[#1E73BE] rotate-45 w-1 h-[3rem]"></div>
              </div>

              {/* last block  */}
              <div className="bg-[#1E73BE] ml-[-1px] mb-[-1px] w-2 h-2 rotate-45 "></div>
            </div>
          </div>

          {/* right side section  */}
          <div className=" text-center items-center w-full flex  flex-col gap-[3rem] lg:gap-[6rem] lg:mt-[4rem] ">
            <div className="flex flex-col-reverse lg:flex-col gap-[2rem] lg:gap-[6rem] items-center">
              <div className="text-center lg:text-start lg:pl-10">
                <span className="hidden lg:flex flex-col">
                  <h3 className=" font-poppins font-bold md:text-[25px] text-[#666666] leading-[16px] md:leading-[36px]">
                    Counselling
                  </h3>
                  <p className="font-jost text-[#5C6066] leading-[20.2px] md:leading-[23px] text-[14px] md:text-[16px] mt-2 md:mt-1.5">
                    We Provide Online And Offline Counselling At A Time Of Your
                    Convenience; And Understand Your Study Abroad Goals.{" "}
                  </p>
                </span>
                <span className="flex lg:hidden flex-col">
                  <h3 className=" font-poppins font-bold md:text-[25px] text-[#666666] leading-[16px] md:leading-[36px]">
                    Scholarship & Education Loan
                  </h3>
                  <p className="font-jost text-[#5C6066] leading-[20.2px] md:leading-[23px] text-[14px] md:text-[16px] mt-2 md:mt-1.5">
                    We Help You Get Scholarship And Education Loan. We Also
                    Offer Guaranteed SIO Scholarship Of Up To Rs. 20,000.
                  </p>
                </span>
              </div>
            </div>
            {/* text section  */}

            {/* service1 img2  */}
            <div className="w-[15rem] md:w-[20rem] mt-[-1rem] lg:mt-0">
              <img
                src={"/Images/service2.svg"}
                alt="#"
                className="hidden lg:flex"
              />
              <img
                src={"/Images/service4.svg"}
                alt="#"
                className="flex lg:hidden"
              />
            </div>

            {/* text section  */}
            <div className="text-center lg:text-start lg:pl-10">
              <span className="hidden lg:flex flex-col">
                <h3 className=" font-poppins font-bold md:text-[25px] text-[#666666] leading-[16px] md:leading-[36px]">
                  Online & Offline Coaching
                </h3>
                <p className="font-jost text-[#5C6066] leading-[20.2px] md:leading-[23px] text-[14px] md:text-[16px] mt-2 md:mt-1.5">
                  We Provide Excellent Offline & Online Coaching For IELTS/
                  TOEFL/ PTE/ GRE/ GMAT/ SAT at the most affordable fee.
                </p>
              </span>
              <span className="flex lg:hidden flex-col">
                <h3 className=" font-poppins font-bold md:text-[25px] text-[#666666] leading-[16px] md:leading-[36px]">
                  VISA Application
                </h3>
                <p className="font-jost text-[#5C6066] leading-[20.2px] md:leading-[23px] text-[14px] md:text-[16px] mt-2 md:mt-1.5">
                  We Apply For Your Visa At Your Convenient Time, In Your
                  Presence Or By Screen-Sharing To Ensure 100% Transparency.
                </p>
              </span>
            </div>

            {/* service4 img  */}
            <div className="w-[15rem] md:w-[20rem] mt-[-1rem] lg:mt-0">
              <img
                src={"/Images/service4.svg"}
                alt="#"
                className="hidden lg:flex"
              />
              <img
                src={"/Images/service5.svg"}
                alt="#"
                className="flex lg:hidden"
              />
            </div>

            {/* text section  */}
            <div className="text-center lg:text-start lg:pl-10">
              <span className="hidden lg:flex flex-col">
                <h3 className=" font-poppins font-bold md:text-[25px] text-[#666666] leading-[16px] md:leading-[36px]">
                  VISA Application
                </h3>
                <p className="font-jost text-[#5C6066] leading-[20.2px] md:leading-[23px] text-[14px] md:text-[16px] mt-2 md:mt-1.5">
                  We Apply For Your Visa At Your Convenient Time, In Your
                  Presence Or By Screen-Sharing To Ensure 100% Transparency.
                </p>
              </span>
              <span className="flex lg:hidden flex-col">
                <h3 className=" font-poppins font-bold md:text-[25px] text-[#666666] leading-[16px] md:leading-[36px]">
                  Pre Departure Assistance
                </h3>
                <p className="font-jost text-[#5C6066] leading-[20.2px] md:leading-[23px] text-[14px] md:text-[16px] mt-2 md:mt-1.5">
                  We Help You Book Flight Ticket, Accommodation, Forex Card,
                  International SIM Card, And More, Before You Go.
                </p>
              </span>
            </div>

            {/* service3 img6  */}
            <div className="w-[15rem] md:w-[20rem] mt-[-1rem] lg:mt-0">
              <img src={"/Images/service6.svg"} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourservices;
