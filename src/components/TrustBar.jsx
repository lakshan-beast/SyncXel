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

import React from "react";
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
    },
    {
      id: 2,
      icon: <HiOutlineBolt className="w-5 h-5 text-amber-400" />,
      value: "0s",
      label: "Setup Time Required",
    },
    {
      id: 3,
      icon: <HiOutlineSparkles className="w-5 h-5 text-purple-400" />,
      value: "100%",
      label: "Customizable Tailwind Code",
    },
    {
      id: 4,
      icon: <HiOutlineShieldCheck className="w-5 h-5 text-emerald-400" />,
      value: "Prod-Ready",
      label: "Tested & Accessible Components",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-4 my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-2xl">
        {stats.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col items-center sm:items-start text-center sm:text-left space-y-1 p-2 ${
              index !== 0 ? "sm:border-l sm:border-white/10 sm:pl-6" : ""
            }`}>
            <div className="flex items-center space-x-2">
              {item.icon}
              <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-exo">
                {item.value}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
