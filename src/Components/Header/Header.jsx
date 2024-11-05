import React from "react";
import logo from "../../assets/logo.webp";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between shadow-xl">
      {/* Left Side - Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="HubSpot Logo" className="w-32 md:w-52" />
      </div>

      {/* Center - Navigation Links */}
      <div className="md:flex space-x-6 text-gray-800 max-sm:text-xs max-sm:space-x-2">
        <a href="#">Photo Gallery</a>
        <a href="#">About Us</a>
      </div>

      {/* Right Side - WhatsApp Button */}
      <div className="hidden md:block">
        <a
          href="https://wa.me/923264789330"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0568A3] text-white font-semibold hover:text-white p-3 rounded-md hover:bg-[#0568A3] transition duration-300 flex items-center space-x-2"
        >
          <FaWhatsapp className="text-2xl text-green-500 mb-1" />
          <span>+92 326 478 9330</span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      {/* <div className="md:hidden">
        <button
          className="text-gray-800 focus:outline-none"
          aria-label="Open Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div> */}
    </nav>
  );
};

export default Header;
