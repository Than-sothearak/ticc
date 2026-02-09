import React from "react";

import { InfoPageComponent } from "@/components/InfoPageComponent";
import { connectDb } from "@/lib/connectDb";
import { Content } from "@/models/Content";
const page = async () => {
  await connectDb();
  const data = await Content.findOne()
  return <InfoPageComponent 
  information={JSON.parse(JSON.stringify(data.information))} 
  applyLink={JSON.parse(JSON.stringify(data.apply_link))}
  />;
};

export default page;
