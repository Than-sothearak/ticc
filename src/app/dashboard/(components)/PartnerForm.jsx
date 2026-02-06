"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiTrash } from "react-icons/bi";
import { File, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ChooseImageFiles from "./ChooseImageFiles";

export const PartnerImageForm = ({ partnerData }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [files, setFiles] = useState([]);
  const [isUpload, setIsUpload] = useState(false);
  const [isEditing, setIsEditing] = useState(!partnerData);

  const [formData, setFormData] = useState({
    logos: partnerData?.logos || [],
    removedImages: [],
  });

  const handleRemoveImage = (index) => {
    setFormData((prev) => {
      const removed = prev.logos[index];
      return {
        ...prev,
        logos: prev.logos.filter((_, i) => i !== index),
        removedImages: [...prev.removedImages, removed],
      };
    });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  const formDataToSend = new FormData();
  // append removed images
  startTransition( async () => {
      formDataToSend.append(
    "removedImages",
    JSON.stringify(formData.removedImages || [])
  );
  let method = "POST"
  if (partnerData._id) {
     method = "PUT"
     formDataToSend.append("_id", partnerData._id);
  }
  // append files from state
  files.forEach((fileObj) => {
    formDataToSend.append("images", fileObj.file);
  });
  for (const [key, value] of formDataToSend.entries()) {
}
  try {
    const res = await fetch("/api/partner", {
      method: method,
      body: formDataToSend,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
           setFormData((prev) => ({
      ...prev,
      logos: data.partner?.logos || [],
      removedImages: [],
    }));
    alert(data.message)
    setIsUpload(false);
    setIsEditing(false);

    setFiles([]);
    router.push("/dashboard/partners");
  } catch (err) {
    console.error(err);
  }
  })
};
const handleCancel = () => {
  setFormData((prev) => ({
    ...prev,
    logos: partnerData?.logos || [],
    removedImages: [],
  }));
  setIsUpload(false)
  setIsEditing(false)
};
  return (
    <form onSubmit={handleSubmit} className="p-4 relative space-y-6 w-full">
      <Card className="">
        <CardHeader className="flex flex-row justify-between items-center ">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
               onClick={() => setIsUpload(true)}
              type="button"
            >
              Choose files
            </Button>

            {isEditing ? (
              <Button
                size="sm"
                variant="outline"
                type="button"
                onClick={() => handleCancel()}
              >
                Cancel
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={() => setIsEditing(true)}
                type="button"
              >
                Edit
              </Button>
            )}

            {isEditing && (
              <Button size="sm" disabled={isPending} type="submit">
                {isPending ? "Saving..." : "Save"}
              </Button>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <input
            type="hidden"
            name="removedImages"
            value={JSON.stringify(formData.removedImages)}
          />

          <div className="flex flex-wrap gap-3">
            {formData.logos.map((img, index) => (
              <div
                key={index}
                className="relative aspect-square h-11 w-11 border rounded-xl overflow-hidden group"
              >
                <Image fill src={img} alt="logo" className="object-cover" />
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
      </Card>

      {/* Upload modal unchanged */}
      {isUpload && (
        <div className="flex items-center justify-center w-full">
          <Card className="relative p-2 w-full">
            <button type="button" onClick={() => setIsUpload(false)}>
              <X />
            </button>
            <CardHeader>
              <CardTitle>Upload Logos</CardTitle>
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
    </form>
  );
};
