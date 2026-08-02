export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0b0b0b] text-white"
    >
      <div className="mx-auto flex min-h-screen flex-col justify-between px-8 py-10 lg:px-12">
        {/* Top */}
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-6">
            <h2 className="text-6xl font-medium tracking-[-0.05em]">
              Let's build
              <br />
              something great.
            </h2>

            <a
              href="mailto:favour@example.com"
              className="mt-8 inline-block text-2xl text-zinc-300 underline underline-offset-4 transition-colors hover:text-white"
            >
              favour@example.com
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-5 text-[28px] lg:text-[18px]">
            <a
              href="#about"
              className="block transition-opacity hover:opacity-60"
            >
              About
            </a>

            <a
              href="#projects"
              className="block transition-opacity hover:opacity-60"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="block transition-opacity hover:opacity-60"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="block transition-opacity hover:opacity-60"
            >
              Contact
            </a>
          </div>

          {/* Socials */}
          <div className="lg:col-span-3 space-y-5 text-[28px] lg:text-[18px]">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="block transition-opacity hover:opacity-60"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="block transition-opacity hover:opacity-60"
            >
              LinkedIn
            </a>

            <a
              href="https://x.com/yourusername"
              target="_blank"
              className="block transition-opacity hover:opacity-60"
            >
              X (Twitter)
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              className="block transition-opacity hover:opacity-60"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Middle Accent */}
        <div className="flex justify-center py-14">
          <div className="h-5 w-5 rounded-full bg-[#ff5a1f]" />
        </div>

        {/* Huge Name */}
        <div className="overflow-hidden">
          <h1 className="select-none text-[110px] font-semibold uppercase leading-none tracking-[-0.08em] text-[#f5f3ee] sm:text-[170px] md:text-[220px] lg:text-[250px]">
            JEWOOLA FAVOUR
          </h1>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Jewoola Favour.</p>

          <p>
            Designed & Built by{" "}
            <span className="text-white">Jewoola Favour</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
