import { ArrowUpRight, BriefcaseBusiness, Dot } from "lucide-react";
import Footer from "../components/Footer";

type Experience = {
  duration: string;
  title: string;
  company: string;
  url: string | null;
  description: string;
  skills: string[];
  current?: boolean;
};

const experiences: Experience[] = [
  {
    duration: "OCT 2025 — PRESENT",
    title: "Software Developer",
    company: "Ennovate Lab",
    url: "https://www.ennovatelab.com/",
    description:
      "Designing and developing scalable full-stack applications with a focus on clean architecture and robust performance. I implement backend services, collaborate across teams, and contribute to technical excellence.",
    skills: [
      "React Native",
      "React",
      "Tailwind",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Golang",
      "Docker",
      "Azure",
    ],
    current: true,
  },
  {
    duration: "MAR 2022 — SEP 2025",
    title: "Software Developer",
    company: "Cephas Digital Technology",
    url: "https://www.cephasict.com/",
    description:
      "Spearheaded mobile applications with React Native, designed RESTful APIs and backend services, and worked closely with clients to turn real needs into useful products. I also led workshops for professionals and students.",
    skills: [
      "React Native",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloud",
      "REST APIs",
    ],
  },
  {
    duration: "NOV 2024 — JAN 2025",
    title: "Freelance Mobile App Developer",
    company: "Versecog Farm Enterprise",
    url: null,
    description:
      "Built mobile applications to support e-commerce operations and improve business processes, keeping the experience straightforward for the people using it every day.",
    skills: ["React Native", "React", "TypeScript", "Mobile Development"],
  },
  {
    duration: "AUG 2024 — NOV 2024",
    title: "Freelance Mobile Developer",
    company: "Compellers Digital",
    url: "https://www.instagram.com/compellers_digitals/",
    description:
      "Developed user-friendly food ordering app solutions and partnered with design teams to implement clean interfaces and improve application performance.",
    skills: ["React Native", "TypeScript", "Node.js"],
  },
];

const strengths = [
  [
    "01",
    "Product-minded",
    "I care about the reason behind the feature, not only the code that ships it.",
  ],
  [
    "02",
    "End to end",
    "From a thoughtful interface to dependable APIs, databases, and cloud infrastructure.",
  ],
  [
    "03",
    "Always learning",
    "I share what I know, learn from feedback, and keep looking for a better way to build.",
  ],
];

export default function ExperiencePage() {
  return (
    <>
      <main className="overflow-hidden bg-white text-[#383838]">
        <section className="border-b border-[#383838]/20 px-6 pb-20 pt-12 sm:px-10 lg:px-[4.7vw] lg:pb-32 lg:pt-24">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="mb-8 text-xs uppercase tracking-[.18em] text-[#777771]">
                A record of the work
              </p>
              <h1 className="max-w-5xl text-[clamp(4rem,11vw,11rem)] font-normal leading-[.82] tracking-[-.09em]">
                Experience
              </h1>
            </div>
            <BriefcaseBusiness
              className="mt-2 hidden text-[#ff542d] sm:block"
              size={58}
              strokeWidth={1.15}
            />
          </div>
          <p className="mt-14 max-w-2xl text-[clamp(1.25rem,2.2vw,2.15rem)] leading-[1.13] tracking-[-.045em]">
            A journey through building mobile and web products, collaborating
            with good people, and making complex technology feel simple.
          </p>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-[4.7vw] lg:py-32">
          <div className="mb-12 flex items-baseline justify-between border-b border-[#383838]/25 pb-5">
            <h2 className="text-sm uppercase tracking-[.16em]">
              Selected roles
            </h2>
            <span className="text-sm text-[#777771]">2022 — now</span>
          </div>
          <div className="relative">
            <div
              className="absolute bottom-0 left-[7px] top-0 w-px bg-[#383838]/20 sm:left-[calc(35%+1.25rem)]"
              aria-hidden="true"
            />
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.duration}`}
                className="relative grid gap-7 border-b border-[#383838]/20 pb-14 pl-10 pt-2 first:pt-0 sm:grid-cols-[minmax(170px,.35fr)_minmax(0,1fr)] sm:gap-12 sm:pl-0 sm:py-14"
              >
                <div className="sm:pt-1">
                  <div
                    className="absolute -left-[1px] top-2 h-4 w-4 rounded-full border-4 border-white bg-[#ff542d] sm:left-[calc(35%+0.78rem)] sm:top-[4.2rem]"
                    aria-hidden="true"
                  />
                  <p
                    className={`text-xs uppercase tracking-[.15em] ${experience.current ? "text-[#ff542d]" : "text-[#777771]"}`}
                  >
                    {experience.duration}
                  </p>
                  {experience.current && (
                    <p className="mt-3 text-xs uppercase tracking-[.12em] text-[#777771]">
                      Current position
                    </p>
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[clamp(1.8rem,3.4vw,3.4rem)] leading-none tracking-[-.065em]">
                        {experience.title}
                      </h3>
                      {experience.url ? (
                        <a
                          href={experience.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group mt-3 inline-flex items-center gap-1 text-lg underline decoration-[#ff542d] decoration-1 underline-offset-4 hover:text-[#ff542d]"
                        >
                          {experience.company}
                          <ArrowUpRight
                            size={17}
                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </a>
                      ) : (
                        <p className="mt-3 text-lg">{experience.company}</p>
                      )}
                    </div>
                    <span className="hidden text-[#ff542d] sm:block">
                      <Dot size={28} />
                    </span>
                  </div>
                  <p className="mt-8 max-w-3xl text-lg leading-[1.45] text-[#5d5d59] sm:text-xl">
                    {experience.description}
                  </p>
                  <div className="mt-7 flex max-w-3xl flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#383838]/25 px-3 py-1.5 text-xs uppercase tracking-[.08em] text-[#5d5d59]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f5f4f0] px-6 py-20 sm:px-10 lg:px-[4.7vw] lg:py-28">
          <p className="text-xs uppercase tracking-[.18em] text-[#777771]">
            How I work
          </p>
          <div className="mt-12 grid gap-px overflow-hidden border border-[#383838]/20 bg-[#383838]/20 md:grid-cols-3">
            {strengths.map(([number, title, text]) => (
              <div key={number} className="bg-[#f5f4f0] p-7 sm:p-10">
                <span className="text-5xl tracking-[-.08em] text-[#ff542d]">
                  {number}
                </span>
                <h2 className="mt-16 text-2xl tracking-[-.05em]">{title}</h2>
                <p className="mt-4 leading-relaxed text-[#5d5d59]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-24 text-center sm:px-10 lg:py-36">
          <p className="mb-5 text-sm uppercase tracking-[.16em]">
            Let&apos;s make something useful
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#f3ddd4] px-6 py-2 transition-transform duration-500 hover:scale-[1.02]"
          >
            <span className="text-[clamp(1.7rem,3vw,3.5rem)] tracking-[-.06em]">
              GET IN TOUCH
            </span>
            <ArrowUpRight
              className="text-[#ff542d] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
              size={34}
              strokeWidth={1.5}
            />
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
