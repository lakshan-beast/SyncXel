import { useState } from "react";
import { motion } from "framer-motion";

export default function CyberLoginForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-80 p-5 bg-slate-950 border border-cyan-500/40 rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.15)] font-baloo space-y-4">
      <h3 className="text-xs font-bold text-cyan-400 tracking-wider">
        SECURE_AUTH_NODE
      </h3>
      {submitted ? (
        <div className="py-6 text-center text-xs text-emerald-400 font-mono">
          ACCESS_GRANTED...
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-3">
          <input
            type="text"
            placeholder="USER_ID"
            className="w-full px-3 py-2 bg-slate-900 border border-cyan-500/30 rounded-xl text-xs text-slate-200 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="KEY_CODE"
            className="w-full px-3 py-2 bg-slate-900 border border-cyan-500/30 rounded-xl text-xs text-slate-200 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-cyan-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg cursor-pointer">
            INITIALIZE
          </button>
        </form>
      )}
    </motion.div>
  );
}
