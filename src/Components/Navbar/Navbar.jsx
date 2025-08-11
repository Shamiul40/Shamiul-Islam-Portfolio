import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import label from "daisyui/components/label";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false)

  // Smooth scroll function
  const hanadleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  //check scroll and change navbar background
  useEffect(()=>{
    const handleScrolled=() =>{
      setIsScrolled(window.scrollY=50)
    }
  },[])

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className={`fixed, top-0 w-full z-50 transition duration-300 px-[4vw] lg:px-[8vw] ${
      isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="text-white py-5  flex justify-between items-center">
        {/* logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white mr-1">SHAMIUL</span>
          <span className="text-white">ISLAM</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* desktop menu */}
        <ul className="md:flex space-x-8 text-gray-200">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              } `}
            >
              <button
                onClick={() => {
                  hanadleMenuItemClick(item.id);
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
