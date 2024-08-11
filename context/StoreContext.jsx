/* eslint-disable react/prop-types */
"use client"
import { createContext } from "react";
import { images, headerData } from "../public/Images/data";

export const StoreContext = createContext();

const StoreDataProvider = ({ children }) => {
  const data = {
    images,
    headerData,
  };

  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export default StoreDataProvider;
