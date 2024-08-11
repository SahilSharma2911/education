import OurHeader from "@/components/OurHeader/OurHeader";
import React from "react";
import Form from "./Form";

const page = () => {
  const title = "Contact us";

  return <main>
    <OurHeader title={title}/>
    <Form/>
  </main>;
};

export default page;
