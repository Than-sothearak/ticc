"use client";

import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiTrash } from "react-icons/bi";
import { File, X } from "lucide-react";
import { ReactSortable } from "react-sortablejs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ChooseImageFiles from "./ChooseImageFiles";

  // Helper function to normalize images This function takes an array of images and converts each item into a standardized
//  * format of `{ id, url }`. It ensures that all valid images have a unique `id`
//  * (based on their index in the array) and a valid `url` string for rendering.
  export const normalizeImages = (imgs) => {
    return imgs
      ?.map((img, i) => {
        let url;
        if (typeof img === "string") url = img;
        else if (img?.url) url = img.url;
        else if (img?.toString) url = img.toString();
        return url ? { id: i, url } : null;
      })
      .filter(Boolean);
  };

export const ImageManagerForm = ({
  apiEndpoint,
  imageKey,
  collectionName,
  subName,
  initialImages = [],
  id,
  title,
  decription,
  redirectTo,
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [files, setFiles] = useState([]);
  const [isUpload, setIsUpload] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [images, setImages] = useState(initialImages);
  const [removedImages, setRemovedImages] = useState([]);
  
  // Remove image
  const handleRemoveImage = (index) => {
    const removed = images[index];
    setImages((prev) => prev.filter((_, i) => i !== index));
    setRemovedImages((prev) => [...prev, removed]);
  };


  // Submit updated images
  const handleSubmit = (e) => {
    e.preventDefault();

    startTransition(async () => {
      const formData = new FormData();

      formData.append("removedImages", JSON.stringify(removedImages));
      formData.append("imagesOrder", JSON.stringify(images)); // ✅ send order

      if (id) formData.append("_id", id);

      files.forEach((f) => {
        formData.append("images", f.file);
      });

      try {
        const res = await fetch(apiEndpoint, {
          method: id ? "PUT" : "POST",
          body: formData,
        });

        const result = await res.json();
        if (!res.ok) throw new Error(result.message);

        if (subName) {
          setImages(result?.[collectionName]?.[subName]?.[imageKey] || []);
        } else {
          setImages(result?.[collectionName]?.[imageKey] || []);
        }

        alert(result.message);
        setRemovedImages([]);
        setFiles([]);
        setIsEditing(false);
        setIsUpload(false);
        router.refresh();
        if (redirectTo) router.push(redirectTo);
      } catch (err) {
        console.error(err);
      }
    });
  };



    useEffect(() => {
    setImages(normalizeImages(initialImages));
  }, [initialImages]);

    const handleCancel = () => {
    setImages(normalizeImages(initialImages));
    setRemovedImages([]);
    setIsEditing(false);
    setIsUpload(false);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row justify-between gap-4">
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{decription}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setIsUpload(true)}
              type="button"
            >
              Choose files
            </Button>

            {isEditing ? (
              <Button variant="outline" onClick={handleCancel} type="button">
                Cancel
              </Button>
            ) : (
              initialImages?.length > 0 && (
                <Button onClick={() => setIsEditing(true)} type="button">
                  Edit
                </Button>
              )
            )}

            {isEditing && (
              <Button type="submit" disabled={isPending}>
                {isPending ? "Saving..." : "Save"}
              </Button>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* ✅ Drag-and-drop sortable */}
          <ReactSortable
            list={images}    
            setList={setImages}
            className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3"
            animation={150}
              disabled={!isEditing} 
                ghostClass="opacity-50" 
              
          >
            {images?.map((img, index) => (
              <div
                key={index}
                className="relative h-full w-full border rounded-xl overflow-hidden group"
              >
                <Image
                  height={192}
                  width={192}
                    src={img.url || '/images/missing.jpg'}
                  alt={imageKey}
                  className="object-contain w-full h-full"
                />
                {isEditing && (
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100"
                    onClick={() => handleRemoveImage(index)}
                    type="button"
                  >
                    <BiTrash />
                  </Button>
                )}
              </div>
            ))}
          </ReactSortable>

          {/* Selected files info */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <File size={16} />
            Selected files <Badge>{files.length}</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Upload Modal */}
      {isUpload && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <Card className="relative w-full max-w-[580px]">
            <button
              type="button"
              onClick={() => setIsUpload(false)}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100"
            >
              <X />
            </button>
            <CardHeader>
              <CardTitle>Upload Images</CardTitle>
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
