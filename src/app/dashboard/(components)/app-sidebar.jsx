"use client";

import { useState, useEffect } from "react";
import { useIsMobile } from "@/components/hooks/use-mobile";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenuButton,
  SidebarFooter,

} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRightIcon } from "lucide-react";

import {
  analyticNavigation,
  pageNavigation,
  userNavigation,
} from "@/lib/navLinks";
import { Profile } from "./Profile";

import { NavMain } from "./nav-main";
import Link from "next/link";

export function AppSidebar({ session }) {
  const isMobile = useIsMobile();
 
  return (
    <Sidebar className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Sidebar Header with Workspace Dropdown */}
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="w-full justify-between">
              TICC Admin
              <ChevronDown className="ml-auto h-4 w-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
            <DropdownMenuItem >
              <Link href={'/'}>Home page</Link>
            </DropdownMenuItem>
            <DropdownMenuItem >
              <Link href={'https://github.com/Than-sothearak/ticc'}>Github</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        <NavMain nav={pageNavigation} />

      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter>
        <NavMain nav={userNavigation} />
      
        <Profile session={session} />
        <p className="text-sm text-gray-500 text-center">© 2026 TICC</p>
        {isMobile && <p className="text-xs text-gray-400 mt-1">Mobile view</p>}
      </SidebarFooter>
    </Sidebar>
  );
}
