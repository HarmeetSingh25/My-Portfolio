import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* -------- COLLAPSED CARD -------- */}
      <motion.div
        layout
        onClick={() => setOpen(true)}
        className="w-full bg-[#15151f] p-6 rounded-xl cursor-pointer 
                   hover:shadow-[0_0_30px_#6366f1] transition-all"
      >
        <motion.img
          layout
          src={project.thumbnail}
          className="w-full h-52 object-cover rounded-lg"
        />
        <motion.h3 layout className="text-xl font-bold mt-4">
          {project.title}
        </motion.h3>
        <motion.p layout className="text-gray-400 mt-1">
          {project.description}
        </motion.p>
      </motion.div>

      {/* -------- FULLSCREEN POPUP -------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layout
              className="bg-[#1c1c27] w-full max-w-3xl p-6 rounded-xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-white text-2xl"
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={project.thumbnail}
                className="w-full h-64 object-cover rounded-lg"
              />

              <h2 className="text-3xl font-bold mt-4">{project.title}</h2>
              <p className="text-gray-300 mt-2 text-lg">
                {project.longDescription}
              </p>

              {/* Tech List */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span className="px-3 py-1 bg-[#232334] rounded-full text-sm">
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex mt-6 gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 rounded-lg"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-gray-700 rounded-lg"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
