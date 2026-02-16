"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import StaggerSection from "../motion/StaggerSection";
import FadeUp from "../motion/FadeUp";

export const EventGallery = ({ images = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const imagesWithoutFirst = images.slice(1);

const next = () =>
  setOpenIndex((prev) => (prev + 1) % imagesWithoutFirst.length);

const prev = () =>
  setOpenIndex((prev) =>
    prev === 0 ? imagesWithoutFirst.length - 1 : prev - 1
  );

  // Keep your logic
  const firstSix = images.slice(1, 6);
  const rest = images.slice(6);

  const openImage = (index) => setOpenIndex(index);
  const closeImage = () => setOpenIndex(null);

  // ESC close
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && closeImage();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <StaggerSection>
        <div className="flex flex-col gap-4">

          {/* First 6 images: full width */}
          {firstSix.map((img, i) => (
            <FadeUp loop key={i}>
              <div
                className="relative group cursor-pointer overflow-hidden rounded-xl border shadow hover:shadow-xl transition"
                onClick={() => openImage(i)}
              >
                <Image
                  src={img}
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    View
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}

          {/* Remaining images: 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rest.map((img, i) => {
              const realIndex = i + 5; // correct index in full array
              return (
                <FadeUp loop key={realIndex}>
                  <div
                    className="relative group cursor-pointer overflow-hidden rounded-xl border shadow hover:shadow-xl transition"
                    onClick={() => openImage(realIndex)}
                  >
                    <Image
                      src={img}
                      alt=""
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        View
                      </span>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </StaggerSection>

      {/* Lightbox */}
      {openIndex !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center">

          {/* Close */}
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white hover:text-red-400"
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-6 text-white hover:text-gray-300"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-6 text-white hover:text-gray-300"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image */}
          <div className="max-w-6xl w-full p-4">
            <Image
              src={imagesWithoutFirst[openIndex]}
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
};
