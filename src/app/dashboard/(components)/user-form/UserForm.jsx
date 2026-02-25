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

import { useRouter } from "next/navigation";

export default function UserForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e) => {
    e.preventDefault();
    startTransition(async () => {
      let method = "POST";
      try {
        const res = await fetch("/api/add-admin", {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        });

        const result = await res.json();
        if (!res.ok) {
          alert(result.message);
        } else {
          setEmail("");
          router.refresh(); // Refresh the page to show the new FQA in the table
          alert(result.message);
        }
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <div className="mt-8 space-y-6 lg:px-16 px-2">
      {/* Form Card */}
      <Card className="md:w-[580px] w-full m-auto">
        <CardHeader>
          <CardTitle>Add Admin</CardTitle>
          <CardDescription>
            Only email is required. Add admin to the list.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex gap-2 items-end w-full">
            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-2">
              <Button disabled={isPending} type="submit">
                {isPending ? "Saving..." : "Add admin"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
