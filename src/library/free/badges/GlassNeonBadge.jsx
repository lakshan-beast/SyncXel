// export default function GlassNeonBadge() {
//   return (
//     <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-baloo text-[11px] text-indigo-200 shadow-lg">
//       <span className="w-2 h-2 rounded-full bg-indigo-300 shadow-[0_0_8px_#818cf8]" />
//       NEON_SYNC
//     </div>
//   );
// }


export default function GlassNeonBadge() {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-white/80 backdrop-blur-2xl border border-indigo-100 rounded-2xl shadow-[0_10px_30px_rgba(79,70,229,0.08)] select-none">
      {/* Glowing Gradient Neon Icon Container */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-[0_0_15px_rgba(99,102,241,0.4)] text-white">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      {/* Stacked Micro-Typography Layout */}
      <div className="flex flex-col text-left font-baloo">
        <span className="text-[10px] font-baloo tracking-widest text-indigo-600 font-bold uppercase">Neon Core</span>
        <span className="text-xs font-bold text-slate-900/30 tracking-tight">Sync Established</span>
      </div>
    </div>
  );
}