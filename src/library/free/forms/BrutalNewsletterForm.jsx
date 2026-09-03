import { useState } from "react";
import { motion } from "framer-motion";

export default function BrutalNewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-80 p-5 bg-pink-400 border-2 border-slate-950 rounded-2xl shadow-[6px_6px_0px_0px_#020617] font-baloo space-y-4 text-slate-950">
      <div className="flex justify-between items-center border-b-2 border-slate-950 pb-2">
        <h3 className="text-xs font-black uppercase">DROPBOX_ALERTS</h3>
        <span className="text-[10px] font-black bg-yellow-300 px-2 py-0.5 border border-slate-950 rounded">HOT</span>
      </div>
      {subscribed ? (
        <div className="py-6 text-center text-xs font-black">SUBSCRIBED_SUCCESSFULLY!</div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="space-y-3">
          <input type="email" placeholder="ENTER_EMAIL..." className="w-full px-3 py-2 bg-white border-2 border-slate-950 rounded-lg text-xs font-bold text-slate-950 focus:outline-none placeholder:text-slate-400" required />
          <button type="submit" className="w-full py-2 bg-yellow-300 text-slate-950 font-black text-xs border-2 border-slate-950 rounded-lg shadow-[3px_3px_0px_0px_#020617] cursor-pointer">JOIN_FEED</button>
        </form>
      )}
    </motion.div>
  );
}