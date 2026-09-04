import { useEffect, useState } from "react";

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
      <span className="hidden text-neutral-300 sm:block">{formatNow(now)}</span>
    </div>
  );
}
