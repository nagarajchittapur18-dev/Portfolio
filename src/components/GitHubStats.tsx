import { motion } from "framer-motion";
import { FiGithub, FiGitCommit, FiStar, FiExternalLink } from "react-icons/fi";
import { GITHUB_USERNAME, PERSONAL_INFO } from "../constants";
import { fadeIn, staggerContainer, scaleIn } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../hooks/useTheme";

const GitHubStats = () => {
  const { ref, isInView } = useScrollAnimation();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  // Dynamic theme URLs for GitHub README Stats API
  const statsCardUrl = isDark
    ? `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&bg_color=0f172a&title_color=6366f1&icon_color=8b5cf6&text_color=cbd5e1&border_color=334155&hide_border=false&count_private=true`
    : `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=default&bg_color=ffffff&title_color=4f46e5&icon_color=7c3aed&text_color=334155&border_color=e2e8f0&hide_border=false&count_private=true`;

  const topLangsUrl = isDark
    ? `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&bg_color=0f172a&title_color=6366f1&icon_color=8b5cf6&text_color=cbd5e1&border_color=334155&hide_border=false&langs_count=8`
    : `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=default&bg_color=ffffff&title_color=4f46e5&icon_color=7c3aed&text_color=334155&border_color=e2e8f0&hide_border=false&langs_count=8`;

  const streakStatsUrl = isDark
    ? `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&background=0f172a&ring=6366f1&fire=8b5cf6&currStreakLabel=6366f1&border=334155`
    : `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=default&background=ffffff&ring=4f46e5&fire=7c3aed&currStreakLabel=4f46e5&border=e2e8f0`;

  const activityGraphUrl = isDark
    ? `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&bg_color=0f172a&color=6366f1&line=8b5cf6&point=6366f1&area=true&hide_border=true`
    : `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&bg_color=ffffff&color=4f46e5&line=7c3aed&point=4f46e5&area=true&hide_border=true`;

  return (
    <section id="github" className="py-20 sm:py-28 bg-slate-100/50 dark:bg-[#070d1d] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

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
            Open Source &amp; Code
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 0.1)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-title mb-4 tracking-tight"
          >
            GitHub{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 dark:from-indigo-400 dark:to-purple-400">
              Activity &amp; Stats
            </span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-5"
          />

          <motion.a
            variants={fadeIn("up", 0.3)}
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors text-xs sm:text-sm font-semibold shadow-sm group"
          >
            <FiGithub size={15} />
            <span>@{GITHUB_USERNAME}</span>
            <FiExternalLink size={12} className="opacity-60 group-hover:opacity-100" />
          </motion.a>
        </motion.div>

        {/* GitHub Stats Cards Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 sm:mb-8"
        >
          {/* Main Stats Card */}
          <motion.div
            variants={scaleIn(0)}
            className="p-1 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 shadow-sm"
          >
            <div className="rounded-xl overflow-hidden bg-white dark:bg-[#0f172a] p-2 border border-slate-200/80 dark:border-white/5 flex items-center justify-center min-h-[190px]">
              <img
                src={statsCardUrl}
                alt="GitHub Stats"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            variants={scaleIn(0.1)}
            className="p-1 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 shadow-sm"
          >
            <div className="rounded-xl overflow-hidden bg-white dark:bg-[#0f172a] p-2 border border-slate-200/80 dark:border-white/5 flex items-center justify-center min-h-[190px]">
              <img
                src={topLangsUrl}
                alt="Top Languages"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Streak Stats */}
          <motion.div
            variants={scaleIn(0.2)}
            className="p-1 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 shadow-sm md:col-span-2 lg:col-span-1"
          >
            <div className="rounded-xl overflow-hidden bg-white dark:bg-[#0f172a] p-2 border border-slate-200/80 dark:border-white/5 flex items-center justify-center min-h-[190px]">
              <img
                src={streakStatsUrl}
                alt="GitHub Streak"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Contribution Graph Activity */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="p-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 mb-6 sm:mb-8 shadow-sm"
        >
          <div className="rounded-xl overflow-hidden bg-white dark:bg-[#0f172a] p-4 sm:p-5 border border-slate-200/80 dark:border-white/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FiGitCommit className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" size={17} />
                <span className="text-theme-title text-xs sm:text-sm font-bold">
                  Contribution Activity Graph
                </span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Real-Time Sync
              </span>
            </div>
            <div className="overflow-x-auto scrollbar-hide">
              <img
                src={activityGraphUrl}
                alt="Contribution Graph"
                className="w-full min-w-[500px] rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Quick Stats Metric Counters */}
        <motion.div
          variants={staggerContainer(0.1, 0.4)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-3 gap-3 sm:gap-6"
        >
          {[
            { icon: FiGithub, label: "Public Repos", value: "23+" },
            { icon: FiStar, label: "Total Stars", value: "50+" },
            { icon: FiGitCommit, label: "Commits & Activity", value: "500+" },
          ].map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={scaleIn()}
              whileHover={{ scale: 1.04, y: -2 }}
              className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 hover:border-indigo-400/40 text-center transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Icon className="text-indigo-600 dark:text-indigo-400 text-xl sm:text-2xl mx-auto mb-2" />
              <div className="text-theme-title font-black text-xl sm:text-2xl md:text-3xl mb-0.5">
                {value}
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs font-semibold">
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
