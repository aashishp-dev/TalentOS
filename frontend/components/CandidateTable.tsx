"use client";

import { Candidate } from "@/types/candidate";
import { Search, Eye, Medal } from "lucide-react";
import { useState } from "react";

interface Props {
  candidates: Candidate[];
  selected: Candidate | null;
  onSelect: (candidate: Candidate) => void;
}

export default function CandidateTable({
  candidates,
  selected,
  onSelect,
}: Props) {
  const [query, setQuery] = useState("");

  const filtered = candidates.filter((candidate) =>
    candidate.candidate_id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-6 shadow-xl">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Candidate Ranking
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            AI ranked applicants
          </p>
        </div>

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-500"
          />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search candidate..."
            className="pl-10 pr-4 py-2 rounded-xl bg-slate-800 border border-slate-700 outline-none"
          />

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700 text-slate-400">

              <th className="py-4 text-left">Rank</th>

              <th className="text-left">Candidate</th>

              <th className="text-left">Score</th>

              <th className="text-left">Status</th>

              <th className="text-left">Action</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((candidate) => (

              <tr
                key={candidate.candidate_id}
                onClick={() => onSelect(candidate)}
                className={`cursor-pointer transition hover:bg-slate-800/60 border-b border-slate-800 ${
                  selected?.candidate_id === candidate.candidate_id
                    ? "bg-slate-800"
                    : ""
                }`}
              >

                <td className="py-5">

                  <div className="flex items-center gap-2">

                    <Medal
                      className="text-yellow-400"
                      size={18}
                    />

                    #{candidate.rank}

                  </div>

                </td>

                <td>

                  <div>

                    <p className="font-semibold">

                      {candidate.candidate_id}

                    </p>

                    <p className="text-xs text-slate-400">

                      Resume uploaded

                    </p>

                  </div>

                </td>

                <td>

                  <span className="text-emerald-400 font-bold">

                    {candidate.score}

                  </span>

                </td>

                <td>

                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">

                    Shortlisted

                  </span>

                </td>

                <td>

                  <button className="rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2 transition">

                    <Eye size={16} />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}