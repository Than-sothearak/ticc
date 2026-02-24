"use client";


import { BiTrash, BiUpload } from "react-icons/bi";
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function ChooseSingleImage({ file, setFile }) {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile({
      file: selectedFile,
      preview: URL.createObjectURL(selectedFile),
    });
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <Card>
      {/* Upload Box */}
      <div className="rounded-xl p-6 text-center space-y-4">
        <div className="flex justify-center">
          <BiUpload size={32} className="text-muted-foreground" />
        </div>

        <div>
          <p className="font-medium">Choose an image to upload</p>
          <p className="text-sm text-muted-foreground">
            JPEG, PNG, JPG • Max 1MB
          </p>
        </div>

        <Button asChild>
          <label htmlFor="fileInput" className="cursor-pointer">
            Choose Image
          </label>
        </Button>

        <Input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Preview */}
      {file && (
        <div className="relative w-40 h-40 m-auto mt-4 rounded-xl border overflow-hidden">
          <Image
            src={file.preview}
            alt="Preview"
            fill
            className="w-full h-full object-contain"
          />

          {/* Remove Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition">
            <Button
              type="button"
              size="icon"
              variant="destructive"
              onClick={handleRemoveFile}
            >
              <BiTrash size={18} />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
