import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { easeInOut } from "motion/react";

const Copyemailbutton = () => {
  const [copied, setCopied] = useState(false);
  const email = "harmeetsingh6p@gmail.com";

  const copyMail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={copyMail}
      className="mt-4 px-4 py-2 bg-gradient-to-r 
                 from-blue-500 to-purple-600 rounded-lg text-white"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            key="copied"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: easeInOut }}
            className="flex items-center gap-2"
          >
            <i className="ri-check-line"></i> Copied Email
          </motion.p>
        ) : (
          <motion.p
            key="copy"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: easeInOut }}
            className="flex items-center gap-2"
          >
            <i className="ri-file-copy-line"></i> Copy Email
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  );
};

export default Copyemailbutton;
