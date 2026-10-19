// ============================================================
// PORTFOLIO CONSTANTS — Nagaraj S Chitapur
// ============================================================

export const PERSONAL_INFO = {
  name: "Nagaraj S Chitapur",
  title: "AI & ML Developer | Full Stack Developer",
  email: "nagarajchittapur18@gmail.com",
  phone: "+91 6362590243",
  location: "Bengaluru, Karnataka, India",
  github: "https://github.com/nagarajchittapur18-dev",
  githubUsername: "nagarajchittapur18-dev",
  linkedin: "https://www.linkedin.com/in/nagaraj-chitapur",
  credly: "https://www.credly.com/users/nagaraj-chitapur/badges",
  resume: "/resume.pdf",
  bio: "I'm an MCA student passionate about Artificial Intelligence, Machine Learning, NLP, Computer Vision, and Full Stack Development. I enjoy building real-world applications that solve practical problems using modern technologies. With a strong foundation in Python and hands-on experience with Deep Learning frameworks and modern web stacks, I strive to bridge the gap between AI research and production-ready systems.",
  careerObjective:
    "To leverage my expertise in AI/ML and Full Stack Development to build intelligent systems that create meaningful impact. I aim to contribute to cutting-edge projects at world-class organizations while continuously growing as an engineer.",
  stats: [
    { label: "Years of Coding", value: "3+" },
    { label: "GitHub Repos", value: "23+" },
    { label: "Verified Badges", value: "5+" },
    { label: "Technologies", value: "15+" },
  ],
};

export const TYPING_ROLES = [
  "AI & ML Developer",
  2000,
  "Python Full Stack Developer",
  2000,
  "Generative AI & Gemini Engineer",
  2000,
  "Django & React Developer",
  2000,
  "Prompt Engineer",
  2000,
];

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

// ============================================================
// SKILLS
// ============================================================

export const SKILLS = {
  "Programming Language": [
    { name: "Python", icon: "python", color: "#3776AB", level: 92 },
    { name: "Java", icon: "java", color: "#ED8B00", level: 80 },
  ],
  "Web Development": [
    { name: "HTML", icon: "html", color: "#E34F26", level: 92 },
    { name: "CSS", icon: "css", color: "#1572B6", level: 88 },
    { name: "Django", icon: "django", color: "#092E20", level: 88 },
  ],
  "AI & ML": [
    { name: "NLP", icon: "nlp", color: "#8B5CF6", level: 85 },
    { name: "ML", icon: "ml", color: "#FF6F00", level: 86 },
    { name: "Pandas", icon: "pandas", color: "#E70488", level: 88 },
    { name: "NumPy", icon: "numpy", color: "#4DABCF", level: 88 },
  ],
  "Database": [
    { name: "MySQL", icon: "mysql", color: "#4479A1", level: 85 },
    { name: "SQLite", icon: "sqlite", color: "#003B57", level: 85 },
    { name: "MongoDB", icon: "mongodb", color: "#47A248", level: 75 },
  ],
  "Version Control": [
    { name: "Git", icon: "git", color: "#F05032", level: 88 },
    { name: "GitHub", icon: "github", color: "#181717", level: 92 },
  ],
};

// ============================================================
// PROJECTS
// ============================================================

