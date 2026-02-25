// app/dashboard/page.js
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { analyticNavigation, pageNavigation } from "@/lib/navLinks";
import Link from "next/link";

export default function DashboardGrid() {
  const allLinks = [...pageNavigation.links, ...analyticNavigation.links];

  // Flatten sublinks
  const flatLinks = allLinks.flatMap((item) =>
    item.sublink ? item.sublink : item,
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {flatLinks.map((link, i) => (
          <Link key={i} href={link.path} passHref>
            <Card className="cursor-pointer hover:shadow-xl transition transform hover:-translate-y-1 max-md:whitespace-nowrap">
              <CardHeader>
                <div className="flex items-start gap-4">
                    <div className="text-primary">
                        {link.icon}
                    </div>
                   <div className="space-y-2">
                       <CardTitle>{link.name}</CardTitle>
                <CardDescription>{link.name}</CardDescription>
                   </div>
                </div>
              
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
