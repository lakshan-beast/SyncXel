import { useState } from "react";
import { motion } from "framer-motion";

export default function ClayLoginForm() {
  const [active, setActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-80 p-5 bg-slate-900 rounded-3xl shadow-[10px_10px_20px_#020617,-10px_-10px_20px_#1e293b] border border-slate-800 font-baloo space-y-4 text-white">
      <h3 className="text-xs font-bold">Volumetric Access</h3>
      {active ? (
        <div className="py-6 text-center text-xs text-indigo-400">
          VAULT_UNLOCKED
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setActive(true);
          }}
          className="space-y-3">
          <input
            type="text"
            placeholder="Access ID"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-2xl text-xs text-slate-300 focus:outline-none shadow-inner"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold text-xs rounded-2xl cursor-pointer">
            UNLOCK
          </button>
        </form>
      )}
    </motion.div>
  );
}
