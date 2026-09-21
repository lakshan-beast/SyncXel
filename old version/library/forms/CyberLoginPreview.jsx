import { motion } from "framer-motion";
import { useState } from "react";

export default function CyberLoginPreview() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-72 p-4 bg-slate-950 border border-cyan-500/40 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.15)] font-baloo">
      <div className="text-cyan-400 font-bold text-sm mb-3 tracking-wide">SYS_LOGIN</div>
      <div className="space-y-3">
        <div>
          <label className="text-[10px] text-slate-400 block mb-1">USER_IDENTIFIER</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="agent@nexus.io"
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2 bg-cyan-500 text-slate-950 font-bold text-xs rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.3)] cursor-pointer"
        >
          AUTHENTICATE
        </motion.button>
      </div>
    </div>
  );
}