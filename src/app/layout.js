import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import StoreDataProvider from "@/context/StoreContext";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
// Slick carousel styles loaded globally so every slider (hero, top
// destinations, etc.) is styled regardless of which sections render.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Whatsapp from "@/components/FloatingIcon/Whatsapp";
import HomeModal from "@/components/Modal/HomeModal";
import PageTransition from "@/components/PageTransition/PageTransition";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Career Thrive | Your Gateway to Study Abroad Success",
  description:
    "Career Thrive helps students achieve their dreams of studying abroad by offering expert counseling, access to top universities, and testimonials from successful students.",
  keywords:
    "study abroad, student counseling, universities, study overseas, international education, student testimonials, educational opportunities",
  author: "Career Thrive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <StoreDataProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <HomeModal />
          <Whatsapp />
          <Footer />
          <ToastContainer position="top-center" />
        </StoreDataProvider>
      </body>
    </html>
  );
}
