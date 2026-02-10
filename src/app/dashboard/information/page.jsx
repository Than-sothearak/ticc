import React from "react";
import { Content } from "@/models/Content";
import { connectDb } from "@/lib/connectDb";
import InfomationForm from "../(components)/information-form/InfomationForm";
import { InformationPosterForm } from "../(components)/information-form/InformationPosterForm";

const informationPage = async () => {
  await connectDb();
  const data = await Content.findOne();
  return (
    <div>
      <InfomationForm data={JSON.parse(JSON.stringify(data.information))} />
      <InformationPosterForm data={JSON.parse(JSON.stringify(data))}/>
    </div>
  );
};

export default informationPage;
