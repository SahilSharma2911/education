import OurHeader from "@/components/OurHeader/OurHeader";
import React from "react";
import AllTestimonials from "./AllTestimonials";
import ParentTestimonials from "./ParentTestimonials";
import StudentTestimonial from "./StudentTestimonial";
import Head from "next/head";

const page = () => {
  const title = "Testimonials | Career Thrive - What Our Students Say";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Hear from our successful students and their parents who have benefited from Career Thrive's study abroad counseling services. Their testimonials highlight the impact of our guidance and university placements."
        />
        <meta
          name="keywords"
          content="student testimonials, success stories, study abroad experiences, Career Thrive reviews, educational success, student feedback, parent testimonials"
        />
        <meta name="author" content="Career Thrive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <OurHeader title="Testimonials" />
        <AllTestimonials />
        <ParentTestimonials />
        <StudentTestimonial />
      </main>
    </>
  );
};

export default page;
