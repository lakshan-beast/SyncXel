export default function BouncingDotsLoader() {
  return (
    <div className="flex space-x-2 items-center justify-center">
      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s] shadow-[0_0_10px_#22d3ee]"></div>
      <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s] shadow-[0_0_10px_#6366f1]"></div>
      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_10px_#22d3ee]"></div>
    </div>
  );
}
