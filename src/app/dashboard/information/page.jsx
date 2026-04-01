import { Content } from "@/models/Content";
import { connectDb } from "@/lib/connectDb";
import InfomationForm from "../(components)/information-form/InfomationForm";
import { ImageManagerForm } from "../(components)/ImageManagerForm";

const InformationPage = async () => {
  await connectDb();

  const data = await Content.findOne().lean();

  if (!data) {
    return (
      <div className="w-full h-screen m-auto flex justify-center items-center">
        Not found
      </div>
    );
  }

  const information = data.information ?? {};
  const posters = data.information?.poster ?? [];
  const contentId = data._id?.toString() ?? "";

  return (
    <div className="space-y-6">
      <InfomationForm data={information} />

      <div className="w-full max-w-[580px] mx-auto">
        <ImageManagerForm
          title="Add poster"
          id={contentId}
          collectionName="content"
          subName="information"
          description="Add an application poster to highlight key details, deadlines, and instructions for users."
          apiEndpoint="/api/content/poster"
          imageKey="poster"
          initialImages={posters}
        />
      </div>
    </div>
  );
};

export default InformationPage;
