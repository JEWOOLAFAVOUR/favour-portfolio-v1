import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import IntroLoader from "./components/IntroLoader";

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false); // Disabled intro loader for now
  const contentRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  // Animate content on load
  useEffect(() => {
    if (!isLoading) {
      // Set initial states
      gsap.set([line1Ref.current, line2Ref.current], {
        yPercent: 100,
        opacity: 0,
      });
      gsap.set(badgeRef.current, {
        scale: 0,
        opacity: 0,
      });
      gsap.set([locationRef.current, descRef.current], {
        y: 30,
        opacity: 0,
      });

      // Animate name lines
      gsap.to(line1Ref.current, {
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
      });
      gsap.to(line2Ref.current, {
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      });

      // Animate badge
      gsap.to(badgeRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 1.2,
      });

      // Animate location and description
      gsap.to(locationRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1.5,
      });
      gsap.to(descRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1.8,
      });
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <IntroLoader onComplete={handleLoadComplete} />}

      <div className="min-h-screen bg-[#0a0a0a] overflow-hidden relative">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        {/* Main content */}
        <div
          ref={contentRef}
          className="relative z-10 min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20"
        >
          {/* Name Section */}
          <div className="mb-8">
            {/* Line 1: JEWOOLA */}
            <div className="overflow-hidden">
              <div
                ref={line1Ref}
                className="text-[12vw] md:text-[10vw] lg:text-[9vw] font-extrabold leading-[0.95] tracking-[-0.02em] text-white italic"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                JEWOOLA
              </div>
            </div>

            {/* Line 2: FAVOUR with badge */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="overflow-hidden">
                <div
                  ref={line2Ref}
                  className="text-[12vw] md:text-[10vw] lg:text-[9vw] font-extrabold leading-[0.95] tracking-[-0.02em] text-white italic"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  FAVOUR
                </div>
              </div>

              {/* Curved arrow and badge */}
              <div ref={badgeRef} className="flex items-center gap-2">
                {/* Curved arrow SVG */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="text-[#c4b5d4] -mr-1"
                >
                  <path
                    d="M8 32C8 20 16 12 28 12M28 12L22 6M28 12L22 18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Role badge */}
                <span
                  className="px-5 py-2.5 bg-[#c4b5d4]/90 text-[#1a1a1a] rounded-full text-sm md:text-base font-medium whitespace-nowrap"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Software Developer
                </span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div ref={locationRef} className="flex items-center gap-2 mb-8">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white/80"
            >
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 2V4M12 20V22M2 12H4M20 12H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span
              className="text-white/80 text-base md:text-lg"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Lagos, Nigeria.
            </span>
          </div>

          {/* Description */}
          <div
            ref={descRef}
            className="max-w-3xl space-y-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Welcome to my portfolio exhibition. In here, you'll find my
              process (how I solve real-world problems using code), testimonials
              from past and/or current clients and a gallery to some of my past
              work, projects and case studies.
            </p>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              I've always imagined my life to be a movie and so, I decided to
              make an exhibit of a portfolio. I hope you enjoy.
            </p>
          </div>
        </div>

        {/* Bottom center navigation */}
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div
            className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-2 border border-white/20"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <a
              href="#home"
              className="px-6 py-3 text-base md:text-lg font-medium bg-white text-[#1a1a1a] rounded-full transition-all"
            >
              Home
            </a>
            <a
              href="#experience"
              className="px-6 py-3 text-base md:text-lg font-medium text-white/70 hover:text-white transition-colors rounded-full"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="px-6 py-3 text-base md:text-lg font-medium text-white/70 hover:text-white transition-colors rounded-full"
            >
              Projects
            </a>
            <a
              href="#about"
              className="px-6 py-3 text-base md:text-lg font-medium text-white/70 hover:text-white transition-colors rounded-full"
            >
              About
            </a>
            <a
              href="#archive"
              className="px-6 py-3 text-base md:text-lg font-medium text-white/70 hover:text-white transition-colors rounded-full"
            >
              Archive
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
