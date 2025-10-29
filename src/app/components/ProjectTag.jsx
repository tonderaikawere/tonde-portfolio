import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-blue-600 dark:bg-blue-600 border-blue-600 dark:border-blue-600"
    : "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-3 sm:px-5 py-2 sm:py-2 text-base cursor-pointer transition-all duration-300 font-medium`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
