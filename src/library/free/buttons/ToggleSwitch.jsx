export default function ToggleSwitch() {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" defaultChecked className="sr-only peer" />
      <div className="w-11 h-6 bg-slate-900 border border-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500/20 peer-checked:border-cyan-500 peer-checked:after:bg-cyan-400 peer-checked:after:shadow-[0_0_10px_#22d3ee]"></div>
    </label>
  );
}
