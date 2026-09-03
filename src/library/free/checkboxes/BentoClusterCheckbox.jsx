import { useState } from "react";

export default function BentoClusterCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked(!checked)}
      className="flex items-center gap-3 w-64 p-3 bg-slate-900 border border-slate-800 rounded-2xl font-baloo cursor-pointer shadow-lg">
      <div
        className={`w-5 h-5 rounded-lg border border-slate-800 flex items-center justify-center transition-all ${checked ? "bg-slate-950 border-slate-700" : "bg-slate-950"}`}>
        {checked && <div className="w-2.5 h-2.5 bg-indigo-500 rounded-sm" />}
      </div>
      <span className="text-xs text-slate-200 font-bold">BENTO_CHECKBOX</span>
    </div>
  );
}
