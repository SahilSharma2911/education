"use client";
import OurHeader from "@/components/OurHeader/OurHeader";
import React, { useState } from "react";
import AllCards from "./AllCards";
import Filtered from "./Filtered";
import Head from "next/head";

const Page = () => {
  const title = "Universities | Career Thrive - Study at Top Institutions";
  const [country, setCountry] = useState("All");

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Discover the prestigious universities Career Thrive partners with to offer students unparalleled opportunities to study abroad and achieve their academic goals."
        />
        <meta
          name="keywords"
          content="partner universities, top universities, study abroad institutions, university partnerships, academic opportunities, international education"
        />
        <meta name="author" content="Career Thrive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <OurHeader title="Universities" />
        <section className="w-10/12 mx-auto mt-[3rem] md:mt-[4rem]">
          <Filtered country={country} setCountry={setCountry} />
        </section>
        <section className="mb-[2rem] md:mb-[3rem] mt-[3rem]">
          <AllCards country={country} />
        </section>
      </main>
    </>
  );
};

export default Page;
