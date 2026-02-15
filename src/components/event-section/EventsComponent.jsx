"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, LocateIcon, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StaggerSection from "../motion/StaggerSection";
import FadeUp from "../motion/FadeUp";

const pastEvents = [
  {
    id: 1,
    title: "Techno Innpvation Challenge Cambodia 2024",
    year: 2024,
    season: "Season 8",
    images: [
      "/images/IMG_8244.JPG",
      "/images/event2.jpg",
      "/images/event3.jpg",
    ],
  },
  {
    id: 2,
    title: "Startup Bootcamp",
    year: 2023,
    season: "Season 2",
    images: ["/images/IMG_2248.JPG", "/images/event5.jpg"],
  },
  {
    id: 3,
    title: "Startup Bootcamp",
    year: 2023,
    season: "Season 2",
    images: ["/images/IMG_2743.JPG", "/images/event5.jpg"],
  },
  {
    id: 4,
    title: "Startup Bootcamp",
    year: 2023,
    season: "Season 2",
    images: ["/images/IMG_2800.JPG", "/images/event5.jpg"],
  },
];

export const EventsComponent = ({ events }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="max-w-full h-[428px] flex justify-center relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-black/50"></div>
        </div>
        <div className="w-full text-white h-full bg-cover bg-center bg-no-repeat bg-[url('/images/IMG_8244.JPG')]">
          <div className="container leading-[3.5rem] mx-auto absolute bottom-20 left-0 right-0 ">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-bold md:text-[3.986rem] uppercase leading-tight top-10 text-3xl"
            >
              Past Events
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="container mx-auto max-w-5xl py-6 px-4">
        <h2 className="font-bold text-4xl mb-10">Past event</h2>

        <StaggerSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const year = event.title.match(/\b\d{4}\b/)?.[0];

            // remove year from title
            const titleText = event.title.replace(/\b\d{4}\b/, "").trim();

            // split title into lines
            const titleLines = titleText.split(" ");
            return (
              <FadeUp key={event.id}>
                <Link href={`/past-event/${event._id}`} className="h-full justify-between flex flex-col">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-md shadow-lg overflow-hidden  border w-full relative"
                  >
                    {/* Image */}
                    <div className="w-full h-full relative">
                      <Image
                        src={event.images[0]}
                        alt={event.title}
                        width={1600}
            height={1200}// original image height
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* <div className="bg-gradient-to-b from-gray-200 from-15% to-transparent to-60%  absolute z-10 w-full h-full"></div>
                    <div className="z-20 font-bold absolute px-16 py-5 text-[#007b4a] leading-tight flex justify-between w-full items-end uppercase">
                      <p>
                        {titleLines.map((word, index) => (
                          <span key={index}>
                            {word}
                            <br />
                          </span>
                        ))}
                      </p>

                      <h1 className="text-5xl">{year}</h1>
                    </div> */}
                  </motion.div>
                  {/* Content */}
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center gap-1">
                      <MapPin size={18} /> <p>Phnom penh</p>
                    </div>
                    <h3 className="font-bold text-xl">{event.title}</h3>
                    <div className="flex items-center gap-1">
                      <Calendar size={18} />
                      <p className="text-gray-500 text-sm">
                        {event.year} {event.season}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </StaggerSection>
      </div>
    </div>
  );
};
