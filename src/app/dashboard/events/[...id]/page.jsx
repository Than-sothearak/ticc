export const dynamic = "force-dynamic";
import { connectDb } from "@/lib/connectDb";
import { Event } from "@/models/Event";
import React from "react";
import EventForm from "../../(components)/event-form/EventForm";
import { ImageManagerForm } from "../../(components)/ImageManagerForm";

const singleEventPage = async ({ params }) => {
  await connectDb();
  const event = await Event.findById({ _id: params.id }).lean();
  if (!event) {
    return <div>In valid id</div>;
  }
  return (
    <div className="container my-4 space-y-4">
      <EventForm data={JSON.parse(JSON.stringify(event))} />
      {event && (
        <div className="space-y-4">
          <ImageManagerForm
            title="Add event images"
            id={JSON.parse(JSON.stringify(event._id))}
            collectionName="event"
            decription="Share the best moments from your event! Upload photos that capture activities, speakers, and memorable experiences."
            apiEndpoint="/api/past-event/event-image"
            imageKey="images"
            initialImages={JSON.parse(JSON.stringify(event?.images || []))
              .map((img) => (typeof img === "string" ? img : img.url || ""))
              .filter(Boolean)}
          />

          <ImageManagerForm
            title="Add protoype images"
            id={JSON.parse(JSON.stringify(event._id))}
            collectionName="event" // Assuming the backend expects 'event' as the collection name for prototypes as well
            decription="Share the best moments from your event! Upload photos that capture activities, speakers, and memorable experiences."
            apiEndpoint="/api/past-event/event-prototype" // Assuming the backend has a separate endpoint for prototype images
            imageKey="prototypes" // Assuming the backend expects 'prototypes' as the key for prototype images
            initialImages={JSON.parse(JSON.stringify(event?.prototypes || []))
              .map((img) => (typeof img === "string" ? img : img.url || ""))
              .filter(Boolean)}
          />
        </div>
      )}
    </div>
  );
};

export default singleEventPage;
