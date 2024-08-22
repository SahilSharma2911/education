import React from "react";
import Ourservices from "./Ourservices";
import University from "./University";
import OurHeader from "@/components/OurHeader/OurHeader";
import Head from "next/head";

const page = () => {
  const title = "Our Services | Career Thrive - Study Abroad & Counseling";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Explore our comprehensive counseling services that guide students through the entire study abroad process, from choosing a destination to applying to universities."
        />
        <meta
          name="keywords"
          content="study abroad services, counseling services, educational counseling, university applications, overseas education, career guidance"
        />
        <meta name="author" content="Career Thrive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <OurHeader title="Our Services" />
        <Ourservices />
        <University />
      </main>
    </>
  );
};

export default page;
