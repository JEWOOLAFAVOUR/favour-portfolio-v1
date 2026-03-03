import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import IntroLoader from "./components/IntroLoader";

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false); // Disabled intro loader for now
  const textRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<(HTMLSpanElement | null)[]>([]);
  const line2Ref = useRef<(HTMLSpanElement | null)[]>([]);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  // Split text into two lines
  const line1 = "Jewoola";
  const line2 = "Favour";
  const letters1 = line1.split("");
  const letters2 = line2.split("");

  // Handle mouse move for squeeze/distortion effect
  const handleMouseMove = (e: React.MouseEvent, ref: React.RefObject<(HTMLSpanElement | null)[]>, index: number) => {
    const letter = ref.current?.[index];
    if (!letter) return;

    const rect = letter.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / 8;
    const deltaY = (e.clientY - centerY) / 8;

    // Calculate distance for squeeze intensity
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const squeeze = Math.min(distance / 20, 0.3);

    gsap.to(letter, {
      x: deltaX * 1.5,
      y: deltaY * 1.5,
      scaleX: 1 - squeeze,
      scaleY: 1 + squeeze * 0.5,
      skewX: deltaX * 0.8,
      skewY: deltaY * 0.4,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (ref: React.RefObject<(HTMLSpanElement | null)[]>, index: number) => {
    const letter = ref.current?.[index];
    if (!letter) return;

    gsap.to(letter, {
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      skewX: 0,
      skewY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  // Animate letters on load - reveal from bottom (masked)
  useEffect(() => {
    if (!isLoading && line1Ref.current.length > 0) {
      // Set initial state - letters start below the clip mask
      gsap.set([...line1Ref.current, ...line2Ref.current], {
        yPercent: 100,
      });

      // Set tagline initial state
      gsap.set(taglineRef.current, {
        yPercent: 100,
      });

      // Animate all letters rising up together at the same time - slower
      gsap.to([...line1Ref.current, ...line2Ref.current], {
        yPercent: 0,
        duration: 2,
        ease: "power2.out",
        delay: 0.3,
      });

      // Animate tagline after letters
      gsap.to(taglineRef.current, {
        yPercent: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 1.5,
      });
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <IntroLoader onComplete={handleLoadComplete} />}

      <div className="min-h-screen bg-[#f2f0f9] overflow-hidden relative">
        {/* Resume link at top right */}
        <a 
          href="/resume.pdf" 
          target="_blank"
          className="absolute top-4 right-10 md:right-16 text-sm md:text-base font-medium text-[#1a1a1a] hover:opacity-70 transition-opacity z-40 underline underline-offset-4"
          style={{ fontFamily: "'Neue Haas Grotesk Display', sans-serif" }}
        >
          Resume
        </a>

        {/* Left sidebar line */}
        <div className="absolute left-10 md:left-16 top-0 bottom-0 w-[1px] bg-black/20 pointer-events-none z-20" />

        {/* Right sidebar line */}
        <div className="absolute right-10 md:right-16 top-0 bottom-0 w-[1px] bg-black/20 pointer-events-none z-20" />

        {/* Top horizontal line */}
        <div className="absolute left-0 right-0 top-10 md:top-16 h-[1px] bg-black/20 pointer-events-none z-20" />

        {/* Intersection dot - left */}
        <div className="absolute left-10 md:left-16 top-10 md:top-16 w-2 h-2 rounded-full bg-black/40 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30" />

        {/* Intersection dot - right */}
        <div className="absolute right-10 md:right-16 top-10 md:top-16 w-2 h-2 rounded-full bg-black/40 translate-x-1/2 -translate-y-1/2 pointer-events-none z-30" />

        {/* Bottom center navigation */}
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-1 bg-[#1a1a1a] rounded-full px-2 py-2">
            <a href="#home" className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full">Home</a>
            <a href="#experience" className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full">Experience</a>
            <a href="#projects" className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full">Projects</a>
            <a href="#about" className="px-4 py-2 text-sm font-medium bg-white text-[#1a1a1a] rounded-full">About</a>
            <a href="#archive" className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full">Archive</a>
          </div>
        </nav>

        <div
          ref={textRef}
          className="relative w-full min-h-[50vh] flex flex-col items-start justify-center pt-24 md:pt-32 pl-14 md:pl-24 z-10"
        >
          {/* Main text container */}
          <h1
            className="text-[12vw] md:text-[11vw] lg:text-[10vw] font-bold leading-[0.95] tracking-[-0.04em] text-[#1a1a1a] cursor-default select-none"
            style={{ fontFamily: "'Neue Haas Grotesk Display', sans-serif" }}
          >
            {letters.map((letter, index) => (
              <span
                key={index}
                className="inline-block overflow-hidden align-bottom"
                style={{
                  display: letter === " " ? "inline" : "inline-block",
                  minWidth: letter === " " ? "0.25em" : "auto",
                  marginRight: "-0.02em",
                }}
              >
                <span
                  ref={(el) => (lettersRef.current[index] = el)}
                  className="inline-block"
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              </span>
            ))}
          </h1>

          {/* Tagline */}
          <div className="overflow-hidden mt-6">
            <p
              ref={taglineRef}
              className="text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] font-medium tracking-[0.15em] text-[#4a4a4a] uppercase"
              style={{ fontFamily: "'Neue Haas Grotesk Display', sans-serif" }}
            >
              Full-Stack Software Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
