"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function NavBreadcrumb() {
  const pathname = usePathname(); // e.g., "/dashboard/fqa"
  const segments = pathname?.split("/").filter(Boolean) || [];

  return (
    <Breadcrumb className="text-sm">
     <BreadcrumbList>

      {segments.map((segment, idx) => {
        const path = "/" + segments.slice(0, idx + 1).join("/");
        const isLast = idx === segments.length - 1;

        // Format segment nicely
        const name = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

        return (
          <BreadcrumbItem key={path}>
            {!isLast ? (
              <BreadcrumbLink href={path}>
                {name}
              </BreadcrumbLink>
            ) : (
              <span className="font-semibold text-black">{name}</span>
            )}
            {idx !== segments.length - 1 && (
              <BreadcrumbSeparator />
            )}
          </BreadcrumbItem>
        );
      })}
     </BreadcrumbList>
    </Breadcrumb>
  );
}