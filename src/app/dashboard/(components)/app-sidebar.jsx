"use client";

import { useState, useEffect } from "react";
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
import { ChevronDown, ChevronRightIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  analyticNavigation,
  pageNavigation,
  userNavigation,
} from "@/lib/navLinks";
import { Profile } from "./Profile";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function AppSidebar({ session }) {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const router = useRouter();

  // ✅ Hydration fix
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Only compute currentBasePath after mounted
  const currentBasePath = mounted
    ? pathname?.split("/").filter(Boolean).slice(0, 2).join("/") || ""
    : "";

  const renderNavigation = (nav) => {
    if (!mounted) return null; // render nothing on server

    return (
      <SidebarGroup title={nav.name}>
        <SidebarMenu>
          {nav.links.map((link, index) => {
            // 👉 Parent with sublinks
            if (link.sublink) {
              const isParentActive = link.sublink.some((sub) => {
                const subBasePath = sub.path
                  .split("/")
                  .filter(Boolean)
                  .slice(0, 2)
                  .join("/");
                return currentBasePath === subBasePath;
              });

              return (
                <SidebarMenuItem key={`parent-${index}`}>
                  <Collapsible defaultOpen={isParentActive} className=" overflow-hidden">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="group flex items-center justify-between w-full px-4 py-2 rounded">
                        <span className="flex items-center">
                          <span className="mr-2">{link.icon}</span>
                          {link.name}
                        </span>
                        <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
            
                      <SidebarMenu className="ml-6 mt-1 ">
                        {link.sublink.map((sub) => {
                          const subBasePath = sub.path
                            .split("/")
                            .filter(Boolean)
                            .slice(0, 2)
                            .join("/");

                          const isSubActive = currentBasePath === subBasePath;

                          return (
                            <SidebarMenuItem key={sub.path}>
                              <SidebarMenuButton
                                onClick={() => router.push(sub.path)}
                                className={cn(
                                  "text-sm",
                                  isSubActive
                                    ? "bg-gray-100 font-semibold"
                                    : "hover:bg-gray-50",
                                )}
                              >
                                {sub.icon}
                                {sub.name}
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarMenu>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuItem>
              );
            }

            // 👉 Normal link
            const itemBasePath = link.path
              .split("/")
              .filter(Boolean)
              .slice(0, 2)
              .join("/");

            const isActive = currentBasePath === itemBasePath;

            return (
              <SidebarMenuItem key={link.path}>
                <SidebarMenuButton
                  onClick={() => router.push(link.path)}
                  className={cn(
                    "flex items-center w-full px-4 py-2 rounded transition-colors",
                    isActive
                      ? "bg-primary font-bold text-white hover:bg-primary/80 hover:text-white"
                      : "text-gray-700 hover:bg-primary/10",
                  )}
                >
                  <span className="mr-2">{link.icon}</span>
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
            <DropdownMenuItem onClick={() => alert("Switched to Acme Inc")}>
              Acme Inc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert("Switched to Beta LLC")}>
              Beta LLC
            </DropdownMenuItem>
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
        <p className="text-sm text-gray-500 text-center">© 2026 TICC</p>
        {isMobile && <p className="text-xs text-gray-400 mt-1">Mobile view</p>}
      </SidebarFooter>
    </Sidebar>
  );
}
