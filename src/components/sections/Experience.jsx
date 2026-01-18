import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            duration: "2024 — PRESENT",
            title: "Senior Frontend Engineer, Accessibility",
            company: "Klaviyo",
            url: "https://www.klaviyo.com/",
            description:
                "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
            skills: ["JavaScript", "TypeScript", "React", "Storybook"],
        },
        {
            duration: "2018 — 2024",
            title: "Lead Engineer",
            company: "Upstatement",
            url: "https://upstatement.com/",
            description:
                "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
            skills: ["JavaScript", "TypeScript", "HTML & SCSS", "React", "Next.js", "React Native", "WordPress", "Node.js"],
        },
        {
            duration: "JULY — DEC 2017",
            title: "UI Engineer Co-op",
            company: "Apple",
            url: "https://www.apple.com/apple-music/",
            description:
                "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
            skills: ["Ember", "SCSS", "JavaScript", "MusicKit.js"],
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
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2">
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
