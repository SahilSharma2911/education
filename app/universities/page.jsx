"use client"
import OurHeader from "@/components/OurHeader/OurHeader";
import React, { useState } from "react";
import AllCards from "./AllCards";
import Filtered from "./Filtered";

const page = () => {
  const title = "Universities";
  const [country, setCountry] = useState("All");

  return (
    <>
      <OurHeader title={title} />
      <div className=" w-10/12 mx-auto mt-[3rem]">
        <Filtered country={country} setCountry={setCountry} />
      </div>
      <div className=" my-[3rem]">
        <AllCards country={country} />
      </div>
    </>
  );
};

export default page;
