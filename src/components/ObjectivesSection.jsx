import FadeUp from "./motion/FadeUp";
import StaggerSection from "./motion/StaggerSection";
import { GrTechnology } from "react-icons/gr";
import { GiTeamIdea } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { staggerItem } from "@/lib/motion";

const ObjectivesSection = () => {
  return (
    <div className="w-full lg:h-[1024px] h-full flex justify-center text-center">
      <div className="w-full text-white h-full grid bg-cover bg-no-repeat bg-[url('/images/IMG_2531.JPG')]">
        <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-80 w-full h-full"></div>
        <div className="col-start-1 row-start-1 mx-auto my-auto">
          <div className="container sm:px-20 px-6 flex flex-col gap-10">

            {/* Heading & Description */}
            <div className="flex flex-col gap-10 p-10">
              <FadeUp>
                <h1 className="font-bold text-[2.986rem] leading-tight text-center">
                  Objectives
                </h1>
              </FadeUp>

              <FadeUp>
                <p>
                  Techno Innovation Challenge Cambodia aims to be the vibrant
                  platform where young Cambodian students activate their potential
                  and move their leadership, creativity, and innovation to the next level.
                </p>
              </FadeUp>

              {/* Objective Cards */}
              <StaggerSection className="flex flex-col gap-10 lg:flex-row">
                <FadeUp variants={staggerItem} className="flex flex-col items-center gap-6 border p-10 rounded-md w-full bg-white text-gray-800">
                  <div className="flex items-center justify-center rounded-full bg-blue-500 text-white w-16 h-16">
                    <GrTechnology size={32} />
                  </div>
                  <p className="text-center">
                    Promote both technical and entrepreneurship on STEM,
                    especially Engineering and Technology.
                  </p>
                </FadeUp>

                <FadeUp variants={staggerItem} className="flex flex-col items-center gap-6 border p-10 rounded-md w-full bg-white text-gray-800">
                  <div className="flex items-center justify-center rounded-full bg-blue-500 text-white w-16 h-16">
                    <GiTeamIdea size={32} />
                  </div>
                  <p className="text-center">
                    Promote students’ innovation and make best use of their skills.
                  </p>
                </FadeUp>

                <FadeUp variants={staggerItem} className="flex flex-col items-center gap-6 border p-10 rounded-md w-full bg-white text-gray-800">
                  <div className="flex items-center justify-center rounded-full bg-blue-500 text-white w-16 h-16">
                    <BiWorld size={32} />
                  </div>
                  <p className="text-center">
                    Promote innovative STEM-based solutions for solving real-world problems.
                  </p>
                </FadeUp>
              </StaggerSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesSection;
