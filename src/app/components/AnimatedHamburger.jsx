"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHamburger = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
      aria-label="Toggle menu"
    >
      {/* Top line */}
      <motion.span
        className="block h-0.5 w-6 bg-gray-700 dark:bg-gray-200 rounded-sm"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 8 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      {/* Middle line */}
      <motion.span
        className="block h-0.5 w-6 bg-gray-700 dark:bg-gray-200 rounded-sm my-1"
        animate={{
          opacity: isOpen ? 0 : 1,
          x: isOpen ? -10 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      {/* Bottom line */}
      <motion.span
        className="block h-0.5 w-6 bg-gray-700 dark:bg-gray-200 rounded-sm"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </button>
  );
};

export default AnimatedHamburger;
