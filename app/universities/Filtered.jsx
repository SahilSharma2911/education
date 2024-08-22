import React from "react";
import { filterCountry } from "../../public/Images/data";

const Filtered = ({ country, setCountry }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 font-poppins items-center">
      <div className="text-[20px] font-bold">
        <h2>Country:</h2>
      </div>
      <div className="flex">
        {filterCountry.map((data, index) => (
          <button
            key={data.id}
            aria-label={`Filter by ${data.country}`}
            className={`px-1 md:px-4 py-2 text-[14px] border border-black ${
              index === 0 ? "rounded-l-lg" : ""
            } ${
              index === filterCountry.length - 1 ? "rounded-r-lg" : "border-r-0"
            } ${
              data.country === country ? "bg-[#1F94F3] text-white" : "bg-white"
            }`}
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
