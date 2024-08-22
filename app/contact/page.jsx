import OurHeader from "@/components/OurHeader/OurHeader";
import React from "react";
import Form from "./Form";
import Head from "next/head";

const page = () => {
  const title = "Contact Us | Career Thrive - Get In Touch";
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Contact Career Thrive for personalized counseling services and guidance on studying abroad. We're here to help you every step of the way."
        />
        <meta
          name="keywords"
          content="contact Career Thrive, study abroad inquiries, counseling contact, get in touch, educational consultants, student support"
        />
        <meta name="author" content="Career Thrive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <OurHeader title="Contact Us" />
        <Form />
      </main>
    </>
  );
};

export default page;
