"use client";

import React from "react";
import FadeUp from "./motion/FadeUp";
import StaggerSection from "./motion/StaggerSection";
import { staggerItem } from "@/lib/motion";

const BackgroundSection = () => {
  return (
    <div className="flex flex-col w-full">

      {/* ===== Background / Intro Section ===== */}
      <div className="flex justify-center w-full pt-16">
        <div className="container grid grid-cols-1 xl:grid-cols-2 gap-10">

          {/* Left Side - Text */}
          <div className="container lg:p-10 p-0 flex flex-col gap-6 mb-16">
            <FadeUp variants={staggerItem}>
              <h1 className="font-bold text-[2.986rem] leading-tight">Background</h1>
            </FadeUp>

            <FadeUp variants={staggerItem}>
              <p>
                Institute of Technology of Cambodia (ITC) is a public engineering
                school in Cambodia with a well-known and recognized achievement in
                Cambodia’s higher education industry. ITC has a clear long objective
                and mission. The fourth objective of ITC is to train engineers to
                innovate and practice entrepreneurship, creating high-skilled jobs
                and solutions to future challenges.
              </p>
            </FadeUp>

            <FadeUp variants={staggerItem}>
              <p>
                In 2017, ITC was selected as the only pilot institution for the
                MS2W Institutional Innovation Challenge, called “Techno Innovation
                Challenge Cambodia,” organized in November–December 2017 at ITC,
                Phnom Penh. The program is based on Texas A&M University (TAMU)’s
                Innovation Challenge, <a href="https://engineering.tamu.edu/student-life/aggies-invent/index.html" className="text-blue-700 underline">Aggies Invent</a>.
              </p>
            </FadeUp>
          </div>

          {/* Right Side - Images */}
          <div className="flex flex-col gap-6 justify-center items-center mt-10 lg:mt-0">
            <FadeUp variants={staggerItem}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKFHgAvqJFkyraBofQTNx-A1oi5WL5LcJDA&s"
                className="w-96 rounded-md"
                alt="ITC Campus"
              />
            </FadeUp>

            <FadeUp variants={staggerItem}>
              <img
                src="https://marvel-b1-cdn.bc0a.com/f00000000294758/www.midland.edu/academics/images/university-partnerships/tamu-academy/tamu-engineering-logo.png"
                className="w-96 rounded-md "
                alt="TAMU Logo"
              />
            </FadeUp>
          </div>
        </div>
      </div>

      {/* ===== Benefits Section (Section5) ===== */}
      <div className="flex justify-center w-full py-16 bg-gray-100">
        <div className="container grid grid-cols-1 xl:grid-cols-2 gap-10">

          {/* Left Side - Text */}
          <div className="container lg:p-10 p-0 flex flex-col gap-6">
            <FadeUp variants={staggerItem}>
              <h1 className="font-bold text-[2.986rem] leading-tight">Benefits</h1>
            </FadeUp>

            <FadeUp variants={staggerItem}>
              <p>Contestants can benefit from the program:</p>
            </FadeUp>

            {/* Staggered list items */}
            <StaggerSection className="flex flex-col gap-2 ml-4 list-disc">
              <FadeUp variants={staggerItem}>
                <li>
                  Experience international competition program and process, the only
                  one competition in Cambodia, which is based on and supported by
                  TEXAS A&M University College of Engineering.
                </li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>Understand the complete process – Innovate, Build, Sell.</li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>Utilize their skills to innovate and design a solution to solve the real world problem.</li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>Improve ability to identify critical needs/requirements, develop and evaluate conceptual designs.</li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>Improve ability for oral presentations and showcasing skills to others.</li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>Effective interpersonal skills are critical to proper team formation and success.</li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>Listening to team members share ideas increases innovation; avoid one person dominating.</li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>Presentation skills – effectively describe their solution in a succinct presentation.</li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>Financial support from AUF to advance startup progress.</li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>Chances to win many other awards.</li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li>Winners may join the 10-week Techno Pre-Incubation Program.</li>
              </FadeUp>
            </StaggerSection>
          </div>

          {/* Right Side - Image */}
          <FadeUp variants={staggerItem} className="flex justify-center items-center p-4">
            <img
              src="/images/IMG_2248.JPG"
              className="w-full rounded-md shadow-lg"
              alt="TICC Event"
            />
          </FadeUp>

        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
