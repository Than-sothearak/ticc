"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import { BiTrash } from "react-icons/bi";
import { File, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ChooseImageFiles from "../ChooseImageFiles";

export const EventImageForm = ({ data }) => {
  const [isPending, startTransition] = useTransition();
  const [files, setFiles] = useState([]);
  const [isUpload, setIsUpload] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    images: data?.images || [],
    removedImages: [],
  });

  const handleRemoveImage = (index) => {
    setFormData((prev) => {
      const removed = prev.images[index];
      return {
        ...prev,
        images: prev.images.filter((_, i) => i !== index),
        removedImages: [...prev.removedImages, removed],
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    // append removed images
    startTransition(async () => {
      formDataToSend.append(
        "removedImages",
        JSON.stringify(formData.removedImages || []),
      );
      let method = "POST";
      if (data._id) {
        method = "PUT";
        formDataToSend.append("_id", data._id);
      }
      // append files from state
      files.forEach((fileObj) => {
        formDataToSend.append("images", fileObj.file);
      });
      for (const [key, value] of formDataToSend.entries()) {
      }
      try {
        const res = await fetch("/api/past-event/event-image", {
          method: method,
          body: formDataToSend,
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        setFormData((prev) => ({
          ...prev,
          images: data.event.images || [],
          removedImages: [],
        }));
        alert(data.message);
        setIsUpload(false);
        setIsEditing(false);
        setFiles([]);
      } catch (err) {
        console.error(err);
      }
    });
  };
  const handleCancel = () => {
    setFormData((prev) => ({
      ...prev,
      images: data?.images || [],
      removedImages: [],
    }));
    setIsUpload(false);
    setIsEditing(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mt-8 items-center m-auto  w-full px-2"
    >
      <Card className="w-full">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>Add event images</CardTitle>
            <div className="flex flex-row justify-between items-center ">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsUpload(true)}
                  type="button"
                >
                  Choose files
                </Button>

                {isEditing ? (
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => handleCancel()}
                  >
                    Cancel
                  </Button>
                ) : (
                  <Button onClick={() => setIsEditing(true)} type="button">
                    Edit
                  </Button>
                )}

                {isEditing && (
                  <Button disabled={isPending} type="submit">
                    {isPending ? "Saving..." : "Save"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <input
            type="hidden"
            name="removedImages"
            value={JSON.stringify(formData.removedImages)}
          />

          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {formData.images.map((img, index) => (
              <div
                key={index}
                className="relative h-full w-full border rounded-xl overflow-hidden group"
              >
                <Image  
                src={img}
                 alt="logo" 
                 height={192}
                 width={192}
     
                 className="object-contain w-full h-full" />
                {isEditing && (
                  <Button
                    size="icon"
                    variant="destructive"
                    className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100"
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <BiTrash />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <File size={16} />
            Selected files <Badge>{files.length}</Badge>
          </div>
        </CardContent>

        {/* Upload modal unchanged */}
        {isUpload && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">
            <Card className="relative w-full max-w-[580px]">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsUpload(false)}
                className="absolute right-3 top-3 rounded-full p-1 hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>

              <CardHeader>
                <CardTitle>Upload Images</CardTitle>
                <CardDescription>
                  Imge size should be under 5MB
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ChooseImageFiles files={files} setFiles={setFiles} />

                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending ? "Uploading..." : "Upload"}
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </Card>
    </form>
  );
};
