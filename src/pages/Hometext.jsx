import React from "react";
import { FlipWords } from "../FlipWords";
import { motion } from "motion/react";
import { delay } from "motion";
import { useNavigate } from "react-router";

const Hometext = () => {
  const navigate=useNavigate()
    const variants= {
        hidden:{x:-50, opacity: 0},
        visible:{x:0,opacity: 1}
    }
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6  text-gray-200">
      {/* ✅ Desktop + Tablet View */}
      <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay:1}}  className="hidden md:flex flex-col items-center gap-4">
        <motion.h1 className="text-5xl lg:text-6xl font-bold text-white tracking-wide">
          Hi, I'm <motion.span className="text-blue-400">Harmeet</motion.span>
        </motion.h1>

        <motion.p ivariants={variants} initial="hidden" animate="visible" transition={{delay:1.2}}   className="text-gray-400 text-lg leading-relaxed">
          A developer <br /> dedicated to crafting high-quality digital experiences
        </motion.p>

        <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay:1.5}} className="flex items-center gap-3 mt-4">
          <p className="text-2xl text-gray-300">Building</p>
          <FlipWords
            words={["Secure", "Modern", "Scalable"]}
            className="text-3xl lg:text-5xl font-extrabold text-blue-400"
          />
          <p className="text-2xl text-gray-300">Web Solutions</p>
        </motion.div>

       <button
  onClick={() => {
    const section = document.querySelector("#projects");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="mt-8 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 shadow-lg hover:scale-105"
>
  View My Work 🚀
</button>

      </motion.div>

      {/* ✅ Mobile View */}
      <motion.div className="flex md:hidden flex-col items-center gap-4 mt-12">
        <motion.h1 className="text-4xl font-bold text-white tracking-wide">
          Hi, I'm <motion.span className="text-blue-400">Harmeet</motion.span>
        </motion.h1>

        <motion.div className="text-center mt-3">
          <p className="text-gray-400 text-lg">Building</p>
          <FlipWords
            words={["Secure", "Modern", "Scalable"]}
            className="font-black text-4xl text-blue-400"
          />
          <p className="text-gray-400 text-lg">Web Applications</p>
        </motion.div>

        <button className="mt-6 px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 shadow-md hover:scale-105">
          Explore 🚀
        </button>
      </motion.div>
    </section>
  );
};

export default Hometext;
