import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FiDownload,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { SiCredly } from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";
import ParticlesBackground from "./ParticlesBackground";
import { PERSONAL_INFO, TYPING_ROLES } from "../constants";

const FLOATING_ICONS = [
  { icon: "🤖", label: "AI & ML", x: "10%", y: "22%", delay: 0 },
  { icon: "🧠", label: "Neural Nets", x: "84%", y: "18%", delay: 0.5 },
  { icon: "⚡", label: "Fast APIs", x: "6%", y: "68%", delay: 1 },
  { icon: "🐍", label: "Python", x: "86%", y: "62%", delay: 1.5 },
  { icon: "⚛️", label: "React", x: "74%", y: "84%", delay: 0.8 },
  { icon: "💎", label: "GenAI", x: "16%", y: "82%", delay: 1.2 },
];

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-theme-page pt-20 pb-16 transition-colors duration-300"
    >
      {/* Decorative Gradient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-[350px] sm:w-[600px] lg:w-[800px] h-[350px] sm:h-[600px] lg:h-[800px] rounded-full opacity-20 dark:opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.7) 0%, transparent 70%)" }}
          animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-[350px] sm:w-[600px] lg:w-[800px] h-[350px] sm:h-[600px] lg:h-[800px] rounded-full opacity-20 dark:opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.7) 0%, transparent 70%)" }}
          animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <ParticlesBackground />

      {/* Floating Badges — hidden on mobile, visible on lg+ */}
      {FLOATING_ICONS.map((item, i) => (
        <motion.div
          key={i}
          className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-lg text-xs font-semibold text-slate-700 dark:text-slate-200 pointer-events-none absolute z-10"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: item.delay, duration: 0.5 },
            scale: { delay: item.delay, duration: 0.5 },
            y: { duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: item.delay },
          }}
        >
          <span className="text-base">{item.icon}</span>
          <span>{item.label}</span>
        </motion.div>
      ))}

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span>Available for AI/ML &amp; Full Stack Roles</span>
        </motion.div>

        {/* Greeting & Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 mb-2"
        >
          Hello World, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
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
          transition={{ delay: 0.3, duration: 0.6 }}
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
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 px-2"
        >
          MCA graduate engineer passionate about building intelligent machine learning systems,
          deep learning models, and modern full-stack web applications that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-12"
        >
          <motion.a
            href={PERSONAL_INFO.resume}
            download="Nagaraj_Chitapur_Resume.pdf"
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

          <motion.a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-indigo-500/40 hover:border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold text-sm sm:text-base hover:bg-indigo-500/10 transition-all duration-300"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            Hire Me ✨
          </motion.a>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
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
        transition={{ delay: 1 }}
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
    </section>
  );
};

export default Hero;
