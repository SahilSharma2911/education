import Footer from "@/components/Footer/Footer";
import Counseling from "@/components/Home/Counseling";
import Faq from "@/components/Home/Faq";
import Header from "@/components/Home/Header";
import Testimonials from "@/components/Home/Testimonials";
import TopDestination from "@/components/Home/TopDestination";
import WhyChoose from "@/components/Home/WhyChoose";
import Navbar from "@/components/Navbar/Navbar";
import StoreDataProvider from "@/context/StoreContext";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Counseling bgColor="#F0F0F0" />
      <TopDestination />
      <WhyChoose />
      <Testimonials />
      <Faq />
    </main>
  );
}
