import React from "react";
import { motion } from "framer-motion";
import {
  FiTarget,
  FiBookOpen,
  FiBriefcase,
  FiMapPin,
  FiCheckCircle,
  FiDownload,
  FiCode,
  FiAward,
} from "react-icons/fi";
import { BsFolderCheck, BsGithub } from "react-icons/bs";
import { fadeIn, staggerContainer, scaleIn } from "../utils/animations";
import { PERSONAL_INFO } from "../constants";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-slate-100/50 dark:bg-[#070d1d] relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* 2-Column Clean Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          {/* Left Column: Interactive Developer Profile & Terminal Card (5 cols) */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="lg:col-span-5 space-y-6"
          >
            {/* Developer Code Card */}
            <div className="rounded-2xl overflow-hidden bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                </div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  nagaraj.developer.json
                </span>
                <span className="w-8" />
              </div>

              {/* Code Snippet */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto scrollbar-hide text-slate-800 dark:text-slate-200">
                <div>
                  <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">name:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">"Nagaraj S Chitapur"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">role:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">"AI/ML &amp; Full Stack Dev"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">education:</span> &#123;
                </div>
                <div className="pl-8">
                  <span className="text-slate-500 dark:text-slate-400">degree:</span>{" "}
                  <span className="text-amber-600 dark:text-amber-300">"MCA"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-500 dark:text-slate-400">university:</span>{" "}
                  <span className="text-amber-600 dark:text-amber-300">"Presidency University"</span>
                </div>
                <div className="pl-4">&#125;,</div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">location:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">"Bengaluru, India"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">skills:</span> [
                  <span className="text-cyan-600 dark:text-cyan-400">"Python"</span>,{" "}
                  <span className="text-cyan-600 dark:text-cyan-400">"Django"</span>,{" "}
                  <span className="text-cyan-600 dark:text-cyan-400">"NLP"</span>,{" "}
                  <span className="text-cyan-600 dark:text-cyan-400">"ML"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">availableForHire:</span>{" "}
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">true</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Status footer bar */}
              <div className="px-5 py-3 bg-slate-50/80 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <FiCheckCircle size={13} />
                  Ready to deploy &amp; build
                </span>
                <span className="flex items-center gap-1">
                  <FiMapPin size={12} />
                  Bengaluru, IN
                </span>
              </div>
            </div>

            {/* Quick Action Button */}
            <motion.a
              href={PERSONAL_INFO.resume}
              download="Nagaraj_Chitapur_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 hover:border-indigo-500/40 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiDownload className="text-indigo-600 dark:text-indigo-400 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download Official Resume</span>
            </motion.a>
          </motion.div>

          {/* Right Column: Narrative & Key Profile Highlights (7 cols) */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="lg:col-span-7 space-y-5"
          >
            {/* Headline and narrative text */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-theme-title mb-3 leading-snug">
                Dedicated Software Engineer specializing in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 dark:from-indigo-400 dark:to-purple-300">
                  AI/ML &amp; Full Stack Development
                </span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I am an MCA student based in Bengaluru, Karnataka, with a passion for building real-world software applications that combine modern deep learning models with scalable web architectures.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mt-2.5">
                My work spans Natural Language Processing (BiLSTM tweet classification), Computer Vision (Smart Agro Assist crop disease recognition), and production web systems built with Django, Flask, SQLite, and MySQL. I enjoy turning complex problem statements into clean, maintainable, and deployable code.
              </p>
            </div>

            {/* 3 Structured Clean Cards */}
            <div className="space-y-3 pt-2">
              {/* Career Objective */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 shadow-sm hover:border-indigo-400/40 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/60 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5">
                  <FiTarget size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-theme-title mb-1">Career Objective</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {PERSONAL_INFO.careerObjective}
                  </p>
                </div>
              </div>

              {/* Education Foundation */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 shadow-sm hover:border-purple-400/40 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200/60 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5">
                  <FiBookOpen size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-theme-title mb-1">Education</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong>Master of Computer Applications (MCA)</strong> — Presidency University, Bengaluru (CGPA: 7.8, 2023–2025). Prior Bachelor of Computer Applications (BCA) with 78% distinction.
                  </p>
                </div>
              </div>

              {/* Experience Snapshot */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 shadow-sm hover:border-blue-400/40 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200/60 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                  <FiBriefcase size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-theme-title mb-1">Professional Experience</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Interned as <strong>Python Full Stack Intern</strong> at Skyllx and <strong>Python Developer Intern</strong> at Developers Arena, developing scalable REST APIs, database queries, and ML data preprocessing pipelines.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Milestone Stats Counters (Single Symmetrical Row) */}
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            {
              icon: FiCode,
              value: "3+",
              label: "Years of Coding",
              detail: "Python, Java & Web Stacks",
              color: "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400",
            },
            {
              icon: BsFolderCheck,
              value: "15+",
              label: "Projects Completed",
              detail: "AI/ML, NLP & Web Apps",
              color: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",
            },
            {
              icon: FiAward,
              value: "5",
              label: "Verified Badges",
              detail: "Google Cloud, Cisco & IBM",
              color: "from-amber-500 to-rose-600 dark:from-amber-400 dark:to-rose-400",
            },
            {
              icon: BsGithub,
              value: "23+",
              label: "GitHub Repositories",
              detail: "Open Source Codebases",
              color: "from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400",
            },
          ].map(({ icon: Icon, value, label, detail, color }, i) => (
            <motion.div
              key={label}
              variants={scaleIn(i * 0.08)}
              whileHover={{ scale: 1.04, y: -4 }}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-indigo-400/40 text-center transition-all duration-300 flex flex-col items-center justify-center"
            >
              <Icon className="text-indigo-600 dark:text-indigo-400 text-xl sm:text-2xl mb-2" />
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${color} mb-1 tracking-tight`}>
                {value}
              </div>
              <div className="text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold">
                {label}
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
                {detail}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
