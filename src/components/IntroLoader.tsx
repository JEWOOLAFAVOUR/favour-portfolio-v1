import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({
  onComplete,
}: IntroLoaderProps): JSX.Element {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the progress from 0 to 100
    const progressAnimation = gsap.to(
      { value: 0 },
      {
        value: 100,
        duration: 7,
        ease: "power2.inOut",
        onUpdate: function () {
          const currentProgress = Math.round(this.targets()[0].value);
          setProgress(currentProgress);
          // Sync panel width with progress
          if (panelRef.current) {
            gsap.set(panelRef.current, { width: `${currentProgress}%` });
          }
        },
        onComplete: () => {
          // After progress reaches 100, animate out
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power3.inOut",
            delay: 0.3,
            onComplete: onComplete,
          });
        },
      },
    );

    return () => {
      progressAnimation.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black overflow-hidden"
    >
      {/* Split panel that grows with progress */}
      <div
        ref={panelRef}
        className="absolute top-0 left-0 h-[12vh] bg-[#64B5F6] z-10"
        style={{ width: "0%" }}
      />

      {/* Progress counter at top right */}
      <div className="absolute top-[15vh] right-8 md:top-[16vh] md:right-12 lg:top-[14vh] lg:right-16">
        <span className="text-[100px] md:text-[150px] lg:text-[200px] font-bold leading-none tracking-tighter text-white">
          {progress}%
        </span>
      </div>
    </div>
  );
}
