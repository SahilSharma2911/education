import React from "react";
import { countryData } from "../../public/Images/data";
import UniCard from "./UniCard";

const AllCards = ({ country }) => {
  const getAllCards = () => {
    if (country === "All") {
      return countryData;
    } else {
      return countryData.filter((data) => data.badge === country);
    }
  };

  const filteredCards = getAllCards();

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-center items-start w-10/12 mx-auto gap-5 md:gap-10">
        {filteredCards.map((data) => (
          <UniCard
            key={data.id}
            title={data.title}
            description={data.description}
            badge={data.badge}
            imageURL={data.imgURL}
          />
        ))}
      </div>
      <button
        className="text-[#5C6066] hover:text-black leading-[42px] font-jost mx-auto mt-6 md:mt-8"
        onClick={() => window.open("/Images/universities.pdf", "_blank")}
      >
        View All
      </button>
    </div>
  );
};

export default AllCards;
