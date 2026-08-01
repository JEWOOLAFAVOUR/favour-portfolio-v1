import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6">
      <div className="mx-auto flex w-[88%] max-w-7xl items-center justify-between rounded-none border border-slate-200/80 bg-white/90 px-5 py-4 shadow-[0_0_0_1px_rgba(15,23,42,0.03)] backdrop-blur-xl sm:px-6 lg:px-8">
        <a
          href="#"
          className="font-display text-[0.82rem] font-semibold uppercase tracking-[0.35em] text-slate-950 transition-opacity hover:opacity-70"
        >
          Favour
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-[0.72rem] font-medium uppercase tracking-[0.28em] text-slate-600 transition-colors hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="font-display border border-slate-900 bg-slate-950 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white transition-colors duration-200 hover:bg-slate-800"
          >
            Let&apos;s Talk
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full border border-slate-200 p-2 text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-5 py-4 shadow-sm backdrop-blur md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-black"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-fit border border-slate-900 bg-slate-950 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white transition-colors duration-200 hover:bg-slate-800"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
