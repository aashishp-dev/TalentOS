"use client";

import { Candidate } from "@/types/candidate";

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
  return (
    <div className="bg-slate-900 rounded-2xl p-6">

      <h2 className="text-xl font-bold mb-6">
        Top Ranked Candidates
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-slate-400 border-b border-slate-700">

            <th className="py-3">Rank</th>

            <th>Candidate</th>

            <th>Score</th>

          </tr>

        </thead>

        <tbody>

          {candidates.map((candidate) => (

            <tr

              key={candidate.candidate_id}

              onClick={() => onSelect(candidate)}

              className={`cursor-pointer border-b border-slate-800 hover:bg-slate-800 transition ${
                selected?.candidate_id === candidate.candidate_id
                  ? "bg-slate-800"
                  : ""
              }`}

            >

              <td className="py-4">{candidate.rank}</td>

              <td>{candidate.candidate_id}</td>

              <td className="text-green-400 font-bold">
                {candidate.score}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}