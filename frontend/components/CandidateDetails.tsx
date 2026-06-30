"use client";

import { Candidate } from "@/types/candidate";
import {
  User,
  Brain,
  Trophy,
  Download,
  Sparkles,
} from "lucide-react";

interface Props {
  candidate: Candidate | null;
}

export default function CandidateDetails({
  candidate,
}: Props) {
  if (!candidate) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-xl flex flex-col items-center justify-center text-center h-full">

        <User
          size={60}
          className="text-slate-600 mb-5"
        />

        <h2 className="text-2xl font-bold">
          No Candidate Selected
        </h2>

        <p className="text-slate-400 mt-3">
          Choose a candidate from the ranking table to view
          AI insights, score breakdown and reasoning.
        </p>

      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-6 shadow-xl">

      {/* Header */}

      <div className="flex items-center gap-4 mb-8">

        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">

          <User className="text-white" />

        </div>

        <div>

          <h2 className="text-2xl font-bold">

            {candidate.candidate_id}

          </h2>

          <p className="text-slate-400">

            AI Ranked Candidate

          </p>

        </div>

      </div>

      {/* Score */}

      <div className="rounded-2xl bg-gradient-to-r from-emerald-500/20 to-green-400/10 border border-emerald-500/20 p-5 mb-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-slate-400">

              Final AI Score

            </p>

            <h1 className="text-5xl font-bold text-emerald-400 mt-2">

              {candidate.score}

            </h1>

          </div>

          <Trophy
            size={55}
            className="text-yellow-400"
          />

        </div>

      </div>

      {/* AI Reasoning */}

      <div className="rounded-2xl bg-slate-800 p-5 mb-6">

        <div className="flex items-center gap-3 mb-4">

          <Brain className="text-cyan-400" />

          <h3 className="font-semibold">

            AI Reasoning

          </h3>

        </div>

        <p className="text-slate-300 leading-7">

          {candidate.reasoning}

        </p>

      </div>

      {/* AI Insights */}

      <div className="rounded-2xl bg-slate-800 p-5 mb-6">

        <div className="flex items-center gap-3 mb-4">

          <Sparkles className="text-purple-400" />

          <h3 className="font-semibold">

            AI Insights

          </h3>

        </div>

        <div className="space-y-3">

          <div className="rounded-xl bg-slate-900 p-3">

            ✅ Excellent semantic similarity with job description.

          </div>

          <div className="rounded-xl bg-slate-900 p-3">

            🚀 Strong technical profile.

          </div>

          <div className="rounded-xl bg-slate-900 p-3">

            💡 Recommended for technical interview.

          </div>

        </div>

      </div>

      {/* Download */}

      <button className="w-full rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition p-4 flex items-center justify-center gap-3">

        <Download size={18} />

        Download Resume

      </button>

    </div>
  );
}