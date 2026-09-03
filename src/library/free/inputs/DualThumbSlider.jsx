import { useState } from "react";

export default function DualThumbSlider() {
  const [minVal, setMinVal] = useState(25);
  const [maxVal, setMaxVal] = useState(75);

  return (
    <div className="w-72 p-3 bg-slate-900 border border-slate-800 rounded-2xl font-baloo space-y-3">
      <div className="flex justify-between text-xs font-bold text-slate-300">
        <span>
          Range: ${minVal} - ${maxVal}
        </span>
        <span className="text-cyan-400">Filter</span>
      </div>
      <div className="relative flex items-center h-4">
        <div className="absolute w-full h-1.5 bg-slate-800 rounded-full" />
        <div
          className="absolute h-1.5 bg-cyan-500 rounded-full"
          style={{ left: `${minVal}%`, right: `${100 - maxVal}%` }}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={minVal}
          onChange={(e) =>
            setMinVal(Math.min(Number(e.target.value), maxVal - 5))
          }
          className="absolute w-full appearance-none bg-transparent pointer-events-none accent-cyan-400 z-10 cursor-pointer"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={maxVal}
          onChange={(e) =>
            setMaxVal(Math.max(Number(e.target.value), minVal + 5))
          }
          className="absolute w-full appearance-none bg-transparent pointer-events-none accent-cyan-400 z-20 cursor-pointer"
        />
      </div>
    </div>
  );
}
