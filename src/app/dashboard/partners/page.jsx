import { connectDb } from "@/lib/connectDb";
import { Partner } from "@/models/Partner";
import { ImageManagerForm } from "../(components)/ImageManagerForm";

export default async function SettingPage() {
  await connectDb();
  const partners = await Partner.findOne();

  return (
    <div className="flex flex-col gap-4 mt-8 items-center m-auto  w-full px-2">
      <div className="md:w-[580px] w-full">
        <ImageManagerForm
          title="Add logo partner"
          id={JSON.parse(JSON.stringify(partners._id))}
          collectionName="partner"
          decription="Add a logo for show the the sponsor section"
          apiEndpoint="/api/partner"
          imageKey="logos"
          initialImages={JSON.parse(JSON.stringify(partners?.logos)) || []}
        />
      </div>
    </div>
  );
}
