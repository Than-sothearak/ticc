"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <div
        className={`z-0 h-[600px] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/images/IMG_2637.JPG')]`}
      >
        <div className="text-white p-4 absolute w-full bg-black/10 flex flex-col items-center">
          <div>
            <h1 className="font-bold text-[54px]">
              Techno Innovation Challenge Cambodia
            </h1>
            <div>
              <h3 className="text-2xl">Catalyzing the</h3>
              <h2 className="text-4xl font-bold">Future of Innovation</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 md:gap-10 justify-center items-baseline py-4 px-10 lg:px-2">
        <div className="h-full w-[72px]">
          <img src="/images/6.png"></img>
        </div>

        <div className="h-full w-[90px]">
          <img src="/images/2.png"></img>
        </div>

        <div className="h-full w-[90px]">
          <img src="/images/3.png"></img>
        </div>

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

      <div className="flex flex-col min-h-screen">
        <div className="w-full text-start">
          <div className="bg-[#0f51a1] flex justify-center">
            <div className=" w-[75rem] px-6 sm:px-20">
              <h1 className="w-full text-start text-white font-blod py-6 md:text-[34px]">
                What is Techno Innovation Challenge Cambodia?
              </h1>
            </div>
          </div>
          <div className="bg-[#e5e5e5] flex justify-center text-justify">
            <div className="w-[75rem] px-6 sm:px-20 p-6">
              <p className="w-full ">
                Techno Innovation Challenge Cambodia is a competition program
                which students from different skills team up, design, build and
                pitch their innovative STEM-based solutions for solving a real
                world problem within 4 weeks duration, organized by Institute of
                Technology of Cambodia. Teams need to prove and test their ideas
                and prototypes through a customer interview and some business
                research to compete with other teams on Semi Final to advance to
                the final round. The first winning team will receive USD 1,250
                in cash prize, the second winning team will receive USD 1,000
                and the third winning team will receive USD 750.
              </p>
              <br></br>
              <p>
                The competition program is based on and supported by{" "}
                <a
                  className="text-blue-900 underline decoration-1"
                  href="https://engineering.tamu.edu/"
                >
                  {" "}
                  TEXAS A&M University College of Engineering{" "}
                </a>{" "}
                where students focus on designing, building, and then selling a
                solution to a real world problem that has been provided by an
                industry or Agency partner. It is found to be the spark that
                gets students excited, inspired, and provides the energy to
                continue developing their solution in subsequent effort.
              </p>

              <br></br>
              <p>
                The challenge event will be four-weekend duration that is mostly
                performed over a weekend for universities students to team up,
                design, build and pitch their innovative solutions under one of
                the themes: Internet of Thing or e-Commerce (ICT), Education or
                Health, and Agriculture or Energy. It has a transformational
                effect in students by:
              </p>
              <br></br>
              <li>
                Providing them necessary technology, materials, mentorship and
                training to support their innovation.
              </li>
              <li>
                Working in teams where they have to share ideas, brainstorm, and
                deliver the steps toward a solution in deadlines staged
                throughout the experience
              </li>
              <li>
                Meeting deadlines requiring teams to make decisions about their
                solution, determine a path toward implementation, and build the
                solution according to a schedule
              </li>
              <li>
                Developing and practicing effective communication skills as they
                “sell” their solution to a panel of judges as they compete for
                placement in the competition. Competition provides the focus and
                is like a pitch they will need to compete for funding for their
                project in industry or as a startup.
              </li>
              <li>
                Providing them a situation that is as much like their first job
                in a high performance team as possible in a short period in a
                university setting
              </li>
              <br></br>
              <p>
                TICC is to push students’ Innovation into next level by
                providing them an opportunity to perform design and acquire
                skills essential to becoming successful innovation leaders and
                thus realizing that they are capable of developing complete
                solutions.
              </p>
              <br></br>
              <p>
                After the challenge, student teams especially engineering
                students have minimum viable products (prototypes) that are
                working, useful, and validated from customer and business
                perspectives.
              </p>
            </div>
          </div>

          <div className="flex justify-center text-justify">
            <div className="w-full text-white h-[600px] grid bg-cover bg-no-repeat bg-[url('/images/IMG_1326.JPG')]">
              <div class="col-start-1 row-start-1 bg-gray-800 bg-opacity-80 w-full h-full"></div>
              <div class="col-start-1 row-start-1 mx-auto my-auto">
                <div className="w-[75rem] sm:px-20 flex gap-10 flex-col">
                  <div>
                    <h1 class="font-bold text-2xl mb-4">Objective</h1>
                    <p>
                      Techno Innovation Challenge Cambodia Aims to be the
                      vibrant platform where Young Cambodian Students come to
                      activate their potential and move their leadership,
                      creativity and Innovation to the next level. And revealing
                      Student’s potential to all Stakeholders and Interested
                      Bodies:
                    </p>
                    <br></br>
                    <li>
                      Promote both technical and entrepreneurship on STEM,
                      especially Engineering and Technology.
                    </li>
                    <li>
                      Promote students’ Innovation and make best use of their
                      skills.
                    </li>
                    <li>
                      Promote innovative a STEM-based solution for solving a
                      real world problem.
                    </li>
                  </div>

                  <div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
