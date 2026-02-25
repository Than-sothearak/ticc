import React from "react";
import UserForm from "../(components)/user-form/UserForm";
import UserTable from "../(components)/user-form/UserTable";
import { connectDb } from "@/lib/connectDb";
import { Admin } from "@/models/Admin";

const userPage = async () => {
  await connectDb();
  const admins = await Admin.find().lean();
  return (
    <div className="space-y-6">
      <UserForm />
      <div className="max-h-[80vh] overflow-y-auto px-2">
        <UserTable admins={JSON.parse(JSON.stringify(admins))} />
      </div>
    </div>
  );
};

export default userPage;
