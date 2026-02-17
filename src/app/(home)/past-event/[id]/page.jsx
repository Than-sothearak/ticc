import { EventSinglePage } from "@/components/event-section/EventSinglePage";
import { RelatedEvents } from "@/components/event-section/RelatedEvent";
import { connectDb } from "@/lib/connectDb";
import { Event } from "@/models/Event";
import Link from "next/link";
import React from "react";
export const revalidate = 60

const singleEventPage = async ({ params }) => {
  await connectDb();
  const event = await Event.findById({ _id: params.id }).lean();
  const pastEvents = await Event.find().limit(6).sort({createdAt: -1}).lean();

  return (
    <div className="w-full">
      <section className="max-w-full h-[428px] flex justify-center relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-b from-black/50 via-black/50 to-transparent"></div>
        </div>
        <div className="w-full text-white h-full bg-cover bg-center bg-no-repeat bg-[url('/images/IMG_8244.JPG')]">
          <div className="container mx-auto absolute bottom-20 left-0 right-0 ">
            <Link 
            href={'/past-event'}
            className="font-bold hover:underline md:text-[4rem] text-3xl uppercase drop-shadow-lg">
              Past Events
            </Link>
          </div>
        </div>
      </section>
      <EventSinglePage event={JSON.parse(JSON.stringify(event))} />
      <RelatedEvents events={JSON.parse(JSON.stringify(pastEvents))} currentEventId={JSON.parse(JSON.stringify(event._id))} />

    </div>
  );
};

export default singleEventPage;
