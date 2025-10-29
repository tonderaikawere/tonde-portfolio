"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import ThemeToggle from "./ThemeToggle";
import AnimatedHamburger from "./AnimatedHamburger";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-sm border-b border-gray-200 dark:border-[#33353F] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link
            href={"/"}
            className="text-2xl md:text-3xl text-gray-900 dark:text-white font-bold transition-colors duration-300"
          >
            T.K
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.path} title={link.title} />
            ))}
          </div>
          
          {/* Right side controls */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="md:hidden">
              <AnimatedHamburger 
                isOpen={navbarOpen} 
                onClick={() => setNavbarOpen(!navbarOpen)} 
              />
            </div>
          </div>
        </div>
      </div>
      <MenuOverlay 
        links={navLinks} 
        isOpen={navbarOpen} 
        onClose={() => setNavbarOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
