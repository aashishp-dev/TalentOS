"use client";

import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  BarChart3,
  Activity,
} from "lucide-react";

interface Props {
  summary: {
    total_candidates: number;
    average_score: number;
    top_score: number;
  };
}

export default function StatsCards({
  summary,
}: Props) {
  const cards = [
    {
      title: "Candidates",
      value: summary.total_candidates,
      subtitle: "Processed",
      icon: Users,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Average Score",
      value: summary.average_score,
      subtitle: "AI Score",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Top Score",
      value: summary.top_score,
      subtitle: "Highest Ranked",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "System",
      value: "LIVE",
      subtitle: "Ranking Engine",
      icon: Activity,
      color: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-xl shadow-xl"
          >
            <div
              className={`absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br ${card.color} opacity-20 blur-3xl`}
            />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-white">
                  {card.value}
                </h2>

                <p className="mt-2 text-xs text-emerald-400">
                  {card.subtitle}
                </p>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color}`}
              >
                <Icon
                  size={24}
                  className="text-white"
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}