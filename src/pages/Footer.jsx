import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b16] text-white py-12 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Harmeet Singh</h2>
          <p className="text-gray-400 text-sm mt-1">
            Frontend Developer • React • Tailwind • UI Animations
          </p>
        </div>

        {/* CENTER – SOCIAL ICONS */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/harmeetsingh25"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FiGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FiLinkedin />
          </a>

          <a
            href="mailto:harmeetsingh6p@gmail.com"
            className="hover:text-pink-400 transition"
          >
            <FiMail />
          </a>
        </div>

        {/* RIGHT – NAV LINKS */}
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Harmeet Singh — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
