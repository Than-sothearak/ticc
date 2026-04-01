import { connectDb } from "@/lib/connectDb";
import { Partner } from "@/models/Partner";
import { ImageManagerForm } from "../(components)/ImageManagerForm";
import { notFound } from "next/navigation";

export default async function SettingPage() {
  await connectDb();
  const partners = await Partner.findOne().lean();

  if (!partners) {
    return <div className="w-full h-screen m-auto flex justify-center items-center">Not found</div>;
  }

  const logos = partners?.logos ?? [];
  const partnerId = partners._id?.toString() ?? "";

  return (
    <div className="flex flex-col gap-4 mt-8 items-center m-auto  w-full px-2">
      <div className="md:w-[580px] w-full">
        <ImageManagerForm
          title="Add logo partner"
          id={partnerId}
          collectionName="partner"
          decription="Add a logo for show the the sponsor section"
          apiEndpoint="/api/partner"
          imageKey="logos"
          initialImages={logos}
        />
      </div>
    </div>
  );
}
