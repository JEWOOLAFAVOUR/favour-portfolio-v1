import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center md:ml-64 px-6 md:px-12 py-20"
        >
            <div className="max-w-2xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-lightest mb-6">
                    Get In Touch
                </h2>

                <p className="text-xl text-slate mb-12 leading-relaxed">
                    I'm always interested in hearing about new opportunities and collaborating on exciting projects.
                    Feel free to reach out if you'd like to connect!
                </p>

                <a
                    href="mailto:hello@favour.dev"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-navy rounded font-bold hover:opacity-80 transition-all"
                >
                    <Mail size={20} />
                    Send me an email
                </a>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-12">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-slate-light rounded-full hover:border-teal text-slate hover:text-teal transition-all"
                        title="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-slate-light rounded-full hover:border-teal text-slate hover:text-teal transition-all"
                        title="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-slate-light rounded-full hover:border-teal text-slate hover:text-teal transition-all"
                        title="Twitter"
                    >
                        <Twitter size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
}
