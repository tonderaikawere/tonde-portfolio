"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import AnimatedGlobe from "./AnimatedGlobe";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center py-20 lg:py-0">
      <style>{`
        @keyframes heroEntrance {
          from { opacity: 0; transform: scale(0.95) translate3d(0, 0, 0); }
          to { opacity: 1; transform: scale(1) translate3d(0, 0, 0); }
        }
        @keyframes codeFloatY {
          0%, 100% { transform: translate3d(0, -5px, 0); }
          50% { transform: translate3d(0, 5px, 0); }
        }
        @keyframes codeFloatYReverse {
          0%, 100% { transform: translate3d(0, 5px, 0); }
          50% { transform: translate3d(0, -5px, 0); }
        }
        @keyframes codeRotate {
          from { transform: rotate(0deg) translate3d(0, 0, 0); }
          to { transform: rotate(360deg) translate3d(0, 0, 0); }
        }
      `}</style>

      <div className="container mx-auto px-4 lg:px-8 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
            style={{
              animation: 'heroEntrance 0.5s ease-out forwards',
              willChange: 'transform, opacity',
            }}
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
                <a
                  href="mailto:tondekawere@gmail.com?subject=Hiring Inquiry&body=Hi Tonderai, I'm interested in discussing a potential project with you."
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium transition-all duration-300 hover:scale-105 text-center text-sm"
                >
                  Hire Me
                </a>
                <a
                  href="/Tonderai-Kawere-CV.pdf"
                  download="Tonderai-Kawere-CV.pdf"
                  className="px-6 py-3 rounded-full border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105 text-center text-sm"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          
          <div
            className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
            style={{
              animation: 'heroEntrance 0.5s ease-out forwards',
              willChange: 'transform, opacity',
            }}
          >
            <div className="relative flex justify-center items-center w-full">
              <AnimatedGlobe />
              {/* Floating code elements - hidden on very small screens */}
              <div
                className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 text-cyan-500 dark:text-cyan-400 text-lg sm:text-2xl hidden sm:block"
                style={{
                  animation: 'codeFloatY 3s infinite ease-in-out',
                  willChange: 'transform',
                }}
              >
                &lt;/&gt;
              </div>
              <div
                className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 text-purple-500 dark:text-purple-400 text-base sm:text-xl hidden sm:block"
                style={{
                  animation: 'codeFloatYReverse 2.5s infinite ease-in-out',
                  willChange: 'transform',
                }}
              >
                &#123;&#125;
              </div>
              <div
                className="absolute top-1/4 -right-6 sm:-right-12 text-green-500 dark:text-green-400 text-sm sm:text-lg hidden sm:block"
                style={{
                  animation: 'codeRotate 8s infinite linear',
                  willChange: 'transform',
                }}
              >
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
