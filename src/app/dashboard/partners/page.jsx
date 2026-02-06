import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { PartnerImageForm } from "../(components)/PartnerForm";
import { connectDb } from "@/lib/connectDb";
import { Partner } from "@/models/Partner";

export default async function SettingPage() {
  await connectDb()
  const partners = await Partner.findOne()
  
  return (
    <div className="flex flex-col gap-4 mt-8 items-center m-auto  w-full px-2">
      <Card className="md:w-[580px] w-full">
        <CardHeader>
          <CardTitle>Add partner logo</CardTitle>
        </CardHeader>

       <PartnerImageForm partnerData={JSON.parse(JSON.stringify(partners))} />
      </Card>
    </div>
  );
}
