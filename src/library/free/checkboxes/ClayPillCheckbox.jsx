import { useState } from "react";

export default function ClayPillCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked(!checked)}
      className="flex items-center gap-3 w-64 p-3 bg-slate-900 rounded-2xl shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1e293b] border border-slate-800 font-baloo cursor-pointer">
      <div
        className={`w-5 h-5 rounded-full border border-slate-800 bg-slate-900 shadow-inner flex items-center justify-center transition-all ${checked ? "bg-slate-950" : ""}`}>
        {checked && (
          <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-sm" />
        )}
      </div>
      <span className="text-xs text-cyan-300 font-bold">VOLUMETRIC_CHECK</span>
    </div>
  );
}
