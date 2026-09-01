export default function DashedRingLoader() {
  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      <div className="absolute inset-0 border-2 border-dashed border-cyan-500/40 rounded-full animate-spin"></div>
      <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
    </div>
  );
}
