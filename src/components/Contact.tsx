import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiUser,
  FiTag,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle,
  FiCopy,
  FiCheck,
  FiExternalLink,
  FiLoader,
} from "react-icons/fi";
import { SiCredly } from "react-icons/si";
import { PERSONAL_INFO, GITHUB_USERNAME } from "../constants";
import { fadeIn, staggerContainer } from "../utils/animations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

const Contact = () => {
  const { ref, isInView } = useScrollAnimation();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const openGmail = () => {
    const su = encodeURIComponent(form.subject || "Portfolio Contact Inquiry");
    const body = encodeURIComponent(
      `Hi Nagaraj,\n\n${
        form.message || "I would like to discuss an opportunity / project with you."
      }\n\nBest regards,\n${form.name || "Your Name"}\n${
        form.email ? `Email: ${form.email}` : ""
      }`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${su}&body=${body}`,
      "_blank"
    );
  };

  const openDefaultMail = () => {
    const su = encodeURIComponent(form.subject || "Portfolio Contact Inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name || "Not provided"}\nEmail: ${
        form.email || "Not provided"
      }\n\n${form.message || ""}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${su}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${PERSONAL_INFO.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject || `Portfolio Message from ${form.name}`,
            message: form.message,
            _subject: `Portfolio Contact: ${form.subject || "Inquiry from " + form.name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await response.json().catch(() => null);

      if (response.ok && (!data || data.success === "true" || data.success === true || response.status === 200)) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 7000);
      } else {
        throw new Error(data?.message || "Failed to submit through endpoint.");
      }
    } catch (err) {
      console.warn("Direct form submit error, offering email client options:", err);
      setStatus("error");
      setErrorMessage(
        "Direct delivery failed. Please click 'Open in Gmail' or 'Default Mail' below to send directly!"
      );
    }
  };

  const CONTACT_INFO = [
    {
      icon: FiMail,
      label: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`,
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: PERSONAL_INFO.location,
      href: "https://maps.google.com/?q=Bengaluru,+Karnataka,+India",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: `@${GITHUB_USERNAME}`,
      href: PERSONAL_INFO.github,
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "Nagaraj S Chitapur",
      href: PERSONAL_INFO.linkedin,
    },
    {
      icon: SiCredly,
      label: "Credly",
      value: "nagaraj-chitapur",
      href: PERSONAL_INFO.credly,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-slate-50 dark:bg-[#030712] relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Whether you're looking for an AI/ML developer, Full Stack engineer, or have an exciting project in mind, I'm always ready to collaborate!
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

            {/* Direct copy email quick box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 border border-indigo-200/60 dark:border-indigo-500/20 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                  Quick Email
                </span>
                <span className="text-xs sm:text-sm font-bold text-theme-title truncate block">
                  {PERSONAL_INFO.email}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all flex-shrink-0 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <FiCheck size={14} className="text-emerald-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy size={13} />
                    <span>Copy</span>
                  </>
                )}
              </button>
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
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-theme-title">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Messages are delivered directly to {PERSONAL_INFO.email}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={openGmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer"
                  title="Open directly in Gmail"
                >
                  <span>Open in Gmail</span>
                  <FiExternalLink size={12} />
                </button>
              </div>

              {/* Status Alerts */}
              <AnimatePresence>
                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-5 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm flex items-start gap-3"
                  >
                    <FiCheckCircle className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <div className="font-bold">Message Sent Successfully!</div>
                      <div className="text-xs opacity-90 mt-0.5">
                        Thank you for reaching out. I'll review your note and respond as soon as possible.
                      </div>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-5 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-xs sm:text-sm"
                  >
                    <div className="flex items-start gap-2.5 mb-2">
                      <FiAlertCircle className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" size={18} />
                      <div className="font-bold">{errorMessage}</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 pl-7">
                      <button
                        type="button"
                        onClick={openGmail}
                        className="px-3 py-1 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs flex items-center gap-1 cursor-pointer"
                      >
                        <span>Send via Gmail</span>
                        <FiExternalLink size={11} />
                      </button>
                      <button
                        type="button"
                        onClick={openDefaultMail}
                        className="px-3 py-1 rounded-md bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-100 font-semibold text-xs flex items-center gap-1 cursor-pointer"
                      >
                        <FiMail size={11} />
                        <span>Default Mail</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                        <FiUser size={15} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-theme-title placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                        <FiMail size={15} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-theme-title placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                      <FiTag size={15} />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="e.g. AI/ML Role / Project Collaboration"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-theme-title placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400 dark:text-slate-500">
                      <FiMessageSquare size={15} />
                    </div>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Hi Nagaraj, I'd like to talk about..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-theme-title placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-sm shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === "sending" ? (
                    <>
                      <FiLoader size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : status === "sent" ? (
                    <>
                      <FiCheckCircle size={17} className="text-emerald-300" />
                      <span>Message Delivered!</span>
                    </>
                  ) : (
                    <>
                      <FiSend size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Direct email shortcuts footer */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span>Prefer direct email?</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={openGmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-semibold transition-colors cursor-pointer"
                  >
                    <span>Send via Gmail</span>
                    <FiExternalLink size={11} />
                  </button>
                  <button
                    type="button"
                    onClick={openDefaultMail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-semibold transition-colors cursor-pointer"
                  >
                    <FiMail size={12} />
                    <span>Mail App</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
