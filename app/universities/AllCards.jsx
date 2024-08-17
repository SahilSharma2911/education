import React from "react";
import { countryData } from "../../public/Images/data";
import UniCard from "./UniCard";

const AllCards = ({ country }) => {
  function getAllCards() {
    let all = [];
    if (country === "All") {
      const allCards = countryData.map((data) => data);
      all.push(allCards);
    } else {
      const filteredCards = countryData.filter(
        (data) => data.badge === country
      );
      all.push(filteredCards);
    }
    return all;
  }

  console.log(getAllCards());

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-center items-start w-10/12 mx-auto gap-5 md:gap-10">
        {(getAllCards() && getAllCards()[0]).map((data) => (
          <UniCard
            key={data.id}
            title={data.title}
            description={data.description}
            badge={data.badge}
            imageURL={data.imgURL}
          />
        ))}
      </div>
      <button className="text-[#5C6066] leading-[42px] font-jost mx-auto mt-6 md:mt-8">
        View All
      </button>
    </div>
  );
};

export default AllCards;
