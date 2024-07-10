"use client"
import React from "react";
import { motion } from "framer-motion";
import { PiCubeFill } from "react-icons/pi";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className={`h-full 2xl:h-[1500px]'}w-full m-auto py-16 my-16`}>
      <div className="container flex-col-reverse flex xl:flex-row">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/IMG_2504.JPG"
            width={400}
            height={100}
            className="w-full h-[720px] object-cover p-10"
          />

        </motion.div>

        <motion.div
          className="container p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-bold text-[2.986rem] leading-tight">
            Techno Innovation Challenge Cambodia
          </h1>
          <p className="mt-10">
            The Techno Innovation Challenge Cambodia is a competition program
            where students from different skills come together to form teams,
            design, build, and pitch their innovative STEM-based solutions for
            real-world problems. The program lasts for 4 weeks and is organized
            by the Institute of Technology of Cambodia. Teams are required to
            prove and test their ideas and prototypes through customer
            interviews and business research. The top 8 winning teams will
            receive $500 each.
          </p>
          <br></br>
          <p>
            The competition program is based on and supported by TEXAS A&M
            University College of Engineering where students focus on designing,
            building, and then selling a solution to a real world problem that
            has been provided by an industry or Agency partner. It is found to
            be the spark that gets students excited, inspired, and provides the
            energy to continue developing their solution in subsequent effort.
          </p>

          <div className="container mt-10">
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2 items-center">
                <PiCubeFill size={20} />
                <p>Team Formation: Collaborate, Innovate, Succeed</p>
              </li>

              <li className="flex gap-2 items-center">
                <PiCubeFill size={20} />
                <p>Design: Transform Ideas into Reality</p>
              </li>

              <li className="flex gap-2 items-center">
                <PiCubeFill size={20} />
                <p>Building: Bring Your Innovations to Life </p>
              </li>
            </ul>
          </div>
         
        </motion.div>
      </div>

      <div className="container flex-col-reverse flex xl:flex-row">
   

        <motion.div
          className="container p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
           <div className="container">
            <div className="">
              <p>
                The challenge event will be four-weekend duration that is mostly
                performed over a weekend for universities students to team up,
                design, build and pitch their innovative solutions under one of
                the themes: Internet of Thing or e-Commerce (ICT), Education or
                Health, and Agriculture or Energy. It has a transformational
                effect in students by:
              </p>
              <br></br>
              <ul className="list-disc ml-4">
                <li>
                  Providing them necessary technology, materials, mentorship and
                  training to support their innovation.
                </li>
                <li>
                  Working in teams where they have to share ideas, brainstorm,
                  and deliver the steps toward a solution in deadlines staged
                  throughout the experience
                </li>
                <li>
                  Meeting deadlines requiring teams to make decisions about
                  their solution, determine a path toward implementation, and
                  build the solution according to a schedule
                </li>
                <li>
                  Developing and practicing effective communication skills as
                  they “sell” their solution to a panel of judges as they
                  compete for placement in the competition. Competition provides
                  the focus and is like a pitch they will need to compete for
                  funding for their project in industry or as a startup.
                </li>
                <li>
                  Providing them a situation that is as much like their first
                  job in a high performance team as possible in a short period
                  in a university setting
                </li>
              </ul>
              <p>
                TICC is to push students’ Innovation into next level by
                providing them an opportunity to perform design and acquire
                skills essential to becoming successful innovation leaders and
                thus realizing that they are capable of developing complete
                solutions.
              </p>
              <br></br>
              <p>
                After the challenge, student teams especially engineering
                students have minimum viable products (prototypes) that are
                working, useful, and validated from customer and business
                perspectives.
              </p>
            </div>
            </div>
         
        </motion.div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/IMG_2531.JPG"
            width={400}
            height={100}
            className="w-full h-[720px] object-cover p-10"
          />

        </motion.div>
      </div>

     
    </div>
  );
};

export default Section2;
