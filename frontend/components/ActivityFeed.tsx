"use client";

import { motion } from "framer-motion";
import {
  Upload,
  Brain,
  Users,
  CheckCircle2,
  Clock,
} from "lucide-react";

const activities = [
  {
    title: "Resume Uploaded",
    description: "John Doe uploaded a resume.",
    time: "2 min ago",
    icon: Upload,
    color: "bg-cyan-500",
  },
  {
    title: "AI Ranking Completed",
    description: "Candidate scored 91.4%",
    time: "5 min ago",
    icon: Brain,
    color: "bg-indigo-500",
  },
  {
    title: "Candidate Shortlisted",
    description: "Sarah moved to Interview stage.",
    time: "10 min ago",
    icon: Users,
    color: "bg-emerald-500",
  },
  {
    title: "Interview Scheduled",
    description: "Technical interview confirmed.",
    time: "25 min ago",
    icon: Clock,
    color: "bg-orange-500",
  },
  {
    title: "Offer Recommended",
    description: "AI recommends extending an offer.",
    time: "1 hr ago",
    icon: CheckCircle2,
    color: "bg-green-500",
  },
];

export default function ActivityFeed() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-6 shadow-xl">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Recent Activity
        </h2>

        <p className="text-slate-400 mt-1">
          Live recruitment events
        </p>
      </div>

      <div className="space-y-6">

        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <motion.div
              key={activity.title}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">

                <div
                  className={`h-12 w-12 rounded-full ${activity.color} flex items-center justify-center`}
                >
                  <Icon size={20} className="text-white" />
                </div>

                {index !== activities.length - 1 && (
                  <div className="mt-2 h-10 w-[2px] bg-slate-700" />
                )}
              </div>

              <div className="flex-1 rounded-2xl bg-slate-800/70 border border-slate-700 p-4">

                <div className="flex justify-between items-center">

                  <h3 className="font-semibold text-white">
                    {activity.title}
                  </h3>

                  <span className="text-xs text-slate-400">
                    {activity.time}
                  </span>

                </div>

                <p className="mt-2 text-sm text-slate-400">
                  {activity.description}
                </p>

              </div>

            </motion.div>
          );
        })}

      </div>

    </div>
  );
}