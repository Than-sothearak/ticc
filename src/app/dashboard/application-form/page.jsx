import React from "react";
import { connectDb } from "@/lib/connectDb";
import { Content } from "@/models/Content";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ApplicationForm from "../(components)/application-form/ApplicationForm";
import { ImageManagerForm } from "../(components)/ImageManagerForm";

const cmsPage = async () => {
  await connectDb();
  const data = await Content.findOne();

  return (
    <div className="mt-8 lg:px-16 px-2 space-y-6">
      <ApplicationForm data={JSON.parse(JSON.stringify(data.apply_link))} />

      <div className="md:w-[580px] w-full m-auto">
        <ImageManagerForm
          title="Add slider"
          id={JSON.parse(JSON.stringify(data._id))}
          collectionName="content"
          subName="slide_show"
          decription="Upload impactful images for the hero slider to capture attention and promote important highlights on the homepage."
          apiEndpoint="/api/content/slideshow"
          imageKey="images" //Array images
          initialImages={
            JSON.parse(JSON.stringify(data?.slide_show?.images)) || []
          }
        />
      </div>
    </div>
  );
};

export default cmsPage;
