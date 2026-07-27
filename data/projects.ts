export type Project = {
  title: string;
  summary: string;
  category: string;
  stack: string[];
  year: string;
  featured?: boolean;
  privateRepo?: boolean;
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Privy StudyPro",
    summary: "A school learning platform with student access, question management, teacher workflows, analytics, imports and administrative controls.",
    category: "Education platform",
    stack: ["Next.js", "TypeScript", "Firebase", "TanStack Query"],
    year: "2026",
    featured: true,
    privateRepo: true
  },
  {
    title: "Veloria Essence",
    summary: "A service and booking experience supported by a separate operations dashboard, scheduling workflows and Firebase-managed content.",
    category: "Booking platform",
    stack: ["React", "Firebase", "PWA", "Admin dashboard"],
    year: "2026",
    featured: true,
    privateRepo: true,
    liveUrl: "https://sap-rosy-delta.vercel.app/"
  },
  {
    title: "Ticketmaster Zik",
    summary: "A pixel-precise mobile ticket interface engineered across multiple iPhone dimensions with edge-to-edge PWA behaviour.",
    category: "Interface engineering",
    stack: ["React", "TypeScript", "Responsive UI", "PWA"],
    year: "2026",
    featured: true,
    privateRepo: true
  },
  {
    title: "Yakoyo Kitchen",
    summary: "A design-led hospitality website with a developing backend, administration environment and rich content system.",
    category: "Hospitality product",
    stack: ["Next.js", "TypeScript", "Node.js", "Admin"],
    year: "2026",
    featured: true,
    privateRepo: true
  },
  {
    title: "Chinel Media",
    summary: "A modern agency website focused on brand strategy, market execution, sales growth and digital product delivery.",
    category: "Agency website",
    stack: ["Next.js", "GSAP", "TypeScript"],
    year: "2026",
    privateRepo: true
  },
  {
    title: "CMS Blogger",
    summary: "A role-based publishing system with rich-text editing, content administration, categories and Firebase-backed workflows.",
    category: "Content platform",
    stack: ["React", "Firebase", "TipTap", "Tailwind CSS"],
    year: "2025",
    repoUrl: "https://github.com/bos-code/blogger"
  },
  {
    title: "Stream Vibe Movies",
    summary: "A movie discovery interface built around rich media browsing and entertainment-focused interaction patterns.",
    category: "Entertainment",
    stack: ["React", "TMDB", "Responsive UI"],
    year: "2025",
    repoUrl: "https://github.com/bos-code/stream-vibe-movies"
  },
  {
    title: "LASU Quiz",
    summary: "An assessment product exploring question delivery, scoring and student-focused learning experiences.",
    category: "Education",
    stack: ["React", "JavaScript"],
    year: "2025",
    repoUrl: "https://github.com/bos-code/lasuQuiz"
  },
  {
    title: "Finance Tracker",
    summary: "A practical personal-finance interface for recording and reviewing financial activity.",
    category: "Fintech UI",
    stack: ["React", "JavaScript"],
    year: "2025",
    repoUrl: "https://github.com/bos-code/finance_tracker"
  },
  {
    title: "Banquee",
    summary: "A banking-inspired web interface focused on responsive component composition and polished product presentation.",
    category: "Fintech concept",
    stack: ["React", "CSS"],
    year: "2024",
    repoUrl: "https://github.com/bos-code/Banquee"
  },
  {
    title: "Zik Gadget Store",
    summary: "A product commerce experience for browsing technology products through a clean responsive storefront.",
    category: "E-commerce",
    stack: ["React", "JavaScript"],
    year: "2024",
    repoUrl: "https://github.com/bos-code/Zik-gadget-store"
  },
  {
    title: "Project Archive",
    summary: "Additional interface exercises include dashboards, country search, weather, timetable, task management, product pages and frontend challenges.",
    category: "Experiments",
    stack: ["React", "Vue", "JavaScript", "CSS"],
    year: "2024—2026",
    repoUrl: "https://github.com/bos-code?tab=repositories"
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
