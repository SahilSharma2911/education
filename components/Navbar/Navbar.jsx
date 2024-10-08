"use client";
import { useContext, useState, useEffect, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { StoreContext } from "@/context/StoreContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { images } = useContext(StoreContext);
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const linksRef = useRef([]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setActiveLink(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const activeIndex = [
      "",
      "services",
      "about",
      "contact",
      "universities",
      "testimonial",
    ].indexOf(activeLink.replace("/", ""));
    if (linksRef.current[activeIndex]) {
      const link = linksRef.current[activeIndex];
      setIndicatorStyle({
        width: `${link.offsetWidth}px`,
        left: `${link.offsetLeft}px`,
      });
    }
  }, [activeLink]);

  const linkNames = {
    "/": "Home",
    "/services": "Services",
    "/about": "About Us",
    "/contact": "Contact Us",
    "/universities": "Universities",
    "/testimonial": "Testimonials",
  };

  return (
    <header className="w-[100vw] h-auto relative">
      <nav className="topNav text-white font-bold w-full bg-[#1C1F2A] py-1.5 text-[0.8rem] hidden md:flex justify-end">
        <ul className="font-inria flex justify-end px-8 gap-4">
          <li>
            <Link href="/">News & Articles</Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/">Facebook</Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/">Instagram</Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/">X</Link>
          </li>
        </ul>
      </nav>

      {/* Main Navbar section */}
      <div className="w-11/12 py-3 flex justify-between mx-auto items-center relative">
        <div className="flex gap-[4rem] xl:gap-[8rem] items-center">
          <Link href={"/"} aria-label="Home">
            <img
              src={"/Images/logo2.png"}
              alt="Career Thrive Logo"
              className="w-[4.5rem]"
            />
          </Link>
          {/* Pages list */}
          <ul className="list lg:flex gap-[2rem] xl:gap-[3rem]  lg:text-[14px] hidden relative">
            {Object.keys(linkNames).map((path, index) => (
              <li key={path} ref={(el) => (linksRef.current[index] = el)}>
                <Link
                  key={path}
                  href={path}
                  ref={(el) => (linksRef.current[index] = el)}
                  className={`relative top-[2px] ${
                    activeLink === path ? "text-[#1F94F3]" : ""
                  }`}
                  onClick={() => handleLinkClick(path)}
                >
                  {linkNames[path]}
                </Link>
              </li>
            ))}
            {/* Blue bar */}
            <div
              className="absolute -bottom-[26px] h-[3px] bg-[#1F94F3] transition-all duration-300"
              style={indicatorStyle}
            ></div>
          </ul>
        </div>

        <div className="hidden lg:flex items-center justify-center w-fit">
          <Link href={"/services"}>
            <button className="lg:px-[12px] text-[12px] font-semibold py-3 rounded-3xl text-white bg-[#1F94F3] hover:bg-[#077bda] font-poppins w-[13rem]">
              Help Me Study Abroad
            </button>
          </Link>
        </div>

        {/* Burger icon */}
        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
      </div>

      {/* Mobile menu section */}
      <nav
        className={`w-full overflow-hidden transition-max-height duration-500 ease-in-out bg-gray-100 ${
          isOpen ? "h-[100vh] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="text-[16px] flex flex-col font-bold px-8 pt-6">
          {Object.keys(linkNames).map((path, index) => (
            <div key={path}>
              <Link
                href={path}
                className={activeLink === path ? "text-[#1F94F3]" : ""}
                onClick={() => handleLinkClick(path)}
              >
                {linkNames[path]}
              </Link>
              {index < Object.keys(linkNames).length - 1 && (
                <hr className="my-5 bg-[#5C6066]" />
              )}
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-center w-full p-8">
          <Link
            href={"/services"}
            onClick={() => handleLinkClick("services")}
            className="w-full"
          >
            <button className="px-[3rem] py-3 rounded-3xl w-full text-white bg-[#1F94F3] hover:bg-[#077bda] font-poppins">
              Help Me Study Abroad
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
