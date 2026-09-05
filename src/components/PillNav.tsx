import { useEffect, useState } from "react";

const links = [
  { label: "Projects", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function PillNav(): JSX.Element {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
      <ul className="flex items-center gap-1 rounded-full border border-line-strong bg-nav p-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl">
        {links.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] transition sm:px-4 sm:text-sm ${
                active === id ? "btn-light font-medium" : "text-neutral-300 hover:text-cream"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
