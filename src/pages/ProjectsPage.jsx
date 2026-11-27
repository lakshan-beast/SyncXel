import { useMemo, useState } from "react";
import SEO from "../components/common/SEO";
import { projects } from "../data/projectsData";

import ProjectsHeader from "../components/pages/projects/ProjectsHeader";
import ProjectsFilters from "../components/pages/projects/ProjectsFilters";
import ProjectsGrid from "../components/pages/projects/ProjectsGrid";
import ProjectsCTA from "../components/pages/projects/ProjectsCTA";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") return projects;

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Our Projects & Portfolio | SyncXel"
        description="Explore projects built by SyncXel, featuring modern web interfaces, creative frontend development, responsive designs and interactive experiences."
        path="/projects"
      />
      
      <main className="min-h-screen overflow-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <ProjectsHeader />

        <section className="mx-auto max-w-7xl">
          <ProjectsFilters
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            totalProjects={filteredProjects.length}
          />

          <ProjectsGrid projects={filteredProjects} />
        </section>

        <ProjectsCTA />
      </main>
    </>
  );
}
