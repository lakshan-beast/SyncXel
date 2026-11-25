// import { workflowSteps } from "../../../data/workflowData";
// import WorkflowStep from "./WorkflowStep";

// export default function WorkflowTimeline() {
//   return (
//     <div className="relative">
//       {/* Desktop connecting line */}
//       <div className="absolute left-[8.33%] right-[8.33%] top-6 hidden h-px bg-gradient-to-r from-slate-200 via-blue-300 to-slate-200 lg:block dark:from-slate-800 dark:via-blue-500/40 dark:to-slate-800" />

//       {/* Mobile vertical connecting line */}
//       <div className="absolute bottom-12 left-6 top-6 w-px bg-gradient-to-b from-blue-300 via-slate-200 to-transparent sm:left-6 lg:hidden dark:from-blue-500/50 dark:via-slate-700 dark:to-transparent" />

//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-6 lg:gap-5">
//         {workflowSteps.map((step, index) => (
//           <div key={step.number} className="relative pl-0 sm:pl-0">
//             <WorkflowStep step={step} index={index} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { workflowSteps } from "../../../data/workflowData";
// import WorkflowStep from "./WorkflowStep";

// export default function WorkflowTimeline() {
//   return (
//     <div className="relative">
//       {/* Desktop curved connector */}
//       {/* <svg
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
//         viewBox="0 0 1000 1000"
//         preserveAspectRatio="none">
//         <defs>
//           <linearGradient
//             id="workflow-connector-gradient"
//             x1="0"
//             y1="0"
//             x2="0"
//             y2="1">
//             <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.45" />
//             <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.65" />
//             <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.45" />
//           </linearGradient>
//         </defs>

//         <path
//           d="M 833 24 H 955 Q 975 24 975 44 V 490 Q 975 510 955 510 H 833"
//           fill="none"
//           stroke="url(#workflow-connector-gradient)"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           vectorEffect="non-scaling-stroke"
//         />
//       </svg> */}

//       {/* Desktop timeline connectors */}
//       <svg
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
//         viewBox="0 0 1000 1000"
//         preserveAspectRatio="none">
//         <defs>
//           <linearGradient id="workflow-line" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.35" />
//             <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.65" />
//             <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.35" />
//           </linearGradient>
//         </defs>

//         {/* 01 → 02 → 03 */}
//         <path
//           d="M 120 24 H 880"
//           fill="none"
//           stroke="url(#workflow-line)"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           vectorEffect="non-scaling-stroke"
//         />

//         {/* 03 → 04 curved turn */}
//         <path
//           d="M 880 24 H 955 Q 975 24 975 44 V 510 Q 975 530 955 530 H 880"
//           fill="none"
//           stroke="url(#workflow-line)"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           vectorEffect="non-scaling-stroke"
//         />

//         {/* 04 → 05 → 06 */}
//         <path
//           d="M 880 530 H 120"
//           fill="none"
//           stroke="url(#workflow-line)"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           vectorEffect="non-scaling-stroke"
//         />
//       </svg>

//       {/* Mobile vertical connector */}
//       <div className="absolute bottom-12 left-6 top-6 w-px bg-gradient-to-b from-blue-300 via-slate-200 to-transparent sm:left-6 lg:hidden dark:from-blue-500/50 dark:via-slate-700 dark:to-transparent" />

//       <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-20">
//         {workflowSteps.map((step, index) => {
//           const desktopPosition = [
//             "lg:col-start-1 lg:row-start-1",
//             "lg:col-start-2 lg:row-start-1",
//             "lg:col-start-3 lg:row-start-1",
//             "lg:col-start-3 lg:row-start-2",
//             "lg:col-start-2 lg:row-start-2",
//             "lg:col-start-1 lg:row-start-2",
//           ][index];

//           return (
//             <div
//               key={step.number}
//               className={`relative min-w-0 ${desktopPosition}`}>
//               <WorkflowStep step={step} index={index} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// import { workflowSteps } from "../../../data/workflowData";
// import WorkflowStep from "./WorkflowStep";

// export default function WorkflowTimeline() {
//   return (
//     <div className="relative">
//       {/* Desktop timeline connectors */}
//       <svg
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
//         viewBox="0 0 1000 1000"
//         preserveAspectRatio="none">
//         <defs>
//           <linearGradient id="workflow-line" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.35" />
//             <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.65" />
//             <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.35" />
//           </linearGradient>
//         </defs>

//         {/* Top row: 01 → 02 → 03 */}
//         <path
//           d="M 120 24 H 880"
//           fill="none"
//           stroke="url(#workflow-line)"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           vectorEffect="non-scaling-stroke"
//         />

//         {/* Right-side curved connector: 03 → 04 */}
//         <path
//           d="M 880 24 H 955 Q 975 24 975 44 V 510 Q 975 530 955 530 H 880"
//           fill="none"
//           stroke="url(#workflow-line)"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           vectorEffect="non-scaling-stroke"
//         />

//         {/* Bottom row: 04 → 05 → 06 */}
//         <path
//           d="M 880 530 H 120"
//           fill="none"
//           stroke="url(#workflow-line)"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           vectorEffect="non-scaling-stroke"
//         />
//       </svg>

//       {/* Mobile vertical connector */}
//       <div className="absolute bottom-12 left-6 top-6 w-px bg-gradient-to-b from-blue-300 via-slate-200 to-transparent sm:left-6 lg:hidden dark:from-blue-500/50 dark:via-slate-700 dark:to-transparent" />

//       {/* Workflow cards */}
//       <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-20">
//         {workflowSteps.map((step, index) => {
//           const desktopPosition = [
//             "lg:col-start-1 lg:row-start-1",
//             "lg:col-start-2 lg:row-start-1",
//             "lg:col-start-3 lg:row-start-1",
//             "lg:col-start-3 lg:row-start-2",
//             "lg:col-start-2 lg:row-start-2",
//             "lg:col-start-1 lg:row-start-2",
//           ][index];

//           return (
//             <div
//               key={step.number}
//               className={`relative min-w-0 ${desktopPosition}`}>
//               <WorkflowStep step={step} index={index} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import { workflowSteps } from "../../../data/workflowData";
import WorkflowStep from "./WorkflowStep";

export default function WorkflowTimeline() {
  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-blue-400/20 via-blue-500/70 to-blue-400/20 lg:left-1/2 lg:-translate-x-1/2"
      />

      <div className="relative max-w-5xl mx-auto space-y-3 lg:space-y-2">
        {workflowSteps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="relative grid grid-cols-[48px_minmax(0,1fr)] items-start gap-4 lg:grid-cols-[1fr_80px_1fr] lg:gap-2">
              {/* Left card */}
              <div className="hidden lg:block lg:col-start-1">
                {isLeft && (
                  <WorkflowStep step={step} index={index} side="left" />
                )}
              </div>

              {/* Timeline marker */}
              <div className="relative z-10 col-start-1 flex flex-col items-center lg:col-start-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-600 shadow-md shadow-blue-500/10 dark:border-blue-500/30 dark:bg-slate-900 dark:text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>

                <span className="mt-2 text-[10px] font-bold tracking-[0.16em] text-blue-600 dark:text-blue-400">
                  {step.number}
                </span>
              </div>

              {/* Mobile card */}
              <div className="col-start-2 min-w-0 lg:hidden">
                <WorkflowStep step={step} index={index} side="right" />
              </div>

              {/* Right card */}
              <div className="hidden min-w-0 lg:col-start-3 lg:block">
                {!isLeft && (
                  <WorkflowStep step={step} index={index} side="right" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
