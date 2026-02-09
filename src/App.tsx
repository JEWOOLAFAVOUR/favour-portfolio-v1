import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import IntroLoader from "./components/IntroLoader";

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const textRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  // Split text into individual letters for animation
  const text = "Jewoola Favour";
  const letters = text.split("");

  // Handle mouse move for squeeze/distortion effect
  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const letter = lettersRef.current[index];
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

  const handleMouseLeave = (index: number) => {
    const letter = lettersRef.current[index];
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

  // Animate letters on load - drop one at a time
  useEffect(() => {
    if (!isLoading && lettersRef.current.length > 0) {
      // Set initial state
      gsap.set(lettersRef.current, {
        y: -150,
        opacity: 0,
      });

      // Animate each letter dropping one at a time
      gsap.to(lettersRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "bounce.out",
        stagger: 0.08,
        delay: 0.3,
      });
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <IntroLoader onComplete={handleLoadComplete} />}

      <div className="min-h-screen bg-[#e8e8e8] overflow-hidden relative">
        {/* Left sidebar line */}
        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-[1px] bg-black/20 pointer-events-none z-20" />

        {/* Top horizontal line */}
        <div className="absolute left-0 right-0 top-16 md:top-20 h-[1px] bg-black/20 pointer-events-none z-20" />

        {/* Intersection dot */}
        <div className="absolute left-6 md:left-10 top-16 md:top-20 w-2 h-2 rounded-full bg-black/40 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30" />

        <div
          ref={textRef}
          className="relative w-full h-[40vh] flex items-center justify-center pt-24 md:pt-28 z-10 overflow-hidden"
        >
          {/* Main text container */}
          <h1
            className="text-[8vw] md:text-[9vw] lg:text-[10vw] font-bold leading-[0.9] tracking-[-0.03em] text-[#1a1a1a] cursor-default select-none whitespace-nowrap w-full text-center"
            style={{ fontFamily: "'Neue Haas Grotesk Display', sans-serif" }}
          >
            {letters.map((letter, index) => (
              <span
                key={index}
                ref={(el) => (lettersRef.current[index] = el)}
                className="inline-block"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{
                  display: letter === " " ? "inline" : "inline-block",
                  minWidth: letter === " " ? "0.3em" : "auto",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </>
  );
}
