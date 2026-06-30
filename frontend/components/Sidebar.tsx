"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  BarChart3,
  Settings,
  Sparkles,
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
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-slate-950 border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg">

            <Sparkles className="text-white" />

          </div>

          <div>

            <h1 className="text-2xl font-bold text-white">
              TalentOS
            </h1>

            <p className="text-xs text-slate-400">
              AI Hiring Platform
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6 space-y-2">

        {items.map((item) => {

          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-200
                ${
                  active
                    ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-lg"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
            >
              <item.icon size={20} />

              <span className="font-medium">
                {item.name}
              </span>

            </Link>
          );
        })}

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-800 p-6">

        <div className="flex items-center gap-3">

          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500" />

          <div>

            <p className="font-semibold text-white">
              Recruiter
            </p>

            <p className="text-xs text-slate-400">
              TalentOS Admin
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}