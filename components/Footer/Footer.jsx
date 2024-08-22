"use client";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sticky w-full bg-[#1C1F2A] text-white">
      <div className="w-10/12 mx-auto lg:flex-row md:justify-between flex flex-col gap-12 xl:gap-28 justify-between py-8">
        {/* Left section */}
        <div className="lg:w-8/12 flex flex-col gap-10 font-jost">
          <Link href={"/"}>
            <img
              src={"/Images/footlogo.png"}
              alt="Career Thrive logo"
              width={210}
              height={56}
            />
          </Link>
          <div>
            <h2 className="text-[14px] md:text-[20px] font-bold">
              Where will your studies take you?
            </h2>
            <p className="text-[12px] md:text-[14px] leading-[28px] mt-3">
              At educations.com, we believe that students who study abroad
              become the next generation of globally-minded adventurers and
              leaders - and we want more of you to do it! Every year, our search
              engine helps over 8 million students connect with some of the best
              universities and schools around the world.
            </p>
            <nav>
              <ul className="md:flex-row md:text-[1rem] hidden lg:flex flex-col gap-5 my-4 mt-10">
                <li className="underline">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="underline">
                  <Link href={"/services"}>Services</Link>
                </li>
                <li className="underline">
                  <Link href={"/about"}>About Us</Link>
                </li>
                <li className="underline">
                  <Link href={"/contact"}>Contact Us</Link>
                </li>
                <li className="underline">
                  <Link href={"/universities"}>Universities</Link>
                </li>
                <li className="underline">
                  <Link href={"/testimonial"}>Testimonials</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Right section */}
        <div className="font-jost lg:w-4/12 flex flex-col justify-center relative -mt-5">
          <h3 className="font-bold text-[14px] md:text-[20px] leading-[28px]">
            Get your counseling pathway
          </h3>
          <form
            action=""
            className="flex text-[12px] md:text-[16px] w-full mt-3 md:mt-4"
          >
            <input
              type="email"
              placeholder="Enter your email to get the PDF"
              className="border border-[#CBD6E2] rounded-l-lg w-full outline-none text-black py-2.5 px-4"
            />
            <button
              type="button"
              onClick={() => {
                const emailInput = document.querySelector(
                  'input[type="email"]'
                );
                const email = emailInput.value;
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (emailPattern.test(email)) {
                  window.open("/Images/sample.pdf", "_blank");
                } else {
                  alert("Please enter a valid email address.");
                }
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg py-2.5 px-8"
            >
              Get
            </button>
          </form>
          <nav>
            <ul className="md:flex-row md:text-[1rem] flex lg:hidden flex-col gap-5 my-4 mt-10">
              <li className="underline">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="underline">
                <Link href={"/services"}>Services</Link>
              </li>
              <li className="underline">
                <Link href={"/about"}>About Us</Link>
              </li>
              <li className="underline">
                <Link href={"/contact"}>Contact Us</Link>
              </li>
              <li className="underline">
                <Link href={"/universities"}>Universities</Link>
              </li>
              <li className="underline">
                <Link href={"/testimonial"}>Testimonials</Link>
              </li>
            </ul>
          </nav>
          <ul className="lg:absolute flex gap-4 bottom-2 right-0 mt-4 md:mt-6">
            <li>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-[2rem]" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-[2rem]" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-[2rem]" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[2rem]" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
