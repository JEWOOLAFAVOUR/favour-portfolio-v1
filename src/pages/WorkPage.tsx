import { ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";

type ArchiveProject = {
  title: string;
  description: string;
  madeAt: string;
  builtWith: string[];
  link: string | null;
  linkText?: string;
  platform: "web" | "mobile";
  image?: string;
};

const archive: Record<string, ArchiveProject[]> = {
  "2026": [
    {
      title: "Irisi Fashion",
      description:
        "A contemporary fashion storefront designed to present collections through a polished and responsive shopping experience.",
      madeAt: "Personal",
      builtWith: ["Next", "Tailwind CSS", "Vercel"],
      link: "https://irisi-fashion.vercel.app/",
      linkText: "irisi-fashion.vercel.app",
      platform: "web",
    },
    {
      title: "Kingdom Impact",
      description:
        "An animated organization website created to communicate its mission, programs, and community impact.",
      madeAt: "Organization",
      builtWith: ["Next", "Tailwind CSS", "Vercel", "GSAP"],
      link: "https://kingdom-impact.vercel.app/",
      linkText: "kingdom-impact.vercel.app",
      platform: "web",
    },
    {
      title: "Iwadii Lab",
      description:
        "A modern digital studio website built to showcase creative services, capabilities, and selected work.",
      madeAt: "Personal",
      builtWith: ["Next", "Tailwind CSS", "Vercel"],
      link: "https://iwadii-lab.vercel.app/",
      linkText: "iwadii-lab.vercel.app",
      platform: "web",
    },
    {
      title: "Oreno",
      description:
        "A real-time web platform combining live updates with a scalable, database-backed application architecture.",
      madeAt: "Personal",
      builtWith: ["Next.js", "Redis", "Pusher", "PostgreSQL", "Prisma"],
      link: "https://oreno.vercel.app/",
      linkText: "oreno.vercel.app",
      platform: "web",
    },
    {
      title: "Loop Chat",
      description:
        "A real-time messaging application that enables fast, seamless conversations through persistent socket connections.",
      madeAt: "Personal",
      builtWith: ["React Native", "Node.js", "Socket.io", "MongoDB"],
      link: "https://github.com/JEWOOLAFAVOUR/Loop-Chat",
      linkText: "GitHub",
      platform: "web",
    },
    {
      title: "Gilgal Tech",
      description:
        "A full-stack technology platform deployed with containerized services and cloud-based infrastructure.",
      madeAt: "Personal",
      builtWith: ["React", "Node.js", "Docker", "Azure", "PostgreSQL"],
      link: "http://gilgal.tech/",
      linkText: "gilgal.tech",
      platform: "web",
    },
  ],
  "2025": [
    {
      title: "StudyPady",
      description:
        "A student-focused learning platform that makes academic resources and study support easier to access.",
      madeAt: "Personal",
      builtWith: ["React", "Shadcn", "Tailwind CSS", "Vercel"],
      link: "https://www.studypady.com.ng/",
      linkText: "studypady.com.ng",
      platform: "web",
      image: "/studypady_screenshot.png",
    },
    {
      title: "Ennovate Lab Projects",
      description:
        "A collection of production applications delivered within a collaborative product and engineering environment.",
      madeAt: "Ennovate Lab",
      builtWith: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      link: "https://www.ennovatelab.com/",
      linkText: "ennovatelab.com",
      platform: "web",
    },
    {
      title: "JTB Website",
      description:
        "A responsive institutional website developed to present services and information through a clear digital experience.",
      madeAt: "Cephas ICT Hub",
      builtWith: ["React", "Supabase", "Tailwind CSS", "Vercel"],
      link: "https://jtb-website-01.gilgal.tech/",
      linkText: "jtb-website-01.gilgal.tech",
      platform: "web",
      image: "/jtb_screenshot.png",
    },
    {
      title: "CAC Chapel LAUTECH Website",
      description:
        "A community website created to share church information, activities, and updates with students and members.",
      madeAt: "Personal",
      builtWith: ["React", "Tailwind CSS", "Vercel"],
      link: null,
      platform: "web",
    },
  ],
  "2024": [
    {
      title: "HonourWorld",
      description:
        "A cross-platform mobile application that delivers a smooth, state-managed experience for users on the go.",
      madeAt: "Cephas ICT Hub",
      builtWith: ["React Native", "TanStack", "Redux", "API Integration"],
      link: "https://play.google.com/store/apps/details?id=com.ng.honourworld",
      linkText: "Google Play",
      platform: "mobile",
      image: "/honour_world_screenshot.png",
    },
    {
      title: "VickyBest Telecom",
      description:
        "A mobile telecom application designed to make digital service purchases simple, quick, and accessible.",
      madeAt: "Cephas ICT Hub",
      builtWith: ["React Native", "TanStack", "Redux", "API Integration"],
      link: "https://play.google.com/store/apps/details?id=com.vickybest",
      linkText: "Google Play",
      platform: "mobile",
      image: "/vicky_best_screenshot.png",
    },
    {
      title: "Versecog Farm Mobile App",
      description:
        "A mobile solution developed to support farm operations and make essential agricultural workflows easier to manage.",
      madeAt: "Freelance",
      builtWith: ["React Native", "JavaScript", "Mobile Development"],
      link: null,
      platform: "mobile",
    },
    {
      title: "Compellers Digital Mobile App",
      description:
        "A Firebase-powered mobile application built to connect users with the brand's digital services and content.",
      madeAt: "Freelance",
      builtWith: ["React Native", "JavaScript", "Firebase"],
      link: "https://www.instagram.com/compellers_digitals/",
      linkText: "Instagram",
      platform: "mobile",
    },
    {
      title: "Skill Remit",
      description:
        "A service marketplace mobile app that helps users discover and connect with skilled artisans.",
      madeAt: "Cephas ICT Hub",
      builtWith: ["React Native", "Redux", "Node.js"],
      link: "https://play.google.com/store/apps/details?id=com.skillremitartisan",
      linkText: "Google Play",
      platform: "mobile",
      image: "/skill_remit_screenshot.png",
    },
  ],
  "2022": [
    {
      title: "Mobile App Development Projects",
      description:
        "A collection of full-stack mobile products developed with reusable interfaces and API-driven backend services.",
      madeAt: "Cephas Digital Technology",
      builtWith: ["React Native", "Node.js", "Express", "MongoDB"],
      link: "https://www.cephasict.com/",
      linkText: "cephasict.com",
      platform: "mobile",
    },
  ],
};

const defaultProjectImage = "/studypady_screenshot.png";

function ProjectRow({ project }: { project: ArchiveProject }) {
  const content = (
    <>
      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[.12em] text-[#5d5d59] sm:text-sm">
        {/* <span className="rounded-full border border-[#383838]/55 px-3 py-1">
          {project.madeAt}
        </span> */}
        <span className="rounded-full border border-[#383838]/55 px-3 py-1">
          {project.platform}
        </span>
        <span className="rounded-full border border-[#383838]/55 px-3 py-1">
          {project.builtWith[0]}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-5">
        <div className="min-w-0">
          <h3 className="text-[clamp(1.5rem,2.7vw,2.6rem)] font-normal leading-none tracking-[-.055em]">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#555550]">
            {project.description}
          </p>
          <p className="mt-3 text-sm text-[#777771]">
            {project.builtWith.join(" · ")}
          </p>
        </div>
        <div className="flex shrink-0 items-start gap-6 lg:gap-8">
          <div className="hidden h-32 w-44 overflow-hidden rounded-xl border border-[#383838]/15 bg-[#e8e6df] sm:block lg:h-40 lg:w-56">
            <img
              src={project.image ?? defaultProjectImage}
              alt={`${project.title} preview`}
              className="block h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          {project.link && (
            <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border border-[#ff542d]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <ArrowUpRight
                aria-hidden="true"
                className="archive-item-arrow text-[#ff542d]"
                size={24}
                strokeWidth={1.6}
              />
            </span>
          )}
        </div>
      </div>
    </>
  );
  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group block border-t border-dashed border-[#383838]/20 py-8 sm:py-10"
    >
      {content}
    </a>
  ) : (
    <div className="block border-t border-dashed border-[#383838]/20 py-8 sm:py-10">
      {content}
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <main className="min-h-screen bg-white px-6 pb-24 pt-12 text-[#383838] sm:px-10 lg:px-[4.7vw] lg:pt-20">
        <section className="border-t border-[#383838]/25 pt-14 sm:pt-20 lg:pt-28">
          <div className="flex items-end justify-between gap-8">
            <h1 className="max-w-5xl text-[clamp(3rem,8vw,8.5rem)] font-normal leading-[.88] tracking-[-.075em]">
              Selected work
            </h1>
            <ArrowUpRight
              className="mb-2 hidden text-[#ff542d] sm:block"
              size={64}
              strokeWidth={1.2}
            />
          </div>
          <p className="mt-10 max-w-2xl text-[clamp(1.2rem,2vw,2rem)] leading-[1.15] tracking-[-.04em]">
            A growing archive of products, experiments, and client work built
            across web and mobile.
          </p>
        </section>

        <section className="mt-28 lg:mt-44">
          {Object.entries(archive)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, projects]) => (
              <div
                key={year}
                className="grid gap-10 border-t border-[#383838]/25 py-10 lg:grid-cols-[minmax(190px,.3fr)_minmax(0,1fr)] lg:gap-16 lg:py-0"
              >
                <div className="lg:sticky lg:top-24 lg:h-fit lg:py-10">
                  <span className="text-[clamp(4.5rem,10vw,9rem)] font-light leading-none tracking-[-.1em]">
                    {year}
                  </span>

                  <p className="mt-3 text-xs uppercase tracking-[.16em] text-[#777771]">
                    {projects.length}{" "}
                    {projects.length === 1 ? "project" : "projects"}
                  </p>
                </div>

                <div>
                  {projects.map((project) => (
                    <ProjectRow key={project.title} project={project} />
                  ))}
                </div>
              </div>
            ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
