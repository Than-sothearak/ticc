"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import StaggerSection from "../motion/StaggerSection";
import FadeUp from "../motion/FadeUp";

export default function EventPrototypeGallery({ images = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const openImage = (index) => setOpenIndex(index);
  const closeImage = () => setOpenIndex(null);

  const next = () =>
    setOpenIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setOpenIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  // ESC close
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && closeImage();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Masonry Gallery */}
      <StaggerSection>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <FadeUp key={i}>
              <div
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg border"
                onClick={() => openImage(i)}
              >
                <Image
                  src={img}
                  alt=""
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    View Image
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </StaggerSection>

      {/* Lightbox */}
      {openIndex !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center">
          
          {/* Close */}
          <button
            onClick={closeImage}
            className="absolute top-5 right-5 text-white hover:text-red-400"
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-5 text-white hover:text-gray-300"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-5 text-white hover:text-gray-300"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image */}
          <div className="max-w-6xl w-full p-4">
            <Image
              src={images[openIndex]}
              alt=""
              width={1800}
              height={1200}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
