"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "../motion/FadeUp";

export const RelatedEvents = ({ events, currentEventId }) => {
  // Remove the current event from the list
  const relatedEvents = events.filter((event) => event._id !== currentEventId);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 lg:my-16">
      <h2 className="font-bold text-3xl mb-6">Latest Events</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedEvents.map((event) => (
          <FadeUp key={event._id}>
            <Link
              href={`/past-event/${event._id}`}
              className="flex flex-col h-full bg-white rounded-md shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full h-48 md:h-56 lg:h-48">
                <Image
                  src={event.images[0]}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-bold text-lg line-clamp-2">{event.title}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <MapPin size={16} /> {event.location || "Phnom Penh"}
                  </p>
                </div>
                <p className="text-gray-400 text-sm mt-2 flex items-center gap-1">
                  <Calendar size={16} /> {event.year} {event.season}
                </p>
              </div>
            </Link>
          </FadeUp>
        ))}

           <div className="w-full h-full p-4 flex justify-center items-center bg-gray-100 hover:bg-gray-200 hover:underline rounded-lg">
        <Link href={'/past-event'}>View all</Link>
      </div>
      </div>
   
    </div>
  );
};
