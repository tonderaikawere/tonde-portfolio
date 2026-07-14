"use client";
import React, { useState, useEffect } from 'react';

const AnimatedGlobe = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] mx-auto flex-shrink-0">
      <style>{`
        @keyframes globeScaleRotate {
          0% { transform: scale(1) rotate(0deg) translate3d(0,0,0); }
          50% { transform: scale(1.05) rotate(180deg) translate3d(0,0,0); }
          100% { transform: scale(1) rotate(360deg) translate3d(0,0,0); }
        }
        @keyframes verticalPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes horizontalPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes particleFloat {
          0%, 100% { transform: translate3d(-5px, -10px, 0); opacity: 0.4; }
          50% { transform: translate3d(5px, 10px, 0); opacity: 1; }
        }
      `}</style>

      {/* Outer rotating ring */}
      <div
        className="absolute inset-0 border-2 border-cyan-600/50 dark:border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite]"
        style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform' }}
      />
      
      {/* Middle rotating ring */}
      <div
        className="absolute inset-4 border-2 border-purple-600/60 dark:border-purple-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"
        style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform' }}
      />
      
      {/* Inner globe - Removed backdrop-blur-sm to prevent paint invalidations */}
      <div
        className="absolute inset-8 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 dark:from-cyan-400/10 dark:to-purple-600/10 rounded-full border border-gray-300/10 dark:border-white/5"
        style={{
          animation: 'globeScaleRotate 25s linear infinite',
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform',
        }}
      >
        {/* Globe grid lines & particles - Rendered after initial page load */}
        {mounted && (
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {/* Vertical lines */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute w-px bg-gradient-to-b from-transparent via-cyan-600/50 dark:via-cyan-400/30 to-transparent h-full"
                style={{
                  left: `${(i + 1) * 12.5}%`,
                  animation: 'verticalPulse 3s infinite ease-in-out',
                  animationDelay: `${i * 0.2}s`,
                  transform: 'translate3d(0, 0, 0)',
                  willChange: 'opacity',
                }}
              />
            ))}
            
            {/* Horizontal lines */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-purple-600/50 dark:via-purple-400/30 to-transparent w-full"
                style={{
                  top: `${(i + 1) * 16.66}%`,
                  animation: 'horizontalPulse 3s infinite ease-in-out',
                  animationDelay: `${i * 0.3}s`,
                  transform: 'translate3d(0, 0, 0)',
                  willChange: 'opacity',
                }}
              />
            ))}

            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-cyan-600 dark:bg-cyan-400 rounded-full"
                style={{
                  left: `${20 + (i * 7)}%`,
                  top: `${30 + (i * 5)}%`,
                  animation: `particleFloat ${2 + (i * 0.2)}s infinite ease-in-out`,
                  transform: 'translate3d(0, 0, 0)',
                  willChange: 'transform, opacity',
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Orbiting elements */}
      <div
        className="absolute inset-0 animate-[spin_30s_linear_infinite]"
        style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform' }}
      >
        <div className="absolute w-3 h-3 bg-cyan-600 dark:bg-cyan-400 rounded-full top-0 left-1/2 transform -translate-x-1/2 shadow-lg shadow-cyan-600/50 dark:shadow-cyan-400/50" />
      </div>
      
      <div
        className="absolute inset-0 animate-[spin_25s_linear_infinite_reverse]"
        style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform' }}
      >
        <div className="absolute w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full bottom-0 right-0 shadow-lg shadow-purple-600/50 dark:shadow-purple-400/50" />
      </div>
    </div>
  );
};

export default AnimatedGlobe;
