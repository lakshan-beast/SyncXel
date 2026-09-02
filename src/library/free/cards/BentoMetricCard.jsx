export default function BentoMetricCard() {
  return (
    <div className="w-72 p-4 bg-slate-900 border border-slate-800 rounded-2xl font-baloo space-y-2">
      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
        PERFORMANCE
      </span>
      <div className="text-2xl font-bold text-white">99.98%</div>
      <p className="text-[11px] text-slate-400">
        System latency optimized via edge computing nodes.
      </p>
    </div>
  );
}
