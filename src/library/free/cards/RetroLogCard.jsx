export default function RetroLogCard() {
  return (
    <div className="w-72 p-3 bg-black border-2 border-amber-500 rounded font-mono space-y-1 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
      <div className="text-[10px] text-amber-500 font-bold">
        WARNING: MEM_THRESHOLD_90
      </div>
      <p className="text-[10px] text-amber-400/80">
        GC routine triggered automatically at core level.
      </p>
    </div>
  );
}
