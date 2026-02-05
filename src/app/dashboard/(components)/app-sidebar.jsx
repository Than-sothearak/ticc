"use client";

import { useIsMobile } from "@/components/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { analyticNavigation, pageNavigation, userNavigation } from "@/lib/navLinks";
import { Profile } from "./Profile";


export function AppSidebar({session}) {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const router = useRouter();
  const currentBasePath = pathname.split("/").filter(Boolean).slice(0, 2).join("/");

const renderNavigation = (nav) => {
 const sortedLinks = [...nav.links].sort((a, b) => a.path.length - b.path.length);

  return (
    <SidebarGroup title={nav.name}>
      <SidebarMenu>
        {sortedLinks.map((link) => {
           const itemBasePath = link.path.split("/").filter(Boolean).slice(0, 2).join("/");

          const isActive = currentBasePath === itemBasePath;

          return (
            <SidebarMenuItem key={link.path}>
              <SidebarMenuButton
                onClick={() => router.push(link.path)}
                className={cn(
                  "flex items-center w-full px-4 py-2 rounded hover:bg-gray-100 transition-colors",
                  isActive ? "bg-gray-200 font-bold text-black" : "text-gray-700"
                )}
              >
                <span className={cn("mr-2", isActive ? "font-bold text-black" : "text-gray-500")}>
                  {link.icon}
                </span>
                {link.name}
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};


  return (
    <Sidebar className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Sidebar Header with Workspace Dropdown */}
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="w-full justify-between">
              Select Workspace
              <ChevronDown className="ml-auto h-4 w-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
            <DropdownMenuItem onClick={() => alert("Switched to Acme Inc")}>Acme Inc</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert("Switched to Beta LLC")}>Beta LLC</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        {renderNavigation(pageNavigation)}
        {renderNavigation(analyticNavigation)}
      
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter>
        {renderNavigation(userNavigation)}
        <Profile session={session} />
        <p className="text-sm text-gray-500 text-center">© 2026 My App</p>
        {isMobile && <p className="text-xs text-gray-400 mt-1">Mobile view</p>}
      </SidebarFooter>
    </Sidebar>
  );
}