export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "AI/ML" | "Full Stack" | "Web";
  github: string;
  live: string;
  color: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Twitter Hate Speech Detector",
    description:
      "AI application that detects hate speech in tweets using BiLSTM with attention mechanism and real-time inference.",
    longDescription:
      "A production-ready NLP application powered by Bidirectional LSTM with attention mechanism. Features real-time tweet analysis, clean dashboard, and REST API endpoints. Deployed on Render with SQLite database.",
    tags: ["Python", "Flask", "TensorFlow", "LSTM", "SQLite", "Render", "NLP"],
    category: "AI/ML",
    github: "https://github.com/nagarajchittapur18-dev/twitter-hate-speech-detector",
    live: "https://twitter-hate-speech-detector.onrender.com",
    color: "from-purple-500 to-pink-500",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Agro Assist",
    description:
      "AI-powered agriculture platform for crop recommendation, fertilizer recommendation, disease detection, and intelligent chatbot.",
    longDescription:
      "A comprehensive agriculture platform leveraging computer vision and ML models for crop and fertilizer optimization, disease diagnosis, and farmer support with multilingual intelligence.",
    tags: ["React", "Django", "TensorFlow", "MySQL", "CNN", "REST API"],
    category: "Full Stack",
    github: "https://github.com/nagarajchittapur18-dev/smart_agroassist",
    live: "https://github.com/nagarajchittapur18-dev/smart_agroassist",
    color: "from-green-500 to-emerald-500",
    featured: true,
  },
  {
    id: 3,
    title: "PagePulse — SEO Analyzer",
    description:
      "Website SEO analysis platform delivering technical audit reports, performance insights, and optimization guidance.",
    longDescription:
      "Full-stack website SEO auditor that inspects meta tags, headings, page speed, mobile compatibility, and technical SEO metrics, generating actionable optimization recommendations.",
    tags: ["React", "JavaScript", "BeautifulSoup", "Python", "Vercel"],
    category: "Full Stack",
    github: "https://github.com/nagarajchittapur18-dev/pagepulse-website-analyzer",
    live: "https://pagepulse-website-analyzer.vercel.app",
    color: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    id: 4,
    title: "AI Mental Stress Detection",
    description:
      "Deep learning application detecting psychological stress levels using Artificial Neural Networks (ANN).",
    longDescription:
      "Predictive mental stress analysis system using ANN trained on clinical and lifestyle questionnaires. Features categorized risk scoring, visual breakdowns, and proactive wellness recommendations.",
    tags: ["Flask", "TensorFlow", "ANN", "SQLite", "Python", "Render"],
    category: "AI/ML",
    github: "https://github.com/nagarajchittapur18-dev/AI-Mental-Stress-Detection",
    live: "https://ai-mental-stress-detection.onrender.com",
    color: "from-orange-500 to-red-500",
    featured: true,
  },
  {
    id: 5,
    title: "Fake Offer Letter Phishing Inspector",
    description:
      "Cybersecurity and AI tool that inspects employment offer letters and detects fraudulent or phishing recruitment campaigns.",
    longDescription:
      "Analyzes text patterns, sender semantics, formatting discrepancies, and fraudulent indicators in job offer letters to protect students and job-seekers from recruitment scams.",
    tags: ["Python", "Machine Learning", "NLP", "Flask", "Vercel"],
    category: "AI/ML",
    github: "https://github.com/nagarajchittapur18-dev/Fake-Offer-Letter-Phishing-Inspector",
    live: "https://fake-offer-letter-phishing-inspecto-ashy.vercel.app",
    color: "from-red-500 to-rose-500",
    featured: false,
  },
  {
    id: 6,
    title: "SafeCampus",
    description:
      "Modern emergency safety application designed for real-time reporting, emergency assistance, and student protection.",
    longDescription:
      "Mobile-friendly emergency response application providing real-time alerts, quick incident reporting, contact directory, and campus safety monitoring for student communities.",
    tags: ["JavaScript", "React", "Mobile First", "Vercel", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/nagarajchittapur18-dev/Safecampus",
    live: "https://safecampus-mobile-nine.vercel.app",
    color: "from-indigo-500 to-blue-500",
    featured: false,
  },
];

// ============================================================
// EXPERIENCE
// ============================================================

