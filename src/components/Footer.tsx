import { profile, skillGroups, socials } from "../data/content";
import Reveal from "./Reveal";
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "./icons";

const socialIcons: Record<string, (className?: string) => JSX.Element> = {
  GitHub: (c) => <GithubIcon className={c} />,
  LinkedIn: (c) => <LinkedinIcon className={c} />,
  X: (c) => <XIcon className={c} />,
  Instagram: (c) => <InstagramIcon className={c} />,
};

/* Colorful circles scattered over the giant heading, like the reference footer. */
const floatingIcons = [
  { label: "LinkedIn", className: "-top-5 left-[8%] h-14 w-14 md:h-16 md:w-16", rotate: "-rotate-6" },
  { label: "Instagram", className: "top-1/2 left-[16%] h-12 w-12 md:h-14 md:w-14", rotate: "rotate-3" },
  { label: "GitHub", className: "-top-7 right-[38%] h-12 w-12 md:h-14 md:w-14", rotate: "rotate-6" },
  { label: "X", className: "bottom-0 right-[30%] h-14 w-14 md:h-16 md:w-16", rotate: "-rotate-3" },
];

export default function Footer(): JSX.Element {
  return (
    <footer id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-3xl px-6 pb-32 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <h2 className="text-lg font-medium text-cream">Tools & Workflow</h2>
        </Reveal>

        <div className="mt-6 space-y-6">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.label} delay={groupIndex * 80}>
              <p className="text-sm font-normal text-neutral-500">{group.label}</p>
              <div className="mt-2.5 flex flex-wrap gap-2.5">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-ink-card px-3.5 py-1.5 text-[13px] font-normal text-neutral-300 ring-1 ring-line transition hover:bg-[#2a2a2a]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="relative mt-16 select-none text-center">
            {floatingIcons.map((icon) => {
              const social = socials.find((s) => s.label === icon.label);
              if (!social) return null;
              return (
                <a
                  key={icon.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={icon.label}
                  className={`absolute z-10 flex items-center justify-center rounded-full shadow-xl shadow-black/40 transition hover:scale-110 ${icon.className} ${icon.rotate}`}
                  style={{ backgroundColor: social.color, color: social.fg }}
                >
                  {socialIcons[icon.label]("h-5 w-5")}
                </a>
              );
            })}
            <p className="text-[15vw] font-black leading-none tracking-tight text-cream md:text-7xl">
              LET&rsquo;S CONNECT
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 flex flex-col items-center gap-5">
            <a href={`mailto:${profile.email}`} className="btn-light rounded-full px-6 py-2.5 text-sm font-medium">
              Get in touch
            </a>
            <p className="text-xs font-normal text-neutral-500">
              © {new Date().getFullYear()} {profile.name}. Designed and built by {profile.firstName}.
              <br />
              Inspired by{" "}
              <a
                href="https://mercydesigns.framer.website/"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 underline decoration-neutral-600 underline-offset-2 transition hover:text-cream"
              >
                Mercy Asuquo
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
