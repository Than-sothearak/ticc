"use client";
import React, { useState, useEffect, useRef } from "react";
import { HangingCard } from "./HangingCard";
import { HangingCardMobile } from "./HangingCardMobile";
import FadeUp from "../motion/FadeUp";
import { ApplyButton } from "../ApplyButton";
import Link from "next/link";
import { Play } from "lucide-react";
import { getYouTubeID } from "@/lib/getYoutubeID";


const HeroSection = ({ applyLink, slideShow }) => {
  const slides = slideShow.images || [];


const url = slideShow.videoLink || "";
  const videoId = getYouTubeID(url); // Replace with your actual video URL

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(slideShow.videoLink === "" ? false : true);
  const containerRef = useRef(null);
  // Auto slideshow
  useEffect(() => {
    if (showVideo || slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, showVideo]);

  const displaySlides = [...slides, slides[0]];

  return (
    <div className="relative w-full  h-screen overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-transparent pointer-events-none" />

      {/* ================= SLIDESHOW ================= */}
      {!showVideo && (
        <div
          className="flex h-full transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
      )}

      {/* ================= VIDEO MODE ================= */}
      {showVideo && (
        <div className="absolute inset-0 overflow-hidden ">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100%] h-[200%]  max-2xl:w-[200%] max-md:w-[350%] -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
        </div>
      )}

      {/* Cards */}
      <div className="max-md:hidden">
        <HangingCard />
      </div>
      <div className="md:hidden">
        <HangingCardMobile />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <FadeUp>
          <h1 className="font-bold lg:text-[3.986rem] leading-tight text-[1.986rem]">
            Empower your innovation <br />
            with Techno Innovation Challenge <br />
            Cambodia
          </h1>
        </FadeUp>

        <FadeUp>
          <p className="mt-4 text-lg max-w-xl">
            {" "}
            Join our competition program and showcase your STEM-based solutions
            to solve real-world problems. Learn, compete, and win!{" "}
          </p>
        </FadeUp>

        <div className="flex gap-6 mt-10 items-center">
          <FadeUp>
            <Link
              href="#section2"
              className="px-4 py-3 border border-white rounded-sm h-full w-full"
            >
              Learn more
            </Link>
          
          </FadeUp>

          {applyLink?.enabled && (
            <FadeUp>
              <ApplyButton link="/application" />
            </FadeUp>
          )}
        </div>
        {/* 🎥 Play Video Button */}
        {videoId && (
          <FadeUp className="absolute bottom-10">
            <button
              onClick={() => setShowVideo(!showVideo)}
              className="flex flex-col  justify-center  items-center px-5 py-3 bg-white/40 text-black font-semibold rounded-md hover:bg-gray-200 duration-700 ease-in-out hover:scale-105 transition-all"
            >
              {showVideo ? <div className="flex items-center gap-2"><Play size={28} />Slide show</div> : <div className="flex items-center gap-2"><Play size={28} />Play video</div>}
            </button>
          </FadeUp>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
