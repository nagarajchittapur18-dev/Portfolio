import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiBriefcase,
  FiMail,
  FiUser,
  FiMapPin,
  FiCheckCircle,
  FiSend,
  FiLoader,
  FiDownload,
  FiExternalLink,
  FiCopy,
  FiCheck,
  FiLinkedin,
  FiPhone,
  FiAward,
  FiCode,
  FiClock,
  FiFileText,
} from "react-icons/fi";
import { SiCredly } from "react-icons/si";
import { PERSONAL_INFO } from "../constants";

type EngagementType = "Full-Time" | "Internship" | "Contract / Freelance";
type WorkMode = "Remote" | "Hybrid" | "On-Site (Bengaluru)";

type HireMeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HireMeModal = ({ isOpen, onClose }: HireMeModalProps) => {
  const [engagement, setEngagement] = useState<EngagementType>("Full-Time");
  const [workMode, setWorkMode] = useState<WorkMode>("Remote");
  const [form, setForm] = useState({
    recruiterName: "",
    company: "",
    email: "",
    roleTitle: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);

  // Close on ESC key and trap body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openGmailHiringTemplate = () => {
    const su = encodeURIComponent(
      `[Hiring Inquiry - ${engagement}] ${form.roleTitle || "Opportunity"} at ${
        form.company || "Our Company"
      }`
    );
    const body = encodeURIComponent(
      `Hi Nagaraj,\n\nWe came across your portfolio and are interested in discussing an opportunity with you:\n\nRole: ${
        form.roleTitle || "AI/ML Engineer / Full Stack Developer"
      }\nCompany: ${form.company || "Company Name"}\nEngagement: ${engagement}\nWork Arrangement: ${workMode}\n\nDetails:\n${
        form.message || "We would like to schedule an introductory interview..."
      }\n\nBest regards,\n${form.recruiterName || "Hiring Team"}\n${
        form.email ? `Email: ${form.email}` : ""
      }`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${su}&body=${body}`,
      "_blank"
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.recruiterName.trim() || !form.email.trim()) return;

    setStatus("sending");

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
            recruiterName: form.recruiterName,
            company: form.company,
            email: form.email,
            engagementType: engagement,
            workMode,
            roleTitle: form.roleTitle || "Not specified",
            message: form.message,
            _subject: `[HIRING] ${engagement} inquiry from ${
              form.company || form.recruiterName
            }`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await response.json().catch(() => null);

      if (
        response.ok &&
        (!data || data.success === "true" || data.success === true || response.status === 200)
      ) {
        setStatus("sent");
        setForm({ recruiterName: "", company: "", email: "", roleTitle: "", message: "" });
        setTimeout(() => setStatus("idle"), 7000);
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container with crisp border and glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white dark:bg-[#0c1322] border-2 border-indigo-500/30 dark:border-indigo-500/40 rounded-2xl sm:rounded-3xl shadow-2xl shadow-indigo-500/10 overflow-hidden my-auto z-10 max-h-[92vh] flex flex-col"
          >
            {/* Header Section with Profile Avatar & Info */}
            <div className="p-5 sm:p-6 pb-5 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-blue-500/10 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                {/* Profile Photo */}
                <div className="relative flex-shrink-0">
                  <img
                    src="/profile.jpg"
                    alt="Nagaraj S Chitapur"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-indigo-500/80 shadow-md shadow-indigo-500/20"
                  />
                  <span
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0c1322] shadow-xs"
                    title="Available for roles"
                  />
                </div>

                {/* Candidate Title & Availability */}
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open to Opportunities (Immediate / 2025)</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-theme-title tracking-tight truncate">
                    Hire Nagaraj S Chitapur
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium truncate">
                    AI &amp; ML Engineer • Python Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
              {/* Candidate Info Showcase Card (Framed with crisp borders) */}
              <div className="rounded-2xl border-2 border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0f172a]/80 p-4 sm:p-5">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <FiFileText className="text-indigo-600 dark:text-indigo-400" size={15} />
                    <span className="text-xs font-bold uppercase tracking-wider text-theme-title">
                      Candidate Profile &amp; Highlights
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Verified Profile
                  </span>
                </div>

                {/* 2x2 Clean Grid of Info Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Tile 1: Location */}
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiMapPin size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">
                        Location &amp; Mobility
                      </div>
                      <div className="text-xs font-bold text-theme-title">
                        Bengaluru, Karnataka
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Open to Remote, Hybrid &amp; On-Site
                      </div>
                    </div>
                  </div>

                  {/* Tile 2: Education */}
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiAward size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">
                        Education &amp; Grade
                      </div>
                      <div className="text-xs font-bold text-theme-title truncate">
                        MCA @ Presidency Univ
                      </div>
                      <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                        8.75 CGPA (BCA: 8.73 CGPA)
                      </div>
                    </div>
                  </div>

                  {/* Tile 3: Core Tech Stack */}
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCode size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">
                        Core Tech Stack
                      </div>
                      <div className="text-xs font-bold text-theme-title truncate">
                        Python, Django, React, REST
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        TensorFlow, ML, NLP, MySQL
                      </div>
                    </div>
                  </div>

                  {/* Tile 4: Direct Contact */}
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiPhone size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">
                        Direct Phone &amp; Email
                      </div>
                      <div className="text-xs font-bold text-theme-title">
                        {PERSONAL_INFO.phone}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Candidate Action Buttons Row */}
                <div className="mt-3.5 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    Verified Documents &amp; Credentials:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={PERSONAL_INFO.resume}
                      download="Nagaraj_Chitapur_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-xs"
                    >
                      <FiDownload size={13} />
                      <span>Download Resume (PDF)</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0c1322] hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold transition-colors"
                    >
                      <FiLinkedin size={13} className="text-[#0a66c2]" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.credly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0c1322] hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold transition-colors"
                    >
                      <SiCredly size={13} className="text-[#ff6b00]" />
                      <span>Credly Badges</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Alert Messages */}
              {status === "sent" && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm flex items-start gap-3">
                  <FiCheckCircle className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <div className="font-bold">Inquiry Sent Directly to Nagaraj!</div>
                    <div className="text-xs opacity-90 mt-0.5">
                      Thank you! I will review your job details and get back to you within 24 hours.
                    </div>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-xs flex flex-wrap items-center justify-between gap-2">
                  <span>Direct submission issue. Please click to send via Gmail:</span>
                  <button
                    type="button"
                    onClick={openGmailHiringTemplate}
                    className="px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>Open in Gmail</span>
                    <FiExternalLink size={12} />
                  </button>
                </div>
              )}

              {/* Bordered Hiring Inquiry Form Container */}
              <div className="rounded-2xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0f172a]/60 p-4 sm:p-5 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200/80 dark:border-slate-800">
                  <FiSend className="text-indigo-600 dark:text-indigo-400" size={15} />
                  <span className="text-xs font-bold uppercase tracking-wider text-theme-title">
                    Submit a Hiring Inquiry
                  </span>
                </div>

                {/* Selectors Row: Opportunity Type & Work Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Opportunity Type */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Opportunity Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["Full-Time", "Internship", "Contract / Freelance"] as EngagementType[]).map(
                        (type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setEngagement(type)}
                            className={`py-2 px-1.5 rounded-xl text-[11px] font-bold transition-all text-center cursor-pointer border-2 ${
                              engagement === type
                                ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/25"
                                : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400"
                            }`}
                          >
                            {type}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Work Arrangement */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Work Arrangement
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["Remote", "Hybrid", "On-Site (Bengaluru)"] as WorkMode[]).map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setWorkMode(mode)}
                          className={`py-2 px-1.5 rounded-xl text-[11px] font-bold transition-all text-center cursor-pointer border-2 ${
                            workMode === mode
                              ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/25"
                              : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-purple-400"
                          }`}
                        >
                          {mode === "On-Site (Bengaluru)" ? "On-Site" : mode}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Form Inputs Grid */}
                <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
                  {/* Row 1: Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name / Recruiter <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <FiUser size={15} />
                        </div>
                        <input
                          type="text"
                          name="recruiterName"
                          required
                          value={form.recruiterName}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Connor"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-700 text-theme-title text-xs sm:text-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Company / Organization
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <FiBriefcase size={15} />
                        </div>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="e.g. Acme AI Corp"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-700 text-theme-title text-xs sm:text-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email and Role Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <FiMail size={15} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="sarah@acme.com"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-700 text-theme-title text-xs sm:text-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Position / Role Title
                      </label>
                      <input
                        type="text"
                        name="roleTitle"
                        value={form.roleTitle}
                        onChange={handleChange}
                        placeholder="e.g. AI/ML Engineer / Python Developer"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-700 text-theme-title text-xs sm:text-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message / Scope */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Role Description / Job Link / Project Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Provide details about the role, responsibilities, compensation, or paste a link to the job posting..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-700 text-theme-title text-xs sm:text-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Action Buttons Row */}
                  <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {status === "sending" ? (
                        <>
                          <FiLoader size={16} className="animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <FiSend size={15} />
                          <span>Send Hiring Inquiry</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={openGmailHiringTemplate}
                      className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Compose in Gmail</span>
                      <FiExternalLink size={13} />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Modal Footer with Direct Information & Alignment */}
            <div className="p-4 sm:px-6 bg-slate-50 dark:bg-[#070d1d] border-t-2 border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <FiClock size={13} className="text-indigo-500" />
                <span>Response guarantee: within 24 hours</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-theme-title">{PERSONAL_INFO.email}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-white/10 hover:bg-indigo-100 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400 text-[11px] font-semibold cursor-pointer transition-colors border border-slate-300 dark:border-slate-700"
                  title="Copy email"
                >
                  {copied ? (
                    <>
                      <FiCheck size={12} className="text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default HireMeModal;
