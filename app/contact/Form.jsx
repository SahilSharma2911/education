"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://script.google.com/macros/s/AKfycbw3eDOoh3yEuXOgvv6YvGlu4m7I670aAXgs2yz6PGMQJyao2K42C4r0eee2WFXD1nwk/exec",
      {
        method: "POST",
        body: new URLSearchParams(formData),
      }
    )
      .then((response) => response.text())
      .then((result) => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          state: "",
          subject: "",
          message: "",
        });
        // Check for exact success message or status
        if (result.trim() === "Success") {
          // alert("Your message has been sent successfully!");
          // Clear the form data
        } else {
          // alert("There was an error sending your message. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // alert("There was an error sending your message. Please try again.");
      });
  };

  return (
    <section className="w-full h-auto bg-[#F0F0F0] pt-[3rem] lg:pb-[4rem]">
      <div className="lg:w-10/12 mx-auto lg:flex lg:justify-between flex-col lg:flex-row">
        {/* Contact Form Section */}
        <div className="font-poppins px-[1.5rem] lg:px-0 lg:w-7/12 flex justify-center items-center w-full">
          <div className="rounded-lg w-full">
            <p className="text-[12px] leading-[12px] text-[#142031]">
              Send us an Email
            </p>
            <h2 className="text-[22px] md:text-[32px] font-medium leading-[40px] md:leading-[61px] text-[#142031] mt-2 md:mt-3">
              Got a question? Ask our team!
            </h2>
            <div className="bg-[#1F94F3] h-[2px] w-[100px] mt-2 md:mt-2.5"></div>
            <p className="text-[#142031] text-[14px] md:text-[16px] leading-[20px] md:leading-[30px] mt-4 md:mt-6">
              Fill out the contact form and we will get back to you with the
              right answer.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6 mt-6 md:mt-12 text-[12px] leading-[18px]"
            >
              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  className="border border-[#CBD6E2] p-3 rounded w-full"
                  aria-label="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  className="border border-[#CBD6E2] p-3 rounded w-full"
                  aria-label="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="border border-[#CBD6E2] p-3 rounded w-full"
                  aria-label="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone*"
                  className="border border-[#CBD6E2] p-3 rounded w-full"
                  aria-label="Phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                <select
                  name="state"
                  className="border border-gray-300 p-3 rounded w-full"
                  aria-label="State of residence"
                  required
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">State of residence</option>
                  <option value="State 1">State 1</option>
                  <option value="State 2">State 2</option>
                  <option value="State 3">State 3</option>
                  {/* Add more states as needed */}
                </select>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="border border-[#CBD6E2] p-3 rounded w-full"
                  aria-label="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                className="border border-[#CBD6E2] p-3 rounded w-full h-32"
                aria-label="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="flex">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 mx-auto text-white px-8 py-4 text-[12px] leading-[16px] rounded-full mt-3 md:mt-4"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="w-full lg:w-4/12 bg-[#F5F8FA] lg:border-t-[#1F94F3] lg:border-t-4 px-[2rem] py-[2.5rem] space-y-[1rem] font-poppins mt-8">
          <div className="mb-10">
            <h2 className="font-bold text-[#142031] leading-[24px]">
              Get in Touch With Us
            </h2>
            <p className="text-[12px] leading-[19.2px] mt-4 text-[#142031]">
              We&apos;re here to help with all your overseas education needs.
              Reach out to our team for personalized guidance, whether in person
              or online.
            </p>
          </div>
          <hr />
          {/* Phone */}
          <div className="flex gap-4 items-center">
            <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center">
              <FaPhoneAlt className="text-[#1F94F3]" />
            </div>
            <a
              href="tel:+918422016687"
              className="text-[12px] leading-[19.2px] hover:underline"
            >
              +91 84220-16687
            </a>
          </div>

          <hr />
          {/* Email */}
          <div className="flex gap-4 items-center">
            <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center">
              <FaEnvelope className="text-[#1F94F3]" />
            </div>
            <a
              href="mailto:info@careerthrive.in"
              className="text-[12px] leading-[19.2px] hover:underline"
            >
              info@careerthrive.in
            </a>
          </div>

          <hr />
          {/* WhatsApp */}
          <div className="flex gap-4 items-center">
            <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center">
              <FaWhatsapp className="text-[#1F94F3]" />
            </div>
            <a
              href="https://wa.me/918422016687"
              className="text-[12px] leading-[19.2px] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 84220-16687
            </a>
          </div>

          <hr />
          {/* Location */}
          <div className="flex gap-4 items-center">
            <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center">
              <FaMapMarkerAlt className="text-[#1F94F3]" />
            </div>
            <div className="text-[12px] leading-[19.2px]">
              <h3 className="text-[#142031] text-[14px] leading-[27px] font-medium">
                Location
              </h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Surat+Mumbai+Pune+Bangalore+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] leading-[19.2px] hover:underline"
              >
                Surat | Mumbai | Pune | Bangalore | Ahmedabad
                <br /> Online sessions are also available
              </a>
            </div>
          </div>
          <hr />
          {/* Social Media Icons */}
          <div className="flex space-x-6 justify-center">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border flex justify-center items-center rounded-full mt-4 hover:bg-[#1877F2] text-[#1F94F3] hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border flex justify-center items-center rounded-full mt-4 hover:bg-[#1DA1F2] text-[#1F94F3] hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border flex justify-center items-center rounded-full mt-4 hover:bg-[#0A66C2] text-[#1F94F3] hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
