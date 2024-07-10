"use client"
import React from "react";
import { motion } from "framer-motion";
import { GiTeamIdea } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";

const Section3 = () => {
  // Variants for fade-in animation
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full lg:h-[1024px] h-full flex justify-center text-center">
      <div className="w-full text-white h-full grid bg-cover bg-no-repeat bg-[url('/images/IMG_2531.JPG')]">
        <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-80 w-full h-full"></div>
        <div className="col-start-1 row-start-1 mx-auto my-auto">
          <div className="container sm:px-20 px-6 flex gap-10 flex-col">
            <div className="flex flex-col gap-10 p-10">
              <h1 className="font-bold text-[2.986rem] leading-tight text-center">
                Objectives
              </h1>
              <p>
                Techno Innovation Challenge Cambodia Aims to be the vibrant
                platform where Young Cambodian Students come to activate
                their potential and move their leadership, creativity and
                Innovation to the next level. And revealing Student’s
                potential to all Stakeholders and Interested Bodies:
              </p>

              <div className="flex flex-col gap-10 lg:flex-row">
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center gap-6 border p-10 rounded-md w-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex items-center justify-center rounded-full bg-blue-500 text-white w-16 h-16"
                  >
                    <GrTechnology size={32} />
                  </motion.div>
                  <p className="text-center">
                    Promote both technical and entrepreneurship on STEM,
                    especially Engineering and Technology.
                  </p>
                </motion.div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center gap-6 border p-10 rounded-md w-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex items-center justify-center rounded-full bg-blue-500 text-white w-16 h-16"
                  >
                    <GiTeamIdea size={32} />
                  </motion.div>
                  <p className="text-center">
                    Promote students’ Innovation and make best use of their
                    skills.
                  </p>
                </motion.div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center gap-6 border p-10 rounded-md w-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex items-center justify-center rounded-full bg-blue-500 text-white w-16 h-16"
                  >
                    <BiWorld size={32} />
                  </motion.div>
                  <p className="text-center">
                    Promote innovative a STEM-based solution for solving a
                    real world problem.
                  </p>
                </motion.div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
