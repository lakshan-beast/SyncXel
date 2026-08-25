import React, { useState } from "react";
import {
  HiArrowLeft,
  HiCheck,
  HiCode,
  HiEye,
  HiExternalLink,
  HiShoppingCart,
  HiSparkles,
  HiChatAlt2,
  HiBookOpen,
  HiCheckCircle,
} from "react-icons/hi";

export default function AllComponents() {
  // State for Main Tabs: "freemium" or "premium"
  const [mainTab, setMainTab] = useState("freemium");

  // State for Freemium Categories Sub-tabs
  const [activeCategory, setActiveCategory] = useState("Buttons");

  // State to track active sub-tab for individual free cards ("preview" or "code")
  const [cardTabs, setCardTabs] = useState({});

  // State to handle "Copied! ✨" feedback animation/text
  const [copiedId, setCopiedId] = useState(null);

  const toggleCardTab = (id, tab) => {
    setCardTabs((prev) => ({ ...prev, [id]: tab }));
  };

  const handleCopy = (id, codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // Categories list for Freemium
  const categories = ["Buttons", "Cards", "Loaders", "Navbars"];

  // Mock Data for Free Components (Freemium with Categories)
  const freeComponents = [
    {
      id: "btn-primary",
      title: "Interactive Primary Button",
      category: "Buttons",
      description:
        "Clean Tailwind button with smooth hover animation and glowing effect.",
      code: `<button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer">\n  Click Me\n</button>`,
    },
    {
      id: "btn-outline",
      title: "Cyber Outline Button",
      category: "Buttons",
      description: "Sleek dark-mode outline button with border transition.",
      code: `<button className="px-4 py-2 bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 font-medium rounded-xl transition-all cursor-pointer">\n  Explore More\n</button>`,
    },
    {
      id: "card-stats",
      title: "Stats Glass Card",
      category: "Cards",
      description:
        "Glassmorphism card designed for SaaS metrics and data display.",
      code: `<div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-md">\n  <h4 className="text-2xl font-black text-white">500+</h4>\n  <p className="text-xs text-slate-400 mt-1">Active Users</p>\n</div>`,
    },
    {
      id: "card-pricing",
      title: "Pricing Mini Card",
      category: "Cards",
      description:
        "Minimalist modern pricing card with active highlight state.",
      code: `<div className="p-6 bg-slate-900/60 border border-cyan-500/40 rounded-2xl shadow-xl">\n  <span className="text-xs text-cyan-400 font-bold">PRO</span>\n  <h4 className="text-xl font-bold text-white mt-1">$19 <span className="text-xs text-slate-400">/month</span></h4>\n</div>`,
    },
    {
      id: "loader-spinner",
      title: "Cyber Spinner Loader",
      category: "Loaders",
      description:
        "Modern spinning loader with cyan glowing dual-border effect.",
      code: `<div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />`,
    },
    {
      id: "loader-pulse",
      title: "Pulsing Dot Loader",
      category: "Loaders",
      description: "Subtle pulsing dot indicator for live status updates.",
      code: `<div className="flex items-center space-x-2">\n  <span className="w-3 h-3 bg-cyan-400 rounded-full animate-ping" />\n  <span className="text-xs text-slate-300">Live system</span>\n</div>`,
    },
    {
      id: "navbar-basic",
      title: "Minimal Navbar Fragment",
      category: "Navbars",
      description:
        "Responsive branding and link layout ready for agency landing pages.",
      code: `<nav className="flex items-center justify-between px-6 py-4 bg-slate-900/80 border border-slate-800 rounded-2xl">\n  <span className="font-black text-white">Syncxel.</span>\n  <div className="flex space-x-4 text-xs text-slate-300">\n    <a href="#features">Features</a>\n    <a href="#pricing">Pricing</a>\n  </div>\n</nav>`,
    },
  ];

  // Filtered components based on selected category
  const filteredFreeComponents = freeComponents.filter(
    (item) => item.category === activeCategory,
  );

  // Mock Data for Premium UI-Kit (Templates)
  const premiumKits = [
    {
      id: "kit-photographer",
      title: "Photographer Portfolio & Agency Kit",
      category: "Full Template Suite",
      price: "$19",
      description:
        "Complete dark-mode ready photographer website template with Navbar, Hero, Services, Contact, Footer, and Framer Motion animations fully integrated.",
      previewImg: "src/assets/photograpy-website.png",
      demoUrl: "https://photography-website-puce-omega.vercel.app",
      checkoutUrl: "https://yourstore.lemonsqueezy.com/buy/your-product-id",
    },
  ];

  // Telegram username for custom engineering / modifications
  //   const telegramUsername = "lakshan_dev";
  //   const telegramCustomLink = `https://t.me/${telegramUsername}?text=Hi,%20I%20want%20to%20customize%20the%20Syncxel%20UI-Kit%20for%20my%20project.`;

//   const telegramCustomLink = `https://t.me/lakshan_dev?text=${encodeURIComponent(
//     `Hi, I want to customize the "${kit.title}" UI-Kit for my project. Let's discuss!`,
//   )}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. TOP HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="p-2.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-xl transition-all text-slate-300 hover:text-white flex items-center space-x-2 text-xs font-medium cursor-pointer">
            <HiArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
          <span className="text-xs text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-800">
            Last Updated: <strong className="text-cyan-400">August 2026</strong>
          </span>
        </div>

        {/* Friendly Free Usage Banner */}
        <div className="bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-xl flex items-center space-x-2 text-xs text-cyan-300">
          <HiSparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <span>
            All free components can be used anywhere in your personal & client
            projects freely!
          </span>
        </div>
      </div>

      {/* Main Heading & Description */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Syncxel <span className="text-cyan-400">Developer Hub</span>
        </h1>
        <p className="text-sm text-slate-400 mt-2">
          Explore modular React & Tailwind components or unlock professional
          production-grade UI-Kit bundles.
        </p>
      </div>

      {/* 2. MAIN TABS SWITCHER (Freemium vs Premium UI-Kit) */}
      <div className="flex justify-center mb-10">
        <div className="bg-slate-900 p-1.5 rounded-2xl border border-slate-800 flex space-x-2 shadow-xl">
          <button
            onClick={() => setMainTab("freemium")}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              mainTab === "freemium"
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                : "text-slate-400 hover:text-white"
            }`}>
            🧩 Freemium Components (Free)
          </button>
          <button
            onClick={() => setMainTab("premium")}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              mainTab === "premium"
                ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20"
                : "text-slate-400 hover:text-white"
            }`}>
            🚀 Premium UI-Kit (Templates)
          </button>
        </div>
      </div>

      {/* 3. CONTENT AREA BASED ON MAIN TAB */}
      {mainTab === "freemium" ? (
        /* --- FREEMIUM TAB CONTENT WITH CATEGORIES --- */
        <div>
          {/* Categories Navigation Sub-tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? "bg-slate-800 text-cyan-400 border-cyan-500/40 shadow-md"
                    : "bg-slate-900/40 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-900"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Component Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFreeComponents.map((item) => {
              const currentTab = cardTabs[item.id] || "preview";
              const isCopied = copiedId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl">
                  {/* Card Header */}
                  <div className="p-4 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {item.title}
                      </h3>
                      <span className="text-[10px] text-cyan-400 uppercase tracking-wider font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md border border-emerald-400/20">
                      Free
                    </span>
                  </div>

                  {/* Sub-Tabs (Preview vs Code) */}
                  <div className="flex bg-slate-950 px-4 py-2 border-b border-slate-800/60 space-x-2">
                    <button
                      onClick={() => toggleCardTab(item.id, "preview")}
                      className={`text-xs px-3 py-1 rounded-lg font-medium transition-all flex items-center space-x-1 cursor-pointer ${currentTab === "preview" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"}`}>
                      <HiEye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={() => toggleCardTab(item.id, "code")}
                      className={`text-xs px-3 py-1 rounded-lg font-medium transition-all flex items-center space-x-1 cursor-pointer ${currentTab === "code" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"}`}>
                      <HiCode className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 min-h-[160px] bg-slate-950/60 flex items-center justify-center">
                    {currentTab === "preview" ? (
                      <div className="text-center w-full">
                        <p className="text-xs text-slate-400 mb-4">
                          {item.description}
                        </p>

                        {/* Dynamic Render Based on ID */}
                        {item.id === "btn-primary" && (
                          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer">
                            Click Me
                          </button>
                        )}
                        {item.id === "btn-outline" && (
                          <button className="px-4 py-2 bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 text-xs font-medium rounded-xl transition-all cursor-pointer">
                            Explore More
                          </button>
                        )}
                        {item.id === "card-stats" && (
                          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-left">
                            <h4 className="text-lg font-black text-white">
                              500+
                            </h4>
                            <p className="text-[10px] text-slate-400">
                              Active Users
                            </p>
                          </div>
                        )}
                        {item.id === "card-pricing" && (
                          <div className="p-4 bg-slate-900/60 border border-cyan-500/40 rounded-xl text-left">
                            <span className="text-[10px] text-cyan-400 font-bold">
                              PRO
                            </span>
                            <h4 className="text-base font-bold text-white mt-0.5">
                              $19{" "}
                              <span className="text-[10px] text-slate-400">
                                /mo
                              </span>
                            </h4>
                          </div>
                        )}
                        {item.id === "loader-spinner" && (
                          <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto" />
                        )}
                        {item.id === "loader-pulse" && (
                          <div className="flex items-center justify-center space-x-2">
                            <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
                            <span className="text-xs text-slate-300">
                              Live system
                            </span>
                          </div>
                        )}
                        {item.id === "navbar-basic" && (
                          <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-left">
                            <span className="font-bold text-xs text-white">
                              Syncxel.
                            </span>
                            <div className="flex space-x-2 text-[10px] text-slate-400">
                              <span>Features</span>
                              <span>Pricing</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <pre className="w-full h-32 overflow-auto text-[11px] text-cyan-300 bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-left">
                        <code>{item.code}</code>
                      </pre>
                    )}
                  </div>

                  {/* Footer Action with Dynamic "Copied! ✨" feedback */}
                  <div className="p-3 bg-slate-900/80 flex items-center justify-between border-t border-slate-800">
                    <span className="text-[10px] text-slate-400">
                      Ready to copy
                    </span>
                    <button
                      onClick={() => handleCopy(item.id, item.code)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center space-x-1 ${
                        isCopied
                          ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                          : "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                      }`}>
                      {isCopied ? (
                        <>
                          <HiCheck className="w-3.5 h-3.5" />
                          <span>Copied! ✨</span>
                        </>
                      ) : (
                        <>
                          <HiCheck className="w-3.5 h-3.5" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* --- PREMIUM UI-KIT TAB CONTENT --- */
        <div className="max-w-6xl mx-auto">
          {premiumKits.map((kit) => {
            const kitTelegramLink = `https://t.me/lakshan_dev?text=${encodeURIComponent(
              `Hi, I want to customize the "${kit.title}" UI-Kit for my project. Let's discuss!`,
            )}`;

            return (
              <div
                key={kit.id}
                className="bg-slate-900/60 border-2 border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Kit Image Preview */}
                  <div className="relative h-64 lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
                    <img
                      src={kit.previewImg}
                      alt={kit.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold text-amber-950 bg-amber-400 px-3 py-1 rounded-full shadow-lg">
                        Pro UI-Kit • {kit.price}
                      </span>
                    </div>
                  </div>

                  {/* Kit Details & Actions */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {kit.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mb-6">
                        {kit.description}
                      </p>

                      {/* Features checklist included in kit */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center space-x-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          <span>
                            Navbar, Hero, Services, Contacts & Footer included
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          <span>
                            Framer Motion smooth animations & dark mode enabled
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          <span>
                            Instant .zip download via Lemon Squeezy with
                            README.md
                          </span>
                        </div>
                      </div>

                      {/* Documentation Note Box */}
                      <div className="bg-amber-500/10 border border-amber-500/20 p-3.5 rounded-2xl mb-6">
                        <div className="flex items-start space-x-2 text-xs text-amber-200">
                          <HiBookOpen className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-white block mb-0.5">
                              A-Z Documentation Included:
                            </strong>
                            <span>
                              Get complete setup guides for Firebase, Supabase,
                              EmailJS, Vercel & GitHub via our docs or inside
                              your `.zip` download. Visit{" "}
                              <a
                                href="/docs"
                                className="text-amber-400 underline font-semibold">
                                syncxel.com/docs
                              </a>
                              .
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Buy / Demo & Customize Actions */}
                    <div className="space-y-3 pt-4 border-t border-slate-800">
                      <div className="flex items-center space-x-3">
                        {kit.demoUrl && (
                          <a
                            href={kit.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer">
                            <HiExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                        <a
                          href={kit.checkoutUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-amber-400/20 cursor-pointer">
                          <HiShoppingCart className="w-4 h-4" />
                          <span>Get UI-Kit ({kit.price})</span>
                        </a>
                      </div>

                      {/* Telegram Customize Upsell Button */}
                      <a
                        href={kitTelegramLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/60 text-slate-200 hover:text-white rounded-xl text-xs font-medium flex items-center justify-center space-x-2 transition-all cursor-pointer">
                        <HiChatAlt2 className="w-4 h-4 text-cyan-400" />
                        <span>Customize "{kit.title}" on Telegram 🚀</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
//
