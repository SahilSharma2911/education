import React from "react";
import Ourservices from "./Ourservices";
import University from "./University";
import OurHeader from "@/components/OurHeader/OurHeader";

const page = () => {
  const title = "Our Services";

  return (
    <main>
      <OurHeader title={title} />
      <Ourservices />
      <University />
    </main>
  );
};

export default page;
