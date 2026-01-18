import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-navy antialiased selection:bg-teal/30 selection:text-teal">
      {/* Mouse follower gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-10 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Sidebar - Sticky Header */}
          <Navigation />

          {/* Right Content - Scrollable */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />

            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-slate sm:pb-0">
              <p className="mb-4">
                Designed & Built by Jewoola Favour
              </p>
              <p className="mb-4">
                Inspired by{" "}
                <a href="https://brittanychiang.com/" className="font-medium text-slate-lightest hover:text-teal" target="_blank" rel="noreferrer">
                  Brittany Chiang
                </a>
              </p>
              <p>
                © 2026 Jewoola Favour. All Rights Reserved.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
