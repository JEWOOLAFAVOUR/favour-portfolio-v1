import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 py-3 backdrop-blur-xl">
      <div className="mx-auto flex w-full items-center justify-between px-5 sm:px-6 lg:px-4">
        <div
          onClick={() => (window.location.href = "/")}
          className="cursor-pointer text-[30px] font-medium text-slate-950 transition-transform duration-300 ease-out hover:scale-[1.02]"
        >
          Jewoola Favour
        </div>
        <div className="hidden items-center gap-0 md:flex">
          <span className="nav-pill-drop nav-pill-drop-one nav-pill-delay-1 inline-flex">
            <a
              href="/about"
              className="rounded-full border-[1.5px] border-black bg-white px-6 py-3 text-[17px] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_7px_16px_rgba(15,23,42,0.14)]"
            >
              About
            </a>
          </span>
          <span className="nav-pill-drop nav-pill-drop-two nav-pill-delay-2 inline-flex">
            <a
              href="/work"
              className="rounded-full border-[1.5px] border-black bg-white px-6 py-3 text-[17px] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_7px_16px_rgba(15,23,42,0.14)]"
            >
              Projects
            </a>
          </span>
          <span className="nav-pill-drop nav-pill-drop-three nav-pill-delay-3 inline-flex">
            <a
              href="/resume.pdf"
              className="rounded-full border-[1.5px] border-black bg-white px-6 py-3 text-[17px] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_7px_16px_rgba(15,23,42,0.14)]"
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume
            </a>
          </span>
          <span className="nav-pill-drop nav-pill-drop-four nav-pill-delay-4 inline-flex">
            <a
              href="/experience"
              className="rounded-full border-[1.5px] border-black bg-white px-6 py-3 text-[17px] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_7px_16px_rgba(15,23,42,0.14)]"
            >
              Experience
            </a>
          </span>
        </div>
        {/* Contact Button */}
        <a
          href="/contact"
          className="
    group relative flex h-12 w-[130px]
    items-center overflow-hidden
    rounded-full

    border border-zinc-200
    bg-white/90
    backdrop-blur-xl

    px-2

    shadow-[0_1px_3px_rgba(0,0,0,0.08)]

    transition-all duration-500 ease-out

    hover:scale-[1.02]
    hover:-translate-y-0.5
    hover:bg-[#f5f5f7]
    hover:border-zinc-300
    hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]
  "
        >
          {/* Moving Icon */}
          <span
            className="
      absolute left-2
      grid h-8 w-8 place-items-center
      rounded-full

      bg-[#e8e8ed]
      text-slate-900

      transition-all duration-500 ease-out

      group-hover:translate-x-[78px]
      group-hover:bg-white
      group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
    "
          >
            <Zap size={14} strokeWidth={2.2} />
          </span>

          {/* Moving Text */}
          <span
            className="
      absolute left-14

      text-sm
      font-medium
      tracking-tight
      text-slate-900

      transition-all duration-500 ease-out

      group-hover:-translate-x-12
    "
          >
            Contact
          </span>
        </a>
      </div>
    </header>
  );
}
