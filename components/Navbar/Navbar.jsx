"use client";
import { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { StoreContext } from "@/context/StoreContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { images } = useContext(StoreContext);
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => (pathname === path ? "text-[#1F94F3]" : "");

  return (
    <div className="w-[100vw] h-auto">
      <div className="topNav text-white font-light w-full bg-[#1C1F2A] py-1.5 text-[0.8rem] hidden md:flex">
        <ul className="font-inria flex justify-end px-8 gap-4">
          <Link href="/">News & Articles</Link>|<Link href="/">Facebook</Link>|
          <Link href="/">Instagram</Link>|
          <button onClick={() => setShowTopBar(false)}>x</button>
        </ul>
      </div>

      {/* Main Navbar section  */}
      <div className="w-11/12 py-3 flex justify-between mx-auto items-center">
        {/* left section  */}
        <div className="flex gap-[4rem] items-center">
          {/* logo  */}
          <Link href={"/"}>
            <img src={"/Images/logo.png"} alt="" />
          </Link>

          {/* Pages list  */}
          <ul className="list lg:flex xl:gap-[3rem] lg:gap-3 lg:text-[1rem] hidden">
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
            <Link href="/services" className={isActive("/services")}>
              Services
            </Link>
            <Link href="/about" className={isActive("/about")}>
              About us
            </Link>
            <Link href="/contact" className={isActive("/contact")}>
              Contact us
            </Link>
            <Link href="/universities" className={isActive("/universities")}>
              Universities
            </Link>
            <Link href="/testimonial" className={isActive("/testimonial")}>
              Testimonials
            </Link>
          </ul>
        </div>

        {/* Right section  */}
        <div className="hidden lg:flex items-center justify-center">
          <button className="lg:px-[1rem] lg:text[1rem] px-[3rem] py-3 rounded-3xl text-white bg-[#1F94F3] hover:bg-[#077bda] font-poppins">
            Help Me Study abroad
          </button>
        </div>

        {/* Burger icon  */}
        <div className="lg:hidden">
          <button onClick={() => setShowNav(!showNav)}>
            <RxHamburgerMenu className="text-[1.5rem]" />
          </button>
        </div>
      </div>

      {/* for mobile screen  */}
      <div
        id="Navbar"
        className={`z-30 w-[100vw] h-[100vh] absolute top-0 bg-white ${
          showNav ? "block" : "hidden"
        } flex flex-col `}
      >
        {/* Navbar in side section  */}
        <div className="w-full ">
          {/* section-1  */}
          <div className="mx-auto pl-[1.2rem] justify-between bg-white items-center gap-4 flex  py-3">
            <Link href={"/"}>
              <img src={"/Images/logo.png"} alt="" />
            </Link>

            <div onClick={() => setShowNav(!showNav)} className="pr-4">
              <IoClose className="font-bold text-[2rem]" />
            </div>
          </div>

          {/* section-2  */}
          <div className="text-[16px]  flex flex-col space-y-[1rem] font-bold px-8 pt-6">
            <hr className="border-black border" />
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
            <hr className="border-black border" />
            <Link href="/services" className={isActive("/services")}>
              Services
            </Link>
            <hr className="border-black border" />
            <Link href="/about" className={isActive("/about")}>
              About us
            </Link>
            <hr className="border-black border" />
            <Link href="/universities" className={isActive("/universities")}>
              Universities
            </Link>
            <hr className="border-black border" />
            <Link href="/testimonial" className={isActive("/testimonial")}>
              Testimonials
            </Link>
          </div>
          {/* buttons  */}
          <div className="flex items-center justify-center w-full p-8">
            <button className="px-[3rem] py-3 rounded-3xl w-full text-white bg-[#1F94F3] hover:bg-[#077bda] font-poppins">
              Help Me Study abroad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
