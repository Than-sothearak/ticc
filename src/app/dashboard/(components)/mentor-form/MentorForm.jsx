"use client";

import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import ChooseSingleImage from "../ChooseSingleImage";

export const MentorForm = ({ data }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [file, setFile] = useState();
  const [formData, setFormData] = useState({
    year: data?.year || "",
    name: data?.name || "",
    title: data?.title || "",
    _id: data?._id || "",
    image: data?.image || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    startTransition(async () => {
      let method = "POST";
      if (file) {
        formDataToSend.append("image", file.file); // single file
      }

      // Convert formData object to JSON string
      formDataToSend.append("data", JSON.stringify(formData));

      if (data?._id) {
        method = "PUT";
      }
      try {
        const res = await fetch("/api/mentor", {
          method: method,
          body: formDataToSend,
        });
        const data = await res.json();

        if (!res.ok) throw new Error(data.message);
        setFormData((prev) => ({
          ...data.mentor,
        }));
        alert(data.message);
        router.replace("/dashboard/mentors");
        router.refresh();

        setFile();
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <Card className="md:w-[580px] w-full m-auto">
      <CardHeader>
        <CardTitle>{data ? "Edit Mentor" : "Add Mentor"}</CardTitle>
        <CardDescription>Add mentor information by year</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Year */}
          <div>
            <Label htmlFor="year">TICC season</Label>
            <select
              id="year"
              className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: Number(e.target.value) })
              }
              required
            >
              <option value="">Select year</option>
              {Array.from({ length: 8 }, (_, i) => 2023 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Mentor name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          {/* Title */}
          <div>
            <Label htmlFor="title">Position / Title</Label>
            <Input
              id="title"
              placeholder="General Manager"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>
          <ChooseSingleImage file={file} setFile={setFile} />

          {data ? (
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Saving..." : "Update Mentor"}
            </Button>
          ) : (
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Creating..." : "Create Mentor"}
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
