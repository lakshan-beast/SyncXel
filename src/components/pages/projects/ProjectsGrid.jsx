import { motion } from "framer-motion";
import { HiOutlineFolderOpen } from "react-icons/hi2";
import ProjectCard from "./ProjectsCard";

export default function ProjectsGrid({ projects }) {
  if (!projects.length) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center dark:border-slate-700 dark:bg-slate-900">
        <HiOutlineFolderOpen className="text-4xl text-slate-400" />

        <h3 className="mt-4 text-lg font-semibold text-slate-800 dark:text-white">
          No projects found
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
          There are no projects available in this category yet.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-2 xl:grid-cols-3 mb-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </motion.div>
  );
}
