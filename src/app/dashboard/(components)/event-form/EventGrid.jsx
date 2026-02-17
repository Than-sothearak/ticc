"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, MoreHorizontalIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { DeleteButton } from "../DeleteButton";
import Link from "next/link";

export const EventGrid = ({ events }) => {
  const [eventsData, setEventsData] = useState(events)
  useEffect(() => {
    setEventsData(events)
  }, [events])


  return (
    <CardContent>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {eventsData.map((e) => (
          <div key={e._id} className="space-y-2">
            <Card className="w-full">
              <div className="relative h-full w-full border rounded-lg overflow-hidden group">
                <Image
                
                  src={e?.images[0] || "/images/Image-not-found.png"}
                  alt={e.title}
                     height={192}
                 width={192}
        
                 className="object-contain w-full h-full" />
           
              </div>
            </Card>
        <div className="flex justify-between">
         <div>
               <h3 className="font-semibold">{e.title}</h3>
            <div className="flex items-center gap-1">
              <Calendar size={18} />
              <p>{e.year}</p> <p>{e.season}</p>
            </div>
         </div>
  <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-8">
                    <MoreHorizontalIcon />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                   <Link href={`/dashboard/events/${e._id}`} className="w-full">Edit</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    variant="destructive"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <DeleteButton
                      itemName={e.title}
                      onDelete={async () => {
                        const res = await fetch(`/api/past-event/delete/${e._id}`, {
                          method: "DELETE",
                        });
                        const data = await res.json();
                        if (!data.success) throw new Error(data.message);
                        alert(data.message);
                        setEventsData((prev) =>
                          prev.filter((m) => m._id !== e._id),
                        );
                      }}
                    />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
        </div>
          
          </div>
        ))}
      </div>
    </CardContent>
  );
};
