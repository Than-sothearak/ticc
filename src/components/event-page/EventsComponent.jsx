"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, LocateIcon, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StaggerSection from "../motion/StaggerSection";
import FadeUp from "../motion/FadeUp";
import { HeaderSectionComponent } from "../HeaderSectionComponent";

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
      <HeaderSectionComponent
        title={"Past Events"}
        image="/images/IMG_7740.JPG"
        position="center"
      />

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
              <FadeUp key={event._id}>
                <Link
                  href={`/past-event/${event._id}`}
                  className="h-full justify-between flex flex-col"
                >
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
                        height={1200} // original image height
                        className="object-cover w-full h-full"
                      />
                    </div>
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
