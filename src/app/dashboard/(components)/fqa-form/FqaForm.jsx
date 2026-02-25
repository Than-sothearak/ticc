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
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export default function FqaForm({ data }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [formData, setFormData] = useState({
    question: data?.question || "",
    answer: data?.answer || "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    startTransition(async () => {
      let method = data?._id ? "PUT" : "POST";
      try {
        const res = await fetch("/api/fqa", {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: data?._id, // Include ID for updates
            question: formData.question,
            answer: formData.answer,
          }),
        });

        const result = await res.json();
        if (!res.ok) {
          alert(result.message);
        } else {
          if (data?._id) {
            alert(result.message);
            router.refresh(); // Refresh the page to show the new FQA in the table
            setFormData({
              question: result.fqa.question,
              answer: result.fqa.answer,
            });
            return;
          }
          setFormData({
            question: "",
            answer: "",
          });
          router.refresh(); // Refresh the page to show the new FQA in the table
          alert(result.message);
        }
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="md:w-[580px] w-full m-auto">
      {/* Form Card */}
      <Card className="">
        <CardHeader className="flex flex-row justify-between items-start ">
          <div className="space-y-2">
            <CardTitle>FQA Form</CardTitle>
            <CardDescription>Manage Frequently Asked Questions</CardDescription>
          </div>
          <div className="flex gap-2">
            {data?._id ? (
              <Button disabled={isPending} type="submit">
                {isPending ? "Saving..." : "Update"}
              </Button>
            ) : (
              <Button disabled={isPending} type="submit">
                {isPending ? "Saving..." : "Add"}
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="w-full">
            <Label htmlFor="email">Question</Label>
            <Input
              type="text"
              id="question"
              placeholder="Question...."
              value={formData.question}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  question: e.target.value,
                }))
              }
            />
          </div>

          <div className="w-full">
            <Label htmlFor="email">Answer</Label>
            <Textarea
              className="min-h-36"
              type="textarea"
              id="answer"
              placeholder="Answer...."
              value={formData.answer}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  answer: e.target.value,
                }))
              }
            />
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
