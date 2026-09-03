export default function RetroTerminalBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black border-2 border-green-500 rounded font-mono text-[11px] text-green-400 shadow-[0_0_8px_rgba(34,197,94,0.3)]">
      <span className="w-2 h-2 bg-green-500 rounded-none animate-pulse" />
      SYS_TERMINAL
    </div>
  );
}
