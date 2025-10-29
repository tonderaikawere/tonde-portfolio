"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Mweya.org Website",
    description: "Mweya Green Energy",
    image: "/images/projects/mweya.png",
    tag: ["All", "ReactJS"],
    gitUrl: "https://github.com/tondekawere/mweya",
    previewUrl: "https://mweya.vercel.app/",
  },
  {
    id: 2,
    title: "Jump-Start Website",
    description: "The mental health movement",
    image: "/images/projects/jump.png",
    tag: ["All", "ReactJS"],
    gitUrl: "https://github.com/tondekawere/jumpstart",
    previewUrl: "https://jumpstart-psi.vercel.app/",
  },
  {
    id: 3,
    title: "Uncommon.org Website",
    description: "Tech education  employment, for everyone.",
    image: "/images/projects/uncommon.png",
    tag: ["All", "ReactJS"],
    gitUrl: "https://github.com/tondekawere/uncommon",
    previewUrl: "https://uncommon-alpha.vercel.app/",
  },
  {
    id: 4,
    title: "Dylan's Portfolio Website",
    description: "UI/UX Designer",
    image: "/images/projects/dylan.png",
    tag: ["All", "NextJS"],
    gitUrl: "https://github.com/tondekawere/tay",
    previewUrl: "https://tay-nu.vercel.app/",
  },
  {
    id: 5,
    title: "Rent Car Services",
    description: "Car Hire Services",
    image: "/images/projects/car.png",
    tag: ["All", "ReactJS"],
    gitUrl: "https://github.com/tondekawere/car-rental",
    previewUrl: "https://car-rental-omega-umber.vercel.app/home",
  },
  {
    id: 6,
    title: "Arch Website",
    description: "Advanced Retailed Cloud System",
    image: "/images/projects/arch.png",
    tag: ["All", "ReactJS"],
    gitUrl: "https://github.com/tondekawere/arch",
    previewUrl: "https://arch-henna.vercel.app/",
  },
  {
    id: 7,
    title: "Stunning Portfolio Website",
    description: "Front-end Web Developer",
    image: "/images/projects/port.png",
    tag: ["NextJS"],
    gitUrl: "https://github.com/tondekawere/next-portfolio",
    previewUrl: "https://next-portfolio-murex-theta.vercel.app/",
  },
  {
    id: 8,
    title: "Concilia Portfolio Website",
    description: "Front-end Web Developer",
    image: "/images/projects/concilia.png",
    tag: ["ReactJS"],
    gitUrl: "https://github.com/tondekawere/concilia",
    previewUrl: "https://concilia.vercel.app/",
  },
  {
    id: 9,
    title: "Developers Portfolio Website",
    description: "Front-end Web Developer",
    image: "/images/projects/ton.png",
    tag: ["ReactJS"],
    gitUrl: "https://github.com/tondekawere/code-portfolio",
    previewUrl: "https://code-portfolio-five.vercel.app/",
  },
  {
    id: 10,
    title: "My Portfolio Website",
    description: "Front-end Web Developer",
    image: "/images/projects/my.png",
    tag: ["NextJS"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-8 md:mb-12 transition-colors duration-300">
        My Projects
      </h2>
      <div className="text-gray-900 dark:text-white flex flex-row justify-center items-center gap-2 px-5 py-6 transition-colors duration-300">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ReactJS"
          isSelected={tag === "ReactJS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NextJS"
          isSelected={tag === "NextJS"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
 