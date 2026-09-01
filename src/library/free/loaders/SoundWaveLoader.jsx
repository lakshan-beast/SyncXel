export default function SoundWaveLoader() {
  return (
    <div className="flex items-end gap-1 h-6">
      <div className="w-1 bg-cyan-400 animate-[pulse_0.6s_ease-in-out_infinite] h-full rounded-full shadow-[0_0_8px_#22d3ee]"></div>
      <div className="w-1 bg-cyan-400 animate-[pulse_0.8s_ease-in-out_infinite] h-3/4 rounded-full"></div>
      <div className="w-1 bg-indigo-500 animate-[pulse_0.5s_ease-in-out_infinite] h-5/6 rounded-full shadow-[0_0_8px_#6366f1]"></div>
      <div className="w-1 bg-cyan-400 animate-[pulse_0.7s_ease-in-out_infinite] h-1/2 rounded-full"></div>
    </div>
  );
}
