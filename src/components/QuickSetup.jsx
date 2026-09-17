
import React, { useState } from "react";
import {
  HiOutlineBookOpen,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineCheck,
  HiOutlineClipboard,
} from "react-icons/hi2";
import { HiOutlineTerminal } from "react-icons/hi";

const QuickSetupGuide = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const installCommand = "npm install react-icons clsx tailwind-merge";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-10 bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-300">
      {/* Banner Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:px-6 cursor-pointer hover:bg-white/[0.02] transition-colors text-left select-none focus:outline-none">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 shadow-sm shadow-cyan-500/5">
            <HiOutlineBookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>Quick Setup Guide</span>
              <span className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                4 Steps
              </span>
            </h3>
            <p className="text-xs text-slate-400 hidden sm:block mt-0.5">
              How to integrate SyncXel React & Tailwind CSS components into your
              project
            </p>
          </div>
        </div>

        <div className="text-slate-400 p-1.5 rounded-lg bg-slate-950/40 border border-white/5">
          {isOpen ? (
            <HiOutlineChevronUp className="w-4 h-4 text-cyan-400" />
          ) : (
            <HiOutlineChevronDown className="w-4 h-4" />
          )}
        </div>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-4 sm:p-6 border-t border-white/10 bg-slate-950/40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="p-4 bg-slate-950/50 border border-white/5 rounded-xl space-y-2 hover:border-cyan-500/20 transition-all duration-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-[11px] font-bold">
                  1
                </span>
                <span>Prerequisites</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ensure your project is set up with{" "}
                <strong className="text-white font-medium">React</strong> and{" "}
                <strong className="text-white font-medium">Tailwind CSS</strong>
                .
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 bg-slate-950/50 border border-white/5 rounded-xl space-y-2 hover:border-cyan-500/20 transition-all duration-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-[11px] font-bold">
                  2
                </span>
                <span>Install Dependencies</span>
              </div>

              <div className="flex items-center justify-between p-2 bg-slate-900/90 border border-white/10 rounded-lg text-[11px] font-mono text-slate-300">
                <div className="flex items-center gap-1.5 overflow-hidden pr-1">
                  <HiOutlineTerminal className="text-cyan-400 shrink-0 w-3.5 h-3.5" />
                  <span className="truncate">{installCommand}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                  title="Copy command">
                  {copied ? (
                    <HiOutlineCheck className="w-3.5 h-3.5 text-cyan-400" />
                  ) : (
                    <HiOutlineClipboard className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 bg-slate-950/50 border border-white/5 rounded-xl space-y-2 hover:border-cyan-500/20 transition-all duration-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-[11px] font-bold">
                  3
                </span>
                <span>Copy Component</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click the{" "}
                <strong className="text-white font-medium">"Copy Code"</strong>{" "}
                button on any component card to copy the clean source code.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 bg-slate-950/50 border border-white/5 rounded-xl space-y-2 hover:border-cyan-500/20 transition-all duration-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-[11px] font-bold">
                  4
                </span>
                <span>Paste & Import</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Create a{" "}
                <code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded border border-white/5 text-[11px] font-mono">
                  .jsx
                </code>{" "}
                file inside{" "}
                <code className="text-slate-200 font-mono text-[11px]">
                  src/components/
                </code>
                , paste the code, and import it.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickSetupGuide;
