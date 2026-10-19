import { motion } from "framer-motion";
import { FiAward, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { SiCredly } from "react-icons/si";
import { CERTIFICATIONS, PERSONAL_INFO } from "../constants";
import { fadeIn, staggerContainer, scaleIn } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Certifications = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-slate-100/50 dark:bg-[#070d1d] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

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
            Verified Credentials
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 0.1)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-title mb-4 tracking-tight"
          >
            Licences &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 dark:from-indigo-400 dark:to-purple-400">
              Certifications
            </span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"
          />

          {/* Credly Profile link button */}
          <motion.div variants={fadeIn("up", 0.3)} className="inline-flex">
            <a
              href={PERSONAL_INFO.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 hover:border-orange-500/40 hover:bg-orange-50/60 dark:hover:bg-orange-500/10 text-slate-700 dark:text-white/80 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 text-xs sm:text-sm font-semibold shadow-sm group"
            >
              <SiCredly className="text-orange-500 group-hover:scale-110 transition-transform" size={17} />
              <span>View Verified Credly Transcript</span>
              <FiExternalLink size={13} className="opacity-60 group-hover:opacity-100" />
            </a>
          </motion.div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              variants={scaleIn(i * 0.08)}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />

              <div>
                <div className="relative flex items-start gap-4 mb-4">
                  {/* Badge Image */}
                  <div className="w-16 h-16 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 p-2 flex items-center justify-center flex-shrink-0 group-hover:border-indigo-400/40 transition-all shadow-sm">
                    {cert.imageUrl ? (
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    ) : (
                      <FiAward className="text-indigo-500 text-2xl" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20 mb-1.5">
                      {cert.issuer}
                    </span>
                    <h3 className="text-theme-title font-extrabold text-sm sm:text-base leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                {/* Skills tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[10px] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom bar */}
              <div className="relative pt-3.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <FiCheckCircle size={14} className="flex-shrink-0" />
                  <span className="text-[11px]">Credly Verified</span>
                </div>
                <motion.a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-all duration-200 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Verify <FiExternalLink size={11} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
