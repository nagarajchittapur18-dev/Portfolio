import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiBriefcase, FiTarget, FiAward, FiCheckCircle } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { fadeIn, staggerContainer, scaleIn } from "../utils/animations";
import { PERSONAL_INFO } from "../constants";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-100/50 dark:bg-[#070d1d] relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer()}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            variants={fadeIn("up", 0)}
            className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-3"
          >
            Get To Know Me
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 0.1)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-title mb-4 tracking-tight"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 dark:from-indigo-400 dark:to-purple-400">
              Me
            </span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Main 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Avatar & Quick Highlights (5 cols on lg) */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="lg:col-span-5 flex flex-col items-center gap-6"
          >
            {/* Visual Avatar Card */}
            <div className="relative group w-full max-w-xs sm:max-w-sm flex justify-center">
              <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-xl p-3 flex flex-col items-center justify-center">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-600 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                  <div className="text-7xl font-black text-white/10 absolute select-none">NC</div>
                  <motion.div
                    className="text-6xl sm:text-7xl z-10 filter drop-shadow-md"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    👨‍💻
                  </motion.div>
                  <p className="text-white/90 text-xs sm:text-sm font-semibold mt-3 z-10 tracking-wide">
                    Nagaraj S Chitapur
                  </p>
                  <span className="text-white/70 text-[11px] font-mono z-10">AI &amp; Full Stack Developer</span>
                </div>
              </div>
            </div>

            {/* Quick 4-box metric grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs sm:max-w-sm">
              {[
                { icon: FiCode, label: "Experience", value: "3+ Years", color: "text-blue-500" },
                { icon: FiBriefcase, label: "Internships", value: "2 Completed", color: "text-purple-500" },
                { icon: BsGraphUp, label: "Projects", value: "15+ Built", color: "text-emerald-500" },
                { icon: FiAward, label: "Certifications", value: "5 Verified", color: "text-amber-500" },
              ].map(({ icon: Icon, label, value, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#0f172a]/70 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md hover:border-indigo-400/40 transition-all duration-200"
                >
                  <Icon className={`${color} text-lg mb-1.5`} />
                  <div className="text-theme-title font-bold text-sm sm:text-base leading-tight">{value}</div>
                  <div className="text-theme-muted text-[11px] mt-0.5">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Narrative & Details (7 cols on lg) */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-theme-title mb-3 leading-snug">
                Passionate about building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 dark:from-indigo-400 dark:to-purple-300">
                  intelligent, production-grade applications
                </span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-3.5">
              <InfoCard
                icon={<FiTarget className="text-indigo-500 text-xl flex-shrink-0 mt-0.5" />}
                title="Career Objective"
                body={PERSONAL_INFO.careerObjective}
              />
              <InfoCard
                icon={<FiCheckCircle className="text-emerald-500 text-xl flex-shrink-0 mt-0.5" />}
                title="Academic Background &amp; Current Focus"
                body="Pursuing Master of Computer Applications (MCA) at Presidency University, Bengaluru. Actively building cutting-edge Generative AI apps with Gemini & Streamlit, deep learning NLP classifiers, and scalable Django + React systems."
              />
            </div>

            {/* Core Tech Stack Badges */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-theme-muted mb-2.5">
                Core Competencies
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Deep Learning",
                  "NLP",
                  "Computer Vision",
                  "Generative AI",
                  "Gemini & Vertex AI",
                  "React.js",
                  "Django",
                  "Flask",
                  "TypeScript",
                  "MySQL & PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-200/60 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:border-indigo-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Milestone Stats Counters Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {PERSONAL_INFO.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={scaleIn(i * 0.1)}
              whileHover={{ scale: 1.04, y: -4 }}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0f172a]/80 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-indigo-500/40 text-center transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 dark:from-indigo-400 dark:to-purple-300 mb-1.5">
                {stat.value}
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-semibold tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) => (
  <div className="flex gap-3.5 p-4 rounded-xl bg-white dark:bg-[#0f172a]/70 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-indigo-400/40 hover:shadow-md transition-all duration-200">
    {icon}
    <div>
      <div className="text-theme-title font-bold text-sm sm:text-base mb-1">{title}</div>
      <div className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">{body}</div>
    </div>
  </div>
);

export default About;
