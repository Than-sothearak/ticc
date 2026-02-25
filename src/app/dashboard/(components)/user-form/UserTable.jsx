"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { DeleteButton } from "../button/DeleteButton";

export default function UserTable({ admins }) {
  const [adminData, setAdminData] = useState(admins);
  useEffect(() => {
    setAdminData(admins);
  }, admins);

  return (
    <>
      <div className="space-y-4 md:w-[580px] w-full m-auto">
        {adminData.map((item) => (
          <Card
            key={item._id}
            className="p-4 flex justify-between items-center"
          >
            <p className="font-semibold">{item.email}</p>
            <div className="flex gap-2">
              {/* Delete button (logic later) */}
              <DeleteButton
                itemName={item.email}
                onDelete={async () => {
                  const res = await fetch(`/api/add-admin/delete/${item._id}`, {
                    method: "DELETE",
                  });

                  const data = await res.json();
                  if (!data.success) {
                    alert(data.message);
                  } else {
                    alert(data.message);
                    setAdminData((prev) =>
                      prev.filter((m) => m._id !== item._id),
                    );
                  }
                }}
              />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
