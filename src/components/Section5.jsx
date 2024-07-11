import React from "react";

const Section5 = () => {
  return (
    <div className={`flex justify-center w-full py-16`}>
      <div className="container grid grid-cols-1 xl:grid-cols-2">
        <div className="container lg:p-10 p-0">
          <h1 className="font-bold text-[2.986rem] leading-tight">Benefits</h1>
          <p className="mt-10">Contestants can benefit from the program</p>
          <br></br>
          <ul className="list-disc ml-4">
            <li>
              Experience international competition program and process, the only
              one competition in Cambodia, which is based on and supported by
              TEXAS A&M University College of Engineering.
            </li>
            <li>
            Understand the complete process _ Innovate, Build, Sell.
            </li>
            <li>
            Utilize their skills to innovate and design a solution to solve the real world problem.
            </li>
            <li>
            Improve ability to identify critical needs/requirements, develop and evaluate conceptual designs.
            </li>
            <li>
            Improve ability for oral presentations and showcasing skills to others.
            </li>
            <li>
            Effective interpersonal skills are critical to proper team formation and thus success.

            </li>
            <li>
            Listening to team members share ideas and concepts to increase innovation. When one person takes over and drives their solution, alternatives are not sufficiently considered.
            </li>
            <li>
            Presentation skills, the ability to describe their solution effectively in a succinct presentation, is required. Good presentations cannot overcome a solution with low innovation.
            </li>
            <li>
            Financial support from AUF (Agence Universitaire de la Francophonie) to make good startup progress.
            </li>
            <li>
            Chances to win many other Awards.
            </li>
            <li>
            Winners has a chance to join in 10 week training of Techno Pre-Incubation Program.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center p-4">
          <img
            src="/images/IMG_2248.JPG"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
