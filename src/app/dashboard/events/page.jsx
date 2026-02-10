export const dynamic = "force-dynamic";
import { unstable_noStore as noStore } from "next/cache";
import React from "react";
import { connectDb } from "@/lib/connectDb";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Event } from "@/models/Event";
import { EventGrid } from "../(components)/event-form/EventGrid";

const eventPage = async () => {
   noStore(); // 🔥 force no cache
  await connectDb();

  const events = await Event.find().lean();
  
  return (
    <div className="container my-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Past event</CardTitle>
              <CardDescription>List of events</CardDescription>
            </div>
            <Button>
              <Link href={"/dashboard/events/add"}>Create event</Link>
            </Button>
          </div>
        </CardHeader>

        <EventGrid events={JSON.parse(JSON.stringify(events))} />
      </Card>
    </div>
  );
};

export default eventPage;
