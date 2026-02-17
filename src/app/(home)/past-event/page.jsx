import React from "react";

import { connectDb } from "@/lib/connectDb";
import { Event } from "@/models/Event";
import { EventsComponent } from "@/components/event-section/EventsComponent";

export const revalidate = 60

const Page = async () => {
  await connectDb()
  const events = await Event.find().sort({createdAt : -1}).lean();
  return (
    <EventsComponent events = {JSON.parse(JSON.stringify(events))}/>
  );
};

export default Page;
