"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";
import { mentorData } from "@/lib/mentorData";
import Image from "next/image";
import StaggerSection from "@/components/motion/StaggerSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerItem } from "@/lib/motion";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

export const MentorComponent = ({ data }) => {
  return (
    <div className="w-full">
      <StaggerSection>
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

        <div className="flex justify-center items-center my-10">
          <div className="container text-start">
            <FadeUp variants={staggerItem}>
              <h3 className="font-bold">
                Lecturers, Technical Experts, Researcher, STEM-major Alumni -
                Please send an email to seakleng.itc@gmail.com and let us know
                that you are interested in participating, sponsoring, or
                providing us with a Need statement. We will contact you and get
                you involved.
              </h3>
            </FadeUp>
            <br></br>
            <FadeUp variants={staggerItem}>
              <p>
                We are now recruiting both technical voluntary mentors and
                business mentors. If you are interested, please get in touch
                with Coordinator
              </p>
            </FadeUp>
          </div>
        </div>

        <div className="flex justify-center items-center bg-gray-100">
          <div className="container text-start my-16">
            <FadeUp variants={staggerItem}>
              <h1 className="font-bold text-[2.986rem] leading-tight">
                Eligibility for being mentors{" "}
              </h1>
            </FadeUp>
            <br></br>
            <ul className="ml-5">
              <FadeUp variants={staggerItem}>
                <li className="list-decimal">
                  Everyone can be a mentor (Lecturers, technical experts,
                  researchers, businessmen, Senior students, teachers, parents,
                  community leaders, or professionals.)
                </li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li className="list-decimal">
                  Willingness to give feedback in person and/or be a virtual
                  mentor to the teams.{" "}
                </li>
              </FadeUp>
              <FadeUp variants={staggerItem}>
                <li className="list-decimal">
                  Time is flexible. They should be have some time during May to
                  June.{" "}
                </li>
              </FadeUp>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="container text-start my-16">
            <FadeUp>
              <h1 className="font-bold text-[2.986rem] leading-tight">
                What you will do
              </h1>
            </FadeUp>
            <br></br>
            <ul className="ml-5">
              <FadeUp>
                <li className="list-disc">
                  Share experiences, ideas, knowledge based on your skills and
                  experiences.
                </li>
              </FadeUp>
              <FadeUp>
                <li className="list-disc">Comment and Feedback.</li>
              </FadeUp>
              <FadeUp>
                <li className="list-disc">
                  Recommend GO or NOT GO, how to GO better, and where to seek
                  for other resources.
                </li>
              </FadeUp>

              <FadeUp>
                <li className="list-disc">
                  Provide advices, but NOT decide for the team.{" "}
                </li>
              </FadeUp>
              <FadeUp>
                <li className="list-disc">
                  Encourage team to complete within the time frame.{" "}
                </li>
              </FadeUp>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center bg-gray-100">
          <div className="container text-start my-16">
            <FadeUp>
              <h1 className="font-bold text-[2.986rem] leading-tight">
                Benefits for being a voluntary mentor
              </h1>
            </FadeUp>
            <br></br>
            <ul className="ml-5">
              <FadeUp>
                <li className="list-disc">
                  Share experiences, ideas, knowledge based on your skills and
                  experiences.
                </li>
              </FadeUp>
              <FadeUp>
                <li className="list-disc">Comment and Feedback.</li>
              </FadeUp>
              <FadeUp>
                <li className="list-disc">
                  Recommend GO or NOT GO, how to GO better, and where to seek
                  for other resources.
                </li>
              </FadeUp>

              <FadeUp>
                <li className="list-disc">
                  Provide advices, but NOT decide for the team.{" "}
                </li>
              </FadeUp>
              <FadeUp>
                <li className="list-disc">
                  Encourage team to complete within the time frame.{" "}
                </li>
              </FadeUp>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="container text-start my-16">
            <FadeUp>
              <h1 className="font-bold text-[2.986rem] leading-tight">
                Our mentor
              </h1>
            </FadeUp>
            <br></br>

            <Accordion type="signle" collapsible defaultValue={1}>
              {data.map((item, index) => (
                <AccordionItem value={index + 1} key={index}>
                  <AccordionTrigger>
                    <h2 className="font-bold text-2xl">{item._id}</h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <StaggerSection>
                      <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {item.mentors.map((i) => (
                          <div key={i._id}>
                            <FadeUp loop={true}>
                              <Card className="h-full flex flex-col rounded-xl shadow-lg overflow-hidden bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 text-white">
                                {/* Event Name Banner */}
                                <div className="bg-gray-50 p-3 text-center">
                                  <h2 className="text-lg font-extrabold uppercase text-primary text-start">
                                    Techno <br />Innovation Challenge <br />Cambodia {item._id}
                                  </h2>
                                  <p className="mt-1 text-sm font-semibold text-white/90">
                                    {i.year}
                                  </p>
                                </div>

                                {/* Mentor Image */}
                                <div className="relative h-96 w-full">
                                  <Image
                                    src={i.image}
                                    alt={i.name}
                                    fill
                                    className="object-cover object-top"
                                  />
                                  <div className="absolute inset-0 bg-black/0" />{" "}
                                  {/* overlay for readability */}
                                </div>

                                {/* Mentor Info */}
                                <CardContent className="flex-1 flex flex-col justify-end p-4 bg-primary">
                                  <h3 className="font-bold text-white">
                                    {i.name}
                                  </h3>
                                  <p className="mt-1 text-sm text-gray-200 line-clamp-2">
                                    {i.title}
                                  </p>
                                </CardContent>
                              </Card>
                            </FadeUp>
                          </div>
                        ))}
                      </div>
                    </StaggerSection>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </StaggerSection>
    </div>
  );
};
