"use client";
import { motion } from "framer-motion";

export const BlueTechWave = () => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 w-full overflow-hidden z-10"
      initial={{ y: 20 }}
      animate={{ y: [0, 15, 0] }} // gentle vertical wave
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        className="relative block w-[200%] h-48"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {/* Base Wave */}
        <path
          d="M0,60 C150,90 450,30 600,60 C750,90 1050,30 1200,60 L1200,120 L0,120 Z"
          fill="rgba(59, 130, 246, 0.3)" // light blue
        />
        {/* Secondary Wave */}
        <path
          d="M0,70 C150,40 450,80 600,60 C750,40 1050,80 1200,60 L1200,120 L0,120 Z"
          fill="rgba(37, 99, 235, 0.5)" // medium blue
        />
        {/* Top Wave Layer */}
        <path
          d="M0,65 C150,75 450,35 600,65 C750,75 1050,35 1200,65 L1200,120 L0,120 Z"
          fill="rgba(29, 78, 216, 0.6)" // dark blue
        />
      </svg>
    </motion.div>
  );
};
