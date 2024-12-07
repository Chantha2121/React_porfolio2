import { useState } from "react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <img className=" w-10 rounded" src={logo} alt="" />

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
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
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent z-10 p-4 md:p-0`}
        >
          <a href="/" className="block text-center md:inline-block hover:text-gray-200">
            Home
          </a>
          <a href="/about" className="block text-center md:inline-block hover:text-gray-200">
            About
          </a>
          <a href="/service" className="block text-center md:inline-block hover:text-gray-200">
            Services
          </a>
          <a href="/contact" className="block text-center md:inline-block hover:text-gray-200">
            Contact
          </a>
          <a href="/subscribe" className="block text-center md:inline-block hover:text-gray-200">
            Subscribe News Letter
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
