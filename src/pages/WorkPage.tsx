import { ArrowUpRight, ExternalLink } from "lucide-react";
import Footer from "../components/Footer";

type ArchiveProject = {
  title: string;
  madeAt: string;
  builtWith: string[];
  link: string | null;
  linkText?: string;
  platform: "web" | "mobile";
};

const archive: Record<string, ArchiveProject[]> = {
  "2026": [
    {
      title: "Oreno",
      madeAt: "Personal",
      builtWith: ["Next.js", "Redis", "Pusher", "PostgreSQL", "Prisma"],
      link: "https://oreno.vercel.app/",
      linkText: "oreno.vercel.app",
      platform: "web",
    },
    {
      title: "Loop Chat",
      madeAt: "Personal",
      builtWith: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "https://github.com/JEWOOLAFAVOUR/Loop-Chat",
      linkText: "GitHub",
      platform: "web",
    },
    {
      title: "Gilgal Tech",
      madeAt: "Personal",
      builtWith: ["React", "Node.js", "Docker", "Azure", "PostgreSQL"],
      link: "http://gilgal.tech/",
      linkText: "gilgal.tech",
      platform: "web",
    },
    {
      title: "Irisi Fashion",
      madeAt: "Personal",
      builtWith: ["React", "Tailwind CSS", "Vercel"],
      link: "https://irisi-fashion.vercel.app/",
      linkText: "irisi-fashion.vercel.app",
      platform: "web",
    },
    {
      title: "Iwadii Lab",
      madeAt: "Personal",
      builtWith: ["React", "Tailwind CSS", "Vercel"],
      link: "https://iwadii-lab.vercel.app/",
      linkText: "iwadii-lab.vercel.app",
      platform: "web",
    },
  ],
  "2025": [
    {
      title: "StudyPady",
      madeAt: "Personal",
      builtWith: ["React", "Shadcn", "Tailwind CSS", "Vercel"],
      link: "https://www.studypady.com.ng/",
      linkText: "studypady.com.ng",
      platform: "web",
    },
    {
      title: "Ennovate Lab Projects",
      madeAt: "Ennovate Lab",
      builtWith: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      link: "https://www.ennovatelab.com/",
      linkText: "ennovatelab.com",
      platform: "web",
    },
    {
      title: "JTB Website",
      madeAt: "Cephas ICT Hub",
      builtWith: ["React", "Supabase", "Tailwind CSS", "Vercel"],
      link: "https://jtb-website-01.gilgal.tech/",
      linkText: "jtb-website-01.gilgal.tech",
      platform: "web",
    },
    {
      title: "CAC Chapel LAUTECH Website",
      madeAt: "Personal",
      builtWith: ["React", "Tailwind CSS", "Vercel"],
      link: null,
      platform: "web",
    },
  ],
  "2024": [
    {
      title: "HonourWorld",
      madeAt: "Cephas ICT Hub",
      builtWith: ["React Native", "TanStack", "Redux", "API Integration"],
      link: "https://play.google.com/store/apps/details?id=com.ng.honourworld",
      linkText: "Google Play",
      platform: "mobile",
    },
    {
      title: "VickyBest Telecom",
      madeAt: "Cephas ICT Hub",
      builtWith: ["React Native", "TanStack", "Redux", "API Integration"],
      link: "https://play.google.com/store/apps/details?id=com.vickybest",
      linkText: "Google Play",
      platform: "mobile",
    },
    {
      title: "Versecog Farm Mobile App",
      madeAt: "Freelance",
      builtWith: ["React Native", "JavaScript", "Mobile Development"],
      link: null,
      platform: "mobile",
    },
    {
      title: "Compellers Digital Mobile App",
      madeAt: "Freelance",
      builtWith: ["React Native", "JavaScript", "Firebase"],
      link: "https://www.instagram.com/compellers_digitals/",
      linkText: "Instagram",
      platform: "mobile",
    },
    {
      title: "Skill Remit",
      madeAt: "Cephas ICT Hub",
      builtWith: ["React Native", "Redux", "Node.js"],
      link: "https://play.google.com/store/apps/details?id=com.skillremitartisan",
      linkText: "Google Play",
      platform: "mobile",
    },
  ],
  "2022": [
    {
      title: "Mobile App Development Projects",
      madeAt: "Cephas Digital Technology",
      builtWith: ["React Native", "Node.js", "Express", "MongoDB"],
      link: "https://www.cephasict.com/",
      linkText: "cephasict.com",
      platform: "mobile",
    },
  ],
};

function ProjectRow({ project }: { project: ArchiveProject }) {
  const content = (
    <>
      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[.12em] text-[#5d5d59] sm:text-sm">
        <span className="rounded-full border border-[#383838]/55 px-3 py-1">
          {project.madeAt}
        </span>
        <span className="rounded-full border border-[#383838]/55 px-3 py-1">
          {project.platform}
        </span>
        <span className="rounded-full border border-[#383838]/55 px-3 py-1">
          {project.builtWith[0]}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-5">
        <div>
          <h3 className="text-[clamp(1.5rem,2.7vw,2.6rem)] font-normal leading-none tracking-[-.055em]">
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-[#6c6c67]">
            {project.builtWith.join(" · ")}
          </p>
        </div>
        {project.link && (
          <ExternalLink
            className="mt-1 shrink-0 text-[#ff542d]"
            size={22}
            strokeWidth={1.7}
          />
        )}
      </div>
    </>
  );
  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group block border-t border-dashed border-[#383838]/20 py-8 transition-colors hover:bg-[#f3ddd4] sm:py-10"
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
      <main className="min-h-screen bg-[#f5f4f0] px-6 pb-24 pt-12 text-[#383838] sm:px-10 lg:px-[4.7vw] lg:pt-20">
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
