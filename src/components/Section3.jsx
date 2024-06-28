import React from "react";
import { GiTeamIdea } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";

const Section3 = () => {
  return (
    <div className="w-full lg:h-[1024px] h-full flex justify-center text-center">
      <div className="w-full text-white h-full grid bg-cover bg-no-repeat bg-[url('/images/IMG_1326.JPG')]">
        <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-80 w-full h-full"></div>
        <div className="col-start-1 row-start-1 mx-auto my-auto">
          <div className="container sm:px-20 px-6 flex gap-10 flex-col">
            <div className="flex flex-col gap-10 p-10">
              <h1 className="font-bold text-[2.986rem] leading-tight text-center">
                Objectives
              </h1>
              <p>
                Techno Innovation Challenge Cambodia Aims to be the vibrant
                platform where Young Cambodian Students come to activate their
                potential and move their leadership, creativity and Innovation
                to the next level. And revealing Student’s potential to all
                Stakeholders and Interested Bodies:
              </p>

              <div className="flex flex-col gap-10 lg:flex-row">
                <div className="flex flex-col items-center gap-6 border p-10 rounded-md w-full">
                  <GrTechnology size={68} />
                  Promote both technical and entrepreneurship on STEM,
                  especially Engineering and Technology.
                </div>
                <div className="flex flex-col items-center gap-6 border p-10 rounded-md w-full">
                  <GiTeamIdea size={68} />
                  Promote students’ Innovation and make best use of their
                  skills.
                </div>
                <div className="flex flex-col items-center gap-6 border p-10 rounded-md w-full">
                  <BiWorld  size={68} />
                  Promote innovative a STEM-based solution for solving a real
                  world problem.
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
