"use client";

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

interface Summary {
  total_candidates: number;
  average_score: number;
  top_score: number;
}

export default function Home() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [selected, setSelected] = useState<Candidate | null>(null);

  const [summary, setSummary] = useState<Summary>({
    total_candidates: 0,
    average_score: 0,
    top_score: 0,
  });

  useEffect(() => {
    const loadCandidates = async () => {
      try {
        const response = await getRanking();

        setCandidates(response.candidates ?? []);

        setSummary(
          response.summary ?? {
            total_candidates: 0,
            average_score: 0,
            top_score: 0,
          }
        );

        if (
          response.candidates &&
          response.candidates.length > 0
        ) {
          setSelected(response.candidates[0]);
        }
      } catch (error) {
        console.error("Failed to load ranking:", error);
      }
    };

    loadCandidates();
  }, []);

  return (
    <AppShell>
      <div className="space-y-8">

        <StatsCards summary={summary} />

        <div className="grid gap-6 lg:grid-cols-2">
          <ScoreChart
            breakdown={selected?.breakdown}
          />

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

          <CandidateDetails
            candidate={selected}
          />

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <ConfidenceGauge
            value={selected?.confidence ?? 0}
          />

          <ActivityFeed />

        </div>

      </div>
    </AppShell>
  );
}