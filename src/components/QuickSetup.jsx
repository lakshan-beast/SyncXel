import { useState } from "react";
import {
  HiOutlineTerminal,
//   HiOutlineDocumentCopy,
  HiOutlineCheck,
  HiOutlineBookOpen,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
    // HiOutlineCode,
} from "react-icons/hi";
import { FaCopy } from "react-icons/fa";
{/* <FaCopy /> */}

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
    <div className="w-full max-w-4xl mx-auto mb-8 bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300">
      {/* Banner Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-4 sm:px-6 cursor-pointer hover:bg-slate-800/40 transition-colors select-none">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <HiOutlineBookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              Quick Setup Guide
              <span className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded-full font-medium">
                4 Steps
              </span>
            </h3>
            <p className="text-xs text-slate-400 hidden sm:block">
              How to integrate SyncXel React & Tailwind CSS components into your
              project
            </p>
          </div>
        </div>

        <button className="text-slate-400 hover:text-white p-1">
          {isOpen ? (
            <HiOutlineChevronUp className="w-5 h-5" />
          ) : (
            <HiOutlineChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-4 sm:p-6 border-t border-slate-800/80 bg-slate-950/40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-[11px]">
                  1
                </span>
                <span>Prerequisites</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ensure your project is set up with{" "}
                <strong className="text-white">React</strong> and{" "}
                <strong className="text-white">Tailwind CSS</strong> configured.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-[11px]">
                  2
                </span>
                <span>Install Dependencies</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Run this in your terminal:
              </p>

              <div className="flex items-center justify-between p-2 bg-slate-950 border border-slate-800 rounded-lg text-[11px] font-mono text-slate-300">
                <div className="flex items-center gap-1.5 overflow-hidden">
                  <HiOutlineTerminal className="text-slate-500 shrink-0" />
                  <span className="truncate">{installCommand}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="ml-2 text-slate-400 hover:text-cyan-400 shrink-0"
                  title="Copy command">
                  {copied ? (
                    <HiOutlineCheck className="text-cyan-400" />
                  ) : (
                    <FaCopy />
                  )}
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-[11px]">
                  3
                </span>
                <span>Copy Component</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click the <strong className="text-white">"Copy Code"</strong>{" "}
                button on any SyncXel component card to copy the clean source
                code.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-[11px]">
                  4
                </span>
                <span>Paste & Import</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Create a new{" "}
                <code className="text-cyan-300 bg-slate-950 px-1 py-0.5 rounded text-[11px]">
                  .jsx
                </code>{" "}
                file inside your{" "}
                <code className="text-slate-300">src/components/</code> folder,
                paste the code, and import it.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickSetupGuide;
