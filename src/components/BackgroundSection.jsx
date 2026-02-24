"use client";

import React from "react";
import FadeUp from "./motion/FadeUp";
import StaggerSection from "./motion/StaggerSection";
import { staggerItem } from "@/lib/motion";
import Image from "next/image";

const BackgroundSection = () => {
  return (
    <div className="flex flex-col w-full">
      {/* ===== Background / Intro Section ===== */}
      <div className="flex justify-center w-full pt-16">
        <div className="container grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/* Left Side - Text */}
          <div className="container lg:p-10 p-0 flex flex-col gap-6 mb-16">
            <FadeUp variants={staggerItem}>
              <h1 className="font-bold text-[2.986rem] leading-tight">
                Background
              </h1>
            </FadeUp>

            <FadeUp variants={staggerItem}>
              <p>
                Institute of Technology of Cambodia (ITC) is a public
                engineering school in Cambodia with a well-known and recognized
                achievement in Cambodia’s higher education industry. ITC has a
                clear long objective and mission. The fourth objective of ITC is
                to train engineers to innovate and practice entrepreneurship,
                creating high-skilled jobs and solutions to future challenges.
              </p>
            </FadeUp>

            <FadeUp variants={staggerItem}>
              <p>
                ITC was selected the only one to pilot the MS2W Institutional
                Innovation Challenge, which was named as “Techno Innovation
                Challenge Cambodia” in Cambodia during the first quarter of
                FY2019 by the USAID Connecting the Mekong through the Education
                and Training (USAID COMET) Project to be organized in 2017, at
                Institute of Technology of Cambodia, Phnom Penh, Cambodia. The
                program is based on Texas A&M University (TAMU)’s Innovation
                Challenge, called{" "}
                <a
                  href="https://engineering.tamu.edu/student-life/aggies-invent/index.html"
                  className="text-blue-700 underline"
                >
                  Aggies Invent
                </a>
                .
              </p>
            </FadeUp>
          </div>

          {/* Right Side - Images */}
          <div className="flex flex-col gap-6 justify-center items-center lg:mb-0 mb-10 w-full">
            <FadeUp variants={staggerItem}>
              <div className="relative w-full h-full">
                <Image
                    height={192}
          width={192}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKFHgAvqJFkyraBofQTNx-A1oi5WL5LcJDA&s"
                  className="w-96 rounded-md containe"
                  alt="ITC Campus"
                />
              </div>
            </FadeUp>

            <FadeUp variants={staggerItem}>
              <div className="relative w-full h-full">
                <Image
                   height={240}
          width={240}
                  src="https://marvel-b1-cdn.bc0a.com/f00000000294758/www.midland.edu/academics/images/university-partnerships/tamu-academy/tamu-engineering-logo.png"
                  className="w-full rounded-md object-cover"
                  alt="TAMU Logo"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* ===== Benefits Section (Section5) ===== */}
      <div className="flex justify-center w-full py-16 bg-gray-100 items-center">
        <div className="container grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div className="container lg:p-10 p-0 flex flex-col gap-6">
            <FadeUp variants={staggerItem}>
              <h1 className="font-bold text-[2.986rem] leading-tight">
                Benefits
              </h1>
            </FadeUp>

            <FadeUp variants={staggerItem}>
              <p>Contestants can benefit from the program:</p>
            </FadeUp>

            {/* Staggered list items */}
            <StaggerSection className="flex flex-col gap-2 ml-4 list-disc">
              <FadeUp variants={staggerItem}>
                <li>
                  Experience international competition program and process, the
                  only one competition in Cambodia, which is based on and
                  supported by TEXAS A&M University College of Engineering.
                </li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>
                  Understand the complete process – Innovate, Build, Sell.
                </li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>
                  Utilize their skills to innovate and design a solution to
                  solve the real world problem.
                </li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>
                  Improve ability to identify critical needs/requirements,
                  develop and evaluate conceptual designs.
                </li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>
                  Improve ability for oral presentations and showcasing skills
                  to others.
                </li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>
                  Effective interpersonal skills are critical to proper team
                  formation and success.
                </li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>
                  Listening to team members share ideas increases innovation;
                  avoid one person dominating.
                </li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>
                  Presentation skills – effectively describe their solution in a
                  succinct presentation.
                </li>
              </FadeUp>

              <FadeUp variants={staggerItem}>
                <li>Chances to win many other awards.</li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>
                  Winners may join the 10-week Techno Pre-Incubation Program.
                </li>
              </FadeUp>
            </StaggerSection>
          </div>

          {/* Right Side - Image */}
          <FadeUp
            variants={staggerItem}
            className="flex "
          >
           <div className="relative h-full w-full">
             <Image
              src="/images/IMG_2248.JPG"
              className="w-full rounded-md shadow-lg object-cover"
              alt="TICC Event"
              width={800}
              height={800}
            />
           </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
