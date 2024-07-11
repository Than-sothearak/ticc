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

      <div className="flex justify-center items-center my-10">
        <div className="container text-start">
          <h3 className="font-bold">
            Lecturers, Technical Experts, Researcher, STEM-major Alumni - Please
            send an email to seakleng.itc@gmail.com and let us know that you are
            interested in participating, sponsoring, or providing us with a Need
            statement. We will contact you and get you involved.
          </h3>
          <br></br>
          <p>
            We are now recruiting both technical voluntary mentors and business
            mentors. If you are interested, please get in touch with Coordinator
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center bg-blue-100">
        <div className="container text-start my-16">
          <h1 className="font-bold text-[2.986rem] leading-tight">
            Eligibility for being mentors{" "}
          </h1>
          <br></br>
          <ul className="ml-5">
            <li className="list-decimal">
              Everyone can be a mentor (Lecturers, technical experts,
              researchers, businessmen, Senior students, teachers, parents,
              community leaders, or professionals.)
            </li>
            <li className="list-decimal">
              Willingness to give feedback in person and/or be a virtual mentor
              to the teams.{" "}
            </li>
            <li className="list-decimal">
              Time is flexible. They should be have some time during May to
              June.{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="container text-start my-16">
          <h1 className="font-bold text-[2.986rem] leading-tight">
            What you will do
          </h1>
          <br></br>
          <ul className="ml-5">
            <li className="list-disc">
              Share experiences, ideas, knowledge based on your skills and
              experiences.
            </li>
            <li className="list-disc">Comment and Feedback.</li>
            <li className="list-disc">
              Recommend GO or NOT GO, how to GO better, and where to seek for
              other resources.
            </li>

            <li className="list-disc">
              Provide advices, but NOT decide for the team.{" "}
            </li>
            <li className="list-disc">
              Encourage team to complete within the time frame.{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center bg-blue-100">
        <div className="container text-start my-16">
          <h1 className="font-bold text-[2.986rem] leading-tight">
            Benefits for being a voluntary mentor
          </h1>
          <br></br>
          <ul className="ml-5">
            <li className="list-disc">
              Share experiences, ideas, knowledge based on your skills and
              experiences.
            </li>
            <li className="list-disc">Comment and Feedback.</li>
            <li className="list-disc">
              Recommend GO or NOT GO, how to GO better, and where to seek for
              other resources.
            </li>

            <li className="list-disc">
              Provide advices, but NOT decide for the team.{" "}
            </li>
            <li className="list-disc">
              Encourage team to complete within the time frame.{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="container text-start my-16">
          <h1 className="font-bold text-[2.986rem] leading-tight">
            Our mentor
          </h1>
          <br></br>


          <Accordion type="signle" collapsible defaultValue={1}>
            {mentorData.map((seasonData, index) => (
              <AccordionItem value={index+1} key={index}>
                <AccordionTrigger>
                  <h2 className="font-bold text-2xl">{seasonData.season}</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {seasonData.imgUrl.map((i) => (
                      <div
                        key={i.image}
                        className="md:min-w-[400px] max-w-full h-full"
                      >
                        <Image
                          width={0}
                          height={0}
                          alt={i.image}
                          src={i.image}
                          sizes="100vw"
                          style={{ width: '100%', height: 'auto' }} // optional
                        />
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default page;
