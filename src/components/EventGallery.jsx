"use client";
import { useState } from "react";
import Image from "next/image";
import StaggerSection from "./motion/StaggerSection";
import FadeUp from "./motion/FadeUp";

export const EventGallery = ({ images }) => {
  const [open, setOpen] = useState(null);

  // Split first 6 images and the rest
  const firstSix = images.slice(1, 6);
  const rest = images.slice(6);

  return (
    <>
      <StaggerSection>
        <div className="flex flex-col gap-4">
          {/* First 6 images: full width */}
          {firstSix.map((img, i) => (
            <FadeUp loop={true} key={i}>
              <div
                className="cursor-pointer overflow-hidden rounded-xl border hover:scale-[1.02] transition w-full h-full"
                onClick={() => setOpen(img)}
              >
                <Image
                  src={img}
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeUp>
          ))}

          {/* Remaining images: 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rest.map((img, i) => (
              <FadeUp loop={true} key={i}>
                <div
                  className="cursor-pointer overflow-hidden rounded-xl border hover:scale-[1.02] transition w-full h-full"
                  onClick={() => setOpen(img)}
                >
                  <Image
                    src={img}
                    alt=""
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </StaggerSection>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <div className="relative max-w-6xl w-full">
            <Image
              src={open}
              alt=""
              width={1600}
              height={1200}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};