export const EXPERIENCE = [
  {
    id: 1,
    role: "Python Full Stack Intern",
    company: "Skyllx",
    duration: "2024 – Present",
    type: "Internship",
    description:
      "Developing full-stack web applications using Python, Django, and React. Building REST APIs, integrating third-party services, and collaborating in an agile team environment.",
    highlights: [
      "Built and deployed production-grade Django + React applications",
      "Integrated Cloudinary for media management and authentication pipelines",
      "Optimized database queries and API response times",
      "Implemented JWT authentication and role-based access control",
    ],
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 2,
    role: "Python Developer Intern",
    company: "Developers Arena",
    duration: "2023 – 2024",
    type: "Internship",
    description:
      "Focused on Python scripting, data processing pipelines, and building machine learning models for real-world datasets.",
    highlights: [
      "Developed data preprocessing pipelines for ML model training",
      "Built and evaluated NLP models for text classification tasks",
      "Created automation scripts saving 10+ hours of manual work weekly",
      "Collaborated with data science team on feature engineering",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

// ============================================================
// CERTIFICATIONS (VERIFIED ON CREDLY)
// ============================================================

export type Certification = {
  id: number;
  title: string;
  issuer: string;
  year: string;
  badgeId: string;
  credential: string;
  imageUrl: string;
  color: string;
  skills: string[];
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "Develop GenAI Apps with Gemini and Streamlit",
    issuer: "Google Cloud",
    year: "2026",
    badgeId: "b1034444-ea0f-488b-a48a-6b8014529db8",
    credential: "https://www.credly.com/badges/b1034444-ea0f-488b-a48a-6b8014529db8",
    imageUrl: "https://images.credly.com/images/325732dc-648b-4b13-91ee-0eaec6f9f0f9/image.png",
    color: "from-blue-500 to-indigo-500",
    skills: ["Generative AI", "Gemini", "Streamlit", "Python", "Google Cloud"],
  },
  {
    id: 2,
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    year: "2026",
    badgeId: "b7a09a4a-6d02-44cb-9c12-bb8b0c66b7d1",
    credential: "https://www.credly.com/badges/b7a09a4a-6d02-44cb-9c12-bb8b0c66b7d1",
    imageUrl: "https://images.credly.com/images/cef82b2e-970a-4318-8e59-c3e26b7f5c19/image.png",
    color: "from-indigo-500 to-purple-500",
    skills: ["Prompt Engineering", "Vertex AI", "Multimodal AI", "Gemini Models"],
  },
  {
    id: 3,
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    year: "2026",
    badgeId: "99be7a05-5e09-4dcf-9b21-c0a1f2af7674",
    credential: "https://www.credly.com/badges/99be7a05-5e09-4dcf-9b21-c0a1f2af7674",
    imageUrl: "https://images.credly.com/images/e2d12302-10f9-40d4-8ff1-066a7008b61d/blob",
    color: "from-teal-500 to-cyan-500",
    skills: ["Modern AI", "Chatbots", "Prompting", "AI Tools"],
  },
  {
    id: 4,
    title: "AI Fundamentals with IBM SkillsBuild",
    issuer: "Cisco",
    year: "2026",
    badgeId: "328db079-7913-4ec4-92cf-155b3facc485",
    credential: "https://www.credly.com/badges/328db079-7913-4ec4-92cf-155b3facc485",
    imageUrl: "https://images.credly.com/images/26c21273-c0ab-485b-98a7-f1212dcb82b8/image.png",
    color: "from-blue-600 to-teal-500",
    skills: ["NLP", "Computer Vision", "Deep Learning", "AI Ethics"],
  },
  {
    id: 5,
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2026",
    badgeId: "c4ea7b8f-b84a-49c8-8204-b4e327f536ce",
    credential: "https://www.credly.com/badges/c4ea7b8f-b84a-49c8-8204-b4e327f536ce",
    imageUrl: "https://images.credly.com/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/image.png",
    color: "from-purple-600 to-pink-500",
    skills: ["Neural Networks", "Watson Studio", "Machine Learning", "Chatbots"],
  },
];

// ============================================================
// EDUCATION
// ============================================================

export const EDUCATION = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Presidency University",
    location: "Bengaluru, Karnataka",
    duration: "2025 – Present",
    grade: "8.75 CGPA",
    description:
      "Specializing in Artificial Intelligence, Machine Learning, and Software Engineering. Active in coding clubs, AI research groups, and hackathons.",
    color: "from-purple-500 to-blue-500",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "ARJ BCA College",
    location: "Ilkal, Karnataka",
    duration: "2022 – 2025",
    grade: "8.73 CGPA",
    description:
      "Core foundation in programming, data structures, algorithms, databases, and software development principles.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    degree: "Pre-University Course (PUC) — PCMB",
    institution: "G K M College of Science",
    location: "Ilkal, Karnataka",
    duration: "2020 – 2022",
    grade: "75%",
    description:
      "Studied Physics, Chemistry, Mathematics, and Biology with a strong analytical foundation.",
    color: "from-cyan-500 to-green-500",
  },
];

// ============================================================
// GITHUB USERNAME (for stats embed)
// ============================================================

export const GITHUB_USERNAME = "nagarajchittapur18-dev";
