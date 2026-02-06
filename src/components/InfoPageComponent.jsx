"use client";
import React from "react";
import Image from "next/image";
import ProcessDiagram from "./ProcessDiagramComponent";
import FadeUp from "./motion/FadeUp";
import { staggerItem } from "@/lib/motion";

export const InfoPageComponent = () => {
  const schedule = [
    { weekend: 1, date: "June 1-2, 2019" },
    { weekend: 2, date: "June 8, 2019" },
    { weekend: 3, date: "June 15, 2019" },
    { weekend: 4, date: "June 22, 2019" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Competition Process */}
      <section className="flex flex-col items-start gap-6 mt-16">
        <div className="">
          <FadeUp variants={staggerItem}>
            <h2 className="text-4xl font-bold mb-4">Competition Process</h2>
          </FadeUp>
          <FadeUp variants={staggerItem}>
            <p>
              The competition runs for 4 weekends, where participants will
              learn, develop prototypes, and showcase their solutions.
            </p>
          </FadeUp>
        </div>
        <FadeUp>
          <div className="relative h-full w-full">
            <Image
              src="/images/IMG_2639.JPG"
              alt="Competition Process Image"
              width={1200} // image original width
              height={800} // image original height
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
        </FadeUp>
      
      </section>
  <ProcessDiagram />
      {/* Schedule */}
      <section className="space-y-4">
        <h2 className="text-4xl font-bold mb-4">4-Week Program & Schedule</h2>
        <ul className="list-disc list-inside space-y-2">
          {schedule.map((item) => (
            <li key={item.week} className="text-lg">
              <strong>Weekend {item.week}:</strong> {item.date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
