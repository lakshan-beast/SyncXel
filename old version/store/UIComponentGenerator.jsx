import { useState, useEffect, useRef } from "react";
import {
  FaPaperPlane,
  FaXmark,
  FaCircle,
  FaCode,
  FaCopy,
  FaCheck,
  FaPalette,
} from "react-icons/fa6";
import { RiRobot3Fill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";

const UIComponentGenerator = () => {
  // 1. Core UI States
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  // 2. Initial Chat State
  const [messages, setMessages] = useState([
    {
      role: "user",
      text: "Can you build a modern glassmorphism card component?",
    },
    {
      role: "model",
      text: "Hello! I am SyncXelUI Generator. I can generate production-ready React, Tailwind CSS, and Framer Motion components for you. What would you like to build today?",
    },
  ]);

  // 3. System Prompt for UI Generation
  //   const SYSTEM_INSTRUCTION = `
  //   You are 'SyncXelUI Generator', an expert Senior Frontend Engineer specializing in React, Tailwind CSS, and Framer Motion.

  //   [1. CORE PURPOSE] - When a user requests a UI component (e.g., button, card, navbar, modal, pricing table), generate clean, high-quality, production-ready React functional component code using Tailwind CSS classes and Framer Motion animations.

  //   [2. CODE FORMAT] - Always wrap generated code inside standard Markdown code blocks using \`\`\`jsx ... \`\`\`.

  //   [3. TONALITY & LANGUAGE] - Respond in a friendly, professional mix of English and Sinhala (Singlish phrasing allowed). Keep explanations concise and focused on the code structure.
  //   `;

  const SYSTEM_INSTRUCTION = `
You are **SyncXelUI Engine**, an elite Principal Frontend Engineer and Design System Architect specializing in modern, high-conversion, production-ready React (JSX/TSX), Tailwind CSS, and Framer Motion physics-based animations.

---

### [1. CORE MISSION]
When a user requests any UI component (e.g., Hero Section, Bento Grid, Interactive Navbar, Glassmorphism Card, Pricing Matrix, Modal, SaaS Dashboard widget):
Generate clean, performant, responsive, accessible, and visual-first React functional components built for 2026/2027 modern web standards.

---

### [2. 2026/2027 DESIGN & MOTION STANDARDS]
- **Visual Aesthetics**: Default to high-end dark modes (\`bg-slate-950\`, \`bg-zinc-900\`), subtle border ambient lights (\`border-white/10\`), glassmorphism backdrop blurs (\`backdrop-blur-xl\`), neo-brutalist or terminal elements, radial gradient glows, and refined typography.
- **Micro-Interactions**: Use Framer Motion for spring-physics animations (\`type: "spring"\`, \`stiffness: 300\`, \`damping: 20\`), staggered entry motions (\`initial\`, \`animate\`, \`whileHover\`, \`whileTap\`), and layout transitions (\`layoutId\`).
- **Icons**: Utilize \`lucide-react\` icons exclusively for ultra-crisp, consistent visual indicators.
- **Responsiveness & A11y**: Mobile-first design using dynamic Tailwind grids (\`grid-cols-1 md:grid-cols-3\`), semantic HTML (\`<article>\`, \`<section>\`, \`<nav>\`), and keyboard-navigable interactive elements with custom focus states.

---

### [3. STRICT CODE DELIVERY RULES]
1. **Self-Contained & Production-Ready**: Always include top-level imports (\`react\`, \`framer-motion\`, \`lucide-react\`). Include necessary mock data inline inside the code so it works out-of-the-box upon copy-pasting.
2. **Code Format**: Always wrap code in a single standard Markdown code block using \\\`\\\`\\\`jsx ... \\\`\\\`\\\` or \\\`\\\`\\\`tsx ... \\\`\\\`\\\`.
3. **No Placeholders**: Never use dummy \`// insert code here\` comments. Provide full, fully-functional components.

---

### [4. TONALITY & OUTPUT STRUCTURE]
- **Style**: Direct, professional, developer-focused, and friendly mix of English and Sinhala (Singlish phrasing permitted).
- **Format**:
  1. Brief 1-2 sentence overview of the component structure & animation logic.
  2. The complete Code Block (\`\\\`\\\`\\\`jsx ... \\\`\\\`\\\`).
  3. Short bullet points highlighting key features (e.g., Motion effects, Tailwind utility tricks, Responsive breakpoints).
`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // 🤖 Gemini API Core Engine
  const sendMessageToGemini = async (userMessage) => {
    if (!userMessage.trim()) return;
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        console.error("API Key is missing!");
        setMessages((prev) => [
          ...prev,
          {
            role: "model",
            text: "VITE_GEMINI_API_KEY is missing in your environment variables!",
          },
        ]);
        setIsTyping(false);
        return;
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: SYSTEM_INSTRUCTION,
      });

      const chatHistoryForSDK = messages
        .filter((msg) => msg.text && msg.text.trim() !== "")
        .map((msg) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        }));

      if (
        chatHistoryForSDK.length > 0 &&
        chatHistoryForSDK[0].role === "model"
      ) {
        chatHistoryForSDK.shift();
      }

      const chat = model.startChat({ history: chatHistoryForSDK });
      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const botReply =
        response.text() ||
        "Small server error occurred. Please try sending your prompt again.";

      setMessages((prev) => [...prev, { role: "model", text: botReply }]);
    } catch (error) {
      console.error("Gemini SDK Core Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Technical connection error occurred with Gemini API!",
        },
      ]);
    }

    setIsTyping(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    const userText = inputText.trim();
    setInputText("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);

    await sendMessageToGemini(userText);
  };

  // Code Copy Handler
  const handleCopyCode = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Helper to extract code blocks from markdown if needed or render simple text
  const renderMessageContent = (text, index) => {
    return (
      <div className="space-y-2">
        <p className="whitespace-pre-wrap leading-relaxed text-sm">{text}</p>
      </div>
    );
  };

  return (
    <>
      {/* 🚀 FLOATING BUBBLE */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-23 right-4 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-indigo-600 to-violet-500 text-white rounded-full shadow-xl cursor-pointer ring-4 ring-indigo-500/20">
            <RiRobot3Fill className="text-3xl animate-pulse" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 rounded-full ring-2 ring-white animate-ping"></span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🪟 THE MAIN CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-22 right-3 sm:right-6 z-50 w-[92vw] sm:w-[420px] h-[600px] bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 overflow-y-scroll scrollbar-none">
            {/* A. HEADER */}
            <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-xl">
                  <RiRobot3Fill className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm tracking-wide">
                    SyncXelUI • Generator
                  </h4>
                  <p className="text-[11px] text-indigo-100 flex items-center gap-1.5">
                    <FaCircle className="text-emerald-400 text-[8px]" /> React &
                    Tailwind AI
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer">
                <FaXmark className="text-lg" />
              </button>
            </div>

            {/* B. MESSAGES STREAM */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((msg, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={index}
                  className={`flex flex-col ${
                    msg.role === "user" ? "items-end" : "items-start"
                  }`}>
                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl text-sm shadow-sm ${
                      msg.role === "user"
                        ? "bg-indigo-600 text-white rounded-br-xs"
                        : "bg-white text-gray-800 border border-gray-100 rounded-bl-xs"
                    }`}>
                    {renderMessageContent(msg.text, index)}
                  </div>
                </motion.div>
              ))}

              {/* ⏳ TYPING INDICATOR */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 bg-white border border-gray-100 px-4 py-3 rounded-2xl w-fit shadow-sm">
                  <span className="text-xs text-gray-400 font-medium">
                    Generating UI component
                  </span>
                  <div className="flex space-x-1">
                    <div
                      className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0s" }}></div>
                    <div
                      className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}></div>
                    <div
                      className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* C. QUICK SUGGESTIONS DOCK */}
            <div className="px-3 py-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() =>
                  setInputTokenAndSend(
                    "Glassmorphism login card එකක් හදලා දෙන්න.",
                  )
                }
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 text-xs font-medium rounded-full border border-gray-200 transition-colors whitespace-nowrap cursor-pointer">
                <FaPalette className="text-indigo-500 text-xs" /> Glass Card
              </button>
              <button
                type="button"
                onClick={() =>
                  setInputText("Animated pricing table 3 tiers එකක් හදන්න.")
                }
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 text-xs font-medium rounded-full border border-gray-200 transition-colors whitespace-nowrap cursor-pointer">
                <FaCode className="text-violet-500 text-xs" /> Pricing Table
              </button>
            </div>

            {/* D. BOTTOM INPUT FORM */}
            <form
              onSubmit={handleFormSubmit}
              className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask UI to generate components..."
                className="flex-1 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={inputText.trim() === "" || isTyping}
                className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer shadow-md shadow-indigo-500/20">
                <FaPaperPlane className="text-sm" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UIComponentGenerator;
