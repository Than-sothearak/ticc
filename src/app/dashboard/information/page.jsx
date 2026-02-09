import React from "react";
import InfomationForm from "../(components)/InfomationForm";
import { Content } from "@/models/Content";
import { connectDb } from "@/lib/connectDb";
import { InformationPosterForm } from "../(components)/InformationPosterForm";

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
