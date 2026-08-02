export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative min-h-[85vh] overflow-hidden bg-[#0b0b0b] text-white"
    >
      <div className="mx-auto flex min-h-[90vh] flex-col justify-between px-8 pb-4 pt-14 lg:px-4 lg:pb-4 lg:pt-16">
        {/* Top */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <h2 className="text-[28px] font-normal leading-[0.95] tracking-[-0.05em] lg:text-[36px]">
              Let's build
              <br />
              something great.
            </h2>

            <a
              href="mailto:jewoolafavour2020@gmail.com"
              className="mt-6 inline-block text-[16px] font-normal text-zinc-400 underline underline-offset-4 transition-colors duration-300 hover:text-white"
            >
              jewoolafavour2020@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1 lg:col-start-10">
            <div className="space-y-1.5 text-[14px] font-light text-white">
              <a
                href="#about"
                className="block transition-opacity duration-300 hover:opacity-60 hover:underline hover:decoration-white hover:underline-offset-4"
              >
                About
              </a>

              <a
                href="#projects"
                className="block transition-opacity duration-300 hover:opacity-60 hover:underline hover:decoration-white hover:underline-offset-4"
              >
                Projects
              </a>

              <a
                href="#experience"
                className="block transition-opacity duration-300 hover:opacity-60 hover:underline hover:decoration-white hover:underline-offset-4"
              >
                Experience
              </a>

              <a
                href="#contact"
                className="block transition-opacity duration-300 hover:opacity-60 hover:underline hover:decoration-white hover:underline-offset-4"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="lg:col-span-2 lg:col-start-11 lg:pl-3">
            <div className="space-y-1.5 text-[14px] font-light text-white">
              <a
                href="https://github.com/JEWOOLAFAVOUR"
                target="_blank"
                rel="noreferrer"
                className="block transition-opacity duration-300 hover:opacity-60 hover:underline hover:decoration-white hover:underline-offset-4"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jewoola-favour-5b7607217"
                target="_blank"
                rel="noreferrer"
                className="block transition-opacity duration-300 hover:opacity-60 hover:underline hover:decoration-white hover:underline-offset-4"
              >
                LinkedIn
              </a>

              <a
                href="https://x.com/favourlop"
                target="_blank"
                rel="noreferrer"
                className="block transition-opacity duration-300 hover:opacity-60 hover:underline hover:decoration-white hover:underline-offset-4"
              >
                X (Twitter)
              </a>

              <a
                href="https://www.instagram.com/jewoolafavourgbemi/"
                target="_blank"
                rel="noreferrer"
                className="block transition-opacity duration-300 hover:opacity-60 hover:underline hover:decoration-white hover:underline-offset-4"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Huge Name */}
        <div className="mt-12 w-full select-none">
          <svg
            viewBox="0 0 1200 220"
            className="h-auto w-full"
            aria-label="Jewoola Favour"
          >
            <text
              x="0"
              y="180"
              textLength="1200"
              lengthAdjust="spacingAndGlyphs"
              fontSize="180"
              className="fill-[#f5f3ee] font-bold uppercase tracking-[-0.02em]"
              style={{ fontFamily: "inherit" }}
            >
              JEWOOLA FAVOUR
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
