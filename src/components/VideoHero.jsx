"use client";
import React from "react";
import { motion } from "framer-motion";

const VideoHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-video.mp4"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex max-md:flex-col pb-16 justify-between gap-14 px-6 lg:px-16 items-end max-md:items-center max-md:gap-2 max-md:justify-center max-md:text-center" >
        {/* Left: Title */}
        
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="
            text-white
            font-extrabold
            uppercase
            leading-none
            tracking-[-0.04em]
            text-[4vw]
            lg:max-w-[50%]
          "
        >              
          Techno
          <br />
    
         Innovation Challenge Cambodia
        </motion.h1>

        {/* Right: Button */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex flex-col items-end"
        >
          <a
            href="#register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg md:text-4xl uppercase transition-all"
          >
            Register Now
          </a>
        </motion.div>
      </div>

      {/* Optional: Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-3xl md:text-4xl"
      >
        ↓
      </motion.div>
    </section>
  );
};

export default VideoHero;
