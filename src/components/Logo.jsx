import React from "react";
import FadeUp from "./motion/FadeUp";

const Logo = () => {
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
          <div>
            <h2>Supported by</h2>
            <div className="flex gap-4 mt-4 items-baseline">
              <img src="/images/6.png" className="w-[72px]" />
              <img src="/images/2.png" className="w-[90px]" />
              <img src="/images/3.png" className="w-[90px]" />
            </div>
          </div>
        </FadeUp>

        <div className="border" />

        {/* Funded by */}
        <FadeUp>
          <div>
            <h2>Funded by</h2>
            <div className="flex flex-wrap gap-4 mt-6 items-baseline">
              <img src="/images/1.png" className="w-[260px]" />
              <img src="/images/5.png" className="w-[120px]" />
              <img src="/images/4.png" className="w-[158px]" />
            </div>
          </div>
        </FadeUp>

        <div className="border" />

        {/* Partner */}
        <FadeUp>
          <div>
            <h2>Partner</h2>
            <div className="flex gap-4 mt-6 items-baseline">
              <img src="/images/7.png" className="w-[120px]" />
            </div>
          </div>
        </FadeUp>

        <div className="border" />

        {/* Organized by */}
        <FadeUp>
          <div>
            <h2>Organized by</h2>
            <div className="flex gap-4 mt-6 items-baseline">
              <img src="/images/itc.png" className="w-[90px]" />
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
};

export default Logo;
