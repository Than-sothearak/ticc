import { EventSinglePage } from "@/components/event-page/EventSinglePage";
import { RelatedEvents } from "@/components/event-page/RelatedEvent";
import { HeaderSectionComponent } from "@/components/HeaderSectionComponent";
import { connectDb } from "@/lib/connectDb";
import { Event } from "@/models/Event";
import React from "react";
export const revalidate = 60;

const singleEventPage = async ({ params }) => {
  await connectDb();
  const event = await Event.findById({ _id: params.id }).lean();
  const pastEvents = await Event.find().limit(6).sort({ createdAt: -1 }).lean();

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
