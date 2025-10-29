"use client";
import React from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, isOpen, onClose }) => {
  const menuVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40,
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-[#121212]/95 backdrop-blur-sm z-40 md:hidden"
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <motion.ul 
          className="flex flex-col space-y-8 text-center"
          variants={menuVariants}
        >
          {links.map((link, index) => (
            <motion.li key={index} variants={itemVariants}>
              <div onClick={onClose}>
                <NavLink href={link.path} title={link.title} />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default MenuOverlay;
