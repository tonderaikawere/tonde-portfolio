"use client";
import React from "react";
import Image from "next/image";
// Removed unused imports

const ProjectCard = ({
  title,
  description,
  imgUrl,
  gitUrl,
  previewUrl,
  playStoreUrl,
  appStoreUrl,
}) => {
  // Determine if this is a mobile app (has store badges)
  const isMobileApp = playStoreUrl || appStoreUrl;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 dark:border-gray-700 w-full">
      {/* Image Container - Fixed aspect ratio */}
      <div className="relative w-full pt-[56.25%] overflow-hidden bg-gray-100 dark:bg-gray-700">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content - Takes remaining space */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Action Buttons - Fixed height area */}
        <div className="mt-auto pt-4">
          {isMobileApp ? (
            // Mobile App: Show store badges with equal sizing
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              {playStoreUrl && (
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center transition-transform hover:scale-105"
                >
                  <div className="h-11 w-32 relative">
                    <Image
                      src="/images/badges/google.svg"
                      alt="Get it on Google Play"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </a>
              )}
              {appStoreUrl && (
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center transition-transform hover:scale-105"
                >
                  <div className="h-11 w-32 relative">
                    <Image
                      src="/images/badges/apple.svg"
                      alt="Download on the App Store"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </a>
              )}
            </div>
          ) : (
            // Website: Show Live Demo and GitHub buttons with equal widths
            <div className="grid grid-cols-2 gap-3">
              {previewUrl && (
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <span className="truncate">Live Demo</span>
                </a>
              )}
              {gitUrl && (
                <a
                  href={gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 text-white text-sm font-medium rounded-lg transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                  <span className="truncate">GitHub</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
