"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript/TypeScript</li>
        <li>React.js & Next.js</li>
        <li>React Native</li>
        <li>Node.js & Express</li>
        <li>Python & Django</li>
        <li>Flutter & Dart</li>
        <li>MongoDB & PostgreSQL</li>
        <li>Git & DevOps</li>
      </ul>
    ),
  },
  // {
  //   title: "Education",
  //   id: "education",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>Uncommon.org</li>
  //       <li>Freecodecamp</li>
  //       <li>ProProfs Quiz Maker</li>
  //       <li>Alison</li>
  //     </ul>
  //   ),
  // },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Front End Development Libraries</li>
        <li>Responsive Web Design certificate</li>
        <li>JavaScript Application Programming</li>
        <li>Web Development with HTML and CSS</li>
        <li>HTML Quiz: Multiple Choice Questions</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-gray-900 dark:text-white transition-colors duration-300" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          alt="images"
          width={600}
          height={600}
          className=" md:h-[60vh]  lg:h-[40vh] object-cover xl:h-[76vh] rounded-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300">
            I am a professional Software Developer with over 3 years of experience
            transforming innovative concepts into cutting-edge digital solutions.
            My expertise spans across web applications, mobile apps, and custom
            software development using modern technologies like React, React Native,
            Node.js, Python, and Flutter. I specialize in creating seamless user
            experiences across multiple platforms and have a proven track record of
            delivering scalable, high-performance applications that drive business growth.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
