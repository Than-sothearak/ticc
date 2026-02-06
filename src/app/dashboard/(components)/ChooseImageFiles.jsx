"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BiTrash,
  BiUpload,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";

export default function ChooseImageFiles({ files, setFiles }) {
  const updateInputFiles = (updatedFiles) => {
    const newFileList = new DataTransfer();
    updatedFiles.forEach((fileData) => newFileList.items.add(fileData.file));
    const input = document.getElementById("fileInput");
    if (input) input.files = newFileList.files;
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const fileArray = selectedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    const newFiles = [...files, ...fileArray];
    setFiles(newFiles);
    updateInputFiles(newFiles);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    updateInputFiles(updatedFiles);
  };

  const moveImage = (index, direction) => {
    const newIndex = direction === "left" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= files.length) return;

    const updatedFiles = [...files];
    [updatedFiles[index], updatedFiles[newIndex]] = [
      updatedFiles[newIndex],
      updatedFiles[index],
    ];

    setFiles(updatedFiles);
    updateInputFiles(updatedFiles);
  };

  return (
    <Card>
      {/* Upload Box */}
      <div className="rounded-xl p-6 text-center space-y-4">
        <div className="flex justify-center">
          <BiUpload size={32} className="text-muted-foreground" />
        </div>

        <div>
          <p className="font-medium">Choose images to upload</p>
          <p className="text-sm text-muted-foreground">
            JPEG, PNG, JPG • Max 1MB per file
          </p>
        </div>

        <Button asChild>
          <label htmlFor="fileInput" className="cursor-pointer">
            Choose Images
          </label>
        </Button>

        <Input
          id="fileInput"
          type="file"
          name="images"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Preview Strip */}
      {files?.length > 0 && (
        <div className="flex gap-4 overflow-x-auto  p-4">
          {files.map((fileData, index) => (
            <div
              key={fileData.preview}
              className="relative w-40 h-40 rounded-xl border overflow-hidden group flex-shrink-0"
            >
              <img
                src={fileData.preview}
                alt="Preview"
                className="w-full h-full object-contain transition group-hover:opacity-40"
              />

              {/* Hover Controls */}
              <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                {index !== 0 && (
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    onClick={() => moveImage(index, "left")}
                  >
                    <BiChevronLeft size={20} />
                  </Button>
                )}

                <Button
                  type="button"
                  size="icon"
                  variant="destructive"
                  onClick={() => handleRemoveFile(index)}
                >
                  <BiTrash size={18} />
                </Button>

                {index !== files.length - 1 && (
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    onClick={() => moveImage(index, "right")}
                  >
                    <BiChevronRight size={20} />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
