import { bio, profile, socials } from "../data/content";
import Reveal from "./Reveal";
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "./icons";

const socialIcons: Record<string, (className?: string) => JSX.Element> = {
  GitHub: (c) => <GithubIcon className={c} />,
  LinkedIn: (c) => <LinkedinIcon className={c} />,
  X: (c) => <XIcon className={c} />,
  Instagram: (c) => <InstagramIcon className={c} />,
};

export default function Hero(): JSX.Element {
  return (
    <header className="pt-16">
      {/* Auto-scrolling strip of work — temporarily disabled, kept for reference.
      <div className="overflow-hidden py-6">
        <div className="marquee-track gap-5 pr-5">
          {[...projects, ...projects].map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className={`h-56 shrink-0 overflow-hidden rounded-xl bg-ink-card md:h-72 ${marqueeWidths[index % marqueeWidths.length]}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-top"
                loading={index < projects.length ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
      */}

      <div className="mx-auto max-w-3xl px-6 pt-2 md:px-8 md:pt-4">
        <Reveal>
          <div className="flex items-center gap-4">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-14 w-14 rounded-full object-cover ring-1 ring-line"
            />
            <div>
              <h1 className="text-xl font-medium uppercase tracking-wide text-cream md:text-2xl">
                {profile.name}
              </h1>
              <p className="mt-0.5 text-sm text-neutral-400">{profile.role}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 space-y-4 text-base font-light leading-relaxed text-neutral-300">
          {bio.map((paragraph, index) => (
            <Reveal key={index} delay={index * 90}>
              <p>
                {index === 0 ? (
                  <>
                    {paragraph.split("Ennovate Lab")[0]}
                    <a
                      href="https://www.ennovatelab.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-neutral-500 underline-offset-4 transition hover:decoration-cream hover:text-cream"
                    >
                      Ennovate Lab
                    </a>
                    {paragraph.split("Ennovate Lab")[1]}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 pb-6">
            <div>
              <p className="text-sm text-neutral-400">Find me on:</p>
              <div className="mt-3 flex items-center gap-5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="text-neutral-300 transition hover:scale-110 hover:text-white"
                  >
                    {socialIcons[social.label]("h-5 w-5")}
                  </a>
                ))}
              </div>
            </div>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-light rounded-full px-6 py-2.5 text-sm font-medium">
              View Resume
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
