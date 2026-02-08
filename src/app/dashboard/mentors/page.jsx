export const dynamic = "force-dynamic";
import React from "react";
import { MentorTabe } from "../(components)/MentorTable";
import { connectDb } from "@/lib/connectDb";
import { Mentor } from "@/models/Mentor";


const mentorPage = async ({ searchParams }) => {

  await connectDb()
   const { query = "", year, sort = "asc" } = searchParams || {};

  // Build MongoDB query
  const mongoQuery = {};
  if (query) {
    mongoQuery.name = { $regex: query, $options: "i" }; // case-insensitive search
  }

if (year && year !== "all") {
  mongoQuery.year = Number(year);
}

  // Fetch mentors from DB with sorting
  const mentors = await Mentor.find(mongoQuery).sort({ year: sort === "asc" ? 1 : -1 });
  // Get unique years for dropdown
  const uniqueYears = await Mentor.distinct("year");
  return (
    <div className="mt-8 space-y-6 lg:px-16 px-2">

     <MentorTabe data={JSON.parse(JSON.stringify(mentors))} years={uniqueYears} />
   
    </div>
  );
};

export default mentorPage;
