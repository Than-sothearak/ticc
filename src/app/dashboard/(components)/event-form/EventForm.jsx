"use client";

import { useEffect, useState, useTransition } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import TextEditor from "../TextEditor";
import { useRouter } from "next/navigation";

export default function EventForm({ data, session}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    title: data?.title || "",
    year: data?.year || "",
    season: data?.season ||  "",
    description: data?.description || "",
    postby: data?.postby || session?.user.username || ""
  });

useEffect(() => {
  if (data) {
    setFormData({
      title: data.title || "",
      year: data.year || "",
      season: data.season || "",
      description: data.description || "",
      postby: data.postby || session?.user?.username || ""
    });
  }
}, [data]);

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    startTransition(async () => {
      let method = "POST";
      if (data?._id) {
        method = "PUT";
      }
      try {
        const res = await fetch("/api/past-event", {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: data?._id,
            title: formData.title,
            year: formData.year,
            season: formData.season,
            description: formData.description,
            postby: formData.postby
          }),
        });

        const result = await res.json();
   
        if (!res.ok) alert(result.message);
        router.refresh()
        if(!data) {
          router.push(`/dashboard/events/${result.event._id}`)
        }
        alert(result.message);
        setFormData({
          title: result.event.title,
          year: result.event.year,
          season: result.event.season,
          description: result.event.description,
        });
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{data ? data.title : 'Create Past Event'}</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div className="space-y-2">
            <Label>Event Title</Label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Techno Innovation Challenge Cambodia"
              required
            />
          </div>

          {/* Year */}
          <div className="space-y-2">
            <Label>Year</Label>
            <Input
              name="year"
              type="number"
              value={formData.year}
              onChange={handleChange}
              placeholder="2024"
              required
            />
          </div>

          {/* Season */}
          <div className="space-y-2">
            <Label>Season</Label>
            <Input
              name="season"
              value={formData.season}
              onChange={handleChange}
              placeholder="Season 1"
            />
          </div>

          <div className="space-y-2">
            <Label>Event Description</Label>
            <TextEditor
              value={formData.description}
              onChange={(html) =>
                setFormData((prev) => ({ ...prev, description: html }))
              }
            />
          </div>

          {/* Submit */}
          {data ? 
        <Button type="submit" className="w-full" disable={isPending}>
            {!isPending ? " Update Event" : " Saving..."}
          </Button>  : <Button type="submit" className="w-full" disable={isPending}>
            {!isPending ? " Create Event" : " Creating Event..."}
          </Button>
        }
        </form>
      </CardContent>
    </Card>
  );
}
