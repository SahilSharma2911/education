"use client";
import { useContext, useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { StoreContext } from "@/context/StoreContext";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const { images } = useContext(StoreContext);
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path) => (pathname === path ? "text-[#1F94F3]" : "");

  const handleLinkClick = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-[100vw] h-auto relative">
      <div className="topNav text-white font-bold w-full bg-[#1C1F2A] py-1.5 text-[0.8rem] hidden md:flex justify-end">
        <ul className="font-inria flex justify-end px-8 gap-4">
          <Link href="/">News & Articles</Link>|<Link href="/">Facebook</Link>|
          <Link href="/">Instagram</Link>| <Link href="/">X</Link>
        </ul>
      </div>

      {/* Main Navbar section */}
      <div className="w-11/12 py-3 flex justify-between mx-auto items-center">
        {/* Left section */}
        <div className="flex gap-[4rem] items-center">
          {/* Logo */}
          <Link href={"/"}>
            <img src={"/Images/logo.png"} alt="Logo" />
          </Link>

          {/* Pages list */}
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

        {/* Right section */}
        <div className="hidden lg:flex items-center justify-center">
          <button className="lg:px-[1rem] lg:text[1rem] px-[3rem] py-3 rounded-3xl text-white bg-[#1F94F3] hover:bg-[#077bda] font-poppins">
            Help Me Study Abroad
          </button>
        </div>

        {/* Burger icon */}
        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
      </div>

      {/* Mobile menu section */}
      <div
        className={`w-full overflow-hidden transition-max-height duration-500 ease-in-out bg-gray-100 ${
          isOpen ? "h-[100vh] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="text-[16px] flex flex-col space-y-[1rem] font-bold px-8 pt-6">
          <Link href="/" className={isActive("/")} onClick={handleLinkClick}>
            Home
          </Link>
          <hr className="border-[#5C6066] border" />
          <Link
            href="/services"
            className={isActive("/services")}
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <hr className="border-[#5C6066] border" />
          <Link
            href="/about"
            className={isActive("/about")}
            onClick={handleLinkClick}
          >
            About us
          </Link>
          <hr className="border-[#5C6066] border" />
          <Link
            href="/universities"
            className={isActive("/universities")}
            onClick={handleLinkClick}
          >
            Universities
          </Link>
          <hr className="border-[#5C6066] border" />
          <Link
            href="/testimonial"
            className={isActive("/testimonial")}
            onClick={handleLinkClick}
          >
            Testimonials
          </Link>
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-center w-full p-8">
          <button className="px-[3rem] py-3 rounded-3xl w-full text-white bg-[#1F94F3] hover:bg-[#077bda] font-poppins">
            Help Me Study Abroad
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
