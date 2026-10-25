import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FiDownload,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiBriefcase,
} from "react-icons/fi";
import { SiCredly } from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";
import { PERSONAL_INFO, TYPING_ROLES } from "../constants";
import HireMeModal from "./HireMeModal";

const Hero = () => {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-theme-page pt-28 sm:pt-36 pb-20 sm:pb-24 transition-colors duration-300"
    >
      {/* Clean, Modern Developer Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial spotlight */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] opacity-40 dark:opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(99, 102, 241, 0.35) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)",
          }}
        />

        {/* Subtle grid pattern with radial fade mask */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_50%,transparent_100%)]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Greeting & Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 mb-2"
        >
          Hello World, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-theme-title tracking-tight mb-4 sm:mb-6"
        >
          Nagaraj{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400">
            S Chitapur
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="h-10 sm:h-12 md:h-14 flex items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold mb-6"
        >
          <HiOutlineCode className="text-indigo-600 dark:text-indigo-400 text-xl sm:text-2xl md:text-3xl flex-shrink-0" />
          <span className="text-theme-title">Specializing in</span>
          <TypeAnimation
            sequence={TYPING_ROLES}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-300 font-extrabold"
          />
        </motion.div>

        {/* Short Summary Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 px-2"
        >
          MCA graduate engineer passionate about building intelligent machine learning systems,
          deep learning models, and modern full-stack web applications that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-12"
        >
          <motion.a
            href={PERSONAL_INFO.resume}
            download="Nagaraj_Chitapur_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <FiDownload className="text-base sm:text-lg group-hover:-translate-y-0.5 transition-transform duration-200" />
            Download Resume
          </motion.a>

          <motion.button
            onClick={() => scrollTo("projects")}
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-sm"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            View Projects
            <FiArrowRight className="text-base sm:text-lg group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>

          <motion.button
            onClick={() => setIsHireMeOpen(true)}
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-indigo-500/40 hover:border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold text-sm sm:text-base hover:bg-indigo-500/10 transition-all duration-300 cursor-pointer shadow-sm"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <FiBriefcase className="text-base sm:text-lg" />
            Hire Me ✨
          </motion.button>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-3 sm:gap-4"
        >
          {[
            { icon: FiGithub, href: PERSONAL_INFO.github, label: "GitHub" },
            { icon: FiLinkedin, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
            { icon: SiCredly, href: PERSONAL_INFO.credly, label: "Credly" },
            { icon: FiMail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400/50 hover:bg-indigo-50/50 dark:hover:bg-white/10 transition-all duration-200 shadow-sm"
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.9 }}
              title={label}
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="text-slate-400 dark:text-slate-500 text-[10px] tracking-widest uppercase font-semibold">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-white/20 flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-2 rounded-full bg-indigo-500"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Hire Me Interactive Modal */}
      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
      />
    </section>
  );
};

export default Hero;
