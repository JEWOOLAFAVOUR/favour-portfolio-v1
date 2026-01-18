import React from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
    const navigate = useNavigate();
    const projects = [
        {
            title: "StudyPadi",
            description:
                "An educational platform that provides students with free CBT practice, past questions, and performance tracking tools. Helping over 1000+ students access quality education resources.",
            url: "https://www.studypady.com.ng/",
            image: "/studypady_screenshot.png",
            skills: ["React", "Shadcn", "Tailwind CSS", "Vercel"],
            stars: null,
            featured: true,
        },
        {
            title: "HonourWorld",
            description:
                "A client project at Cephas ICT Hub offering VTU services with 10k+ downloads on the Play Store.",
            url: "#",
            image: "/honour_world_screenshot.png",
            skills: ["React Native", "TanStack", "Redux", "API Integration"],
            stars: null,
            featured: true,
        },
        {
            title: "VickyBest Telecom",
            description:
                "A client project at Cephas ICT Hub offering VTU services with 1k+ downloads.",
            url: "#",
            image: "/vicky_best_screenshot.png",
            skills: ["React Native", "TanStack", "Redux", "API Integration"],
            stars: null,
            featured: true,
        },
        {
            title: "JTB Website",
            description:
                "A comprehensive website developed for a state government, featuring modern design and user-friendly interface.",
            url: "#",
            image: "/jtb_screenshot.png",
            skills: ["React", "Supabase", "Tailwind CSS", "Vercel"],
            stars: null,
            featured: true,
        },
        {
            title: "Skill Remit",
            description:
                "Freelancer-focused mobile app for Ghana and Nigeria markets.",
            url: "#",
            image: "/skill_remit_screenshot.png",
            skills: ["React Native", "Redux", "Node.js"],
            stars: null,
            featured: true,
        },
        // {
        //     title: "CAC Chapel LAUTECH",
        //     description:
        //         "A church website with features for sermons, events, and community engagement.",
        //     url: "#",
        //     skills: ["React", "Tailwind CSS", "Vercel"],
        //     stars: null,
        //     featured: false,
        // },
    ];

    return (
        <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-lightest lg:sr-only">
                    Projects
                </h2>
            </div>

            <div>
                <ul className="group/list">
                    {projects.map((project, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-lightest hover:text-teal focus-visible:text-teal"
                                        >
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>
                                                {project.title}
                                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
                                            </span>
                                        </a>
                                    </h3>

                                    <p className="mt-2 text-sm leading-normal text-slate">
                                        {project.description}
                                    </p>

                                    {project.stars && (
                                        <a
                                            href={project.url}
                                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate hover:text-teal"
                                        >
                                            <Star className="mr-1 h-3 w-3" />
                                            <span>{project.stars}</span>
                                        </a>
                                    )}

                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {project.skills.map((skill) => (
                                            <li key={skill} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium leading-5 text-teal">
                                                    {skill}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="sm:order-1 sm:col-span-2">
                                    <div className="aspect-video rounded border-2 border-navy-light bg-navy-light/50 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-12">
                    <button
                        onClick={() => navigate("/archive")}
                        className="group inline-flex items-center font-medium leading-tight text-slate-lightest hover:text-teal transition-colors cursor-pointer bg-none border-none p-0"
                    >
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal motion-reduce:transition-none">
                            View Full Project Archive
                        </span>
                        <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                    </button>
                </div>
            </div>
        </section>
    );
}
