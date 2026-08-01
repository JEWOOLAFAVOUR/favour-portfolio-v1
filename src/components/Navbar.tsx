import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 py-3 backdrop-blur-xl">
      <div className="mx-auto flex w-full items-center justify-between px-5 sm:px-6 lg:px-4">
        <div className="text-[30px] font-medium text-slate-950">
          Jewoola Favour
        </div>

        <div className="hidden items-center gap-0 md:flex">
          <a
            href="#work"
            className="rounded-full border border-gray-300 px-6 py-3 text-[15px] hover:border-black transition-colors"
          >
            Work
          </a>

          <a
            href="#experience"
            className="rounded-full border border-gray-300 px-6 py-3 text-[15px] hover:border-black transition-colors"
          >
            Experience
          </a>
          <a
            href="#resume"
            className="rounded-full border border-gray-300 px-6 py-3 text-[15px] hover:border-black transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="group relative flex h-12 w-[150px] items-center overflow-hidden rounded-full border border-slate-200 bg-white px-2 shadow-sm"
        >
          {/* Icon */}
          <span
            className="
              absolute left-2
              grid h-8 w-8 place-items-center
              rounded-full bg-[#e3e3de]
              transition-all duration-500 ease-in-out
              group-hover:translate-x-[98px]
            "
          >
            <Zap size={14} />
          </span>

          {/* Text */}
          <span
            className="
              absolute left-14
              text-sm font-semibold text-slate-900
              transition-all duration-500 ease-in-out
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
