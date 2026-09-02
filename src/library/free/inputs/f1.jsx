import { FaSearch } from "react-icons/fa";
export default function CommandSearchBar() {
  return (
    <div className="relative w-72">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 text-xs">
        <FaSearch />
      </span>
      <input
        type="text"
        placeholder="Search components..."
        className="w-full pl-10 pr-12 py-2.5 bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-all shadow-inner cursor-text"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded-md shadow-sm">
          Ctrl + K
        </kbd>
      </div>
    </div>
  );
}
