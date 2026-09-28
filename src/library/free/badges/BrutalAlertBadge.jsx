// export default function BrutalAlertBadge() {
//   return (
//     <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-300 border-2 border-slate-950 rounded-xl font-baloo text-[11px] text-slate-950 font-black shadow-[3px_3px_0px_0px_#020617]">
//       <span className="w-2 h-2 rounded bg-slate-950" />
//       SYSTEM_ALERT
//     </div>
//   );
// }


export default function BrutalAlertBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-lg font-baloo text-xs font-medium text-slate-700 shadow-2xs select-none">
      {/* Clean Success Square Dot */}
      <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
      <span className="text-slate-900 font-bold">PROD</span>
      <span className="text-slate-300">/</span>
      <span className="text-slate-500 font-mono text-[11px]">v2.4.0</span>
    </div>
  );
}