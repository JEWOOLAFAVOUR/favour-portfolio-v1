import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function formatNow(now: Date): string {
  const date = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return `${date}  •  ${time}`;
}

function ThemeToggle(): JSX.Element {
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    localStorage.getItem("theme") === "light" ? "light" : "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-nav text-neutral-300 shadow-lg shadow-black/20 backdrop-blur-xl transition hover:text-cream"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export default function TopBar(): JSX.Element {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 text-sm md:px-8">
      <span className="flex items-center gap-2 text-neutral-400">
        <span className="pulse-dot inline-block h-2.5 w-2.5 rounded-full bg-green-400" />
        Available for work
      </span>
      <div className="flex items-center gap-3">
        <span className="hidden text-neutral-300 sm:block">{formatNow(now)}</span>
        <ThemeToggle />
      </div>
    </div>
  );
}
