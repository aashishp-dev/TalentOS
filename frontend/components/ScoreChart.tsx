"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Radar as RadarShape,
} from "recharts";

import { motion } from "framer-motion";

interface Props {
  breakdown?: {
    skill: number;
    career: number;
    behavior: number;
    semantic: number;
  };
}

export default function ScoreChart({
  breakdown,
}: Props) {

  const data = [
    {
      subject: "Skill",
      score: breakdown?.skill ?? 0,
    },
    {
      subject: "Career",
      score: breakdown?.career ?? 0,
    },
    {
      subject: "Behavior",
      score: breakdown?.behavior ?? 0,
    },
    {
      subject: "Semantic",
      score: breakdown?.semantic ?? 0,
    },
  ];

  const overall = breakdown
    ? (
        breakdown.skill +
        breakdown.career +
        breakdown.behavior +
        breakdown.semantic
      ) / 4
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-xl shadow-xl"
    >
      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            AI Score Breakdown
          </h2>

          <p className="text-slate-400">
            Live backend scoring
          </p>
        </div>

        <div className="rounded-xl bg-emerald-500/20 border border-emerald-500/30 px-4 py-2">

          <p className="text-xs text-emerald-300">
            Overall
          </p>

          <h2 className="text-3xl font-bold text-emerald-400">
            {overall.toFixed(1)}%
          </h2>

        </div>

      </div>

      <div className="h-[320px]">

        <ResponsiveContainer>

          <RadarChart data={data}>

            <PolarGrid stroke="#334155" />

            <PolarAngleAxis
              dataKey="subject"
              tick={{
                fill: "#CBD5E1",
              }}
            />

            <RadarShape
              dataKey="score"
              stroke="#22C55E"
              fill="#22C55E"
              fillOpacity={0.45}
            />

          </RadarChart>

        </ResponsiveContainer>

      </div>

    </motion.div>
  );
}