"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, LocateIcon, MapPin } from "lucide-react";
import Image from "next/image";
import StaggerSection from "./motion/StaggerSection";
import FadeUp from "./motion/FadeUp";
import Link from "next/link";

const pastEvents = [
  {
    id: 1,
    title: "Techno Innpvation Challenge Cambodia 2024",
    year: 2024,
    season: "Season 8",
    images: ["/images/IMG_8244.JPG", "/images/event2.jpg", "/images/event3.jpg"],
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

export const EventsComponent = ({events}) => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="max-w-full h-[428px] flex justify-center relative">
           <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-black/50 via-black/50 to-transparent"></div>
      </div>
        <div className="w-full text-white h-full bg-cover bg-center bg-no-repeat bg-[url('/images/IMG_8244.JPG')]">
          <div className="container mx-auto absolute bottom-20 left-0 right-0 ">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-bold md:text-[4rem] text-3xl uppercase drop-shadow-lg"
            >
              Past Events
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="container mx-auto py-16">
        <h2 className="font-bold text-4xl mb-10">Past event</h2>

  
         <StaggerSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {events.map((event) => (
           <FadeUp  key={event.id}>
            <Link 
            href={`/past-event/${event._id}`}
           >
             <motion.div
           
              whileHover={{ y: -10 }}
              className="bg-white rounded-md shadow-lg overflow-hidden border h-72 w-full relative"
            >
              {/* Image */}
              <Image
                src={event.images[0]}
                alt={event.title}
                className="object-cover"
                fill
              />

          
            </motion.div>
                {/* Content */}
              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-1"><MapPin size={18}/> <p>Phnom penh</p></div>
                <h3 className="font-bold text-xl">{event.title}</h3>
               <div className="flex items-center gap-1">
                <Calendar size={18}/>
                 <p className="text-gray-500 text-sm">
                  {event.year} {event.season}
                </p>
               </div>

         
              </div>
           </Link>
           </FadeUp>
          ))}
         </StaggerSection>
      
      </div>

    </div>
  );
};


