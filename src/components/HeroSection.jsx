"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HangingCard } from "./HangingCard";
import { BlueTechWave } from "./WaveTech";
import FadeUp from "./motion/FadeUp";
import Fade from "./motion/Fade";
import { ApplyButton } from "./ApplyButton";

const HeroSection = ({ applyLink, slideShow }) => {
  const slides = slideShow.images || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Clone first slide for seamless loop
  const displaySlides = [...slides, slides[0]];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-black/50 via-black/50 to-transparent"></div>
      </div>

      {/* Slider */}
      <div
        className="flex h-full transition-transform duration-1000"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        ref={containerRef}
      >
        {displaySlides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>

      <HangingCard />
   
      <BlueTechWave />
      {/* Overlay content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
       <FadeUp>
         <h1 className="font-bold text-[2.986rem] leading-tight">
          Empower your innovation <br />
          with Techno Innovation Challenge <br />
          Cambodia
        </h1>
       </FadeUp>
       <FadeUp>
         <p className="mt-4 text-lg max-w-xl">
          Join our competition program and showcase your STEM-based solutions
          to solve real-world problems. Learn, compete, and win!
        </p>
       </FadeUp>
        <div className="flex gap-6 mt-10">
          <Fade>
            <button className="px-4 py-3 border border-white rounded-sm">
            <a href="#section2">Learn more</a>
          </button>
          </Fade>

          {applyLink?.enabled && (
           <Fade>
            <ApplyButton link={'/application'}/>
           </Fade>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
