export default function GridMatrixLoader() {
  return (
    <div className="grid grid-cols-2 gap-1.5 w-8 h-8">
      <div className="bg-cyan-400 rounded-sm animate-pulse shadow-[0_0_8px_#22d3ee]"></div>
      <div className="bg-indigo-500/50 rounded-sm animate-pulse [animation-delay:0.2s]"></div>
      <div className="bg-indigo-500/50 rounded-sm animate-pulse [animation-delay:0.4s]"></div>
      <div className="bg-cyan-400 rounded-sm animate-pulse [animation-delay:0.6s] shadow-[0_0_8px_#22d3ee]"></div>
    </div>
  );
}