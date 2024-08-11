import OurHeader from "@/components/OurHeader/OurHeader";
import React from "react";
import WhoAre from "./WhoAre";
import Why from "./Why";
import Counseling from "@/components/Home/Counseling";
import Professional from "./Professional";

const page = () => {
  const title = "About us";
  return (
    <main>
      <OurHeader title={title} />
      <WhoAre/>
      <Why/>
      <Counseling/>
      <Professional/>
    </main>
  );
};

export default page;
