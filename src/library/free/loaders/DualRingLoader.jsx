export default function DualRingLoader() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <div className="absolute inset-0 border-2 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin"></div>
      <div className="absolute inset-2 border-2 border-indigo-500/20 border-b-indigo-400 rounded-full animate-spin [animation-direction:reverse] [animation-duration:1.5s]"></div>
    </div>
  );
}