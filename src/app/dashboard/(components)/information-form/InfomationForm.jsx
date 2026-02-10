"use client";

import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePickerInput } from "../DatePicker";

export default function InfomationForm({ data }) {
  const [isPending, startTransition] = useTransition();
  const [isEditing, setIsEditing] = useState(false);
 
  const [formData, setFormData] = useState({
    weeks: {
      week1: data?.weeks?.week1 || "",
      week2: data?.weeks?.week2 || "",
      week3: data?.weeks?.week3 || "",
      week4: data?.weeks?.week4 || "",
    },
    enabled: data?.enabled || false,
  });

const handleCancel = () => {
  setIsEditing(false);
  setFormData({
    weeks: {
      week1: data?.weeks?.week1 || "",
      week2: data?.weeks?.week2 || "",
      week3: data?.weeks?.week3 || "",
      week4: data?.weeks?.week4 || "",
    },
    enabled: data?.enabled || false,
  });
};

  const handleSubmit = (e) => {
    e.preventDefault();
  
  startTransition(async () => {
    let method = "PUT";
    try {
      const res = await fetch("/api/content/information", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: data?._id,
          weeks: formData.weeks,
          enabled: formData.enabled,
        }),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);;

      setFormData({
        weeks: result.weeks,
        enabled: result.enabled,
      });

      setIsEditing(false);
      alert(result.message);
    } catch (err) {
      console.error(err);
    }
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
    <form className="mt-8 space-y-6 px-2 lg:px-16" onSubmit={handleSubmit}>
      {/* Header Card */}
      <Card className="md:w-[580px] w-full m-auto">
        <CardHeader className="flex flex-row justify-between items-start">
          <div>
            <CardTitle>Information and Schedule</CardTitle>
            <CardDescription>
              Set the dates for the next 4 weeks
            </CardDescription>
          </div>
          <div className="flex gap-2">
            {isEditing ? (
              <Button variant="outline" type="button" onClick={handleCancel}>
                Cancel
              </Button>
            ) : (
              <Button type="button" onClick={() => setIsEditing(true)}>
                Edit
              </Button>
            )}
            {isEditing && (
              <Button type="submit" disabled={isPending}>
                {isPending ? "Saving..." : "Save"}
              </Button>
            )}
          </div>
        </CardHeader>
      </Card>

      {/* 4-week Calendar Inputs */}
      <Card className="md:w-[580px] w-full m-auto p-4 gap-4 space-y-4">
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
        <div className="grid grid-cols-2 gap-4">
      {Object?.keys(formData?.weeks).map((week) => (
  <DatePickerInput
    key={week}
    label={week}
    value={formData.weeks[week]}
    disabled={!isEditing}
    onChange={(date) =>
      setFormData({
        ...formData,
        weeks: {
          ...formData.weeks,
          [week]: date,
        },
      })
    }
  />
))}
        </div>
      </Card>
    </form>
  );
}
