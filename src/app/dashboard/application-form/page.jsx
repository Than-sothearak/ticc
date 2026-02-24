import React from "react";
import { connectDb } from "@/lib/connectDb";
import { Content } from "@/models/Content";
import ApplicationForm from "../(components)/application-form/ApplicationForm";
import { ImageManagerForm } from "../(components)/ImageManagerForm";

const cmsPage = async () => {
  await connectDb();
  const data = await Content.findOne();

  return (
    <div className="mt-8 lg:px-16 px-2 space-y-6">
      <ApplicationForm data={JSON.parse(JSON.stringify(data.apply_link))} />
    </div>
  );
};

export default cmsPage;
