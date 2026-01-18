import React from "react";

export default function About() {
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-lightest lg:sr-only">
                    About
                </h2>
            </div>

            <div className="space-y-4 text-slate leading-relaxed">
                <p>
                    I'm a frontend engineer with a specialty in web accessibility, focused on
                    building pixel-perfect, intuitive user interfaces. I enjoy working at the
                    intersection of design and engineering, where great user experience meets
                    robust, clean, and scalable code.
                </p>

                <p>
                    Currently, I'm a senior frontend engineer at{" "}
                    <a href="#" className="font-medium text-slate-lightest hover:text-teal transition-colors">
                        Klaviyo
                    </a>
                    , where I work on the component library team to help maintain and evolve our
                    design system. In this role, I lead accessibility efforts across components,
                    tooling, and patterns, partnering closely with designers and engineers to ensure
                    accessibility is part of our core architecture.
                </p>

                <p>
                    Previously, I've worked across a wide range of environments, from product
                    studios to startups and large tech companies, including{" "}
                    <a href="#" className="font-medium text-slate-lightest hover:text-teal transition-colors">
                        Apple
                    </a>
                    ,{" "}
                    <a href="#" className="font-medium text-slate-lightest hover:text-teal transition-colors">
                        Starry Internet
                    </a>
                    , and{" "}
                    <a href="#" className="font-medium text-slate-lightest hover:text-teal transition-colors">
                        Upstatement
                    </a>
                    . Alongside my professional work, I also created an{" "}
                    <a href="#" className="font-medium text-slate-lightest hover:text-teal transition-colors">
                        online video course
                    </a>{" "}
                    a few years ago which walks through building a real-world, API-driven
                    application from scratch. These experiences have shaped how I think about building
                    products that are both well-crafted and widely usable.
                </p>

                <p>
                    Outside of work, you can usually find me climbing, playing tennis, hanging out
                    with my wife and two cats, or running around Hyrule searching for{" "}
                    <a href="#" className="font-medium text-slate-lightest hover:text-teal transition-colors">
                        Korok seeds
                    </a>
                    .
                </p>
            </div>
        </section>
    );
}
