import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white z-50"
    >
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin mb-6"></div>

      {/* Loading Text */}
      <motion.h2
        className="text-xl font-semibold tracking-widest"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Loading<span className="text-blue-400">...</span>
      </motion.h2>

      {/* <p className="text-gray-400 mt-2 text-sm font-mono">
        Preparing your space journey 🌌
      </p> */}
    </motion.div>
  );
};

export default Loader;
