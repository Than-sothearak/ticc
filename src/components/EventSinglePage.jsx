"use client";
import React from "react";
import Image from "next/image";
import { EventGallery } from "./EventGallery";
import { Calendar } from "lucide-react";
import StaggerSection from "./motion/StaggerSection";
import FadeUp from "./motion/FadeUp";

export const EventSinglePage = ({ event }) => {
  return (
    <div className="container mx-auto max-w-5xl py-6 px-4">
      {/* Title Section */}
      <StaggerSection>
        <div className="my-10">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {event?.title}
            </h1>
          </FadeUp>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
            <FadeUp>
              <span className="flex items-center gap-1">
                <Calendar size={18} />
                {event?.year}
              </span>
            </FadeUp>
            <FadeUp>
              {event?.season && <span>{event.season}</span>}
              {event?.postby && <span>✍️ {event.postby}</span>}
            </FadeUp>
          </div>
        </div>
      </StaggerSection>
      {/* Hero Image */}
      {event?.images && (
      <FadeUp loop={true}>
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src={event.images[0]}
            alt={event.title}
            width={1600}
            height={1200}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </FadeUp>
      )}

      {/* Description */}
      <article
        className="
        my-10
prose 

  max-w-none 
 p-3 focus:outline-none prose &_h1]:text-3xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:text-xl [&_h3]:font-semibold [&_ul]:pl-6ç≈
[&_ul]:list-disc [&_ul]:pl-6
 "
      >
        <StaggerSection>
          <FadeUp>
            <div dangerouslySetInnerHTML={{ __html: event?.description }} />
          </FadeUp>
        </StaggerSection>
      </article>

      {/* Gallery (Optional) */}
      {event?.images?.length > 0 && <EventGallery images={event.images} />}
    </div>
  );
};
