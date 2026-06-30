export default function Header() {
  return (
    <header className="border-b border-slate-800 px-10 py-6 flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold">
          TalentOS AI
        </h1>

        <p className="text-slate-400 mt-1">
          Hybrid AI Candidate Ranking System
        </p>
      </div>

      <div className="flex gap-3">

        <div className="bg-slate-900 px-4 py-2 rounded-xl">
          100K Candidates
        </div>

        <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
          ● AI Active
        </div>

      </div>

    </header>
  );
}