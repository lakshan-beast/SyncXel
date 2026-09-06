// import { useState } from 'react';

// export default function TerminalBox() {
//   const [input, setInput] = useState('');
//   const [logs, setLogs] = useState(['Syncxel CLI v1.0.0 - Type "help" for commands']);

//   const handleCommand = (e) => {
//     if (e.key === 'Enter') {
//       const cmd = input.trim().toLowerCase();
//       let res = `Executing: ${cmd}...`;
//       if (cmd === 'help') res = 'Available: list, search, clear, beta';
//       else if (cmd === 'list') res = 'Categories: Buttons, Loaders, Cards, Modals';
//       else if (cmd === 'clear') { setLogs([]); setInput(''); return; }

//       setLogs(prev => [...prev, `> ${input}`, res]);
//       setInput('');
//     }
//   };

//   return (
//     <div className="bg-black/90 border border-cyan-500/40 rounded-xl p-4 font-mono text-xs text-cyan-400 max-w-md w-full shadow-[0_0_20px_rgba(34,211,238,0.2)]">
//       <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-500/20 text-gray-400">
//         <span>root@syncxel-hub:~</span>
//         <div className="flex space-x-1.5">
//           <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
//           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
//           <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
//         </div>
//       </div>
//       <div className="h-24 overflow-y-auto space-y-1 mb-2 text-cyan-300">
//         {logs.map((log, i) => <div key={i}>{log}</div>)}
//       </div>
//       <div className="flex items-center space-x-2 border-t border-cyan-500/20 pt-2">
//         <span className="text-cyan-500">$</span>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleCommand}
//           placeholder="type 'help'..."
//           className="bg-transparent focus:outline-none text-white w-full font-mono text-xs"
//         />
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function TerminalBox() {
//   const [input, setInput] = useState("");
//   const [logs, setLogs] = useState([
//     "Syncxel CLI v1.0.0 [Secure Shell]",
//     'Type "help" to see available commands.',
//   ]);
//   const navigate = useNavigate();

//   const handleCommand = (e) => {
//     if (e.key === "Enter") {
//       const cmd = input.trim().toLowerCase();
//       let res = `Command not recognized: "${cmd}". Type "help".`;

//       if (cmd === "help") {
//         res = "Available: help, docs, components, home, github, clear";
//       } else if (cmd === "docs") {
//         navigate("/docs");
//         res = "Redirecting to Documentation...";
//       } else if (cmd === "components") {
//         navigate("/components");
//         res = "Opening Components Hub...";
//       } else if (cmd === "home") {
//         navigate("/");
//         res = "Returning to Home...";
//       } else if (cmd === "github") {
//         window.open("https://github.com", "_blank");
//         res = "Opening GitHub repository...";
//       } else if (cmd === "clear") {
//         setLogs(["Terminal cleared."]);
//         setInput("");
//         return;
//       }

//       setLogs((prev) => [...prev, `> ${input}`, res]);
//       setInput("");
//     }
//   };

//   return (
//     <div className="bg-black/90 border border-cyan-500/40 rounded-xl p-4 font-mono text-xs text-cyan-400 max-w-md w-full shadow-[0_0_20px_rgba(34,211,238,0.2)]">
//       <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-500/20 text-gray-400">
//         <span>root@syncxel-hub:~</span>
//         <div className="flex space-x-1.5">
//           <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
//           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
//           <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
//         </div>
//       </div>
//       <div className="h-24 overflow-y-auto space-y-1 mb-2 text-cyan-300">
//         {logs.map((log, i) => (
//           <div key={i}>{log}</div>
//         ))}
//       </div>
//       <div className="flex items-center space-x-2 border-t border-cyan-500/20 pt-2">
//         <span className="text-cyan-500">$</span>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleCommand}
//           placeholder="type 'docs', 'components'..."
//           className="bg-transparent focus:outline-none text-white w-full font-mono text-xs"
//         />
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TerminalBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState([
    "Syncxel CLI v1.0.0 [Secure Shell]",
    'Type "help" to see available commands.',
  ]);
  const navigate = useNavigate();

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      let res = `Command not recognized: "${cmd}". Type "help".`;

      if (cmd === "help") {
        res = "Available: help, docs, components, home, github, clear, close";
      } else if (cmd === "docs") {
        navigate("/docs");
        res = "Redirecting to Documentation...";
        setIsOpen(false);
      } else if (cmd === "components") {
        navigate("/components");
        res = "Opening Components Hub...";
        setIsOpen(false);
      } else if (cmd === "home") {
        navigate("/");
        res = "Returning to Home...";
        setIsOpen(false);
      } else if (cmd === "github") {
        window.open("https://github.com", "_blank");
        res = "Opening GitHub repository...";
      } else if (cmd === "clear") {
        setLogs(["Terminal cleared."]);
        setInput("");
        return;
      } else if (cmd === "close") {
        setIsOpen(false);
        setInput("");
        return;
      }

      setLogs((prev) => [...prev, `> ${input}`, res]);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-50">
      {/* 🌟 Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black/90 hover:bg-cyan-950/80 border border-cyan-500/50 text-cyan-400 p-5 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 flex items-center justify-center group"
          title="Open Cyber Terminal">
          <span className="font-mono font-bold text-lg group-hover:scale-110 transition-transform">
            {/* Terminal Window SVG Icon */}
            <svg
              className="w-8 h-8 group-hover:scale-110 transition-transform text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
        </button>
      )}

      {/* 🌟 Popup Terminal Box */}
      {isOpen && (
        <div className="bg-black/95 backdrop-blur-md border border-cyan-500/50 rounded-xl p-4 font-mono text-xs text-cyan-400 w-80 sm:w-96 shadow-[0_0_30px_rgba(34,211,238,0.25)] animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-500/20 text-gray-400">
            <span className="text-cyan-300 font-bold">root@syncxel-hub:~</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-red-400 hover:text-red-300 font-bold px-1.5 py-0.5 rounded bg-red-950/30 border border-red-500/30">
              ✕
            </button>
          </div>
          <div className="h-32 overflow-y-auto space-y-1 mb-2 text-cyan-300">
            {logs.map((log, i) => (
              <div key={i} className="break-words">
                {log}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2 border-t border-cyan-500/20 pt-2">
            <span className="text-cyan-500">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              placeholder="type 'help', 'docs'..."
              autoFocus
              className="bg-transparent focus:outline-none text-white w-full font-mono text-xs"
            />
          </div>
        </div>
      )}
    </div>
  );
}
