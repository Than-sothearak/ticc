"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const swingCardsSmall = [
  {
    label: "CREATIVITY",
    rotate: [4, -4, 5],
    duration: 4,
    color: "bg-pink-400",
    wireHeight: 100,
  },
  {
    label: "INNOVATION",
    rotate: [6, -5, 7],
    duration: 5,
    color: "bg-blue-500",
    wireHeight: 50,
  },
  {
    label: "TECHNOLOGY",
    rotate: [5, -6, 6],
    duration: 4.5,
    color: "bg-green-400",
    wireHeight: 340,
  },
  {
    label: "IDEATION",
    rotate: [3, -3, 4],
    duration: 4.2,
    color: "bg-purple-500",
    wireHeight: 410,
  },
  {
    label: "AWARDS",
    rotate: [7, -6, 5],
    duration: 5.2,
    color: "bg-yellow-400",
    wireHeight: 230,
  },
  {
    label: "BUSINESS",
    rotate: [5, -6, 6],
    duration: 4.5,
    color: "bg-orange-400",
    wireHeight:120,
  },
];



export const HangingCardMobile = () => {

  const swingCards = swingCardsSmall
  return (
    <div className="absolute top-0 left-1/2 z-30 w-full max-w-lg -translate-x-1/2 bg-black">
      {/* Hanging Innovation Card */}
      {swingCards.map((item, index) => {
        const SPACING = 50
        const offset = (index - (swingCards.length - 1) / 2) * SPACING;
        const wireHeight =
          Math.floor(Math.random() * 80) +
          item.wireHeight
        return (
          <div
            key={item.label}
            className="absolute top-0 left-[38%]  z-10 "
            style={{ transform: `translateX(${offset}px)` }}
          >
            {/* Wire */}
            <motion.div
              className="mx-auto w-[2px] bg-gray-300/30"
              initial={{ height: 0 }}
              animate={{ height: wireHeight, rotate: 0.1 }} // or rotate: 0 if you want no swing after
              transition={{
                height: {
                  duration: 0.8,
                  yoyo: true,
                  ease: "easeInOut",
                },
              }}
            />
            {/* Swing Card */}
            <motion.div
              className={`${item.color} backdrop-blur-md text-white rounded-xl shadow-2xl p-3 w-full text-center`}
              style={{ transformOrigin: "top center" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: item.rotate,
              }}
              transition={{
                opacity: { duration: 1 },
                y: { duration: 1 },
                rotate: {
                  duration: item.duration,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }}
            >
              <h3 className="text-sm font-bold">{item.label}</h3>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
