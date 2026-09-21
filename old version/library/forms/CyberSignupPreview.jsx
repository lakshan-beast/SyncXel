import { motion } from "framer-motion";

export default function CyberSignupPreview() {
  return (
    <div className="w-72 p-4 bg-slate-950 border border-indigo-500/40 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.15)] font-baloo">
      <div className="text-indigo-400 font-bold text-sm mb-3 tracking-wide">REGISTER_NODE</div>
      <div className="space-y-3">
        <div>
          <label className="text-[10px] text-slate-400 block mb-1">ACCESS_CODE</label>
          <input
            type="password"
            placeholder="••••••••••••"
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2 bg-indigo-500 text-slate-950 font-bold text-xs rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.3)] cursor-pointer"
        >
          INITIALIZE
        </motion.button>
      </div>
    </div>
  );
}