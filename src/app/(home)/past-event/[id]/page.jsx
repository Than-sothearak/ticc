import { EventSinglePage } from "@/components/EventSinglePage";
import { connectDb } from "@/lib/connectDb";
import { Event } from "@/models/Event";
import Link from "next/link";
import React from "react";
const singleEventPage = async ({ params }) => {
  await connectDb();
  const event = await Event.findById({ _id: params.id }).lean();

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
    </div>
  );
};

export default singleEventPage;
