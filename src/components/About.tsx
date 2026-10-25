import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import { fadeIn, staggerContainer } from "../utils/animations";
import { PERSONAL_INFO } from "../constants";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

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
          className="text-center mb-12 sm:mb-16"
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

        {/* Clean 2-Column Layout: Photo on Left, Small Introduction on Right */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Photo Column (5 cols) */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Photo Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 shadow-xl p-2.5">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src="/profile.jpg"
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLImageElement).src =
                        "https://avatars.githubusercontent.com/u/249553797?v=4";
                    }}
                  />
                  {/* Subtle inner gradient shadow at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-xs font-semibold">
                      {PERSONAL_INFO.name} • {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Introduction Column (7 cols) */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="md:col-span-7 space-y-5"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/60 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium mb-3">
                <FiMapPin className="text-indigo-500" size={13} />
                <span>Based in Bengaluru, Karnataka, India</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-theme-title leading-snug mb-3">
                Hello! I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 dark:from-indigo-400 dark:to-purple-300">
                  {PERSONAL_INFO.name}
                </span>
              </h3>

              <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am an MCA student passionate about Artificial Intelligence, Machine Learning, and Full Stack Development. I love building clean, real-world web applications that solve practical problems using modern technologies.
                </p>
                <p>
                  With a strong foundation in Python and hands-on experience in Deep Learning and full-stack development, I focus on creating reliable, scalable, and user-friendly software solutions.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <motion.a
                href={PERSONAL_INFO.resume}
                download="Nagaraj_Chitapur_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiDownload size={14} />
                <span>Download Resume</span>
              </motion.a>

              <motion.button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 hover:border-indigo-400 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiMail size={14} />
                <span>Contact Me</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
