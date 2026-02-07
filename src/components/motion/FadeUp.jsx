"use client";

import { motion } from "framer-motion";
import { fadeUp, centerViewport } from "@/lib/motion";

export default function FadeUp({ children, className = "", loop}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden" 
      whileInView="visible"
      viewport={{ ...centerViewport, once: loop || false }}
    >
      {children}
    </motion.div>
  );
}
