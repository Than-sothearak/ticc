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
            <h2>Supported by</h2>
          
           <StaggerSection className="flex gap-4 items-end">
               {logos.logos.map((item) => (
              <FadeUp      key={item}>
                  <div
             
                  className="h-32 flex items-center justify-center "
                >
                  <Image
                    src={item}
                    alt="logo"
                    height={192} // same as Tailwind h-48
                    width={192} // initial width placeholder
                    style={{ height: "100%", width: "auto" }}
                    className="object-contain "
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
