"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
// import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import GalaxyBackground from "./GalaxyBackground";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify({
      name: "Portfolio Website Visitor",
      email: data.email,
      subject: data.subject,
      message: data.message,
      _replyto: data.email,
      _subject: `Portfolio Contact: ${data.subject}`,
      _captcha: "false",
      _template: "table",
    });

    const endpoint = "https://formsubmit.co/ajax/tondekawere@gmail.com";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json().catch(() => null);

    if (response.ok && (resData?.success === "true" || resData?.success === true)) {
      console.log("Message sent.");
      setEmailSubmitted(true);
      e.target.reset();
      return;
    }

    const errorMsg =
      resData?.message ||
      resData?.error ||
      "Failed to send message. Please try again.";

    setSubmitError(typeof errorMsg === "string" ? errorMsg : "Failed to send message. Please try again.");
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-9 mb-0 md:my-12 py-24 pb-10 gap-4 relative overflow-hidden"
    >
      <GalaxyBackground />
      <div className="z-10">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white my-2 transition-colors duration-300">
          Let&apos;s Connect
        </h5>
        <p className="text-gray-600 dark:text-[#ADB7BE] mb-4 max-w-md transition-colors duration-300">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <motion.a
            href="https://github.com/tonderaikawere"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:opacity-80 transition-all duration-300 p-2 rounded-full bg-gray-100 dark:bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <Image 
              src={GithubIcon} 
              alt="Github Icon" 
              className="w-8 h-8 filter invert dark:invert-0"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tonderai-kawere-b29324268"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:opacity-80 transition-all duration-300 p-2 rounded-full bg-gray-100 dark:bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <Image 
              src={LinkedinIcon} 
              alt="Linkedin Icon" 
              className="w-8 h-8 filter invert dark:invert-0"
            />
          </motion.a>
        </div>
      </div>
      <div className="z-10">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-gray-900 dark:text-white block mb-2 text-sm font-medium transition-colors duration-300"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-gray-50 dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent transition-colors duration-300"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-gray-900 dark:text-white block text-sm mb-2 font-medium transition-colors duration-300"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-gray-50 dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent transition-colors duration-300"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-gray-900 dark:text-white block text-sm mb-2 font-medium transition-colors duration-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-gray-50 dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent transition-colors duration-300 min-h-[120px]"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg w-full transition-colors duration-300 text-sm"
            >
              Send Message
            </button>
            {submitError ? (
              <p className="text-red-500 text-sm mt-3">{submitError}</p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
