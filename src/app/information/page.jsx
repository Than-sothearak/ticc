"use client";
import React from "react";

import { motion } from "framer-motion";
const page = () => {
  return (
    <div className="w-full">
      <div className="max-w-full h-[428px] flex justify-center relative">
        <div className="w-full text-white h-full m-auto grid bg-cover bg-no-repeat bg-[url('/images/IMG_2718.JPG')]">
          <div className="container backdrop-blur-sm mx-auto absolute z-1 bottom-20 left-0 right-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Initial animation properties
              animate={{ opacity: 1, y: 0 }} // Animation properties to animate to
              transition={{ duration: 1 }} 
              // Animation duration
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="font-bold md:text-[3.986rem] uppercase leading-tight top-10 text-3xl"
              >
                Information & Schedule
              </motion.span>{" "}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-10">
        <div className="container text-start">
          <p>Techno Innovation Challenge will challenge you to put your theory into practice solving real world problems and apply your skills and knowledge to build something amazing. During the competition, you will have access to tools, materials, labs and some supports if needed to develop your prototypes, and the training and mentoring. </p>

        </div>
      </div>
    </div>
  );
};

export default page;
