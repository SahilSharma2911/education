import Footer from "@/components/Footer/Footer";
import Counseling from "@/features/home/components/Counseling";
import Faq from "@/features/home/components/Faq";
import Header from "@/features/home/components/Header";
import Testimonials from "@/features/home/components/Testimonials";
import TopDestination from "@/features/home/components/TopDestination";
import WhyChoose from "@/features/home/components/WhyChoose";
import BeyondEducation from "@/features/home/components/BeyondEducation";
import Reveal from "@/components/Reveal/Reveal";
import Navbar from "@/components/Navbar/Navbar";
import StoreDataProvider from "@/context/StoreContext";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Career Thrive | Study Abroad Counseling & Opportunities</title>
        <meta
          name="description"
          content="Career Thrive helps students achieve their dreams of studying abroad by offering expert counseling, access to top universities, and testimonials from successful students."
        />
        <meta
          name="keywords"
          content="study abroad, student counseling, universities, study overseas, international education, student testimonials, educational opportunities"
        />
        <meta name="author" content="Career Thrive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header />
        <Reveal>
          <Counseling page="homepage" />
        </Reveal>
        <Reveal>
          <TopDestination />
        </Reveal>
        <Reveal>
          <WhyChoose />
        </Reveal>
        <Reveal>
          <BeyondEducation />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
      </main>
    </>
  );
}
