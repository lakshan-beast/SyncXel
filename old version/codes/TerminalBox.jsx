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

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function TerminalBox() {
//   const [isOpen, setIsOpen] = useState(false);
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
//         res = "Available: help, docs, components, home, github, clear, close";
//       } else if (cmd === "docs") {
//         navigate("/docs");
//         res = "Redirecting to Documentation...";
//         setIsOpen(false);
//       } else if (cmd === "components") {
//         navigate("/components");
//         res = "Opening Components Hub...";
//         setIsOpen(false);
//       } else if (cmd === "home") {
//         navigate("/");
//         res = "Returning to Home...";
//         setIsOpen(false);
//       } else if (cmd === "github") {
//         window.open("https://github.com/lakshan-beast/SyncXel", "_blank");
//         res = "Opening GitHub repository...";
//       } else if (cmd === "clear") {
//         setLogs(["Terminal cleared."]);
//         setInput("");
//         return;
//       } else if (cmd === "close") {
//         setIsOpen(false);
//         setInput("");
//         return;
//       }

//       setLogs((prev) => [...prev, `> ${input}`, res]);
//       setInput("");
//     }
//   };

//   return (
//     <div className="fixed bottom-24 right-4 z-50">
//       {/* 🌟 Floating Trigger Button */}
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-black/90 hover:bg-cyan-950/80 border border-cyan-500/50 text-cyan-400 p-5 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 flex items-center justify-center group"
//           title="Open Cyber Terminal">
//           <span className="font-mono font-bold text-lg group-hover:scale-110 transition-transform">
//             {/* Terminal Window SVG Icon */}
//             <svg
//               className="w-8 h-8 group-hover:scale-110 transition-transform text-cyan-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//               />
//             </svg>
//           </span>
//         </button>
//       )}

//       {/* 🌟 Popup Terminal Box */}
//       {isOpen && (
//         <div className="bg-black/95 backdrop-blur-md border border-cyan-500/50 rounded-xl p-4 font-mono text-xs text-cyan-400 w-80 sm:w-96 shadow-[0_0_30px_rgba(34,211,238,0.25)] animate-in fade-in slide-in-from-bottom-5 duration-200">
//           <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-500/20 text-gray-400">
//             <span className="text-cyan-300 font-bold">root@syncxel-hub:~</span>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-red-400 hover:text-red-300 font-bold px-1.5 py-0.5 rounded bg-red-950/30 border border-red-500/30">
//               ✕
//             </button>
//           </div>
//           <div className="h-32 overflow-y-auto space-y-1 mb-2 text-cyan-300">
//             {logs.map((log, i) => (
//               <div key={i} className="wrap-break-word">
//                 {log}
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center space-x-2 border-t border-cyan-500/20 pt-2">
//             <span className="text-cyan-500">$</span>
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleCommand}
//               placeholder="type 'help', 'docs'..."
//               autoFocus
//               className="bg-transparent focus:outline-none text-white w-full font-mono text-xs"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TerminalBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState([
    { type: "system", text: "SYNCXEL_OS v2.4.0 [Secure Core Active]" },
    { type: "info", text: 'Type "help" to list available system commands.' },
  ]);
  const navigate = useNavigate();

  // 🌟 Allow opening terminal from Mobile Navbar via custom event
  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    window.addEventListener("toggle-terminal", handleToggle);
    return () => window.removeEventListener("toggle-terminal", handleToggle);
  }, []);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      let newLogs = [...logs, { type: "user", text: `$ ${input}` }];

      if (cmd === "help") {
        newLogs.push({
          type: "success",
          text: "Commands: help, docs, components, home, status, whoami, github, clear, close",
        });
      } else if (cmd === "docs") {
        navigate("/docs");
        newLogs.push({ type: "success", text: "Redirecting to /docs..." });
        setIsOpen(false);
      } else if (cmd === "components") {
        navigate("/components");
        newLogs.push({ type: "success", text: "Opening Components Hub..." });
        setIsOpen(false);
      } else if (cmd === "home") {
        navigate("/");
        newLogs.push({ type: "success", text: "Returning to Home..." });
        setIsOpen(false);
      } else if (cmd === "status") {
        newLogs.push({
          type: "info",
          text: "SYS: Optimal | CPU: 1.4% | RAM: 320MB | Firewall: 256-Bit SECURE",
        });
      } else if (cmd === "whoami") {
        newLogs.push({
          type: "info",
          text: "USER: guest@syncxel-node-01 [Access Level: Developer]",
        });
      } else if (cmd === "github") {
        window.open("https://github.com", "_blank");
        newLogs.push({
          type: "success",
          text: "Opening GitHub repository in new tab...",
        });
      } else if (cmd === "clear") {
        setLogs([{ type: "system", text: "Terminal buffer cleared." }]);
        setInput("");
        return;
      } else if (cmd === "close") {
        setIsOpen(false);
        setInput("");
        return;
      } else {
        newLogs.push({
          type: "error",
          text: `Command not found: "${cmd}". Type "help" for assistance.`,
        });
      }

      setLogs(newLogs);
      setInput("");
    }
  };

  return (
    <>
      {/* 🌟 Desktop Floating Trigger Button (Hidden on Mobile, Visible on LG screens) */}
      <div className="hidden lg:block fixed bottom-24 right-7 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-black/90 hover:bg-cyan-950/90 border border-cyan-500/60 text-cyan-400 p-3.5 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.25)] backdrop-blur-xl transition-all duration-300 flex items-center justify-center group hover:border-cyan-400"
            title="Open Cyber Terminal">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform text-cyan-400"
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
          </button>
        )}
      </div>

      {/* 🌟 Gorgeous Cyberpunk Terminal Modal */}
      {isOpen && (
        <div className="fixed inset-0 lg:inset-auto lg:bottom-4 lg:right-20 z-50 flex items-center justify-center p-4 lg:p-0">
          {/* Backdrop blur for mobile popup */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md lg:hidden"
            onClick={() => setIsOpen(false)}></div>

          <div className="relative bg-[#030712]/95 backdrop-blur-2xl border border-cyan-500/50 rounded-2xl p-4 font-mono text-xs w-full max-w-md shadow-[0_0_50px_rgba(34,211,238,0.3)] animate-in fade-in zoom-in-95 duration-200">
            {/* Window Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-cyan-500/20">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <span className="text-cyan-300 font-bold ml-2 tracking-wider">
                  root@syncxel-hub:~
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-red-400 font-bold px-2 py-0.5 rounded-lg bg-gray-900 border border-gray-800 transition-colors">
                ✕
              </button>
            </div>

            {/* Logs Screen */}
            <div className="h-48 lg:h-36 overflow-y-auto space-y-1.5 mb-3 pr-2 scrollbar-thin scrollbar-thumb-cyan-500/30">
              {logs.map((log, i) => (
                <div
                  key={i}
                  className={`break-words leading-relaxed ${
                    log.type === "error"
                      ? "text-red-400"
                      : log.type === "success"
                        ? "text-green-400 font-semibold"
                        : log.type === "info"
                          ? "text-yellow-300"
                          : log.type === "user"
                            ? "text-cyan-200 font-bold"
                            : "text-gray-400"
                  }`}>
                  {log.text}
                </div>
              ))}
            </div>

            {/* Input Prompt */}
            <div className="flex items-center space-x-2 border-t border-cyan-500/20 pt-3">
              <span className="text-cyan-400 font-bold">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="type 'help', 'status', 'docs'..."
                autoFocus
                className="bg-transparent focus:outline-none text-white w-full font-mono text-xs placeholder:text-gray-600"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
