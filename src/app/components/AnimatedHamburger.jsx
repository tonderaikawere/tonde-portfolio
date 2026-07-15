"use client";
import React from 'react';

const AnimatedHamburger = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
      aria-label="Toggle menu"
    >
      {/* Top line */}
      <span
        className="block h-0.5 w-6 bg-gray-700 dark:bg-gray-200 rounded-sm transition-all duration-300 ease-in-out"
        style={{
          transform: isOpen ? 'rotate(45deg) translate3d(5px, 6px, 0)' : 'translate3d(0, 0, 0)',
        }}
      />
      
      {/* Middle line */}
      <span
        className="block h-0.5 w-6 bg-gray-700 dark:bg-gray-200 rounded-sm my-1 transition-all duration-300 ease-in-out"
        style={{
          opacity: isOpen ? 0 : 1,
          transform: isOpen ? 'translate3d(-10px, 0, 0)' : 'translate3d(0, 0, 0)',
        }}
      />
      
      {/* Bottom line */}
      <span
        className="block h-0.5 w-6 bg-gray-700 dark:bg-gray-200 rounded-sm transition-all duration-300 ease-in-out"
        style={{
          transform: isOpen ? 'rotate(-45deg) translate3d(5px, -6px, 0)' : 'translate3d(0, 0, 0)',
        }}
      />
    </button>
  );
};

export default AnimatedHamburger;
