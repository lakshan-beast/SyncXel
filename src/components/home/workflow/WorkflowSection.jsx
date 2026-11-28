// import WorkflowHeader from "./WorkflowHeader";
// import WorkflowTimeline from "./WorkflowTimeline";
// import WorkflowCTA from "./WorkflowCTA";

// export default function WorkflowSection() {
//   return (
//     <section
//       id="workflow"
//       className="relative isolate overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32 dark:bg-slate-950">
//       {/* Background atmosphere */}
//       {/* <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-400/10 blur-[120px] dark:bg-blue-500/10" />

//         <div className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-indigo-400/10 blur-[120px] dark:bg-indigo-500/10" />

//         <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-[0.07]" />
//       </div> */}

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -right-40 -bottom-40 h-137.5 w-137.5 rounded-full bg-blue-400/[0.07] blur-[140px] dark:bg-blue-400/10" />

//         <div className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-slate-400/[0.08] blur-[130px] dark:bg-slate-300/[0.04]" />

//         <div
//           className="absolute inset-0 opacity-[0.08] dark:opacity-[0.07]"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)",
//             backgroundSize: "56px 56px",
//           }}
//         />
//       </div>

//       <div className="mx-auto max-w-7xl relative ">
//         <WorkflowHeader />
// {/*  */}
//         <WorkflowTimeline />

//         <WorkflowCTA />
//       </div>
//     </section>
//   );
// }

import WorkflowHeader from "./WorkflowHeader";
import WorkflowTimeline from "./WorkflowTimeline";
import WorkflowCTA from "./WorkflowCTA";

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative isolate overflow-hidden bg-[#080f1e] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -bottom-40 h-[550px] w-[550px] rounded-full bg-emerald-400/[0.06] blur-[140px]" />

        <div className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-slate-400/[0.04] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <WorkflowHeader />
        <WorkflowTimeline />
        <WorkflowCTA />
      </div>
    </section>
  );
}
