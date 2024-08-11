import React from "react";
import { filterCountry } from "../../public/Images/data";

const Filtered = ({country,setCountry}) => {
  return (
    <div className=" flex gap-3">
      <div className=" font-bold">
        <h1>Country:</h1>
      </div>
      <div className=" flex">
        {filterCountry.map((data) => (
          <button
            key={data.id}
            className={` border border-black px-2 ${
              data.country === country ? "bg-[#1F94F3] text-white" : null
            } `}
            onClick={() => setCountry(data.country)}
          >
            {data.country}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filtered;
