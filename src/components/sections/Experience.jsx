import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            duration: "OCT 2025 — PRESENT",
            title: "Software Developer",
            company: "Ennovate Lab",
            url: "https://www.ennovatelab.com/",
            description:
                "Designing and developing scalable full-stack applications with a focus on clean architecture and robust performance. Implementing backend services and collaborating with cross-functional teams to deliver high-quality solutions. Practicing software engineering best practices and contributing to technical excellence.",
            skills: ["React Native", "React", "Tailwind", "Node.js", "TypeScript", "PostgreSQL", "Golang", "Docker", "Azure"],
        },
        {
            duration: "MAR 2022 — SEP 2025",
            title: "Software Developer",
            company: "Cephas Digital Technology",
            url: "https://www.cephasict.com/",
            description:
                "Spearheaded the design and maintenance of various mobile applications utilizing React Native. Conducted workshops and training sessions for professionals and students. Designed and implemented RESTful APIs and backend services using Node.js, Express, MongoDB. Collaborated with clients to understand their needs, contributing to the design and development of tailored Mobile App solutions.",
            skills: ["React Native", "React", "Node.js", "Express", "MongoDB", "Cloud", "REST APIs"],
        },
        {
            duration: "NOV 2024 — JAN 2025",
            title: "Freelance Mobile App Developer",
            company: "Versecog Farm Enterprise",
            url: null,
            description:
                "Built mobile applications as a freelance developer to support e-commerce operations and improve business processes.",
            skills: ["React Native", "React", "Typescript", "Mobile Development"],
        },
        {
            duration: "AUG 2024 — NOV 2024",
            title: "Freelance Mobile Developer",
            company: "Compellers Digital",
            url: "https://www.instagram.com/compellers_digitals/",
            description:
                "Developed mobile applications as a freelance developer, delivering user-friendly food ordering app solutions for clients. Collaborated with design teams to implement clean interfaces and optimize app performance.",
            skills: ["React Native", "Typescript", "Node.js"],
        },
    ];

    return (
        <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-lightest lg:sr-only">
                    Experience
                </h2>
            </div>

            <div>
                <ol className="group/list">
                    {experiences.map((exp, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-10 md:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2 whitespace-nowrap pr-6 mr-4">
                                    {exp.duration}
                                </header>

                                <div className="z-10 sm:col-span-6">
                                    <h3 className="font-medium leading-snug text-slate-lightest">
                                        <a
                                            href={exp.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-lightest hover:text-teal focus-visible:text-teal"
                                        >
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>
                                                {exp.title} · {exp.company}
                                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
                                            </span>
                                        </a>
                                    </h3>

                                    <p className="mt-2 text-sm leading-normal text-slate">
                                        {exp.description}
                                    </p>

                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {exp.skills.map((skill) => (
                                            <li key={skill} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium leading-5 text-teal">
                                                    {skill}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="mt-12">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center font-medium leading-tight text-slate-lightest"
                    >
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal motion-reduce:transition-none">
                            View Full Résumé
                        </span>
                        <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                    </a>
                </div>
            </div>
        </section>
    );
}
