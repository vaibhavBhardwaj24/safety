import React, { useState } from "react";
export default function NavbarCompo() {
  const [activeLink, setActiveLink] = useState("#home");

  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="fixed flex flex-row p-4 border-b-1 bg-white/[.95] border-gray-300 w-full backdrop-blur-3xl gap-6 text-xl">
      <a
        href="#home"
        onClick={() => handleClick("#home")}
        className={`hover:text-red-500 duration-300 ${
          activeLink === "#home" ? "text-red-600 font-bold" : ""
        }`}
      >
        Home
      </a>
      <a
        href="#features"
        onClick={() => handleClick("#features")}
        className={`hover:text-red-500 duration-300 ${
          activeLink === "#features" ? "text-red-600 font-bold" : ""
        }`}
      >
        Features
      </a>
      <a
        href="#resources"
        onClick={() => handleClick("#resources")}
        className={`hover:text-red-500 duration-300 ${
          activeLink === "#resources" ? "text-red-600 font-bold" : ""
        }`}
      >
        Resources
      </a>
      <a
        href="#team"
        onClick={() => handleClick("#team")}
        className={`hover:text-red-500 duration-300 ${
          activeLink === "#team" ? "text-red-600 font-bold" : ""
        }`}
      >
        Team
      </a>
    </div>
  );
}
