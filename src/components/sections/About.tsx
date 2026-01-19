import React from "react";

export default function About(): JSX.Element {
  const skills: string[] = [
    "React Native",
    "React",
    "JavaScript",
    "TypeScript",
    "Redux/Redux Toolkit/Zustand",
    "TanStack",
    "Node.js",
    "Golang",
    "Firebase/Supabase",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "Docker",
    "Linux",
    "AWS",
    "Azure",
    "DevOps",
    "Git",
    "Microservices",
    // "System Design",
  ];

  return (
    <section
      id="about"
      className="mb-12 scroll-mt-16 md:mb-16 lg:mb-20 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-lightest lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-4 text-slate leading-relaxed">
        <p>
          Hi! I'm Favour, a Full-Stack Software Developer who enjoys building
          meaningful digital experiences. I currently work at{" "}
          <a
            href="https://www.ennovatelab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-lightest hover:text-teal transition-colors"
          >
            Ennovate Lab
          </a>
          , where I design and build end-to-end mobile and web applications,
          focusing on clean architecture, reliable backend systems, and smooth
          user experiences.
        </p>

        <p>
          I'm also the creator of{" "}
          <a
            href="https://www.studypady.com.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-lightest hover:text-teal transition-colors"
          >
            Studypadi
          </a>{" "}
          (formerly LauHub), a growing education software helping over 2000+
          students access free CBTs and past questions.
        </p>

        <p>
          Outside of code, I love mentoring junior devs and I'm a Computer
          Science graduate from{" "}
          <a
            href="https://www.lautech.edu.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-lightest hover:text-teal transition-colors"
          >
            LAUTECH
          </a>
          . You'll also find me serving in my student church, organizing
          resources as a Library Unit Member.
        </p>

        <p className="text-sm text-slate-light">
          Here are a few technologies I've been working with recently:
        </p>

        <ul className="grid grid-cols-3 gap-x-4 gap-y-2 text-sm">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center gap-2">
              <span className="text-teal">▹</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
