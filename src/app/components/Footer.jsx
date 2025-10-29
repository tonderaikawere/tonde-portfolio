"use client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer border z-10 border-t-[#33353F] dark:border-t-[#33353F] border-t-gray-200 xl:pr-0 border-l-transparent border-r-transparent text-gray-900 dark:text-white bg-white dark:bg-transparent transition-colors duration-300">
      <div className="container p-12 xl:pl-20 flex justify-between">
        <span className="font-semibold">T.K</span>
        <span className="text-gray-600 dark:text-slate-300">
          {currentYear} &copy; All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
