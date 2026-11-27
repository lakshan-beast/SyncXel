// import { Link, useParams } from "react-router-dom";
// import { motion, useReducedMotion } from "framer-motion";
// import {
//   HiArrowLeft,
//   HiArrowUpRight,
//   HiOutlineCheckCircle,
//   HiOutlineLightBulb,
// } from "react-icons/hi2";

// import { projects } from "../../../data/projectsData";

// export default function CaseStudyPage() {
//   const { projectId } = useParams();
//   const shouldReduceMotion = useReducedMotion();

//   const project = projects.find(
//     (item) => item.id === projectId && item.caseStudy,
//   );

//   if (!project) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-white px-5 text-center dark:bg-slate-950">
//         <div>
//           <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
//             Case Study Not Found
//           </h1>
//           <p className="mt-3 text-slate-500 dark:text-slate-400">
//             This project does not have a case study available.
//           </p>
//           <Link
//             to="/projects"
//             className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
//             <HiArrowLeft />
//             Back to Projects
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   const study = project.caseStudy;

//   const sections = [
//     {
//       number: "01",
//       title: "The Problem",
//       content: study.problem,
//     },
//     {
//       number: "02",
//       title: "The Solution",
//       content: study.solution,
//     },
//     {
//       number: "03",
//       title: "Design & Development",
//       content: study.process,
//     },
//     {
//       number: "04",
//       title: "The Outcome",
//       content: study.outcome,
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
//       {/* Header */}
//       <section className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
//         <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

//         <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
//           <Link
//             to="/projects"
//             className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
//             <HiArrowLeft />
//             Back to Projects
//           </Link>

//           <motion.div
//             initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mt-12">
//             <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
//               Project Case Study
//             </span>

//             <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
//               {project.subtitle}
//             </p>

//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
//               {project.title}
//             </h1>

//             <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
//               {project.description}
//             </p>

//             <div className="mt-8 flex flex-wrap gap-2">
//               {project.stack.map((tech) => (
//                 <span
//                   key={tech}
//                   className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {project.liveUrl && (
//               <a
//                 href={project.liveUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700">
//                 Visit Live Project
//                 <HiArrowUpRight />
//               </a>
//             )}
//           </motion.div>
//         </div>
//       </section>

//       {/* Overview */}
//       <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
//         <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
//               Project Overview
//             </p>
//             <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
//               About the project
//             </h2>
//           </div>

//           <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
//             {study.overview}
//           </p>
//         </div>
//       </section>

//       {/* Process sections */}
//       <section className="border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/50">
//         <div className="mx-auto max-w-5xl space-y-14 px-5 sm:px-8">
//           {sections.map((section, index) => (
//             <motion.div
//               key={section.number}
//               initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.05 }}
//               className="grid gap-5 md:grid-cols-[100px_1fr] md:gap-12">
//               <span className="text-3xl font-bold text-blue-600/40 dark:text-blue-400/40">
//                 {section.number}
//               </span>

//               <div>
//                 <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
//                   {section.title}
//                 </h2>
//                 <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
//                   {section.content}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Key Features */}
//       <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
//         <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
//               What It Includes
//             </p>
//             <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
//               Key Features
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {study.features.map((feature) => (
//               <div key={feature} className="flex items-start gap-3">
//                 <HiOutlineCheckCircle className="mt-1 shrink-0 text-xl text-blue-600 dark:text-blue-400" />
//                 <p className="text-base leading-7 text-slate-600 dark:text-slate-400">
//                   {feature}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="border-t border-slate-200 bg-white px-5 py-16 dark:border-slate-800 dark:bg-slate-950 sm:px-8">
//         <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
//           <div>
//             <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
//               <HiOutlineLightBulb />
//               Explore More
//             </div>
//             <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
//               Interested in this project?
//             </h2>
//             <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
//               Explore the live project or discover more work.
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             {project.liveUrl && (
//               <a
//                 href={project.liveUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
//                 Live Project
//                 <HiArrowUpRight />
//               </a>
//             )}

//             <Link
//               to="/projects"
//               className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400">
//               All Projects
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiArrowLeft,
  HiArrowUpRight,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
} from "react-icons/hi2";

import { projects } from "../../../data/projectsData";
import SEO from "../../common/SEO";

export default function CaseStudyPage() {
  const { projectId } = useParams();
  const shouldReduceMotion = useReducedMotion();

  const project = projects.find(
    (item) => item.id === projectId && item.caseStudy,
  );

  if (!project) {
    return (
      <>
        <SEO
          title="Case Study Not Found | SyncXel"
          description="The requested project case study could not be found."
          path={`/projects/${projectId || ""}`}
        />

        <main className="flex min-h-screen items-center justify-center bg-white px-5 text-center dark:bg-slate-950">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Case Study Not Found
            </h1>
            <p className="mt-3 text-slate-500 dark:text-slate-400">
              This project does not have a case study available.
            </p>
            <Link
              to="/projects"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              <HiArrowLeft />
              Back to Projects
            </Link>
          </div>
        </main>
      </>
    );
  }

  const study = project.caseStudy;

  const seoDescription =
    study.overview.length > 155
      ? `${study.overview.slice(0, 152).trimEnd()}...`
      : study.overview;

  const sections = [
    {
      number: "01",
      title: "The Problem",
      content: study.problem,
    },
    {
      number: "02",
      title: "The Solution",
      content: study.solution,
    },
    {
      number: "03",
      title: "Design & Development",
      content: study.process,
    },
    {
      number: "04",
      title: "The Outcome",
      content: study.outcome,
    },
  ];

  return (
    <>
      <SEO
        title={`${project.title} - ${project.subtitle} Case Study | SyncXel`}
        description={seoDescription}
        path={`/projects/${project.id}`}
        type="article"
      />

      <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        {/* Header */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
              <HiArrowLeft />
              Back to Projects
            </Link>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12">
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
                Project Case Study
              </span>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                {project.subtitle}
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
                {project.title}
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-tight text-slate-600 sm:text-lg dark:text-slate-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                  Visit Live Project
                  <HiArrowUpRight />
                </a>
              )}
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-blue-300 uppercase">
                Project Overview
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                About the project
              </h2>
            </div>

            <p className="text-base leading-tight text-slate-600 dark:text-slate-400">
              {study.overview}
            </p>
          </div>
        </section>

        {/* Process sections */}
        <section className="border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="mx-auto max-w-5xl space-y-14 px-5 sm:px-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="grid gap-5 md:grid-cols-[100px_1fr] md:gap-12">
                <span className="text-3xl font-bold text-blue-600/40 dark:text-blue-400/40">
                  {section.number}
                </span>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-tight text-slate-600 dark:text-slate-400">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mx-auto max-w-5xl py-12">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-blue-300 uppercase">
                What It Includes
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                Key Features
              </h2>
            </div>

            <div className="space-y-1.5">
              {study.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="mt-1 shrink-0 text-xl text-blue-600 dark:text-blue-400" />
                  <p className="text-base leading-7 text-slate-600 dark:text-slate-400">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-slate-200 bg-white px-5 py-6 dark:border-slate-800 dark:bg-slate-950 sm:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-blue-300 uppercase">
                <HiOutlineLightBulb />
                Explore More
              </div>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                Interested in this project?
              </h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Explore the live project or discover more work.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                  Live Project
                  <HiArrowUpRight />
                </a>
              )}

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400">
                All Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
