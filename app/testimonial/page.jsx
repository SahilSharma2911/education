import OurHeader from "@/components/OurHeader/OurHeader";
import React from "react";
import AllTestimonials from "./AllTestimonials";
import ParentTestimonials from "./ParentTestimonials";
import StudentTestimonial from "./StudentTestimonial";

const page = () => {
  const title = "Testimonials";

  return <main>
    <OurHeader title={title}/>
    <AllTestimonials/>
    <ParentTestimonials/>
    <StudentTestimonial/>
  </main>;
};

export default page;
