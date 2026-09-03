import { useState } from "react";

export default function CyberGlitchCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked(!checked)}
      className="flex items-center gap-3 w-64 p-3 bg-slate-950 border border-cyan-500/50 rounded-xl font-baloo cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.15)]">
      <div
        className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center ${checked ? "bg-cyan-500 border-cyan-300" : "bg-slate-900 border-cyan-600"}`}>
        {checked && (
          <span className="text-slate-950 text-[10px] font-black">✓</span>
        )}
      </div>
      <span className="text-xs text-cyan-400 font-bold">SYS_OVERRIDE_BOX</span>
    </div>
  );
}
