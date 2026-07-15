"use client";
import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, isOpen, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-[#121212]/95 backdrop-blur-sm z-40 md:hidden transition-all duration-500 ease-in-out"
      style={{
        transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <ul className="flex flex-col space-y-8 text-center">
          {links.map((link, index) => (
            <li
              key={index}
              className="transition-all duration-500 ease-out"
              style={{
                transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-20px, 0, 0)',
                opacity: isOpen ? 1 : 0,
                transitionDelay: isOpen ? `${index * 75}ms` : '0ms',
              }}
            >
              <div onClick={onClose}>
                <NavLink href={link.path} title={link.title} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuOverlay;
