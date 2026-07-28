export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  stack: string[];
  year: string;
  status?: "Live" | "Completed" | "In development" | "Prototype";
  role: string;
  challenge: string;
  solution: string;
  highlights: string[];
  featured?: boolean;
  privateRepo?: boolean;
  repoUrl?: string;
  liveUrl?: string;
  /** Show only the project name in the visual area instead of device mockups. */
  titleOnlyVisual?: boolean;
  /** Real interface captures for the device showcase, when available. */
  showcase?: {
    desktop?: string;
    tablet?: string;
    mobile?: string;
    /** Wide crop used for the homepage/featured project card thumbnail. */
    card?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "privy-studypro",
    title: "Privy StudyPro",
    summary: "A school learning platform with student access, question management, teacher workflows, analytics, imports and administrative controls.",
    category: "Education platform",
    stack: ["Next.js", "TypeScript", "Firebase", "TanStack Query"],
    year: "2026",
    status: "In development",
    role: "Frontend architecture, product UI and workflow design",
    challenge: "Build a large school platform that supports students, teachers and administrators without making complex academic workflows feel heavy.",
    solution: "Structured the product around role-aware journeys, reusable data patterns, cached queries and focused administration tools for students, classes, subjects, questions and performance.",
    highlights: ["Role-based access", "Bulk student and question imports", "Teacher approval workflows", "Performance analytics"],
    featured: true,
    privateRepo: true
  },
  {
    slug: "veloria-essence",
    title: "Veloria Essence",
    summary: "A service and booking experience supported by a separate operations dashboard, scheduling workflows and Firebase-managed content.",
    category: "Booking platform",
    stack: ["React", "Firebase", "PWA", "Admin dashboard"],
    year: "2026",
    status: "Live",
    role: "Frontend development and product workflow implementation",
    challenge: "Create a premium customer-facing spa experience while giving the business practical control over bookings, schedules, services, testimonials and content.",
    solution: "Built a responsive booking flow and a separate administrative environment with schedule visibility, status management, staff assignment and Firebase-backed content controls.",
    highlights: ["Booking request flow", "Daily and weekly scheduling", "Admin-managed content", "Responsive testimonial system"],
    featured: true,
    privateRepo: true,
    liveUrl: "https://sap-rosy-delta.vercel.app/",
    showcase: {
      desktop: "/projects/veloria-essence/desktop.webp",
      tablet: "/projects/veloria-essence/tablet.webp",
      mobile: "/projects/veloria-essence/mobile.webp",
      card: "/projects/veloria-essence/card.webp"
    }
  },
  {
    slug: "ticketmaster-zik",
    title: "Ticketmaster Zik",
    summary: "A pixel-precise mobile ticket interface engineered across multiple iPhone dimensions with edge-to-edge PWA behaviour.",
    category: "Interface engineering",
    stack: ["React", "TypeScript", "Responsive UI", "PWA"],
    year: "2026",
    status: "Completed",
    role: "Precision frontend implementation and responsive QA",
    challenge: "Reproduce a mobile ticket interface accurately across multiple iPhone sizes while preserving edge-to-edge visual behaviour and precise spacing.",
    solution: "Created a responsive sizing system, tuned typography and icon geometry, and repeatedly validated the interface against reference screenshots at device-specific dimensions.",
    highlights: ["Pixel-accurate implementation", "iPhone X–17 responsiveness", "PWA edge-to-edge layout", "Detailed icon and spacing QA"],
    featured: true,
    privateRepo: true,
    liveUrl: "https://ticketmaster-zik-t3f6-git-agent-refer-2385f9-bos-codes-projects.vercel.app",
    titleOnlyVisual: true
  },
  {
    slug: "yakoyo-kitchen",
    title: "Yakoyo Kitchen",
    summary: "A design-led hospitality website with a developing backend, administration environment and rich content system.",
    category: "Hospitality product",
    stack: ["Next.js", "TypeScript", "Node.js", "Admin"],
    year: "2026",
    status: "In development",
    role: "Product design direction, frontend architecture and backend planning",
    challenge: "Move a restaurant website away from a generic template look and create a richer product environment that can support content, operations and future ordering workflows.",
    solution: "Defined a more editorial frontend direction and separated the customer website, backend and administration concerns so the product can grow without becoming structurally tangled.",
    highlights: ["Editorial hospitality UI", "Separate admin environment", "Backend-ready architecture", "Content-led page system"],
    featured: true,
    privateRepo: true
  },
  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    summary: "A mobile-first personal finance product for budgeting, offline transaction capture, savings goals, monthly analytics and secure profile-level controls.",
    category: "Personal finance product",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "TanStack Query", "Zustand"],
    year: "2026",
    status: "In development",
    role: "Mobile product engineering, offline architecture and security workflows",
    challenge: "Build a serious personal finance application that remains useful with unreliable connectivity while keeping money records, goals, preferences and account access secure.",
    solution: "Structured the app around authenticated Supabase data, React Query caching, an offline transaction queue with automatic reconciliation, savings-goal workflows, monthly analytics and optional PIN or biometric app locking.",
    highlights: ["Offline transaction queue and sync", "Revenue and expenditure tracking", "Savings and purchase goals", "PIN and biometric app lock", "Monthly analytics and category breakdowns"],
    featured: true,
    repoUrl: "https://github.com/bos-code/finance_tracker"
  },
  {
    slug: "chinel-media",
    title: "Chinel Media",
    summary: "A modern agency website focused on brand strategy, market execution, sales growth and digital product delivery.",
    category: "Agency website",
    stack: ["Next.js", "GSAP", "TypeScript"],
    year: "2026",
    status: "In development",
    role: "Frontend development and motion direction",
    challenge: "Present a broad agency offer without making the site feel like a standard marketing template.",
    solution: "Used strong messaging hierarchy, motion-led storytelling and modular sections to connect brand, market, sales and digital product services.",
    highlights: ["Motion-led hero", "Service storytelling", "Responsive layouts", "Modular content sections"],
    privateRepo: true,
    liveUrl: "https://chinel-media-git-claude-new-session-uzb0gs-bos-codes-projects.vercel.app",
    showcase: {
      desktop: "/projects/chinel-media/desktop.webp",
      tablet: "/projects/chinel-media/tablet.webp",
      mobile: "/projects/chinel-media/mobile.webp",
      card: "/projects/chinel-media/card.webp"
    }
  },
  {
    slug: "cms-blogger",
    title: "CMS Blogger",
    summary: "A role-based publishing system with rich-text editing, content administration, categories and Firebase-backed workflows.",
    category: "Content platform",
    stack: ["React", "Firebase", "TipTap", "Tailwind CSS"],
    year: "2025—2026",
    status: "In development",
    role: "Frontend development and Firebase integration",
    challenge: "Create a practical publishing workflow with distinct permissions, rich content editing and manageable administration.",
    solution: "Implemented a TipTap editor, role-aware dashboard, content categories and Firebase-backed authentication and storage workflows.",
    highlights: ["Rich-text editing", "Role-based dashboard", "Category management", "Firebase authentication"],
    repoUrl: "https://github.com/bos-code/blogger"
  },
  {
    slug: "stream-vibe-movies",
    title: "Stream Vibe Movies",
    summary: "A movie discovery interface built around rich media browsing and entertainment-focused interaction patterns.",
    category: "Entertainment",
    stack: ["React", "TMDB", "Responsive UI"],
    year: "2025",
    status: "Completed",
    role: "Frontend development",
    challenge: "Organize a large media catalogue into a browsing experience that remains clear across screen sizes.",
    solution: "Built reusable media sections, responsive browsing patterns and API-driven content presentation using TMDB data.",
    highlights: ["TMDB integration", "Responsive media rails", "Reusable cards", "Search and discovery UI"],
    repoUrl: "https://github.com/bos-code/stream-vibe-movies"
  },
  {
    slug: "lasu-quiz",
    title: "LASU Quiz",
    summary: "An assessment product exploring question delivery, scoring and student-focused learning experiences.",
    category: "Education",
    stack: ["React", "JavaScript"],
    year: "2025",
    status: "Prototype",
    role: "Frontend development",
    challenge: "Make assessment flows simple enough for students while preserving useful scoring and question navigation.",
    solution: "Created a focused quiz interface with clear progression, answer handling and result presentation.",
    highlights: ["Question progression", "Score handling", "Student-first UX", "Responsive interface"],
    repoUrl: "https://github.com/bos-code/lasuQuiz",
    showcase: {
      desktop: "/projects/lasu-quiz/desktop.webp",
      tablet: "/projects/lasu-quiz/tablet.webp",
      mobile: "/projects/lasu-quiz/mobile.webp",
      card: "/projects/lasu-quiz/card.webp"
    }
  },
  {
    slug: "banquee",
    title: "Banquee",
    summary: "A banking-inspired web interface focused on responsive component composition and polished product presentation.",
    category: "Fintech concept",
    stack: ["React", "CSS"],
    year: "2024",
    status: "Completed",
    role: "Frontend implementation",
    challenge: "Translate a polished banking concept into reusable responsive sections.",
    solution: "Built the interface with component-based React architecture and carefully controlled layout behaviour.",
    highlights: ["Component composition", "Responsive banking UI", "Marketing sections", "Visual polish"],
    repoUrl: "https://github.com/bos-code/Banquee",
    showcase: {
      desktop: "/projects/banquee/desktop.webp",
      tablet: "/projects/banquee/tablet.webp",
      mobile: "/projects/banquee/mobile.webp",
      card: "/projects/banquee/card.webp"
    }
  },
  {
    slug: "zik-gadget-store",
    title: "Zik Gadget Store",
    summary: "A product commerce experience for browsing technology products through a clean responsive storefront.",
    category: "E-commerce",
    stack: ["React", "JavaScript"],
    year: "2024",
    status: "Prototype",
    role: "Frontend implementation",
    challenge: "Create a clean product-browsing experience for a growing catalogue of gadgets.",
    solution: "Built reusable product sections and a responsive storefront structure focused on clear discovery.",
    highlights: ["Product catalogue", "Reusable item cards", "Responsive storefront", "Commerce UI"],
    repoUrl: "https://github.com/bos-code/Zik-gadget-store",
    showcase: {
      desktop: "/projects/zik-gadget-store/desktop.webp",
      card: "/projects/zik-gadget-store/card.webp"
    }
  },
  {
    slug: "project-archive",
    title: "Project Archive",
    summary: "Additional interface exercises include dashboards, country search, weather, timetable, task management, product pages and frontend challenges.",
    category: "Experiments",
    stack: ["React", "Vue", "JavaScript", "CSS"],
    year: "2024—2026",
    status: "Completed",
    role: "Frontend experimentation",
    challenge: "Build breadth across interface patterns, APIs, frameworks and responsive implementation.",
    solution: "Completed a range of focused projects covering dashboards, utilities, product pages and frontend challenges.",
    highlights: ["React and Vue practice", "API integrations", "Responsive exercises", "UI experimentation"],
    repoUrl: "https://github.com/bos-code?tab=repositories"
  }
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
