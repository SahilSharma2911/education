import OurHeader from "@/components/OurHeader/OurHeader";
import React from "react";
import WhoAre from "@/features/about/components/WhoAre";
import Why from "@/features/about/components/Why";
import BeyondEducation from "@/features/home/components/BeyondEducation";
import Counseling from "@/features/home/components/Counseling";
import Professional from "@/features/about/components/Professional";
import Reveal from "@/components/Reveal/Reveal";
import Head from "next/head";

const page = () => {
  const title = "About Us | Career Thrive - Your Pathway to Global Education";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Learn more about Career Thrive, our mission, vision, and the team dedicated to helping students pursue their education overseas."
        />
        <meta
          name="keywords"
          content="about Career Thrive, global education, student success stories, study abroad experts, educational consultants, our mission"
        />
        <meta name="author" content="Career Thrive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <OurHeader title="About Us" />
        <Reveal>
          <WhoAre />
        </Reveal>
        <Reveal>
          <Why />
        </Reveal>
        <Reveal>
          <BeyondEducation />
        </Reveal>
        <Reveal>
          <Counseling bgColor="" />
        </Reveal>
        <Reveal>
          <Professional />
        </Reveal>
      </main>
    </>
  );
};

export default page;
