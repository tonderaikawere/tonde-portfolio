"use client";
import React from 'react';
import { motion } from 'framer-motion';

const prand = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const round = (num, digits = 6) => {
  const p = 10 ** digits;
  return Math.round(num * p) / p;
};

const pct = (seed, range = 100, offset = 0, digits = 6) => {
  const val = round(prand(seed) * range + offset, digits);
  return `${val.toFixed(digits)}%`;
};

const GalaxyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main galaxy spiral */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-cyan-500/10 to-transparent rounded-full blur-xl" />
      </motion.div>

      {/* Floating stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-gray-400 dark:bg-white rounded-full"
          style={{
            left: pct(i + 1),
            top: pct(i + 101),
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 2 + prand(i + 201) * 3,
            repeat: Infinity,
            delay: prand(i + 301) * 2,
          }}
        />
      ))}

      {/* Nebula clouds */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`nebula-${i}`}
          className="absolute rounded-full blur-2xl"
          style={{
            left: pct(i + 401, 80, 10),
            top: pct(i + 501, 80, 10),
            width: `${(100 + prand(i + 601) * 200).toFixed(3)}px`,
            height: `${(100 + prand(i + 701) * 200).toFixed(3)}px`,
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? 'rgba(147, 51, 234, 0.1)' : 
              i % 3 === 1 ? 'rgba(6, 182, 212, 0.1)' : 
              'rgba(168, 85, 247, 0.1)'
            } 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + prand(i + 801) * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-px h-px bg-gradient-to-r from-transparent via-gray-500 dark:via-white to-transparent"
          style={{
            left: pct(i + 901),
            top: pct(i + 1001),
          }}
          animate={{
            x: [-100, 1000],
            y: [0, 200],
            opacity: [0, 1, 0],
            scaleX: [0, 50, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 8 + prand(i + 1101) * 5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Particle field */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            left: pct(i + 1201),
            top: pct(i + 1301),
            backgroundColor: i % 2 === 0 ? '#06b6d4' : '#a855f7',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, prand(i + 1401) * 50 - 25, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + prand(i + 1601) * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: prand(i + 1501) * 5,
          }}
        />
      ))}
    </div>
  );
};

export default GalaxyBackground;
