export const profile = {
  name: "Jewoola Favour",
  firstName: "Favour",
  role: "Full-Stack Software Engineer",
  avatar: "/profile_pic.jpg",
  email: "jewoolafavour2020@gmail.com",
  resume: "/Jewoola Favour Resume.pdf",
};

export const bio = [
  "I'm a Software Engineer at Ennovate Lab, designing and building end-to-end mobile, web and backend applications that people rely on every day.",
  "I've shipped products at real scale, building across fintech, education, commerce and mobile, with products processing live payments, apps reaching 10k+ downloads, and platforms serving 30,000+ users.",
];

export const socials = [
  {
    label: "GitHub",
    short: "Gh",
    href: "https://github.com/JEWOOLAFAVOUR",
    color: "#e5e5e5",
    fg: "#171717",
  },
  {
    label: "LinkedIn",
    short: "in",
    href: "https://www.linkedin.com/in/jewoola-favour-5b7607217",
    color: "#3b82f6",
    fg: "#ffffff",
  },
  {
    label: "X",
    short: "𝕏",
    href: "https://x.com/favourlop",
    color: "#ef4444",
    fg: "#ffffff",
  },
  {
    label: "Instagram",
    short: "Ig",
    href: "https://www.instagram.com/jewoolafavourgbemi",
    color: "#a855f7",
    fg: "#ffffff",
  },
];

export interface Project {
  title: string;
  blurb: string;
  url: string;
  image: string;
  large?: boolean;
}

export const projects: Project[] = [
  {
    title: "Paystack",
    blurb: "Engineered a engineer-accurate recreation of Paystack.",
    url: "https://paystack-fintech.vercel.app/",
    image: "/paystack_landing.jpeg",
    large: true,
  },
  {
    title: "Oreno",
    blurb:
      "Designed and built the real-time core — websocket live updates, Redis-backed presence, and a PostgreSQL/Prisma data layer powering the daily standup workflow.",
    url: "https://oreno.vercel.app/",
    image: "/oreno_screenshot.app.jpeg",
  },
  {
    title: "StudyPadi",
    blurb:
      "Architected the platform end-to-end: CBT exam engine, authentication, timed scoring, and result analytics — serving 2,000+ students with free past questions.",
    url: "https://study-pady-website.vercel.app/",
    image: "/studypady_screenshot.png",
  },
  {
    title: "HonourWorld",
    blurb:
      "Built the React Native app solo — Redux state management, secure VTU transaction APIs, offline-tolerant flows — shipping 10k+ downloads on the Play Store.",
    url: "https://play.google.com/store/apps/details?id=com.ng.honourworld",
    image: "/honour_world_screenshot.png",
  },
  {
    title: "Skill Remit",
    blurb:
      "Implemented the marketplace backend and mobile client — artisan discovery, booking, and payment flows on Node.js services behind a React Native app.",
    url: "https://play.google.com/store/apps/details?id=com.skillremitartisan",
    image: "/skill_remit_screenshot.png",
  },
  {
    title: "Irisi Fashion",
    blurb:
      "Developed the storefront from scratch — cart and checkout flows, SEO-ready product pages, and a fully responsive Tailwind UI tuned for conversion.",
    url: "https://irisi-fashion.vercel.app/",
    image: "/irisi_fashion_screenshot.png",
  },
  {
    title: "VickyBest Telecom",
    blurb:
      "Delivered the VTU purchase pipeline with TanStack Query caching, Redux state, and resilient API retry logic, built at Cephas ICT Hub.",
    url: "https://play.google.com/store/apps/details?id=com.vickybest",
    image: "/vicky_best_screenshot.png",
  },
  {
    title: "JTB Website",
    blurb:
      "Built a responsive institutional website for a state government with a Supabase-backed content layer and CI deploy pipeline.",
    url: "https://jtb-website-01.gilgal.tech/",
    image: "/jtb_screenshot.png",
  },
];

export interface Experience {
  period: string;
  company: string;
  title: string;
  url: string | null;
}

export interface ArchiveProject {
  year: string;
  title: string;
  madeAt: string;
  builtWith: string[];
  link: string | null;
}

