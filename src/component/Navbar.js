import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MotionConfig, motion } from "framer-motion"; // Import Framer Motion
import Logo from "../image/kigalianimalfeeds.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items with section IDs
  const navItems = [
    { id: "home", text: "Home", to: "/" },
    { id: "services", text: "Services", to: "/services" },
    { id: "about", text: "About Us", to: "/about" },
    { id: "contact", text: "Contact Us", to: "/contact" },
  ];

  // Scroll detection for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollMiddle = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          section &&
          scrollMiddle >= section.offsetTop &&
          scrollMiddle < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="bg-white flex justify-between items-center h-24 w-full px-4 md:px-6 lg:px-10 text-primary shadow-md fixed top-0 left-0 z-50">
        {/* Logo */}
        <div>
          <img src={Logo} alt="logo" className="h-20" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li key={item.id} className="p-3 m-2 cursor-pointer duration-300 rounded-xl">
              <Link
                to={item.to}
                className={`${
                  activeSection === item.id
                    ? "text-black border-b-2 border-black"
                    : "hover:text-black"
                }`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon (Animated Hamburger Button) */}
        <div onClick={handleNav} className="block md:hidden">
          <MotionConfig
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.button
              initial={false}
              animate={nav ? "open" : "closed"}
              className="relative h-10 w-10 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-200"
            >
              {/* Top Bar */}
              <motion.span
                variants={VARIANTS.top}
                className="absolute h-1 w-6 bg-primary rounded"
              />
              {/* Middle Bar */}
              <motion.span
                variants={VARIANTS.middle}
                className="absolute h-1 w-6 bg-primary rounded"
              />
              {/* Bottom Bar */}
              <motion.span
                variants={VARIANTS.bottom}
                className="absolute h-1 w-6 bg-primary rounded"
              />
            </motion.button>
          </MotionConfig>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed left-0 w-full bg-secondary text-primary text-center overflow-hidden transform duration-500 ${
          nav ? "top-24 h-auto z-40" : "top-[-100%] h-0"
        }`}
      >
        {navItems.map((item) => (
          <li key={item.id} className="p-4 text-lg font-medium duration-300 cursor-pointer">
            <Link
              to={item.to}
              onClick={handleNav}
              className={`${
                activeSection === item.id
                  ? "text-black font-bold border-b-2 border-primary"
                  : "hover:text-black"
              }`}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Framer Motion Animation Variants
const VARIANTS = {
  top: {
    open: {
      rotate: 45,
      top: "50%",
    },
    closed: {
      rotate: 0,
      top: "30%",
    },
  },
  middle: {
    open: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  },
  bottom: {
    open: {
      rotate: -45,
      bottom: "50%",
      width: "100%",
    },
    closed: {
      rotate: 0,
      bottom: "30%",
      width: "75%",
    },
  },
};

export default Navbar;
