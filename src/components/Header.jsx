import React from "react";

const Header = () => {
  return (
    <div
      className={`z-0 h-[1024px] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/images/IMG_2637.JPG')]`}
    >
      <div className="bg-gray-800 bg-opacity-80 w-full h-full"></div>
      <div className="text-white text-center p-4 absolute container flex flex-col items-center ">
        <div className="w-full">
          <h1 className="font-bold text-[2.986rem]">
            Empower your innovation <br></br> with Techno Innovation Challenge{" "}
            <br></br> Cambodia
          </h1>
          <div>
            <p className="text-[1rem] mt-4">
              Join our competition program and showcase your STEM-based
              solutions to solve real-world problems. Learn, compete, and win!
            </p>
          </div>
        </div>
        <div className="container flex justify-center mt-10 gap-6">
          <button className="px-4 py-3 rounded-sm border-white border">
            <a href="#section2">Learn more</a>
          </button>
          <button className="px-4 py-3 rounded-sm bg-[#FF9A00]">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
