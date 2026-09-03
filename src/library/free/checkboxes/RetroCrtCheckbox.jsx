import { useState } from "react";

export default function RetroCrtCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked(!checked)}
      className="flex items-center gap-3 w-64 p-3 bg-black border-2 border-green-500 rounded font-mono cursor-pointer shadow-[0_0_10px_rgba(34,197,94,0.3)]">
      <div
        className={`w-4 h-4 rounded-none border border-green-500 flex items-center justify-center transition-all ${checked ? "bg-green-950" : "bg-black"}`}>
        {checked && (
          <span className="text-green-300 text-[10px] font-bold">X</span>
        )}
      </div>
      <span className="text-xs text-green-300">CRT_SELECT_VAL</span>
    </div>
  );
}
