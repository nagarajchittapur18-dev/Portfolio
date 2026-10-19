import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin,
  FiSend, FiUser, FiMessageSquare, FiCheckCircle,
} from "react-icons/fi";
import { SiCredly } from "react-icons/si";
import { PERSONAL_INFO, GITHUB_USERNAME } from "../constants";
import { fadeIn, staggerContainer } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type FormState = { name: string; email: string; subject: string; message: string };
type Status = "idle" | "sending" | "sent" | "error";

const Contact = () => {
  const { ref, isInView } = useScrollAnimation();
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoUrl;
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1000);
  };

  const CONTACT_INFO = [
    { icon: FiMail, label: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
    { icon: FiPhone, label: "Phone", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
    { icon: FiMapPin, label: "Location", value: PERSONAL_INFO.location, href: "#" },
    { icon: FiGithub, label: "GitHub", value: `@${GITHUB_USERNAME}`, href: PERSONAL_INFO.github },
    { icon: FiLinkedin, label: "LinkedIn", value: "Nagaraj S Chitapur", href: PERSONAL_INFO.linkedin },
    { icon: SiCredly, label: "Credly", value: "nagaraj-chitapur", href: PERSONAL_INFO.credly },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 dark:bg-[#030712] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Let's Collaborate
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 0.1)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-title mb-4 tracking-tight"
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 dark:from-indigo-400 dark:to-purple-400">
              Touch
            </span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details (5 cols on lg) */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="lg:col-span-5 space-y-4"
          >
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-theme-title mb-2">
                Let's discuss opportunities
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Whether you're looking for an AI/ML developer, Full Stack engineer, or have an exciting project in mind, I'm always open to connecting!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 hover:border-indigo-400/40 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/60 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {label}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-theme-title truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form (7 cols on lg) */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-extrabold text-theme-title mb-6">
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-theme-title placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-theme-title placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Discussion / Job Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-theme-title placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, or requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-theme-title placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 transition-all outline-none resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-sm shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === "sending" ? (
                    <span>Opening Mail Client...</span>
                  ) : status === "sent" ? (
                    <>
                      <FiCheckCircle size={17} className="text-emerald-300" />
                      <span>Ready to Send via Email!</span>
                    </>
                  ) : (
                    <>
                      <FiSend size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
