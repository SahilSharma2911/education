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

export default function Home() {
  return (
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
  );
}
