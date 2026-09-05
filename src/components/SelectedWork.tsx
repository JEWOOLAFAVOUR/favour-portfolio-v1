import { useState } from "react";
import { archiveProjects, projects } from "../data/content";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./icons";

const INITIAL_COUNT = 4;

export default function SelectedWork(): JSX.Element {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="work" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-12 md:px-8 md:py-14">
      <Reveal>
        <h2 className="text-lg font-medium text-cream">Selected Works</h2>
      </Reveal>

      <div className="mt-7 grid gap-x-8 gap-y-10 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 80}>
            <a href={project.url} target="_blank" rel="noreferrer" className="group flex h-full flex-col">
              <div className="overflow-hidden rounded-2xl bg-ink-card ring-1 ring-line transition duration-300 group-hover:ring-line-strong">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3 flex w-full items-start justify-between gap-4">
                <h3 className="text-base font-normal text-cream">{project.title}</h3>
                <ArrowUpRight className="arrow-slide mt-0.5 h-4 w-4 shrink-0 text-neutral-300 transition group-hover:text-cream" />
              </div>
              <p className="mt-1 text-sm leading-relaxed text-neutral-400">{project.blurb}</p>
            </a>
          </Reveal>
        ))}
      </div>

      {!showAll && (
        <Reveal>
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="btn-light rounded-full px-6 py-2.5 text-sm font-medium"
            >
              Load more
            </button>
          </div>
        </Reveal>
      )}

      {showAll && (
        <Reveal>
          <h3 className="mt-16 text-sm font-medium uppercase tracking-wide text-neutral-400">Archive</h3>
          <div className="mt-4">
            {archiveProjects.map((project) => {
              const row = (
                <>
                  <div>
                    <p className="text-sm text-cream">
                      {project.title}
                      <span className="ml-2 text-xs text-neutral-500">{project.madeAt}</span>
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-500">{project.builtWith.join(", ")}</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-3 text-xs text-neutral-500">
                    {project.year}
                    {project.link && (
                      <ArrowUpRight className="arrow-slide h-3.5 w-3.5 text-neutral-400" />
                    )}
                  </span>
                </>
              );

              return project.link ? (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group -mx-3 flex items-center justify-between gap-6 rounded-xl px-3 py-3.5 transition hover:bg-line"
                >
                  {row}
                </a>
              ) : (
                <div key={project.title} className="-mx-3 flex items-center justify-between gap-6 rounded-xl px-3 py-3.5">
                  {row}
                </div>
              );
            })}
          </div>
        </Reveal>
      )}
    </section>
  );
}
