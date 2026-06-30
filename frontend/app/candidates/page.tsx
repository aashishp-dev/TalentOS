import AppShell from "@/components/AppShell";

export default function CandidatesPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white">
          Candidates
        </h1>

        <p className="text-slate-400">
          View and manage all AI-ranked candidates.
        </p>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <h2 className="text-2xl font-semibold">
            Candidate Management
          </h2>

          <p className="mt-3 text-slate-400">
            Browse candidate profiles, compare AI scores,
            and review hiring recommendations.
          </p>
        </div>
      </div>
    </AppShell>
  );
}