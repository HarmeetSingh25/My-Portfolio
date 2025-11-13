import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) setShow(true);
      else setShow(false);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl text-white hover:scale-110 transition"
    >
      ↑
    </motion.button>
  );
};

export default BackToTop;
