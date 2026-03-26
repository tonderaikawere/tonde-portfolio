"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  // Personal Projects
  {
    id: 1,
    title: "Mweya Green Energy",
    description: "Green energy solutions website",
    image: "/images/projects/project/mweya-green-energy.png",
    category: "personal",
    gitUrl: "https://github.com/tonderaikawere/mweya",
    previewUrl: "https://mweya.vercel.app/",
  },
  {
    id: 2,
    title: "White Lions Legacies",
    description: "Legacy preservation platform",
    image: "/images/projects/project/white-lions-legacies.png",
    category: "personal",
    gitUrl: "https://github.com/tonderaikawere/whitelionslegacies",
    previewUrl: "https://whitelionslegacies.vercel.app/",
  },
  {
    id: 3,
    title: "Jump Start",
    description: "Mental health awareness movement",
    image: "/images/projects/project/jumpstart.png",
    category: "personal",
    gitUrl: "https://github.com/tonderaikawere/jumpstart",
    previewUrl: "https://jumpstartorg.vercel.app/",
  },
  {
    id: 4,
    title: "Eatwell Restaurant",
    description: "Restaurant ordering platform",
    image: "/images/projects/project/eatwell-restaurant.png",
    category: "personal",
    gitUrl: "https://github.com/tonderaikawere/eatwell",
    previewUrl: "https://eatwell-new.vercel.app/",
  },
  {
    id: 5,
    title: "Chicken Inn Byo",
    description: "Restaurant ordering system",
    image: "/images/projects/project/chicken-inn.png",
    category: "personal",
    gitUrl: "https://github.com/tonderaikawere/chicken-inn-byo",
    previewUrl: "https://chicken-inn-byo.vercel.app/",
  },
  {
    id: 6,
    title: "Nike Zimbabwe",
    description: "E-commerce concept store",
    image: "/images/projects/project/nike-zimbabwe.png",
    category: "personal",
    gitUrl: "https://github.com/tonderaikawere/zim-nike",
    previewUrl: "https://zim-nike.vercel.app/",
  },
  // Gift Projects
  {
    id: 7,
    title: "Bells And Bubbles",
    description: "Event planning & celebrations website",
    image: "/images/projects/project/bells-and-bubbles.png",
    category: "gift",
    gitUrl: null,
    previewUrl: "https://bellsandbubbles.vercel.app/",
  },
  {
    id: 8,
    title: "Nketa Baptist Church",
    description: "Church community website",
    image: "/images/projects/project/nketa-baptist-church.png",
    category: "gift",
    gitUrl: null,
    previewUrl: "https://nketabaptistchurch.vercel.app/",
  },
  {
    id: 9,
    title: "Redemption Apostolic Church",
    description: "Church ministry website",
    image: "/images/projects/project/rac.png",
    category: "gift",
    gitUrl: null,
    previewUrl: "https://raczw.vercel.app/",
  },
  {
    id: 10,
    title: "National Association of Christian Churches",
    description: "Religious organization platform",
    image: "/images/projects/project/nacc.png",
    category: "gift",
    gitUrl: null,
    previewUrl: "https://nacczw.vercel.app/",
  },
  // Business Projects
  {
    id: 11,
    title: "Mamoe Gabhadiya Spicing Products",
    description: "Spice product e-commerce website",
    image: "/images/projects/business/mamoe-gabhadiya-spicing-products.png",
    category: "business",
    gitUrl: null,
    previewUrl: "https://mamoegabs.com/",
  },
  {
    id: 12,
    title: "Kawerify Tech",
    description: "Tech solutions & services company",
    image: "/images/projects/business/kawerify.png",
    category: "business",
    gitUrl: null,
    previewUrl: "https://kawerifytech.com/",
  },
  {
    id: 13,
    title: "A Plus Driving School",
    description: "Professional driving school services",
    image: "/images/projects/business/aplus.png",
    category: "business",
    gitUrl: null,
    previewUrl: "https://aplusdrivingschoolzw.vercel.app/",
  },
  {
    id: 14,
    title: "Favour Preschool & Day Care",
    description: "Early childhood education center",
    image: "/images/projects/business/favour.png",
    category: "business",
    gitUrl: null,
    previewUrl: "https://favourpreschool.vercel.app/",
  },
  {
    id: 15,
    title: "A Plus Driving Tests",
    description: "Driver's test preparation platform",
    image: "/images/projects/business/aplus-tests.png",
    category: "business",
    gitUrl: null,
    previewUrl: "https://aplusdrivingtests.vercel.app/",
  },
  // Mobile Apps
  {
    id: 16,
    title: "FLO Orders",
    description:
      "Fuel order management system for fuel stations and businesses",
    image: "/images/mobile/flo-orders-app/floorders-splash.webp",
    category: "mobile",
    gitUrl: null,
    previewUrl: "http://floorders.com/",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.floorders.floorders&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/flo-orders/id6756939956",
  },
  {
    id: 17,
    title: "Nketa Baptist Hymnals",
    description: "Digital hymnal app for church members",
    image: "/images/mobile/nketa-hymnal-app/nketabaptist-home.jpg",
    category: "mobile",
    gitUrl: null,
    previewUrl: null,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.tondekawere.baptisthymnals&pcampaignid=web_share",
    appStoreUrl: null,
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const ref = useRef(null);

  const tabs = [
    { id: "personal", label: "Personal Projects" },
    { id: "gift", label: "Gift Projects" },
    { id: "business", label: "Business"},
    { id: "mobile", label: "Mobile Apps" },
  ];

  // Get projects based on active tab
  const filteredProjects = projectsData.filter(
    (project) => project.category === activeTab,
  );

  // Get counts for each category
  const getProjectCount = (category) => {
    return projectsData.filter((project) => project.category === category)
      .length;
  };

  return (
    <section id="projects" className="py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              Work & Projects
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Exploring creativity through code, personal experiments, client
              solutions, and community gifts
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300
                flex items-center gap-1.5 md:gap-2 text-sm md:text-base
                ${
                  activeTab === tab.id
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              <span className="text-lg md:text-xl">{tab.icon}</span>
              <span className="hidden xs:inline">{tab.label}</span>
              <span className="xs:hidden">{tab.label.split(" ")[0]}</span>
              <span
                className={`
                ml-1 text-xs md:text-sm px-1.5 md:px-2 py-0.5 rounded-full
                ${
                  activeTab === tab.id
                    ? "bg-white/20 dark:bg-gray-900/20 text-white dark:text-gray-900"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                }
              `}
              >
                {getProjectCount(tab.id)}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Fully Responsive */}
        <div ref={ref}>
          {filteredProjects.length > 0 ? (
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.li
                  key={project.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="h-full w-full"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    playStoreUrl={project.playStoreUrl}
                    appStoreUrl={project.appStoreUrl}
                  />
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 md:py-16"
            >
              <div className="text-5xl md:text-6xl mb-4">🔍</div>
              <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
