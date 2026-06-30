"use client";

import { motion } from "framer-motion";
import {
  Upload,
  FileSearch,
  Brain,
  Users,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    title: "Resume Upload",
    description: "Candidate submits resume",
    icon: Upload,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Resume Parsing",
    description: "Extract skills & experience",
    icon: FileSearch,
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "AI Ranking",
    description: "Multi-model candidate scoring",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Shortlisting",
    description: "Top candidates selected",
    icon: Users,
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Interview",
    description: "Technical assessment",
    icon: MessageSquare,
    color: "from-emerald-500 to-green-400",
  },
  {
    title: "Final Selection",
    description: "Offer recommendation",
    icon: CheckCircle2,
    color: "from-green-500 to-teal-500",
  },
];

export default function PipelineDiagram() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-6 shadow-xl">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Hiring Pipeline
        </h2>

        <p className="text-slate-400 mt-1">
          AI-powered recruitment workflow
        </p>
      </div>

      <div className="space-y-4">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.12,
                duration: 0.45,
              }}
            >
              <div className="flex items-start gap-4">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color}`}
                >
                  <Icon className="text-white" size={24} />
                </div>

                <div className="flex-1">

                  <div className="rounded-2xl border border-slate-800 bg-slate-800/70 p-4">

                    <div className="flex items-center justify-between">

                      <h3 className="font-semibold text-white">
                        {step.title}
                      </h3>

                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
                        Active
                      </span>

                    </div>

                    <p className="mt-2 text-sm text-slate-400">
                      {step.description}
                    </p>

                  </div>

                  {index !== steps.length - 1 && (
                    <div className="ml-7 h-8 w-[2px] bg-gradient-to-b from-indigo-500 via-cyan-400 to-transparent" />
                  )}

                </div>

              </div>
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}