export const archiveProjects: ArchiveProject[] = [
  {
    year: "2026",
    title: "Loop Chat",
    madeAt: "Personal",
    builtWith: ["React", "Node.js", "Socket.io", "Express", "MongoDB", "JWT"],
    link: "https://github.com/JEWOOLAFAVOUR/Loop-Chat",
  },
  {
    year: "2026",
    title: "Gilgal Tech",
    madeAt: "Personal",
    builtWith: ["React", "Node.js", "Docker", "Azure", "PostgreSQL", "CI/CD"],
    link: "http://gilgal.tech/",
  },
  {
    year: "2026",
    title: "Iwadii Lab",
    madeAt: "Personal",
    builtWith: ["React", "Tailwind CSS", "Vercel"],
    link: "https://iwadii-lab.vercel.app/",
  },
  {
    year: "2025",
    title: "Ennovate Lab Projects",
    madeAt: "Ennovate Lab",
    builtWith: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    link: "https://www.ennovatelab.com/",
  },
  {
    year: "2025",
    title: "CAC Chapel LAUTECH Website",
    madeAt: "Personal",
    builtWith: ["React", "Tailwind CSS", "Vercel"],
    link: null,
  },
  {
    year: "2024",
    title: "Versecog Farm Mobile App",
    madeAt: "Freelance",
    builtWith: ["React Native", "JavaScript", "Mobile Development"],
    link: null,
  },
  {
    year: "2024",
    title: "Compellers Digital Mobile App",
    madeAt: "Freelance",
    builtWith: ["React Native", "JavaScript", "Firebase"],
    link: "https://www.instagram.com/compellers_digitals/",
  },
  {
    year: "2022",
    title: "Mobile App Development Projects",
    madeAt: "Cephas Digital Technology",
    builtWith: ["React Native", "Node.js", "Express", "MongoDB"],
    link: "https://www.cephasict.com/",
  },
];

export const experiences: Experience[] = [
  {
    period: "October 2025 — Present",
    company: "Ennovate Lab",
    title: "Software Developer",
    url: "https://www.ennovatelab.com/",
  },
  {
    period: "March 2022 — September 2025",
    company: "Cephas Digital Technology",
    title: "Software Developer",
    url: "https://www.cephasict.com/",
  },
  {
    period: "November 2024 — January 2025",
    company: "Versecog Farm Enterprise",
    title: "Freelance Mobile App Developer",
    url: null,
  },
  {
    period: "August 2024 — November 2024",
    company: "Compellers Digital",
    title: "Freelance Mobile Developer",
    url: "https://www.instagram.com/compellers_digitals/",
  },
];

export const aboutParagraphs = [
  "I like software that feels intentional, timeless, clean interfaces, APIs, code that's easy to reason about step by step, and architecture that doesn't fall apart when the product grows.",
  "I've worked across mobile, web, and backend — building user-facing products, designing APIs, working with databases, and figuring out the engineering behind features that need to work reliably in production.",
  "I'm always exploring how things work under the hood, whether that's making a system faster, simplifying something that's gotten too complicated, or pushing a side project further just to learn something new.",
];

// export const skillGroups = [
//   {
//     label: "Frontend & Mobile",
//     tools: [
//       "React",
//       "React Native",
//       "Next.js",
//       "TypeScript",
//       "JavaScript",
//       "Redux / Zustand",
//       "TanStack",
//       "Tailwind CSS",
//     ],
//   },
//   {
//     label: "Backend & Data",
//     tools: [
//       "Node.js",
//       "Golang",
//       "Express",
//       "PostgreSQL",
//       "MongoDB",
//       "Firebase / Supabase",
//       "REST APIs",
//       "Microservices",
//     ],
//   },
//   {
//     label: "Cloud & DevOps",
//     tools: ["AWS", "Azure", "Docker", "Linux", "Git", "CI/CD", "DevOps"],
//   },
//   {
//     label: "Agentic AI",
//     tools: [
//       "LangChain",
//       "LangGraph",
//       "RAG",
//       "Tool/Function Calling",
//       "Agent Workflows",
//       "Agent Memory",
//       "Reflection & Evaluation",
//       "LLM Orchestration",
//       "Structured Outputs",
//       "Embeddings & Vector Search",
//       "API/Tool Integration",
//       "Human-in-the-Loop",
//       "TypeScript AI Development",
//     ],
//   },
// ];

export const skillGroups = [
  {
    label: "Frontend & Mobile",
    tools: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "TanStack",
      "Redux / Zustand",
      "Tailwind CSS",
    ],
  },

  {
    label: "Backend & Data",
    tools: [
      "Node.js",
      "Express",
      "Golang",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "REST APIs",
    ],
  },

  {
    label: "Cloud & DevOps",
    tools: ["AWS", "Docker", "Linux", "CI/CD", "Git / GitHub", "Observability"],
  },

  {
    label: "Architecture & Security",
    tools: [
      "Clean Architecture",
      "System Design",
      "Authentication",
      "API Security",
      "OWASP",
      "Microservices",
    ],
  },

  {
    label: "Agentic AI",
    tools: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Tool Calling",
      "Agent Workflows",
      "LLM Orchestration",
      "Vector Search",
    ],
  },
];
