import { useState } from "react";
import { motion } from "framer-motion";

export default function CyberPaymentForm() {
  const [paid, setPaid] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-80 p-5 bg-slate-950 border border-cyan-500/50 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.2)] font-baloo space-y-4">
      <div className="flex justify-between items-center border-b border-cyan-500/20 pb-2">
        <h3 className="text-xs font-bold text-cyan-300 uppercase">
          CYBER_CHECKOUT
        </h3>
        <span className="text-[10px] text-cyan-400 font-mono">NODE_SECURE</span>
      </div>
      {paid ? (
        <div className="py-6 text-center text-xs text-emerald-400 font-mono">
          TRANSACTION_VERIFIED ✨
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPaid(true);
          }}
          className="space-y-3">
          <input
            type="text"
            placeholder="WALLET_ADDRESS"
            className="w-full px-3 py-2 bg-slate-900 border border-cyan-500/30 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
            required
          />
          <input
            type="text"
            placeholder="AMOUNT (SOL/ETH)"
            className="w-full px-3 py-2 bg-slate-900 border border-cyan-500/30 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-cyan-500/30 cursor-pointer">
            TRANSFER_CREDITS
          </button>
        </form>
      )}
    </motion.div>
  );
}
