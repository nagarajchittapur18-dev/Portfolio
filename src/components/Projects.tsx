import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import { PROJECTS, type Project } from "../constants";
import { fadeIn, staggerContainer, scaleIn } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FILTER_TABS = ["All", "AI/ML", "Full Stack", "Web"] as const;
type Filter = (typeof FILTER_TABS)[number];

const Projects = () => {
  const { ref, isInView } = useScrollAnimation();
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-100/50 dark:bg-[#070d1d] relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer()}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.span
            variants={fadeIn("up", 0)}
            className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-3"
          >
            My Portfolio
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 0.1)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-title mb-4 tracking-tight"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 dark:from-indigo-400 dark:to-purple-400">
              Projects
            </span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"
          />

          {/* Filter tabs */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 shadow-sm max-w-full overflow-x-auto scrollbar-hide"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = filter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`relative flex-shrink-0 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="filterPill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-full shadow-md shadow-indigo-500/25"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div variants={scaleIn(index * 0.06)} className="h-full">
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        glareEnable
        glareMaxOpacity={0.06}
        glareColor="#6366f1"
        glarePosition="all"
        scale={1.01}
        transitionSpeed={300}
        className="h-full"
      >
        <div className="relative h-full flex flex-col justify-between rounded-2xl overflow-hidden bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 group shadow-sm hover:shadow-xl">
          {/* Top colored accent line */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${project.color} flex-shrink-0`} />

          {/* Header Graphic Banner */}
          <div className={`relative h-28 sm:h-32 bg-gradient-to-br ${project.color} overflow-hidden p-4 flex items-start justify-between`}>
            {/* Background subtle pattern */}
            <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/75 backdrop-blur-[2px]" />

            <div className="relative z-10 flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold text-white bg-gradient-to-r ${project.color} shadow-sm`}>
                {project.category}
              </span>
              {project.featured && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/30">
                  <FiStar size={11} className="fill-amber-400 text-amber-400" />
                  Featured
                </span>
              )}
            </div>

            <span className="relative z-10 text-3xl sm:text-4xl font-black text-slate-300/80 dark:text-white/10 font-mono">
              {String(project.id).padStart(2, "0")}
            </span>
          </div>

          {/* Card Body */}
          <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between gap-4">
            <div className="space-y-2.5">
              <h3 className="text-theme-title font-extrabold text-lg sm:text-xl leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[11px] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2.5 pt-3 border-t border-slate-100 dark:border-white/10 mt-auto">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 text-xs font-semibold transition-all flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiGithub size={13} />
                <span>Code</span>
              </motion.a>

              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r ${project.color} text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all flex-1`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiExternalLink size={13} />
                <span>Live Demo</span>
              </motion.a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default Projects;
