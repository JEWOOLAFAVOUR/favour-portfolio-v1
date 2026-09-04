export const profile = {
  name: "Jewoola Favour",
  firstName: "Favour",
  role: "Full-Stack Software Developer",
  avatar: "/profile_pic.jpg",
  email: "jewoolafavour2020@gmail.com",
  resume: "/Jewoola Favour Resume.pdf",
};

export const bio = [
  "I'm a Full-Stack Software Developer at Ennovate Lab, designing and building end-to-end mobile and web applications that people rely on every day.",
  "I'm the creator of StudyPadi, a growing education platform helping over 2000+ students access free CBTs and past questions.",
];

export const socials = [
  { label: "GitHub", short: "Gh", href: "https://github.com/JEWOOLAFAVOUR", color: "#e5e5e5", fg: "#171717" },
  { label: "LinkedIn", short: "in", href: "https://www.linkedin.com/in/jewoola-favour-5b7607217", color: "#3b82f6", fg: "#ffffff" },
  { label: "X", short: "𝕏", href: "https://x.com/favourlop", color: "#ef4444", fg: "#ffffff" },
  { label: "Instagram", short: "Ig", href: "https://www.instagram.com/jewoolafavourgbemi", color: "#a855f7", fg: "#ffffff" },
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
    title: "Oreno",
    blurb: "Your daily standup companion — track progress, manage tasks, walk in prepared.",
    url: "https://oreno.vercel.app/",
    image: "/oreno_screenshot.app.jpeg",
    large: true,
  },
  {
    title: "StudyPadi",
    blurb: "Free CBT practice and past questions for 2000+ students.",
    url: "https://study-pady-website.vercel.app/",
    image: "/studypady_screenshot.png",
    large: true,
  },
  {
    title: "HonourWorld",
    blurb: "VTU services app with 10k+ downloads on the Play Store.",
    url: "https://play.google.com/store/apps/details?id=com.ng.honourworld",
    image: "/honour_world_screenshot.png",
  },
  {
    title: "Skill Remit",
    blurb: "Freelancer-focused mobile app for Ghana and Nigeria markets.",
    url: "https://play.google.com/store/apps/details?id=com.skillremitartisan",
    image: "/skill_remit_screenshot.png",
  },
  {
    title: "Irisi Fashion",
    blurb: "A modern fashion brand website with a seamless shopping experience.",
    url: "https://irisi-fashion.vercel.app/",
    image: "/irisi_fashion_screenshot.png",
  },
  {
    title: "VickyBest Telecom",
    blurb: "VTU services app with 1k+ downloads, built at Cephas ICT Hub.",
    url: "https://play.google.com/store/apps/details?id=com.vickybest",
    image: "/vicky_best_screenshot.png",
  },
  {
    title: "JTB Website",
    blurb: "A comprehensive website developed for a state government.",
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
  { year: "2026", title: "Loop Chat", madeAt: "Personal", builtWith: ["React", "Node.js", "Socket.io", "Express", "MongoDB", "JWT"], link: "https://github.com/JEWOOLAFAVOUR/Loop-Chat" },
  { year: "2026", title: "Gilgal Tech", madeAt: "Personal", builtWith: ["React", "Node.js", "Docker", "Azure", "PostgreSQL", "CI/CD"], link: "http://gilgal.tech/" },
  { year: "2026", title: "Iwadii Lab", madeAt: "Personal", builtWith: ["React", "Tailwind CSS", "Vercel"], link: "https://iwadii-lab.vercel.app/" },
  { year: "2025", title: "Ennovate Lab Projects", madeAt: "Ennovate Lab", builtWith: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"], link: "https://www.ennovatelab.com/" },
  { year: "2025", title: "CAC Chapel LAUTECH Website", madeAt: "Personal", builtWith: ["React", "Tailwind CSS", "Vercel"], link: null },
  { year: "2024", title: "Versecog Farm Mobile App", madeAt: "Freelance", builtWith: ["React Native", "JavaScript", "Mobile Development"], link: null },
  { year: "2024", title: "Compellers Digital Mobile App", madeAt: "Freelance", builtWith: ["React Native", "JavaScript", "Firebase"], link: "https://www.instagram.com/compellers_digitals/" },
  { year: "2022", title: "Mobile App Development Projects", madeAt: "Cephas Digital Technology", builtWith: ["React Native", "Node.js", "Express", "MongoDB"], link: "https://www.cephasict.com/" },
];

export const experiences: Experience[] = [
  { period: "October 2025 — Present", company: "Ennovate Lab", title: "Software Developer", url: "https://www.ennovatelab.com/" },
  { period: "March 2022 — September 2025", company: "Cephas Digital Technology", title: "Software Developer", url: "https://www.cephasict.com/" },
  { period: "November 2024 — January 2025", company: "Versecog Farm Enterprise", title: "Freelance Mobile App Developer", url: null },
  { period: "August 2024 — November 2024", company: "Compellers Digital", title: "Freelance Mobile Developer", url: "https://www.instagram.com/compellers_digitals/" },
];

export const aboutParagraphs = [
  "I like software that feels intentional — clean interfaces, tiny details people almost miss, and architecture that holds up when the product grows.",
  "Outside building products, I spend my time mentoring junior developers, serving in student church, and organizing resources as a Library Unit Member.",
  "I also enjoy exploring new tools and pushing side ideas further just to see how small details can completely change an experience.",
];

export const skillGroups = [
  {
    label: "Frontend & Mobile",
    tools: ["React", "React Native", "Next.js", "TypeScript", "JavaScript", "Redux / Zustand", "TanStack", "Tailwind CSS"],
  },
  {
    label: "Backend & Data",
    tools: ["Node.js", "Golang", "Express", "PostgreSQL", "MongoDB", "Firebase / Supabase", "REST APIs", "Microservices"],
  },
  {
    label: "Cloud & DevOps",
    tools: ["AWS", "Azure", "Docker", "Linux", "Git", "CI/CD", "DevOps"],
  },
];
