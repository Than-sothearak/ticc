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
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DatePickerInput } from "../DatePicker";

export default function ApplicationForm({ data }) {
  const [isPending, startTransition] = useTransition();
  const [isEditing, setIsEditing] = useState();

  const [formData, setFormData] = useState({
    link: data?.src || "",
    enabled: data?.enabled || false,
    deadline: data?.deadline || "",
    title: data?.title || ""
  });
 const handleSubmit = async (e) => {
  e.preventDefault();

  startTransition(async () => {
    let method = data?._id ? "PUT" : "POST";

    try {
      const res = await fetch("/api/content/apply", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: data?._id,
          link: formData.link,
          enabled: formData.enabled,
          deadline: formData.deadline,
          title: formData.title
        }),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);;

      setFormData({
        link: result.src,
        enabled: result.enabled,
        deadline: result.deadline,
        title: result.title
      });

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
        link: data?.src || "",
    enabled: data?.enabled || false,
      deadline: data?.deadline || "",
    title: data?.title || ""
      });
  };

  const handleToggleEnabled = () => {
    if (!isEditing) return;
    setFormData((prev) => ({
      ...prev,
      enabled: !prev.enabled,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="md:w-[580px] w-full m-auto">
      {/* Form Card */}
      <Card className="">
        <CardHeader className="flex flex-row justify-between items-start ">
          <div className="space-y-2">
            <CardTitle>Apply link</CardTitle>
            <CardDescription>
              Paste the application link below for apply form
            </CardDescription>
          </div>
          <div className="flex gap-2">
            {isEditing ? (
              <Button
              
                variant="outline"
                type="button"
                onClick={() => handleCancel()}
              >
                Cancel
              </Button>
            ) : (
              <Button
                
                onClick={() => setIsEditing(true)}
                type="button"
              >
                Edit
              </Button>
            )}

            {isEditing && (
              <Button  disabled={isPending} type="submit">
                {isPending ? "Saving..." : "Save"}
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">

           <div className="w-full">
            <Label htmlFor="email">Title</Label>
            <Input
              disabled={!isEditing}
              type="text"
              id="title"
              placeholder="Program title...."
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="w-full">
            <Label htmlFor="email">Link</Label>
            <Input
              disabled={!isEditing}
              type="text"
              id="link"
              placeholder="https://www.google.com..."
              value={formData.link}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  link: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-2">
        
            <button
              type="button"
              onClick={handleToggleEnabled}
              disabled={!isEditing}
              className={`
      relative inline-flex h-6 w-11 items-center rounded-full
      transition-colors duration-300
      ${formData.enabled ? "bg-primary" : "bg-gray-300"}
      ${!isEditing ? "opacity-60 cursor-not-allowed" : ""}
    `}
            >
              <span
                className={`
        inline-block h-4 w-4 rounded-full bg-white
        transform transition-transform duration-300
        ${formData.enabled ? "translate-x-6" : "translate-x-1"}
      `}
              />
            </button>
                <label className="">
              {formData.enabled ? "Enabled" : "Disabled"}
            </label>
          </div>
          <CardDescription>
            When enabled, users will see the Apply button and can submit
            applications. When disabled, the Apply button will be hidden.
          </CardDescription>
    
           <div className="w-full flex justify-start">
             <DatePickerInput
              label="Application deadLine"
              value={formData.deadline}
              disabled={!isEditing}
              onChange={(date) =>
                setFormData({
                  ...formData,
                  deadline: date,
                  
                })
              }
            />
           </div>
        </CardContent>
      </Card>
    </form>
  );
}
