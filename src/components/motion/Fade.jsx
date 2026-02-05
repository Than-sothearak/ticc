"use client";

import { motion } from "framer-motion";
import { fade, centerViewport } from "@/lib/motion";

export default function Fade({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={centerViewport}
    >
      {children}
    </motion.div>
  );
}
