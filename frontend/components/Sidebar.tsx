"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  BarChart3,
  Settings,
} from "lucide-react";

const items = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Candidates",
    href: "/candidates",
    icon: Users,
  },
  {
    name: "Jobs",
    href: "/jobs",
    icon: Briefcase,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900 h-screen">
      <div className="p-6 text-2xl font-bold">
        TalentOS
      </div>

      <nav className="space-y-2 px-4">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-800 transition"
          >
            <item.icon size={18} />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}