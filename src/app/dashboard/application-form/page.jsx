import React from "react";
import { connectDb } from "@/lib/connectDb";
import { Content } from "@/models/Content";
import ApplicationForm from "../(components)/application-form/ApplicationForm";

const cmsPage = async () => {
  await connectDb();
  const data = await Content.findOne().lean();

  if (!data) {
         return <div className="w-full h-screen m-auto flex justify-center items-center">Not found</div>;
      }
  
    const applyLink = data.apply_link ?? {};

  return (
    <div className="mt-8 lg:px-16 px-2 space-y-6">
      <ApplicationForm data={applyLink} />
    </div>
  );
};

export default cmsPage;
