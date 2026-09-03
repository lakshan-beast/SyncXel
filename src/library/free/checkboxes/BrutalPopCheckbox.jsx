import { useState } from "react";

export default function BrutalPopCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked(!checked)}
      className="flex items-center gap-3 w-64 p-3 bg-yellow-300 border-2 border-slate-950 rounded-xl font-baloo cursor-pointer shadow-[3px_3px_0px_0px_#020617]">
      <div
        className={`w-5 h-5 rounded border-2 border-slate-950 flex items-center justify-center transition-all ${checked ? "bg-pink-500 shadow-[2px_2px_0px_0px_#020617]" : "bg-white"}`}>
        {checked && (
          <span className="text-white text-[10px] font-black">✓</span>
        )}
      </div>
      <span className="text-xs text-slate-950 font-black">BRUTAL_SELECT</span>
    </div>
  );
}
