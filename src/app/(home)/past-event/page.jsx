import React from "react";

import { EventsComponent } from "@/components/EventsComponent";
import { connectDb } from "@/lib/connectDb";
import { Event } from "@/models/Event";



const Page = async () => {
  await connectDb()
  const events = await Event.find().lean();
  return (
    <EventsComponent events = {JSON.parse(JSON.stringify(events))}/>
  );
};

export default Page;
