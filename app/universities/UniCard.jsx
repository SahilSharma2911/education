import React from "react";

const UniCard = ({ badge, title, description, imageURL }) => {
  return (
    <div>
      <div className=" w-[284px]  flex flex-col h-[226px] border-[2px] border-black box-border rounded-md">
        <div className="w-full min-h-[105px] bg-white flex items-center">
          <img src={imageURL} alt="img" className=""/>
        </div>
        <div className=" flex flex-col w-full h-full bg-[#1F94F3] p-3 text-white relative">
          <h1 className="font-semibold text-[14px] leading-[21px]">{title}</h1>
          <p className="font-light text-[12px] leading-[18px] mt-1">
            {description}
          </p>
          <div className="absolute bottom-2 right-2 text-[8px]">
            <span className=" px-2 py-1 rounded-md bg-white text-black  text-center font-bold">
              {badge}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniCard;
