"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavMain({ nav }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // helper to check if current path is active
  const currentBasePath = mounted
    ? pathname?.split("/").filter(Boolean).slice(0, 2).join("/") || ""
    : "";

  return (
    <SidebarGroup title={nav.name}>
      <SidebarGroupLabel>{nav.name}</SidebarGroupLabel>
      <SidebarMenu>
        {nav.links.map((link, index) => {
          // Parent with sublinks
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
                <Collapsible
                  defaultOpen={isParentActive}
                  className="overflow-hidden"
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="group flex items-center justify-between w-full py-2 rounded">
                      <span className="flex items-center gap-2">
                        {link.icon}
                        <span>{link.name}</span>
                      </span>
                      <ChevronRight className="transition-transform group-data-[state=open]:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub className="ml-6 mt-1 space-y-1">
                      {link.sublink.map((sub,) => {
                        const subBasePath = sub.path
                          .split("/")
                          .filter(Boolean)
                          .slice(0, 2)
                          .join("/");

                        const isSubActive = currentBasePath === subBasePath;
                        return (
                          <SidebarMenuSubItem key={sub.path}>
                            <SidebarMenuSubButton asChild>
                              <Link
                                href={sub.path}
                                className={cn(
                                  "flex items-center gap-2 rounded",
                                  isSubActive
                                    ? "bg-primary text-white font-semibold"
                                    : "hover:bg-primary/10",
                                )}
                              >
                                <span>{sub.icon}</span>
                                <span>{sub.name}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            );
          }

          // Normal link
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
                    "flex items-center w-full py-2 rounded transition-colors",
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
}
