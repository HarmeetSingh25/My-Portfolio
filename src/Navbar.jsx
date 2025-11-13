import React, { useState } from "react";
import menu from "../assests/menu.svg";
import close from "../assests/close.svg";

/**
 * Updated Navbar:
 * - Uses <a href="#section"> for in-page navigation (works if sections have matching id)
 * - Closes mobile menu on click
 * - Keeps menu/close icons working
 * - Smooth scroll requires `html { scroll-behavior: smooth }` in your global CSS
 */

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" }, // make sure your Projects section has id="projects"
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <a
        href="#home"
        className="text-2xl font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        onClick={() => setOpen(false)}
      >
        &lt;Harmeet/&gt;
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-gray-300">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-blue-400 transition"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-200"
        onClick={() => setOpen((s) => !s)}
        aria-label="toggle menu"
      >
        <img src={open ? close : menu} alt="menu toggle" className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black/50 backdrop-blur-lg flex flex-col items-center gap-6 py-6 text-gray-300 md:hidden transition-all duration-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:text-blue-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
