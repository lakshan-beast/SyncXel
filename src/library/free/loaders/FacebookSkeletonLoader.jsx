export default function FacebookSkeletonLoader() {
  return (
    <div className="w-72 p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl space-y-3 overflow-hidden relative shadow-lg">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-linear-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      <div className="flex items-center space-x-3">
        <div className="rounded-full bg-slate-800 h-10 w-10 shrink-0"></div>
        <div className="space-y-2 flex-1">
          <div className="h-3 bg-slate-800 rounded-md w-3/4"></div>
          <div className="h-2 bg-slate-800/60 rounded-md w-1/2"></div>
        </div>
      </div>
      <div className="h-16 bg-slate-800/50 rounded-xl"></div>
    </div>
  );
}
