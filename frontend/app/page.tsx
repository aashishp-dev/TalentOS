"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import CandidateTable from "@/components/CandidateTable";
import CandidateDetails from "@/components/CandidateDetails";
import ScoreChart from "@/components/ScoreChart";

import { getCandidates } from "@/lib/api";

import { Candidate } from "@/types/candidate";

export default function Home() {

  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const [selected, setSelected] =
    useState<Candidate | null>(null);

  useEffect(() => {

    async function load() {

      const data = await getCandidates();

      setCandidates(data);

      if (data.length) {

        setSelected(data[0]);

      }

    }

    load();

  }, []);

  return (

    <main className="min-h-screen bg-slate-950 text-white">

      <Header/>

      <section className="p-10">

        <StatsCards/>

        <div className="mt-10">

          <CandidateTable

            candidates={candidates}

            selected={selected}

            onSelect={setSelected}

          />

        </div>

        <div className="grid grid-cols-2 gap-8 mt-10">

          <CandidateDetails
            candidate={selected}
          />

          <ScoreChart/>

        </div>

      </section>

    </main>

  );

}