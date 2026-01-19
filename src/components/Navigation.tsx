import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import type { NavLink, SocialLink } from "../types";

export default function Navigation(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>("about");

  const navLinks: NavLink[] = [
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "EXPERIENCE", href: "#experience", id: "experience" },
    { name: "PROJECTS", href: "#projects", id: "projects" },
  ];

  const socialLinks: SocialLink[] = [
    { name: "GitHub", href: "https://github.com/JEWOOLAFAVOUR", icon: Github },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/jewoolafavour",
      icon: Linkedin,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@lacademos982",
      icon: Youtube,
    },
    { name: "Twitter", href: "https://x.com/favourlop", icon: Twitter },
    {
      name: "Instagram",
      href: "https://www.instagram.com/jewoolafavourgbemi/",
      icon: Instagram,
    },
  ];

  useEffect(() => {
    const handleScroll = (): void => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(navLinks[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-lightest sm:text-5xl">
          <a href="/">Jewoola Favour</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-lightest sm:text-xl">
          Full-Stack Software Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build end-to-end mobile and web products, handling frontend and
          backend, and turning real problems into simple, reliable software
          people actually use.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`group flex items-center py-3 ${
                    activeSection === link.id ? "active" : ""
                  }`}
                >
                  <span
                    className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-lightest group-focus-visible:w-16 group-focus-visible:bg-slate-lightest motion-reduce:transition-none ${
                      activeSection === link.id
                        ? "w-16 bg-slate-lightest"
                        : "w-8 bg-slate"
                    }`}
                  ></span>
                  <span
                    className={`text-xs font-bold uppercase tracking-widest group-hover:text-slate-lightest group-focus-visible:text-slate-lightest ${
                      activeSection === link.id
                        ? "text-slate-lightest"
                        : "text-slate"
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul
        className="ml-1 mt-8 flex items-center gap-3"
        aria-label="Social media"
      >
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.name} className="shrink-0">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="block hover:text-slate-lightest transition-colors"
                title={link.name}
              >
                <span className="sr-only">{link.name}</span>
                <Icon size={24} strokeWidth={1.5} />
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
