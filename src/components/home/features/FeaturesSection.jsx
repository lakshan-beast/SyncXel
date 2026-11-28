// import FeaturesHeader from "./FeaturesHeader";
// import FeaturesGrid from "./FeaturesGrid";

// export default function FeaturesSection() {
//   return (
//     <section
//       id="features-section"
//       className="relative isolate overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32 bg-slate-50 dark:bg-slate-900/80">
//       {/* Background atmosphere */}
//       {/* <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-400/50 blur-[120px] dark:bg-blue-500/20" />

//         <div className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-indigo-400/60 blur-[120px] dark:bg-indigo-500/20" />

//         <div className="absolute inset-0 opacity-[0.095] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-[0.125]" />
//       </div> */}

//       <div className="mx-auto max-w-7xl">
//         <FeaturesHeader />
//         <FeaturesGrid />
//       </div>
//     </section>
//   );
// }

import FeaturesHeader from "./FeaturesHeader";
import FeaturesGrid from "./FeaturesGrid";

export default function FeaturesSection() {
  return (
    <section
      id="features-section"
      className="relative isolate overflow-hidden bg-[#080f1e] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-emerald-400/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-emerald-500/[0.04] blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <FeaturesHeader />
        <FeaturesGrid />
      </div>
    </section>
  );
}
