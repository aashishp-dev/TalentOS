import AppShell from "@/components/AppShell";

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white">
          Settings
        </h1>

        <p className="text-slate-400">
          Configure TalentOS.
        </p>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <h2 className="text-2xl font-semibold">
            System Configuration
          </h2>

          <p className="mt-3 text-slate-400">
            Configure AI scoring weights, recruiter preferences,
            integrations, and account settings.
          </p>
        </div>
      </div>
    </AppShell>
  );
}