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
import { fadeIn, staggerContainer, scaleIn } from "../utils/animations";
import { SKILLS } from "../constants";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ICON_MAP: Record<string, React.ReactNode> = {
  python: <SiPython size={46} />,
  java: <FaJava size={46} />,
  html: <SiHtml5 size={46} />,
  css: <SiCss size={46} />,
  django: <SiDjango size={46} />,
  nlp: <FaBrain size={46} />,
  ml: <TbRobot size={46} />,
  pandas: <SiPandas size={46} />,
  numpy: <SiNumpy size={46} />,
  mysql: <SiMysql size={46} />,
  sqlite: <SiSqlite size={46} />,
  mongodb: <SiMongodb size={46} />,
  git: <SiGit size={46} />,
  github: <SiGithub size={46} />,
};

const CATEGORY_ACCENTS: Record<string, { gradient: string; badge: string }> = {
  "Programming Language": {
    gradient: "from-blue-600 via-indigo-600 to-cyan-500",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  "Web Development": {
    gradient: "from-purple-600 via-pink-600 to-indigo-600",
    badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
  "AI & ML": {
    gradient: "from-amber-500 via-orange-600 to-rose-600",
    badge: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  },
  "Database": {
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  "Version Control": {
    gradient: "from-cyan-600 via-blue-600 to-indigo-600",
    badge: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  },
};

const Skills = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-slate-50 dark:bg-[#030712] relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer()}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.span
            variants={fadeIn("up", 0)}
            className="inline-block px-3.5 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-3 shadow-sm"
          >
            Expertise &amp; Technologies
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

        {/* Categories (matching vishalrajpurohit.vercel.app layout) */}
        <div className="space-y-12 sm:space-y-16">
          {Object.entries(SKILLS).map(([category, skills], catIdx) => {
            const accent = CATEGORY_ACCENTS[category] || CATEGORY_ACCENTS["Programming Language"];
            return (
              <motion.div
                key={category}
                variants={fadeIn("up", catIdx * 0.1)}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="flex flex-col items-center"
              >
                {/* Category Header */}
                <div className="flex flex-col items-center mb-6 text-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-0.5 bg-gradient-to-r from-transparent to-indigo-500 rounded-full" />
                    <h3 className="text-xl sm:text-2xl font-black text-theme-title tracking-tight">
                      {category}
                    </h3>
                    <span className="w-8 h-0.5 bg-gradient-to-l from-transparent to-indigo-500 rounded-full" />
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${accent.badge}`}>
                    {skills.length} {skills.length === 1 ? "Skill" : "Skills"}
                  </span>
                </div>

                {/* Skill Tiles Box */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full max-w-4xl">
                  {skills.map((skill, sIdx) => {
                    const iconElement = ICON_MAP[skill.icon] || <SiPython size={46} />;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={scaleIn(sIdx * 0.06)}
                        whileHover={{ scale: 1.08, y: -4 }}
                        whileTap={{ scale: 0.96 }}
                        className="group relative flex flex-col items-center justify-center w-28 sm:w-32 md:w-36 h-32 sm:h-36 md:h-40 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl transition-all duration-300 p-3"
                      >
                        {/* Hover glow background */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 transition-opacity duration-300 pointer-events-none"
                          style={{ backgroundColor: skill.color || "#6366f1" }}
                        />

                        {/* Top subtle highlight border */}
                        <div
                          className="absolute top-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundColor: skill.color || "#6366f1" }}
                        />

                        {/* Technology Icon */}
                        <div
                          className="flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: skill.color || "#6366f1" }}
                        >
                          {iconElement}
                        </div>

                        {/* Technology Label */}
                        <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 text-center tracking-tight group-hover:text-theme-title transition-colors">
                          {skill.name}
                        </span>

                        {/* Proficiency Level on Hover */}
                        <span className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {skill.level}%
                        </span>
                      </motion.div>
                    );
                  })}
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
