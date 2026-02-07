import React from "react";
import StaggerSection from "./motion/StaggerSection";
import FadeUp from "./motion/FadeUp";
import { staggerItem } from "@/lib/motion";

export default function ProcessDiagram() {
  return (
    <div className="">
    <StaggerSection>
        <div className="grid grid-cols-3 gap-6 items-start">
        {/* Step 1 */}
        <div className="relative bg-primary text-white rounded-2xl shadow-lg p-5">
          <FadeUp variants={staggerItem}>
            <h2 className="text-lg font-semibold mb-2">1. IDE (Intensive Design Experience)</h2>
          </FadeUp>
         <StaggerSection>
           <ul className="list-disc list-inside text-sm space-y-1">
            <FadeUp variants={staggerItem}>
              <li>Team</li>
            </FadeUp>
            <FadeUp variants={staggerItem} >
              <li>Ideas</li>
            </FadeUp>
            <FadeUp variants={staggerItem}>
              <li>Design</li>
            </FadeUp>
            <FadeUp variants={staggerItem}>
              <li>Decide</li>
            </FadeUp>
          </ul>
         </StaggerSection>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[16px] border-b-[16px] border-l-[16px] border-t-transparent border-b-transparent border-l-primary" />
        </div>

        {/* Step 2 */}
     <FadeUp>
         <div className="relative bg-primary text-white rounded-2xl shadow-lg p-5">
          <h2 className="text-lg font-semibold mb-2">2. MVP – Prototype</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Information / Skills Gathered</li>
            <li>Sprint to Build</li>
          </ul>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[16px] border-b-[16px] border-l-[16px] border-t-transparent border-b-transparent border-l-primary" />
        </div>
     </FadeUp>

        {/* Step 3 */}
      <FadeUp variants={staggerItem}>
          <div className="bg-primary text-white rounded-2xl shadow-lg p-5">
          <h2 className="text-lg font-semibold mb-2">3. Business & Pitching</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Business / Community Needs</li>
            <li>Pitching</li>
          </ul>
        </div>
      </FadeUp>
      </div>

      {/* Supporting Work */}
      <div className="grid grid-cols-2 gap-6 mt-8">
       <FadeUp variants={staggerItem}>
         <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="font-semibold mb-2">Independent Team Work</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Seek Resources & Support</li>
            <li>Gather Material</li>
          </ul>
        </div>
       </FadeUp>
       <FadeUp variants={staggerItem}>
         <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="font-semibold mb-2">Business Research</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Market & Channels</li>
            <li>Competitors</li>
            <li>Costs</li>
          </ul>
        </div>
       </FadeUp>
      </div>

      {/* Customer Interviews */}
   <FadeUp variants={staggerItem}>
       <div className="mt-8">
        <div className="bg-primary text-white text-center rounded-2xl py-3 shadow">
          Customer Interviews
        </div>
      </div>
   </FadeUp>
    </StaggerSection>
    </div>
  );
}
