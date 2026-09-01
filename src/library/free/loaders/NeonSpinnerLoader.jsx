export default function NeonSpinnerLoader() {
  return (
    <div className="relative w-12 h-12">
      <div className="w-full h-full rounded-full border-4 border-slate-800"></div>
      <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
    </div>
  );
}
