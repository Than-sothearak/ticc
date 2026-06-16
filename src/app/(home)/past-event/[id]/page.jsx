import { EventSinglePage } from "@/components/event-page/EventSinglePage";
import { RelatedEvents } from "@/components/event-page/RelatedEvent";
import { connectDb } from "@/lib/connectDb";
import { Event } from "@/models/Event";
import React from "react";

const singleEventPage = async ({ params }) => {
  await connectDb();
  const event = await Event.findById({ _id: params.id }).lean();
  const pastEvents = await Event.find().limit(6).sort({ createdAt: -1 }).lean();

  if (!event) {
    return <div className="text-center mt-28">Event not found</div>;
  }

  return (
    <div className="w-full">
     
    
      <EventSinglePage event={JSON.parse(JSON.stringify(event))} />
      <RelatedEvents
        events={JSON.parse(JSON.stringify(pastEvents))}
        currentEventId={JSON.parse(JSON.stringify(event._id))}
      />
    </div>
  );
};

export default singleEventPage;
