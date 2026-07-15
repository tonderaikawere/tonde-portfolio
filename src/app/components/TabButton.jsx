import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active 
    ? "text-blue-600 dark:text-blue-400" 
    : "text-gray-600 dark:text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className="transition-colors duration-300">
      <p className={`mr-3 font-semibold hover:text-blue-600 dark:hover:text-blue-400 ${buttonClasses}`}>
        {children}
      </p>
      <div
        className="h-1 bg-blue-600 dark:bg-blue-600 mt-2 mr-3 transition-all duration-300 ease-in-out"
        style={{
          width: active ? "calc(100% - 0.75rem)" : "0px",
          transform: 'translate3d(0, 0, 0)',
          willChange: 'width',
        }}
      />
    </button>
  );
};

export default TabButton;
