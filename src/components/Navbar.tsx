import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import {
  FiSun,
  FiMoon,
  FiHome,
  FiUser,
  FiCpu,
  FiLayers,
  FiBriefcase,
  FiAward,
  FiBookOpen,
  FiGithub,
  FiMail,
} from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";
import { NAV_LINKS, PERSONAL_INFO } from "../constants";

// Icon mapping for navigation round buttons
const NAV_ICONS: Record<string, React.ReactNode> = {
  Home: <FiHome size={13} />,
  About: <FiUser size={13} />,
  Skills: <FiCpu size={13} />,
  Projects: <FiLayers size={13} />,
  Experience: <FiBriefcase size={13} />,
  Certifications: <FiAward size={13} />,
  Education: <FiBookOpen size={13} />,
  GitHub: <FiGithub size={13} />,
  Contact: <FiMail size={13} />,
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Floating Island Navigation Bar */}
      <motion.nav
        className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex items-center justify-center px-3 sm:px-6 pointer-events-none"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className={`pointer-events-auto max-w-7xl w-full flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/85 dark:bg-[#030712]/85 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 shadow-xl shadow-black/5 dark:shadow-black/50"
              : "bg-white/70 dark:bg-[#030712]/70 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30"
          }`}
        >
          {/* Logo Button (Round Monogram) */}
          <motion.button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2.5 group text-left flex-shrink-0"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Scroll to top"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 flex items-center justify-center text-white font-black text-sm tracking-wider shadow-md shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow">
              NC
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-extrabold text-sm sm:text-base leading-tight tracking-tight text-theme-title">
                Nagaraj{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 font-bold">
                  Chitapur
                </span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-theme-muted">
                AI &amp; Full Stack
              </span>
            </div>
          </motion.button>

          {/* Desktop Round Buttons Container */}
          <div className="hidden xl:flex items-center gap-1.5 p-1 rounded-full bg-slate-200/40 dark:bg-white/[0.04] border border-slate-300/40 dark:border-white/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              const icon = NAV_ICONS[link.label] || null;

              return (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "text-white shadow-md shadow-indigo-500/30"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavRoundPill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {icon}
                    <span>{link.label}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Right Controls (All Round Buttons) */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Theme Toggle Button (Circular Round Button) */}
            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-amber-300 hover:text-indigo-600 dark:hover:text-amber-200 hover:border-indigo-400/50 hover:bg-slate-200 dark:hover:bg-white/15 transition-all shadow-sm"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <FiSun size={18} className="transition-transform" />
              ) : (
                <FiMoon size={18} className="text-slate-700 transition-transform -rotate-12" />
              )}
            </motion.button>

            {/* Hire Me CTA (Round Pill Button) */}
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/40 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me ✨
            </motion.a>

            {/* Mobile Menu Hamburger Button (Round Button) */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:border-indigo-400 transition-all shadow-sm"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu (With Round Pill Buttons for Each Section) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Modal Drawer */}
            <motion.div
              className="absolute top-20 left-4 right-4 rounded-3xl bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 p-5 shadow-2xl max-h-[85vh] overflow-y-auto"
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-theme-muted">
                  Navigation Menu
                </span>
                <span className="text-xs text-indigo-500 font-semibold font-mono">
                  {NAV_LINKS.length} Sections
                </span>
              </div>

              {/* Round Buttons List for Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href.slice(1);
                  const icon = NAV_ICONS[link.label] || null;

                  return (
                    <motion.button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white border-transparent shadow-md shadow-indigo-500/25"
                          : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10"
                      }`}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className={`${isActive ? "text-white" : "text-indigo-500"}`}>
                          {icon}
                        </span>
                        <span>{link.label}</span>
                      </span>

                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 mt-3 flex flex-col gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-center py-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-500/25"
                  onClick={() => setMobileOpen(false)}
                >
                  Hire Me ✨
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
