import React from "react";
import { Content } from "@/models/Content";
import { connectDb } from "@/lib/connectDb";
import InfomationForm from "../(components)/information-form/InfomationForm";
import { ImageManagerForm } from "../(components)/ImageManagerForm";

const informationPage = async () => {
  await connectDb();
  const data = await Content.findOne();
  return (
    <div>
      <InfomationForm data={JSON.parse(JSON.stringify(data.information))} />
      {/* <InformationPosterForm data={JSON.parse(JSON.stringify(data))}/> */}
      <div className="md:w-[580px] w-full m-auto my-4">
        <ImageManagerForm
          title="Add poster"
          id={JSON.parse(JSON.stringify(data._id))}
          collectionName="content"
          subName="information"
          decription="Add an application poster to highlight key details, deadlines, and instructions for users."
          apiEndpoint="/api/content/poster"
          imageKey="poster"
          initialImages={
            JSON.parse(JSON.stringify(data?.information?.poster)) || []
          }
        />
      </div>
    </div>
  );
};

export default informationPage;
