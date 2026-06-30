"use client";

import { Candidate } from "@/types/candidate";

interface Props {
  candidate: Candidate | null;
}

export default function CandidateDetails({
  candidate,
}: Props) {

  if (!candidate) {

    return (

      <div className="bg-slate-900 rounded-2xl p-6">

        Select a Candidate

      </div>

    );

  }

  return (

    <div className="bg-slate-900 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Candidate Details

      </h2>

      <div className="space-y-4">

        <div>

          <p className="text-slate-400">

            Candidate ID

          </p>

          <p>{candidate.candidate_id}</p>

        </div>

        <div>

          <p className="text-slate-400">

            Final Score

          </p>

          <p className="text-green-400 text-2xl">

            {candidate.score}

          </p>

        </div>

        <div>

          <p className="text-slate-400">

            AI Reasoning

          </p>

          <p>{candidate.reasoning}</p>

        </div>

      </div>

    </div>

  );

}