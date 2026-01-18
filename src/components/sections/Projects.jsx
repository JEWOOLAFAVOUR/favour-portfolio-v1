import React from "react";
import { ArrowUpRight, Star } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Build a Spotify Connected App",
            description:
                "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
            url: "https://www.newline.co/courses/build-a-spotify-connected-app",
            skills: ["React", "Express", "Spotify API", "Heroku"],
            stars: null,
            image: null,
        },
        {
            title: "Spotify Profile",
            description:
                "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
            url: "https://spotify-profile.herokuapp.com/",
            skills: ["React", "Express", "Spotify API", "Heroku"],
            stars: 706,
            image: null,
        },
        {
            title: "Halcyon Theme",
            description:
                "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
            url: "https://halcyon-theme.netlify.app/",
            skills: ["VS Code", "Sublime Text", "Atom", "iTerm2"],
            stars: null,
            image: null,
        },
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
                                    <div className="aspect-video rounded border-2 border-navy-light bg-navy-light/50"></div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-12">
                    <a
                        href="/archive"
                        className="group inline-flex items-center font-medium leading-tight text-slate-lightest"
                    >
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal motion-reduce:transition-none">
                            View Full Project Archive
                        </span>
                        <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                    </a>
                </div>
            </div>
        </section>
    );
}
