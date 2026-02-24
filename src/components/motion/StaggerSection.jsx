"use client";
import { motion } from "framer-motion";
import { stagger, staggerItem, centerViewport } from "@/lib/motion";

export default function StaggerSection({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={centerViewport}
    >
      {children}
    </motion.div>
  );
}
