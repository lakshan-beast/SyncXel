import { useState } from "react";
import { motion } from "framer-motion";

export default function GlassResetForm() {
  const [sent, setSent] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-80 p-5 bg-white/10 backdrop-blur-2xl border border-white/25 rounded-3xl shadow-2xl font-baloo space-y-4 text-white">
      <div className="border-b border-white/15 pb-2">
        <h3 className="text-xs font-bold text-cyan-300 tracking-wide">
          ENCLAVE_RECOVERY
        </h3>
      </div>
      {sent ? (
        <div className="py-6 text-center text-xs text-cyan-200">
          RESET_LINK_TRANSMITTED
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-3">
          <p className="text-[11px] text-slate-300">
            Enter your registered email to receive node access recovery tokens.
          </p>
          <input
            type="email"
            placeholder="user@domain.com"
            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-2xl text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold text-xs rounded-2xl cursor-pointer hover:bg-cyan-500/30">
            SEND_TOKEN
          </button>
        </form>
      )}
    </motion.div>
  );
}
