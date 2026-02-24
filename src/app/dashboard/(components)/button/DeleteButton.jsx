"use client";

import React, { useState, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DeleteButton({
  onDelete,
  itemName,
  size = "sm",
  variant,
}) {
  const [open, setOpen] = useState(false);
 const [isPending, startTransition] = useTransition();
  const handleConfirm = () => {
   
    try {
     startTransition( async () => {
      await onDelete(); //  wait
      setOpen(false); 
     })//  close only on success
    } catch {
      // keep dialog open if delete fails
    }
  };
  
  return (
    <>
      <Button
        
        size={size}
        variant={variant || "outline"}
        className="text-start w-full"
        onClick={() => setOpen(true)}
      >
        Delete
      </Button>

      <Dialog open={open} onOpenChange={(v) => !isPending && setOpen(v)}>
        <DialogContent className="bg-white/90 backdrop-blur-md">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete <strong>{itemName}</strong>?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isPending}
            >
              Cancel
            </Button>

            <Button
              variant={"destructive"}
              onClick={handleConfirm}
              disabled={isPending}
            >
              {isPending ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
