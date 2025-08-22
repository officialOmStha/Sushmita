import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="px-4 md:px-20 fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Sushmita</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#home" className="hover:text-gray-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300 transition">About</a></li>
          <li><a href="#services" className="hover:text-gray-300 transition">Services</a></li>
          <li><a href="#why" className="hover:text-gray-300 transition">Why Me</a></li>
          <li><a href="#gallery" className="hover:text-gray-300 transition">Gallery</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (shown only when open) */}
      {isOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-md min-h-[100vh] z-51" >
          <ul className="w-full flex flex-col items-center justify-center space-y-6 py-6 text-white font-medium ">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#why" onClick={toggleMenu}>Why Me</a></li>
            <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
