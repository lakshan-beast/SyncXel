export default function ClayActionCard() {
  return (
    <div className="w-72 p-4 bg-slate-900 rounded-3xl shadow-[8px_8px_16px_#020617,-8px_-8px_16px_#1e293b] font-baloo space-y-3 border border-slate-800">
      <h4 className="text-xs font-bold text-white">Cloud Sync Matrix</h4>
      <p className="text-[11px] text-slate-400">
        All local nodes synchronized with master core.
      </p>
      <button className="w-full py-2 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-xl shadow-inner border border-indigo-500/30 cursor-pointer">
        SYNC_NOW
      </button>
    </div>
  );
}
