"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div className="w-full">
      <div className="max-w-full h-[428px] flex justify-center relative">
        <div className="w-full text-white h-full m-auto grid bg-cover bg-no-repeat bg-[url('/images/IMG_2743.JPG')]">
          <div className="container mx-auto backdrop-blur-sm absolute z-1 bottom-20 left-0 right-0">
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
                Frequently Asked Questions
              </motion.span>{" "}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-10">
        <div className="container text-start">
          <h1 className="font-bold text-[2.986rem] leading-tight">FQA</h1>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I get involved?</AccordionTrigger>
              <AccordionContent>
                Students – click on the registration link for the Techno
                Innovation Challenge you are interested in and register. You
                will be notified if you are selected for that event.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How are students chosen?</AccordionTrigger>
              <AccordionContent>
                Students are chosen to participate based on the answers provided
                in the application. We are looking for motivated students with a
                variety of skills at multiple levels (freshman through Ph.D.
                candidates) who are good at solving problems and want to take
                those solutions to market. We will notify you about one week in
                advance of Innovation Challenge and get you more information
                about that specific event.{" "}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Does it for only ITC students?
              </AccordionTrigger>
              <AccordionContent>
                No. It is for students from all universities and institutes.
                Undergraduate or graduat, Business and Agriculture students are
                welcomed to apply.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Is Techno Innovation Challenge open to graduate students?
              </AccordionTrigger>
              <AccordionContent>
                Yes. We encourage both undergraduate and graduate students to
                apply. Graduate students have the opportunity to be participants
                or mentors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Do I have to be an engineering or STEM student?
              </AccordionTrigger>
              <AccordionContent>
                No! We want students from multiple colleges to apply because
                great solutions require different perspectives and skills.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Sounds interesting, but kind of sounds challenging. Is it?
              </AccordionTrigger>
              <AccordionContent>
                No. We want to challenge all levels of students to explore
                innovation, creativity, and teamwork. This is a very supportive
                and safe environment to challenge yourself to push boundaries.
                We encourage risk, expect failures, and cheer with you for your
                successes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>What is a Need Statement?</AccordionTrigger>
              <AccordionContent>
                A Need Statement is a problem that has been identified by an
                industry or agency partner that they want to be solved. These
                are open ended real world problems that you will be challenged
                to solve. Need Statements come to us without Intellectual
                Property restrictions – so the solution is yours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>How are teams formed?</AccordionTrigger>
              <AccordionContent>
                On first session of the first weekend, we will gather, have an
                introduction, and then form teams around the Need Statement. You
                will select your own team with a small bit of guidance. For
                instance, no teams larger than 6 and we want a mix of
                disciplines and levels. We call this “The Dance”.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Will there be food?</AccordionTrigger>
              <AccordionContent>Lunch will be provided.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>What does it cost?</AccordionTrigger>
              <AccordionContent>
                For students, there is no charge. Just bring your ideas, time,
                skills, and enthusiasm.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger>Do teams compete for awards?</AccordionTrigger>
              <AccordionContent>
                Yes. During the final presentation, Techno Innovation Challenge
                teams will be judged by a panel of expert judges based on their
                solution to their need statement, presentation, and market
                appeal. The top 8 teams will be awarded 500USD for each.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger>
                Do I need to already have a team to apply ?
              </AccordionTrigger>
              <AccordionContent>
                No. You can apply individually. Students don’t start with
                pre-formed teams, they are formed at the event around common
                interests in solving a problem.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
              <AccordionTrigger>
                What is Intensive Design Experience?
              </AccordionTrigger>
              <AccordionContent>
                Techno Innovation Challenge applies an Intensive Design
                Experience (IDE), supported by Texas A&M College of Engineering.
                An IDE is not just another Hackathon because students don’t
                necessarily start with pre-formed teams, they are formed at the
                event around common interests in solving a problem. They are led
                through a structured design process that emulates participating
                in a high performance team when they take their first job and
                results in both hardware and software solutions - a complete
                product. Teams are required to pitch their solutions to a panel
                of judges. An IDE promotes the creativity, innovation,
                entrepreneurial mindset, and great presentation skills that are
                valuable skills desired by industry. The trick is to get
                students to practice these skills in a way that they find to be
                fun, challenging, and will instill these skills.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14">
              <AccordionTrigger>
                What can I do within 4 weekends?
              </AccordionTrigger>
              <AccordionContent>
                Techno Innovation Challenge will challenge you to put your
                theory into practice solving real world problems with a team.
                You will need to manage time and divide up tasks. In addition to
                the weekends, you can work with your team between the weeks
                during the week days at any places. It is the time to apply your
                skills and what you have learnt into practice. You are required
                to build a prototype, not a real final problem. Challenge
                yourself to push boundaries. Bring your ideas, time, skills,
                commitment and enthusiasm. Last year, teams from the first
                Techno Innovation Challenge 2017 could do a very impressive job
                and build something very amazing! So you will also be alright!
                See 2017 past event!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default page;
