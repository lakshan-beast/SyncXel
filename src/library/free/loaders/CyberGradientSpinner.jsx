export default function CyberGradientSpinner() {
  return (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 rounded-full border-2 border-slate-800"></div>
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-indigo-500 animate-spin shadow-[0_0_12px_rgba(34,211,238,0.3)]"></div>
    </div>
  );
}