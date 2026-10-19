import { motion } from "framer-motion";
import { FiBook, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";
import { EDUCATION } from "../constants";
import { fadeIn, staggerContainer } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Education = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="education" className="py-20 sm:py-28 bg-slate-50 dark:bg-[#030712] relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Academic Foundation
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 0.1)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-title mb-4 tracking-tight"
          >
            Education{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 dark:from-indigo-400 dark:to-purple-400">
              Journey
            </span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <div className="space-y-6 sm:space-y-8">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.id}
                variants={fadeIn("left", i * 0.15)}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="relative flex gap-4 sm:gap-6 md:gap-8 items-start"
              >
                {/* Icon node */}
                <div className="flex-shrink-0 relative z-10">
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white shadow-lg shadow-indigo-500/20`}
                    whileHover={{ scale: 1.08, rotate: -4 }}
                  >
                    <FiBook className="text-xl sm:text-2xl" />
                  </motion.div>
                </div>

                {/* Card */}
                <div className="flex-1 p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-indigo-400/40 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20">
                      {edu.institution}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <FiCalendar size={12} />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-theme-title font-extrabold text-base sm:text-xl mb-1">
                    {edu.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FiMapPin size={12} />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 font-bold">
                      <FiAward size={11} />
                      Grade: {edu.grade}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
