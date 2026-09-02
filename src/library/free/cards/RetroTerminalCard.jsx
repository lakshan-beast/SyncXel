export default function RetroTerminalCard() {
  return (
    <div className="w-72 p-3 bg-black border-2 border-green-500 rounded font-mono space-y-2 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
      <div className="flex justify-between items-center text-[10px] text-green-500 border-b border-green-900 pb-1">
        <span>C:\SYS\USER.EXE</span>
        <span>[ACTIVE]</span>
      </div>
      <p className="text-[11px] text-green-400">
        System prompt initialized. Ready for user commands...
      </p>
    </div>
  );
}
