import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiHtml5,
  SiCss,
  SiDjango,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaJava, FaBrain } from "react-icons/fa";
import { TbRobot } from "react-icons/tb";
import {
  FiCode,
  FiGlobe,
  FiCpu,
  FiDatabase,
  FiGitBranch,
} from "react-icons/fi";
import { fadeIn, staggerContainer, scaleIn } from "../utils/animations";
import { SKILLS } from "../constants";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ICON_MAP: Record<string, React.ReactNode> = {
  python: <SiPython size={42} />,
  java: <FaJava size={42} />,
  html: <SiHtml5 size={42} />,
  css: <SiCss size={42} />,
  django: <SiDjango size={42} />,
  nlp: <FaBrain size={42} />,
  ml: <TbRobot size={42} />,
  pandas: <SiPandas size={42} />,
  numpy: <SiNumpy size={42} />,
  mysql: <SiMysql size={42} />,
  sqlite: <SiSqlite size={42} />,
  mongodb: <SiMongodb size={42} />,
  git: <SiGit size={42} />,
  github: <SiGithub size={42} />,
};

const CATEGORY_META: Record<
  string,
  {
    icon: React.ReactNode;
    colSpan: string;
    gradient: string;
    badge: string;
    borderHover: string;
  }
> = {
  "Programming Language": {
    icon: <FiCode size={18} />,
    colSpan: "lg:col-span-2",
    gradient: "from-blue-600 to-indigo-600",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    borderHover: "hover:border-blue-500/40",
  },
  "Web Development": {
    icon: <FiGlobe size={18} />,
    colSpan: "lg:col-span-2",
    gradient: "from-purple-600 to-pink-600",
    badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    borderHover: "hover:border-purple-500/40",
  },
  "Version Control": {
    icon: <FiGitBranch size={18} />,
    colSpan: "lg:col-span-2",
    gradient: "from-cyan-600 to-blue-600",
    badge: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    borderHover: "hover:border-cyan-500/40",
  },
  "AI & ML": {
    icon: <FiCpu size={18} />,
    colSpan: "lg:col-span-3",
    gradient: "from-amber-500 to-rose-600",
    badge: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    borderHover: "hover:border-rose-500/40",
  },
  "Database": {
    icon: <FiDatabase size={18} />,
    colSpan: "lg:col-span-3",
    gradient: "from-emerald-600 to-teal-600",
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    borderHover: "hover:border-emerald-500/40",
  },
};

const Skills = () => {
  const { ref, isInView } = useScrollAnimation();

  // Ordered so top row has 3 items (2 cols each = 6 cols) and bottom row has 2 items (3 cols each = 6 cols)
  const orderedCategories = [
    "Programming Language",
    "Web Development",
    "Version Control",
    "AI & ML",
    "Database",
  ];

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-slate-50 dark:bg-[#030712] relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer()}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-14 sm:mb-18"
        >
          <motion.span
            variants={fadeIn("up", 0)}
            className="inline-block px-3.5 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-3 shadow-sm"
          >
            Technical Proficiency
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 0.1)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-title mb-4 tracking-tight"
          >
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 dark:from-indigo-400 dark:to-purple-400">
              Skills
            </span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Structured Multi-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {orderedCategories.map((category, catIdx) => {
            const skills = (SKILLS as Record<string, typeof SKILLS["Programming Language"]>)[category] || [];
            const meta =
              CATEGORY_META[category] || CATEGORY_META["Programming Language"];

            return (
              <motion.div
                key={category}
                variants={fadeIn("up", catIdx * 0.08)}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className={`${meta.colSpan} flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 ${meta.borderHover} shadow-sm hover:shadow-xl transition-all duration-300 group`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-white shadow-sm flex-shrink-0`}
                      >
                        {meta.icon}
                      </div>
                      <h3 className="text-theme-title font-extrabold text-base sm:text-lg tracking-tight">
                        {category}
                      </h3>
                    </div>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${meta.badge}`}
                    >
                      {skills.length} {skills.length === 1 ? "Skill" : "Skills"}
                    </span>
                  </div>

                  {/* Structured Tiles Inside Card */}
                  <div
                    className={`grid gap-3 sm:gap-4 ${
                      skills.length === 2
                        ? "grid-cols-2"
                        : skills.length === 3
                        ? "grid-cols-3"
                        : "grid-cols-2 sm:grid-cols-4"
                    }`}
                  >
                    {skills.map((skill, sIdx) => {
                      const iconElement =
                        ICON_MAP[skill.icon] || <SiPython size={42} />;

                      return (
                        <motion.div
                          key={skill.name}
                          variants={scaleIn(sIdx * 0.05)}
                          whileHover={{ scale: 1.05, y: -3 }}
                          whileTap={{ scale: 0.97 }}
                          className="relative flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 hover:bg-white dark:hover:bg-white/[0.06] transition-all duration-200 text-center"
                        >
                          {/* Top subtle colored bar on hover */}
                          <div
                            className="absolute top-0 left-3 right-3 h-0.5 rounded-full opacity-0 hover:opacity-100 transition-opacity"
                            style={{ backgroundColor: skill.color || "#6366f1" }}
                          />

                          {/* Technology Brand Icon */}
                          <div
                            className="flex items-center justify-center mb-2.5 transition-transform duration-200 hover:scale-110"
                            style={{ color: skill.color || "#6366f1" }}
                          >
                            {iconElement}
                          </div>

                          {/* Technology Name */}
                          <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                            {skill.name}
                          </span>

                          {/* Proficiency Badge */}
                          <span className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 mt-1">
                            {skill.level}%
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
