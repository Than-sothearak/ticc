import React from "react";

const Section4 = () => {
  return (
    <div className={`flex justify-center w-full pt-16`}>
      <div className="container grid grid-cols-1 xl:grid-cols-2">
        <div className="container p-10">
          <h1 className="font-bold text-[2.986rem] leading-tight">
            Backgorund
          </h1>
          <p className="mt-10">
            Institute of Technology of Cambodia (ITC) is a public engineering
            school in Cambodia with a well-known and recognized achievement in
            Cambodia Higher education industry. ITC has a clear long objective
            and mission. The fourth objective of ITC is to train engineers to
            innovation and entrepreneurship, in order to create high skilled
            jobs and answers to future challenges.
          </p>
          <br></br>
          <p>
            In 2017, ITC was pleased to be selected the only one to pilot the
            MS2W Institutional Innovation Challenge, which is named as “Techno
            Innovation Challenge Cambodia” in Cambodia during the first quarter
            of FY2019 by the USAID Connecting the Mekong through the Education
            and Training (USAID COMET) Project to be organized in November 18 -
            December 9, 2017, at Institute of Technology of Cambodia, Phnom
            Penh, Cambodia. The program is based on Texas A&M University
            (TAMU)’s Innovation Challenge, called <a href="https://engineering.tamu.edu/student-life/aggies-invent/index.html" className="text-blue-700 underline">Aggies Invent.</a>
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKFHgAvqJFkyraBofQTNx-A1oi5WL5LcJDA&s"
            className="w-96"
          />

          <img
            src="https://marvel-b1-cdn.bc0a.com/f00000000294758/www.midland.edu/academics/images/university-partnerships/tamu-academy/tamu-engineering-logo.png"
            className="w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
