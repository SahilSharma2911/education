import Footer from "@/components/Footer/Footer";
import Counseling from "@/components/Home/Counseling";
import Faq from "@/components/Home/Faq";
import Header from "@/components/Home/Header";
import Testimonials from "@/components/Home/Testimonials";
import TopDestination from "@/components/Home/TopDestination";
import WhyChoose from "@/components/Home/WhyChoose";
import HomeModal from "@/components/Modal/HomeModal";
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
        <Counseling page="homepage" />
        <TopDestination />
        <WhyChoose />
        <Testimonials />
        <Faq />
        {/* modal component */}
        <HomeModal />
      </main>
    </>
  );
}
