import React from "react";
import SlideShowForm from "../(components)/slide-show-form/SlideShowForm";
import { connectDb } from "@/lib/connectDb";
import { Content } from "@/models/Content";
import { ImageManagerForm } from "../(components)/ImageManagerForm";

const slideShowPage = async () => {
  await connectDb();
  const data = await Content.findOne().lean();

  if (!data) {
    return (
      <div className="w-full h-screen m-auto flex justify-center items-center">
        Not found
      </div>
    );
  }

  const slideShow = data.slide_show ?? {};
  const images = data?.slide_show?.images ?? [];
  const contentId = data._id?.toString() ?? "";

  return (
    <div className="mt-8 lg:px-16 px-2 space-y-6">
      <SlideShowForm data={slideShow} />
      <div className="md:w-[580px] w-full m-auto">
        <ImageManagerForm
          title="Add slider"
          id={contentId}
          collectionName="content" // Assuming the backend expects 'content' as the collection name
          subName="slide_show" // Assuming the backend expects 'slide_show' "content.slide_show.images"
          imageKey="images" //Array images key in the content model
          decription="Upload impactful images for the hero slider to capture attention and promote important highlights on the homepage."
          apiEndpoint="/api/content/slideshow"
          initialImages={images}
        />
      </div>
    </div>
  );
};

export default slideShowPage;
