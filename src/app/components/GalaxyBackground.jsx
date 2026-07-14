"use client";
import React from 'react';

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
      <style>{`
        @keyframes galaxySpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes starPulse {
          0%, 100% { opacity: 0.2; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes nebulaFloat {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.2); }
        }
        @keyframes shootingStar {
          0% { transform: translate(-100px, 0px) scaleX(0); opacity: 0; }
          10%, 90% { opacity: 1; }
          100% { transform: translate(1000px, 200px) scaleX(50); opacity: 0; }
        }
        @keyframes particleFieldFloat {
          0%, 100% { transform: translate(0px, 0px); opacity: 0.3; }
          50% { transform: translate(var(--target-x), -100px); opacity: 0.8; }
        }
      `}</style>

      {/* Main galaxy spiral */}
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96"
        style={{
          animation: 'galaxySpin 60s linear infinite',
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-cyan-500/10 to-transparent rounded-full blur-xl" />
      </div>

      {/* Floating stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-gray-400 dark:bg-white rounded-full"
          style={{
            left: pct(i + 1),
            top: pct(i + 101),
            animation: `starPulse ${2 + prand(i + 201) * 3}s infinite ease-in-out`,
            animationDelay: `${prand(i + 301) * 2}s`,
            willChange: 'transform, opacity',
          }}
        />
      ))}

      {/* Nebula clouds */}
      {[...Array(8)].map((_, i) => (
        <div
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
            animation: `nebulaFloat ${15 + prand(i + 801) * 10}s infinite ease-in-out`,
            willChange: 'transform',
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute w-px h-px bg-gradient-to-r from-transparent via-gray-500 dark:via-white to-transparent"
          style={{
            left: pct(i + 901),
            top: pct(i + 1001),
            animation: `shootingStar 2s infinite ease-out`,
            animationDelay: `${i * 8 + prand(i + 1101) * 5}s`,
            willChange: 'transform, opacity',
          }}
        />
      ))}

      {/* Particle field */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            left: pct(i + 1201),
            top: pct(i + 1301),
            backgroundColor: i % 2 === 0 ? '#06b6d4' : '#a855f7',
            animation: `particleFieldFloat ${8 + prand(i + 1601) * 4}s infinite ease-in-out`,
            animationDelay: `${prand(i + 1501) * 5}s`,
            '--target-x': `${(prand(i + 1401) * 50 - 25).toFixed(3)}px`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
};

export default GalaxyBackground;
