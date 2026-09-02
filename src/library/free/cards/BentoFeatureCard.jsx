export default function BentoFeatureCard() {
  return (
    <div className="w-72 p-4 bg-slate-900 border border-slate-800 rounded-2xl font-baloo space-y-2">
      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
        ⚡
      </div>
      <h4 className="text-xs font-bold text-white">Instant Deployment</h4>
      <p className="text-[11px] text-slate-400">
        Push changes instantly to edge servers worldwide.
      </p>
    </div>
  );
}
