import { useState } from "react";
import { motion } from "framer-motion";

export default function BrutalSignupForm() {
  const [done, setDone] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-80 p-5 bg-yellow-300 border-2 border-slate-950 rounded-2xl shadow-[5px_5px_0px_0px_#020617] font-baloo space-y-4">
      <h3 className="text-xs font-black text-slate-950 uppercase">
        BRUTAL_REGISTRATION
      </h3>
      {done ? (
        <div className="py-6 text-center text-xs font-black text-slate-950">
          NODE_REGISTERED!
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="space-y-3">
          <input
            type="text"
            placeholder="CODENAME"
            className="w-full px-3 py-2 bg-white border-2 border-slate-950 rounded-lg text-xs text-slate-950 font-bold focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="EMAIL_NET"
            className="w-full px-3 py-2 bg-white border-2 border-slate-950 rounded-lg text-xs text-slate-950 font-bold focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-pink-500 text-white font-black text-xs border-2 border-slate-950 rounded-lg shadow-[3px_3px_0px_0px_#020617] cursor-pointer">
            JOIN_GRID
          </button>
        </form>
      )}
    </motion.div>
  );
}
