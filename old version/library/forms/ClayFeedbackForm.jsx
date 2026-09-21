import { useState } from "react";
import { motion } from "framer-motion";

export default function ClayFeedbackForm() {
  const [sent, setSent] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-80 p-5 bg-slate-900 rounded-3xl shadow-[10px_10px_20px_#020617,-10px_-10px_20px_#1e293b] border border-slate-800 font-baloo space-y-4 text-white">
      <div className="flex justify-between items-center border-b border-slate-800 pb-2">
        <h3 className="text-xs font-bold">Tactile Feedback</h3>
        <span className="text-[10px] text-indigo-400">Volumetric</span>
      </div>
      {sent ? (
        <div className="py-6 text-center text-xs text-indigo-300">
          FEEDBACK_RECORDED
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-3">
          <textarea
            placeholder="Share your experience..."
            rows={3}
            className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-2xl text-xs text-slate-300 focus:outline-none shadow-inner resize-none"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold text-xs rounded-2xl cursor-pointer">
            Submit Review
          </button>
        </form>
      )}
    </motion.div>
  );
}
