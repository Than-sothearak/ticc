import React from "react";
import FadeUp from "./motion/FadeUp";
import { Partner } from "@/models/Partner";
import Image from "next/image";
import StaggerSection from "./motion/StaggerSection";

const Logo = async () => {
  const data = await Partner.findOne();
  const logos = JSON.parse(JSON.stringify(data));
  return (
    <div className="container py-16">
      {/* Title */}
      <FadeUp>
        <h1 className="font-bold text-[2.986rem] leading-tight text-center">
          Our Partners and Supports
        </h1>
      </FadeUp>

      <div className="flex flex-wrap justify-start lg:justify-center gap-20 md:gap-10 mt-10">
        {/* Supported by */}
        <FadeUp>
          <div className="m-auto w-full gap-4 flex justify-center items-center flex-col">
            <h2 className="text-center">Our program is supported by Ministry of Education, Youth, and Sports, Ministry of Industry Science,
Technology and Innovation, Ministry of Posts and Telecommunications. <br />Funded by Khmer Enterprise, Smart Axiata, The Foreign Trade Bank of
Cambodia (FTB).<br /> Organized by ITC.</h2>
          
       <StaggerSection className="flex gap-2 lg:gap-6 items-end">
  {logos.logos.map((item, index) => (
    <FadeUp key={item}>
      <div
        className={`flex items-center justify-center 
          ${index === 0 ? "h-24 max-sm:h-20" : "h-20 "}
        `}
      >
        <Image
          src={item}
          alt="logo"
          height={192}
          width={192}
          className="object-contain w-full h-full max-sm:h-20"
        />
      </div>
    </FadeUp>
  ))}
</StaggerSection>

     
          </div>
        </FadeUp>
      </div>
    </div>
  );
};

export default Logo;
