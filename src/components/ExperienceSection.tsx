import { experiences } from "../data/content";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./icons";

export default function ExperienceSection(): JSX.Element {
  return (
    <section id="experience" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-16 md:px-8 md:py-20">
      <Reveal>
        <h2 className="text-lg font-semibold text-cream">Work Experience</h2>
      </Reveal>

      <div className="mt-10">
        {experiences.map((experience, index) => {
          const content = (
            <div>
              <p className="text-sm text-neutral-400">{experience.period}</p>
              <p className="mt-1 text-base text-cream">
                {experience.company}
                <span className="ml-3 text-sm text-neutral-500">{experience.title}</span>
              </p>
            </div>
          );
          const arrow = (
            <ArrowUpRight className="arrow-slide h-4 w-4 shrink-0 text-neutral-300 transition group-hover:text-white" />
          );

          return (
            <Reveal key={experience.company} delay={index * 80}>
              {experience.url ? (
                <a
                  href={experience.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group -mx-4 flex items-start justify-between gap-6 rounded-2xl px-4 py-6 transition hover:bg-white/[0.03]"
                >
                  {content}
                  {arrow}
                </a>
              ) : (
                <div className="group -mx-4 flex items-start justify-between gap-6 rounded-2xl px-4 py-6">
                  {content}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
