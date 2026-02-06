"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Dot, EllipsisVertical } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function Profile({session}) {
  const router = useRouter();

  return (
    <DropdownMenu>
      {/* Trigger: avatar is clickable */}
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none px-4 hover:bg-slate-100 py-2 rounded-md flex justify-between items-center">
        <div className="flex text-xs gap-2 items-center whitespace-nowrap">
            <Avatar>
            <AvatarImage
              src={session.user.imageUrl}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-semibold text-start">{session.user.username}</h1>
          <p>{session.user.email}</p>
          </div>
        </div>
          <EllipsisVertical />
        </button>
      </DropdownMenuTrigger>

      {/* Dropdown menu content */}
      <DropdownMenuContent align="end" className="w-44 bg-white shadow-md border rounded-md p-1">
        <DropdownMenuItem onClick={() => router.push("/profile")}>
          View Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
