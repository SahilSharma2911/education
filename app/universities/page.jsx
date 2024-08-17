"use client";
import OurHeader from "@/components/OurHeader/OurHeader";
import React, { useState } from "react";
import AllCards from "./AllCards";
import Filtered from "./Filtered";

const Page = () => {
  const title = "Universities";
  const [country, setCountry] = useState("All");

  return (
    <>
      <OurHeader title={title} />
      <div className=" w-10/12 mx-auto mt-[3rem] md:mt-[4rem]">
        <Filtered country={country} setCountry={setCountry} />
      </div>
      <div className="mb-[2rem] md:mb-[3rem] mt-[3rem]">
        <AllCards country={country} />
      </div>
    </>
  );
};

export default Page;
