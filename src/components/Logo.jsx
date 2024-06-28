import React from "react";

const Logo = () => {
  return (
    <div className="container py-16 px-10">
      <h1 className="font-bold text-[2.986rem] leading-tight text-center">
        Our Partners and Supports
      </h1>
      <div className="flex flex-wrap justify-start lg:justify-center gap-20 md:gap-10 mt-10">
        <div className="">
          <h2>Supported by</h2>
          <div className="flex w-full gap-4 justify-start items-baseline mt-4">
            <div className="h-full w-[72px]">
              <img src="/images/6.png"></img>
            </div>

            <div className="h-full w-[90px]">
              <img src="/images/2.png"></img>
            </div>

            <div className="h-full w-[90px]">
              <img src="/images/3.png"></img>
            </div>
          </div>
        </div>

        <div className="border"></div>

        <div className="">
          <h2>Funded by</h2>
          <div className="flex flex-wrap gap-4 justify-start items-baseline mt-6">
            <div className="h-full w-[260px]">
              <img src="/images/1.png"></img>
            </div>

            <div className="h-full w-[120px]">
              <img src="/images/5.png"></img>
            </div>

            <div className="h-full w-[158px]">
              <img src="/images/4.png"></img>
            </div>
          </div>
        </div>

        <div className="border"></div>

        <div className="">
          <h2>Partner</h2>
          <div className="flex gap-4 justify-start items-baseline mt-6">
            <div className="h-full w-[120px]">
              <img src="/images/7.png"></img>
            </div>
          </div>
        </div>
        <div className="border"></div>
        <div className="">
          <h2>Organized by</h2>
          <div className="flex gap-4 justify-start items-baseline mt-6">
            <div className="h-full w-[90px]">
              <img src="/images/itc.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
