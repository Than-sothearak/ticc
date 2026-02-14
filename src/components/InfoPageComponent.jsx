"use client";
import React from "react";
import Image from "next/image";
import ProcessDiagram from "./ProcessDiagramComponent";
import FadeUp from "./motion/FadeUp";
import { staggerItem } from "@/lib/motion";
import StaggerSection from "./motion/StaggerSection";
import { motion } from "framer-motion";
import { ApplyButton } from "./ApplyButton";

export const InfoPageComponent = ({ information, applyLink }) => {
  function formatDate(date) {
    if (!date) return "";

    // Ensure date is a Date object
    const d = date instanceof Date ? date : new Date(date);
    if (isNaN(d.getTime())) return ""; // invalid date check

    return d.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }
  return (
    <div className="mx-auto space-y-16 w-full">
      <div className="max-w-full h-[428px] flex justify-center relative">
        <div className="w-full text-white h-full m-auto grid bg-cover bg-no-repeat bg-[url('/images/IMG_2718.JPG')]">
          <div className="container backdrop-blur-sm mx-auto absolute z-1 bottom-20 left-0 right-0 lg:px-14">
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
      <FadeUp loop={true}>
        <div className="px-2 flex flex-col gap-4 justify-center lg:px-14">
          {information.poster &&
            information.poster.map((item) => (
              <div
                key={item}
                className="container bg-black w-full relative "
                style={{ aspectRatio: "16/9" }}
              >
                {item.poster}
                <Image
                  src={item}
                  alt="Competition Process Image"
                  fill // use actual image height
                  className="object-cover"
                />
              </div>
            ))}
        </div>
      </FadeUp>

      {/* Schedule */}
      <div className="w-full bg-gray-100 py-16">
        <FadeUp variants={staggerItem}>
          <section className="space-y-4  container text-start my-16 lg:px-14">
            <h2 className="font-bold text-[2.986rem] leading-tight mb-4">
              4-Week Program & Schedule
            </h2>
            {information.enabled ? (
              <StaggerSection>
                <ul className="list-disc list-inside space-y-2">
                  {Object.entries(information.weeks).map(
                    ([week, date], index) => (
                      <FadeUp variants={staggerItem} key={week}>
                        <li className="text-lg">
                          <strong>Weekend {index + 1}:</strong>{" "}
                          {formatDate(date)}
                        </li>
                      </FadeUp>
                    ),
                  )}
                </ul>
              </StaggerSection>
            ) : (
              <FadeUp>
                <h1>No Schedule available</h1>
              </FadeUp>
            )}
          </section>
        </FadeUp>
        <div className="container m-auto flex justify-start lg:px-14">
          {applyLink?.enabled && <ApplyButton link={applyLink?.src} />}
        </div>
      </div>
      {/* Competition Process */}
      <FadeUp className="bg-b">
        <p className="container lg:px-14">
          Techno Innovation Challenge will challenge you to put your theory into
          practice solving real world problems and apply your skills and
          knowledge to build something amazing. During the competition, you will
          have access to tools, materials, labs and some supports if needed to
          develop your prototypes, and the training and mentoring.{" "}
        </p>
      </FadeUp>
      <section className="flex flex-col items-start gap-6 mt-16 w-full bg-gray-100">
        <div className=" container text-start my-16 lg:px-14">
          <FadeUp variants={staggerItem}>
            <h2 className="font-bold text-[2.986rem] leading-tight mb-4">
              Competition Process
            </h2>
          </FadeUp>
          <FadeUp variants={staggerItem}>
            <p>
              The competition runs for 4 weekends, where participants will
              learn, develop prototypes, and showcase their solutions.
            </p>
          </FadeUp>
        </div>
      </section>
      <div className="container flex max-lg:flex-wrap gap-6 lg:px-14">
        <FadeUp variants={staggerItem} className="w-full">
          <div className="relative h-full w-full">
            <Image
              src="/images/IMG_2639.JPG"
              alt="Competition Process Image"
              width={1200} // image original width
              height={800} // image original height
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
        </FadeUp>
        <FadeUp className="w-full ">
          <ProcessDiagram />
        </FadeUp>
      </div>
    </div>
  );
};
