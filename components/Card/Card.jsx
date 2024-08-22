import React from "react";
import {
  FaLinkedin,
  FaGooglePlusG,
  FaImage,
  FaQuoteLeft,
} from "react-icons/fa";

const Card = ({ name, description, image, university, zoom, shade }) => {
  return (
    <div
      className={`slider-card mx-4 xl:mx-8 2xl:mx-10 ${shade} bg-[#122B6B] text-white rounded-xl p-6 relative shadow-lg transition-transform duration-300 ${
        zoom ? "lg:transform lg:scale-110" : ""
      }`}
    >
      <div>
        <FaQuoteLeft className="text-yellow-400 text-[2rem]" />
      </div>
      <div className="absolute top-4 left-4 text-yellow-400 text-3xl"></div>
      <p className="mt-10 text-sm">{description}</p>
      <div className="mt-4 flex justify-center space-x-8 text-yellow-400">
        <FaLinkedin className="text-2xl cursor-pointer" />
        <FaGooglePlusG className="text-2xl cursor-pointer" />
        <FaImage className="text-2xl cursor-pointer" />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div className="w-20">
          <img
            className="rounded-full border-2 border-white"
            src={`/Images/${image}`}
            alt={name}
            width="80px"
          />
        </div>
        <h4 className="mt-4 text-lg font-bold text-yellow-400">{name}</h4>
        <p className="text-sm">{university}</p>
      </div>
    </div>
  );
};

export default Card;
