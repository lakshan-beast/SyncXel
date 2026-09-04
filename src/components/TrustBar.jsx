// import React from "react";
// import {
//   HiOutlineCodeBracket,
//   HiOutlineSparkles,
//   HiOutlineBolt,
//   HiOutlineShieldCheck,
// } from "react-icons/hi2";

// export default function TrustBar() {
//   const stats = [
//     {
//       id: 1,
//       icon: <HiOutlineCodeBracket className="w-5 h-5 text-syncxel-cyan" />,
//       value: "20+",
//       label: "UI Snippets & Templates",
//     },
//     {
//       id: 2,
//       icon: <HiOutlineBolt className="w-5 h-5 text-amber-400" />,
//       value: "0s",
//       label: "Setup Time Required",
//     },
//     {
//       id: 3,
//       icon: <HiOutlineSparkles className="w-5 h-5 text-purple-400" />,
//       value: "100%",
//       label: "Customizable Tailwind Code",
//     },
//     {
//       id: 4,
//       icon: <HiOutlineShieldCheck className="w-5 h-5 text-emerald-400" />,
//       value: "Production",
//       label: "Ready Components",
//     },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6 my-8">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-6 rounded-2xl bg-syncxel-card/40 border border-syncxel-border/60 backdrop-blur-md shadow-xl">
//         {stats.map((item) => (
//           <div key={item.id} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1 p-2">
//             <div className="flex items-center space-x-2">
//               {item.icon}
//               <span className="text-xl sm:text-2xl font-extrabold text-white font-exo">
//                 {item.value}
//               </span>
//             </div>
//             <p className="text-xs text-syncxel-text-muted font-medium">
//               {item.label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import {
//   HiOutlineCodeBracket,
//   HiOutlineSparkles,
//   HiOutlineBolt,
//   HiOutlineShieldCheck,
// } from "react-icons/hi2";

// export default function TrustBar() {
//   const stats = [
//     {
//       id: 1,
//       icon: <HiOutlineCodeBracket className="w-5 h-5 text-cyan-400" />,
//       value: "20+",
//       label: "UI Snippets & Templates",
//     },
//     {
//       id: 2,
//       icon: <HiOutlineBolt className="w-5 h-5 text-amber-400" />,
//       value: "0s",
//       label: "Setup Time Required",
//     },
//     {
//       id: 3,
//       icon: <HiOutlineSparkles className="w-5 h-5 text-purple-400" />,
//       value: "100%",
//       label: "Customizable Tailwind Code",
//     },
//     {
//       id: 4,
//       icon: <HiOutlineShieldCheck className="w-5 h-5 text-emerald-400" />,
//       value: "Prod-Ready",
//       label: "Tested & Accessible Components",
//     },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-8 py-4 my-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 rounded-2xl bg-slate-900/60 border-2 border-white/10 backdrop-blur-lg shadow-2xl">
//         {stats.map((item, index) => (
//           <div
//             key={item.id}
//             className={`flex flex-col items-center sm:items-start text-center sm:text-left space-y-1 p-2 ${
//               index !== 0 ? "md:border-t sm:border-white/10 sm:pl-6" : ""
//             }`}>
//             <div className="flex items-center space-x-2">
//               {item.icon}
//               <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-exo">
//                 {item.value}
//               </span>
//             </div>
//             <p className="text-xs text-slate-400 font-medium leading-relaxed">
//               {item.label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCodeBracket,
  HiOutlineSparkles,
  HiOutlineBolt,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

export default function TrustBar() {
  const stats = [
    {
      id: 1,
      icon: <HiOutlineCodeBracket className="w-5 h-5 text-cyan-400" />,
      value: "20+",
      label: "UI Snippets & Templates",
      glow: "hover:shadow-cyan-500/10",
    },
    {
      id: 2,
      icon: <HiOutlineBolt className="w-5 h-5 text-amber-400" />,
      value: "0s",
      label: "Setup Time Required",
      glow: "hover:shadow-amber-500/10",
    },
    {
      id: 3,
      icon: <HiOutlineSparkles className="w-5 h-5 text-purple-400" />,
      value: "100%",
      label: "Customizable Tailwind Code",
      glow: "hover:shadow-purple-500/10",
    },
    {
      id: 4,
      icon: <HiOutlineShieldCheck className="w-5 h-5 text-emerald-400" />,
      value: "Prod-Ready",
      label: "Tested & Accessible Components",
      glow: "hover:shadow-emerald-500/10",
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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6 my-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[#080b12]/90 border border-white/15 backdrop-blur-2xl shadow-2xl overflow-hidden">
        {/* Background Ambient Glow Effects */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {stats.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`group relative flex flex-col items-center sm:items-start text-center sm:text-left space-y-2.5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 shadow-lg ${item.glow}`}>
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {item.value}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
