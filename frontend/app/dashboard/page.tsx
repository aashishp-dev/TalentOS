"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import AppShell from "@/components/AppShell";
import StatsCards from "@/components/StatsCards";
import ScoreChart from "@/components/ScoreChart";
import CandidateTable from "@/components/CandidateTable";
import CandidateDetails from "@/components/CandidateDetails";
import PipelineDiagram from "@/components/PipelineDiagram";
import ActivityFeed from "@/components/ActivityFeed";
import ConfidenceGauge from "@/components/ConfidenceGauge";

import { getRanking } from "@/services/ranking";
import { Candidate } from "@/types/candidate";

export default function DashboardPage() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [selected, setSelected] = useState<Candidate | null>(null);

  const [summary, setSummary] = useState({
    total_candidates: 0,
    average_score: 0,
    top_score: 0,
  });

  useEffect(() => {
    async function loadCandidates() {
      try {
        const response = await getRanking();

        setCandidates(response.candidates);
        setSummary(response.summary);

        if (response.candidates.length > 0) {
          setSelected(response.candidates[0]);
        }
      } catch (error) {
        console.error("Failed to load ranking:", error);
      }
    }

    loadCandidates();
  }, []);

  return (
    <AppShell>
      <div className="space-y-8">

        {/* Hero Section */}

        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 p-10">

          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute left-20 bottom-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative flex items-center justify-between">

            <div>

              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-300">

                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                AI Engine Active

              </div>

              <h1 className="text-5xl font-extrabold text-white">
                AI Recruitment
                <br />
                Command Center
              </h1>

              <p className="mt-5 max-w-2xl text-lg text-slate-300">
                TalentOS intelligently ranks resumes, evaluates
                candidates, and accelerates hiring using AI.
              </p>

            </div>

            <div className="hidden lg:flex">
  <Image
    src="/ai-human.png"
    alt="AI Assistant"
    width={320}
    height={320}
    className="drop-shadow-2xl"
  />
</div>

          </div>

        </div>

        <StatsCards summary={summary} />

        <div className="grid gap-6 lg:grid-cols-2">
          <ScoreChart breakdown={selected?.breakdown} />
          <PipelineDiagram />
        </div>

        <div className="grid gap-6 xl:grid-cols-3">

          <div className="xl:col-span-2">
            <CandidateTable
              candidates={candidates}
              selected={selected}
              onSelect={setSelected}
            />
          </div>

          <CandidateDetails candidate={selected} />

        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ConfidenceGauge value={selected?.confidence ?? 0} />
          <ActivityFeed />
        </div>

      </div>
    </AppShell>
  );
}