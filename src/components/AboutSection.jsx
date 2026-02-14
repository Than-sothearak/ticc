"use client";

import React from "react";
import { motion } from "framer-motion";
import { PiCubeFill } from "react-icons/pi";
import Image from "next/image";
import FadeUp from "./motion/FadeUp";
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
            width={1200}
            height={400}
            alt="TICC Event"
            className="w-full lg:h-[720px] object-cover py-4"
          />
        </FadeUp>

        {/* Text */}
       <div className="lg:container lg:p-10 py-4 w-full">
         <StaggerSection>
          <FadeUp className="">
            <FadeUp>
              <h1 className="font-bold text-[2.986rem] leading-tight">
                Techno Innovation Challenge Cambodia
              </h1>
            </FadeUp>

            <FadeUp>
              <p className="mt-10">
                Techno Innovation Challenge Cambodia is a competition program which students from different
skills team up, design, build and pitch their innovative STEM-based solutions for solving a real-world
problem within 4 weeks’ duration, organized by Institute of Technology of Cambodia.
              </p>
            </FadeUp>

            <br />

               <FadeUp>
              <p>
                Teams need to
prove and test their ideas and prototypes through a customer interview and some business research to
compete with other teams on Semi Final to advance to the final round. The award of top 8 teams will
receive USD 4,000 in totals cash prize.
              </p>
               <br />
            </FadeUp>

            <FadeUp>
              <p>
                The competition program is based on and supported by TEXAS A&M University College of
Engineering where students focus on designing, building, and then selling a solution to a real world
problem that has been provided by an industry or Agency partner. It is found to be the spark that gets
students excited, inspired, and provides the energy to continue developing their solution in subsequent
effort.
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
      </div>

      {/* ===== SECTION 2 ===== */}
      <div className="container flex flex-col-reverse xl:flex-row">
        {/* Text */}
        <div className="container lg:p-10 p-2">
          <FadeUp>
            <p>
             The challenge event will be <strong>four-weekend</strong> duration that is mostly performed over a weekend for
universities students to team up, design, build and pitch their innovative solutions under one of the
themes: Internet of Thing or e-Commerce (ICT), Education or Health, and Agriculture or Energy. It has a
transformational effect in students by:
            </p>
          </FadeUp>
          <br />

          <StaggerSection>
            <ul className="list-disc ml-4">
              <FadeUp>
                <li>Providing them necessary technology, materials, mentorship and training to support their
innovation.</li>
              </FadeUp>
              <FadeUp>
                <li>Working in teams where they have to share ideas, brainstorm, and deliver the steps toward a solution
in deadlines staged throughout the experience</li>
              </FadeUp>
              <FadeUp>
                <li>Meeting deadlines requiring teams to make decisions about their solution, determine a path toward
implementation, and build the solution according to a schedule</li>
              </FadeUp>
              <FadeUp>
                  <li>Developing and practicing effective communication skills as they “sell” their solution to a panel of
judges as they compete for placement in the competition. Competition provides the focus and is like
a pitch they will need to compete for funding for their project in industry or as a startup.</li>
              </FadeUp>
             <FadeUp>
               <li>Providing them a situation that is as much like their first job in a high-performance team as possible
in a short period in a university setting</li>
             </FadeUp>

                <FadeUp>
               <li>TICC is to push students’ Innovation into next level by providing them an opportunity to perform
design and acquire skills essential to becoming successful innovation leaders and thus realizing that
they are capable of developing complete solutions.</li>
             </FadeUp>

                      <FadeUp>
               <li>After the challenge, student teams especially engineering students have minimum viable products
(prototypes) that are working, useful, and validated from customer and business perspectives.</li>
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
            src="/images/IMG_2637.JPG"
            width={1200}
            height={400}
            alt="TICC Pitching"
            className="w-full lg:h-[720px] object-cover lg:p-10 py-4"
          />
        </FadeUp>
      </div>
    </div>
  );
};

export default AboutSection;
