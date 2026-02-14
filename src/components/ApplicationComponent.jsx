"use client";
import React from "react";
import FadeUp from "./motion/FadeUp";
import { motion } from "framer-motion";
import { ApplyButton } from "./ApplyButton";
import { formatDate } from "@/app/dashboard/(components)/DatePicker";
import { CircleAlert } from "lucide-react";
import StaggerSection from "./motion/StaggerSection";

export const ApplicationComponent = ({ applyLink }) => {
  return (
    <div>
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
                Application
              </motion.span>{" "}
            </motion.div>
          </div>
        </div>
      </div>
      <div>
        <section className="flex flex-col items-start gap-6 space-y-16 w-full bg-gray-100 ">
          <div className=" container text-start my-16 lg:px-14">
            <StaggerSection>
              <FadeUp>
              <h2 className="font-bold text-[2.986rem] leading-tight mb-4">
                {applyLink.title}
              </h2>
            </FadeUp>
            <FadeUp>
              <div className="space-y-6">
               <FadeUp>
                 <p>
                  Apply to be part of Techno Innovation Challengers! Students
                  will be selected to participate from those who apply. You will
                  be notified if you are selected for that event.
                </p>
               </FadeUp>
            <FadeUp>
                  <p>
                  You will be competed as a team. We encourage individuals to
                  apply and form a new team with new people from cross
                  background and skills but same passions.
                </p>
            </FadeUp>
               <FadeUp>
                 <p>
                  If you already have a team, please ask each member to apply.
                  We encourage that each team members are qualified and make
                  contributions to help make the team strong and complete the
                  challenge within the given time.{" "}
                </p>
               </FadeUp>
             <FadeUp>
                 {applyLink.enabled ? (
                  <ApplyButton link={applyLink.src} />
                ) : (
                  <div className="flex gap-1 items-center text-red-500">
                    <CircleAlert />
                    The application is not available
                  </div>
                )}
             </FadeUp>
              </div>
            </FadeUp>
            </StaggerSection>
          </div>
        </section>

        <section className="flex flex-col items-start gap-6 space-y-16 w-full bg-primary text-white">
          <div className="container space-y-4 text-start my-16 lg:px-14">
            <FadeUp>
              <h2 className="font-bold text-[2.986rem] leading-tight mb-4">
                Application Form
              </h2>
            </FadeUp>
          </div>
        </section>

        <section className="flex flex-col items-start gap-6 w-full bg-white">
          <div className=" container text-start my-16 lg:px-14">
            <div className="space-y-6">
              <FadeUp>
                <div className="space-y-4">
                  <p>
              {"ITC's Techno Innovation Challenge is open to all students enrolled at an accredited institution of higher education in Cambodia. The challenge is to competed as a team. To apply to join in the Techno Innovation Challenge, you can apply as a team or as an individual. Only selected teams or candidates can advance to the competition."}
                  </p>
                  <h3 className="font-bold text-[1.986rem] leading-tight mb-4">
                    Eligibility:
                  </h3>
                </div>
              </FadeUp>
              <StaggerSection>
                <div className="space-y-2">
                  <FadeUp>
                    <p>
                      Undergraduate Students, Master degree, Fresh Graduate
                      students
                    </p>
                  </FadeUp>
                  <FadeUp>
                    <p>Background on or related to:</p>
                  </FadeUp>
                  <ul className="list-disc ml-5">
                    <FadeUp>
                      <li className="">Engineering or STEM-related major</li>
                    </FadeUp>
                    <FadeUp>
                      <li>Business major</li>
                    </FadeUp>
                    <FadeUp>
                      <li>Agriculture and Food Transformation </li>
                    </FadeUp>
                      <FadeUp>
                      <li>Mechatronic and Robotic</li>
                    </FadeUp>
                     <FadeUp>
                      <li>Information and Communication Technology (ICT)</li>
                    </FadeUp>
                  </ul>
                </div>
              </StaggerSection>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-start gap-6 space-y-16 w-full bg-gray-100">
          <div className="container space-y-4 text-start my-16 lg:px-14">
            <FadeUp>
              <h3 className="font-bold text-[1.986rem] leading-tight mb-4">
                How to Apply:
              </h3>
            </FadeUp>
            <StaggerSection className="space-y-6">
              <div className="space-y-2">
                <FadeUp>
                  <h3 className="font-semibold text-lg mb-2">Individual</h3>
                </FadeUp>
                <ul className="list-disc ml-5 space-y-2 marker:text-lg">
                  <FadeUp >
                   <li> Complete the online application form individually.</li>
                  </FadeUp>
                  <FadeUp >
                   <li> No team members required to apply.</li>
                  </FadeUp>
                  <FadeUp >
                   <li> Recommended to apply and form a new team during the event.</li>
                  </FadeUp>
                </ul>

               <FadeUp>
                 <h3 className="font-semibold text-lg mb-2">Team</h3>
               </FadeUp>

                <ul className="list-disc pl-6 space-y-2 marker:text-lg">
                  <FadeUp delay={0.1}>
                  <li> <strong>Only one representative (team leader) submits the application form.</strong>                  

                     </li>
</FadeUp>

 

                  <FadeUp delay={0.3}>
                  <li>  The team leader must list all team members’ names in the application.</li>
                  </FadeUp>

                  <FadeUp delay={0.4}>
                  <li>  The entire team will be evaluated together.</li>
                  </FadeUp>

                   <FadeUp delay={0.4}>
                  <li>  You can  changes and have new member during team-up session on the first day.</li>
                  </FadeUp>
                </ul>
              </div>
            <FadeUp>
                {applyLink.enabled ? (
                <ApplyButton link={applyLink.src} />
              ) : (
                <div className="flex gap-1 items-center text-red-500">
                  <CircleAlert />
                  The application is not available
                </div>
              )}
            </FadeUp>
            </StaggerSection>
          </div>
        </section>

        <section className="flex flex-col items-start gap-6 space-y-16 w-full bg-red-100">
          <div className=" container text-start my-16 lg:px-14">
            <FadeUp>
              {applyLink.enabled ? (
                <h3 className="font-bold text-[1.986rem] leading-tight mb-4">
                  Deadline for applying: {formatDate(applyLink.deadline)}
                </h3>
              ) : (
                <div className="flex gap-1 items-center text-red-500">
                  <CircleAlert />
                  The application is not available
                </div>
              )}
            </FadeUp>
            <FadeUp>
              <div className="space-y-6">
                <p></p>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="flex flex-col items-start gap-6 w-full bg-white">
          <div className=" container text-start my-16 lg:px-14">
            <FadeUp>
              <div className="space-y-6">
                <FadeUp>
                  <div className="space-y-4">
                    <h3 className="font-bold text-[1.986rem] leading-tight mb-4">
                      Selection Criteria to Join in the Competition
                    </h3>
                  </div>
                </FadeUp>
               <StaggerSection>
           <FadeUp>
                  <h3 className="font-semibold text-lg mb-2">
                  Only selected teams or candidates can advance to the
                  competition. Students are chosen to participate based on the
                  answers provided in the application. We are looking for
                  motivated students with a variety of skills at multiple levels
                  (freshman through Ph.D. candidates) who are good at solving
                  problems and want to take those solutions to market.
                </h3>
           </FadeUp>
                <ul className="list-disc pl-6 space-y-2 y marker:text-lg ml-5">
               <FadeUp>
                   <li className="list-disc">
                    Complete the submission form by deadline.
                  </li>
               </FadeUp>
                <FadeUp>
                    <li>Variety of skills.</li>
                </FadeUp>
               <FadeUp>
                   <li>
                    Innovative business or social venture ideas which be solving
                    the real-world problems for Sustainable Development Goals
                    are highly recommended.{" "}
                  </li>
               </FadeUp>
        <FadeUp>
                    <li>Passion to take the solutions to market.</li>
        </FadeUp>
                </ul>
               </StaggerSection>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="flex flex-col items-start gap-6 space-y-16 w-full bg-gray-100">
          <div className=" container text-start my-16 lg:px-14">
            <FadeUp>
              <div className="space-y-6">
                <h3 className=" text-lg mb-2">
                  During the <strong>competition</strong>, you wills have access
                  to <strong>tools</strong>,<strong> materials, labs </strong>,
                  and some <strong>supports</strong> if needed to develop your
                  <strong> prototypes</strong>, and the{" "}
                  <strong>training</strong> and <strong>mentoring</strong>.
                </h3>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </div>
  );
};
