import { useState } from "react";
import { motion } from "framer-motion";

export default function BentoWizardForm() {
  const [step, setStep] = useState(1);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-80 p-5 bg-slate-900 border border-slate-800 rounded-2xl font-baloo space-y-4 text-white">
      <div className="flex justify-between items-center text-xs text-slate-400 border-b border-slate-800 pb-2">
        <span className="font-bold text-white">Setup Wizard</span>
        <span>Step {step} of 2</span>
      </div>
      {step === 1 ? (
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Project Name"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none"
          />
          <button
            onClick={() => setStep(2)}
            className="w-full py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl cursor-pointer">
            Next
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-xs text-slate-400">
            Confirm cluster config deployment.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setStep(1)}
              className="flex-1 py-2 bg-slate-800 text-slate-300 text-xs rounded-xl cursor-pointer">
              Back
            </button>
            <button
              onClick={() => alert("Deployed!")}
              className="flex-1 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl cursor-pointer">
              Deploy
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
