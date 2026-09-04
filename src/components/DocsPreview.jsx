// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   HiOutlineTerminal,
//   HiOutlineCode,
//   HiOutlineCloudUpload,
//   HiOutlineSparkles,
//   HiOutlineArrowRight,
//   HiBookmark,
// } from "react-icons/hi"; // Or standard react-icons

// export default function DocsPreviewSection() {
//   const features = [
//     {
//       icon: HiOutlineCode,
//       title: "Backend Integrations",
//       desc: "Instant copy-paste snippets for Formspree, EmailJS, Resend & Supabase auth.",
//     },
//     {
//       icon: HiOutlineCloudUpload,
//       title: "Vercel & SEO Guides",
//       desc: "Fix SPA 404 errors, environment setup, and OpenGraph social meta tags.",
//     },
//     {
//       icon: HiOutlineTerminal,
//       title: "Git & Terminal Troubleshooting",
//       desc: "Conventional commits cheat-sheet and immediate fixes for common Git push bugs.",
//     },
//     {
//       icon: HiOutlineSparkles,
//       title: "Custom Hooks & Motion",
//       desc: "Reusable React custom hooks (useDebounce, useLocalStorage) and Tailwind animation effects.",
//     },
//   ];

//   return (
//     <section className="py-20 px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
//       <div className="p-4 sm:p-12 relative overflow-hidden">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12 space-y-1">
//           <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
//             <HiBookmark className="w-4 h-4" />{" "}
//             <span>Free Developer Ecosystem</span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 mb-3">
//             Everything You Need To
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500 ml-2">
//               Build & Deploy Faster
//             </span>
//           </h2>
//           <p className="text-sm text-slate-400">
//             Syncxel isn't just a component library. Access our curated knowledge
//             hub to solve frontend challenges in seconds.
//           </p>
//         </div>

//         {/* Feature Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-3 mb-10">
//           {features.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-slate-950/90 py-5 px-10 rounded-4xl border-3 md:border-2 border-white/10 hover:border-cyan-500/30 transition-all">
//                 <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-500/20">
//                   <Icon className="w-5 h-5" />
//                 </div>
//                 <h3 className="text--2xl font-bold text-white mb-1">
//                   {item.title}
//                 </h3>
//                 <p className="text-xs text-slate-400 leading-4 md:leading-relaxed pt-2">
//                   {item.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA Button */}
//         <div className="text-center -mt-3">
//           <Link
//             to="/docs"
//             className="inline-flex items-center space-x-2 mt-1 px-6 py-3 bg-cyan-500 text-slate-950 font-bold text-sm rounded-xl hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 hover:gap-1 transition-all duration-300">
//             <span>Explore Developer Documentation</span>
//             <HiOutlineArrowRight className="w-4 h-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiOutlineTerminal,
  HiOutlineCode,
  HiOutlineCloudUpload,
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiBookmark,
} from "react-icons/hi";

export default function DocsPreviewSection() {
  const features = [
    {
      icon: HiOutlineCode,
      title: "Backend Integrations",
      desc: "Instant copy-paste snippets for Formspree, EmailJS, Resend & Supabase auth.",
      glow: "hover:shadow-cyan-500/10",
    },
    {
      icon: HiOutlineCloudUpload,
      title: "Vercel & SEO Guides",
      desc: "Fix SPA 404 errors, environment setup, and OpenGraph social meta tags.",
      glow: "hover:shadow-indigo-500/10",
    },
    {
      icon: HiOutlineTerminal,
      title: "Git & Terminal Troubleshooting",
      desc: "Conventional commits cheat-sheet and immediate fixes for common Git push bugs.",
      glow: "hover:shadow-purple-500/10",
    },
    {
      icon: HiOutlineSparkles,
      title: "Custom Hooks & Motion",
      desc: "Reusable React custom hooks (useDebounce, useLocalStorage) and Tailwind animation effects.",
      glow: "hover:shadow-pink-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 p-2 sm:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold shadow-sm">
            <HiBookmark className="w-4 h-4" />
            <span>Free Developer Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need To{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500">
              Build & Deploy Faster
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Syncxel isn't just a component library. Access our curated knowledge
            hub to solve frontend challenges in seconds.
          </p>
        </motion.div>

        {/* Feature Grid with Framer Motion Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative bg-slate-950/80 p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl backdrop-blur-xl ${item.glow}`}>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 border border-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center">
          <Link
            to="/docs"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-cyan-500 text-slate-950 font-bold text-sm sm:text-base rounded-2xl hover:bg-cyan-400 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300">
            <span>Explore Developer Documentation</span>
            <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
