"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div className="w-full">
      <div className="max-w-full h-[428px] flex justify-center relative">
        <div className="w-full text-white h-full m-auto grid bg-cover bg-no-repeat bg-[url('/images/IMG_2800.JPG')]">
          <div className="container  mx-auto absolute z-1 bottom-20 left-0 right-0">
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
                className="font-bold text-[3.986rem] uppercase leading-tight top-10 w-full backdrop-blur-sm"
              >
                Mentors
              </motion.span>{" "}
            </motion.div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default page;
