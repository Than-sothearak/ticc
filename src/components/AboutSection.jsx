"use client";

import React from "react";
import { motion } from "framer-motion";
import { PiCubeFill } from "react-icons/pi";
import Image from "next/image";

import FadeUp from "./motion/FadeUp";
import Fade from "./motion/Fade";
import { stagger, staggerItem, centerViewport } from "@/lib/motion";

const AboutSection = () => {
  return (
    <div className="h-full 2xl:h-[1500px] w-full m-auto py-16 my-16">

      {/* ===== SECTION 1 ===== */}
      <div className="container flex flex-col-reverse xl:flex-row">

        {/* Image */}
        <FadeUp className="w-full">
          <Image
            src="/images/IMG_2504.JPG"
            width={400}
            height={100}
            alt="TICC Event"
            className="w-full h-[720px] object-cover lg:p-10 p-0"
          />
        </FadeUp>

        {/* Text */}
        <Fade className="container lg:p-10 p-0">
          <h1 className="font-bold text-[2.986rem] leading-tight">
            Techno Innovation Challenge Cambodia
          </h1>

          <p className="mt-10">
            The Techno Innovation Challenge Cambodia is a competition program
            where students from different skills come together to form teams,
            design, build, and pitch their innovative STEM-based solutions.
          </p>

          <br />

          <p>
            The competition program is supported by TEXAS A&amp;M University
            College of Engineering and focuses on solving real-world problems.
          </p>

          {/* List */}
          <motion.ul
            className="flex flex-col gap-4 mt-10"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={centerViewport}
          >
            <motion.li variants={staggerItem} className="flex gap-2 items-center">
              <PiCubeFill size={20} />
              <p>Team Formation: Collaborate, Innovate, Succeed</p>
            </motion.li>

            <motion.li variants={staggerItem} className="flex gap-2 items-center">
              <PiCubeFill size={20} />
              <p>Design: Transform Ideas into Reality</p>
            </motion.li>

            <motion.li variants={staggerItem} className="flex gap-2 items-center">
              <PiCubeFill size={20} />
              <p>Building: Bring Your Innovations to Life</p>
            </motion.li>
          </motion.ul>
        </Fade>
      </div>

      {/* ===== SECTION 2 ===== */}
      <div className="container flex flex-col-reverse xl:flex-row">

        {/* Text */}
        <Fade className="container lg:p-10 p-2">
          <p>
            The challenge event runs for four weekends where students team up,
            design, build, and pitch innovative solutions.
          </p>

          <br />

          <ul className="list-disc ml-4">
            <li>Access to mentorship and innovation resources</li>
            <li>Team collaboration under real deadlines</li>
            <li>Pitching ideas like a startup</li>
            <li>High-performance team experience</li>
            <li>Validated working prototypes</li>
          </ul>

          <br />

          <p>
            After the challenge, students walk away with minimum viable products
            validated by customers and industry experts.
          </p>
        </Fade>

        {/* Image */}
        <FadeUp className="w-full">
          <Image
            src="/images/IMG_2531.JPG"
            width={400}
            height={100}
            alt="TICC Pitching"
            className="w-full h-[720px] object-cover lg:p-10 p-0"
          />
        </FadeUp>
      </div>
    </div>
  );
};

export default AboutSection;
