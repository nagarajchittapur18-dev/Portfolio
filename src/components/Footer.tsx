import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from "react-icons/fi";
import { SiCredly } from "react-icons/si";
import { PERSONAL_INFO } from "../constants";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const SOCIAL_LINKS = [
    { icon: FiGithub, href: PERSONAL_INFO.github, label: "GitHub" },
    { icon: FiLinkedin, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
    { icon: SiCredly, href: PERSONAL_INFO.credly, label: "Credly" },
    { icon: FiMail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
  ];

  const QUICK_LINKS = [
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Experience", href: "experience" },
    { label: "Certifications", href: "certifications" },
    { label: "Education", href: "education" },
    { label: "GitHub", href: "github" },
    { label: "Contact", href: "contact" },
  ];

  const scrollTo = (section: string) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 mb-10">
          {/* Brand & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 flex items-center justify-center shadow-md shadow-indigo-500/25">
                <span className="text-white font-extrabold text-sm">NC</span>
              </div>
              <span className="font-extrabold text-lg text-theme-title">
                Nagaraj{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  S Chitapur
                </span>
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              AI/ML Developer &amp; Full Stack Software Engineer specializing in Generative AI, Deep Learning NLP models, and production-ready React + Django architectures.
            </p>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-theme-title font-bold text-sm tracking-wider uppercase mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors duration-150 py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-theme-title font-bold text-sm tracking-wider uppercase">
              Connect With Me
            </h4>
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-white/10 transition-all shadow-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={label}
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-400 hover:bg-indigo-600 hover:text-white text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all duration-200 shadow-sm mt-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiArrowUp size={14} />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Nagaraj S Chitapur. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed &amp; built with <FiHeart size={12} className="text-red-500 fill-red-500" /> using React, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
