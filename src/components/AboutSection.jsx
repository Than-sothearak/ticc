"use client";

import React from "react";
import { motion } from "framer-motion";
import { PiCubeFill } from "react-icons/pi";
import Image from "next/image";

import FadeUp from "./motion/FadeUp";
import Fade from "./motion/Fade";
import { stagger, staggerItem, centerViewport } from "@/lib/motion";
import StaggerSection from "./motion/StaggerSection";

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
        <StaggerSection>
          <FadeUp className="container lg:p-10 p-0">
            <FadeUp>
              <h1 className="font-bold text-[2.986rem] leading-tight">
                Techno Innovation Challenge Cambodia
              </h1>
            </FadeUp>

            <FadeUp>
              <p className="mt-10">
                The Techno Innovation Challenge Cambodia is a competition
                program where students from different skills come together to
                form teams, design, build, and pitch their innovative STEM-based
                solutions.
              </p>
            </FadeUp>

            <br />

            <FadeUp>
              <p>
                The competition program is supported by TEXAS A&amp;M University
                College of Engineering and focuses on solving real-world
                problems.
              </p>
            </FadeUp>

            {/* List */}
            <motion.ul
              className="flex flex-col gap-4 mt-10"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={centerViewport}
            >
              <FadeUp
                variants={staggerItem}
                className="flex gap-2 items-center"
              >
                <PiCubeFill size={20} />
                <p>Team Formation: Collaborate, Innovate, Succeed</p>
              </FadeUp>

              <FadeUp
                variants={staggerItem}
                className="flex gap-2 items-center"
              >
                <PiCubeFill size={20} />
                <p>Design: Transform Ideas into Reality</p>
              </FadeUp>

              <FadeUp
                variants={staggerItem}
                className="flex gap-2 items-center"
              >
                <PiCubeFill size={20} />
                <p>Building: Bring Your Innovations to Life</p>
              </FadeUp>
            </motion.ul>
          </FadeUp>
        </StaggerSection>
      </div>

      {/* ===== SECTION 2 ===== */}
      <div className="container flex flex-col-reverse xl:flex-row">
        {/* Text */}
        <div className="container lg:p-10 p-2">
          <FadeUp>
            <p>
              The challenge event runs for four weekends where students team up,
              design, build, and pitch innovative solutions.
            </p>
          </FadeUp>
          <br />

          <StaggerSection>
            <ul className="list-disc ml-4">
              <FadeUp>
                <li>Access to mentorship and innovation resources</li>
              </FadeUp>
              <FadeUp>
                <li>Team collaboration under real deadlines</li>
              </FadeUp>
              <FadeUp>
                <li>Pitching ideas like a startup</li>
              </FadeUp>
              <FadeUp>
                  <li>High-performance team experience</li>
              </FadeUp>
             <FadeUp>
               <li>Validated working prototypes</li>
             </FadeUp>
            </ul>
          </StaggerSection>

          <br />

        <FadeUp>
            <p>
            After the challenge, students walk away with minimum viable products
            validated by customers and industry experts.
          </p>
        </FadeUp>
        </div>

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
