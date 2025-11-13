import React, { useRef } from "react";
import { motion } from "framer-motion";
import FloatingTag from "../component/FloatingTag";   // ⬅ Correct import
import codeImg from "../../assests/photo-1518773553398-650c184e0bb3.avif";
import { Globe } from "../component/Global";
import Copyemailbutton from "../component/Copyemailbutton";
import { Framework } from "../component/Framework";

const About = () => {
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    mouseRef.current = {
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    };
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="px-6 md:px-16 py-16 bg-[#0b0b16] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem]">

        {/* GRID 1 */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative md:col-span-3 p-6 rounded-xl 
             bg-cover bg-center bg-no-repeat
             hover:shadow-[0_0_30px_#6366f1] transition-all duration-300"
          style={{
            backgroundImage: `url(${codeImg})`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

          {/* CONTENT */}
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold">Hi, I'm Harmeet</h3>
            <p className="text-gray-300 mt-2">
              Passionate frontend developer focused on creating modern, interactive experiences.
            </p>
          </div>
        </motion.div>




        {/* GRID 2 — FLOATING TAGS */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative md:col-span-3 rounded-xl 
             bg-gradient-to-br from-[#12121c] to-[#0e0e15]
             p-4 overflow-hidden
             hover:shadow-[0_0_30px_#818cf8] transition-all duration-300"
        >
          <div className="relative w-full h-full min-h-[250px]">
            <p className="absolute text-4xl text-gray-600 font-bold left-1/2 -translate-x-1/2">
              PROJECTS
            </p>

            <FloatingTag text="UI/UX" startX={40} startY={30} />
            <FloatingTag text="React.js" startX={160} startY={70} />
            <FloatingTag text="Tailwind" startX={290} startY={40} />
            <FloatingTag text="Vite" startX={380} startY={120} />
            <FloatingTag text="Bootstrap" startX={90} startY={150} />
            <FloatingTag text="JavaScript" startX={250} startY={160} />
            <FloatingTag text="Git" startX={40} startY={220} />
            <FloatingTag text="GitHub" startX={200} startY={230} />
            <FloatingTag text="SASS" startX={330} startY={190} />
            <FloatingTag text="CSS" startX={430} startY={60} />
            <FloatingTag text="HTML" startX={480} startY={200} />

          </div>
        </motion.div>


        {/* GRID 3 */}
        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative md:col-span-2 rounded-xl 
             bg-gradient-to-br from-[#10101a] to-[#090913]
             p-6 overflow-hidden"
        >
          {/* TEXT LEFT SIDE */}
          <div className="relative z-10 w-[60%]">
            <h3 className="text-xl font-bold">Location</h3>
            <p className="text-gray-300 mt-2">Timezone</p>
            <p className="text-gray-400">
              I'm based in India, and open to remote work worldwide.
            </p>
          </div>

          {/* GLOBE RIGHT SIDE */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 scale-125 opacity-80 pointer-events-none">

            <Globe className="w-[200px] h-[200px]" />
          </div>
        </motion.div>


        {/* GRID 4 */}
        <motion.div
          custom={3}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-2 rounded-xl 
                     bg-gradient-to-br from-[#151527] to-[#0f0f1b]
                     p-6 text-center flex flex-col justify-center"
        >
          <div>

            <h3 className="text-xl font-bold">Want to work together?</h3>
            <Copyemailbutton/>
          </div>
        </motion.div>

        {/* GRID 5 */}
  <motion.div
  custom={4}
  variants={cardVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="md:col-span-2 rounded-xl 
             bg-gradient-to-br from-[#1a1a2e] to-[#141420]
             p-6 relative overflow-hidden"
>
  {/* TEXT LEFT SIDE */}
  <div className="relative z-20 w-[60%]">
    <p className="text-lg font-semibold">Tech Stack</p>
    <p className="text-gray-300 mt-2">
      I specialize in a variety of languages, frameworks, and tools that allow me to build
      modern and performant experiences.
    </p>
  </div>

  {/* ORBIT MODEL BOTTOM RIGHT */}
  <div className="absolute bottom-[-40px] right-[-40px] w-[250px] h-[250px] opacity-80 pointer-events-none z-10">
    <Framework />
  </div>

  {/* Gradient Fade for Clean UI */}
  <div className="absolute inset-0 bg-gradient-to-l from-[#1a1a2e] via-transparent to-transparent pointer-events-none"></div>
</motion.div>


      </div>
    </section>
  );
};

export default About;
