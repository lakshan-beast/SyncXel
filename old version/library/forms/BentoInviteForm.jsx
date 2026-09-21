import { useState } from "react";
import { motion } from "framer-motion";

export default function BentoInviteForm() {
  const [invited, setInvited] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-80 p-5 bg-slate-900 border border-slate-800 rounded-2xl font-baloo space-y-4 text-white shadow-xl">
      <div className="flex justify-between items-center border-b border-slate-800 pb-2">
        <h3 className="text-xs font-bold">Team Member Access</h3>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Active
        </span>
      </div>
      {invited ? (
        <div className="py-6 text-center text-xs text-emerald-400">
          INVITATION_SENT_OK
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setInvited(true);
          }}
          className="space-y-3">
          <input
            type="email"
            placeholder="colleague@company.com"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
            required
          />
          <select className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none">
            <option>Developer Role</option>
            <option>Admin Role</option>
          </select>
          <button
            type="submit"
            className="w-full py-2 bg-cyan-500 text-slate-950 font-bold text-xs rounded-xl cursor-pointer">
            Send Invite
          </button>
        </form>
      )}
    </motion.div>
  );
}
