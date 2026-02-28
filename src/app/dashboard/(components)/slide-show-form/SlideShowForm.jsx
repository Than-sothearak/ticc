"use client";
import React, { useState, useTransition } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SaveButton } from "../button/SaveButton";
import { getYouTubeID } from "@/lib/getYoutubeID";

export default function SlideShowForm({ data }) {
  const [isPending, startTransition] = useTransition();
  const [isEditing, setIsEditing] = useState();

  const [formData, setFormData] = useState({
    link: data?.videoLink || "",
  });

  const [videoId, setVideoId  ]= useState(data?.videoLink ? getYouTubeID(data?.videoLink) : null)
  const handleSubmit = async (e) => {
    e.preventDefault();

    startTransition(async () => {
      let method = data?._id ? "PUT" : "POST";

      try {
        const res = await fetch("/api/content/slideshow/video-link", {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            link: formData.link,
          }),
        });

        const result = await res.json();
        if (!res.ok) alert(result.message);

        setFormData({
          link: result.videoLink,
      
        });
        setVideoId(getYouTubeID(result.videoLink))
        setIsEditing(false);
        alert(result.message);
      } catch (err) {
        console.error(err);
      }
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      link: data?.videoLink || "",
    });
  };


  return (
    <form onSubmit={handleSubmit} className="md:w-[580px] w-full m-auto">
      {/* Form Card */}
      <Card className="">
        <CardHeader className="flex flex-row justify-between items-start ">
          <div className="space-y-2">
            <CardTitle>Video link</CardTitle>
            <CardDescription>
              Paste the link below for youtube video link in the homepage slideshow.
            </CardDescription>
          </div>
          <SaveButton
            isEditing={isEditing}
            isPending={isPending}
            onEdit={() => setIsEditing(true)}
            onCancel={handleCancel}
          />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="w-full">
            <Label htmlFor="email">Youtube Link</Label>
            <Input
              disabled={!isEditing}
              type="text"
              id="link"
              placeholder="https://www.youtube.com/watch?v=..."
              value={formData.link}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  link: e.target.value,
                }))
              }
            />
          </div>

          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&loop=1&playlist=${videoId}`}
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
         
   
        </CardContent>
      </Card>
    </form>
  );
}
