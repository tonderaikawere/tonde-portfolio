"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedGlobe from "./AnimatedGlobe";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center py-20 lg:py-0">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="max-w-3xl mx-auto lg:mx-0">
              <h1 className="text-gray-900 dark:text-white mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-slate-400 dark:via-white dark:to-cyan-400">
                  Hello, I&apos;m{" "}
                </span>
                <br />
                <div className="min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] lg:min-h-[7rem] flex items-center justify-center lg:justify-start">
                  <TypeAnimation
                    sequence={["Tonderai Kawere", 1000, "A Software Developer", 1000]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-gray-900 dark:text-white whitespace-nowrap"
                    style={{ display: 'inline-block' }}
                  />
                </div>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                Crafting innovative software solutions across web, mobile, and desktop platforms with 3+ years of professional experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="mailto:tondekawere@gmail.com?subject=Hiring Inquiry&body=Hi Tonderai, I'm interested in discussing a potential project with you."
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium transition-all duration-300 hover:scale-105 text-center text-sm"
                >
                  Hire Me
                </Link>
                <Link
                  href="/Tonderai-Kawere-CV.pdf"
                  download="Tonderai-Kawere-CV.pdf"
                  className="px-6 py-3 rounded-full border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105 text-center text-sm"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative flex justify-center items-center w-full">
              <AnimatedGlobe />
              {/* Floating code elements - hidden on very small screens */}
              <motion.div
                className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 text-cyan-500 dark:text-cyan-400 text-lg sm:text-2xl hidden sm:block"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                &lt;/&gt;
              </motion.div>
              <motion.div
                className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 text-purple-500 dark:text-purple-400 text-base sm:text-xl hidden sm:block"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                &#123;&#125;
              </motion.div>
              <motion.div
                className="absolute top-1/4 -right-6 sm:-right-12 text-green-500 dark:text-green-400 text-sm sm:text-lg hidden sm:block"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
