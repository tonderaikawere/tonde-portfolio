"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGlobe = () => {
  return (
    <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] mx-auto flex-shrink-0">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 border-2 border-cyan-600/50 dark:border-cyan-500/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Middle rotating ring */}
      <motion.div
        className="absolute inset-4 border-2 border-purple-600/60 dark:border-purple-500/40 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Inner globe */}
      <motion.div
        className="absolute inset-8 bg-gradient-to-br from-cyan-500/30 to-purple-600/30 dark:from-cyan-400/20 dark:to-purple-600/20 rounded-full backdrop-blur-sm border border-gray-300/20 dark:border-white/10"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: 360 
        }}
        transition={{ 
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
      >
        {/* Globe grid lines */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Vertical lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-cyan-600/50 dark:via-cyan-400/30 to-transparent h-full"
              style={{ left: `${(i + 1) * 12.5}%` }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
          
          {/* Horizontal lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-600/50 dark:via-purple-400/30 to-transparent w-full"
              style={{ top: `${(i + 1) * 16.66}%` }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-600 dark:bg-cyan-400 rounded-full"
            style={{
              left: `${20 + (i * 7)}%`,
              top: `${30 + (i * 5)}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2 + (i * 0.2),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
      
      {/* Orbiting elements */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-3 h-3 bg-cyan-600 dark:bg-cyan-400 rounded-full top-0 left-1/2 transform -translate-x-1/2 shadow-lg shadow-cyan-600/50 dark:shadow-cyan-400/50" />
      </motion.div>
      
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full bottom-0 right-0 shadow-lg shadow-purple-600/50 dark:shadow-purple-400/50" />
      </motion.div>
    </div>
  );
};

export default AnimatedGlobe;
