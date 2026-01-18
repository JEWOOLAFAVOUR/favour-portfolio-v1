import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center md:ml-64 px-6 md:px-12 pt-20 md:pt-0">
            <div className="max-w-2xl">
                <p className="text-teal font-mono text-sm mb-4">
                    Hi, my name is
                </p>

                <h1 className="text-5xl md:text-7xl font-bold text-slate-lightest mb-4 leading-tight">
                    Favour Jewoola.
                </h1>

                <h2 className="text-4xl md:text-5xl font-bold text-slate mb-6 leading-tight">
                    I build beautiful digital experiences.
                </h2>

                <p className="text-lg text-slate mb-8 leading-relaxed max-w-xl">
                    I'm a passionate developer with expertise in building modern web applications.
                    Currently focused on creating intuitive, accessible, and performant digital experiences.
                </p>

                <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-teal text-teal rounded hover:bg-teal/10 transition-all font-medium"
                >
                    Check out my work
                    <ArrowRight size={20} />
                </a>
            </div>
        </section>
    );
}
