"use client";
import React, { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FqaForm from "./FqaForm";
import { DeleteButton } from "../button/DeleteButton";
import { X } from "lucide-react";

export default function FqaTable({ fqas }) {
  const [editingFqa, setEditingFqa] = useState(null);
 
  useEffect(() => {
    setFqas(fqas);
  }, [fqas]);

  const [fqasData, setFqas] = useState(fqas);

  return (
    <>
      <div className="space-y-4 md:w-[580px] w-full m-auto max-h-[400px] overflow-y-auto    ">
        {fqasData.map((item) => (
          <Card key={item._id} className="p-4 flex justify-between items-start">
            <div className="space-y-1">
              <p className="font-semibold">{item.question}</p>
              <p className="text-sm text-muted-foreground"><span className="text-black font-bold">Answer:</span> {item.answer}</p>
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setEditingFqa(item)}
              >
                Edit
              </Button>
              {/* Delete button (logic later) */}
              <DeleteButton
                itemName={item.question}
                onDelete={async () => {
              
                  const res = await fetch(`/api/fqa/delete/${item._id}`, {
                    method: "DELETE",
                  });

                  const data = await res.json();
                  if (!data.success) throw new Error(data.message);

                  alert(data.message);
                  setFqas((prev) => prev.filter((m) => m._id !== item._id));
                }}
              />
            </div>
          </Card>
        ))}
      </div>

      {/* Popup / Modal */}
      {editingFqa && (
  <div

    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center max-md:px-2"
  >
    

    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-background rounded-lg relative max-md:w-full p-4 flex flex-col gap-4  justify-end items-end"
    >
       <button
        onClick={() => setEditingFqa(null)}
        className=" text-gray-500 hover:text-gray-800"
        aria-label="Close"
      >
        <X size={20} />
      </button>
  
      <FqaForm data={editingFqa} onClose={() => setEditingFqa(null)} />
            {/* Close Button */}
     
    </div>
  </div>
)}
    </>
  );
}
