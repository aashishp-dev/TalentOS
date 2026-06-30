import AppShell from "@/components/AppShell";

export default function JobsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white">
          Jobs
        </h1>

        <p className="text-slate-400">
          Manage job descriptions and hiring campaigns.
        </p>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <h2 className="text-2xl font-semibold">
            Active Job Openings
          </h2>

          <p className="mt-3 text-slate-400">
            Create new job postings and monitor recruitment pipelines.
          </p>
        </div>
      </div>
    </AppShell>
  );
}